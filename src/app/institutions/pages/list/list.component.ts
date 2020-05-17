import {Component, OnInit} from '@angular/core';
import {faHome, faPlus} from '@fortawesome/free-solid-svg-icons';
import {RestService} from '../../../rest.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  faHome = faHome;
  faPlus = faPlus;
  public data = [];

  constructor(private rest: RestService) {
  }

  ngOnInit() {
    this.load();
  }

  load = () => {
    this.rest.get(`institutions`)
      .subscribe(res => {
          console.log(res.data);
          this.data = res.data.data;
        },
        error => {
        });
  };
}
