import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoasComponent } from './pessoas/pessoas.component';
import { InicioComponent } from './inicio/inicio.component';
import { HistoriaComponent } from './historia/historia.component';
import { CasaComponent } from './casa/casa.component';
import { ContatoComponent } from './contato/contato.component';
import { VagasComponent } from './vagas/vagas.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule }    from '@angular/platform-browser';
import { RouterModule } from '@angular/router';





@NgModule({
  declarations: [PessoasComponent, InicioComponent, HistoriaComponent, CasaComponent, ContatoComponent, VagasComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    BrowserModule
  ]
})
export class PaginasModule { }
