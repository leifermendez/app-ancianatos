import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-argentina';

  public constructor() {
    document.addEventListener('backbutton', () => {
     return false;
    });
  }

}
