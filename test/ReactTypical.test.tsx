import React from 'react';
import * as ReactDOM from 'react-dom';
import { Default as ReactTypical } from '../stories/Basic.stories';

describe('ReactTypical', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ReactTypical />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
