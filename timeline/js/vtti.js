$(function() {
  $('a.page-scroll').bind('click', function(event) {
      var $anchor = $(this);
      var $navHeight = $("nav").height();
      $('html, body').stop().animate({
          scrollTop: $($anchor.attr('href')).offset().top - $navHeight
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
  });
});

jQuery(function($) {
    var path = window.location.href; // because the 'href' property of the DOM element is the absolute path
    $('.side-menu .nav-link').each(function() {
     if (this.href === path) {
      $(this).addClass('active');
     }
    });
});

const accordionItems = document.querySelectorAll('.accordion-collapse')
const acc = document.getElementById('accordionExample')

accordionItems.forEach((el)=>{
    el.addEventListener('shown.bs.collapse',(e)=>{
        var scrollOffset = acc.scrollTop + el.parentNode.offsetTop
        acc.scroll({
            top: scrollOffset,
            left: 0, 
            behavior: 'smooth'
        })
    })
})

/* $(document).scroll(function(e){
    var scrollTop = $(document).scrollTop();
    if(scrollTop > 250){
        console.log(scrollTop);
        $('.navbar').removeClass('static-top').addClass('fixed-top');
    } else {
        $('.navbar').removeClass('fixed-top').addClass('static-top');
    }
}); */

$(document).scroll(function(e){
  var scrollTop = $(document).scrollTop();
  if(scrollTop > 0){
      console.log(scrollTop);
      $('.top-container').removeClass('static-top').addClass('fixed-top').addClass('sticky');
  } else {
      $('.top-container').removeClass('fixed-top').removeClass('sticky').addClass('static-top');
  }
});

$("#searchToggle").click(function(){
    $(".search").toggle();
});

var link='',pathname = window.location.href;
$('a').each(function(){
    link = $(this).attr('href');
    if(link[0]=="#"){
        $(this).attr('href', pathname + link);
    }
});

// The function actually applying the offset
function offsetAnchor() {
    if (location.hash.length !== 0) {
      window.scrollTo(window.scrollX, window.scrollY - 300);
    }
  }
  
  // Captures click events of all <a> elements with href starting with #
  $(document).on('click', 'a[href^="#"]', function(event) {
    // Click events are captured before hashchanges. Timeout
    // causes offsetAnchor to be called after the page jump.
    window.setTimeout(function() {
      offsetAnchor();
    }, 0);
  });
  
  // Set the offset when entering page with hash present in the url
  window.setTimeout(offsetAnchor, 0);

  $("#research-category a").click(function() {
    var category = $(this).data("category");
    $("#research-areas li").hide();
    $("#research-areas1 h3").hide();
    /*$("p.instructions").hide();*/
    $("#research-areas li." + category).show();
    $("#research-areas1 h3." + category).show();
    return false;
  });

  $("#mission a").click(function() {
    var category = $(this).data("category");
    $("#mission-area li").hide();
    $("#mission-area1 h3").hide();
    $("#mission-area li." + category).show();
    $("#mission-area1 h3." + category).show();
    return false;
  });
  /*
  function garage() {
    document.getElementById('map-text').innerHTML="Garage Addition";
  }
  function surface() {
    document.getElementById('map-text').innerHTML="Surface Street";
  }
  function maintenance() {
    document.getElementById('map-text').innerHTML="Smart Roads/Vehicle Maintenance";
  }
  function hub() {
    document.getElementById('map-text').innerHTML="Automation Hub";
  }
  function nstsce() {
    document.getElementById('map-text').innerHTML="National Surface Transportation Safety Center for Excellence";
  }
  function control() {
    document.getElementById('map-text').innerHTML="Smart Roads Control & VTTI Operations";
  }
  function pump() {
    document.getElementById('map-text').innerHTML="Pump House for Weather Towers";
  }
  function rural() {
    document.getElementById('map-text').innerHTML="Rural Roadway";
  }
  function lipsey() {
    document.getElementById('map-text').innerHTML="Lipsey Farm including Off-Road Sections";
  }
  function annex() {
    document.getElementById('map-text').innerHTML="Office Annex";
  }
  */
  
  $(document).ready(function(){
    $('.scrolling').slick({
        dots: true,
        arrows: true,
        infinite: false,
        prevArrow: '<img src="img/left-arrow.png" id="slideBack" type="button" alt="Previous">',
        nextArrow: '<img src="img/right-arrow.png" id="slide" alt="Next" type="button">',
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });  
  });