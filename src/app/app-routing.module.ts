import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserLoginComponent } from './ui/user-login/user-login.component';
import { ItemsListComponent } from './items/items-list/items-list.component';
import { ReadmePageComponent } from './ui/readme-page/readme-page.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component';
<<<<<<< HEAD
import { UserIntComponent } from './user-int/user-int.component';
=======
>>>>>>> 7852f9914fc66f7d3090ca5df9642f2ac7314651

import { AuthGuard } from './core/auth.guard';
import { CoreModule } from './core/core.module';

const routes: Routes = [
<<<<<<< HEAD
  { path: '', component: ReadmePageComponent },
  { path: 'login', component: UserLoginComponent },
  { path: 'items', component: ItemsListComponent, canActivate: [AuthGuard] },
  { path: 'notes', component: NotesListComponent,  canActivate: [AuthGuard] },
  { path: 'user-int', component: UserIntComponent,  canActivate: [AuthGuard] },
=======
  { path: '', component: NotesListComponent, canActivate:[AuthGuard] },
  { path: 'login', component: UserLoginComponent },
  { path: 'items', component: ItemsListComponent, canActivate: [AuthGuard] },
  { path: 'notes', component: NotesListComponent,  canActivate: [AuthGuard] },
>>>>>>> 7852f9914fc66f7d3090ca5df9642f2ac7314651
  // uploads are lazy loaded
  { path: 'uploads', loadChildren: './uploads/shared/upload.module#UploadModule', canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard],
})
export class AppRoutingModule { }
