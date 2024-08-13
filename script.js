const guess = document.getElementById('inpBox');
let randomnum = Math.ceil(Math.random() * 100 + 1);
const submit = document.getElementById('butt');
const refresh = document.getElementById('refresh');
const attempt = document.getElementsByClassName('attempt')[0];
const res = document.getElementById('result');
const img = document.getElementsByClassName('image')[0];
const hint = document.getElementsByClassName('hint')[0];
let guesshistory = document.getElementsByClassName('history')[0];
let count = 0;
let history = [];
img.classList.add('hidden');
let gifno = Math.ceil(Math.random() * 3);
let small = 0;
let large = 100;

submit.addEventListener('click', mainFunc);

refresh.addEventListener('click' , reset);

 function mainFunc(){
    
    let value = parseInt(guess.value);
    if (isNaN(value) || value < 0 || value > 100) {
        res.textContent = "Enter a Valid number from 0-100";
    } else {
        history.push(value);
        count++;
        if (value > randomnum) {
            res.innerHTML = `You Guessed <span style="color:red">${value}</span> and it is Higher, try a lower number`;
            large = value;
            
        } else if (value < randomnum) {
            res.innerHTML = `You Guessed <span style="color:red">${value}</span> and it is Lower, try a higher number`;
            small = value;
        } else if (value === randomnum) {
            res.innerHTML = `<span style="color:red">${value}</span> is the correct Guess and You Cracked it in ${count} attempts`;
            setTimeout(wingif , 1500);
            submit.classList.add('hidden');
        }  
        if (count === 10) {
            if (value === randomnum) {
                res.innerHTML = `<span style="color:red">${value}</span> is the correct Guess and You Cracked it in ${count} attempts`;
                setTimeout(wingif , 1500);
                
            } else{
          res.innerHTML = `You Failed to Guess the number The number was ${randomnum}`;
            setTimeout(loosegif , 1500);
            }
        }
        if(count === 11){
            reset();
        }

    }
    attempt.textContent = `Attempts Left: ${10 - count}`;
    guesshistory.textContent = `History: ${history}`;
    hint.textContent = `Hint : the number is between ${small} and ${large} `
    
    console.log(randomnum);
    // console.log(small , "small");
    // console.log(large , "large");
    // console.log(`number is between ${small} and ${large}`)
    guess.value = " ";

};

function reset(){
    gifno = Math.ceil(Math.random() * 3);
    guess.value = " ";
    randomnum = Math.ceil(Math.random() * 100 + 1);
    count = 0;
    history.length = 0;
    res.innerHTML = "Result";
    attempt.textContent = `Attempts Left: ${10 - count}`;
    guesshistory.textContent = `Your Guess History`;
    hint.textContent = `Hint : the number is between ${small} and ${large} `

    
};

function wingif(){
    img.setAttribute('src' , `win${gifno}.gif`);
    img.classList.remove('hidden');
    setTimeout(function(){
        img.classList.add('hidden')
    } , 3000)
};

function loosegif(){
    img.setAttribute('src' , `loose${gifno}.gif`);
    img.classList.remove('hidden');
    setTimeout(function(){
        img.classList.add('hidden')
    } , 3000)
};
