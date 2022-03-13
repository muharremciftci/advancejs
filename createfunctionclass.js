function Personel(ad,birim,gorev){

this.ad = ad;
this.birim=birim;
this.gorev=gorev;

};

Personel.prototype.isyap=function(){

    console.log(this.ad+'işini yaptı');

}

function Yonetici(ad,birim,gorev,unvan)
{
    Personel.call(this,ad,birim,gorev,unvan);
    this.unvan=unvan;
}

//içindeki metodları getirmek için kullanılır.
Yonetici.prototype=Object.create(Personel.prototype);
Yonetici.prototype.personelkov=function(){
     console.log('personel kovuldu');
  
 }

const personel1 = new Personel('muharrem','yazilim','müdür');
const yonetici = new Yonetici('test','test2','test3','testing');

console.log(personel1);
console.log(yonetici);

personel1.isyap();
yonetici.isyap();
yonetici.personelkov();

