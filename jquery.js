$(document).ready(function() { 
     $('a[href^="#"]').not('a[href="#carousel"], a[href="#nav"],a[data-toggle="modal"]' ).bind('click.smoothscroll',function(e) { 
 		e.preventDefault(); 
 		var target = this.hash, 
 		$target = $(target); 
 		$('html, body').stop().animate( { 
 			'scrollTop': $target.offset().top 
 		}, 1000, 'swing', function() { 
 			window.location.hash = target; 
 		}); 
 	}); 
 }); 
 
 
 $(document).ready(function() { 
     $("#to-top").hide(); 
 	$(function() { 
     $(window).scroll(function() { 
         if ($(this).scrollTop() > 100) { 
             $('#to-top').fadeIn(); 
         } else { 
             $('#to-top').fadeOut(); 
         } 
     }); 
 	   $('#to-top').click(function() { 
 	   $('body,html').animate({scrollTop: 0}, 900); 
 	   return false; 
         }); 
 	}); 
 }); 
