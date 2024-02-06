import { Component, EventEmitter, Output } from '@angular/core';
import { PersonajeDBZ } from '../../interfaces/characterlist.interface';

@Component({
  selector: 'app-dbz-form',
  templateUrl: './dbz-form.component.html',
  styleUrl: './dbz-form.component.css'
})
export class DbzFormComponent {


  public personaje: PersonajeDBZ = { nombre: "Juan", poder: 123 }

  @Output()
  public onNewPersonaje : EventEmitter<PersonajeDBZ>= new EventEmitter()


  public enviarForms():void{
    console.log("datos enviados", this.personaje);

    this.onNewPersonaje.emit(this.personaje)

  }

}
