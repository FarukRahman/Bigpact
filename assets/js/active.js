(function ($) {
	"use strict";

    jQuery(document).ready(function($){


        
        $('[data-toggle="tooltip"]').tooltip();

       // $('.mainmenu').slicknav();

        $('.homepage-slides').owlCarousel({
            items:1,
            loop:true,          
            dots:false,
            nav:true,
            autoplay:true,
            navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right">']
   
        
        });



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	