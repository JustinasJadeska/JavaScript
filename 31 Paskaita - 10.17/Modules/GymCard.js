export default class GymCard{
    constructor(props){
      this.props = props;
      return this.render();
    }
    render(){
      const cardDiv = document.createElement('div');
      cardDiv.classList.add('gymCard');
  
      const heading = document.createElement('h1');
      const headingText = document.createTextNode(this.props.vardas);
      heading.appendChild(headingText);
  
      const location = document.createElement('p');
      const locationText = document.createTextNode(this.props.lokacija);
      location.appendChild(locationText);
  
      const price = document.createElement('p');
      const priceText = document.createTextNode(this.props.kaina);
      price.appendChild(priceText);
  
      const image = document.createElement('img');
      image.setAttribute('src', this.props.nuotrauka);
  
      cardDiv.append(heading, image, location, price);
      return cardDiv;
    }
  }