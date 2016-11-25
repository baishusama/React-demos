module.exports = {
    devtool: 'eval-source-map',//在开发阶段这是一个非常好的选项 //配置生成Source Maps，需要选择合适的选项

    entry:  __dirname + "/app/main.js",//已多次提及的唯一入口文件
    output: {
        path: __dirname + "/public",//打包后的文件存放的地方
        filename: "bundle.js"//打包后输出文件的文件名
    },

    module: {//在配置文件里添加JSON loader
        loaders: [// !! loaders
            {
                test: /\.json$/,
                loader: "json"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,//屏蔽不需要处理的文件
                loader: 'babel',// !!
                /*query: {
                    preset: ['es2015', 'react']
                }*/
            },
            {//添加对样式表的处理
                test: /\.css$/,//下面感叹号 ! 的作用在于使同一文件能够使用不同类型的loader
                loader: 'style!css?modules!postcss'//跟之前相比就在后面加上了?modules
                //新建一个postcss关键字，
            }
        ]
    },

    postcss: [
        require('autoprefixer')//调用autoprefixer插件
    ],

    /*plugins: [
        new webpack.BannerPlugin("Copyright Imo Proj.")//在这个数组中new一个就可以了
    ],*/

    devServer: {//通过 http://localhost:8233/webpack-dev-server/ 访问www！
        port: "8233",//默认为 8080
        contentBase: "./public",//本地服务器所加载的页面所在的目录
        colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转
        inline: true//实时刷新
    }
};//“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。