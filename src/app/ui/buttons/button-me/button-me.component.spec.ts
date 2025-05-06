import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonMeComponent } from './button-me.component';

describe('ButtonMeComponent', () => {
  let component: ButtonMeComponent;
  let fixture: ComponentFixture<ButtonMeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonMeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
