import React from 'react';
import { ReactTypical } from '../src';
import { styles } from './styles';

export default {
  title: 'Emoji',
};

export const Default = () => (
  <ReactTypical
    style={styles}
    steps={[
      '💩 🐒 🐵',
      2000,
      '🙈 🌱 🌴',
      2000,
      '😍 💖 ✨',
      2000,
      '🤖 🚀 💠',
      2000,
      '🚴‍♂️ 👨‍🎤 😜',
      2000,
    ]}
  />
);
