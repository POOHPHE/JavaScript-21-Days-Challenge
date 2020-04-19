(() => {
  // เริ่มเขียนโค้ด

  // 1. NaN
  const result = 1 /'dwa';
  if(Number,isNaN(result) ){
    console.log('Equal to NaN');
  }
  // 2. Type Coercion
  console.log(2-'1');
  console.log(2 + '1');
  console.log(2 + Number.parseInt('1',10));
  console.log(true + true);
  // 3. Interpreter & Compiler
  function getPerson(){
    return {
      name: 'Dio'
    };
  }
  console.log(getPerson());
  // 4. Checking Object Type
  const person = {};
  if(typeof(person) === 'object' && person!== null ){
    console.log('Yes, object');
  }
})();
