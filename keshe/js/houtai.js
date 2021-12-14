//menu command
$(document).ready(function(){
    $(".one_level_menubar").click(function(){
        $(this).next().slideToggle();
        $(this).parent().siblings().children("ul").slideUp();
    });

    $.ajax({
        url:"http://localhost:3000/users",
        type:"GET",
        dataType:"json",
        success:
            function (data) {
                show(data);
                find(data);
            },
        error:function (arg1){
            alert("加载数据失败");
            console.log(arg1);
        }
    })
});

//db command

var show=function (data) {
    var tbody = document.querySelector('tbody');
    for (var i=0;i<data.length;i++){
        var tr = document.createElement('tr');
        tbody.appendChild(tr);
        var th = document.createElement('th');
        th.class='col1';
        th.style.width='50px';
        tr.appendChild(th);
        var div = document.createElement('div');
        div.class='check-box';
        th.appendChild(div);
        var lable = document.createElement('label');
        div.appendChild(lable);
        var input=document.createElement('input');
        input.type='checkbox';
        lable.appendChild(input);
        for(var k in data[i]){
            var td = document.createElement('td');
            tr.appendChild(td);
            console.log(data[i][k]);
            td.innerHTML=data[i][k];
            tr.appendChild(td);
        }
        var endtd = document.createElement('td');
        endtd.class='col3';
        endtd.style.width='120px';
        tr.appendChild(endtd);
        var input1 = document.createElement('input');
        input1.className='btn btn-success-outline radius';
        input1.type='button';
        input1.id=data[i].id;
        input1.value='修改';
        endtd.appendChild(input1);
        var input2 = document.createElement('input');
        input2.className='btn btn-danger-outline radius';
        input2.type='button';
        var j = data[i].id;
        input2.id=j;
        input2.value='删除';
        endtd.appendChild(input2);
    }
    charge();
}

var charge=function () {
    var de = document.querySelectorAll('input');
    var i=0;
    for(var a =2;a<de.length;a++){
        if(i===1){
            de[a].onclick=function () {
                alert("修改");
                var b1=[0,0,0,0,0];
                var b2=['请输入id：','请输入name','请输入user','请输入passwd','请输入age'];
                for(var b in b1){
                    var word = prompt(b2[b],"");
                    if(word){
                        b1[b]=word;
                    }
                }
                var ul="http://localhost:3000/users/"+this.id;
                alert(ul);
                $.ajax({
                    url:ul,
                    type:"PUT",
                    data:{
                        id:b1[0],
                        name:b1[1],
                        user:b1[2],
                        passwd:b1[3],
                        age:b1[4]
                    },
                    success:
                        function (arg2) {
                            alert("修改成功");
                            console.log(arg2);
                        },
                    error:function (arg1){
                        alert("因某些原因修改失败");
                        console.log(arg1);
                    }
                })
            }
        }
       else if(i===2){
            de[a].onclick=function () {
                var ul="http://localhost:3000/users/"+this.id;
                alert(ul);
                $.ajax({
                    url:ul,
                    type:"DELETE",
                    success:
                        function (arg2) {
                            alert("删除成功");
                            console.log(arg2);
                        },
                    error:function (arg1){
                        alert("因某些原因删除失败");
                        console.log(arg1);
                    }
                })
            }
            i=-1;
        }
       i++;
    }
}

document.getElementById('add').addEventListener('click',function () {
    var b1=[0,0,0,0,0];
    var b2=['请输入id：','请输入name','请输入user','请输入passwd','请输入age'];
    for(var b in b1){
        var word = prompt(b2[b],"");
        if(word){
            b1[b]=word;
        }
    }
    $.ajax({
        url:"http://localhost:3000/users",
        type:"POST",
        data:{
            id:b1[0],
            name:b1[1],
            user:b1[2],
            passwd:b1[3],
            age:b1[4]
        },
        success:
            function (arg2) {
                alert("添加成功");
                console.log(arg2);
            },
        error:function (arg1){
            alert("因某些原因添加失败");
            console.log(arg1);
        }
    })
})
var find = function (data){
    document.getElementById('search').addEventListener('click',function (){
        var word = prompt("请输入查找内容","");
        var fid;
        if(word){
            fid=word;
            var select = data.filter(function (fp) {
                return fp.id===fid;
            })
            alert("id:"+select[0].id+" name:"+select[0].name+" user:"+select[0].user+" passwd:"+select[0].passwd+" age:"+select[0].age);
            console.log(select);
        }
       else{
           alert("未找到...");
        }
    })
}