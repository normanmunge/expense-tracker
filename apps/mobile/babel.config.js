module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        '@tamagui/babel-plugin',
        {
          components: ['tamagui', '@expense-app/ui'],
          config: '@expense-app/ui/src/tamagui.config.ts',
          logTimings: true,
        },
      ],
      'react-native-reanimated/plugin',
      '@babel/plugin-transform-runtime',
    ],
  };
};
