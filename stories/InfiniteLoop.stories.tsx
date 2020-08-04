import React from 'react';
import { ReactTypical } from '../src';
import { styles } from './styles';

export default {
  title: 'Infinite Loop',
};

export const Default = () => (
  <ReactTypical
    style={styles}
    steps={[
      'This',
      1000,
      'will',
      1000,
      'keep',
      1000,
      'on',
      1000,
      'looping',
      1000,
      'infinitely',
      1000,
    ]}
    loop={Infinity}
  />
);
