import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaAtualizaComponent } from './tarefa-atualiza.component';

describe('TarefaAtualizaComponent', () => {
  let component: TarefaAtualizaComponent;
  let fixture: ComponentFixture<TarefaAtualizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarefaAtualizaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarefaAtualizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
