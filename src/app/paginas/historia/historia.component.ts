import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-historia',
  templateUrl: './historia.component.html',
  styleUrls: ['./historia.component.css']
})
export class HistoriaComponent implements OnInit {

  oculto = true;
  constructor() {}

  ngOnInit() {
    this.oculto = true;
  }
  
  hidden(){
    if (this.oculto){
      this.oculto = false
    }else{
      this.oculto = true
    };
  }
}
