import {Component, HostListener, OnInit} from '@angular/core';
import {RestService} from '../../../rest.service';
import {ShareService} from '../../../share.service';
import {faUser, faUserNurse, faPlus, faDownload} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  faUser = faUser;
  faDownload = faDownload;
  faPlus = faPlus;
  faUserNurse = faUserNurse;
  public data = [];
  public loading = false;
  public page: any = 1;
  public limit = 9;
  public src = '';
  private actualPage: null;

  @HostListener('window:scroll', [])
  onScroll(): void {
    // tslint:disable-next-line:radix
    if (this.roundInnerHeight(window.innerHeight, window.scrollY) > parseInt(String(document.body.offsetHeight))) {
      this.load();
    }
  }

  private roundInnerHeight = (num, scroll, off = .02) => {
    // tslint:disable-next-line:radix
    return (parseInt(String(num + scroll)) + parseInt(String(num + scroll)) * off);
  };

  constructor(private rest: RestService, private shared: ShareService) {
  }

  ngOnInit() {
    this.load();
  }

  report = () => {
    this.shared.confirm('Reporte', '', 'OK').then(
      res => {
        this.rest.get(`staff?export=pdf`).subscribe(res => {
          window.open(res.data.file);
        }, error => {
        });
      }
    );
  };


  search = (q: string) => {
    this.data = [];
    if (q.length > 2) {
      this.page = 1;
      this.actualPage = null;
      this.load([`&src=${q}`]);
    } else {
      this.actualPage = null;
      this.page = 1;
      this.load();
    }
  };

  load = (queries: any = []) => {
    let queryParams = ['staff',
      `?limit=${this.limit}`];
    if ((this.page) && (this.actualPage !== this.page) && !this.loading) {
      queryParams = [
        `staff?`,
        `limit=${this.limit}&page=${this.page}`,
        `${queries.join('')}`
      ];

      this.loading = true;
      this.rest.get(queryParams.join(''))
        .subscribe(data => this.parseDate(data.data.data, data.data.next_page_url, data.data.from),
          error => {
            this.loading = false;
          });
    }
  };

  parseDate = (data = [], nextPage, page) => {
    this.actualPage = page;
    this.loading = false;
    this.page = this.shared.parsePageUrl(nextPage);
    data.map(a => this.data.push(a));
  };


}
