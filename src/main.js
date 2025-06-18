import count from "./scripts/count";
import sum from "./scripts/sum";
//想要webpack打包，必须引入该资源
import "./styles/index.css";
import "./styles/index.less";
import "./styles/index.scss";
import "./styles/index.sass";

console.log(count(2, 1));
console.log(sum(1, 2, 3, 4));
