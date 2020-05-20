import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmedComponent } from './confirmed.component';

describe('ConfirmedComponent', () => {
  let component: ConfirmedComponent;
  let fixture: ComponentFixture<ConfirmedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
