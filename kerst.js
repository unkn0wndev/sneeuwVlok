

class Wens {
   constructor( horizontaal, verticaal, snelheid, kleur ) {
      this._hori  = horizontaal;
      this._vert  = verticaal;
      this._snelh = snelheid;
      this.wens;
   }
   // method maken: creëer een element en plaats deze in de body
   maken() {
      let wens = document.createElement('div');
      wens.innerHTML = codeSVGvlok;
      wens.className  = 'wens';
      wens.style.top  = this._vert + 'px';
      wens.style.left = this._hori + 'px';
      document.body.appendChild(wens);
      this.rijden();
   }

   verplaatsen() {
      this._vert += this._snelh;
      // bijwerken in de DOM
      this.wens.style.top = this._hori + 'px';
   }
   // rijden is een method om continue te verplaatsen
   rijden() {
      let bewegen = requestAnimationFrame( () => {
         this.verplaatsen();
         this.rijden();  // hierdoor wordt de functie continue herhaald
      });
   }
}

// twee instanties van de class Auto maken
let vlokje1 = new Wens(Math.random()*200, Math.random()*500, 4);
vlokje1.maken();
let vlokje2 = new Wens(Math.random()*200, Math.random()*500, 4);
vlokje2.maken();
let vlokje3 = new Wens(Math.random()*200, Math.random()*500, 4);
vlokje3.maken();
