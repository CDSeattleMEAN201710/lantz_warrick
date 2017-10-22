import { Component, OnInit } from '@angular/core';

import { Player } from './../player'
import { PlayerService } from './../player.service'

@Component({
  selector: 'app-player-add',
  templateUrl: './player-add.component.html',
  styleUrls: ['./player-add.component.css']
})
export class PlayerAddComponent implements OnInit {
  new_player: Player

  constructor(private player_service: PlayerService) { }

  ngOnInit() {
    this.new_player = new Player
  }
  addPlayer() {
    console.log('submit pressed');
    this.player_service.create(this.new_player)
      .then(() => console.log('player added?'))
      .catch(err => console.log('player create error', err))
  }
}
