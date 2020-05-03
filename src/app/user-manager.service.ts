import { Injectable } from '@angular/core';
import { countdown } from './countdownChanges.service'
@Injectable()
export class UserManagerService {
  activeUsers = ['Max', 'Anna'];
  inactiveUsers = ['Chris', 'Manu'];
  onSetToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.countdownHandler.CountChangeToInactive();
  }

  onSetToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.countdownHandler.CountChangeToActive();
  }
  constructor(private countdownHandler : countdown) { }

}