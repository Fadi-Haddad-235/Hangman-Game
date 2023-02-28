window.onload=function(){
    const words={
        'a programming language' : ["python", "javascript" , "HTML" , "CSS" , "pascal", "julia"],
        "a web framework" : ["react" , "vue" , "angualr" , "Django" , "flask" , "laravel"],
        'a datastructure' : ["stack" , "queue" , "linkdlist" , "heap" , "hashtable"]
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
    document.getElementById("img").src="images/hangman-0.png"
    your_status=document.getElementById("your-status");
    remainig_lives=document.getElementById("lives")
    hint=document.getElementById("hint");
    hint.innerHTML=random_cat_name;
    secret_word=document.getElementById("secret-word");




    // console.log(dashed_word.innerHTML)
    let wrong_attempts = 0;

    
    let status= false
document.addEventListener("click",(e) => {
    status= false
    if(wrong_attempts<7){
        if (e.target.className==="letter"){
            e.target.classList.add("clicked")
        }
        let clickedLetter = e.target.innerHTML.toLowerCase()
        random_word_letters.forEach((word_letter, index)=>{
            if(clickedLetter == word_letter && wrong_attempts<7){
                // console.log(clickedLetter,random_word)
                status= true;
                under_scores_array[index]=clickedLetter;
                dashed_word.innerHTML = under_scores_array.join('');
    
            }
        })
    }

    if(!status  && e.target.classList.contains("clicked")){

        if(wrong_attempts<7){
            wrong_attempts++;
            img_src=`images/hangman-${wrong_attempts}.png`
            document.getElementById("img").src=img_src
            remainig_lives.innerHTML=`You have ${7-wrong_attempts} lives left`;
        }
        console.log(wrong_attempts, under_scores_array)
        if (wrong_attempts==7){
            your_status.innerHTML="You Lose!!"
            status=true
            remainig_lives.style.visibility='hidden';
            hint.innerHTML='Your Friend Is Dead';
            secret_word.style.visibility='hidden';
            dashed_word.style.visibility="hidden"
        }
    }
    if (under_scores_array.indexOf("_") == -1 && wrong_attempts<7){
        console.log("you win!!");
        your_status.innerHTML="You Win!!"

        status=true

    }

})
}