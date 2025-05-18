import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { TarefaAtualizaComponent } from './pages/tarefa-atualiza/tarefa-atualiza.component';
import { TarefaNovaComponent } from './pages/tarefa-nova/tarefa-nova.component';
import { TarefaService } from './services/tarefa.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, TarefaAtualizaComponent, TarefaNovaComponent, AsyncPipe, HomeComponent,CommonModule ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'aai-front-end';
}
