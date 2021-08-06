import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MensagemComponent } from './mensagem.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MensagemComponent],
  imports: [CommonModule,
    FormsModule],
  exports: [MensagemComponent],
})
export class MensagemModule { }
