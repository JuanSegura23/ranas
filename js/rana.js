const PASOS_RANA = 50;

rana = {
   x: 0,

   y: 0,

   cuerpoRana: document.querySelector(".rana"),

   alturaRana: document.querySelector(".rana").getBoundingClientRect().height,

   anchoRana: document.querySelector(".rana").getBoundingClientRect().width,

   moverArr: function(){
      this.y - PASOS_RANA > 0 ? this.y -= PASOS_RANA : this.y = 0 ;
      this.cuerpoRana.style.top = this.y +"px";
   },

   moverAbj: function(){
      const largoCharca = document.querySelector(".charca").getBoundingClientRect().height;
      this.y + PASOS_RANA < largoCharca - this.alturaRana? this.y += PASOS_RANA: this.y = largoCharca - this.alturaRana;
      this.cuerpoRana.style.top = this.y +"px";
   },

   moverDer: function(){
      const anchoCharca = document.querySelector(".charca").getBoundingClientRect().width;
      this.x + PASOS_RANA < anchoCharca - this.anchoRana? this.x += PASOS_RANA: this.x = anchoCharca - this.anchoRana;
      this.cuerpoRana.style.left = this.x +"px";
   },

   moverIzq: function(){
      this.x - PASOS_RANA > 0 ? this.x -= PASOS_RANA : this.x = 0 ;
      this.cuerpoRana.style.left = this.x +"px";
   },
}

let botonArr = document.querySelector(".control__btn--arr");
let botonIzq = document.querySelector(".control__btn--izq");
let botonDer = document.querySelector(".control__btn--der");
let botonAbj = document.querySelector(".control__btn--abj");

botonArr.onclick = function(){
   rana.moverArr()
}
botonAbj.onclick = function(){
   rana.moverAbj()
}
botonIzq.onclick = function(){
   rana.moverIzq()
}
botonDer.onclick = function(){
   rana.moverDer()
}
