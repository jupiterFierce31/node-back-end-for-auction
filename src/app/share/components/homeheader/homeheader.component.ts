import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homeheader',
  templateUrl: './homeheader.component.html',
  styleUrls: ['./homeheader.component.css']
})
export class HomeheaderComponent implements OnInit {
  today: any
  constructor() {
    this.today = Date.now();
  }

  ngOnInit() {
  }

}
