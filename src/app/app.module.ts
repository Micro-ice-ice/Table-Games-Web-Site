import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {GameCardComponent} from "./components/game-card/game-card.component";
import { GameCardContainerComponent } from './components/game-card-container/game-card-container.component';
import { HomeRouteComponent } from './routes/home-route/home-route.component';
import { GamesRouteComponent } from './routes/games-route/games-route.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GameRouteComponent } from './routes/game-route/game-route.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import { ToolbarComponent } from './components/UI/toolbar/toolbar.component';

@NgModule({
  declarations: [
    AppComponent,
    GameCardComponent,
    GameCardContainerComponent,
    HomeRouteComponent,
    GamesRouteComponent,
    GameRouteComponent,
    ToolbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
