"use strict";

const header = document.getElementById('header');
const navToggle = document.getElementById('nav-toggle');
const navLink = document.querySelectorAll('.nav-link');
    // console.log(navLink);


navToggle.addEventListener('click', () =>{
    header.classList.toggle('active');
});

navLink.forEach(function (nav){
    nav.addEventListener('click', function(){
        this.classList.toggle('open');

        if (nav.classList.contains('open')){
            navLink.forEach(function (nav){
                nav.classList.remove('open');
            });
            nav.classList.toggle('open');
        }
    });
})