import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.services';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpcomingComponent implements OnInit {
  juegos: any[] = [];
  loading: boolean = true

  currentDate: any = new Date()
  cDay = this.currentDate.getUTCDate();
  cMonth = this.currentDate.getUTCMonth() + 1;
  cYear = this.currentDate.getFullYear();

  cNextYear = this.currentDate.getFullYear() + 1;

  today: any = `${this.cYear}-${this.cMonth}-${this.cDay}`;
  next: any = `${this.cNextYear}-${this.cMonth}-${this.cDay}`;


  constructor(private _sg: GamesService) { }

  //Converting date to the yy/mm/dd format
  formatDate = (date: any) => {
    return new Date(date).toISOString().slice(0, 10)
  }
  
  ngOnInit(): void {
    this._sg.obtenerPopular(this.formatDate(this.today), this.formatDate(this.next)).subscribe((resp:any) => {
      this.juegos = resp.results
      console.log(this.juegos)
      this.loading = false
    })
  }

}
