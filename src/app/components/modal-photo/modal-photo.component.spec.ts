import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalPhotoComponent } from './modal-photo.component';

describe('ModalPhotoComponent', () => {
  let component: ModalPhotoComponent;
  let fixture: ComponentFixture<ModalPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
