import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  login()
  {
    var actualRoute = window.location.origin;
    window.location.replace(actualRoute+'/profile/show/1');
    localStorage.setItem('token','eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE1NjEyOTA0ODMsImV4cCI6MTU2Mzg4MjQ4M30.BEJRPUpb21OvaZTH0VCNmyhKBmzAQ5xAwFU35EA7Ghg');
    localStorage.setItem('resID', '1');
    localStorage.setItem('roleID', 'admin');
  }


}
