(() => {
  // เริ่มเขียนโค้ด
  let currentIndex = 0;

  function displayImage(imgElems, newIndex){
    if(newIndex < 0){
      newIndex = imgElems.length -1;
    }
    if(newIndex == imgElems.length){
      newIndex = 0;
    }
    const newImage = imgElems[newIndex];
    currentIndex = newIndex;
    newImage.scrollIntoView({ behavior: 'smooth'});
  }

  function run(){
    const imgElems = document.querySelectorAll('img');
    const previousBtnElems = document.querySelector('.previous');
    const nextBtnElems = document.querySelector('.next');

    previousBtnElems.addEventListener('click', () => displayImage(imgElems, currentIndex -1))
    nextBtnElems.addEventListener('click', () => displayImage(imgElems, currentIndex +1))
  }
  run();
})();
