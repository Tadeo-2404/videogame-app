import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { PopularTodayComponent } from './popular-today/popular-today.component';
import { PopularWeekComponent } from './popular-week/popular-week.component';
import { PopularMonthComponent } from './popular-month/popular-month.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'game/:id', component: GameComponent},
  {path: 'popular-today', component: PopularTodayComponent},
  {path: 'popular-week', component: PopularWeekComponent},
  {path: 'popular-month', component: PopularMonthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
