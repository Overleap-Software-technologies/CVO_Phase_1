import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalMalpracticeComponent } from './medical-malpractice.component';

describe('MedicalMalpracticeComponent', () => {
  let component: MedicalMalpracticeComponent;
  let fixture: ComponentFixture<MedicalMalpracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalMalpracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalMalpracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
