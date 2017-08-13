import { Match } from './match';
import { AuthService } from '../core/auth.service';
import { HttpService } from '../core/http.service';
import { Injectable } from '@angular/core';

@Injectable()
export class MatchesService {

  constructor(
    private httpService: HttpService,
    private authService: AuthService
  ) { }

  getMyMatches() {
    return this.httpService.get('matches/mine');
  }

  createMatch(user) {
    return this.httpService.post('matches/598d7262fcc23c47d67e6de6', {}); // TODO
  }

  convertDbMatchToModel(match): Match {
    const currentEmail = this.authService.getUser();

    const otherUser = match.user1.user.username === currentEmail ?
      match.user1.user : match.user2.user;



    return {
      user: otherUser,
      timestamp: new Date(match.timestamp),
      read: false
    };

  }
}
