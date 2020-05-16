import {Component, OnInit} from '@angular/core';
import {AnimationOptions} from 'ngx-lottie';
import {AnimationItem} from 'lottie-web';

@Component({
  selector: 'app-page404page',
  templateUrl: './page404page.component.html',
  styleUrls: ['./page404page.component.css']
})
export class Page404pageComponent implements OnInit {
  options: AnimationOptions = {
    path: '/assets/images/404.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
