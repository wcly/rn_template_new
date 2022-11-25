module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    // 路径别名解析
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@': './src',
          '@screens': './src/screens',
          '@components': './src/components',
          '@utils': './src/utils',
          '@services': './src/services',
        },
      },
    ],
  ],
};
