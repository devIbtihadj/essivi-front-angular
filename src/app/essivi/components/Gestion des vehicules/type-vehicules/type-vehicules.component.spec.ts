import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeVehiculesComponent } from './type-vehicules.component';

describe('TypeVehiculesComponent', () => {
  let component: TypeVehiculesComponent;
  let fixture: ComponentFixture<TypeVehiculesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeVehiculesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TypeVehiculesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
