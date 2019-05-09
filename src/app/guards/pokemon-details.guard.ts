import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { nextContext } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class PokemonDetailsGuard implements  CanActivate{
  constructor(private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    let id = route.params.id;
    if ( isNaN(id) || id < 1) {
      alert('invalid id');
      this.router.navigate(['/pokemons']);
      return false;
    }
    return true;
  }

}
