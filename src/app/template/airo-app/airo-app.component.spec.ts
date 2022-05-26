import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiroAppComponent } from './airo-app.component';

describe('AiroAppComponent', () => {
  let component: AiroAppComponent;
  let fixture: ComponentFixture<AiroAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AiroAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AiroAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
