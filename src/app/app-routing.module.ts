import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MassageComponent } from './massage/massage.component';
import { ServiceComponent } from './service/service.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  { path: '', component: ServiceComponent },
  { path: 'massage', component: MassageComponent },
  { path: 'form', component: FormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
