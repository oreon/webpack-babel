//import {adder} from test;
import adder from './test';
const serNos = [6934, 23111, 23114, 1001, 211161];

const strSNos = serNos.map(sn => sn+1);
console.log(strSNos);

const partEl = document.getElementById('part-list');
const strList = serNos.reduce(
  (acc, element) => acc += `<li>${ element * 2}</li>`, ''
);

partEl.innerHTML = strList;