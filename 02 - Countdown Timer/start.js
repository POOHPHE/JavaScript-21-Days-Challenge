(() => {
  // เริ่มเขียนโค้ด
  const second = 1000;
  const minute = 1000 * 60;
  const hour = minute * 60;
  const day = hour * 24;

    function setElementInnerText(id,text){
      const element = document.getElementById(id);
      element.innerText = text;

  }

  function countDown(){
    const now = new Date().getTime();
    const newYear = new Date('December 31, 2020 23:59:59').getTime();
    const unixTimeLeft = newYear - now;

    /*const dayElement = document.getElementById('days');
    dayElement.innerText = Math.floor(unixTimeLeft / day);

    const hourElement = document.getElementById('hours');
    hourElement.innerText = Math.floor(unixTimeLeft % day / hour);*/

    setElementInnerText('days',Math.floor(unixTimeLeft / day));
    setElementInnerText('hours',Math.floor(unixTimeLeft % day / hour));
    setElementInnerText('minutes',Math.floor(unixTimeLeft % hour /minute));
    setElementInnerText('seconds',Math.floor(unixTimeLeft % minute /second));
  }

  function run(){
    setInterval(countDown,second);

  }
  run();
})();
