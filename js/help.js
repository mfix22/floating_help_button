var send_option = null;
var opened = false;
var topC;
var leftC;
$('.help').attr("draggable", "true");
$("body").append('<div class="col-xs-12" id="shadow"></div>');
$("body").bind('keypress', function(e) {
    var code = e.keyCode || e.which;
    if(code == 104 || code == 72) { //Enter keycode
       if (!opened){
           open();
       }
    }
});
var close = function(){
    opened = false;
    var h = $('.help');
    $('.helpbox').hide();
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
    opened = true;
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
        $('.helpbox').show();
        $('#email').focus(); //TODO delete this
    });
};
$('.help.inactive').click(open);
$('#shadow').click(close);
$('.x').click(close);
$('#help-submit').click(function(){
    if (options.send != null){
        send_option();
    }
});
function set(myOptions){
    var h = $('.help');
    if (myOptions.send != null){
        send_option = myOptions.send;
    }
    if (myOptions.draggable != null){
        h.attr("draggable", myOptions.draggable);
    }
    if (myOptions.top != null){
        h.css("top", myOptions.top);
    }
    if (myOptions.left != null){
        h.css("left", myOptions.top);
    }
    if (myOptions.color != null){
        h.css("color", myOptions.color);
        $('#help-submit').css("background-color", myOptions.color);
        $('.icon').css('color', myOptions.color);
    }
    if (myOptions.background_color != null){
        h.css("background-color", myOptions.background_color);
    }
}
//Dragging scripts
// //TODO fix cursor
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
