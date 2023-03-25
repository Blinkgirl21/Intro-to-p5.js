function preload(){

}
function setup(){
    canvas=createCanvas(500,400);
    canvas.position(70,200);
    video=createCapture(VIDEO)
    video.hide();
}
function draw(){
Image(video,105,80,300,250);

stroke(160,10,10);
}
function take_snapshot(){
save(frame.jpg)
}
