import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminandbviewComponent } from './adminandbview.component';

describe('AdminandbviewComponent', () => {
  let component: AdminandbviewComponent;
  let fixture: ComponentFixture<AdminandbviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminandbviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminandbviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
