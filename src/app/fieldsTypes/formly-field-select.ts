import {Component} from '@angular/core';
import {FieldType} from '@ngx-formly/core';

@Component({
  selector: 'app-formly-field-select',
  template: `
    <div class="form-group">
      <label *ngIf="field?.templateOptions?.label && (field?.templateOptions?.label!=='null')"
             for="form_name">{{field?.templateOptions?.label}}</label>
      <select class="form-control" [formControl]="formControl" id="exampleFormControlSelect2">
        <option [selected]="option?.select === 'true'" *ngFor="let option of field?.templateOptions?.options"
                [value]="option?.value">{{option?.label}}</option>
      </select>
      <small class="form-text text-muted">{{field?.templateOptions?.placeholder}}</small>
    </div>
  `,
})
// tslint:disable-next-line:component-class-suffix
export class FormlyFieldSelect extends FieldType {
}
