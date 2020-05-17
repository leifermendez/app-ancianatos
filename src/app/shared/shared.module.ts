import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoadingButtonDirective} from '../loading-button.directive';
import {LoadingBlockComponent} from '../components/loading-block/loading-block.component';


@NgModule({
  declarations: [LoadingButtonDirective, LoadingBlockComponent],
  exports: [
    LoadingBlockComponent,
    LoadingButtonDirective
  ],
  imports: [
    CommonModule
  ], entryComponents: [LoadingBlockComponent]
})
export class SharedModule {
}
