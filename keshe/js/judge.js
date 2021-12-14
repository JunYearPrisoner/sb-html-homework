// document.getElementById("denglu").addEventListener("click",function () {
//     const xhr=new XMLHttpRequest();
//     xhr.open("GET","../json/judge.json");
//     xhr.send();
//     xhr.addEventListener("readystatechange",function () {
//         if(xhr.readyState===4){
//             let user=JSON.parse(xhr.responseText);
//             var name1 = document.getElementById('username').value;
//             var emailaddress1=document.getElementById('emailaddress').value;
//             var submit1 = document.getElementById('password').value;
//             console.log(user.username + user.userpassword);
//             if (name1 === user.username && submit1 === user.userpassword && emailaddress1 === user.EmailAddress){
//                 alert("登陆成功");
//                 // var form = document.getElementById('form');
//                 // form.action="houtai.html";
//                 // document.form.submit();
//                 console.log("222222");
//                 window.open("houtai.html");
//                 window.location.href = 'http://www.mahaixiang.cn/';
//                 console.log("333333333");
//                 return true;
//             }else{
//                 alert("账号或密码错误");
//                 return false;
//             }
//         }
//         if(xhr.status===200){
//         }
//     })
// })
//
document.getElementById('denglu').addEventListener("click",function () {
    var name1 = document.getElementById('username').value;
    var emailaddress1=document.getElementById('emailaddress').value;
    var submit1 = document.getElementById('password').value;
    var name = "lisi";
    var emailaddress = "lisi@qq.com";
    var submit = "lisi";
    if (name1 === name && submit1 === submit && emailaddress1 === emailaddress){
        alert("登陆成功");
        console.log("222222");
        window.open("houtai.html");
        console.log("333333333");
        return true;
    }else{
        alert("账号或密码错误");
        return false;
    }

})