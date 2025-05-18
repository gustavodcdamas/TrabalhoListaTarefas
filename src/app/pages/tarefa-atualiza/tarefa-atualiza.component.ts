import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ITarefa, createITarefa } from '../../models/tarefa.model';
import { TarefaService } from '../../services/tarefa.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarefa-atualiza',
  imports: [ CommonModule, FormsModule ],
  templateUrl: './tarefa-atualiza.component.html',
  styleUrls: ['./tarefa-atualiza.component.css']
})
export class TarefaAtualizaComponent implements OnInit {
  tarefa: ITarefa = createITarefa();

  constructor(
    private tarefaService: TarefaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  dataAtual: Date = new Date();

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.tarefa = this.tarefaService.obterTarefa(id);
    }
  }

  atualizarTarefa(): void {
    if (!this.tarefa.nome || !this.tarefa.data || !this.tarefa.prioridade || !this.tarefa.categoria) {
      alert('Todos os campos são obrigatórios!');
      return;
    }

    this.tarefaService.atualizarTarefa(this.tarefa);
    this.router.navigate(['/']);
  }

  selecionarCategoria(categoria: string): void {
    this.tarefa.categoria = categoria;
  }

  cancelar(): void {
    this.router.navigate(['/']);
  }
}
