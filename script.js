
// counter my way
let div =document.createElement('div')
let buttonUP =document.createElement('button')
let buttonDown =document.createElement('button')
let innerDiv =document.createElement('div')
let num = 0

buttonUP.textContent="Up"
buttonDown.textContent="Down"


div.appendChild(buttonUP)
div.appendChild(buttonDown)
div.appendChild(innerDiv)
innerDiv.textContent=num
document.body.appendChild(div)


buttonUP.addEventListener('click',function(){
    
    innerDiv.textContent=num++

    
})

buttonDown.addEventListener('click',function(){
    
    innerDiv.textContent=num--

    
})
// random color my way
let button =document.createElement('button')
button.textContent ="change NOOOOW!"
let headDiv = document.querySelector('.head')
headDiv.appendChild(button)

let colors = ["red","blue","green","purple"]

button.addEventListener("click",function(){
    document.body.style.backgroundColor=colors[Random()]
})

function Random(){
    let random = Math.floor(Math.random()*colors.length)
    return random
}



//counter free code camp way
//set start number

let counter = 0
let btns = document.querySelectorAll('.btn')
let value = document.querySelector('#value')
btns.forEach(function(btn){
btn.addEventListener('click',function(e){
const keyPressed= e.currentTarget.classList

if(keyPressed.contains("up")){
   counter++
}else if( keyPressed.contains("down")){
counter--
}
value.textContent=counter
})
})

// review slider