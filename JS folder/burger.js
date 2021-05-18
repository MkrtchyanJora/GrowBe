 const manMenu = document.querySelector('.mainManu');
 const closeMenu = document.querySelector('.closeManu');
 const openMenu = document.querySelector('.openMenu');
 let link2 =document.querySelector('.link2')
 let link3 =document.querySelector('.link3')
 let link4 =document.querySelector('.link4')
 let link5 =document.querySelector('.link5')
 let link6 =document.querySelector('.link6')
 let link7 =document.querySelector('.link7')



openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);
export function show(){
    manMenu.style.display = "flex";
    manMenu.style.top = '-18px'
}

export function close(){
    manMenu.style.top = '-108%';
}

link2.onclick = function(){
    manMenu.style.display ='none'
}
link3.onclick = function(){
    manMenu.style.display ='none'
}
link4.onclick = function(){
    manMenu.style.display ='none'
}
link5.onclick = function(){
    manMenu.style.display ='none'
}
link6.onclick = function(){
    manMenu.style.display ='none'
}
link7.onclick = function(){
    manMenu.style.display ='none'
}



