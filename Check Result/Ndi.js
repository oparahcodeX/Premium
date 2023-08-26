const header = document.querySelector ('header');

function stickyNavbar(){
	header.classList.toggle('scrolled', window.pageYOffset > 0);
}

stickyNavbar();

window.addEventListener('scroll', stickyNavbar);


const currentLocation = location.href;
const menuItem = document.querySelectorAll('.Bg-links  a');

const menuLength = menuItem.length;

for(var i = 0; i < menuLength; i++){
	if (menuItem [i].href === currentLocation){
		menuItem [i].className = 'active';

	}
}





 var Trendsbuttons = document.querySelectorAll('.Trends-Slide .Trends-button button');
var TrendsPanel = document.querySelectorAll('.Trends-Slide .Trends-panels');



function trends (panelIndex, colorCode){
  Trendsbuttons.forEach(function(node) {
       node.style.backgroundColor ="";
       node.style.color ="";
  }); 

  Trendsbuttons[panelIndex].style.backgroundColor =colorCode;
  Trendsbuttons[panelIndex].style.color ='';



TrendsPanel.forEach(function(node) {
       node.style.display ="none";
       node.style.color ="";
  }); 
  
  TrendsPanel[panelIndex].style.display='block';
  TrendsPanel[panelIndex].style.backgroundColor='block';
}

trends(0, '');




$('.Trends-button button').on('click', function(){
  $(this).addClass('active').siblings().removeClass('active');
})

$(document).ready(function(){
  $('.Trends-button button:first').addClass("active");
})





  var swiper = new Swiper(".slideD", {
        pagination: {
          el: ".swiper-pagination",
        },
        speed: 1500,
         autoplay:{
          delay: 11000,
          disableOnInteraction: false,
        },
      });



  var swiper = new Swiper(".testimonial-slide", {
        rewind: true,
        speed: 4000,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },

        });



  var swiper = new Swiper(".eVENTS", {
        pagination: {
          el: ".swiper-pagination",
        },
        speed: 1500,
         autoplay:{
          delay: 18000,
          disableOnInteraction: false,
        },
      });




let slideV = document.querySelector('.Seach-out-page');

function SlideOut(){
	slideV.classList.toggle('Seach-slide');
}



function openBlog(){
  document.getElementById('BLOG').style.display = 'block';
}


function closeblog(){
  document.getElementById('BLOG').style.display = 'none';
}


let mEdia = document.querySelector('.Media-slide');

function ease(){
	mEdia.classList.toggle('Media-slideLeft');
}




let sr = ScrollReveal({
duration:2500,
distance:'60px',


});


sr.reveal(".Edit-content", {origin:"bottom", delay:1000});
sr.reveal(".Q1", {origin:"top", delay:1000});
sr.reveal(".Q2", {origin:"left", delay:1000});
sr.reveal(".Q3", {origin:"right", delay:1000});
sr.reveal(".Q4", {origin:"bottom", delay:1000});
sr.reveal(".Q22", {origin:"bottom", delay:1000});
sr.reveal(".Our-program", {origin:"left", delay:1000});


