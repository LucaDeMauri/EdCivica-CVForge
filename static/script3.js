let btn1 = document.getElementById('c1');
let btn2 = document.getElementById('c2');
let btn3 = document.getElementById('c3');
let btn4 = document.getElementById('c4');


btn1.addEventListener('click',function(){
   this.classList.add('active')
   btn2.classList.remove('active')
   btn3.classList.remove('active')
   btn4.classList.remove('active')
})


btn2.addEventListener('click',function(){
    this.classList.add('active')
    
    btn1.classList.remove('active')
    btn3.classList.remove('active')
    btn4.classList.remove('active')
 })
 
 btn3.addEventListener('click',function(){
    this.classList.add('active')
    btn1.classList.remove('active')
    btn2.classList.remove('active')
    btn4.classList.remove('active')
 })
 
 btn4.addEventListener('click',function(){
    this.classList.add('active')
    btn1.classList.remove('active')
    btn3.classList.remove('active')
    btn2.classList.remove('active')
 })
 