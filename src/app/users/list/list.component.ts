import { UsersActions } from '../../store/users/users.actions';
import { IAppState } from '../../store';
import { NgRedux } from 'ng2-redux/lib/components/ng-redux';
import { UsersService } from '../users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  private users: any[]; // TODO: User Model

  constructor(
    private usersActions: UsersActions,
    private ngRedux: NgRedux<IAppState>,
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.usersActions.getUsersList();
    this.ngRedux.select(state => state.users)
      .subscribe(usersState => {
        this.users = usersState.usersList;
      });
  }

  like (id) {
    this.usersService.like(id).subscribe(console.log);
  }

  dislike (id) {
    this.usersService.dislike(id).subscribe(console.log);
  }

}
