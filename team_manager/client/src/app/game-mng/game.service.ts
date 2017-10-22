import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

import "rxjs"
import "rxjs/Rx"
import "rxjs/add/operator/map"

import { Player } from './../player-mng/player'

@Injectable()
export class GameService {

  constructor(private http: Http) { }

  get_all(){
    return this.http.get('/get_all').map(data => data.json()).toPromise()
  }
}
