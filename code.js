window.onload=function(){
document.addEventListener("click",(e) => {
    if (e.target.className==="letter"){
        e.target.classList.add("clicked")
    }
    let clickedLetter = e.target.innerHTML.toLowerCase()
    console.log(clickedLetter)
})
}