

// obj having meanings or hints for words
const obj = {
    'hello' : 'Word or greeting when we meet any person',
    'eager' : 'Keen to know everything',
    'faces' : 'Front part of a person\'s head',
    'kabab' : 'A dish of roasted or grilled meat or vegetables',
    'price' : 'A term for money required for trade of an item',
    'happy' : 'Emotion of joy',
    'erase' : 'To remove or rub out something written or recorded',
    'event' : 'An occassion or thing of importance that takes place',
    'alert' : 'A term used to give warning',
    'eagle' : 'Bird flying on very high altitudes'
};

// words to guess
const wordArr = ['hello', 'eager', 'faces', 'kabab', 'price', 'happy', 'erase', 'event', 'alert', 'eagle'];


// driver function
function newgameFunc(){

    // global variables
    score = 0; 
    randomIndex = 0; 
    tempWord = 0; 
    hintVar = 0;
    [char1, char2, char3, char4, char5]= '';
    [input1, input2, input3, input4, input5] = '';
    totalTime = 20;
    currTime = 0;
    tempTime = 0;
    newGameToggle = 1;

    if (newGameToggle){

        document.getElementById('ngbtn').value = 'Restart Game';
        document.getElementById('ngbtn').style.width = '10pc';

    }


    document.getElementById('scorespan').innerHTML = score;
    document.getElementById('scorespan').style.color = 'black';
    document.getElementById('sbtn').style.display = 'none';


    nextwordFunc();

}


function nextwordFunc(){

    removeStyleInputFields();
    clearFunc();

    document.getElementById('cbtn').style.display = 'inline';
    document.getElementById('sbtn').style.display = 'inline';
    document.getElementById('nwbtn').style.display = 'none';

    currTime = 0;
    timer();

    randomIndex = Math.floor(Math.random() * 10);
    tempWord = wordArr[randomIndex];
    // let char1 = Math.floor(Math.random() * 10) + 1;
    // console.log(tempWord);

    // creating hint var
    hintVar = document.getElementById('hintp');

    hintVar.innerHTML = obj[wordArr[randomIndex]];

    [char1, char2, char3, char4, char5] = [tempWord[0], tempWord[1], tempWord[2], tempWord[3], tempWord[4]];

    // creating input field variables
    input1 = document.getElementById('letter1');
    input2 = document.getElementById('letter2');
    input3 = document.getElementById('letter3');
    input4 = document.getElementById('letter4');
    input5 = document.getElementById('letter5');
    
    // console.log(char3);
}


function clearFunc(){
    
    document.getElementById('letter1').value = '';
    document.getElementById('letter2').value = '';
    document.getElementById('letter3').value = '';
    document.getElementById('letter4').value = '';
    document.getElementById('letter5').value = '';
}

function submitFunc(){
    
    document.getElementById('cbtn').style.display = 'none';
    document.getElementById('sbtn').style.display = 'none';
    document.getElementById('nwbtn').style.display = 'inline';
    
    if ((input1.value == char1) && (input2.value == char2) && (input3.value == char3) && (input4.value == char4) && (input5.value == char5))
    {

        correctInputFields();
        score += 10;
        currTime = 21;
        tempTime = 0;
    }
    else if ((input1.value == '') && (input2.value == '') && (input3.value == '') && (input4.value == '') && (input5.value == ''))
    {

        document.getElementById('cbtn').style.display = 'inline';
        document.getElementById('sbtn').style.display = 'inline';
        document.getElementById('nwbtn').style.display = 'none';

        alert('Enter the word first!!!')
    }
    else if (tempTime > 0){

        showAnswer();
        score -= 5;
        document.getElementById('scorespan').innerHTML = score;
        
        wrongInputFields();
        currTime = 21;
    }
    else{
        console.log('Error');
    }

    scoreObj = document.getElementById('scorespan').innerHTML = score;
    
}

function timer(){

    let timer = setInterval(func, 1000);
    
    function func(){

        tempTime = totalTime - currTime;
        
        if (currTime <= totalTime){

            if (tempTime >= 10){

                document.getElementById('timer').innerHTML = '00:' + tempTime;
                currTime++;
            }
            else{

                document.getElementById('timer').innerHTML = '00:0' + tempTime;
                currTime++;
            }
        }
        else if (tempTime > 0){

        }
        else if ((currTime == 21)){

            showAnswer();
            // score += 10;
            currTime = 0;
            document.getElementById('scorespan').innerHTML = score;
            // document.getElementById('scorespan').style.color = 'green';

            clearInterval(timer);

            document.getElementById('sbtn').style.display = 'none';
            document.getElementById('nwbtn').style.display = 'inline';
        }
        else{

            document.getElementById('sbtn').style.display = 'none';
            document.getElementById('nwbtn').style.display = 'inline';
                        
            clearInterval(timer);
            score -= 5;
            currTime = 0;
            document.getElementById('scorespan').style.color = 'red';
            document.getElementById('scorespan').innerHTML = score;

            
            showAnswer();
        }
    }

}

function correctInputFields(){

    document.getElementById('letter1').style.border = '3px solid green';
    document.getElementById('letter2').style.border = '3px solid green';
    document.getElementById('letter3').style.border = '3px solid green';
    document.getElementById('letter4').style.border = '3px solid green';
    document.getElementById('letter5').style.border = '3px solid green';

    document.getElementById('scorespan').style.color = 'green';document.getElementById('scorespan').style.color = 'green';

}

function wrongInputFields(){

    document.getElementById('letter1').style.border = '3px solid red';
    document.getElementById('letter2').style.border = '3px solid red';
    document.getElementById('letter3').style.border = '3px solid red';
    document.getElementById('letter4').style.border = '3px solid red';
    document.getElementById('letter5').style.border = '3px solid red';

    document.getElementById('scorespan').style.color = 'red';

    showAnswer();
}

function showAnswer(){

    setTimeout(() => {
        document.getElementById('letter1').value = char1;
        document.getElementById('letter1').style.color = 'green';
    }, 600);

    setTimeout(() => {
        document.getElementById('letter2').value = char2;
        document.getElementById('letter2').style.color = 'green';
    }, 800);

    setTimeout(() => {
        document .getElementById('letter3').value = char3;
        document.getElementById('letter3').style.color = 'green';
    }, 1000);

    setTimeout(() => {
        document.getElementById('letter4').value = char4;
        document.getElementById('letter4').style.color = 'green';
    }, 1200);

    setTimeout(() => {
        document.getElementById('letter5').value = char5;
        document.getElementById('letter5').style.color = 'green';
    }, 1400);

}

function removeStyleInputFields(){

    document.getElementById('letter1').style.border = '1px solid cornflowerblue';
    document.getElementById('letter2').style.border = '1px solid cornflowerblue';
    document.getElementById('letter3').style.border = '1px solid cornflowerblue';
    document.getElementById('letter4').style.border = '1px solid cornflowerblue';
    document.getElementById('letter5').style.border = '1px solid cornflowerblue';

    document.getElementById('letter1').style.color = 'black';
    document.getElementById('letter2').style.color = 'black';
    document.getElementById('letter3').style.color = 'black';
    document.getElementById('letter4').style.color = 'black';
    document.getElementById('letter5').style.color = 'black';

}


