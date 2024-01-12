import { Routes } from '@angular/router';
import { IndexComponent } from './pages/index/index.component';
import { PortifolioComponent } from './pages/portifolio/portifolio.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  {path:'', component: IndexComponent, pathMatch:"full"},
  {path:'portifolio/:id', component: PortifolioComponent },
  {path:'portfolio', redirectTo: 'portifolio/0' },
  {path:'**', component: NotFoundComponent}
];
