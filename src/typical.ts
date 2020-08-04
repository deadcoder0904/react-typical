export async function type(node: HTMLElement, ...args: any[]): Promise<void> {
  for (const arg of args) {
    switch (typeof arg) {
      case 'string': {
        await edit(node, arg);
        break;
      }
      case 'number': {
        await wait(arg);
        break;
      }
      case 'function': {
        await arg(node, ...args);
        break;
      }
      default: {
        await arg;
      }
    }
  }
}

async function edit(node: HTMLElement, text: string): Promise<void> {
  const overlap = getOverlap(node.textContent, text);
  await perform(node, [
    ...deleter(node.textContent, overlap),
    ...writer(text, overlap),
  ]);
}

async function wait(ms: number): Promise<void> {
  await new Promise(resolve => setTimeout(resolve, ms));
}

async function perform(
  node: HTMLElement,
  edits: Iterable<string | null>,
  speed: number = 60
): Promise<void> {
  for (const op of editor(edits)) {
    op(node);
    await wait(speed + speed * (Math.random() - 0.5));
  }
}

export function* editor(
  edits: Iterable<string | null>
): Generator<(node: any) => number, void, unknown> {
  for (const edit of edits) {
    yield node => requestAnimationFrame(() => (node.textContent = edit));
  }
}

export function* writer(
  [...text]: string,
  startIndex: number = 0,
  endIndex: number = text.length
): Generator<string, void, unknown> {
  while (startIndex < endIndex) {
    yield text.slice(0, ++startIndex).join('');
  }
}

export function* deleter(
  text: string | null,
  startIndex: number = 0
): Generator<string, void, unknown> {
  if (text === null) {
    yield '';
    return;
  }
  const [...chars] = text;

  let endIndex = chars.length;
  while (endIndex > startIndex) {
    yield chars.slice(0, --endIndex).join('');
  }
}

export function getOverlap(start: string | null, [...end]: string): number {
  if (start === null) return 0;
  return [...start, NaN].findIndex((char, i) => end[i] !== char);
}
