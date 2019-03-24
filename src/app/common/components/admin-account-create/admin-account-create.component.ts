import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-account-create',
  templateUrl: './admin-account-create.component.html',
  styleUrls: ['./admin-account-create.component.css']
})
export class AdminAccountCreateComponent implements OnInit {

  rights: any[] = [
    {value: 'Super Admin',  viewValue: 'Super Admin'},
    {value: 'Admin',        viewValue: 'Admin'},
    {value: 'User',         viewValue: 'User'}
  ];

  constructor() { }

  ngOnInit(): void {
    // this.adminForm = new FormGroup({
    //   'name': new FormControl(this.hero.name, [
    //     Validators.required,
    //     Validators.minLength(4)
    //   ]),
    //   'alterEgo': new FormControl(this.hero.alterEgo),
    //   'power': new FormControl(this.hero.power, Validators.required)
    // });
  
  }
  
  // get name() { return this.heroForm.get('name'); }
  
  // get power() { return this.heroForm.get('power'); }

}
