const burger = document.querySelector('#burger');
const menu = document.querySelector('#menu');

burger.addEventListener('click' , ()=>{
    if (menu.classList.contains('hidden')){
    menu.classList.remove('hidden');
    } else{
        menu.classList.add('hidden');
    }
})

//when burger is clicked, look at menu if it contains hidden class, remove to show the menu, if not when clicked again add hidden