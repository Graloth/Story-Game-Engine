$( document ).ready(function() {
    $("html").removeClass("no-js");

    $('.timedate-money .money').number( true, 2 );

    $('ul.stats.primary li.stat .bar').each(function(){
        var currentValue, maxValue, percentage;
        currentValue = $(this).parent().attr('data-current');
        maxValue = $(this).parent().attr('data-max');
        percentage = 100 / (maxValue / currentValue);
        $(this).animate({width: percentage+'%'});
    });
    $('ul.stats.secondary li.stat .bar').each(function(){
        $(this).animate({width: $(this).parent().attr('data-current')+'%'});
    });
    $('ul.party li.unit .bar .fill').each(function(){
        $(this).animate({width: $(this).parent().parent().attr('data-current')+'%'});
    });
    $('div.main').niceScroll({
        cursorcolor:"#191a1e",
        cursorwidth: "10px",
        cursorborder: "0px none",
        hidecursordelay: 1600
    });
    $('div.main').focus();

    var keys = [];
    $('.bottombar div.button').each(function(){
        keys.push($(this).attr('data-key'));
        $(this).append('<span class="key">'+String.fromCharCode($(this).attr('data-key'))+'</span>');
    });

    $('body').keydown(function(event){
        if ($.inArray(event.keyCode, keys) && !event.shiftKey && !event.ctrlKey && !event.altKey) {
            $('.bottombar .button[data-key="'+event.keyCode+'"]').addClass('pressed');
        }
        //console.log(event.keyCode);
    });
    $('body').keyup(function(event){
        if ($.inArray(event.keyCode, keys) && !event.shiftKey && !event.ctrlKey && !event.altKey) {
            $('.bottombar .button[data-key="'+event.keyCode+'"]').removeClass('pressed');
        }
    });
});