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
    let random_word = random_cat_value[random_value_number];
    let random_word_letters = Array.from(random_word.toLowerCase())
    let under_scores = "_".repeat(random_word_letters.length)
    let under_scores_array = Array.from(under_scores)
    const dashed_word = document.getElementById("word");
    dashed_word.innerHTML = under_scores
    // console.log(dashed_word.innerHTML)


document.addEventListener("click",(e) => {
    if (e.target.className==="letter"){
        e.target.classList.add("clicked")
    }
    let clickedLetter = e.target.innerHTML.toLowerCase()
    random_word_letters.forEach((word_letter, index)=>{
        if(clickedLetter == word_letter){
            // console.log(clickedLetter,random_word)

            under_scores_array[index]=clickedLetter;
            dashed_word.innerHTML = under_scores_array.join('');


        }
    })
})
}