//$("#ubercode").click(function(){
//    var r = document.createRange();
//    var w=$("#ubercode");
//    r.selectNodeContents(w); 
//    var sel=window.getSelection(); 
//    sel.removeAllRanges(); 
//    sel.addRange(r);
//});
$('[data-toggle="tooltip"]').tooltip();
$('.help').click(function(){
    $('.help').animate({
        border-radius: '0px',
        height: '500px',
        width: '300px'
    });
});

// $('#ubercode').click(function(){
//     $('#ubercode').tooltip('show');
//     $('#lyftcode').tooltip('hide');
// });
// $(window).scroll(function(){
//     $('.tooltip').css('position', 'fixed');
// });