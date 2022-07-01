import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class GamesService {
    start_date: string = "";
    end_date: string = "";
    popular: string = "";
    games: string = "https://api.rawg.io/api/games?key=56fc21b106ee429ba6501372c8148105";
    juego: string = "https://api.rawg.io/api/games";
    constructor(private _sg: HttpClient) { }

    obtenerJuegos() {
        let url = this.games;
        return this._sg.get(url);
    }

    detallesJuego(nombre: string) {
        let url = `${this.juego}/${nombre}?key=56fc21b106ee429ba6501372c8148105`;
        return this._sg.get(url);
    }

    obtenerPopular(start: string, end: string) {
        this.start_date = start;
        this.end_date = end;
        this.popular = `https://api.rawg.io/api/games?dates=${this.start_date},${this.end_date}&ordering=-added&key=56fc21b106ee429ba6501372c8148105`;
        let url = this.popular;
        return this._sg.get(url)
    }
}