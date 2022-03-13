// let personel1={
//     ad:'ali',
//     birim:'bilgi işlem',
//     gorev:'yazilim',
    

// }

// let personel2={
//     ad:'muharrem',
//     birim:'bilgi işlem',
//     gorev:'yazilim',
    
// }

class personel{
    constructor(ad,birim,gorev){
        this.ad=ad,
        this.birim=birim,
        this.gorev=gorev
    }

    isyap(){

        console.log(this.ad + this.gorev+'isini gerçekleştirdi');
        return this;
    }

    toplantiyagir(){
        console.log(this.ad+"toplantıya girdi");
        return this;
    }
}

const personel1 = new personel();
personel1.ad='test',
personel1.birim='yazilim',
personel1.gorev='yazilim';

const personel2 = new personel();
personel2.ad='ali',
personel2.birim='yazilim',
personel2.gorev='yazilim';

// console.log(personel1);
// personel1.isyap().toplantiyagir();

//miras //superconst / metod

class Yonetici extends personel
{

    constructor(ad,birim,gorev,unvan){
        super(ad,birim,gorev,unvan)
        this.unvan=unvan;
    }

     personelKov(per){
        calisanlar=calisanlar.filter((p)=>{

            return p.ad!=per.ad;
        }
        
        )
     }

}


const yonetici = new Yonetici('muharrem','yonetici','yönetmek','mudur');
console.log(yonetici);

let calisanlar=[personel1,personel2,yonetici];

yonetici.personelKov(personel1);
console.log(calisanlar);    

