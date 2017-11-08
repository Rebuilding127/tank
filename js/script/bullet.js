define(['jquery'], function($) {
    // 子弹
    var bullet = function Bullet(options) {
        /**
         * icon 图标
         * camp 阵营：0-敌方（默认）、1-自己、2-队友
         * direction 方向：大写字母WSAD分别表示上下左右
         * velocity 速度
         * point 初始坐标：top: 0, left: 0
         */
        options = options || {};
        this.icon = options.icon || 'bullet';
        this.camp = options.camp || 0;
        this.direction = options.direction || 'S';
        this.velocity = options.velocity || '15';
        this.point = $.extend({
            top: 0,
            left: 0
        }, options.point);
    }

    return bullet;
});