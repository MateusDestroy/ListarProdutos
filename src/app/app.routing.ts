import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { CardComponent } from './card/card.component';
import { AppComponent } from './app.component';
import { InfoProComponent } from './info-pro/info-pro.component';








const routes: Routes = [
  {path: '/card', component: CardComponent},
  {path: '/detalhes', component: InfoProComponent},
  {path: '', component: AppComponent }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(routes);

