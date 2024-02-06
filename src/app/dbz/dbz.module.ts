import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ComponentsComponent } from './components/components.component';
import { DbzlistComponent } from './components/dbzlist/dbzlist.component';
import { DbzFormComponent } from './components/dbz-form/dbz-form.component';



@NgModule({
  declarations: [
    ComponentsComponent,
    DbzlistComponent,
    DbzFormComponent,
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    ComponentsComponent,

  ]
})
export class DbzModule { }
