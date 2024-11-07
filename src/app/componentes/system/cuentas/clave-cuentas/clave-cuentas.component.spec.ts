import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaveCuentasComponent } from './clave-cuentas.component';

describe('ClaveCuentasComponent', () => {
  let component: ClaveCuentasComponent;
  let fixture: ComponentFixture<ClaveCuentasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClaveCuentasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClaveCuentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
