const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/01 - TS - Tipos basicos/aula 18 - webpack/index.ts',
  //   arquivo de entrada
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        // testando arquivos ts ou tsx
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: { configFile: 'tsconfig.frontend.json' },
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    // resolucoes de modulo
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'frontend', 'assets', 'js'),
  },
  devtool: 'source-map',
  //   mapear os arquivos js gerados pelo webpack para o ts
};
