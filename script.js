const targetDiv = document.getElementById('answer1')
const targetDiv1 = document.getElementById('answer2')
const targetDiv2 = document.getElementById('answer3')
const targetDiv3 = document.getElementById('answer4')
const targetDiv4 = document.getElementById('answer5')
const targetDiv5 = document.getElementById('answer6')


const btn = document.getElementById('question1')
const btn1 = document.getElementById('question2')
const btn2 = document.getElementById('question3')
const btn3 = document.getElementById('question4')
const btn4 = document.getElementById('question5')
const btn5 = document.getElementById('question6')


btn.onclick = function(){
    if(targetDiv.style.display !== "none")
    {
       targetDiv.style.display = "none"
    }
    else{
        targetDiv.style.display = "block"
    }
}

btn1.onclick = function(){
    if(targetDiv1.style.display !== "none")
    {
        targetDiv1.style.display = "none"
    }
    else{
        targetDiv1.style.display = "block"
    }
}

btn2.onclick = function(){
    if(targetDiv2.style.display !== "none")
    {
        targetDiv2.style.display = "none"
    }
    else{
        targetDiv2.style.display = "block"
    }
}

btn3.onclick = function(){
    if(targetDiv3.style.display !== "none")
    {
        targetDiv3.style.display = "none"
    }
    else{
        targetDiv3.style.display = "block"
    }
}

btn4.onclick = function(){
    if(targetDiv4.style.display !== "none")
    {
        targetDiv4.style.display = "none"
    }
    else{
        targetDiv4.style.display = "block"
    }
}

btn5.onclick = function(){
    if(targetDiv5.style.display !== "none")
    {
        targetDiv5.style.display = "none"
    }
    else{
        targetDiv5.style.display = "block"
    }
}