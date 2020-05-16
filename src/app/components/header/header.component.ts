import {Component, Input, OnInit} from '@angular/core';
import {faUser} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() label: any = null;
  @Input() icon: any = null;

  constructor() {
  }

  ngOnInit() {
  }

}
