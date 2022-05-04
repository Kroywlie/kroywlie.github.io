let button = document.getElementById("jsb1");
const form = document.querySelector('#blablabla');
const popup = document.querySelector('.popup');
button.addEventListener('click', () => {
    popup.classList.add('popup_open');
    form.classList.add('open');
});

const minus = document.querySelector('[data-action="minus"]');
const plus = document.querySelector('[data-action="plus"]');
let scet = document.querySelector('[data-counter]');

minus.addEventListener('click', function(){
    if(parseInt(scet.innerText) > 0){
    scet.innerText = --scet.innerText;
    }
});

plus.addEventListener('click', function(){
    if(parseInt(scet.innerText) < 999){
        scet.innerText = ++scet.innerText;
        }
});