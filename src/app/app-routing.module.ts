import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PessoasComponent } from './paginas/pessoas/pessoas.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ContatoComponent } from './paginas/contato/contato.component';
import { CasaComponent } from './paginas/casa/casa.component';
import { HistoriaComponent } from './paginas/historia/historia.component';
import { VagasComponent } from './paginas/vagas/vagas.component';


const routes: Routes = [
  {path: '', component: VagasComponent },
  {path: 'vagas', component: VagasComponent },
  {path: 'historia', component: HistoriaComponent },
  {path: 'casa', component: CasaComponent },
  {path: 'contato', component: ContatoComponent },
  {path: 'pessoas', component: PessoasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
