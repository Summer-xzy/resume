//饼状图
require('../less/ComponentPie.less');
var ComponentBaseFactory = require('./ComponentBase.js');

var ComponentPieFactory = function (config) {
    var Component = ComponentBaseFactory(config);
    Component.addClass('ComponentPie');
    // 创建画布
    var w = config.width;
    var h = config.height;

    var bgCanvas = document.createElement('canvas');
    bgCanvas.width = w;
    bgCanvas.height = h;
    var ctx = bgCanvas.getContext('2d');

    Component.append(bgCanvas);

    //画圆
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = '#000';  //画笔颜色
    ctx.fillStyle = '#eee';    //填充颜色
    ctx.arc(w / 2, h / 2, w / 2, 0, 2 * Math.PI);//圆心，半径，起始角，结束角

    ctx.fill();
    ctx.stroke();

    var sAngle = 1.5 * Math.PI;//起始角270度
    var eAngle = 0;            //结束角
    var aAngle = Math.PI * 2;  //满角
    //画扇形
    for (var i = 0; i < config.data.length; i++) {
        var item = config.data[i];  //获取对象
        ctx.beginPath();           //开始画
        ctx.strokeStyle = '#000';  //画笔色
        ctx.fillStyle = item[2];  //扇形填充色
        eAngle = sAngle + aAngle * item[1];  //结束角
        ctx.moveTo(w / 2, h / 2);  //开始位置
        ctx.arc(w / 2, h / 2, w / 2, sAngle, eAngle);  //画扇形
        ctx.fill();       //闭合路径
        ctx.stroke();      //闭合路径
    //写文字
        var oText = $('<div class="text"></div>');
        oText.text(item[0]);
        var oPer = $('<div class="per" />');
        oPer.text(item[1] * 100 + '%');
        oText.append(oPer);
        Component.append(oText);
        // r
        var r = w / 2 / 2;     //半径
        var x = r + Math.cos( Math.PI * 2 - ( sAngle + (eAngle - sAngle)  / 2 ) ) * r;
        var y = r - Math.sin( Math.PI * 2 - ( sAngle + (eAngle - sAngle)  / 2 ) ) * r;
        oText.css('left', x);
        oText.css('top', y);

        sAngle = eAngle;
    }
   //画遮罩层
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