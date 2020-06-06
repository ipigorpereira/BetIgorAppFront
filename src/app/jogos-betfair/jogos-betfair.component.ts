import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, Form } from '@angular/forms';
import { Observable } from 'rxjs';
import { JogoService } from '../services/jogo.service';
import { Jogo } from '../models/jogo';
import { AccountBetfair } from '../models/AccountBetfair';
import { tokenName } from '@angular/compiler';

@Component({
  selector: 'app-jogos-betfair',
  templateUrl: './jogos-betfair.component.html',
  styleUrls: ['./jogos-betfair.component.css']
})
export class JogosBetfairComponent implements OnInit {
  Jogos$: Observable<Jogo[]>;
  conta: AccountBetfair;
  form: FormGroup;
  actionType: string;
  formTitle: string;
  formBody: string;
  tokenForm: FormGroup;

  public now: Date = new Date();

  constructor(private jogoService : JogoService, private formBuilder: FormBuilder) {

   }

  ngOnInit(): void {

     setInterval(() => {
       this.loadJogos();;
     }, 70000);

     setInterval(() => {
      this.AtualizaJogos();
     }, 5500);

    setInterval(() => {
      this.AtualizaOver();
    }, 15000);


     setInterval(() => {
      this.now = new Date();
    }, 1);

     this.tokenForm = this.formBuilder.group({
      token: ['', Validators.required]
});

}


  loadJogos() {
    this.jogoService.getEvents().subscribe((data: Observable<Jogo[]>) => this.RecebeJogosSemMandar(data) );
  }

  AtualizaJogos() {
    this.jogoService.AtualizaEvents().subscribe((data: Observable<Jogo[]>) => this.RecebeJogos(data));
  }
  AtualizaOver() {
    this.jogoService.AtualizaEventsRegraOver().subscribe();
  }

  AtualizaToken() {

    console.log('vai se autenticar');

    this.conta = {
        token: this.tokenForm.get('token').value,
        appKey: '',
        accountId:'1'


      };
    this.jogoService.AtualizaToken(this.conta).subscribe(
      () => console.log('token enviado'),
      err => console.log(err)
      );

      };





  RecebeJogos(data) {
    this.Jogos$ = data;

  }

  RecebeJogosSemMandar(data) {

  }

  RecebeToken(data) {

  }

}



