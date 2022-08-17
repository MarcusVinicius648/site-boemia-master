import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'boemia';
  currentBanner = {background: '#252020'};

  ngOnInit() {
    const number = Math.random();
    if(number > .5) {
      this.currentBanner = {background: '#252020'};
    }
  }
}
