window.addEventListener('scroll',reveal)
function reveal(){
    var reveals =document.getElementsByClassName('reveal')
    for (var i=0;i< reveals.length; i++){
        var windowHeight =window.innerHeight;
        var revealtop= reveals[i].getBoundingClientRect().top;
        var revealpoint=50;
        if(revealtop<windowHeight-revealpoint){
            reveals[i].classList.add('active')
        }
        else{
            reveals[i].classList.remove('active')
        }
    }
}
var hi=document.getElementsByClassName('hi')[0]
setTimeout(()=>{
    // console.log('clo')
    hi.classList.add('active1')
    hi.classList.remove('reveal1')
},500)
 window.addEventListener('scroll',()=>{
     let navbar = document.getElementsByClassName('navbar')[0];
     let windowPosition = window.scrollY > 300;
     navbar.classList.toggle('scrolling-active',windowPosition)
 })

var wlcm_bg=document.getElementsByClassName('wlcm-bg')[0]
setTimeout(()=>{
    wlcm_bg.classList.add('close')
    console.log('hey')
},3000)
