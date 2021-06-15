import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookSectionComponent } from './book-section/book-section.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
   { path: 'bookSection', component: BookSectionComponent },
   { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
