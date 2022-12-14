var cover = document.getElementsByClassName("cover");
const SNOW_BALLS = 500;

for (var i = 0; i < SNOW_BALLS; i++) {
    generateBalls(Math.random()*150);
}

function generateBalls(var1){

    var randomDeep = Math.random();
    var letItSnow = document.createElement("div");
    var random = (Math.random() * 160)-30;
    letItSnow.classList.add("bola");
    letItSnow.style.left = random+"%";

    letItSnow.style.filter = "opacity("+randomDeep+")";
    letItSnow.style.zIndex = Math.floor((randomDeep * 2)-1.5);
    letItSnow.style.animationDelay = var1+"s, "+(var1+Math.random())+"s";
    console.log(letItSnow.style.left);
    cover[0].appendChild(letItSnow);
}
    