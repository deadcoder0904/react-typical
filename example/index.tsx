import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ReactTypical } from '../.';
import '../dist/styles.min.css';

const App = () => {
  const hypeText = ['Creator', 'Entrepreneur', 'Doer', 'Lone Wolf'];
  return (
    <>
      <ReactTypical
        style={{
          color: 'rebeccapurple',
          fontWeight: 'bolder',
          fontFamily: `system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"`,
          fontSize: 48,
        }}
        steps={hypeText.flatMap(hype => [hype, 5000])}
        loop={Infinity}
      />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
