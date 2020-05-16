import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Page404pageComponent } from './page404page.component';

describe('Page404pageComponent', () => {
  let component: Page404pageComponent;
  let fixture: ComponentFixture<Page404pageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Page404pageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Page404pageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
