const form = document.getElementById('form');
const email = document.getElementById('email');
const errorMsg = document.querySelector('small');
const errorIcon = document.querySelector('.section__form__error-img');


form.addEventListener('submit', e=>{
  e.preventDefault()//refresh the page
  const emailVal = email.value;
  if (!validateEmail(emailVal)){
    errorMsg.classList.add('error');
    errorIcon.classList.add('error');
    form.classList.add('error');
    form.classList.remove('success');
  }else{
    errorMsg.classList.remove('error');
    errorIcon.classList.remove('error');
    form.classList.remove('error');
    form.classList.add('success');
    document.body.innerHTML = `<div style="display:flex; align-items: center; justify-content: center; padding:3rem;"><h1>Thank you!</h1></div>`;
  }
})


function validateEmail(email) {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase());
}
