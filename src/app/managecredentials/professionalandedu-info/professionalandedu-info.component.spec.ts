import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalandeduInfoComponent } from './professionalandedu-info.component';

describe('ProfessionalandeduInfoComponent', () => {
  let component: ProfessionalandeduInfoComponent;
  let fixture: ComponentFixture<ProfessionalandeduInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessionalandeduInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalandeduInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
