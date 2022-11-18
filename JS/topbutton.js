const TBTN = document.getElementById('topbutton');

const checkScroll=()=>{

    let pageOffset = window.pageYOffset;

    if(pageYOffset !== 0){

        TBTN.classList.add('show');  
    }else{
        TBTN.classList.remove('show'); 
    }
}

const moveBackToTop=()=>{
    if(window.pageYOffset > 0 ){
        window.scrollTo({top:0, behavior:"smooth"});
    }
}


window.addEventListener('scroll', checkScroll);

TBTN.addEventListener('click',moveBackToTop);