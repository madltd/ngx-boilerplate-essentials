import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { VisitorComponent } from './layouts/visitor/visitor.component';
import { UserComponent } from './layouts/user/user.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: VisitorComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'user',
    component: UserComponent,
    children: [
      {
        path: '',
        component: DashboardComponent,
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
