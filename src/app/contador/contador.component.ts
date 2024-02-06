import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'contador-component',
  template: `<h1>Hola soy el contadorff {{contador}}</h1>
  <button (click)="incrementar()">+1</button>
  <button (click)="reset()">Reset</button>
  <button (click)="disminuir()">-1</button>
  `
})

export class ContadorComponent implements OnInit {
  constructor() { }

  public contador: number = 0


  ngOnInit() { }

  incrementar(): void {
    console.log('Se ha pulsado en +');
    this.contador++
  }

  disminuir(): void {
    console.log('Se ha pulsado en -')
    this.contador--
  }

  reset(): void {
    console.log("Se ha pulsado en Reset");
    this.contador = 0
  }

}
