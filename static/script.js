document.onload = function() {
  // Forza il ricalcolo del layout
  window.scrollY = 1
}



document.addEventListener("scroll", function() {
  const scrollPosition = window.scrollY;
  const hammer = document.querySelector("#hammer");
  const hammer2 = document.querySelector("#hammer2");

  let rotationAngle;
  
  if (scrollPosition >= 1145) {
    const exponent = (scrollPosition - 1145) / 200;
    rotationAngle = scrollPosition / 4 + Math.pow(exponent, 3) * 60;
  } else {
    rotationAngle = scrollPosition / 4;
  }
  
  if (rotationAngle > 481) {
    rotationAngle = scrollPosition / 4 + 130;
  }

  if(scrollPosition > 1640){
    rotationAngle = 540
    hammer.style.filter = "drop-shadow(0px 0px 0px rgba(0, 0, 0, 0))";
    
  }
  else{
    const shadowX = 7 * Math.sin(rotationAngle * (Math.PI / 180)); /* calcoliamo l'ombra lungo l'asse X,
    deve essere una funzione invertibile in modo da poter muovere l'ombra sia quando scrollo in su che giù, apposta usa sin e cos*/
    const shadowY = 7 * Math.cos(rotationAngle * (Math.PI / 180)); // calcoliamo l'ombra lungo l'asse Y
    
    // Applichiamo la posizione dell'ombra
  hammer.style.filter = "drop-shadow(" + shadowX + "px " + shadowY + "px 1px rgba(0, 0, 0, 0.5))";
  

  }
    
  // Modifica qui
  if (scrollPosition > 1670) {
    hammer.style.opacity="0"
    hammer2.style.opacity="1"


  } else {
    hammer.style.opacity="1"
    hammer2.style.opacity = "0"
  }
  
  console.log(scrollPosition);
  hammer.style.transform = "rotate(" + rotationAngle + "deg)";
  
  // Calcoliamo la posizione dell'ombra in base alla rotazione del martello
  hammer2.style.filter = "drop-shadow(" + 0 + "px " + 3 + "px 1px rgba(0, 0, 0, 0.5))";
});


  
  



window.addEventListener('scroll', function() {
    var intro = document.querySelector('.intro');
    

    var introHeight = intro.offsetHeight;
    var scrollPosition = window.scrollY;

    // Calcola la trasparenza in base alla posizione dello scroll
    var opacity = 1 - (scrollPosition / introHeight);
    intro.style.opacity = opacity;

     
    var nuovaPosizione = scrollPosition/10; // Modifica la direzione in base al tuo bisogno
    intro.style.transform = "translate("+ -nuovaPosizione +"%, -50%)";

    // Aggiungi classe fade-out quando l'elemento è fuori dalla vista
    if (scrollPosition > introHeight) {
      intro.classList.add('fade-out');

    } else {
      intro.classList.remove('fade-out');

    }
  });

  window.addEventListener('scroll', function() {
    var prova = document.querySelector('.prova');
    var provaHeight = prova.offsetHeight;
    var scrollPosition = window.scrollY;

    // Calcola la trasparenza in base alla posizione dello scroll
    var opacity = 1 - (scrollPosition / 244);//244 è l'altezza di intro, così prova e intro scompaiano insieme
    prova.style.opacity = opacity;

     
    var nuovaPosizione = scrollPosition/10; // Modifica la direzione in base al tuo bisogno
    prova.style.transform = "translate("+ nuovaPosizione +"%, 45%)";
   
    // Aggiungi classe fade-out quando l'elemento è fuori dalla vista
    if (scrollPosition > provaHeight) {
      prova.classList.add('fade-out2');
    } else {
      prova.classList.remove('fade-out2');
    }
  });

  window.addEventListener('scroll', function() {
    var prova2 = document.querySelector('.prova2');
    var scrollPosition = window.scrollY;
    var nuovaPosizione;
    var opacity;

    if (scrollPosition < 175) {
        prova2.style.opacity = 0;
    } else if (scrollPosition < 500) {
        opacity = scrollPosition / 300;
        prova2.style.opacity = opacity;
    } else {
        opacity = 1 - (scrollPosition - 500) / 100 // Opacità diminuisce gradualmente quando scrollPosition supera 500
        prova2.style.opacity = opacity;
    }
    nuovaPosizione = (scrollPosition < 500) ? scrollPosition / 7 : 500 / 7 - (scrollPosition - 500) / 7;
    prova2.style.transform = "translate(" + -nuovaPosizione + "%, 50%)";
});


window.addEventListener('scroll', function() {
  var prova3 = document.querySelector('.prova3');
  var scrollPosition = window.scrollY;
  var nuovaPosizione;
  var opacity;

  if (scrollPosition < 175) {
      prova3.style.opacity = 0;
  } else if (scrollPosition < 500) {
      opacity = scrollPosition / 300;
      prova3.style.opacity = opacity;
  } else {
      opacity = 1 - (scrollPosition - 500) / 100; 
      prova3.style.opacity = opacity;
  }
  nuovaPosizione = (scrollPosition < 500) ? scrollPosition / 7 : (scrollPosition < 800) ? 500 / 7 - (scrollPosition - 500) / 7 : -200;
  prova3.style.transform = "translate(" + nuovaPosizione + "%, -50%)";
});

window.addEventListener('scroll', function() {
  var prova4 = document.querySelector('.prova4');
  var scrollPosition = window.scrollY;
  var nuovaPosizione;
  var opacity;

  if (scrollPosition < 700) {
      prova4.style.opacity = 0;
  } else if (scrollPosition < 1000) {
      opacity = scrollPosition / 1000;
      prova4.style.opacity = opacity;
  } else {
      opacity = 1 - (scrollPosition - 1000) / 100; 
      prova4.style.opacity = opacity;
  }
  nuovaPosizione = (scrollPosition < 1000) ? scrollPosition / 7 : (scrollPosition < 1200) ? 1000 / 7 - (scrollPosition - 1000) / 7 : -700;
  prova4.style.transform = "translate(" + nuovaPosizione + "%, -50%)";
});

window.addEventListener('scroll', function() {
  var prova5 = document.querySelector('.prova5');
  var scrollPosition = window.scrollY;
  var nuovaPosizione;
  var opacity;

  if (scrollPosition < 700) {
      prova5.style.opacity = 0;
  } else if (scrollPosition < 1000) {
      opacity = scrollPosition / 1000;
      prova5.style.opacity = opacity;
  } else {
      opacity = 1 - (scrollPosition - 1000) / 100; 
      prova5.style.opacity = opacity;
  }

  // Calcola la trasformazione sulla base della posizione dello scroll
  nuovaPosizione = (scrollPosition < 1000) ? -(scrollPosition-1000) / 7 : (scrollPosition-1000) / 7;

  prova5.style.transform = "translate(" + nuovaPosizione + "%, -50%)";
});




//<a target="_blank" href="https://icons8.com/icon/6AGHyLA8bTw4/home">Casa</a> icona di <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/NKRM4VSa2hw2/document">Documento</a> icona di <a target="_blank" href="https://icons8.com">Icons8</a>
//<a target="_blank" href="https://icons8.com/icon/nnKydJiA9ENy/map-pinpoint">Oggetti Puntiforme</a> icona di <a target="_blank" href="https://icons8.com">Icons8</a>