window.onload=function(){
    const words={
        languages : ["python", "javascript" , "HTML" , "CSS" , "pascal", "julia"],
        frameworks : ["react" , "vue" , "angualr" , "Django" , "flask" , "laravel"],
        datastructure : ["stack" , "queue" , "linkdlist" , "heap" , "hashtable"],
        sort_algo : ["bubble" , "quick" , "merge" , "selection", "insertion"]
    };
    
    let keys = Object.keys(words);
    let random_cat_number = Math.floor(Math.random() * keys.length)
    let random_cat_name = keys[random_cat_number];
    let random_cat_value = words[random_cat_name];

    let random_value_number = Math.floor(Math.random() * random_cat_value.length)
    let random_value_value = random_cat_value[random_value_number];
    // console.log(random_value_value);
    let random_word_letters = Array.from(random_value_value)



document.addEventListener("click",(e) => {
    if (e.target.className==="letter"){
        e.target.classList.add("clicked")
    }
    let clickedLetter = e.target.innerHTML.toLowerCase()
    random_word_letters.forEach((word_letter, index)=>{
        
    })
})
}