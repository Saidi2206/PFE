import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarreComponent } from './navbarre/navbarre.component';
import { ServiceComponent } from './service/service.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { MassageComponent } from './massage/massage.component';
import { FormComponent } from './form/form.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarreComponent,
    ServiceComponent,
    CatalogueComponent,
    MassageComponent,
    FormComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
