import { Component, OnInit } from '@angular/core';
import { AuthnService } from '../authn.service';
import { PakyasService } from '../pakyas.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  [x: string]: any;
 constructor(private _AuthnService:AuthnService,private _PakyasService:PakyasService){}
 enableNavbar:any; 
 id:any;
  ngOnInit(): void{
      this._AuthnService.isLogin.subscribe({
      next:(behaviorSubValue)=>{
        this.enableNavbar=behaviorSubValue;
      }
    })
  }
 signOut(){
  this._AuthnService.signOut();
 }
}
