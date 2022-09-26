window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };


  //creacion de teclas
  
/* const road = new Image();
road.src = './images/road.png'; */

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const imgFondo = document.createElement("img");
//imgFondo.src ="images/road.png";
imgFondo.setAttribute("src", "images/road.png");
const imgCoche = document.createElement("img");
imgCoche.setAttribute("src", "images/car.png")
let x_coche = (canvas.getAttribute("width")-60)/2;


let frames = 0;
const obstaculos= [];

document.body.addEventListener("keydown", (e)=>{
  if(e.key == "ArrowLeft"){
    //if(x_coche > 0) x_coche -=10; //otra opcion

    x_coche -= 10;
    if(x_coche < 0)  x_coche = 0;
  }else if(e.key == 'ArrowRight'){
     // if(x_coche < (canvas.getAttribute("width") - 60)) x_coche += 10;
    x_coche += 10;
    if(x_coche > (canvas.getAttribute("width") - 60)) x_coche = canvas.getAttribute("width") -60; //otra opcion
  } 
});

function startGame() {
  setInterval(update, 20);
}


function update(){
  frames ++;
  //Limpiar
ctx.clearRect(0, 0, canvas.getAttribute("width"),
canvas.getAttribute("height"));
  //Recalcular
  //posicion obstaculos
  //recorer array de obstaculos y recalcular y
  obstaculos.forEach((obstaculo)=>{
    obstaculo.y += 5;
    //comprobamos si obstaculo ha chocado con el coche
  })

  //if(frames % 200 == 0){}
  if(frames == 100){
    frames = 0;
    // crear obstaculos
    let obstaculo = new Obstaculo();
    obstaculos.push(obstaculo);
  }

  //repintar(
    //fondo
    //ctx.drawImage(imgFondo, 0, 0, 500, 700);
    ctx.drawImage(imgFondo, 0, 0, canvas.getAttribute
    ('width'), canvas.getAttribute('height'));
    ctx.drawImage(imgCoche, x_coche, 550, 60, 110);
      
      //coche
    //obstaculos
  //recocrer array de obstaculos y pintar cada uno.
  obstaculos.forEach(obstaculo => {
    /* ctx.fillRect(obstaculo.x, obstaculo.y,
    obstaculo.width, obstaculo.height);*/
    obstaculo.pintar();
  })

};

class Obstaculo{
  constructor(){
    let width_max_obstaculo = canvas.getAttribute("width")-150;

    this.width = Math.floor(Math.random() * width_max_obstaculo);
    this.height = 30;
    this.x = Math.floor(Math.random()* (canvas.getAttribute("width") - this.whidth));
    this.y = - 30;
  }
  pintar(){
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

/* Equivalente a :
const botonInicio = document.getElementById('start-button');
botonInicio.addEventListener("click", ()=>{
  startGame();
}); */





/* const myCanvas = {
  canvas: null,
  contexto: null
  
} */

/* start: () => {
  this.canvas = document.getElementById("myCanvas")
  this.contexto = this.canvas.getContext("2d");
  //let imag = document.getElementsByTagName("road.png");*/
} ;
