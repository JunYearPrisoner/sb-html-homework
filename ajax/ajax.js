document.getElementById("denglu").addEventListener("click",function () {
    const xhr=new XMLHttpRequest();
    xhr.open("GET","ajax.json");
    xhr.send();
    xhr.addEventListener("readystatechange",function () {
        if(xhr.readyState===4){
            let user=JSON.parse(xhr.responseText);
            var name1 = document.getElementById('textname').value;
            var submit1 = document.getElementById('textpwd').value;
            console.log(user.username + user.userpassword);
            if (name1 === user.username && submit1 === user.userpassword){
                alert("登陆成功");
                return true;
            }else{
                alert("denglushibai");
                return false;
            }
        }
        if(xhr.status===200){
        }
    })
})

