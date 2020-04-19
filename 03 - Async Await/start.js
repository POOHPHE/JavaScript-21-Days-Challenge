(() => {
  // เริ่มเขียนโค้ด

  // 1. How Asynchronous code works in JavaScript

  // 2. Callback
  function AsyncCallback(text , timeout,callback){
    setTimeout(()=>{
      console.log(text);
      if (callback){
        callback();
      }
      
    },timeout)
  }
  AsyncCallback('callback A',1000,() => {
    AsyncCallback('callback B',500,() => {
      AsyncCallback('callback C',250);
    });
  });


  // 3. Promise

  function PromiseCallback(text , timeout){
    return new Promise((resolve,reject) => {
      setTimeout(()=>{
        console.log(text);
        resolve();
      },timeout);

    });
  }

  PromiseCallback('Promise A',1000)
  .then(() => {
    return PromiseCallback('Promise B',500);
  })
  .then(() => {
    return PromiseCallback('Promise C',250);
  })

  // 4. Async/Await
  function AwaitCallback(text , timeout){
    return new Promise((resolve,reject) => {
      setTimeout(()=>{
        console.log(text);
        resolve();
      },timeout);

    });
  }

  async function run(){
    await AwaitCallback('Await A',1000);
    await AwaitCallback('Await B',1000);
    await AwaitCallback('Await C',1000);
  }

  run();

})();
