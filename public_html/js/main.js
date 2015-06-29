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
var options = {
    draggable : true,
    color : '#3B70BF',
    send : null 
};
var topC;
var leftC;
$('.help').attr("draggable", "true");
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
$('.x').click(close);
$('#messenger-submit').click(function(){
    if (options.send != null){
        options.send();
    }
});
function set(myOptions){
    var h = $('.help');
    // if (myOptions.color != null){
        
    // }
    if (myOptions.send != null){
        options.send = myOptions.send;
    }
    if (myOptions.draggable != null){
        h.attr("draggable",myOptions.draggable);
    }
    if (myOptions.top != null){
        h.css("top", myOptions.top);
    }
}
//Dragging scripts
//TODO fix cursor
function drag_start(event) {
    var style = window.getComputedStyle(event.target, null);
    event.dataTransfer.setData("text/plain",
    (parseInt(style.getPropertyValue("left"),10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"),10) - event.clientY));
} 
function drag_over(event) { 
    event.preventDefault(); 
    return false; 
} 
function drop(event) { 
    var offset = event.dataTransfer.getData("text/plain").split(',');
    var dm = document.getElementById('help');
    dm.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
    dm.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
    event.preventDefault();
    return false;
} 
var dm = document.getElementById('help'); 
dm.addEventListener('dragstart',drag_start,false); 
document.body.addEventListener('dragover',drag_over,false); 
document.body.addEventListener('drop',drop,false); 


    // var message = "mailto:mrfix84@gmail.com?subject=hello&body=";
    // message += document.getElementById("message").value;
    // window.open(message, '_blank');