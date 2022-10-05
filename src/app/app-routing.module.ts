import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListUserComponent } from './list-user/list-user.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'index', redirectTo: 'home' },
  { path: 'products', component: ListProductComponent },
  { path: 'users', component: ListUserComponent },
  {
    path: 'contact',
    component: ContactComponent,
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(ROUTES)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
