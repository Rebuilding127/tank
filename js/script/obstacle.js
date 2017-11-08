define(['jquery'], function($) {
    // 障碍物
    var bullet = function Bullet(options) {
        /**
         * icon 图标
         * camp 阵营
         * direction 方向
         * velocity 速度
         * point 初始坐标：top: 0, left: 0
         */
        options = options || {};
        this.icon = options.icon || 'tank';
        this.camp = options.camp || 0;
        this.direction = options.direction || 'S';
        this.velocity = options.velocity || '5';
        this.point = $.extend({
            top: 0,
            left: 0
        }, options.point);
    }

    return bullet;
});