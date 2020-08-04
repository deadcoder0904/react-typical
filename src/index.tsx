import React from 'react';
import { type, type as loopedType } from './typical';
import styles from './styles.module.css';

export type Props = {
  steps: Array<any>;
  loop?: number;
  className?: string;
  wrapper?: keyof JSX.IntrinsicElements;
} & React.HTMLAttributes<HTMLOrSVGElement>;

const Typical = ({
  steps,
  loop,
  className,
  wrapper: Wrapper = 'p',
  ...restProps
}: Props) => {
  const typicalRef: React.RefObject<HTMLElement> = React.useRef<HTMLElement>(
    null
  );
  const classNames: string[] = [styles.typicalWrapper];

  if (className) {
    classNames.unshift(className);
  }

  const typicalStyles: string = classNames.join(' ');

  React.useEffect(() => {
    if (loop === Infinity) {
      type(typicalRef.current as HTMLElement, ...steps, loopedType);
    } else if (typeof loop === 'number') {
      type(
        typicalRef.current as HTMLElement,
        ...Array(loop)
          .fill(steps)
          .flat()
      );
    } else {
      type(typicalRef.current as HTMLElement, ...steps);
    }
  }, [typicalRef, loop, steps]);

  return React.createElement(Wrapper, {
    ref: typicalRef,
    className: typicalStyles,
    ...restProps,
  });
};

export const ReactTypical = React.memo(Typical);
