import { Component, OnInit } from '@angular/core';
import { Email } from './email'
@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.css']
})
export class EmailsComponent implements OnInit {
  emails: Array<Email>

  constructor() { }

  ngOnInit() {
    this.emails = [
      {
        email: "elon@musk.com",
        importance: true,
        subject: "HyperLoop",
        content: "First route to open in 2020"
      },
      {
        email: "jane@goodall.com",
        importance: true,
        subject: "Mass Extinction",
        content: "With so many species dying, will humans survive?"
      },
      {
        email: "tim@cook.net",
        importance: false,
        subject: "iGlass",
        content: "Groundbreaking wearable AR device"
      },
      {
        email: "neil@tyson.org",
        importance: false,
        subject: "Diaspora",
        content: "Let's get off the rock!"
      },
    ]
  }

}
