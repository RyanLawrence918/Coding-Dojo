function addlike(id){
    console.log("liking!", id);
    var element = document.querySelector(id)
    console.log("element looks like this", element.innerText);
    let likecount = Number (element.innerText);
    console.log(likecount)
    likecount+=1;
    element.innerText=likecount;
}

function changeimg(){
    document.querySelector(".maincenterimage")
    Image.src = "pixel-ninjas.png"

    if(Image.src == "pixel-ninjs.png"){
        Image.src = "stonepunk.png"
    }
    else{
        Image.src = "pixel-ninjas.png"
    }
}

var counter = 0
function counter(id){
    console.log("hello" + num)
    num++
    document.querySelector("counter").innerHTML = num
}