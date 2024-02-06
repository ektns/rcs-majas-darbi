const signalColors = ["green", "red", "yellow", "yellow with red"];

function getRandomSignalColor() {
  const randomIndex = Math.floor(Math.random() * signalColors.length);
  return signalColors[randomIndex];
}

let signal = getRandomSignalColor();

// let signal = "red";

if (signal === "red") {
  console.log("stop");
} else if (signal === "yellow") {
  console.log("will switch to red");
} else if (signal === "yellow with red") {
  console.log("will switch to green");
} else {
  console.log("go");
}

// "green", "red", "yellow", "yellow with red"
