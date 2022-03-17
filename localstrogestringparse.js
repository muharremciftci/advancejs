const veriler = [

    {isim:'muharrem', yas:30},
    {isim:'muharrem2', yas:31},
    {isim:'muharrem3', yas:32},
]

console.log(veriler);

localStorage.setItem('veriler',JSON.stringify(veriler));

let veriler1=localStorage.getItem('veriler');
console.log(JSON.parse(veriler1));