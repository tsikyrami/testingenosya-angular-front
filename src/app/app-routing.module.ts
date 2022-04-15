import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDetailComponent } from './components/users/user-detail/user-detail.component';
import { UserListComponent } from './components/users/user-list/user-list.component';

const routes: Routes = [
  {
    path: 'symfony-angular',
    children: [
      {
        path: 'user',
        children: [
          {
            path: '',
            component: UserListComponent
          },
          {
            path: ':uuid',
            component: UserDetailComponent
          }
        ]
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/symfony-angular/user',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
