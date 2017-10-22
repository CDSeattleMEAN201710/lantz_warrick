import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

import "rxjs"
import "rxjs/Rx"
import "rxjs/add/operator/map"

import { Player } from './player'

@Injectable()
export class PlayerService {

  constructor(private http: Http) { }

  create(new_player: Player){
    return this.http.post("/addPlayer", new_player).map(data => data.json()).toPromise()
  }
  get_all(){
    return this.http.get('/get_all').map(data => data.json()).toPromise()
  }
  del_one(id){
    return this.http.delete('/delPlayer/' + id).map(data => data.json()).toPromise()
  }
}
