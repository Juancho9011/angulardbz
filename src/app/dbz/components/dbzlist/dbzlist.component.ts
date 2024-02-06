import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PersonajeDBZ } from '../../interfaces/characterlist.interface.js'

@Component({
  selector: 'app-dbzlist',
  templateUrl: './dbzlist.component.html',
  styleUrl: './dbzlist.component.css'
})
export class DbzlistComponent {

  @Output()
  public onDeletePersonaje : EventEmitter<PersonajeDBZ>= new EventEmitter()


  @Input()
  public characterList: PersonajeDBZ[] = [
    {
      nombre: 'Goku',
      poder: 9000,
      edad: 35,
      raza: 'Saiyan'
    }, {
      nombre: 'Vegeta',
      poder: 8500,
      edad: 37,
      raza: 'Saiyan'
    }
  ]


  onDeletePersonajeMethod(personaje: PersonajeDBZ): void {

    this.onDeletePersonaje.emit(personaje)

  }

}
