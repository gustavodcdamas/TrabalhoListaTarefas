import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ITarefa, createITarefa } from '../../models/tarefa.model';
import { TarefaService } from '../../services/tarefa.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarefa-nova',
  imports: [ CommonModule, FormsModule ],
  templateUrl: './tarefa-nova.component.html',
  styleUrls: ['./tarefa-nova.component.css']
})
export class TarefaNovaComponent implements OnInit {
  tarefa: ITarefa = createITarefa();

  constructor(
    private tarefaService: TarefaService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  salvarTarefa(): void {
    if (!this.tarefa.nome || !this.tarefa.data || !this.tarefa.prioridade || !this.tarefa.categoria) {
      alert('Todos os campos são obrigatórios!');
      return;
    }

    this.tarefaService.adicionarTarefa(this.tarefa);
    this.router.navigate(['/']);
  }

  selecionarCategoria(categoria: string): void {
    this.tarefa.categoria = categoria;
  }

  cancelar(): void {
    this.router.navigate(['/']);
  }
}
