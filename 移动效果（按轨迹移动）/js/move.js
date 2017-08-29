/*
 * @Author: chaihongjun
 * @Date:   2017-08-25 23:21:02
 * @Last Modified by:   chaihongjun
 * @Last Modified time: 2017-08-28 21:37:36
 */
window.onload = function() {
    var btn = document.getElementsByTagName('button');
    var p = document.getElementsByTagName('p');
    var img = document.getElementsByTagName('img')[0];
    p[1].style.display = 'none';
    p[2].style.display = 'none';
    btn[0].onclick = function() {
        btn[0].innerHTML = '根据鼠标点击位置移动(已激活)';
        btn[1].innerHTML = '根据鼠标轨迹移动';
        p[0].style.display = 'none';
        p[1].style.display = 'block';
        p[2].style.display = 'none';
        //点击页面任意位置

        document.onclick=function(){

            var e=



        };


};
btn[1].onclick = function() {
    btn[0].innerHTML = '根据鼠标点击位置移动';
    btn[1].innerHTML = '根据鼠标轨迹移动(已激活)';
    p[0].style.display = 'none';
    p[1].style.display = 'none';
    p[2].style.display = 'block';
};
};
