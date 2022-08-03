import { AuthGuard } from './auth/guards/auth.guard';
import { AnimationsComponent } from './animations/animations.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '404',
    component: ErrorPageComponent
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'heroes',
    loadChildren: () => import('./heroes/heroes.module').then(m => m.HeroesModule),
    // canLoad: [AuthGuard],
    // canActivate: [AuthGuard]
  },
  {
    path: 'animation',
    component: AnimationsComponent
  },
  {
    path: '**',
    // component: ErrorPageComponent
    redirectTo: '404'
  }
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
