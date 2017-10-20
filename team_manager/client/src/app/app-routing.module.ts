import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerMngComponent } from './player-mng/player-mng.component'
import { PlayerAddComponent } from './player-mng/player-add/player-add.component'
import { PlayerListComponent } from './player-mng/player-list/player-list.component'

const routes: Routes = [
  { path: '', redirectTo: PlayerMngComponent },
  { path: 'add', component: PlayerAddComponent },
  { path: 'list', component: PlayerListComponent },
  { path: 'playerhome', component: PlayerMngComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
