const path = require('path');

module.exports = {
  stories: ['../stories/**/*.stories.(ts|tsx)'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-backgrounds/register',
  ],
  webpackFinal: async config => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
          options: {
            transpileOnly: true,
          },
        },
        {
          loader: require.resolve('react-docgen-typescript-loader'),
        },
      ],
    });

    // Remove the existing css rule
    config.module.rules = config.module.rules.filter(
      f => f.test.toString() !== '/\\.css$/'
    );

    config.module.rules.push({
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
      include: path.resolve(__dirname, '../src'),
    });

    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  },
};
