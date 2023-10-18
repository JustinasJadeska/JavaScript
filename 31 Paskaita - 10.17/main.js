import GymCard from "./Modules/GymCard.js";

//          Cookies

// susikurti cookie:
document.cookie = 'name=value';
document.cookie = 'pavadinimas=reikšmė';
document.cookie = 'vardas=Rokas';
document.cookie = 'pavarde=Banaitis';
document.cookie = `masyvas=[1,5,6,8,'labas,'ate',true,false,5,[1,2,3]]`;
document.cookie = `objektas={raktas:'reiksme',kitasRaktas:'kitaReiksme'}`;
// document.cookie = `expire=after; expires=${new Date('Tue, 17 Oct 2023 08:42 GMT')}`;
console.groupCollapsed('cookie')
// pasiimti cookie:
console.log(document.cookie);
const cookiesObj = {};
const cookies = document.cookie.split(' ').forEach(cookie => {
  console.log(cookie);

  const cookieElements = cookie.split('=');
  console.log(cookieElements);

  cookiesObj[cookieElements[0]] = cookieElements[1];

});
console.log(cookiesObj);
console.groupEnd();


//          Session/Local Storage
// let vardas = 'Rokas';
// let pavarde = 'Banaitis';
// let amzius = 27;
console.groupCollapsed('Session/Local Storage');
// sessionStorage.
localStorage.setItem('vardas','Rokas');
localStorage.setItem('pavarde','Banaitis');
localStorage.setItem('amzius', 27);

const metai = localStorage.getItem('amzius');
console.log(metai, typeof(metai));

// localStorage.removeItem('pavarde');

// localStorage.clear();

for(let i = 0; i < localStorage.length; i++){
  const localStorageName = localStorage.key(i);
  console.log(localStorageName);
  const localStorageValue = localStorage.getItem(localStorageName);
  console.log(localStorageValue);
}
console.log('------');

let asmuo = {
  vardas: 'Rokas',
  pavarde: 'Banaitis',
  amzius: 27
};
// localStorage.setItem('asmuo', asmuo); // no bueno
localStorage.setItem('asmuo', JSON.stringify(asmuo));
// console.log(localStorage.getItem('asmuo')); // no bueno, grąžina objektą kaip string'ą
// console.log(JSON.parse('{"vardas":"Rokas","pavarde":"Banaitis","amzius":27}'));
const objektasIsStorageStringPavidalu = localStorage.getItem('asmuo');
console.log(objektasIsStorageStringPavidalu);
const objektasIsStorageObjektoPavidalu = JSON.parse(objektasIsStorageStringPavidalu);
console.log(objektasIsStorageObjektoPavidalu);
console.groupEnd();

// const duomenys = {
//   asmenys : [
//     {
//       vardas: "Rokas",
//       pavarde: "Banaitis",
//       amzius: 27
//     },{
//       vardas: "Petras1",
//       pavarde: "Petraitis9",
//       amzius: 12
//     },{
//       vardas: "Petras2",
//       pavarde: "Petraitis8",
//       amzius: 45
//     },{
//       vardas: "Petras3",
//       pavarde: "Petraitis7",
//       amzius: 65
//     }
//   ],
//   masinos : [
//     {
//       marke: "Audi",
//       modelis: "TT",
//       metai: 1999
//     },{
//       marke: "BMW",
//       modelis: "6",
//       metai: 2005
//     },{
//       marke: "Fiat",
//       modelis: "Punto",
//       metai: 2003
//     },{
//       marke: "Volvo",
//       modelis: "XC90",
//       metai: 600
//     },{
//       marke: "Honda",
//       modelis: "Civic",
//       metai: 2005
//     }
//   ],
//   kazkoksMetodas(){
//     console.log('... magic ...');
//   }
// }
// console.log(duomenys);

// localStorage.setItem('duomenys', JSON.stringify(duomenys));
// localStorage.setItem('asmenys', JSON.stringify(duomenys.asmenys));
// localStorage.setItem('masinos', JSON.stringify(duomenys.masinos));


// const asmenys = JSON.parse(localStorage.getItem('asmenys'));
// console.log(asmenys);
// console.log(typeof(asmenys));
// asmenys.forEach(asmuo => {
//   console.log(asmuo);
// });

// const darVienasAsmuo = {
//   vardas: "Alfonsas",
//   pavarde: "Kazanova",
//   amzius: 90
// };

// localStorage.setItem('asmenys', JSON.stringify(darVienasAsmuo)); // blogai, nes pradingsta buve duomenys

// asmenys.push(darVienasAsmuo);
// console.log(asmenys);
// localStorage.setItem('asmenys', JSON.stringify(asmenys));

// const asmenys = JSON.parse(localStorage.getItem('asmenys'));
// console.log(asmenys);

// const naujiAsmenys = [
//   asmenys[0],
//   asmenys[1],
//   asmenys[3],
//   asmenys[4]
// ];
// console.log(naujiAsmenys);
// localStorage.setItem('asmenys', JSON.stringify(naujiAsmenys));

document
  .querySelector('#salesForma')
  .addEventListener('submit', e => {
    e.preventDefault();
    const formosReiksmes = {
      id: Date.now(),
      vardas: e.target.elements.name.value,
      lokacija: e.target.elements.location.value,
      kaina: e.target.elements.price.valueAsNumber,
      nuotrauka: e.target.elements.photo.value
    };
    console.log(formosReiksmes);

    const cards = JSON.parse(localStorage.getItem('cards')) ? JSON.parse(localStorage.getItem('cards')) : [];
    console.log(cards)
    cards.push(formosReiksmes);
    localStorage.setItem('cards', JSON.stringify(cards));

    const gymCardDiv = new GymCard(formosReiksmes);
    console.log(gymCardDiv);

    document
      .querySelector('#allGyms')
      .appendChild(gymCardDiv);

    e.target.reset();
  });

if(localStorage.getItem('cards')){
  const cards = JSON.parse(localStorage.getItem('cards'));

  cards.forEach(card => {
    // console.log(card);
    const gymCardDiv = new GymCard(card);
    // console.log(gymCardDiv);

    document
      .querySelector('#allGyms')
      .appendChild(gymCardDiv);
  });
}

// const cards = JSON.parse(localStorage.getItem('cards'));
// console.log(cards); // masyva su vienu nenorimu - id:1697546533681
// const naujasMasyvasBeNenorimo = cards.filter(card => card.id !== 1697546533681);
// console.log(naujasMasyvasBeNenorimo);
// localStorage.setItem('cards', JSON.stringify(naujasMasyvasBeNenorimo));