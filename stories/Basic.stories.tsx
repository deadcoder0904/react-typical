import React from 'react';
import { ReactTypical } from '../src';
import { styles } from './styles';

export default {
  title: 'Basic',
};

export const Default = () => (
  <ReactTypical
    style={styles}
    steps={[
      'This',
      1000,
      'will',
      1000,
      'loop',
      1000,
      'only',
      1000,
      'once',
      1000,
      'See? Told yaa!!!',
    ]}
  />
);
