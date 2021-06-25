import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxsModule } from '@ngxs/store';
import { BASE_PATH } from 'openapi/generated-clients/task/0.0.1/variables';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('@create-task/task-form').then((m) => m.TaskFormModule),
  },
  {
    path: 'view-task',
    loadChildren: () =>
      import('@create-task/view-task').then((m) => m.ViewTaskModule),
  },
];
@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [
    BrowserModule,
    NgxsModule.forRoot([]),
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(appRoutes, {
      initialNavigation: 'enabled',
      useHash: false,
      relativeLinkResolution: 'legacy',
    }),
  ],
  providers: [{ provide: BASE_PATH, useValue: 'api' }],
  bootstrap: [AppComponent],
})
export class AppModule { }
