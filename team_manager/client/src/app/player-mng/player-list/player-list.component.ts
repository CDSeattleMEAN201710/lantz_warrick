import { Component, OnInit } from '@angular/core';

import { Player } from './../player'
import { PlayerService } from './../player.service'

@Component({
  selector: 'app-player-list',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit {
  players: Array<Player>
  
  constructor(private player_service: PlayerService) { }

  ngOnInit() {
    this.player_service.get_all() 
      .then(players => this.players = players)
      .catch(err => console.log('get_all error on comp', err))
    
  }
  // delPlayer(_id) {
  // console.log(_id);
  //   this.player_service.del_one(_id)
  //     .then(() => console.log('player deleted at component?'))
  //     .catch(err => console.log('delPlayer on comp', err))
  // }
}
