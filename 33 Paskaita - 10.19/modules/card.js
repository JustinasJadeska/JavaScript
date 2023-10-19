export class RandomUser {
    constructor(props){
        this.props = props;
        return this.render();
    }
    render(){
        const cardDiv = document.createElement('div');
        cardDiv.classList.add('userCard');

        const image = document.createElement('img');
        image.setAttribute('src', this.props.picture.medium);

        const cardDiv2 = document.createElement('div');
        cardDiv2.classList.add('userCard2');

            const heading = document.createElement('h1');
            const headingText = document.createTextNode(`${this.props.name.first} ${this.props.name.last}`);
            heading.appendChild(headingText);

            const age = document.createElement('p');
            const ageText = document.createTextNode(`${this.props.dob.age} years old`);
            age.appendChild(ageText);

        cardDiv2.append(heading, age);

        const mail = document.createElement('p');
        const mailText = document.createTextNode(this.props.email);
        mail.appendChild(mailText);

        const deleteIcon = document.createElement('span');
        deleteIcon.classList.add('bi');
        deleteIcon.classList.add('bi-x-circle-fill');
        deleteIcon.classList.add('topRightCorner');
        deleteIcon.addEventListener('click', () => this.deleteCard(cardDiv));

        cardDiv.append(image, cardDiv2, mail, deleteIcon);

        return cardDiv;
    }
    deleteCard(card){
        card.remove();
        
    }
}