import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayListComponent } from './display/display-list.component';
import { DisplayCardComponent } from './display/display-card.component';
import { AddItemComponent } from './add-item/add-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DisplayListComponent, DisplayCardComponent, AddItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ModalModule.forRoot(),
  ],
  exports: [AddItemComponent, DisplayListComponent, DisplayCardComponent],
})
export class ItemsModule {}
