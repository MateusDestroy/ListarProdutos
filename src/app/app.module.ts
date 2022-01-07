import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IngressoComponent } from './ingresso/ingresso.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardComponent } from './card/card.component';
import { InfoProComponent } from './info-pro/info-pro.component';
import { routing } from './app.routing';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IngressoComponent,
    CardComponent,
    InfoProComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})



export class AppModule { }
