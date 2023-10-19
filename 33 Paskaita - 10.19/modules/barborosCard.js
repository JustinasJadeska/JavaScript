export class BarborosCard {
    constructor(props){
        this.props = props;
        return this.render()
    }
    render(){
        console.log(this.props)
        const div = document.createElement('div');

        const image = document.createElement('img');
        image.setAttribute('src', this.props.image);
        image.setAttribute('alt', this.props.title);

        const heading = document.createElement('h1');
        const headingText = document.createTextNode(this.props.title);
        heading.appendChild(headingText);

        const price = document.createElement('p');
        const priceText = document.createTextNode(this.props.price);
        price.appendChild(priceText);

        const delButton = document.createElement('button');
        const delButtonText = document.createTextNode('Delete');
        delButton.appendChild(delButtonText)
        delButton.addEventListener('click', () => this.delete(div))

        div.append(image, heading, price, delButton);

        return div;
    }
    delete(element){
        element.remove();
        fetch(`https://sophisticated-humane-dandelion.glitch.me/${this.props.id}`, {method:"DELETE"});
    }
}