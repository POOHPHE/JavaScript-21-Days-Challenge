(() => {
  // เริ่มเขียนโค้ด
  const KEY = 'zdiLDkiSaseLJ06fcenX6hx3RwDwqI5BghVnUK67H_8';
  const loaderELem = document.querySelector('.loader');
  let page = 1;

  function showLoader(){
    loaderELem.classList.add('visible');
  }

  function hideLoader(){
    loaderELem.classList.remove('visible');
  }

  async function displayImages(){
    showLoader();

    const result = await fetch(`https://api.unsplash.com/photos/?client_id=${KEY}&page=${page}`);
    const images = await result.json();
    console.log(result);
    console.log(page);
    const galleryElem = document.querySelector('.gallery');

    images.forEach(image =>{
      const imgElem = document.createElement('img');
      imgElem.src = image.urls.small;

      galleryElem.appendChild(imgElem);
    });

    hideLoader();

    page += 1;
    
    console.log(page);
  }

  function onScroll(){
    const { scrollTop, clientHeight, scrollHeight} = document.documentElement;

    if(scrollTop + clientHeight >= scrollHeight -10){
      
      displayImages();
    }
  }

  function run(){
    document.addEventListener('scroll', onScroll);
    displayImages();
  }
  run();
})();
