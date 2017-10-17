import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

// import 'rxjs'

@Injectable()
export class GitHubService {
  username

  constructor(private _http: Http) { }

  getUser(username, callback){
    this._http.get('https://api.github.com/users/' + username).subscribe(
      (response) => { 
        this.username = response.json();
        callback(this.username);
      },
      (error => { console.log('Error in http.get', error);})
    )
  }
}
