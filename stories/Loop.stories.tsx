import React from 'react';
import { ReactTypical } from '../src';
import { styles } from './styles';

export default {
  title: 'Loop',
};

export const Default = () => (
  <ReactTypical
    style={styles}
    steps={['This', 1000, 'will', 1000, 'loop', 1000, '3', 1000, 'times', 1000]}
    loop={3}
    wrapper="p"
  />
);
