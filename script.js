//inputs
let name1 = document.querySelector('#grab-name');
let lName = document.querySelector('#grab-lname');
let mail = document.querySelector('#grab-email');
let pass = document.querySelector('#grab-password');
let btn = document.querySelector('#main-btn');

//icons
let err1 = document.querySelector('.err1');
let err2 = document.querySelector('.err2');
let err3 = document.querySelector('.err3');
let err4 = document.querySelector('.err4');

//alert textsD
let errt1 = document.querySelector('.alert-1');
let errt2 = document.querySelector('.alert-2');
let errt3 = document.querySelector('.alert-3');
let errt4 = document.querySelector('.alert-4');

//borders
let box1 = document.querySelector('.box1');
let box2 = document.querySelector('.box2');
let box3 = document.querySelector('.box3');
let box4 = document.querySelector('.box4');

const lengthValidator = (str) =>{
    let x = str.value.length;
    if(x == 0){
        return false
    }else{
        return true
    }
}

const emailIsValid = (email) => {
    email = mail.value;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }



const fullValidator = () => {
    if(lengthValidator(name1)==false){
        err1.style.visibility = 'visible';
        errt1.style.display = 'flex';
        box1.style.border = "1px solid rgba(241, 37, 37, 0.8)";
        name1.placeholder = '';
    }else if(lengthValidator(name1)==true){
        err1.style.visibility = 'hidden';
        errt1.style.display = 'none';
        box1.style.border = '1px solid hsla(246, 25%, 77%, 60%)';
    }

    if(lengthValidator(lName)==false){
        err2.style.visibility = 'visible';
        errt2.style.display = 'flex';
        box2.style.border = "1px solid rgba(241, 37, 37, 0.8)";
        lName.placeholder = ''
    }else if(lengthValidator(lName)==true){
        err2.style.visibility = 'hidden';
        errt2.style.display = 'none';
        box2.style.border = '1px solid hsla(246, 25%, 77%, 60%)'
    }

    if(emailIsValid(mail)==false){
        err3.style.visibility = 'visible';
        errt3.style.display = 'flex';
        box3.style.border = "1px solid rgba(241, 37, 37, 0.8)"
        mail.placeholder = 'email@example/com'
    }else if(emailIsValid(mail)==true){
        err3.style.visibility = 'hidden';
        errt3.style.display = 'none';
        box3.style.border = '1px solid hsla(246, 25%, 77%, 60%)'
    }

    if(lengthValidator(pass)==false){
        err4.style.visibility = 'visible';
        errt4.style.display = 'flex';
        box4.style.border = "1px solid rgba(241, 37, 37, 0.8)"
        pass.placeholder = ''
    }else if(lengthValidator(pass)==true){
        err4.style.visibility = 'hidden';
        errt4.style.display = 'none';
        box4.style.border = '1px solid hsla(246, 25%, 77%, 60%)'
    }
}
btn.addEventListener('click',fullValidator)
