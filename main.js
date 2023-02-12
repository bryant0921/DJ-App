song = ""
function setup()
{
    canvas = createCanvas(300,300);
    canvas.position(480,150);

    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image = (video, 0, 0, 300, 300);
}

function preload()
{
    song = loadSound("music.mp3");

}

function play()
{
    song.play();
}