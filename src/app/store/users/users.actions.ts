import { Injectable } from '@angular/core';
import { UsersService } from '../../users/users.service';
import { NgRedux } from 'ng2-redux';
import { IAppState } from '..';

export const USER_LOGGED_IN = 'users/LOGIN';
export const USER_REGISTERED = 'users/REGISTER';
export const USER_LOGOUT = 'users/LOGOUT';
export const USERS_LIST = 'users/LIST';

@Injectable()
export class UsersActions {
  constructor (
      private usersService: UsersService,
      private ngRedux: NgRedux<IAppState>
    ) {}

  register (user) {
    this.usersService
      .register(user)
      .subscribe(result => {
        this.ngRedux.dispatch({
            type: USER_REGISTERED,
            result
        });
      });
  }

  login (user) {
      this.usersService
        .login(user)
        .subscribe(result => {
          this.ngRedux.dispatch({
             type: USER_LOGGED_IN,
             result
          });
        });
  }

  logout () {
    this.ngRedux.dispatch({
      type: USER_LOGOUT
    });
  }

  getUsersList (query?) {
    this.usersService.list(query)
      .subscribe(users => {
        if (users.success !== false) {
          this.ngRedux.dispatch({
            type: USERS_LIST,
            users
          });
        } else {
          console.log(users); // TODO: Render on DOM
        }
      });
  }
}
