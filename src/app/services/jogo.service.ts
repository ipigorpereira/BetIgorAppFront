import { AccountBetfair } from './../models/AccountBetfair';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Jogo } from '../models/jogo';





@Injectable({
  providedIn: 'root'
})
export class JogoService {

  myAppUrl: string;
  myApiUrl: string;
  myApiUrlAtualiza: string;
  myApiUrlAtualizaToken: string
  myApiUrlAtualizaOver: string
  conta: AccountBetfair;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json charset=utf-8'
    })
  };

  constructor(private http: HttpClient) {
    this.myAppUrl = 'https://betigorapi.azurewebsites.net/';
    this.myApiUrl = 'api/BetIgor';
    this.myApiUrlAtualiza = 'api/BetIgor/AtualizaJogos';
    this.myApiUrlAtualizaToken = 'api/BetIgor/AtualizaToken';
    this.myApiUrlAtualizaOver = 'api/BetIgor/RegraGols';
   }

  getEvents(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrl)
       .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  };

  AtualizaEvents(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrlAtualiza)
    .pipe(
     retry(1),
     catchError(this.errorHandler)
   );
  };

  AtualizaEventsRegraOver(): Observable<any> {
    return this.http.get(this.myAppUrl + this.myApiUrlAtualizaOver)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  };

  AtualizaToken(conta) {
    return this.http.post(this.myAppUrl + this.myApiUrlAtualizaToken, conta, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandler)
      );
  };




   errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
