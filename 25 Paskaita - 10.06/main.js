document
  .querySelector('div.formPvz > form')
  .addEventListener('submit', (eventoParametras) => {
    eventoParametras.preventDefault();
    console.log(eventoParametras);
    console.log(eventoParametras.target.elements);
    
    let text = eventoParametras.target.elements.inputText.value;
    let textArea = eventoParametras.target.elements.textareaText.value;
    let selectas = eventoParametras.target.elements.selectStuff.value;
    
    // let {inputText:text, textareaText:textArea, selectStuff:selectas} = eventoParametras.target.elements;
    // console.dir(text.value);
    // console.dir(textArea.value);
    // console.dir(selectas.value);

    console.dir(text);
    console.dir(textArea);
    console.dir(selectas);

    // document.querySelector('#formPvzResult').innerHTML =
    //   '<h1>'+text+'</h1>' +
    //   '<p>Komentaras: '+textArea+'</p>' +
    //   '<p>Reitingas: '+selectas+'</p>';
    // ;
    document.querySelector('#formPvzResult').innerHTML += 
    `
      <h1 class='bigBlueText'>${text}</h1>
      <p>Komentaras: ${textArea}</p>
      <p>Reitingas: ${selectas == 0 ? '2' : selectas}</p>
    `;

    eventoParametras.target.reset(); // išvalo formos laukelius neperkraunant puslapio
  });

document
  .querySelector('#pvzKartu > form')
  .addEventListener('submit', e => {
    e.preventDefault();
    // console.log(e.target.elements);
    let sk1 = e.target.elements.nr1.valueAsNumber;
    let sk2 = e.target.elements.nr2.valueAsNumber;
    // console.log(sk1, typeof(sk1), sk2, typeof(sk2));
    let result = sk1 + sk2;
    document.querySelector('#pvzKartuResult').innerHTML += `
      ${sk1} + ${sk2} = ${result}
    `;
    e.target.reset();
  });