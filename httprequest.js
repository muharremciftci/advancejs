const verilerigetir=(kaynak)=>{

return new Promise((resolve,reject)=>{
const request = new XMLHttpRequest();
request.addEventListener('readystatechange',()=>{

    if(request.readyState==4 && request.status==200)
    {
        let veriler = JSON.parse(request.responseText);
        resolve(veriler);
    }

    else if(request.readyState==4)
    {
        reject('bir hata oluştu');
    }
});

request.open('GET',kaynak);
request.send();

});

};


verilerigetir('veriler.json').then(veri=>{
    console.log(veri);
}).catch(err=>{
    console.log(err);
})