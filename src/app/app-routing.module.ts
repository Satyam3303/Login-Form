import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';

const routes: Routes = [
  {
    path : '',
    component : AppComponent,
    children : [
      {
        path : '',
        component : LoginformComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
