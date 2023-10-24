export class Movies {
    constructor(props){
        this.props = props;
        return this.render();
    }
    render(){
        // console.log(this.props)
        const div = document.createElement('div');
        div.classList.add('card');

        const image = document.createElement('img');
        image.setAttribute('src', this.props.image);
        image.setAttribute('alt', this.props.name);

        const heading = document.createElement('h1');
        const headingText = document.createTextNode(this.props.name);
        heading.appendChild(headingText);

        const genre = document.createElement('p');
        const genreText = document.createTextNode(`Genre: ${this.props.genre}`);
        genre.appendChild(genreText);

        const release = document.createElement('p');
        const releaseText = document.createTextNode(`Release date: ${this.props.releaseDate}`);
        release.appendChild(releaseText);

        const director = document.createElement('p');
        const directorText = document.createTextNode(`Director: ${this.props.director}`);
        director.appendChild(directorText);

        const actor = document.createElement('p');
        const actorText = document.createTextNode(`Main actor: ${this.props.mainActor}`);
        actor.appendChild(actorText);

        const delButton = document.createElement('i');
        delButton.className = 'bi bi-trash3-fill';
        delButton.addEventListener('click', () => this.delete(div))

        div.append(image, heading, genre, release, director, actor, delButton);

        return div;
    }
    delete(element){
        element.remove();
        fetch(`http://localhost:3000/movies/${this.props.id}`, {method:"DELETE"});
    }
}