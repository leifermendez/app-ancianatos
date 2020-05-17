import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {faHome, faTrash, faDownload} from '@fortawesome/free-solid-svg-icons';
import {RestService} from '../../../rest.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ShareService} from '../../../share.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public form: FormGroup;
  faHome = faHome;
  faDownload = faDownload;
  faTrash = faTrash;
  public loading = false;
  public itemsAsObjects: any;
  public id: any = false;

  constructor(private formBuilder: FormBuilder,
              private rest: RestService,
              private router: Router,
              private shared: ShareService,
              private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.id;
      this.load();
    });

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      description: [''],
      extra: ['']
    });
  }

  onSubmit = () => {
    console.log(this.itemsAsObjects);
    this.loading = true;
    this.form.patchValue({extra: this.itemsAsObjects});
    this.rest[(this.id) ? 'put' : 'post'](`institutions${(this.id) ? `/${this.id}` : ''}`,
      this.form.value)
      .subscribe(res => {
        this.loading = false;
        this.router.navigate(['/', 'institutions']);
      }, error => {
        this.loading = false;
      });
  };

  load = (report = false) => {
    this.rest.get(`institutions/${this.id}${(report) ? '?export=pdf' : ''}`).subscribe(res => {
      this.itemsAsObjects = this.shared.wrapperDataExtra(res.data);
      this.form.patchValue(res.data);
    }, error => {
    });
  };

  trash = () => {
    this.shared.confirm('¿Seguro?', '', 'OK').then(
      res => {
        this.rest.delete(`institutions/${this.id}`)
          .subscribe(() => this.router.navigate(['/', 'institutions']),
            error => {
            });
      }
    );
  };

  report = () => {
    this.shared.confirm('Reporte', '', 'OK').then(
      res => {
        this.rest.get(`institutions/${this.id}?export=pdf`).subscribe(res => {
          window.open(res.data.url);
        }, error => {
        });
      }
    );
  };
}
