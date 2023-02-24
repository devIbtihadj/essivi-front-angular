import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientCarteComponent } from './client-carte.component';

describe('ClientCarteComponent', () => {
  let component: ClientCarteComponent;
  let fixture: ComponentFixture<ClientCarteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientCarteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClientCarteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
