import { Component } from '@angular/core';
import { AuthnService } from './authn.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ParkPoint';
  enableNavbar:any; 
  constructor(private _AuthnService:AuthnService){}
  ngOnInit(): void{
    this._AuthnService.isLogin.subscribe({
    next:(behaviorSubValue)=>{
      this.enableNavbar=behaviorSubValue;
    }})
  }
}
