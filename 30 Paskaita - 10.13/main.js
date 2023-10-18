import { Paragraph } from './modules/paragraphComponent.js';
import { Image } from './modules/imgComponent.js';
import { Heading } from './modules/headingComponent.js';
import { Any } from './modules/anyComponent.js';
import { data3 } from './modules/bandymas.js';
import { Lists } from './modules/listComponent.js';
import { data2 } from './modules/bandymas.js';
// import { data4 } from './modules/data.js';
import { Select } from './modules/select.js';
import { Fullname } from './modules/fullname.js';
import { Trip } from './modules/assignment2.js';

// const table1 = new Fullname ('john', 'doe');
// document.body.appendChild(table1);


// const table = new Table (3, 6);
// document.body.appendChild(table);

const opti = new Select(data3, {class: 'bandymas'});
// console.log(opti);
document.body.appendChild(opti);

const list = new Lists(data2, {class: 'bandymas'});
// console.log(list);
document.body.appendChild(list);

const text1 = new Heading ('Fantasy world', {class: 'bandymas3'});
// console.log(text1);
// document.body.appendChild(text1);

const img = new Image ('https://troypress.com/wp-content/uploads/2022/09/jalanhenning_fantasy_world_0930f55e-daad-4bca-8d67-647bf1d3f78e.png',
{class: 'bandymas2'});
// console.log(img);
// document.body.appendChild(img);

const text2 = new Paragraph ('Fantasy is one of the greatest things.', {class: 'bandymas'});
// console.log(text2);
// document.body.appendChild(text2);

document.body.append(text1, img, text2);

const anything = new Any ('h3', 'Demon slayer', {class: 'bandymas4'});
// console.log(anything);
document.body.appendChild(anything);

// const text2 = new Paragraph (data[0].name, {class: data[0].class});
// console.log(text2);
// document.body.appendChild(text2);

