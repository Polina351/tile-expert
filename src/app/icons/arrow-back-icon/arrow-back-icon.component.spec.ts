import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowBackIconComponent } from './arrow-back-icon.component';

describe('ArrowBackIconComponent', () => {
  let component: ArrowBackIconComponent;
  let fixture: ComponentFixture<ArrowBackIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrowBackIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrowBackIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
