var carPic = document.createElement("img");
var roadPic = document.createElement("img");
var wallPic = document.createElement("img");
var goalPic = document.createElement("img");
var treePic = document.createElement("img");
var flagPic = document.createElement("img");

var picsToLoad = 0;

function countLoadedImagesAndLaunchIfReady() {
  picsToLoad--;
  console.log(picsToLoad);
  if(picsToLoad == 0) {
    imageLoadingDoneSoStartGame();
  }
}

function beginLoadingImage(imgVar, fileName) {
  imgVar.onload = countLoadedImagesAndLaunchIfReady();
  imgVar.src = "images/"+fileName;
}

function loadImages() {
  var imageList = [
  {varName: carPic, theFile: "player1car.png"},
  {varName: roadPic, theFile: "road.png"},
  {varName: wallPic, theFile: "wall.png"},
  {varName: goalPic, theFile: "track_goal.png"},
  {varName: treePic, theFile: "track_tree.png"},
  {varName: flagPic, theFile: "Track_flag.png"}
  ];

  picsToLoad = imageList.length;

  for(var i=0; i<imageList.length; i++) {
    beginLoadingImage(imageList[i].varName, imageList[i].theFile);
  }
}
