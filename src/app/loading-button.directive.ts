import {Directive, ElementRef, Input} from '@angular/core';

@Directive({
  selector: '[appLoadingButton]'
})
export class LoadingButtonDirective {

  @Input('appLoadingButton') loading: any;
  @Input() label: string;
  @Input() dis: any = false;
  originalInnerText: string;

  constructor(private el: ElementRef) {
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    // Save the original button text so I can restore it when waiting ends
    this.originalInnerText = this.el.nativeElement.innerHTML;
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnChanges() {
    if (this.loading) {
      this.el.nativeElement.innerHTML = `<span><img src="./assets/images/loading.svg" width="20px" height="20px" alt="">${this.label}</span>`;
    } else {
      if (this.el.nativeElement.innerHTML === `<span><img src="./assets/images/loading.svg" width="20px" height="20px" alt="">${this.label}</span>`) {
        this.el.nativeElement.innerHTML = this.originalInnerText;
      }
    }
    this.el.nativeElement.disabled = (this.loading || this.dis);
  }


}
