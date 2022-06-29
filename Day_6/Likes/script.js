function addlike(id){
    console.log("liking!", id);
    var element = document.querySelector(id)
    console.log("element looks like this", element.innerText);
    let likecount = Number (element.innerText);
    console.log(likecount)
    likecount+=1;
    element.innerText=likecount;
}

