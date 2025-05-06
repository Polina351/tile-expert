import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsIconComponent } from './contacts-icon.component';

describe('ContactsIconComponent', () => {
  let component: ContactsIconComponent;
  let fixture: ComponentFixture<ContactsIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactsIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
