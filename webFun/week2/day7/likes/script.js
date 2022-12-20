const likes = new Map();
likes.set("kurt",1);

function increaseLikes(name){
    if(likes.has(name)){
        likes.set(name,(likes.get(name)+1));
    } else {
        likes.set(name,1);
    }
    var element = document.getElementById(name);
    element.innerText = likes.get(name);
}