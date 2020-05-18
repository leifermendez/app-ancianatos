import {Component} from '@angular/core';
import {FieldType} from '@ngx-formly/core';

@Component({
  selector: 'app-formly-field-input',
  template: `
    <div class="form-group">
      <label *ngIf="field?.templateOptions?.label && (field?.templateOptions?.label!=='null')"
             for="form_name">{{field?.templateOptions?.label}}</label>
      <input type="text" [formControl]="formControl" [formlyAttributes]="field" class="form-control">
      <small class="form-text text-muted">{{field?.templateOptions?.placeholder}}</small>
    </div>
  `,
})
// tslint:disable-next-line:component-class-suffix
export class FormlyFieldInput extends FieldType {
}
