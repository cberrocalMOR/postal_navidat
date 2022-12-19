var cover = document.getElementsByClassName("cover");
const SNOW_BALLS = 500;

for (var i = 0; i < SNOW_BALLS; i++) {
    generateBalls(Math.random()*150);
    
}

function generateBalls(var1){

    
    var letItSnow = document.createElement("div");
    var random = (Math.random() * 160)-30;
    letItSnow.classList.add("bola");
    letItSnow.style.left = random+"%";

    // relacion entre profundidad y opacidad
    var randomDeep = Math.random();
    letItSnow.style.filter = "opacity("+randomDeep+")";
    //0 dejara el 50% de las bolas pasar por delante
    //0.25 dejara el 25% de las bolas pasar por delante
    letItSnow.style.zIndex = Math.round((randomDeep)-0.25);
    letItSnow.style.animationDelay = var1+"s, "+(var1+Math.random())+"s";
    cover[0].appendChild(letItSnow);
    //console.log(letItSnow.style.zIndex);

}

    

