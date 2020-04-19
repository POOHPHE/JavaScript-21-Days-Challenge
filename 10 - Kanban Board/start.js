(() => {
  // เริ่มเขียนโค้ด

  let draggingElem;

  function onDragStart(){
    draggingElem = this;
  }

  function onDrop(){
    this.append(draggingElem);
    draggingElem = null;
  }

  function onDragOver(event){
    event.preventDefault();
  }

  function onDragEnter(event){
    event.preventDefault();
  }

  function run(){
    const taskElems =  Array.from(document.querySelectorAll('.task'));
    const dropZoneElems = Array.from(document.querySelectorAll('.drop-zone'));

    taskElems.forEach((taskElem) =>{
      taskElem.addEventListener('dragstart', onDragStart);
    });

    dropZoneElems.forEach((dropElem) =>{
      dropElem.addEventListener('drop', onDrop);
      dropElem.addEventListener('dragover', onDragOver);
      dropElem.addEventListener('dragenter', onDragEnter);
    });
  }
  run();
})();
