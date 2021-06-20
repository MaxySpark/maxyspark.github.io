import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackendComponent } from './pages/backend/backend.component';
import { RouterModule } from '@angular/router';
import { backEndRoutes } from './backend.routes';
import { JsonWrapperComponent } from './components/json-wrapper/json-wrapper.component';
import { CodeEditorModule } from '@ngstack/code-editor';
import { UrlAccordionComponent } from './components/url-accordion/url-accordion.component';
import { SpinnerComponent } from './components/spinner/spinner.component';



@NgModule({
  declarations: [
    BackendComponent,
    JsonWrapperComponent,
    UrlAccordionComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(backEndRoutes),
    CodeEditorModule.forChild()
  ]
})
export class BackendModule { }
