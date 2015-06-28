// $('[data-toggle="tooltip"]').tooltip();
// var open = function(elem){
//     $(elem).unbind("click");
//     $('#shadow').show();
//     $('.help-text').hide();
//     $(elem).addClass('active');
//     $(elem).removeClass('inactive');
//     $(elem).animate({
//         top: '50%',
//         left: '50%',
//         width: '500px',
//         height: '300px'
//     }, function(){
//         //Maybe don't make this a callback
//         $('#helpbox').show();
//     });
// };
var close = function(){
    $('#helpbox').hide();
    $('#shadow').hide();
    $('.help').animate({
        top: '85%',
        left: '80%',
        width: '50px',
        height: '50px'
    }, function(){
        $('.help').removeClass('active');
        $('.help').addClass('inactive');
        $('.help-text').show();
        $('.help').bind("click", open);
    });
};
var open = function(){
    $('.help').unbind("click");
    $('#shadow').show();
    $('.help-text').hide();
    $('.help').addClass('active');
    $('.help').removeClass('inactive');
    $('.help').animate({
        top: '50%',
        left: '50%',
        width: '500px',
        height: '300px'
    }, function(){
        //Maybe don't make this a callback
        $('#helpbox').show();
    });
};
$('.help.inactive').click(open);
$('#shadow').click(close);
$('#x').click(close);
// $('#messenger-submit').click(function(){
//     var message = "mailto:mrfix84@gmail.com?subject=hello&body=";
//     message += document.getElementById("message").value;
//     window.open(message, '_blank');
// });

