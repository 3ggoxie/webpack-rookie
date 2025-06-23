export default function logCountClosure() {
  let i = 0;
  return function fn() {
    console.log(`被调用${++i}次`);
  };
}
