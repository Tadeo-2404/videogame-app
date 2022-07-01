import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.services';

@Component({
  selector: 'app-popular-week',
  templateUrl: './popular-week.component.html',
  styleUrls: ['./popular-week.component.css']
})
export class PopularWeekComponent implements OnInit {
  juegos: any[] = [];
  loading: boolean = true

  currentDate: any = new Date()
  cDay = this.currentDate.getUTCDate();
  cMonth = this.currentDate.getUTCMonth() + 1;
  cYear = this.currentDate.getFullYear();
  today: any = `${this.cYear}-${this.cMonth}-${this.cDay}`;
  week: any = new Date(this.today);
  newWeek: any =  this.week.setDate(this.week.getDate() - 7);

  constructor(private _sg: GamesService) { }

  //Converting date to the yy/mm/dd format
  formatDate = (date: any) => {
    return new Date(date).toISOString().slice(0, 10)
  }
  
  ngOnInit(): void {
    this._sg.obtenerPopular(this.formatDate(this.newWeek), this.formatDate(this.today)).subscribe((resp:any) => {
      this.juegos = resp.results
      this.loading = false
    })
  }

}
