import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TarefaNovaComponent } from './pages/tarefa-nova/tarefa-nova.component';
import { TarefaAtualizaComponent } from './pages/tarefa-atualiza/tarefa-atualiza.component';

export const routes: Routes = [
  { path: 'tarefa-nova', component: TarefaNovaComponent },
  { path: 'tarefa-atualiza/:id', component: TarefaAtualizaComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
