fetch('veriler.json').then(res=>{
    return res.json();
}).then(veri=>{
    console.log(veri);
}).catch(err=>{
    console.log(err);
})


