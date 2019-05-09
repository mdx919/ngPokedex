import { TestBed, async, inject } from '@angular/core/testing';

import { PokemonDetailsGuard } from './pokemon-details.guard';

describe('PokemonDetailsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokemonDetailsGuard]
    });
  });

  it('should ...', inject([PokemonDetailsGuard], (guard: PokemonDetailsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
