export default function rforEach() {
  const arr = ["black", "red", "blue"];
  //forEach 只遍历没有返回值，适合用于对象数组
  arr.forEach((item, index, arr) => {
    console.log(item);
    console.log(index);
    console.log(arr);
  });
}
