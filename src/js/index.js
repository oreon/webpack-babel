//import {adder} from test;
import adder from './test';
const serNos = [6934, 23111, 23114, 1001, 211161];

const strSNos = serNos.map(sn => sn+ 100);
console.log(strSNos);

const partEl = document.getElementById('part-list');
const strList = serNos.reduce(
  (acc, element) => acc += `<li>${ element * 2}</li>`, ''
);

partEl.innerHTML = strList;

export class MyClass{
  static press(){
    alert("hi there")
  }
  fun(){
    return "hi from class"
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const hiButton = document.getElementById('hi-button');
  hiButton.addEventListener('click', MyClass.press);

  const thereButton = document.getElementById('there-button');
  thereButton.addEventListener('click', a);
});

export const a = () => alert("hi from glbl")

console.log(new MyClass().fun())