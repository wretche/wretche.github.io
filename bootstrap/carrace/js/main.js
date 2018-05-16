  var canvas, canvasContext;

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
    carReset();
  }

  function updateAll() {
    moveAll();
    drawAll();
  }

  function moveAll() {
    carMove();
    carTrackHandeling();
  }

  function drawAll(){
    //clearScreen()
    drawTracks();
    carDraw()
  }
