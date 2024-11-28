import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { UserUpdateComponent } from './user-update/user-update.component';
import { UserAddComponent } from './user-add/user-add.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path: 'user', component: UserListComponent },
  { path: 'user/add', component: UserAddComponent }, 
  { path: 'user/update/:id', component: UserUpdateComponent }, 
  { path: 'user/delete/:id', component: UserDeleteComponent }, 
  { path: '', redirectTo: '/user', pathMatch: 'full' }, 
  { path: '**', redirectTo: '/user' } 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
