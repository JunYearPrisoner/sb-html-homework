function pianpianhuaplus (obj){
    const pph = new XMLHttpRequest();
    pph.open(obj.method,obj.url);
    pph.send();
    pph.addEventListener("readystatechange",function () {
        if(pph.readyState === 4){
            if(pph.status === 200){
                obj.success(pph);
            }else{
                obj.error();
            }
        }
    })
}