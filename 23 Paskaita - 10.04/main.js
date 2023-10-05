console.groupCollapsed('Sąlygos');
  //    if else
  console.groupCollapsed('if else');
  let amzius0 = 25;
  if(amzius0 > 18){
    console.log('pilnametis');
  } else {
    console.log('nepilnametis');
  }
console.groupEnd();


// Logical &&
console.groupCollapsed('Logical &&')
    let amzius = 15;
    true && console.log('vyksta veiksmai...');
    false && console.log('nevyksta veiksmai...');
    amzius > 18 && console.log ('Everything');
    amzius < 18 && console.log('Nothing');
console.groupEnd();

// Ternary ? :
console.groupCollapsed('Ternary ? :');
    let amzius1 = 25;
    amzius1 > 18 ? console.log('pilnametis') : console.log('nepilnametis');
// harder assignment (else if)
    amzius1 < 18                                    // if salyga
    ? console.log('Nepilnametis')                   // if veiksmas
    : amzius1 >= 65                                 // else if
    ? console.log('pensisininkas')                  // else if veiksmas
    : amzius >= 18 && amzius1 < 65                  // else if
    ? console.log('darbingo amziaus')               // else if veiksmas
    : console.log(amzius1 + ' nera skaiciaus....'); // else
console.groupEnd();

// Destruktūrizavimas
console.groupCollapsed('Destruction');
    console.group('Arrays')
        let masyvas1 = ['labas', undefined, 'hello', 665,12,3,44, false, NaN, ':)'];
        console.log(masyvas1);
        //be destruk
        let e10 = masyvas1[0];
        console.log(e10);
        let el1 = masyvas1[1] !== undefined ? masyvas1[1] : 'default';
        console.log(el1);
        let el2 = masyvas1.slice(3);
        console.log(el2);

        // su destruk
        let [em0, em1 = 'default', , ...em2] = masyvas;
        console.log(em0, em1, em2);

        // function atrinkti(masyvas1, ...rest){
        //     console.log(masyvas1, rest)
        // }
        // atrinkti(masyvas, 4, 665, 'hello');

    console.groupEnd();
    console.groupCollapsed('Objektai');
        let objectDes = {
            vardas: 'Justin',
            age: 29,
            darboPatirtiesMetai: [3, 5, 2],
            address: {
                city: 'Vilnius',
                country: 'Lithuania'
            },
            hairColor: 'brown',
            tired: true
        }
        console.log(objectDes);
        // be destrukt
        let vardasWithout = objectDes.vardas;
        let ageWithout = objectDes.age;
        let countryWithout = objectDes.address.country;
        let driversLisenceWithout = objectDes.driversLisence ? objectDes.driversLisence : false;
        console.log(vardasWithout, ageWithout, countryWithout, driversLisenceWithout);

        // su destrukt
        let {vardas, age, address:{country}, driversLisence = false, ...rest} = objectDes;
        console.log(vardas, age, country, driversLisence, rest);
    console.groupEnd();
    
    console.group('parametrai destrukt');
        function atrinkti(masyvas1, ...rest){
            console.log(masyvas1, rest)
        }
        atrinkti(masyvas, 4, 665, 'hello');

        function neDarboLaikas({age, darboPatirtiesMetai:darboM}){
            // let amzius = asmuo.age;
            // let darboM = asmuo.darboPatirtiesMetai
            console.log(age);
            console.log(darboM);
        }
        neDarboLaikas(objectDes)
    console.groupEnd();


console.group('Iteraciniai masyvų metodai');
  let masyvas = ['aaa','b','cc','d','a','ccccccccccccc','g'];
  let masyvasSk = [4,5,6,12,45,888,-666,12];

  console.groupCollapsed('forEach');
    masyvas.forEach((raide,indeksas) => console.log(indeksas, raide));
  console.groupEnd();

  console.groupCollapsed('filter');
    let filtered = masyvas.filter(el => el.length === 1);
    console.log(filtered);
  console.groupEnd();

  console.groupCollapsed('map');
    let mutuotas = masyvas.map((el, i) => el+' :) yra '+ (i+1) +' elementas');
    console.log(mutuotas);
  console.groupEnd();

  console.groupCollapsed('reduce');
    let reduceintas = masyvasSk.reduce((acc, curr) => acc+curr);
    let reduceintas2 = masyvas.reduce((acc, curr) => acc+curr, 'https://');
    console.log(reduceintas);
    console.log(reduceintas2);
    console.log('-----------------');
    let lilMas = [1,2,3,4,5];
    let red3 = lilMas.reduce( (acc, curr, i) => {
      console.log('iteracija: ', i);
      console.log('accumulator: ', acc);
      console.log('current value: ', curr);
      console.log('---');
      return acc-curr+100;
    }, 0);
    console.log(red3);
  console.groupEnd();

  console.groupCollapsed('some ir every');
    let masyvasSomeEvery = [1,2,3,'a','b','c'];
    let arSkaicius = masyvasSomeEvery.some(el => typeof(el) === 'number');
    let arSkaiciai = masyvasSomeEvery.every(el => typeof(el) === 'number');
    let arSkaiciusLong = masyvasSomeEvery.some(el => {
      console.log(el);
      return typeof(el) === 'number';
    });
    console.log('------');
    let arSkaiciaiLong = masyvasSomeEvery.every(el => {
      console.log(el);
      return typeof(el) === 'number';
    });
    console.log(arSkaicius, arSkaiciai);
  console.groupEnd();

  console.group('find ir findLast')
    let raide = masyvasSomeEvery.find(el => typeof(el) === 'string'); 
    console.log(raide); // a
    let raideLast = masyvasSomeEvery.findLast(el => typeof(el) === 'string'); 
    console.log(raideLast); // c
  console.groupEnd();

  console.group('findIndex ir findLastIndex')
    let raidesIndex = masyvasSomeEvery.findIndex(el => typeof(el) === 'number');
    console.log(raidesIndex); // 0
    let lastRaidesIndex = masyvasSomeEvery.findLastIndex(el => typeof(el) === 'string'); 
    console.log(lastRaidesIndex); // 5
  console.groupEnd();


console.groupEnd();