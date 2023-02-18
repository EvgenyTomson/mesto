const path = require('path'); // подключаем path к конфигу вебпак
const HtmlWebpackPlugin = require('html-webpack-plugin'); // подключите плагин HtmlWebpackPlugin
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); // подключили плагин CleanWebpackPlugin
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); // подключите к проекту mini-css-extract-plugin

module.exports = {
  entry: { main: './src/pages/index.js' },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
    publicPath: ''
  },
  devtool: 'source-map',
  mode: 'development', // добавили режим разработчика
  devServer: {
    static: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
    compress: true, // это ускорит загрузку в режиме разработки
    port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт
    open: true // сайт будет открываться сам при запуске npm run dev
  },
  module: {
    rules: [ // rules — это массив правил
      // добавляем в него объект правил для babel
      {
        // регулярное выражение, которое ищет все js файлы
        test: /\.js$/,
        use: 'babel-loader', // при обработке этих файлов нужно использовать babel-loader
        exclude: '/node_modules/' // исключаем папку node_modules
      },
        // добавим правило для обработки файлов
      {
        // регулярное выражение, которое ищет все файлы с такими расширениями
        test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource'
      },
      {
        // применять это правило только к CSS-файлам
        test: /\.css$/,
        // при обработке этих файлов нужно использовать MiniCssExtractPlugin.loader и css-loader
        use: [MiniCssExtractPlugin.loader, {
          loader: 'css-loader',
          // добавим объект options
          options: { importLoaders: 1 } // значение 1, если в css исползуется @import
        },
        // Добавим postcss-loader
        'postcss-loader']
      },
      ]
  },
  plugins: [  // добавляем массив плагинов
    new HtmlWebpackPlugin({
      template: './src/index.html', // путь к файлу index.html
      favicon: './src/favicon.ico'
    }),
    new CleanWebpackPlugin(), // плагин будет каждый раз при сборке проекта удалять содержимое папки dist
    new MiniCssExtractPlugin() // подключение плагина для объединения файлов
  ]
}
