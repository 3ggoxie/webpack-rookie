//剩余参数是置于最末函数形参之前，用于获取剩下的所有参数
export function sum(...arrs) {
  return arrs.reduce((a, c) => a + c);
}

//arguments是伪数组，剩余参数是真数组，有数组的所有方法
//箭头函数里没有arguments 综上，最好使用剩余参数
export default function ultraSum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  console.log(sum);
}
