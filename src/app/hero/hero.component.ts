import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.services';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  search: string = "";
  game: any;
  fail: boolean = false;
  loading: boolean = false;

  constructor(private _sg: GamesService) {
  }

  ngOnInit(): void {
  }

  searchInit() {
    this.loading = true

    this._sg.detallesJuego(this.search.split(' ').join('-')).subscribe((resp: any) => {
      if (resp.redirect) {
        this._sg.detallesJuego(resp.slug).subscribe((response: any) => {
          this.game = response;
          console.log(this.game)
          this.loading = false
          this.fail = false
        })
      }
      this.game = resp;
      console.log(this.game)
      this.loading = false
      this.fail = false
    }, error => {
      this.fail = true;
      this.loading = false
    })
  }

}
