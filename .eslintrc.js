module.exports = {
  // 继承一些推荐的配置和规则集
  extends: ["eslint:recommended"],
  // 解析器选项，定义如何解析不同的 ECMAScript 版本和模块
  parserOptions: {
    ecmaVersion: 6,
    sourceType: "module",
  },

  // 自定义的规则配置（当前为空，但可以添加自定义规则）
  rules: {
    "no-var": 2, //不能使用var定义变量
    "no-unused-vars": 0,
  },
  env: {
    node: true, //启用node中的全局变量
    browser: true, //启用浏览器中的全局变量
  },
};
