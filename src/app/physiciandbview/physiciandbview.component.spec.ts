import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhysiciandbviewComponent } from './physiciandbview.component';

describe('PhysiciandbviewComponent', () => {
  let component: PhysiciandbviewComponent;
  let fixture: ComponentFixture<PhysiciandbviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhysiciandbviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhysiciandbviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
