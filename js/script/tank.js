define(['jquery', 'bullet'], function($, Bullet) {
    // 坦克
    var tank = function Tank(options) {
        /**
         * icon 图标
         * camp 阵营：0-敌方（默认）、1-自己、2-队友
         * direction 方向：大写字母WSAD分别表示上下左右
         * speed 速度
         * point 初始坐标：top: 0, left: 0
         */
        options = options || {};
        this.icon = $.extend({
            name: 'tank',
            width: 2,
            height: 2
        }, options.icon);
        this.camp = options.camp || 0;
        this.direction = options.direction || 'S';
        this.movable = options.movable || true;
        this.speed = options.speed || 5;
        this.point = $.extend({
            top: 0,
            left: 0
        }, options.point);
        this.bullet = null;
    }

    // 移动
    tank.prototype.moving = function() {
        setInterval(function() {
            if (this.movable) {
                switch (this.direction) {
                    case 'W':
                        this.point.top = this.point.top - this.speed;
                        this.offset({top: this.point.top});
                        break;
                    case 'S':
                        this.point.top = this.point.top + this.speed;
                        this.offset({top: this.point.top});
                        break;
                    case 'A':
                        this.point.left = this.point.left - this.speed;
                        this.offset({left: this.point.left});
                        break;
                    case 'D':
                        this.point.left = this.point.left + this.speed;
                        this.offset({left: this.point.left});
                        break;
                    default:
                        break;
                }
            }
        }, 50);
    }

    // 控制移动
    tank.prototype.move = function(direction) {
        console.log('移动朝向' + direction);
    }

    // 开火，发射子弹
    tank.prototype.fire = function(options) {
        this.bullet = new Bullet($.extend({
            camp: this.camp,
            direction: this.direction,
            point: this.point
        }, options));
        console.log('发射子弹');
        console.log(this.bullet);
        
    }

    // 被子弹击中
    tank.prototype.beHit = function() {}

    return tank;
});