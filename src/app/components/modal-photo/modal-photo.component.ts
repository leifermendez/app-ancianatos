import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-modal-photo',
  templateUrl: './modal-photo.component.html',
  styleUrls: ['./modal-photo.component.css']
})
export class ModalPhotoComponent implements OnInit {
  public data: any;

  constructor() {
  }

  ngOnInit() {
    // @ts-ignore
    const pointer = document.querySelector('.wrapper-photo').style;
    pointer.setProperty('--images-background', `url(${this.data.large})`);
  }

}
