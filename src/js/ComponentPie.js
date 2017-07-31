require('../less/ComponentPie.less');
var ComponentBaseFactory = require('./ComponentBase.js');

var ComponentPieFactory = function (config) {
    var Component = ComponentBaseFactory(config);
    Component.addClass('ComponentPie');
    // bg canvas 
    var w = config.width;
    var h = config.height;

    var bgCanvas = document.createElement('canvas');
    bgCanvas.width = w;
    bgCanvas.height = h;
    var ctx = bgCanvas.getContext('2d');

    Component.append(bgCanvas);


    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#000';
    ctx.fillStyle = '#eee';
    ctx.arc(w / 2, h / 2, w / 2, 0, 2 * Math.PI);

    ctx.fill();
    ctx.stroke();

    var sAngle = 1.5 * Math.PI;
    var eAngle = 0;
    var aAngle = Math.PI * 2;

    for (var i = 0; i < config.data.length; i++) {
        var item = config.data[i];
        ctx.beginPath();
        ctx.strokeStyle = '#000';
        ctx.fillStyle = item[2];
        eAngle = sAngle + aAngle * item[1];
        ctx.moveTo(w / 2, h / 2);
        ctx.arc(w / 2, h / 2, w / 2, sAngle, eAngle);
        ctx.fill();
        ctx.stroke();
        
        var oText = $('<div class="text"></div>');
        oText.text(item[0]);
        var oPer = $('<div class="per" />');
        oPer.text(item[1] * 100 + '%');
        oText.append(oPer);
        Component.append(oText);
        // r
        var r = w / 2 / 2;
        var x = r + Math.cos( Math.PI * 2 - ( sAngle + (eAngle - sAngle)  / 2 ) ) * r;
        var y = r - Math.sin( Math.PI * 2 - ( sAngle + (eAngle - sAngle)  / 2 ) ) * r;
        oText.css('left', x);
        oText.css('top', y);

        sAngle = eAngle;
    }

    var oMask = document.createElement('canvas');
    oMask.width = w;
    oMask.height = h;
    var ctx = oMask.getContext('2d');
    Component.append(oMask);

    sAngle = 1.5 * Math.PI;
    function draw(per) {
        ctx.clearRect(0 ,0 ,w, h);
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = 'rgba( 255, 255, 255, 0)';
        ctx.fillStyle = 'rgba( 255, 255, 255, 1)';
        ctx.moveTo(w / 2, h / 2);
        ctx.arc(w / 2, h / 2, w / 2, sAngle, sAngle - 2 * Math.PI * per, 1);

        ctx.fill();
        ctx.stroke();
    }

    draw(1);

    Component.on('cpLoad', function () {
        var step = 1;
        setTimeout(function () {
            for (var i = 0; i < 100; i++) {
                setTimeout(function () {
                    step -= 0.01;
                    draw(step);
                }, i * 10);
            }
        }, 800);
    });
    return Component;
}
module.exports = ComponentPieFactory;