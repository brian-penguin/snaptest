window.onload = function () {
    var s = Snap(1000,1000);

    var glass = s.rect(10,10, 300,500);
    glass.attr({
        fill:'#90ceff',
        stroke:'#4292ff',
        strokeWidth: 2
    });

    var alcohol = s.rect(13,400, 294,100);
    alcohol.attr({
        fill:'#81201a'
    });

    var mixer = s.rect(13,50, 294,350);
    mixer.attr({
        fill:'#2a0415'
    });

};
