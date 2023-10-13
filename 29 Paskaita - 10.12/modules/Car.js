import { randomColor } from "./helperFunctions.js";
import Par from './ParagraphComponent.js';

export default class Car{
  #make; #model; #year; #basePrice; #engineType; #photo; #color;
  //      1
  // constructor({make, model, year,  photo, basePrice, engineType}){
  //   this.make = make;
  //   this.model = model;
  //   this.year = year;
  //   this.basePrice = basePrice;
  //   this.engineType = engineType;
  //   this.photo = photo;
  //   this.color = randomColor();
  // }
  // methodas(){
  //   this.make;
  // }
  //      2
  // constructor(props){
  //   this.props = props;
  //   this.color = randomColor();
  // }
  // methodas(){
  //   this.props.make;
  // }
  //      3
  constructor(props){
    this.#make = props.make;
    this.#model = props.model;
    this.#year = props.year;
    this.#basePrice = props.basePrice;
    this.#engineType = props.engineType;
    this.#photo = props.photo;
    this.#color = randomColor();
    return this.render();
  }
  render(){
    const divCard = document.createElement('div');
    divCard.classList.add('card');
    
    const heading = document.createElement('h1');
    const headingText = document.createTextNode(`${this.#make} ${this.#model}`);
    heading.appendChild(headingText);

    const image = document.createElement('img');
    image.setAttribute('src', this.#photo);
    image.setAttribute('alt', `Photo of ${this.#make} ${this.#model}`);

    const specDiv = document.createElement('div');

    const par1 = new Par(`Year: ${this.#year}`);
    const par2 = new Par(`Price: ${this.getPrice()}`);
    const par3 = new Par(`Engine: ${this.#engineType}`);
    const par4 = new Par(`Color: `);
    
    const colorSpan = document.createElement('span');
    colorSpan.classList.add('colorBox');
    colorSpan.style.backgroundColor = this.#color;
    par4.appendChild(colorSpan);

    specDiv.append(par1, par2, par3, par4);
    divCard.append(heading, image, specDiv);

    return divCard;
  }
  methodas(){
    this.make;
  }
  getMake(){
    return this.#make;
  }
  setMake(newMake){
    if(typeof(newMake) !== 'string'){
      return 'error, type must be a string'
    } else {
      this.#make = newMake;
      return 'changed succesfully';
    }
  }
  getBasePrice(){
    return this.#basePrice;
  }
  getEngineType(){
    return this.#engineType;
  }
  getPrice(){
    switch(this.#engineType){
      case 'gas':
        return this.#basePrice + 200;
      case 'petrol':
        return this.#basePrice + 350;
      case 'electric':
        return this.#basePrice + 2500;
      default:
        return this.#basePrice;
    }
  }
}