import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ITarefa } from '../../models/tarefa.model';
import { TarefaService } from '../../services/tarefa.service';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  dataAtual: Date = new Date();

  constructor(
    private tarefaService: TarefaService,
    private router: Router
  ) { }

  novaTarefa(): void {
    this.router.navigate(['/tarefa-nova']);
  }

  ngOnInit(): void {
  }
}
