//anlık ve erişelebilir şekilde verileri saklamadır.
localStorage.setItem('isim','ali');
localStorage.setItem('yas',30);

let isimm=localStorage.getItem('isim');
console.log(isimm);


localStorage.yas=40

const yas=localStorage.getItem('yas');
console.log(yas);


//silme yapar. 
// localStorage.removeItem('yas');

// localStorage.clear();