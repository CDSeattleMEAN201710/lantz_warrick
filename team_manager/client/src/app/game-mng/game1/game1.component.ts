import { Component, OnInit } from '@angular/core';

import { Player } from './../../player-mng/player'
import { GameService } from './../game.service'

@Component({
  selector: 'app-game1',
  templateUrl: './game1.component.html',
  styleUrls: ['./game1.component.css']
})
export class Game1Component implements OnInit {
  players: Array<Player>
  
  constructor(private game_service: GameService) { }

  ngOnInit() {
    this.game_service.get_all() 
      .then(players => this.players = players)
      .catch(err => console.log('get_all error on comp', err))
    
  }
  set_status(id, status) {
    
    console.log('status got to comp', status);
    this.game_service.set_status(id, status)
      .then(() => 
        this.game_service.get_all() 
          .then(players => this.players = players)
          .catch(err => console.log('get_all error on comp-setStatus', err)))
      .catch(err => console.log('set_status error on comp', err))
  }
}
