(() => {
  // เริ่มเขียนโค้ด

  // 1. Lexical scope & Dynamic scope
  function printName(){
    console.log(this);
    console.log(`My name is ${this.name}`);
  }
//  printName();


  // 2. How to know what is "this"?


  //// 2.1 Invoker object

  const varayut = {name: 'Varayut', printName};
  const Jane = { name: 'Jane', printName};
  varayut.printName();
  Jane.printName();
  //// 2.2 Global object (window, global)
  name = 'Global';
  printName();

  //// 2.3 Constructor function
  function Person(name){
    this.name = name;
    this.printName = printName;
  }

  const dio = new Person('Dio');
  dio.printName();
  // 3. call(), apply(), and bind()
  function printName_3(nationality, city){
    console.log(this);
    console.log(`My name is ${this.name}, I'm ${nationality} and am living in ${city}`);
  }

  function Person_3(name, nationality, city){
    this.name = name;
    this.nationality = nationality;
    this.city = city;
  
    printName_3(this.nationality,this.city);
    printName_3.call(this,this.nationality,this.city);
    printName_3.apply(this, [this.nationality,this.city]);

    const printJojo = printName_3.bind(this);
    printJojo(this.nationality, this.city);
  }
  const jojo = new Person_3('Joseph','America','USA');


})();
