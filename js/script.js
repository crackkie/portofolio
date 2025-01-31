// slider

let slides = document.getElementsByClassName('image');
indexSlide = 0;

function changeIndex(n){
    indexSlide += n
   
    if (indexSlide >= slides.length) {
        indexSlide = 0; 
    } else if (indexSlide < 0) {
        indexSlide = slides.length - 1;  
    }
   
    changeSlide()
}

function changeSlide(){

    for (let i =0; i < slides.length; i++){
        slides[i].classList.remove('active');
    }

    slides[indexSlide].classList.add('active');

}
        

// changeSlide()
setInterval(changeIndex,3000,1);

// window.onload = greetingPopup();

window.addEventListener('scroll', () =>{
    if(window.scrollY > 400){
        document.getElementById('header').classList.add('scroled')
    }else{
        document.getElementById('header').classList.remove('scroled')
    }
})


function greetingPopup(){
    let button = document.getElementById('submit-greeting');
    let popup = document.getElementById('popup');
    popup.style.display = 'flex'
    document.body.style.overflow = 'hidden'

    button.addEventListener('click', ()=>{
        let nameUser = document.getElementById('greeting-form').value;

        if(nameUser.trim() === ""){
            document.getElementById('eror').innerHTML = 'Please Enter Your Name ';
            document.getElementById('greeting-form').style.border = '2px solid red'
            return false;
    
        }else{
            document.body.style.overflow = ''
            document.getElementById('eror').innerHTML = '';
            popup.style.display = 'none'
            document.getElementById('user-name').innerHTML = nameUser;
        }

    })
};
