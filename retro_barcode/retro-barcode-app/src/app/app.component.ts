import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title: string = "Retro Barcode Generator"
  colors: Array<string> = ['aqua', 'aquamarine', 'azure', 'lavender', 'cyan', 'chartreuse', 'MediumSeaGreen', 'MediumSpringGreen', 'RebeccaPurple', 'LightSteelBlue', 'HoneyDew', 'HotPink', 'DodgerBlue']
  boxes: Array<any> = []

  ngOnInit(){
    for (let x = 0; x < 10; x++) {
      this.boxes.push(this.randomColor())
    }
  }
  randomColor () {
    let range = this.colors.length-1
    let color = this.colors[(Math.floor(Math.random()*range))+1]
    return color
  }
}
