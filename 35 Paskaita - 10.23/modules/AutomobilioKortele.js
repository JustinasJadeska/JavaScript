import Modalas from "./Modalas.js";
import AutoRedagavimoForma from "./AutoRedagavimoForma.js";

export default class AutomobilioKortele{
  constructor(props){
    this.props = props;
    return this.render();
  }
  render(){
    const div = document.createElement('div');

    const heading = document.createElement('h3');
    const headingText = document.createTextNode(
      `${this.props.marke} ${this.props.modelis}`
    );
    heading.appendChild(headingText);

    const photo = document.createElement('img');
    photo.setAttribute('src', this.props.photo);
    photo.setAttribute('alt', `${this.props.marke} ${this.props.modelis}`);

    const infoDiv = document.createElement('div');

    const metai = document.createElement('p');
    const metaiText = document.createTextNode('Metai: ' + this.props.metai);
    metai.appendChild(metaiText);

    const spalva = document.createElement('p');
    const spalvaText = document.createTextNode('Spalva:');
    const spalvosSpan = document.createElement('span');
    spalvosSpan.style.backgroundColor = this.props.spalva;
    spalva.append(spalvaText, spalvosSpan);

    const arDauzta = document.createElement('p');
    const arDauztaText = document.createTextNode(
      this.props.arDauzta ? 'Daužta' : 'Nedaužta'
    );
    arDauzta.appendChild(arDauztaText);

    infoDiv.append(metai, spalva, arDauzta);

    const editButton = document.createElement('button');
    const editButtonText = document.createTextNode('Edit');
    editButton.appendChild(editButtonText);
    editButton.addEventListener('click', () => this.editFunctionality(headingText, photo, metaiText, spalvosSpan, arDauztaText, div));

    div.append(heading, photo, infoDiv, editButton);

    return div;
  }
  editFunctionality(heading, photo, metai, spalva, arDauzta, div){
    // console.log(this.props.id, heading, photo, metai, spalva, arDauzta);

    const modalas = new Modalas();
    
    const formosName = document.createElement('h1');
    const formosNameText = document.createTextNode('Mašinos redagavimo forma');
    formosName.appendChild(formosNameText);

    const forma = new AutoRedagavimoForma(this.props);

    forma.addEventListener('submit', e => {
      e.preventDefault();

      // console.log(e.target.elements);
      const formInputs = {
        marke: e.target.elements.marke.value,
        modelis: e.target.elements.modelis.value,
        metai: e.target.elements.metai.valueAsNumber,
        spalva: e.target.elements.spalva.value,
        arDauzta: e.target.elements.arDauzta.checked,
        photo: e.target.elements.photo.value
      };
      this.props = {
        id: this.props.id,
        ...formInputs
      }
      // console.log(formInputs);

      //      Pakeičiame ekrane
      heading.nodeValue = `${formInputs.marke} ${formInputs.modelis}`;
      photo.setAttribute('src', formInputs.photo);
      photo.setAttribute('alt', `${formInputs.marke} ${formInputs.modelis}`);
      metai.nodeValue = 'Metai: ' + formInputs.metai;
      spalva.style.backgroundColor = formInputs.spalva;
      arDauzta.nodeValue = formInputs.arDauzta ? 'Daužta' : 'Nedaužta';
      //       Pakeičiame JSON serveryje
      fetch(`http://localhost:3000/automobiliai/${this.props.id}`, {
        method: "PUT",
        headers:{
          "Content-Type":"application/json"
        },
        body: JSON.stringify(formInputs)
      });

      modalas.close();
      modalas.remove();
    });

    modalas.append(formosName, forma);
    div.appendChild(modalas);
    modalas.showModal();
  }
}