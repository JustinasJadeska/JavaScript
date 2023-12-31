// set initial count
let count = 0; 

// select value and buttons

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');
// console.log(btns);

btns.forEach((btn) => {
    // console.log(btn);
    btn.addEventListener('click', (e) => {
        const styles = e.currentTarget.classList;
        if(styles.contains('decrease')){
            count--;
        } else if (styles.contains('increase')){
            count++;
        } else {
            count = 0;
        }
        if(count > 0){
            value.style.color = 'green';
        }
        if(count < 0){
            value.style.color = 'red';
        }
        if (count === 0){
            value.style.color = '#222';
        }
        value.textContent = count;
    });
});

// Šiame kode naudojome: kintamuosius, ciklus, DOM, event, if ir if else sąlygas, palyginimus (true or false)