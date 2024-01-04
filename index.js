
//Nav scroll 
let nav =document.querySelector('nav');

window.addEventListener('scroll',()=>{
  nav.classList.toggle('nav-scroll',window.scrollY > 0);

});

// active toggle 
let  AllNavLinkA = document.querySelectorAll('.nav-links li a');


// active add......
AllNavLinkA.forEach(item=>{
  item.addEventListener('click',()=>{
    removeActive();
    item.classList.add('active');
  })
});





// Active remove..........

// const removeActive =()=> AllNavLinkA.forEach(itme=>{
//   itme.classList.remove('active')
// });

//Nav links toggler....

let menuBars = document.querySelector(' nav button');
let navLinks=document.querySelector('.nav-links')
menuBars.addEventListener('click',()=>{
navLinks.classList.toggle('nav-links-block');
});
