export class RealEstate{
    constructor(props){
      this.props = props;
      return this.render();
    }
    render(){
      const cardDiv = document.createElement('div');
      cardDiv.classList.add('realEstate');
  
      const heading = document.createElement('p');
      const headingText = document.createTextNode(this.props.city);
      heading.appendChild(headingText);
  
      const description = document.createElement('p');
      const descriptionText = document.createTextNode(this.props.description);
      description.appendChild(descriptionText);
  
      const price = document.createElement('h1');
      const priceText = document.createTextNode(this.props.price);
      price.appendChild(priceText);
  
      const image = document.createElement('img');
      image.setAttribute('src', this.props.image);
  
      cardDiv.append(image, price, heading, description);

      return cardDiv;
    }
    
  }