function preload() {}

function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
}

function draw() {}

function take_snapshot() {
  save("myFilter.png");
}

// var noseX = 0;
// var noseY = 0;

// function preload() {
//   clown_nose = loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
// }

// function setup() {
//   canvas = createCanvas(300, 300);
//   canvas.center();
//   video = createCapture(VIDEO);
//   video.size(300, 300);
//   video.hide();
//   classifier = ml5.poseNet(video, model_loaded);
//   classifier.on("pose", got_poses);
// }

// function draw() {
//   image(video, 0, 0, 300, 300);
//   image(clown_nose, noseX, noseY, 30, 30);
// }

// function take_snapshot() {
//   save("myFilter.png");
// }

// function model_loaded() {
//   console.log("Posenet is initialized");
// }

// function got_poses(results) {
//   if (results.length > 0) {
//     console.log(results);
//     noseX = results[0].pose.nose.x - 15;
//     noseY = results[0].pose.nose.y - 15;
//     console.log("nose x: " + noseX + " and nose y: " + noseY);
//   }
// }
