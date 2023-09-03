import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaDePagamentoAdicionarComponent } from './forma-de-pagamento-adicionar.component';

describe('FormaDePagamentoAdicionarComponent', () => {
  let component: FormaDePagamentoAdicionarComponent;
  let fixture: ComponentFixture<FormaDePagamentoAdicionarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormaDePagamentoAdicionarComponent]
    });
    fixture = TestBed.createComponent(FormaDePagamentoAdicionarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
