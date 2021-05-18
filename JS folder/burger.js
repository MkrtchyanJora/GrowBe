 const manMenu = document.querySelector('.mainManu');
 const closeMenu = document.querySelector('.closeManu');
 const openMenu = document.querySelector('.openMenu');


openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
export function show(){
    manMenu.style.display = "flex";
    manMenu.style.top = '0'
}

export function close(){
    manMenu.style.top = '-100%';
}




