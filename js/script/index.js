require.config({
    // baseUrl: 'js/',
    paths: {
        'jquery': '../lib/jquery-3.2.1.slim',
        'tank': 'tank'
    }
});
require(['jquery', 'tank'], function($, Tank) {
    console.log('Hello World !');

    var t1 = new Tank({
        icon: 't1',
        direction: 'A'
    });
    console.log(t1);
    t1.fire({speed: 10});
    t1.move();

    var t2 = new Tank({
        icon: 't2',
        direction: 'D'
    });
    t2.fire({speed: 15});
    t2.move();


    var container = {
        top: $('.container').offset().top,
        left: $('.container').offset().left
    };
    var ico = $('#ico-1'), top = ico.offset().top, left = ico.offset().left;
    var speed = 5;
    // console.log(top + ' ' + left);
    // console.log(ico.offset().top + ' ' + ico.offset().left);
    // console.log(ico.position().top + ' ' + ico.position().left);
    // console.log(container.top + ' ' + container.left);

    document.onkeydown = function(event) {
        var e = event || window.event || arguments.callee.caller.arguments[0];

        console.log('键盘控制：上下左右');
        console.log(top + ' ' + left);

        // 键盘控制：上下左右
        if(e && e.keyCode == 38) {
            console.log('上');
            if (top - speed > 0) {
                ico.offset({top: top - speed});
            }
        }
        if(e && e.keyCode == 40) {
            ico.offset({top: top + speed});
        }
        if(e && e.keyCode == 37) {
            ico.offset({left: left - speed});
        }
        if(e && e.keyCode == 39) {
            console.log('D');
            left = left + speed;
            setTimeout(function(){
                ico.offset({left: left});
            },1000);
            // ico.delay(5000).offset({left: left});
        }
        
        //ico.offset({ top: ico.offset().top + 1, left: ico.offset().left + 1 });
    }
});
