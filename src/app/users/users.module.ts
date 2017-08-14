import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UsersService } from './users.service';
import { UsersActions } from '../store/users/users.actions';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';

@NgModule ({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    RegisterComponent,
    LoginComponent,
    ListComponent
  ],
  providers: [
    UsersService,
    UsersActions
  ]
})

export class UsersModule {

}
