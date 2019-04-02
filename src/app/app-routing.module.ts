import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import {LibsensorpyComponent } from './blog/libsensorpy/libsensorpy.component';
import {InspiracaoComponent } from './blog/inspiracao/inspiracao.component';
import {DoseComponent } from './blog/dose/dose.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "blog",
    component: BlogComponent,
  },
  {
    path: "blog/libsensorpy",
    component: LibsensorpyComponent
  },
  {
    path: "blog/inspiracao",
    component: InspiracaoComponent
  },
  {
    path: "blog/dose",
    component: DoseComponent
  },
  {
    path: "portfolio",
    component: PortfolioComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
