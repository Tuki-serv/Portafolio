# Index
```
<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Document</title>

    <link rel="stylesheet" href="styleLimpio.css">

</head>

<body>

    <header>

        <div class="cabecera">

            <div class="cabecera__incio">

                <h1>&ltBienvenidos&gt</h1>

            </div>

            <div class="cabecera__nav">

                <nav>

                    <button class="cabecera__nav-boton" id="boton">

                        <svg  xmlns="http://www.w3.org/2000/svg"  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  stroke-width="2"  stroke-linecap="round"  stroke-linejoin="round"  class="icon icon-tabler icons-tabler-outline icon-tabler-menu-deep"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 6h16" /><path d="M7 12h13" /><path d="M10 18h10" /></svg>

                    </button>

                    <ul class="cabecera__nav-lista" id="menuLista">

                        <li class="cabecera__nav-item"><a href="#novedades">Novedades</a></li>

                        <li class="cabecera__nav-item"><a href="#ofertas">Ofertas</a></li>

                        <li class="cabecera__nav-item"><a href="#contacto">Contacto</a></li>

                    </ul>

                </nav>

            </div>

        </div>

    </header>

    <main>

       <div class="contenedor">

            <section class="contenedor__botones">

                <div class="Contenedor-Inicio">

                    <div class="Presentacion">

                        <h2 class="Presentacion_nombre">LUCAS GONZALO HERNANDEZ</h2>

                        <div class="contenedor__texto">

                            <div class="barra_escritura"></div>

                            <div class="contenedor__texto__animacion"></div>

                            <div class="barra_escritura"></div>

                        </div>

                    </div>

                    <div   div class="texto">

                        &lt“Lo vulgar es el ronquido, lo inverosímil, el sueño. La humanidad ronca, pero el artista está en la obligación de hacerla soñar o no es artista”&gt

                    </div>

                </div>

            </section>

            <section class="contenedor__producto">

               <div class="contenedor-slider">

                    <div class="slider-izquierdo"></div>

  

                    <div class="slider-screen">

                        <img id="imagen" alt="imagen principal">

                    </div>

  

                    <div class="slider-derecho"></div>

  

                </div>

            </section>

        </div>

    </main>

    <script src="scripts.js"></script>

</body>

</html>
```

# css
```
/* =========================

   Variables globales

========================= */

:root {

  --color-fondo: #000000;

  --color-bordes: #60BBD3;

  --color-titulo: #95A1B5;

  --color-texto: #FB9F55;

  --color-hover: rgba(0, 255, 204, 0.05);

  

  --space-1: .2rem;

  --space-2: .4rem;

  --space-3: .6rem;

  --space-4: 1rem;

  --space-5: 1.5rem;

  --space-6: 2rem;

  --space-8: 3rem;

  

  --shadow: 0 0 15px #00ffcc33;

}

  

/* =========================

   Reset básico

========================= */

body {

  margin: 0;

  padding: 0;

  font-family: 'Share Tech Mono', monospace;

  background-color: #0B0F1A;

  color: #F2F2F2;

  display: flex;

  flex-direction: column;

  align-items: center;

  background-image: radial-gradient(#103257 0.01px, #000000 2px);

  background-size: 20px 20px;

}

  

/* =========================

   Header

========================= */

header {

  background-color: var(--color-fondo);

  box-shadow: var(--shadow);

}

  

.cabecera {

  display: flex;

  justify-content: space-between;

  align-items: center;

  padding: var(--space-4);

  max-width: 1300px;

  margin: auto;

}

  

.cabecera__incio h1 {

  color: var(--color-titulo);

}

  

.cabecera__nav-lista {

  display: flex;

  list-style: none;

  gap: var(--space-5);

}

  

.cabecera__nav-item a {

  text-decoration: none;

  color: var(--color-texto);

  font-weight: bold;

}

  

.cabecera__nav-item:hover {

  background-color: var(--color-hover);

  border-radius: .6rem;

  cursor: pointer;

}

  

/* =========================

   Presentación

========================= */

  

.Contenedor-Inicio {

  display: flex;

  flex-direction: column;

  justify-content: center;

  align-items: center;

  gap: 4rem;

  background-repeat: no-repeat;

}

  

.Presentacion {

  display: flex;

  flex-direction: column;

  align-items: center;

  gap: var(--space-2);

  width: 350px;

  padding: var(--space-3);

  border: 1px solid var(--color-bordes);

  background-color: var(--color-fondo);

  color: var(--color-titulo);

  box-shadow: var(--shadow);

  position: relative;

}

  

.Presentacion:hover {

  border-color: #00ffcc;

  background-color: var(--color-hover);

  border-radius: 8px;

}

  

.Presentacion::before,

.Presentacion::after {

  content: '';

  position: absolute;

  width: 40px;

  height: 7px;

  background-color: #00ffcc;

}

  

.Presentacion::before { top: 0; left: 0; }

.Presentacion::after { bottom: 0; right: 0; }

  

.contenedor__texto {

  display: flex;

  justify-content: center;

  align-items: center;

  width: 300px;

}

  

.contenedor__texto__animacion {

  display: flex;

  height: 19px;

}

  

.barra_escritura {

  width: 3px;

  height: 19px;

  margin-left: 5px;

  background-color: var(--color-bordes);

  transform: rotateZ(10deg);

  animation: barra-animacion 1s ease infinite;

}

  

@keyframes barra-animacion {

  50% { height: 10px; }

}

  

.texto {

  border: 1px solid var(--color-bordes);

  background-color: var(--color-fondo);

  color: var(--color-texto);

  text-align: center;

  width: 350px;

  padding: var(--space-3);

}

  

/* =========================

   Slider

========================= */

/* Contenedor principal del slider */

.contenedor-slider {           /* tamaño fijo */

  height: 300px;

  width: 100%;

  max-width: 800px;

  aspect-ratio: 16 / 9; /* mantiene proporción */

  border: 1px solid var(--color-bordes);

  display: flex;

  align-items: center;

  justify-content: space-between;

  background-color: var(--color-fondo);

  overflow: hidden;          /* evita que las imágenes se salgan */

  border-radius: 8px;

  box-shadow: var(--shadow);

}

  

/* Botones laterales */

.slider-izquierdo,

.slider-derecho {

  width: 40px;               /* ancho fijo para las flechas */

  height: 100%;

  display: flex;

  align-items: center;

  justify-content: center;

  cursor: pointer;

  background-color: rgba(0,0,0,0.3); /* fondo semitransparente */

  transition: background-color 0.3s ease;

}

  

.slider-izquierdo:hover,

.slider-derecho:hover {

  background-color: rgba(0,255,204,0.2);

}

  

/* Pantalla central */

.slider-screen {

  flex: 1;                   /* ocupa todo el espacio restante */

  display: flex;

  align-items: center;

  justify-content: center;

}

  

.slider-screen img {

  width: 100%;

  height: 100%;

  object-fit: cover;          /* la imagen se adapta al contenedor */

  border-radius: 4px;

}

/* =========================

   Layout general

========================= */

.contenedor {

  display: grid;

  grid-template-columns: 2fr 1fr;

  gap: var(--space-6);

  max-width: 1400px;

  margin: auto;

  padding: var(--space-4);

}

  

.contenedor__botones {

  grid-column: 1 / 2;

}

  

.contenedor__producto {

  grid-column: 2 / 3;

}
```

# scripts
```
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
```