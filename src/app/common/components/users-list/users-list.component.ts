import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { User } from 'src/app/shared/classes/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: User[];

  columnsToDisplay: any[] = [
    { name: 'id',         label: 'No.' },
    { name: 'lastname',   label: 'Lastname' },
    { name: 'firstname',  label: 'Firstname' },
    { name: 'email',      label: 'Email' }
  ];
  actionsToDisplay: any[] = [
    { name: 'actions', visibility: true }
  ];
  buttonsToDisplay: any[] = [
    { name: 'add',     label: 'New',     visibility: false },
    { name: 'details', label: 'Details', visibility: true },
    { name: 'edit',    label: 'Edit',    visibility: true },
    { name: 'del',     label: 'Delete',  visibility: true }
  ];
  dataSource: any;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
    this.dataSource = new MatTableDataSource(this.users);
  }

  getUsers(): void {
    this.users = this.userService.getUsers();
  }
}
