const textoAnimacion = [
  ["<","D","E","S","A","R","R","O","L","L","A","D","O","R"," ","J","U","N","I","O","R",">"],
  ["<","J","U","N","I","O","R"," ","D","E","V","E","L","O","P","E","R",">"],
  ["H","e","l","l","o"," ","w","o","r","l","d"," ","(","\"","p","r","i","n","t","\"",")"]
];
const animation = () => {
  const contenedorAnimacion = document.querySelector(".contenedor__texto__animacion");
  let fraseIndex = 0;
  let letraIndex = 0;
  let intervalo;

  const escribir = () => {
    contenedorAnimacion.textContent += textoAnimacion[fraseIndex][letraIndex];
    letraIndex++;

    if (letraIndex === textoAnimacion[fraseIndex].length) {
      clearInterval(intervalo);
      setTimeout(() => {
        intervalo = setInterval(borrar, 100);
      }, 900);
    }
  };

  const borrar = () => {
    contenedorAnimacion.textContent = contenedorAnimacion.textContent.slice(0, -1);
    letraIndex--;

    if (letraIndex === 0) {
      clearInterval(intervalo);
      setTimeout(() => {
        fraseIndex++;
        if (fraseIndex >= textoAnimacion.length) {
          fraseIndex = 0;
        }
        contenedorAnimacion.textContent = "";
        letraIndex = 0;
        intervalo = setInterval(escribir, 100);
      }, 900);
    }
  };

  intervalo = setInterval(escribir, 100);
};

window.addEventListener("load", animation);


// ---------------- SLIDER ----------------
const imagenes = [
  "imagenes/cat.jpg",
  "imagenes/ai-generated-9490903_1280.png",
  "imagenes/data-vortex-9896732_1280.png",
  "imagenes/fantastic-4805583_1280.jpg"
];

const imagenPrincipal = document.getElementById("imagen");
imagenPrincipal.src = imagenes[0];

const slideDerecho = document.querySelector(".slider-derecho");
const slideIzquierdo = document.querySelector(".slider-izquierdo");
let contador = 0;

const moverDerecha = () => {
  contador++;
  if (contador > imagenes.length - 1) {
    contador = 0;
  }
  imagenPrincipal.src = imagenes[contador];
};

const moverIzquierda = () => {
  contador--;
  if (contador < 0) {
    contador = imagenes.length - 1;
  }
  imagenPrincipal.src = imagenes[contador];
};


let intervaloSlider = setInterval(moverDerecha, 2000);


slideDerecho.addEventListener("click", function(){
  clearInterval(intervaloSlider);
  moverDerecha();
  intervaloSlider = setInterval(moverDerecha, 2000);
});

slideIzquierdo.addEventListener("click", function(){
  clearInterval(intervaloSlider);
  moverIzquierda();
  intervaloSlider = setInterval(moverDerecha, 2000);
});