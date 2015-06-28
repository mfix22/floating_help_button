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
var topC;
var leftC;

var close = function(){
    var h = $('.help');
    $('#helpbox').hide();
    $('#shadow').hide();
    h.animate({
        top: topC,
        left: leftC,
        width: '50px',
        height: '50px'
    }, function(){
        h.removeClass('active');
        h.addClass('inactive');
        $('.help-text').show();
        h.bind("click", open);
    });
};
var open = function(){
    var h = $('.help');
    topC = h.css("top");
    leftC = h.css("left");
    h.unbind("click");
    $('#shadow').show();
    $('.help-text').hide();
    h.addClass('active');
    h.removeClass('inactive');
    h.animate({
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

