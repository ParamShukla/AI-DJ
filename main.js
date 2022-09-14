lwx = 0;
lwy = 0;
rwx = 0;
rwy = 0;
lbw = 0;
rbw = 0;

function setup(){
  canvas =   createCanvas(600,500);
  canvas.center();
video = createCapture(VIDEO);
video.hide();
posenet = ml5.poseNet(video,modeloaded);
posenet.on("pose",gotposes);
}
function modeloaded() {
    console.log("posenet is awake ")

}
function draw() {
    image(video,0,0,600,500);

fill("red");
stroke("red");
gm1 = gaana.isPlaying();
gm2 = gaana2.isPlaying();
if(rbw>0.2){
circle(rwx,rwy,30);
gaana2.stop();
if(gm1==false){
    gaana.play()
}

}
if(lbw>0.2){
    circle(lwx,lwy,30);
    gaana.stop();
    if(gm2==false){
        gaana2.play()
    }
    
    }
    

}

gaana = "";
gaana2= "";

gm1 ="";
gm2 = "";


function preload(){
    gaana = loadSound("harihar.mp3");
gaana2 = loadSound("music.mp3")
}



function gotposes(results){
if (results.length>0)  {
    console.log(results);
    rwx = results[0].pose.rightWrist.x;
    rwy = results[0].pose.rightWrist.y;
    console.log("right wrist x  and y are as follows: "+rwx+","+rwy);
    lwx = results[0].pose.leftWrist.x;
    lwy = results[0].pose.leftWrist.y;
    console.log("left wrist x  and y are as follows: "+lwx+","+lwy);
    lbw = results[0].pose.keypoints[9].score;
    console.log("#score for left wrist(lbw) isssssss"+lbw+"ohhhhhhhhhh");
    rbw = results[0].pose.keypoints[10].score;
    console.log("#score for left wrist(rbw) isssssss"+rbw+"ohhhhhhhhhh");
}


}































function sound(){
    gaana.play();
    gaana.setVolume(0.5);
    gaana.rate(1);
    gaana2.play();
    gaana2.setVolume(0.5);
    gaana2.rate(1);
}

