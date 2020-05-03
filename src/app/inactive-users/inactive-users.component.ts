import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserManagerService } from '../user-manager.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent {
users: string[] = this.UserManager.inactiveUsers;
  constructor(private UserManager: UserManagerService) {}
  onSetToActive(id: number) {
    this.UserManager.onSetToActive(id);
  }
}

