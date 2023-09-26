console.groupCollapsed("Intro");
  console.log('Hello World');
console.groupEnd();

/* Komentavimas */
// Komentavimas

/*      Kintamieji / Variables

    var / let / const -kintamojo startas, reikia rašyti TIK tuomet, kai nori sukurti,
    NEREIKIA jo vėl rašyti kai į kintamąjį kreipiesi.
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

console.groupCollapsed('Aritmetika');
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
    console.log('', neMelas+sk1); // 6
    console.log('', neMelas-sk1); // -4
    console.log('', neMelas*sk1); // 5
    console.log('', neMelas/sk1); // 0.2
console.groupEnd();

/*      Prilyginimai ir Palyginimai
    
        Prilyginimai
    Naujos reikšmės prilyginimas:
        let kintamasis = 'labas vakaras';
        ...
        kintamasis = 50;

    Trumpiniai: 
        kintamasis++         - padidina kintamąjį vienetų
        kintamasis--         - sumažina kintamąjį vienetų
        kintamasis+=skaicius - padidina kintamąjį nurodyti skaičiumi
        kintamasis-=skaicius - sumažina kintamąjį nurodyti skaičiumi
        kintamasis*=skaicius - padaugina kintamąjį nurodyti skaičiumi
        kintamasis/=skaicius - dalina kintamąjį nurodyti skaičiumi
        kintamasis**=skaicius - pakelia kintamąjį nurodyti skaičiumi
        kintamasis%=skaicius - randa liekaną nurodytu skaičiumi ir prilygina tam kintamajam

        Palyginimai
    > - daugiau
    < - mažiau
    >= - daugiau arba lygu 
    <= - mažiau arba lygu
    == - ar lygios reikšmės
    === - ar lygios reikšmės IR tipai
    != - ar nelygios reikšmės
    !== - ar nelygios reikšmės IR tipai
*/

console.groupCollapsed('Prilyginimai');
    let kintamasis = 'labas vakaras';
    console.log(kintamasis);
    kintamasis = 50;
    console.log(kintamasis);
    kintamasis = kintamasis + 5;
    console.log(kintamasis);
    kintamasis = kintamasis + sk2;
    console.log(kintamasis);
    kintamasis+=9;
    console.log(kintamasis);
    kintamasis-=sk1;
    console.log(kintamasis);
    kintamasis**=1/5
    console.log(kintamasis);
console.groupEnd();

console.groupCollapsed('Palyginimai');
    console.log('10 > 10', 10 > 10);
    console.log('10 < 10', 10 < 10);
    console.log('10 > 3', 10 > 3);
    console.log('10 < 3', 10 < 3);
    console.log('10 >= 3', 10 >= 3);
    console.log('10 <= 3', 10 <= 3);
    console.log('10 <= 10', 10 <= 10);
    console.log('10 >= 10', 10 >= 10);
    console.log('10 == 3', 10 == 3);
    console.log('10 === 3', 10 === 3);
    console.log('10 == "10"', 10 == "10");
    console.log('10 === "10"', 10 === "10");
    console.log('10 != "10"', 10 != "10");
    console.log('10 !== "10"', 10 !== "10");
console.groupEnd();

// Užduotys


// String
    let name = 'Justinas';
    let sureName = 'Jadeska';
    let years = '29';
    let nationality = 'Lithuanian';
    let gender = 'male';

// Numbers
    let bornYear = 1993;
    let bornMonth = 11;
    let bornDay = 7;
    let howOld = 29;
    let howYoung = 29;

// Boolean
    let alive = true;
    let dead = false;
    let unknown = false;

console.groupCollapsed('Veiksmai');
    console.log('7+29', bornDay+howOld);
    console.log(bornYear+alive);
    console.log(bornYear+dead);
    console.log('year'+bornYear);
    console.log(dead+alive);
    console.log(alive+nationality);
    console.log(name+sureName);

    console.log(bornYear-howYoung);
    console.log(howOld-dead);
    console.log(bornMonth-years);
    console.log(alive-dead);
    console.log(unknown-bornYear);
    console.log(sureName-gender);

    console.log(howYoung*bornDay);
    console.log(bornMonth*alive);
    console.log(bornDay*years);
    console.log(dead*unknown);
    console.log(dead*gender);
    console.log(years*gender);

    console.log(bornYear/bornMonth);
    console.log(bornDay/alive);
    console.log(bornYear/years);
    console.log(alive/dead);
    console.log(alive/nationality);
    console.log(name/sureName);

    console.log(bornDay**bornDay);
    console.log(bornDay**alive);
    console.log(bornMonth**sureName);
    console.log(dead**alive);
    console.log(unknown**years);
    console.log(years**years);
console.groupEnd();

console.groupCollapsed('Veiksmai2');
    console.log(++bornMonth);
    console.log(++bornDay);
    console.log(--bornMonth);
    console.log(bornYear+=3);
    console.log(bornYear-=3);
    console.log(bornDay*=3);
    console.log(bornDay-=3);
    console.log(bornDay/=2);
    console.log(bornDay**=2);
    console.log(bornMonth%=3);
console.groupEnd();

console.group('Veiksmai3');
    console.log(bornMonth>bornYear);
    console.log(bornMonth<bornYear);
    console.log(bornMonth<=bornYear);
    console.log(bornMonth>=bornYear);
    console.log(bornMonth==bornYear);
    console.log(bornMonth===bornYear);
    console.log(bornMonth!=bornYear);
    console.log(bornMonth!==bornYear);
console.groupEnd();