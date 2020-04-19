(() => {
  // เริ่มเขียนโค้ด

  // 1. Class vs Prototype 
  class Person{

  }
  const dio = new Person();
  console.log(dio);
  // 2. What's prototype?
  const name = 'dio';
  console.log(name.__proto__);

  const arr = [];
  console.log(arr.__proto__);
  // 3. Prototype chain
  console.log(name.toLocaleString());
  // 4. Extend a prototype
  function sayHello(val){
    console.log(`Hello${val}`);
  }
  String.prototype.sayHello = sayHello;
  console.log(name.__proto__);
  name.sayHello('World');
})();
