import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  public ruta: string;

  constructor(
    private _router: Router,
    public _authService: AuthService,
  ) {}

  ngOnInit() {
  	this.ruta = this._router.url;
  	console.log(this._authService.loggedIn());
  }

}
