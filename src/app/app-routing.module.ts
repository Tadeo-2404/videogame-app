import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { GameComponent } from './game/game.component';
import { PopularTodayComponent } from './popular-today/popular-today.component';
import { PopularWeekComponent } from './popular-week/popular-week.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'game/:id', component: GameComponent},
  {path: 'popular-today', component: PopularTodayComponent},
  {path: 'popular-week', component: PopularWeekComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
