import { Component } from '@angular/core';

interface ITarefa {
  id: string;
  nome: string;
  data: string;
  prioridade: string;
  categoria: string;
  concluida?: boolean;
  pendente?: boolean;
};

function createITarefa() {
  return {
    id: '',
    nome: '',
    data: '',
    categoria: '',
    prioridade: '',
    concluida: false,
    pendente: true
  };
}

export { createITarefa };

export  type{ ITarefa };
