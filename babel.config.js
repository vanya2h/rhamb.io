module.exports = (api) => {
  api.cache(true);

  return {
    presets: [
      [
        '@babel/preset-env',
        {
          modules: false,
        },
      ],
      '@babel/preset-react',
      '@babel/preset-flow',
    ],
    plugins: [
      ['@babel/plugin-proposal-decorators', { legacy: true, loose: true }],
      ['@babel/plugin-transform-regenerator', { asyncGenerators: true }],
      '@babel/plugin-transform-runtime',
      '@babel/plugin-syntax-object-rest-spread',
      '@babel/plugin-proposal-object-rest-spread',
      ['@babel/plugin-syntax-class-properties', { loose: true }],
      ['@babel/plugin-proposal-class-properties', { loose: true }],
    ],
  };
};
