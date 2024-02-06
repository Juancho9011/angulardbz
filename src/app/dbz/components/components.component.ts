import { Component } from '@angular/core';
import { PersonajeDBZ } from '../interfaces/characterlist.interface';
import { log } from 'console';
import { DBZService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-components',
  templateUrl: './components.component.html',
  styleUrl: './components.component.css'
})
export class ComponentsComponent {

  //private _dataDBZService: DBZService

  constructor(private _dataDBZService: DBZService) {

    //this._dataDBZService = dataDBZService

  }


  get ListPersonajes(): PersonajeDBZ[] {

    return [...this._dataDBZService.characterList]

  }


  onNewPersonaje(PersonajeIn: PersonajeDBZ): void {

    this._dataDBZService.onNewPersonaje(PersonajeIn)

  }


  onDeletePersonaje(PersonajeIn: PersonajeDBZ): void {
    this._dataDBZService.onDeletePersonaje(PersonajeIn)

  }





}
