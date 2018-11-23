import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpencessComponent } from './add-expencess.component';

describe('AddExpencessComponent', () => {
  let component: AddExpencessComponent;
  let fixture: ComponentFixture<AddExpencessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExpencessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExpencessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
