import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  choice = 'sign-in';

  constructor() { }

  ngOnInit() {
  }

  displaySignContent(sign){
    this.choice = sign;
  }
}
