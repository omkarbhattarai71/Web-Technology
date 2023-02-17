window.onload = canvas;

function canvas()
{
    var myCanvas1 = document.getElementById("myCanvas1");
    if(myCanvas1 &&  myCanvas1.getContext("2d")){
        var context = myCanvas1.getContext("2d");
        var myImg = new Image();
        myImg.src = "canva1.png"
        myImg.onload = function(){
            context.fillStyle = context.createPattern(myImg, "no-repeat");
            context.fillRect(0,0,context.canvas.width, context.canvas.height)
        }
    }
}
