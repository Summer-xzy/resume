//折线图组件
require('../less/ComponentPolyline.less');
var ComponentBaseFactory = require('./ComponentBase.js');

var ComponentPolylineFactory = function (config) {
    var Component = ComponentBaseFactory(config);
    Component.addClass('ComponentPolyline');

    var w = config.width;
    var h = config.height;
    var oCanvas = document.createElement('canvas'); //创建canvas标签，画布
    var ctx = oCanvas.getContext('2d'); //获取执行期上下文，画笔
    oCanvas.width = w;
    oCanvas.height = h;
    Component.append(oCanvas);  //把画布添加到组件中

    //高度分为10部分，画11条线
    var step = 10;
    for (var i = 0; i <= step; i++) {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#000';
        var y = (h / step) * i; //例如10/10 *0 线的数量*位置
        ctx.moveTo(0, y);  //画笔起始位置
        ctx.lineTo(w, y);  //终止位置
        ctx.stroke();
    }
    
    // 宽度分为6部分，画7条线
    step = config.data.length + 1; //数据的长度+1

    for (var i=0; i <= step; i++) {
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = '#000';
        var x = (w / step) * i;
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();   
    }

    // 组件真实宽度
    var trueWidth = w / 2;
    // 文本宽度
    var text_w = trueWidth / step / 2;
    // 文本间距的宽度
    var text_row_w = trueWidth / step;
    //把文本内容跟线对应 
    for (var i = 0; i < config.data.length; i++) {
        var oText = $('<div class="text"></div>');
        oText.text(config.data[i][0]); //文本
        var x = text_row_w * (i + 1);  //从第二条线开始
        oText.css('width', text_w).css('left', x - text_w / 2).css('fontSize', '35');//文本位置
        Component.append(oText);
    }

//创建新画布
    var oCanvas2 = document.createElement('canvas');
    var ctx = oCanvas2.getContext('2d');
    oCanvas2.width = w;
    oCanvas2.height = h;
    Component.append(oCanvas2);

    function draw (per) {
        ctx.clearRect(0, 0, w, h);   //清除画布

        ctx.beginPath();
        ctx.lineWidth = 2;
        ctx.strokeStyle = 'red';
        //画点
        var row_w = w / (config.data.length + 1);  //在画布上画折线的宽度  84
        for (var i = 0; i < config.data.length; i++) {
            var item = config.data[i];          //每一个元素

            var x = row_w * (i + 1);            //x坐标
            var y = h - h * item[1] * per;      //y坐标

            ctx.moveTo(x, y);                 //起始位置
            ctx.arc(x, y, 5, 0, 2 * Math.PI); //画小圆圈
            //百分比的颜色
            if (item[2]) {
                ctx.fillStyle  = item[2];
            }
            ctx.font="30px Arial";            //百分比字体大小30px
            ctx.fillText(item[1] * 100 + '%', x - 20, y - 20);  //计算百分比和确定位置
        }
        // 画线
        ctx.moveTo(row_w, h - h * config.data[0][1] * per);  //起始位置
        for (var i = 0; i < config.data.length; i++) {
            var item = config.data[i];
            var x = row_w * (i + 1);
            var y = h - h * item[1] * per;
            ctx.lineTo(x, y);
        }
        // 画阴影
        ctx.lineTo(x, h);
        ctx.lineTo(row_w, h);
        ctx.fillStyle = 'rgba(255, 0, 0, 0.4)';
        ctx.stroke();
        ctx.fill();
        ctx.stroke();
    } 
    draw(0); //阴影从0开始向上覆盖
    //阴影定时覆盖
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