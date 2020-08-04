# React Typical

> Typist library made in React with TypeScript support by [@deadcoder0904](https://twitter.com/deadcoder0904)

## Highlights

- **Written in TypeScript**
- **Zero dependencies**
- **MIT licensed**
- **Emoji support**
- **Pausing**: pause between steps
- **Looping**: easily loop from any point
- **Humanity**: slightly varied typing speed

## Install

```bash
$ npm install @deadcoder0904/react-typical
```

## Usage

### Basic

```tsx
import React from 'react'
import { ReactTypical } from '@deadcoder0904/react-typical'

const Index = () => (
	<ReactTypical
		steps={['Hello', 'React Typical']}
		wrapper="p"
	/>
)
```

### Emoji Support

```tsx
import React from 'react'
import { ReactTypical } from '@deadcoder0904/react-typical'

const Index = () => (
	<ReactTypical
		steps={['💩',1000, '🙈',1000,'💖',1000,'🚀',1000,'👨‍🎤',1000]}
		wrapper="p"
	/>
)
```

### Pausing

In order to pause at any point, pass a number of milliseconds to `steps` prop to pause.

```tsx
import React from 'react'
import { ReactTypical } from '@deadcoder0904/react-typical'

const Index = () => (
	<ReactTypical
		steps={['Hello', 1000, 'React Typical', 2000]}
		wrapper="p"
	/>
)
```

### Looping

In order to loop, just pass a number to `loop` prop, for example, if you want to loop 3 times.

```tsx
import React from 'react'
import { ReactTypical } from '@deadcoder0904/react-typical'

const Index = () => (
	<ReactTypical
		steps={['Hello', 1000, 'React Typical', 2000]}
		loop={3}
		wrapper="p"
	/>
)
```

Or pass `Infinity` to loop infinitely.

```tsx
import React from 'react'
import { ReactTypical } from '@deadcoder0904/react-typical'

const Index = () => (
	<ReactTypical
		steps={['Hello', 1000, 'React Typical', 2000]}
		loop={Infinity}
		wrapper="p"
	/>
)
```

## API

| property  | required | type   | example                                 |
| --------- | -------- | ------ | --------------------------------------- |
| `steps`   | yes      | []     | `['Hello', 1000, 'React Typical', 500]` |
| `wrapper` | no       | string | `'p'` or `'div'`                        |
| `loop`    | no       | number | `3` or `Infinity`                       |

## Motivation & Inspiration

I wanted to use a typist library in React with TypeScript but couldn't find any. I found out there was a React Typist library known as [React Typical](https://github.com/catalinmiron/react-typical/) which used [@camwiegert/typical](https://github.com/camwiegert/typical) but both libraries weren't written in TypeScript. So I made this library which just uses the exact same code but in TypeScript & it was too much hassle to convert it into TypeScript. 10/10 wouldn't recommend.
