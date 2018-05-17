
const TRACK_W = 40;
const TRACK_H = 40;
const TRACK_COLS = 20;
const TRACK_ROWS = 15;

var trackGrid = [4,4,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,
                 4,4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,
                 4,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,
                 1,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,0,0,0,1,
                 1,0,0,0,1,1,1,4,4,4,4,1,1,1,1,1,1,0,0,1,
                 1,0,0,1,1,0,0,1,4,4,1,1,0,0,0,0,1,0,0,1,
                 1,0,0,1,0,0,0,0,1,4,1,0,0,0,0,0,1,0,0,1,
                 1,0,0,1,0,0,0,0,0,1,1,0,0,5,0,0,1,0,0,1,
                 1,0,0,1,0,0,5,0,0,0,1,0,0,1,0,0,1,0,0,1,
                 1,0,0,1,0,0,1,1,0,0,5,0,0,1,0,0,1,0,0,1,
                 1,0,2,1,0,0,1,1,0,0,0,0,0,1,0,0,5,0,0,1,
                 1,1,1,1,0,0,1,1,0,0,0,0,0,1,0,0,0,0,0,1,
                 0,3,0,0,0,0,1,4,1,0,0,0,1,1,0,0,0,0,0,1,
                 0,3,0,0,0,0,1,4,4,1,1,1,1,1,1,0,0,0,1,1,
                 1,1,1,1,1,1,1,4,4,4,4,4,4,4,1,1,1,1,1,4];

const TRACK_ROAD = 0;
const TRACK_WALL = 1;
const TRACK_PLAYERSTART = 2;
const TRACK_GOAL = 3;
const TRACK_TREE = 4;
const TRACK_FLAG = 5;


const TRACK_GAP = 2;

function drawTracks() {
  for(eachRow=0;eachRow<TRACK_ROWS;eachRow++){
    for(var eachCol=0;eachCol<TRACK_COLS;eachCol++) {

      var arrayIndex = rowColToArrayIndex(eachCol, eachRow);
      var tileKindHere = trackGrid[arrayIndex];
      var useImg = flagPic;

      switch(tileKindHere){
        case TRACK_ROAD:
          useImg = roadPic;
          break;
        case TRACK_WALL:
          useImg = wallPic;
          break;
        case TRACK_GOAL:
          useImg = goalPic;
          break;
        case TRACK_TREE:
          useImg = treePic;
          break;
        case TRACK_FLAG:
          useImg = flagPic;
          break;
      }
      canvasContext.drawImage(useImg, TRACK_W*eachCol,TRACK_H*eachRow);
    }
  }
}

function carTrackHandeling() {
  var carTrackCol = Math.floor(carX / TRACK_W);
  var carTrackRow = Math.floor(carY / TRACK_H);
  var trackIndexUnderCar = rowColToArrayIndex(carTrackCol, carTrackRow);

  if (carTrackCol >= 0 && carTrackCol < TRACK_COLS &&
      carTrackRow >= 0 && carTrackRow < TRACK_ROWS) {

    if(isObstacleAtColRow(carTrackCol,carTrackRow)) {
      carX -= Math.cos(carAng) * carSpeed;
      carY -= Math.sin(carAng) * carSpeed;

      carSpeed *= -0.5;
    }
  }
}

function isObstacleAtColRow(col,row) {
  if(col >= 0 && col < TRACK_COLS &&
    row >= 0 && row < TRACK_ROWS) {
    var trackIndexUnderCoord = rowColToArrayIndex(col, row);
  return (trackGrid[trackIndexUnderCoord] != TRACK_ROAD);
  }else {
    return false;
  }
}
function rowColToArrayIndex(col, row) {
  return col + TRACK_COLS * row;
}
