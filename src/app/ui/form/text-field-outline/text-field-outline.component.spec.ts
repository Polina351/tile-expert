import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextFieldOutlineComponent } from './text-field-outline.component';

describe('TextFieldOutlineComponent', () => {
  let component: TextFieldOutlineComponent;
  let fixture: ComponentFixture<TextFieldOutlineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextFieldOutlineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextFieldOutlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
