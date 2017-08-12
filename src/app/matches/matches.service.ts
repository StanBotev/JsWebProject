import { HttpService } from '../core/http.service';
import { Injectable } from '@angular/core';

@Injectable()
export class MatchesService {

  constructor(private httpService: HttpService) { }

  getMyMatches() {
    return this.httpService.get('matches/mine');
  }

  createMatch(user) {
    return this.httpService.post('matches/598d7262fcc23c47d67e6de6', {}); // TODO
  }
}
