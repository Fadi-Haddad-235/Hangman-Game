window.onload=function(){
    secret_words=["hello","world"];
    var elements=document.getElementsByTagName("li");
    console.log(elements[1]);
    newnew=elements[1];
    newnew.addEventListener("click",console.log(this));
}