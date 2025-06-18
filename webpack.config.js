const path = require("path"); //node.js核心模块，专门用来处理路径问题

module.exports = {
  //入口
  entry: "./src/main.js",
  // 出口
  //__dirname是 node.js 的变量，代表当前文件所在的文件夹目录
  output: {
    path: path.resolve(__dirname, "dist"), //绝对路径
    filename: "main.js",
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
    ],
  },
  // 插件
  plugins: [
    //plugin的配置
  ],

  // 模式
  mode: "development",
};
