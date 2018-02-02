
    //分页
    laypage({
        cont: $('#pagination'), //容器。值支持id名、原生dom对象，jquery对象,
        pages: 3, //总页数
        skip: true, //是否开启跳页
        skin: '#AF0000',
        groups: 3, //连续显示分页数
        jump: function(page, first) {
            console.log(page.curr, first);
            if (!first) {
                alert('当前为：' + page.curr);
            }
        }
    });
    //弹窗
    $(".addPackage").click(function() {
        $packCtrl.clearAddpop();
        layer.open({
            type: 1,
            shade: false,
            title: false,
            skin: 'layui-layer-demo', //样式类名
            closeBtn: 1, //不显示关闭按钮
            shift: 2,
            shadeClose: true, //开启遮罩关闭
            content: $("#addpop"),
            area: ['495px', '652px']
        });
    });    