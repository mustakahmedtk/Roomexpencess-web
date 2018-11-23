import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddroomieComponent } from './addroomie.component';

describe('AddroomieComponent', () => {
  let component: AddroomieComponent;
  let fixture: ComponentFixture<AddroomieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddroomieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddroomieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
