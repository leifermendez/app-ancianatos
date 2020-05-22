import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-argentina';

  public constructor(private router: Router) {
    document.addEventListener('backbutton', () => {
      console.log('Back BTN')
      this.router.navigateByUrl('/');
    });

  }

}
