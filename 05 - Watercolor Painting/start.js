(() => {
  // เริ่มเขียนโค้ด
  const canvas = document.getElementById('painting');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const context = canvas.getContext('2d');

  let previousPoint = { x: 0, u: 0};

  function getDistance(previousPoint, currentPoint){
    return Math.sqrt((previousPoint.x - currentPoint.x) ** 2 +(previousPoint.y - currentPoint.y));
  }

  function run(){

    function onMouseMove({ pageX, pageY }){
      const currentPoint = { x: pageX, y: pageY};

      context.beginPath();

  const distance = getDistance(previousPoint, currentPoint);
      const opacity = Math.min(0.5, 1 / distance);

      context.lineCap = 'round';
      context.lineJoin = 'round';
      context.lineWidth = Math.random() / distance *40;
      
      
      context.strokeStyle = `rgba(72, 115, 168, ${opacity})`;

      

      context.moveTo(previousPoint.x ,previousPoint.y);
      context.lineTo(currentPoint.x ,currentPoint.y);

      context.stroke();
      context.closePath();

      previousPoint = currentPoint;
    }

    function onMouseEnter({ pageX, pageY}){
      previousPoint.x = pageX;
      previousPoint.y = pageY;
    }

    canvas.addEventListener('mousemove', onMouseMove)
  }
  run();
})();
