import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayorsInfoComponent } from './payors-info.component';

describe('PayorsInfoComponent', () => {
  let component: PayorsInfoComponent;
  let fixture: ComponentFixture<PayorsInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayorsInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayorsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
