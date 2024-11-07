import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasModalComponent } from './cuentas-modal.component';

describe('CuentasModalComponent', () => {
  let component: CuentasModalComponent;
  let fixture: ComponentFixture<CuentasModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CuentasModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CuentasModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
