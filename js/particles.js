if (typeof $.cj == 'undefined') $.cj = {};


function getMaxmin(max, min) {
    return Math.random() * (max - min) + min;
}

$.cj.Particles = {
    ready: false,
    points: [],
    colors: [
        'rgba(161,147,202,1)',
        'rgba(59,72,164,1)',
        'rgba(59,158,164,1)'
    ],

    init: function (n, f) {

        this.x = 0,
            this.y = 100,
            this.range = 40,
            this.speed = 100,
            this.maxSize = 1.3,
            this.minSize = 0.3,
            this.maxSpeed = 0.6,
            this.minSpeed = 0.2,
            this.offset = 100,
            this.node = 70,
            this.node404 = 50,
            this.ratio = 1;
        this.canvas = $('#js-background-renderer')[0];
        this.ctx = this.canvas.getContext('2d');
        this.ratio = window.devicePixelRatio;
        this.fixRatio();
        this.onResize();
        this.points = [];

        var count = n;

        if(is_mobile_width){
            count = 70;
        }else if(is_pad_width){
            count = 100;
        } else{
            count = 150;
        }

        for (var i = 0; i < count; i++) {

            if (f) {
                var x = this.canvas.width * Math.random();
                var y = this.canvas.height / 2 + this.y * Math.random() - this.y / 2;
                var x_speed = 1.2 * this.ratio;
                var y_speed = 1 * this.ratio;
            } else {
                var x = Math.random() * this.canvas.width + 1;
                var y = Math.random() * this.canvas.height + 1;
                var x_speed = getMaxmin(this.maxSpeed, this.minSpeed);
                var y_speed = getMaxmin(this.maxSpeed, this.minSpeed);
            }

            var c = this.colors[parseInt(Math.random() * this.colors.length, 10)];

            this.points.push({
                x: x,
                y: y,
                ox: x,
                oy: y,
                vx: x_speed,
                vy: y_speed,
                vox: x_speed,
                voy: y_speed,
                col: c,
                deg: Math.random() * 360,
                radius: Math.random() * getMaxmin(this.maxSize, this.minSize),
            });
        }
        ;

        this.ready = true;
    },

    fixRatio: function () {

        this.y = this.ratio * this.y,
            this.range = this.ratio * this.range,
            this.speed = this.ratio * this.speed,
            this.maxSize = this.ratio * this.maxSize,
            this.minSize = this.ratio * this.minSize,
            this.maxSpeed = this.ratio * this.maxSpeed,
            this.minSpeed = this.ratio * this.minSpeed,
            this.offset = this.ratio * this.offset,
            this.node = this.ratio * this.node,
            this.node404 = this.ratio * this.node404;

    },

    onResize: function () {

        var w = windowWidth;
        var h = windowHeight;

        this.canvas.width  = w*this.ratio;
        this.canvas.height = h*this.ratio;

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);


        $('#js-background-renderer').css({
            'width': w,
            'height': h
        });
    },

    onUpdate: function () {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        var count = this.points.length;

        if(is_mobile_width){
            count = 40;
        }else if(is_pad_width){
            count = 70;
        } else{
            count = 120;
        }

        for (var i = 0; i < count; ++i) {

            var p = this.points[i];

            if (p.deg < 360) {
                p.deg += 1;
            } else {
                p.deg = 0;
            }

            var wave = Math.sin(p.deg * (Math.PI / 180));
            p.ox = p.ox + p.vx;
            p.oy = p.oy + p.vy * wave;

            dx = mouse.x * this.ratio - p.x;
            dy = mouse.y * this.ratio - p.y;

            var distance = Math.sqrt(dx * dx + dy * dy);


            p.x = (p.x - ( dx / distance ) * ( this.range / distance) * this.speed) - ((p.x - p.ox) / 2);
            p.y = (p.y - ( dy / distance ) * ( this.range / distance) * this.speed) - ((p.y - p.oy) / 2);


            this.ctx.fillStyle = p.col;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, 1 * this.ratio, 0, Math.PI * 2, true);
            this.ctx.closePath();
            this.ctx.fill();

            if (p.x > this.canvas.width) {
                p.ox = p.x = 0;
                p.oy = p.y = this.canvas.height / 2 + this.y * Math.random() - this.y / 2;
            }

            if (p.y < 0) {
                p.ox = p.x = this.canvas.width * Math.random();
                p.oy = p.y = this.canvas.height / 2 + this.y * Math.random() - this.y / 2;
            }

            for (var n = 0; n < count; n++) {

                var pn = this.points[n];
                var nx = p.x - this.points[n].x;
                var ny = p.y - this.points[n].y;

                var l = Math.sqrt(Math.pow(nx, 2) + Math.pow(ny, 2));

                if (l < this.node) {
                    this.ctx.beginPath();
                    this.ctx.lineWidth = 0.08 * this.ratio;
                    this.ctx.strokeStyle = p.col;
                    this.ctx.moveTo(p.x, p.y);
                    this.ctx.lineTo(pn.x, pn.y);
                    this.ctx.closePath();
                    this.ctx.stroke();
                }

            }
            ;

        }

    },

    onUpdate404: function () {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        for (var i = 1; i < this.points.length; i++) {

            var p = this.points[i];
            if (p.x > this.canvas.width) {
                p.x = 0;
                p.y = Math.random() * this.canvas.height + this.offset / 2;
                p.ox = p.x;
                p.oy = p.y;
                p.vx = p.vox;
                p.vy = p.voy;
            }

            if (p.y < -this.offset) {
                p.x = Math.random() * this.canvas.width + this.offset / 2;
                p.y = this.canvas.height;
                p.ox = p.x;
                p.oy = p.y;
                p.vx = p.vox;
                p.vy = p.voy;
            }

            if (p.x < -this.offset) {
                p.x = this.canvas.width;
                p.y = Math.random() * this.canvas.height + this.offset / 2;
                p.ox = p.x;
                p.oy = p.y;
                p.vx = p.vox;
                p.vy = p.voy;
            }

            if (p.y > this.canvas.height + this.offset) {
                p.x = Math.random() * this.canvas.width + this.offset / 2;
                p.y = 0;
                p.ox = p.x;
                p.oy = p.y;
                p.vx = p.vox;
                p.vy = p.voy;
            }

            var color = p.col;
            var radius = p.radius;

            this.ctx.beginPath();
            this.ctx.fillStyle = color;

            if (isHovered) {
                var dx = mouse.x * this.ratio - p.x;
                var dy = mouse.y * this.ratio - p.y;
            } else {
                var dx = this.canvas.width / 2 - p.x;
                var dy = this.canvas.height / 2 - p.y;
            }

            var distance = Math.sqrt(dx * dx + dy * dy);

            var min = hover.dist * 220 * this.ratio;
            var dist = 30 * hover.pow * this.ratio;
            var max = hover.dist * (250 + dist) * this.ratio;

            if (min < distance && distance < max) {

                p.vx = p.vx + p.vox / 2;
                p.vy = p.vy - p.voy / 2;

                p.x = p.x - (dx / distance) - ((p.x - p.ox) / 2) + p.vx;
                p.y = p.y - (dy / distance) - ((p.y - p.oy) / 2) + p.vy;
                this.ctx.arc(p.x, p.y, radius * this.ratio, 0, Math.PI * 2, false);
                this.ctx.fill();

                for (var n = 1; n < this.points.length; n++) {
                    var pn = this.points[n];
                    var nx = p.x - this.points[n].x;
                    var ny = p.y - this.points[n].y;
                    var strokeL = Math.sqrt(Math.pow(nx, 2) + Math.pow(ny, 2));
                    if (strokeL < this.node404) {
                        this.ctx.beginPath();
                        this.ctx.lineWidth = 0.2 * this.ratio;
                        this.ctx.strokeStyle = color;
                        this.ctx.lineTo(p.x, p.y);
                        this.ctx.lineTo(pn.x, pn.y);
                        this.ctx.closePath();
                        this.ctx.stroke();
                        this.ctx.fill();
                    }
                }
                ;

            } else {

                p.vx = p.vx + p.vox;
                p.vy = p.vy - p.voy;
                p.x = p.x - (dx / distance) - ((p.x - p.ox) / 2) + p.vx;
                p.y = p.y - (dy / distance) - ((p.y - p.oy) / 2) + p.vy;
                this.ctx.arc(p.x, p.y, radius, 0, Math.PI * 2, false);
                this.ctx.fill();

            }

        }
        ;
    }
};

