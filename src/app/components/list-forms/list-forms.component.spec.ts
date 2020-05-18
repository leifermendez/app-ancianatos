import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFormsComponent } from './list-forms.component';

describe('ListFormsComponent', () => {
  let component: ListFormsComponent;
  let fixture: ComponentFixture<ListFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
