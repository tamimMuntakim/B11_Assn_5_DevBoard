function rand(){
    return Math.floor(Math.random() * (255+1));
}
function check(){
    let red = rand();
    let green = rand();
    let blue = rand();
    console.log("rgb("+red+","+green+","+blue+")");
}

check();