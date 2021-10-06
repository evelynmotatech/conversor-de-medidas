import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ConversorComponent } from './conversor/conversor.component';
import { ConversorService } from './conversor/conversor.service';

@NgModule({
  declarations: [
    AppComponent,
    ConversorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ConversorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
