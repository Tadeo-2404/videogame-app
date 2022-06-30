import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})

export class GamesService {
    games: string = "https://api.rawg.io/api/games?dates=2022-01-01,2022-06-28&ordering=-added&key=56fc21b106ee429ba6501372c8148105";
    juego: string = "https://api.rawg.io/api/games&key=56fc21b106ee429ba6501372c8148105"
    constructor(private _sg:HttpClient) { }

    obtenerJuegos() {
        let url = this.games;
        return this._sg.get(url);
    }

    detallesJuego(nombre: string) {
        let url = `${this.juego}/${nombre}`;
        return this._sg.get(url);
    }
}