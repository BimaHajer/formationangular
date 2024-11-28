import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserAddComponent } from './user-add/user-add.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserListComponent } from './user-list/user-list.component';
import { ClarityModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserAddComponent,
    UserUpdateComponent,
    UserDeleteComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,ClarityModule,FormsModule,ReactiveFormsModule
  ]
})
export class UserModule { }
