import { Injectable } from '@angular/core';
import { ITarefa, createITarefa } from '../models/tarefa.model';

@Injectable({
  providedIn: 'root'
})

export class TarefaService {
  private tarefas: Array<ITarefa> = [];

  constructor() {
    // Inicializar com algumas tarefas de exemplo
    this.tarefas = [
      { id: '1', nome: 'Comprar mantimentos', data: '2023-12-25', prioridade: 'Alta', categoria: 'doméstico', concluida: false },
      { id: '2', nome: 'Reunião com equipe', data: '2023-12-20', prioridade: 'Média', categoria: 'trabalho', concluida: false },
      { id: '3', nome: 'Academia', data: '2023-12-18', prioridade: 'Baixa', categoria: 'pessoal', concluida: true }
    ];
  }

  listarTarefas(): Array<ITarefa> {
    return this.tarefas;
  }

  listarTarefasPendentes(): Array<ITarefa> {
    return this.tarefas.filter(tarefa => !tarefa.concluida);
  }

  listarTarefasConcluidas(): Array<ITarefa> {
    return this.tarefas.filter(tarefa => tarefa.concluida);
  }

  obterTarefa(id: string): ITarefa {
    const tarefa = this.tarefas.find(t => t.id === id);
    return tarefa ? { ...tarefa } : createITarefa();
  }

  adicionarTarefa(tarefa: ITarefa): void {
    tarefa.id = Date.now().toString();
    tarefa.concluida = false;
    this.tarefas.push({ ...tarefa });
  }

  atualizarTarefa(tarefa: ITarefa): void {
    const index = this.tarefas.findIndex(t => t.id === tarefa.id);
    if (index !== -1) {
      this.tarefas[index] = { ...tarefa };
    }
  }

  excluirTarefa(id: string): void {
    this.tarefas = this.tarefas.filter(tarefa => tarefa.id !== id);
  }

  marcarComoConcluida(id: string): void {
    const index = this.tarefas.findIndex(t => t.id === id);
    if (index !== -1) {
      this.tarefas[index].concluida = true;
      this.tarefas[index].pendente = false;
    }
  }

  pendenteTarefa(id: string): void {
    const index = this.tarefas.findIndex(t => t.id === id);
    if (index !== -1) {
      this.tarefas[index].concluida = false;
      this.tarefas[index].pendente = true;
    }
  }
}
