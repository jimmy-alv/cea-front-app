import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './guards/auth/auth.guard';
import { MainLayoutComponent } from './modules/shared/layouts/main-layout/main-layout.component';
import { siteGuard } from './guards/site/site.guard';

const routes: Routes = [
  {
    path: 'home',
    canActivate: [siteGuard], 
    component: MainLayoutComponent,
    loadChildren: () => import('./modules/dashboard/dashboard.module').then(m => m.DashboardModule),
    pathMatch: 'prefix'
  },
  {
    path: 'filling',
    component: MainLayoutComponent,
    loadChildren: () => import('./modules/filling/filling.module').then(m => m.FillingModule)
  },
  {
    path: 'lab', 
    component: MainLayoutComponent, 
    loadChildren: () => import('./modules/lab/lab.module').then(m => m.LabModule)
  },
  {
    path: 'users',
    canActivate: [siteGuard], 
    component: MainLayoutComponent,
    loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'auth',
    canActivate: [authGuard],
    loadChildren: () => import('./modules/auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
