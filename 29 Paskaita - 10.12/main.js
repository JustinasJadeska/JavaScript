import { data as carsData } from './modules/carsData.js';
import { sum as sudetis, substraction as atimtis } from './modules/helperFunctions.js';
import Masina from './modules/Car.js';

console.log(carsData);

console.log(sudetis(5,9));
console.log(sudetis(5661,90));
console.log(atimtis(5,3));
console.log(atimtis(5000,-500));


carsData.forEach(car => {
  // const carObj = new Masina(car);
  // console.log(carObj);
  // // console.log(carObj.make);
  // console.log(carObj.getMake());
  // // console.log(carObj.make = 'naujaMarke0');
  // console.log(carObj);
  // // console.log(carObj.setMake('6'));
  // console.log(carObj);
  // console.log(carObj.getBasePrice());
  // console.log(carObj.getEngineType());
  // console.log(carObj.getPrice());
  // console.log('------')
  const carDiv = new Masina(car);
  console.log(carDiv);
  document.querySelector('#carCards').appendChild(carDiv);
});