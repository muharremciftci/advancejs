const personeller=['muharrem','ali','burak'];

console.log(personeller);

const uyeler=[...personeller,'roman'];
console.log(uyeler);

const calisan={ad:'ali',yas:30,birim:'bilgiislem'};
calisan.unvan='memur';
const calisanklon={...calisan,unvan:'test'};
console.log(calisan);
console.log(calisanklon);



