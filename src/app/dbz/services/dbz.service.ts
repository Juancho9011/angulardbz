import { Injectable } from '@angular/core';
import { PersonajeDBZ } from '../interfaces/characterlist.interface';

import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})
export class DBZService {

  constructor() { }



  public characterList: PersonajeDBZ[] = [
    {
      nombre: 'Maestro Rochi',
      poder: 9000,
      edad: 35,
      raza: 'Saiyan',
      uuid: uuid()
    }, {
      nombre: 'Gojan',
      poder: 8500,
      edad: 37,
      raza: 'Saiyan',
      uuid: uuid()
    }
  ]

  onNewPersonaje(PersonajeDBZIn: PersonajeDBZ): void {


    PersonajeDBZIn.uuid = uuid()

    const newPersonaje: PersonajeDBZ = {
      ...PersonajeDBZIn,
      uuid: uuid()
    }



    this.characterList.push(newPersonaje)

  }


  onDeletePersonaje(PersonajeDBZ: PersonajeDBZ): void {

    this.characterList.filter((persona, index) => {


      if (persona.uuid == PersonajeDBZ.uuid) {
        this.characterList.splice(index, 1)
      }

    })

  }
}
