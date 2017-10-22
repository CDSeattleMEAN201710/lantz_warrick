import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerMngComponent } from './player-mng/player-mng.component';
import { PlayerAddComponent } from './player-mng/player-add/player-add.component';
import { PlayerListComponent } from './player-mng/player-list/player-list.component';
import { GameMngComponent } from './game-mng/game-mng.component';
import { Game1Component } from './game-mng/game1/game1.component';
import { Game2Component } from './game-mng/game2/game2.component';
import { Game3Component } from './game-mng/game3/game3.component';

const routes: Routes = [
  { path: '', redirectTo: '/player', pathMatch: 'full'},
  { path: 'player', component: PlayerMngComponent, children: [
    { path: 'add', component: PlayerAddComponent },
    { path: 'list', component: PlayerListComponent }
  ]},
  { path: 'game', component: GameMngComponent, children: [
    { path: 'game1', component: Game1Component},
    { path: 'game2', component: Game2Component},
    { path: 'game3', component: Game3Component},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
