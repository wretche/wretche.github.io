  var canvas, canvasContext;

  var blueCar = new carClass();
  var greenCar = new carClass();


  window.onload = function() {
    canvas = document.getElementById('gameCanvas');
    canvasContext = canvas.getContext('2d');

    colorRect(0,0, canvas.width,canvas.height, 'black');
    colorText("SUBLIMINAL MESSAGE", canvas.width/2,canvas.height/2, "red")

    loadImages();
  }

  function imageLoadingDoneSoStartGame() {
    var framesPerSecond = 30;
    setInterval(updateAll, 1000/framesPerSecond);

    setupInput();

    loadLevel(levelOne);
  }

  function loadLevel(whichLevel) {
    trackGrid = whichLevel.slice();
    blueCar.reset(carPic, "Blue Storm");
    greenCar.reset(otherCarPic, "Green Machine");
  }

  function updateAll() {
    moveAll();
    drawAll();
  }

  function moveAll() {
    blueCar.move();
    greenCar.move();
  }

  function drawAll(){
    //clearScreen()
    drawTracks();
    blueCar.draw()
    greenCar.draw();
  }
