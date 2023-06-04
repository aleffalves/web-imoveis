import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalImovelDetalhesComponent } from './modal-imovel-detalhes.component';

describe('ModalImovelDetalhesComponent', () => {
  let component: ModalImovelDetalhesComponent;
  let fixture: ComponentFixture<ModalImovelDetalhesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModalImovelDetalhesComponent]
    });
    fixture = TestBed.createComponent(ModalImovelDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
