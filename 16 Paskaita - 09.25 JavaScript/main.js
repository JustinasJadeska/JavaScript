console.groupCollapsed("Intro");
  console.log('Hello World');
console.groupEnd();

/* Komentavimas */
// Komentavimas

/*      Kintamieji / Variables

    var / let / const -kintamojo startas, reikia rašyti TIK tuomet, kai nori sukurti,
    NEREIKIA jo vėl rašyti kai į kintąžamąjį kreipiesi.
        var -senasis užrašymas
        let - naujasis užrašymas
        const- naujasis užrašymas skirtas konstantoms.
        _empty_ - nerašant nieko !!!NENAUDOTI!!! - globalus kintamasis

    kintamojoVardas - susigalvojamas vardas, kuris PRIVALO būti vienas žodis.
    Šis žodis bus naudojamas norint kreiptis į to kintamojo reikšmę.
        camelCase - kiekvienas naujas žodis rašomas iš didžiosios raidės be tarpo.
        snake_case - kiekvienas žodis rašomas po apatinio brūkšnio, be tarpo.
        kebab-case - kiekvienas naujas žodis rašomas po vidurinio brūkšnio, be tarpo.
        Bet negalima naudoti JS'e (nes vidurinis brūkšnys programovimo kalbose
        yra traktuojamas kaip atimties ženklas). Dažnai naudojamas CSS'e.
    
    = lygybės ženklas, reikšmės priskyrimas kintamajam.

    reikšmė - nurodai kokią reikšmę priskiri kintamjam. Tipai:
        number - skaičius (užrašomas kaip skaičius) arba matematinė išraiška.
        string - žodžiai - užrašomas kaip simbolių rinkinys kabutėse ('' arba "" arba ``)
        boolean - loginis kintamasis, kuri turi tik dvi reikšmes 'true' arba 'false';
*/

console.group("Kintamieji");
  let skaicius = 5; 
  console.log(skaicius);
  let tekstas = 'Kazkoks tekstas';
  console.log(tekstas);
  let tiesa = true;
  let melas = false;
console.groupEnd();

/*      Informacijos atvaizdavimas naršyklėje

  console.log() - išveda duomenis į konsolę (browser -> dev tools)
    console.group(); | console.groupCollapsed(); - sukuria konsolės grupę.
    console.groupEnd(); - užbaigia konsolės grupę.        
  window.alert(); - išmeta alert lentelę
  window.prompt(); - išmeta 'alert' tipo letelę su klausimu ir vieta atsakymui (tekstiniam).
*/

// window.alert('Something went ok?');
// let metai = window.prompt('Kiek jums metų?');
// console.log(metai);

/*      Aritmetika (operatoriai)
  Veiksmai su duomenimis

  x+y - sudėtis
  x-y - atimtis
  x*y - daugyba
  x/y - dalyba
  x**y - kėlimas laipsniu
  x**(1/y) - šaknies traukimas
  x%y - liekana

  Visi aritmetiniai veiksmai APART sudėties gali būti atliekami tik su skaičiais.
  string + number = string
*/

let sk1 = 5;
let sk2 = 23;
let neSkaicius = '654';
let zod = 'labas';
let neMelas = true;

console.group('Aritmetika');
    console.log('5+23 =', sk1+sk2); // 28
    console.log('5-23 =', sk1-sk2); // -18
    console.log('5*23 =', sk1*sk2); // 115
    console.log('5/23 =', sk1/sk2); // 0.217
    console.log('23 ** 5 =', sk2 ** sk1); // 6436343
    console.log('23 ** (1/5) =', sk2 ** (1/sk1)); // 1.8721712305548575
    console.log('23 % 5 =', sk2 % sk1); // 3
    console.log('', zod+sk1); // 'labas5'
    console.log('', zod-sk1); // NaN - Not a Number
    console.log('', neSkaicius+sk2); // '65423'
    console.log('', neSkaicius-sk2); // 631
    console.log('', neSkaicius*sk2); // 15042
    console.log('', neSkaicius/sk2); // 28.434...
    console.log('', sk2+neSkaicius); // '23654'
    console.log('', neMelas+sk1);
    console.log('', neMelas-sk1);
    console.log('', neMelas*sk1);
    console.log('', neMelas/sk1);
console.groupEnd();