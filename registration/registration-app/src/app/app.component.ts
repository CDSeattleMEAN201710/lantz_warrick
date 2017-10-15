import { Component } from '@angular/core';
import { User } from './user'
import { ViewChild } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = new User();
  users = [];
  result: Array<string>
  @ViewChild('f') form: any

  onSubmit(formData){
    this.user.result = "Thank you for registering with us, " + this.user.firstName + ". We just sent you a confirmation email at " + this.user.email + ", and we will send all mail to " + this.user.address + " " + this.user.apt + " " + this.user.city + " " + this.user.state + ". Have a day!"
    console.log(this.user.result);
    this.users.push(this.user);
    this.user = new User();
    formData.form.reset()
    // this.form.email.touched = null
    // if (this.form.valid) {
    //   console.log('Form submitted');
    //   this.form.reset()
    // }
  }
}
