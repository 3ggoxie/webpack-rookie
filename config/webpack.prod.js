const path = require("path"); //node.js核心模块，专门用来处理路径问题
const ESLintPlugin = require("eslint-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  //入口
  entry: "./src/main.js",
  // 出口,所有文件的输出路径
  //__dirname是 node.js 的变量，代表当前文件所在的文件夹目录
  output: {
    path: path.resolve(__dirname, "../dist"), //绝对路径
    //入口文件打包输出文件名
    filename: "static/js/main.js",
    //自动清空上次打包内容：打包前清空整个path目录，再执行打包
    clean: true,
  },
  // 加载器
  module: {
    rules: [
      //loader的配置
      {
        test: /\.css$/i, //检测.css文件
        //执行顺序，从右到左（从下到上）
        use: [
          "style-loader", //将js中的css通过创建style属性的方式添加到html中
          "css-loader", //将css资源编译成commonjs的模块到js中
        ],
      },
      {
        test: /\.less$/i,
        //loader:"xxx",//只能使用一个loader
        use: [
          "style-loader",
          "css-loader",
          "less-loader", //将less编译成css
        ], //use可以使用多个loader
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader", // 将 Sass 编译成 CSS
        ],
      },
      {
        test: /\.styl$/i,
        use: [
          "style-loader",
          "css-loader",
          "stylus-loader", // 将 Stylus 文件编译为 CSS
        ],
      },
      {
        test: /\.(png|jpe?g|gif|webp|jfif|svg)$/i,
        type: "asset",
        parser: {
          dataUrlCondition: {
            //小于60kb的图片转base64
            //特点：减少请求数量，但体积会大一点
            maxSize: 60 * 1024, // 60kb
          },
        },
        generator: {
          //输出图片名称
          //[hash:10] hash值取前10位
          filename: "static/images/[hash:10][ext][query]",
        },
      },
      {
        test: /\.(woff2?|ttf|mp4|mp3|avi)$/i,
        type: "asset/resource",
        generator: {
          //输出名称
          filename: "static/media/[hash:10][ext][query]",
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/, //排除node module下的文件 不然太慢
        loader: "babel-loader",
        // options: {
        //   presets: ["@babel/preset-env"],
        // },
      },
    ],
  },
  // 插件
  plugins: [
    //plugin的配置
    new ESLintPlugin({
      //检测哪些文件
      context: path.resolve(__dirname, "../src"),
    }),
    new HtmlWebpackPlugin({
      //以public/index.html为模板创建新的html文件
      //新文件特点：1.结构和原来一致 2.自动引入打包输出的资源
      template: path.resolve(__dirname, "../public/index.html"),
    }),
  ],
  // 模式
  mode: "production",
};
