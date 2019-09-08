$(document).ready(function()
{
        // Transition effect for navbar 
        $(window).scroll(function()
        {
          // checks if window is scrolled more than 500px, adds/removes solid class
          if($(this).scrollTop() > 0)
          { 
              $('.navbar').addClass('nav-solid');
              console.log('More than 0 & doesnt have solid class');
          } else if(!$('.navbar').is(':hover'))
          {
              $('.navbar').removeClass('nav-solid');
          }
        });

        // Check on mouse entering nav bar
        $('.navbar').mouseenter(function() 
        {
            $('.navbar').addClass('nav-solid');
        });

        // Check on mouse leaving navbar
        $('.navbar').mouseleave(function() 
        {
            if($(window).scrollTop() <= 0)
            {
                $('.navbar').removeClass('nav-solid');
            }
        });
});