window.onload = function() {
        var menu = document.getElementById("menu");
        var wall = document.getElementById("wall");
        var imgs = wall.getElementsByTagName('li');
        //弹出窗口的宽度 和 高度
        var menuWidth = 130;
        var menuHeight = 226;
        //记录弹窗菜单的坐标
        var menuX, menuY;
        //鼠标单击右键弹出自定义菜单
        document.oncontextmenu = function(evt) {
            var e = evt || window.event;
            //当前页面背景不是黑色
            if (wall.style.display != 'block') {
                menu.style.display = 'block';
                menu.style.left = e.clientX + 'px';
                menu.style.top = e.clientY + 'px';
                //保存弹窗的坐标
                menuX = e.clientX;
                menuY = e.clientY;
            }
            //将默认的弹窗屏蔽了
            return false;
        };
        //鼠标单击左键关闭自定义菜单
        document.onclick = function(evt) {
            var e = evt || window.event;
            if (!((e.clientX >= menuX) && (e.clientX <= (menuX + menuWidth)) && (e.clientY >= menuY) && (e.clientY <= (menuY + menuHeight)))) {
                menu.style.display = 'none';
            }
            return false;
        };
        //刷新 按钮
        menu.getElementsByTagName('li')[4].onclick = function() {
            window.location.reload();
        };
        //更新背景 按钮
        menu.getElementsByTagName('li')[5].onclick = function() {
            menu.style.display = 'none';
            wall.style.display = 'block';
        };
        //注销 按钮
        menu.getElementsByTagName('li')[6].onclick = function() {
            menu.style.display = 'none';
            document.body.style.background = '#000';
        };
        //选择图片并显示  ？？？？？？？？？？？？
        for (var i = 0; i < imgs.length; i++) {
                imgs[i].index=i;
            imgs[i].onclick = function() {
                document.body.style.background = "url('images/'+this.index+1+'.jpg')";
            };
        }
        //关闭按钮
        wall.getElementsByTagName('span')[0].onclick = function() {
            wall.style.display = 'none';
        };
    };
