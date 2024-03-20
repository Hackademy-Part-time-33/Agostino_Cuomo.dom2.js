/* TRACCIA 1 */

let bottone= document.querySelector('#button');
let titolo= document.querySelector('#title');
let colors = ['red', 'black', 'green', 'blue', 'yellow'];
let i = 0;
  bottone.addEventListener('click', function(){
    
   titolo.style.color= colors[i];
   i++;
   console.log(i);
  if ( i == 5){
      i =0;
  }
});

/* TRACCIA 2 */
let contacts = [
    { 'id': 1, 'name': 'Nicola'},
    { 'id': 2, 'name': 'Fabio'},
    { 'id': 3, 'name': 'Luca'},
    { 'id': 4, 'name': 'Giulia'}
] ;
let bottone2 = document.querySelector('.button2');
let contenitore = document.querySelector('.contenitore');
let contaClick = 0;


 function funzione(){
    contenitore.innerHTML='';
    contacts.forEach(element => {
    let h2 = document.createElement('h2');
    console.log(element);
    h2.innerHTML= `id: ${element.id},name: ${element.name}`; 
    contenitore.appendChild(h2);
    
});
};

funzione();



bottone2.addEventListener('click',
()=> {
    if(contaClick == 0){
     contaClick++;
    contacts.sort(
        (a,b)=>{
            let nameA = a.name.toUpperCase(); // ignore upper and lowercase
  let nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
        }
    )
   funzione();
console.log(contacts);
    }else{
        contaClick =0;
        contacts.sort(
            (a,b)=>{
                let nameA = a.name.toUpperCase(); // ignore upper and lowercase
      let nameB = b.name.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
    
      // names must be equal
      return 0;
            }
        )
       funzione();
    console.log(contacts);  
    }
}
);

let bottone2id= document.querySelector('.button2id');

bottone2id.addEventListener('click',()=>{
    
    contacts.sort((a, b)=>{
        a.id - b.id;
        console.log(a.id, b.id);
        });
        console.log(contacts);
        funzione();
});






