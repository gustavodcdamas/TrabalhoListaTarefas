import { Component } from '@angular/core';

interface ITarefa {
  id: string;
  nome: string;
  data: string;
  prioridade: string;
  categoria: string;
  concluida?: boolean;
};

function createITarefa() {
  return {
    id: '',
    nome: '',
    data: '',
    categoria: '',
    prioridade: '',
    concluida: false
  };
}

export { createITarefa };

export  type{ ITarefa };
