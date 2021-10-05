import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { CategoriComponent } from './categori/categori.component';
import { CommonComponent } from './common/common.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'categori',
    component: CategoriComponent,
  },
  {
    path: 'common/:id',
    component: CommonComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
