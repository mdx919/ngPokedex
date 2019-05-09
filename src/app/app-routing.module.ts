import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PokemonDetailsGuard } from './guards/pokemon-details.guard';


const routes: Routes = [
  { path: 'pokemons', component: DashboardComponent },
  { 
    path: 'pokemons/:id',
    component: PokemonDetailsComponent,
    canActivate: [PokemonDetailsGuard]
   },
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: 'home' }
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
