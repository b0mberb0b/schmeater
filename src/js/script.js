$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') ) {
        $(this).collapse('hide');
    }
});
$('body').bind('click', function(e) {
    if($(e.target).closest('.navbar').length == 0) {
        // click happened outside of .navbar, so hide
        var opened = $('.navbar-collapse').hasClass('collapse in');
        if ( opened === true ) {
            $('.navbar-collapse').collapse('hide');
        }
    }
});
// var subNav = $('#subNav');
// $(window).resize(function() {
//   if( subNav.css('position') == 'fixed' ){
//     subNav.detach().appendTo($('#sideNav'));
//     subNav.removeAttr('data-spy data-offset-top');
//     subNav.removeClass('affix-top');
//     $
//     console.log("made it");
//   } else {
//     subNav.detach().appendTo($('#topNav'));
//     subNav.attr({'data-spy': 'affix', 'data-offset-top': '175'});
//   }
// });
