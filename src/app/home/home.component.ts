import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  juegos:any[] = [];
  constructor(private _sg:GamesService) { }

  ngOnInit(): void {
    this._sg.obtenerJuegos().subscribe((resp:any) => {
      this.juegos = resp.results
    })
  }

}
