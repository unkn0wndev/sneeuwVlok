

class Wens {
   constructor( horizontaal, verticaal, snelheid, kleur ) {
      this._hori  = horizontaal;
      this._vert  = verticaal;
      this._snelh = snelheid;
      this._wens;
   }


   maken() {
      this._wens = document.createElement('div');
      this._wens.innerHTML = codeSVGvlok;
      this._wens.className  = 'wens';
      this._wens.style.top  = this._vert + 'px';
      this._wens.style.left = this._hori + 'px';
      document.body.appendChild(this._wens);
      this.rijden();
   }

   verplaatsen() {
      this._hori += this._snelh;
      // bijwerken in de DOM
      this._wens.style.left = this._hori + 'px';
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
let vlokje1 = new Wens(Math.random()*200, Math.random()*500);
vlokje1.maken();
let vlokje2 = new Wens(Math.random()*200, Math.random()*500);
vlokje2.maken();
let vlokje3 = new Wens(Math.random()*200, Math.random()*500);
vlokje3.maken();
