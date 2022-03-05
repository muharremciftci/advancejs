const todoOlustur=(callback)=>{

    const requestt = new XMLHttpRequest();

requestt.addEventListener('readystatechange',()=>{
    if(requestt.readyState==4 && requestt.status==200)
    {
     
        let veriler=JSON.parse(requestt.responseText);
        callback(veriler,undefined);
    }
    else if(requestt.readyState==4)
    {
        callback(undefined,'bir hata oluştu');
    }


});

//siteden alınan
// requestt.open('GET','https://jsonplaceholder.typicode.com/todos/')
requestt.open('GET','veriler.json');
requestt.send();


};

todoOlustur((veri,hata)=>{
   
    if(hata){
        console.log(hata);
    }
    else{
        console.log(veri);
    }


});
