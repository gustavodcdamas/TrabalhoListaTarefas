import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITarefa } from '../../models/tarefa.model';
import { TarefaService } from '../../services/tarefa.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  tarefasPendentes: Array<ITarefa> = [];
  tarefasConcluidas: Array<ITarefa> = [];

  constructor(
    private tarefaService: TarefaService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.carregarTarefas();
  }

  carregarTarefas(): void {
    this.tarefasPendentes = this.tarefaService.listarTarefasPendentes();
    this.tarefasConcluidas = this.tarefaService.listarTarefasConcluidas();
  }

  novaTarefa(): void {
    this.router.navigate(['/tarefa-nova']);
  }

  editarTarefa(id: string): void {
    this.router.navigate(['/tarefa-atualiza', id]);
  }

  excluirTarefa(id: string): void {
    if (confirm('Tem certeza que deseja excluir esta tarefa?')) {
      this.tarefaService.excluirTarefa(id);
      this.carregarTarefas();
    }
  }

  marcarComoConcluida(id: string): void {
    this.tarefaService.marcarComoConcluida(id);
    this.carregarTarefas();
  }
}
