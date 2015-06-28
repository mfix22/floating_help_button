// $('[data-toggle="tooltip"]').tooltip();
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
    });
};
var open = function(elem){
    $('#shadow').show();
    $('.help-text').hide();
    $(elem).addClass('active');
    $(elem).removeClass('inactive');
    $(elem).animate({
        top: '50%',
        left: '50%',
        width: '500px',
        height: '300px'
    }, function(){
        //Maybe don't make this a callback
        $('#helpbox').show();
    });
};
$('.help.inactive').click(function(){
    open(this);
});
$('#shadow').click(function(){
    close();
});
// $('#x').click(function(){
//     close();
// })

