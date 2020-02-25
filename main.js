import {FirstPrint} from './FirstPrint'
import sp from './SecondPrint'

const hiButton = document.getElementById('hi-btn');
const byeButton = document.getElementById('bye-btn');

const firstPrint = new FirstPrint();
const secondPrint = new sp();

hiButton.addEventListener('click',()=>{ firstPrint.printHi()});
byeButton.addEventListener('click',()=>{ secondPrint.printBye()});

