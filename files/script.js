if(this.window.pageXOffset<=627){
    document.getElementById('icon').addEventListener("click",function(){

    let icon=document.querySelector('ul');
    if(icon.style.display=="block"){
      icon.style.display="none"
    }
    else{
      icon.style.display="block"
    }
    })
}

let myArr = ['/banner1.png','/banner2.jpg','/banner3.jpg','/banner4.webp']
let pos = 0

function forword() {
    if (pos < myArr.length - 1) {
        pos++
    } else {
        pos = 0;
    }
    document.getElementById('slide-img').src = myArr[pos]

    if (pos == 0) {
        document.getElementById('r1').checked = true
        document.getElementById('r2').checked = false
        document.getElementById('r3').checked = false
        document.getElementById('r4').checked = false
    }

    if (pos == 1) {
        document.getElementById('r1').checked = false
        document.getElementById('r2').checked = true
        document.getElementById('r3').checked = false
        document.getElementById('r4').checked = false
    }

    if (pos == 2) {
        document.getElementById('r1').checked = false
        document.getElementById('r2').checked = false
        document.getElementById('r3').checked = true
        document.getElementById('r4').checked = false
    }

    if (pos == 3) {
        document.getElementById('r1').checked = false
        document.getElementById('r2').checked = false
        document.getElementById('r3').checked = false
        document.getElementById('r4').checked = true
    }
}

function backword() {
    if (pos > 0) {
        pos--
    } else {
        pos = myArr.length - 1;
    }
    document.getElementById('slide-img').src = myArr[pos]
    if (pos == 0) {
        document.getElementById('r1').checked = true
        document.getElementById('r2').checked = false
        document.getElementById('r3').checked = false
        document.getElementById('r4').checked = false
    }

    if (pos == 1) {
        document.getElementById('r1').checked = false
        document.getElementById('r2').checked = true
        document.getElementById('r3').checked = false
        document.getElementById('r4').checked = false
    }

    if (pos == 2) {
        document.getElementById('r1').checked = false
        document.getElementById('r2').checked = false
        document.getElementById('r3').checked = true
        document.getElementById('r4').checked = false
    }

    if (pos == 3) {
        document.getElementById('r1').checked = false
        document.getElementById('r2').checked = false
        document.getElementById('r3').checked = false
        document.getElementById('r4').checked = true
    }
}

function check(n) {
    document.getElementById('slide-img').src = myArr[n]
}
document.querySelectorAll('.navLink').forEach(link =>{
    if(link.href === window.location.href){
        link.setAttribute('aria-current', 'page')
    }
})

