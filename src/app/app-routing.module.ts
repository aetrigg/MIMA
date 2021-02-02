import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthService } from './services/auth.service';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule), data: {title: 'MIMA - Login'}
  },
  {
    path: 'modules-list',
    loadChildren: () => import('./pages/modules-list/modules-list.module').then( m => m.ModulesListPageModule), data: {title: 'MIMA - Modules List'}
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule), data: {title: 'MIMA Login'}
  },
  {
    path: 'create-account',
    loadChildren: () => import('./pages/create-account/create-account.module').then( m => m.CreateAccountPageModule), data: {title: 'MIMA Create Account'}
  },
  {
    path: 'module-one',
    loadChildren: () => import('./pages/module-one/module-one.module').then( m => m.ModuleOnePageModule), data: {title: 'MIMA Moldule 1'}
  },
  {
    path: 'module-two',
    loadChildren: () => import('./pages/module-two/module-two.module').then( m => m.ModuleTwoPageModule), data: {title: 'MIMA Module 2'}
  },
  {
    path: 'module-three',
    loadChildren: () => import('./pages/module-three/module-three.module').then( m => m.ModuleThreePageModule), data: {title: 'MIMA Module 3'}
  },
  {
    path: 'module-four',
    loadChildren: () => import('./pages/module-four/module-four.module').then( m => m.ModuleFourPageModule), data: {title: 'MIMA Module 4'}
  },
  {
    path: 'module-five',
    loadChildren: () => import('./pages/module-five/module-five.module').then( m => m.ModuleFivePageModule), data: {title: 'MIMA Module 5'}
  },
  {
    path: 'module-six',
    loadChildren: () => import('./pages/module-six/module-six.module').then( m => m.ModuleSixPageModule), data: {title: 'MIMA Module 6'}
  },
  {
    path: 'module-seven',
    loadChildren: () => import('./pages/module-seven/module-seven.module').then( m => m.ModuleSevenPageModule), data: {title: 'MIMA Module 7'}
  },
  {
    path: 'module-zero',
    loadChildren: () => import('./pages/module-zero/module-zero.module').then( m => m.ModuleZeroPageModule), data: {title: 'MIMA Module 0'}
  },
  {
    path: 'user-account',
    loadChildren: () => import('./pages/user-account/user-account.module').then( m => m.UserAccountPageModule), canActivate:[AuthService], data: {title: 'MIMA User Account'}
  },
  {
    path: 'uploader',
    loadChildren: () => import('./pages/uploader/uploader.module').then( m => m.UploaderPageModule), canActivate:[AuthService], data: {title: 'MIMA Uploader'}
  },
  {
    path: 'log-post/:id',
    loadChildren: () => import('./pages/log-post/log-post.module').then( m => m.LogPostPageModule), canActivate:[AuthService], data: {title: 'MIMA Log Post'}
  },
  {
    path: 'profile-page',
    loadChildren: () => import('./pages/profile-page/profile-page.module').then( m => m.ProfilePagePageModule), canActivate:[AuthService], data: {title: 'MIMA Profile Page'}
  },
  {
    path: 'admin-home',
    loadChildren: () => import('./pages/admin-home/admin-home.module').then( m => m.AdminHomePageModule), data: {title: 'MIMA Admin Home'}
  },
  {
    path: 'admin-log-page',
    loadChildren: () => import('./pages/admin-log-page/admin-log-page.module').then( m => m.AdminLogPagePageModule), data: {title: 'MIMA Admin Log'}
  },
  {
    path: 'admin-ex',
    loadChildren: () => import('./pages/admin-ex/admin-ex.module').then( m => m.AdminExPageModule), data: {title: 'MIMA Admin Exercises'}
  },
  {
    path: 'admin-users',
    loadChildren: () => import('./pages/admin-users/admin-users.module').then( m => m.AdminUsersPageModule), data: {title: 'MIMA Admin Users'}
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
