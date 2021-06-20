import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './ui/layout/layout.component';
import { UiModule } from './ui/ui.module';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () => import('./backend/backend.module').then(m => m.BackendModule)
    // loadChildren: () => import('./frontend/frontend.module').then(m => m.FrontendModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    UiModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
