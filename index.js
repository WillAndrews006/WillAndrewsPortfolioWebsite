

var affixTop = $('.aboutMeSection').offset().top;       // get initial position of the aboutMeSection 1058
var unafix = 2000;
$(window).scroll(function() {                  // assign scroll event listener


    var currentScroll = $(document).scrollTop(); // get current position of Scroll


    if (currentScroll >= affixTop - 3 && currentScroll <3500) {           // apply position: fixed if you pass the aboutMeSection
        $('.aboutMeImage').css({                      // scroll to that element or below it
            position: 'fixed',
            top: '15%',
            left: '7.25%',
            width: '30%'
        });
        $('.navbar').css({
           visibility: 'visible'
        });
    }
else if (currentScroll >=3500 ){
  $('.aboutMeImage').css({                      // if you scroll above it
      position: 'absolute',
      top: '155%',
      left: '15%',
      width: '60%'


  });

  $('.navbar').css({
     visibility: 'visible'
  });

}
    else {                                   // apply position: relative
        $('.aboutMeImage').css({                      // if you scroll above it
            position: 'absolute',
            top: '15%',
            left: '15%',
            width: '60%'


        });
        $('.navbar').css({
           visibility: 'hidden'
        });
    }

});
