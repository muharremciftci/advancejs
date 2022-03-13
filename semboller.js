var bilgisayar={}

bilgisayar.marka='lenovo';
// bilgisayar['hardisk']='ssd';
// bilgisayar['hardisk']='sata';

console.log(bilgisayar);

const sembol1=Symbol('deger');
const sembol2=Symbol('deger');

console.log(sembol1,sembol2);
console.log(typeof sembol2);


const hardiskSembol1=Symbol('harddisk');
const hardiskSembol2=Symbol('harddisk');

bilgisayar[hardiskSembol1]='ssd';
bilgisayar[hardiskSembol2]='sata';

console.log(bilgisayar);

