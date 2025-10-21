import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { HomeComponent } from './components/home/home.component'; // standalone

@NgModule({
  declarations: [
    AppComponent // uniquement AppComponent ici
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HomeComponent // HomeComponent est standalone, on l’importe ici
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
