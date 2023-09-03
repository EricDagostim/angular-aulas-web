import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormaDePagamentoEditarComponent } from './forma-de-pagamento-editar.component';

describe('FormaDePagamentoEditarComponent', () => {
  let component: FormaDePagamentoEditarComponent;
  let fixture: ComponentFixture<FormaDePagamentoEditarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormaDePagamentoEditarComponent]
    });
    fixture = TestBed.createComponent(FormaDePagamentoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
