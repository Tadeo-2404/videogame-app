import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
juego:any;
  constructor(private _sg:GamesService, private _route:ActivatedRoute) {
    this._route.params.subscribe((resp: any) => {
      this._sg.detallesJuego(resp.id).subscribe((resp:any) => {
        this.juego = resp;
        console.log(resp)
      });
    })
  }

  ngOnInit(): void {
  }

}
