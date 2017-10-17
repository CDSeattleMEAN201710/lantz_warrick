import { Component } from '@angular/core';
import { GitHubService } from './git-hub.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username
  userFound: boolean = true
  currUser
  score: number

  constructor(private _gitHubService: GitHubService) { }

  calcScore() {
    console.log(this.username);
    let currUser = this._gitHubService.getUser(this.username, (username) => {
      this.username = username
      this.score = this.username.public_repos + this.username.followers
    })
    if (currUser) {
      this.userFound = true
    } else {
      this.userFound = false
    }
  }   
}
