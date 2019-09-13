var rover = {
  direction: "N",
  x: 0,
  y: 0,
  travelLog: []
}

function turnLeft(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "N";
      break;
  }
  console.log("turnLeft was called! New direction: " + rover.direction);
}

function turnRight(rover){
  switch (rover.direction) {
    case "N":
      rover.direction = "E";
      break;
    case "E":
      rover.direction = "S";
      break;
    case "S":
      rover.direction = "W";
      break;
    case "W":
      rover.direction = "N";
      break;
  }
  console.log("turnRight was called! New direction: " + rover.direction);
}

function moveForward(rover){
  switch (rover.direction) {
    case "W":
      rover.x--;
      break;
    case "E":
      rover.x++;
      break;
    case "N":
      rover.y--;
      break;
    case "S":
      rover.y++;
      break;
  }
  console.log("moveForward was called! New position: " + rover.x, rover.y);
}

function commands(commandsList){
  for (i = 0; i < commandsList.length; i++) {
    switch (commandsList[i]) {
      case "f":
        moveForward(rover);
        break;
      case "r":
        turnRight(rover);
        break;
      case "l":
        turnLeft(rover);
    }
  }
  rover.travelLog.push([rover.x, rover.y]);
  console.log(rover.travelLog);
}

commands('rffrfflfrff');