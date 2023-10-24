export class Button {
    constructor(props){
        this.props = props;
        return this.render();
    }
    render(){
        const div = document.createElement('div');
        div.classList.add('cardButton');

        const genres = ['Action', 'Drama', 'Comedy', 'Adventure', 'Romance', 'Thriller']

        genres.forEach((genre) =>{
            const filterButton = document.createElement('button');
            const filterButtonText = document.createTextNode(genre);
            filterButton.appendChild(filterButtonText);

            div.append(filterButton);
        })

        return div;
    }
}