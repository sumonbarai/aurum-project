$(document).ready(function(){
// banner-slider
$('.banner-slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:3000,
    prevArrow:'<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow:'<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>'
    
  });
// collection-slider
$('.collection-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay:true,
    autoplaySpeed:3000,
    arrows:false,
    responsive: [
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true
        }
      }
      
    ]
    
  });
 

});