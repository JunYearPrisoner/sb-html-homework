var path=['MIT-离散数学.mp4','机器学习.mp4','计算机组成原理.mp4'];
var video = document.getElementsByTagName("video");
var lis=document.getElementsByTagName("li");
var i=1;
document.getElementById('1').addEventListener("click",function () {
    video.item(0).src = path[0];
    lis.item(0).innerText = "【正在播放】MIT-离散数学";
    lis.item(1).innerText = "机器学习";
    lis.item(2).innerText = "计算机组成原理";
    video.item(0).play();
    i=0;
})
document.getElementById('2').addEventListener("click",function () {
    video.item(0).src = path[1];
    lis.item(0).innerText = "MIT-离散数学";
    lis.item(1).innerText = "【正在播放】机器学习";
    lis.item(2).innerText = "计算机组成原理";
    video.item(0).play();
    i=1;
})
document.getElementById('3').addEventListener("click",function () {
    video.item(0).src = path[2];
    lis.item(0).innerText = "MIT-离散数学";
    lis.item(1).innerText = "机器学习";
    lis.item(2).innerText = "【正在播放】计算机组成原理";
    video.item(0).play();
    i=2;
})

window.setInterval(function () {
    if(video.item(0).currentTime===video.item(0).duration){
        if(i===2){
            i=0;
        }else{
            i++;
        }
        lis.item(0).innerText = "MIT-离散数学";
        lis.item(1).innerText = "机器学习";
        lis.item(2).innerText = "计算机组成原理";
        video.item(0).src = path[i];
        lis.item(i).innerText = "【正在播放】"+path[i];
        video.item(0).play();

    }
})