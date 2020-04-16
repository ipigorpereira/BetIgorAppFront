import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JogosBetfairComponent } from './jogos-betfair/jogos-betfair.component';
import { JogoService } from './services/Jogo.service';

@NgModule({
  declarations: [
    AppComponent,
    JogosBetfairComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [JogoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
