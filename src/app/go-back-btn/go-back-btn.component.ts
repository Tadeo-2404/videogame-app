import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'

@Component({
  selector: 'app-go-back-btn',
  templateUrl: './go-back-btn.component.html',
  styleUrls: ['./go-back-btn.component.css']
})
export class GoBackBtnComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }
  
  goBack() : void {
    this.location.back();
  }

}
