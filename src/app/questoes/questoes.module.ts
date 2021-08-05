import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestoesRoutingModule } from './questoes-routing.module';
import { ListaQuestoesComponent } from './lista-questoes/lista-questoes.component';


@NgModule({
  declarations: [
    ListaQuestoesComponent
  ],
  imports: [
    CommonModule,
    QuestoesRoutingModule
  ]
})
export class QuestoesModule { }
