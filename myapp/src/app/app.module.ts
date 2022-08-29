import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HobbyComponent } from './components/hobby/hobby.component';
import { AddhobbyComponent } from './components/addhobby/addhobby.component';
import { FavComponent } from './components/fav/fav.component';
import { MypipesPipe } from './pipes/mypipes.pipe';
import { NumberpipeComponent } from './numberpipe/numberpipe.component';
import { NumberPipe } from './pipes/number.pipe';
import { MydirDirectiveDirective } from './directives/mydir-directive.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HobbyComponent,
    AddhobbyComponent,
    FavComponent,
    MypipesPipe,
    NumberpipeComponent,
    NumberPipe,
    MydirDirectiveDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
