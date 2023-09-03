import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaDePagamentoListarComponent } from './forma-de-pagamento-listar.component';

describe('FormaDePagamentoListarComponent', () => {
  let component: FormaDePagamentoListarComponent;
  let fixture: ComponentFixture<FormaDePagamentoListarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormaDePagamentoListarComponent]
    });
    fixture = TestBed.createComponent(FormaDePagamentoListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
