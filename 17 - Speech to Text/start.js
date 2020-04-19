(() => {
  // เริ่มเขียนโค้ด

  window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new window.SpeechRecognition();
  const btnElem = document.querySelector('.control');

  function onClick(){

    const isPausing = btnElem.classList.contains('record');

    if(isPausing){
      recognition.start();
      btnElem.classList.remove('record');
      btnElem.classList.add('pause');
      console.log("start");
    }else{
      recognition.stop();
      btnElem.classList.remove('pause');
      btnElem.classList.add('record');
      console.log("stop");
    } 
  }

  function onResult(event){
    console.log("Hello");
    const textElem = document.querySelector('.text');
    const {transcript} = event.result[0][0];
    textElem.innerHTML += transcript;
    
  }

  function onEnd(){
    const isRecording = btnElem.classList.contains('pause');

    if(isRecording){
      recognition.start();
    }
  }

  function run(){
    recognition.lang = 'en-US';

    recognition.addEventListener('result', onResult);
    //recognition.addEventListener('end', onEnd);
    btnElem.addEventListener('click', onClick);

  }
  run();
})();
