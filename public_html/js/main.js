//$("#ubercode").click(function(){
//    var r = document.createRange();
//    var w=$("#ubercode");
//    r.selectNodeContents(w); 
//    var sel=window.getSelection(); 
//    sel.removeAllRanges(); 
//    sel.addRange(r);
//});
// $('[data-toggle="tooltip"]').tooltip();
$('.help').click(function(){
    $('#shadow').show();
    $('.help-text').hide();
    $(this).addClass('active');
    $(this).removeClass('inactive');
    $(this).animate({
        top: '25%',
        left: '50%',
        width: '500px',
        height: '300px'
    });
});
$('#shadow').click(function(){
    $('#shadow').hide();
    $('.help-text').show();
    $('.help').animate({
        top: '85%',
        left: '80%',
        width: '50px',
        height: '50px'
    });
    $('.help').removeClass('active');
    $('.help').addClass('inactive');
    //TODO change class thing to a classback
});

// $('#ubercode').click(function(){
//     $('#ubercode').tooltip('show');
//     $('#lyftcode').tooltip('hide');
// });
// $(window).scroll(function(){
//     $('.tooltip').css('position', 'fixed');
// });