function setup()
{
    video = createCanvas(VIDEO)
    video.size(550,500)
    createCanvas(550,550)
    canvas.position(560,160)
    poseNet = ml5.poseNet(video,modelLoaded)
    poseNet.on('pose',gotPoses)
}
function draw()
{
    background("black")
}
function modelLoaded()
{
    console.log('PoseNet Is Initialized!')
}
function gotPoses(result)
{
    if(result.length > 0){
    console.log(result)
    }
}