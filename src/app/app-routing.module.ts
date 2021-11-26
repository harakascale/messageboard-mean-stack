import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { PostCreateComponent } from './posts/post-create/post-create.component';
import { PostListComponent } from './posts/post-list/post-list.component';

const routes: Routes = [
  {path:'', component: PostListComponent},
  {path:'create',  component: PostCreateComponent, canActivate: [AuthGuard] },
  {path:'edit/:postId',  component: PostCreateComponent, canActivate: [AuthGuard] },
  // {path: "auth", loadChildren: "auth/auth.module#AuthModule"}
  {path: "auth", loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)} // more modern syntax for lazy laoding
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }