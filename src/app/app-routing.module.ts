import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesGuard } from './guard/pages.guard';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    pathMatch: 'full',
    path: '',
    redirectTo: 'login'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [PagesGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
