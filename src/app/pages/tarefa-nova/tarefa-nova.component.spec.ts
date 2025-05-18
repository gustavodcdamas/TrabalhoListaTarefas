import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarefaNovaComponent } from './tarefa-nova.component';

describe('TarefaNovaComponent', () => {
  let component: TarefaNovaComponent;
  let fixture: ComponentFixture<TarefaNovaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarefaNovaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarefaNovaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
