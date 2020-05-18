import {Component, Input, OnInit} from '@angular/core';
import {faAngleRight, faTasks} from '@fortawesome/free-solid-svg-icons';
import {RestService} from '../../rest.service';

@Component({
  selector: 'app-list-forms',
  templateUrl: './list-forms.component.html',
  styleUrls: ['./list-forms.component.css']
})
export class ListFormsComponent implements OnInit {
  @Input() target: any = null;
  faTasks = faTasks;
  public data: any;
  public loading = false;

  constructor(private rest: RestService) {
  }

  ngOnInit() {
    this.load('institutions');
  }

  load = (source = '') => {
    this.loading = true;
    this.rest.get(`forms?filters=source,=,${source}`).subscribe(res => {
      this.data = res.data.data;
      this.loading = false;
    }, error => {
      this.loading = false;
    });
  };
}
