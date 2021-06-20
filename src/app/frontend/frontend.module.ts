import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FrontendComponent } from './pages/frontend/frontend.component';
import { RouterModule } from '@angular/router';
import { frontEndRoutes } from './frontend.routes';



@NgModule({
  declarations: [
    FrontendComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(frontEndRoutes)
  ]
})
export class FrontendModule { }
