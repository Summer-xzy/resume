require('../less/ComponentPolyline.less');
var ComponentBaseFactory = require('./ComponentBase.js');
var ComponentPolylineFactory = function (config) {
    var Component = ComponentBaseFactory(config);
    Component.addClass('ComponentPolyline');

    var w = config.width;
    var h = config.height;
    var oCanvas = document.createElement('canvas');
    var ctx = oCanvas.getContext('2d');
    oCanvas.width = w;
    oCanvas.height = h;
    Component.append(oCanvas);

    
    var step = 10;
    for (var i = 0; i <= step; i++) {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#000';
        var y = (h / step) * i;
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
    }
    
    // 6
    step = config.data.length + 1;

    for (var i=0; i <= step; i++) {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#000';
        var x= (w / step) * i;
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();   
    }

    // 
    var trueWidth = w / 2;
    // text width
    var text_w = trueWidth / step / 2;
    // text gap
    var text_row_w = trueWidth / step;

    for (var i = 0; i < config.data.length; i++) {
        var oText = $('<div class="text"></div>');
        oText.text(config.data[i][0]);
        var x = text_row_w * (i + 1);
        oText.css('width', text_w).css('left', x - text_w / 2).css('fontSize', '35');
        Component.append(oText);
    }


    var oCanvas2 = document.createElement('canvas');
    var ctx = oCanvas2.getContext('2d');
    oCanvas2.width = w;
    oCanvas2.height = h;
    Component.append(oCanvas2);

    function draw (per) {
        ctx.clearRect(0, 0, w, h);
        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'red';
        var row_w = w / (config.data.length + 1);
        for (var i = 0; i < config.data.length; i++) {
            var item = config.data[i];
            var x = row_w * (i + 1);
            var y = h - h * item[1] * per;
            ctx.moveTo(x, y);
            ctx.arc(x, y, 5, 0, 2 * Math.PI);
            if (item[2]) {
                ctx.fillStyle  = item[2];
            }
            ctx.font="30px Arial";
            ctx.fillText(item[1] * 100 + '%', x - 20, y - 20);
        }
        // paint line
        ctx.moveTo(row_w, h - h * config.data[0][1] * per);
        for (var i = 0; i < config.data.length; i++) {
            var item = config.data[i];
            var x = row_w * (i + 1);
            var y = h - h * item[1] * per;
            ctx.lineTo(x, y);
        }
        // shadow 
        ctx.lineTo(x, h);
        ctx.lineTo(row_w, h);
        ctx.fillStyle = 'rgba(255, 0, 0, 0.4)';
        ctx.stroke();
        ctx.fill();
        ctx.stroke();
    }
    draw(0);
    Component.on('cpLoad', function () {
        var step = 0;
        for (var i = 0; i < 100; i++) {
            setTimeout(function() {
                step += 0.01;
                draw(step);
            }, i * 10);
        }
    })
    return Component; 
}

module.exports = ComponentPolylineFactory;