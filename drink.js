window.onload = function () {
    var s = Snap(1000,1000);

    var glass = s.rect(10,10, 300,500);
    glass.attr({
        fill:'#a1c5d7',
        stroke:'#9cbfd0',
        strokeWidth: 2
    });

    var alcohol = s.rect(13,400, 294,100);
    alcohol.attr({
        fill:'#81201a',
        opacity: 0.9
    });

    var mixer = s.rect(13,50, 294,350);
    mixer.attr({
        fill:'#2a0415',
        opacity: 0.9
    });

    var bubble1 = s.circle(65,330, 30);
    var bubble2 = s.circle(150,400, 40);
    var bubble3 = s.circle(250,200, 20);
    var bubble4 = s.circle(220,280, 10);
    var bubble5 = s.circle(100,150, 30);

    var bubbles = s.group(bubble5, bubble4, bubble3, bubble2, bubble1);
    bubbles.attr({
        fill: '#93b4c5',
        opacity: 0.5,
        stroke: '#8dacbc',
        strokeWidth:1
    });

    s.mouseover(function(event) {
        bubbling();
    });

    var bubbling = function(){
        bubble1.animate({r:40},2000);
        bubble2.animate({r:30},2000);
        bubble3.animate({r:30},2000);
        bubble4.animate({r:20},2000);
        bubble5.animate({r:20},2000);
        reverseBubbling();
    };
    var reverseBubbling = function(){
        bubble1.animate({r:30},2000);
        bubble2.animate({r:40},2000);
        bubble3.animate({r:20},2000);
        bubble4.animate({r:10},2000);
        bubble5.animate({r:30},2000);
    };

    // s.mouseout(function(event){
    //     bubble1.animate({r:30},1000);
    //     bubble2.animate({r:40},1000);
    //     bubble3.animate({r:20},1000);
    //     bubble4.animate({r:10},1000);
    //     bubble5.animate({r:30},1000);
    // });

};
