const karesiniAl=(...sayilar)=>{

    console.log(sayilar);

    return sayilar.map(sayi=>sayi*sayi);

};

console.log(karesiniAl(4,7,8,11));