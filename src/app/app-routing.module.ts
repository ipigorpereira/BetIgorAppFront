import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JogosBetfairComponent } from './jogos-betfair/jogos-betfair.component';



const routes: Routes = [
  { path: '', component: JogosBetfairComponent, pathMatch: 'full' },
  {path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
