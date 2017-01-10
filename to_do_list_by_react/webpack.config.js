module.exports = {
  devtool: 'eval-source-map', //配置生成Source Maps，选择合适的选项

  entry: __dirname + "/app/main.js", //已多次提及的唯一入口文件
  output: {
    path: __dirname + "/public", //打包后的文件存放的地方
    filename: "bundle.js" //打包后输出文件的文件名
  },

  module: {
    loaders: [{
      test: /\.json$/,
      loader: "json" // 在配置文件里添加 JSON loader
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, { //添加对样式表的处理
      test: /\.css$/, //下面感叹号 ! 的作用在于使同一文件能够使用不同类型的loader
      loader: 'style!css?modules!postcss' //跟之前相比就在后面加上了?modules
        //新建一个postcss关键字，
    }, {
      test: /\.(jpg|png)$/,
      loader: "url?limit=8192"
    }, {
      test: /\.scss$/,
      loader: "style!css!sass"
    }]
  },

  postcss: [
    require('autoprefixer') //调用autoprefixer插件
  ],

  devServer: {
    port: "8881", //默认为 8080
    contentBase: "./public", //本地服务器所加载的页面所在的目录
    colors: true, //终端中输出结果为彩色
    historyApiFallback: true, //不跳转
    inline: true //实时刷新
  }
};