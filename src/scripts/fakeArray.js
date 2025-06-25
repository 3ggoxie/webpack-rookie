//伪数组转真数组
export default function fakeArr() {
  const f = arguments;
  console.log(f);
  //Array 的静态方法from
  //   const r = Array.from(f);
  //   console.log(r);
  //   r.pop();
  //   console.log(r);
  //剩余参数 + 解构
  const r = [...f];
  r.pop();
  console.log(r);
}
