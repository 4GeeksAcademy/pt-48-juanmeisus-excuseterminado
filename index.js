const who = ['The dog', 'My grandma', 'His turtle', 'My bird', 'mi locuraaaaa'];
const action = ['ate', 'peed', 'crushed', 'broke'];
const what = ['my homework', 'the keys', 'the car'];
const when = ['before the class', 'right on time', 'when I finished', 'during my lunch', 'while I was praying'];

const boton = document.getElementById (`renovar`);
boton.addEventListener( `click`, cambiarFrase);

function cambiarFrase(){

    
    let nuevoWho=Math.floor(Math.random() *who.length);
    let nuevoAction=Math.floor(Math.random() * action.length);
    let nuevoWhat=Math.floor(Math.random() *what.length);
    let nuevoWhen=Math.floor(Math.random() *when.length);
  
    let excusa = `${who[nuevoWho]} ${action[nuevoAction]} ${what[nuevoWhat]} ${when[nuevoWhen]} `;
    
    const h1 =document.getElementById(`excuse`);
    h1.innerHTML= excusa;
}
    