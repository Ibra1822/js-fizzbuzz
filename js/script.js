let container = document.querySelector('.container');  //container diventa .container 

let limit = 100;    // limit è 100


for(let i = 1; i <= limit; i++){   // i è uguale a 1 finche 1 non diventa 100 torna indietro e fa + 1

const box = document.createElement('div');  // box crea elemento div

box.className = 'box'; // a box viene data la classe box


if (i % 3 === 0 && i % 5 === 0) { // i fa la divisione con 3/5 se è zero vuoldire che è un numero multiplo di 3 o 5 

console.log('multiplo di cinque e di tre')   // conferma multiplo di 3 - 5
box.classList.add('entrambi')  // aggiunge a box class viola 
box.innerHTML = 'fizzBuzz' // inserisce a box fizzBuzz

}else if(i % 5 === 0 ){    // fa la divisione con 5 se è zero vuoldire che è multiplo di 5 
  console.log('multiplo di cinque')  // conferma  multiplo di 5
  box.classList.add('cinque')   // aggiunge a box classe rosso 
  box.innerHTML = 'buzz';    // inserisce la buzz
}else  if(i % 3 === 0 ) {  // fa la divisione con 3 se è zero vuoldire che è multiplo di 5 
  box.classList.add('tre') // aggiunge classe viola 
  console.log('multiplo di tre') // conferma multiplo di 5
  box.innerHTML = 'fizz'; // aggiunge a box fizz
} else {
  box.classList.add('standard') // aggiunge a box classe viola 
  console.log('multiplo di niente')  // conferma che i numeri non sono multipli di 3 o 5 
  box.innerHTML = i; // continua il percorso da 1 100 senza i multipli di 3 o 5
}

container.append(box);  // aggiunge a conteiner l'emento box 

}

