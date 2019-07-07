import { Component, OnInit } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  public ruta:string;
  public loginWeit:boolean;

  constructor(
  	private _authService: AuthService,
  ){}

  ngOnInit(){
    
  }

}
