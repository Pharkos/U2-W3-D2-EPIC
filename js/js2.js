const h2 = document.querySelector("h2");

let timer = 60;

let trascorso = sessionStorage.getItem("trascorso");
trascorso = trascorso ? parseInt(trascorso) : 0;

let rimasto = timer - trascorso;

const anx = setInterval(() => {
  h2.innerText = rimasto;

  if (rimasto <= 0) {
    clearInterval(anx);
    sessionStorage.removeItem("trascorso");
  } else {
    trascorso++;
    sessionStorage.setItem("trascorso", trascorso);
    rimasto--;
  }
}, 1000);
