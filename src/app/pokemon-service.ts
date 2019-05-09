import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PokemonService {
    private productUrl = 'assets/pokedex.json';

    constructor(private http: HttpClient) {}

    getPokemons(): Observable<any[]> {
        return this.http.get<any[]>(this.productUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(''))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            errorMessage = `An Error Occured: ${errorMessage}`;
        } else {
            errorMessage = `Server returned code: ${err.status}, error message is ${err.message}`;
        }

        return throwError(errorMessage);
    }
}
