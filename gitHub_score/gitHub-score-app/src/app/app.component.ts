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
    this._gitHubService.getUser(this.username).subscribe((data) => {
      this.currUser = data.json()
      console.log(data.json());
      this.score = this.currUser.public_repos + this.currUser.followers
    })
    
  }   
}
