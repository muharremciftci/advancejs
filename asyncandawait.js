const verilerigetir=async ()=>{
    const res=await fetch('veriler.json');
    const veri=await res.json();

    return veri;
}

verilerigetir().then(veri=>{
    console.log(veri);
})

