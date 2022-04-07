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
