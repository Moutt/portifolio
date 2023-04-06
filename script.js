var corpo = document.querySelector('body')
var sol = document.querySelector('#sol')
var lua = document.querySelector('#lua')
var port = document.querySelector('#port')
var guarda = ""
var palavra = ['P','o','r','t','i','f','ó','l','i','o']
port.innerHTML = ''

ScrollReveal().reveal('#caixasobre');
ScrollReveal().reveal('.ftsites');



var ce = 0
function modo(){
    if(ce == 0){
        corpo.style.background = '#333333'
        sol.style.visibility = 'hidden'
        lua.style.visibility = 'visible'
        ce = 1
    }else{
        corpo.style.background = 'white'
        sol.style.visibility = 'visible'
        lua.style.visibility = 'hidden'
        ce = 0
    }
}

const timer = (seconds) =>  {
    let time = seconds * 100
    return new Promise(res => setTimeout(res, time))
}
async function doSomething() {
  for (var i in palavra) {
    guarda = palavra[i]
    port.innerHTML += guarda
    console.log(guarda)
    await timer(2);
  }
}
doSomething();