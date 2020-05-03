import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserManagerService } from '../user-manager.service';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css'],
})
export class ActiveUsersComponent {
users: string[] = this.UserManager.activeUsers;
  constructor(private UserManager: UserManagerService) {}
  onSetToInactive(id: number) {
    this.UserManager.onSetToInactive(id);
  }

}
