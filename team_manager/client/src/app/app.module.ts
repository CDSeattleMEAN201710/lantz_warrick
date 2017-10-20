import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerMngComponent } from './player-mng/player-mng.component';
import { GameMngComponent } from './game-mng/game-mng.component';
import { PlayerListComponent } from './player-mng/player-list/player-list.component';
import { PlayerAddComponent } from './player-mng/player-add/player-add.component';
import { Game1Component } from './game-mng/game1/game1.component';
import { Game2Component } from './game-mng/game2/game2.component';
import { Game3Component } from './game-mng/game3/game3.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerMngComponent,
    GameMngComponent,
    PlayerListComponent,
    PlayerAddComponent,
    Game1Component,
    Game2Component,
    Game3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
