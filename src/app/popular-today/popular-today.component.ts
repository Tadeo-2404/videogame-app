import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.services';

@Component({
  selector: 'app-popular-today',
  templateUrl: './popular-today.component.html',
  styleUrls: ['./popular-today.component.css']
})
export class PopularTodayComponent implements OnInit {
  juegos: any[] = [];
  loading: boolean = true

  currentDate: any = new Date()
  cDay = this.currentDate.getUTCDate();
  cMonth = this.currentDate.getUTCMonth() + 1;
  cYear = this.currentDate.getFullYear();
  today: any = `${this.cYear}-${this.cMonth}-${this.cDay}`;
  yesterday: any = new Date(this.today);
  newYesterday: any =  this.yesterday.setDate(this.yesterday.getDate() - 1);

  constructor(private _sg: GamesService) { }

  //Converting date to the yy/mm/dd format
  formatDate = (date: any) => {
    return new Date(date).toISOString().slice(0, 10)
  }
  
  ngOnInit(): void {
    this._sg.obtenerPopular(this.formatDate(this.newYesterday), this.formatDate(this.today)).subscribe((resp:any) => {
      this.juegos = resp.results
      this.loading = false
    })
  }

}
