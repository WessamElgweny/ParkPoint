import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthnService } from '../authn.service';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private _AuthnService:AuthnService,private _Router:Router){}
  apiResponse:string='';
  loading:boolean= false;
  loginForm = new FormGroup({
    email:new FormControl(null,[Validators.required,Validators.email]),
    password:new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z].*@.[a-zA-Z0-9]{5,16}$/)]),
  })
  login(formData:any){
    if(formData.valid){
      this.loading = true;
      this._AuthnService.signIn(formData.value).subscribe({
        next:(response)=>{
          this.loading =false
          if(this.apiResponse!='Authorized, you are not'){
            localStorage.setItem('token',response.token)
            let decodedToken:any = jwtDecode(response.token);
            this._AuthnService.userName.next(decodedToken.name);
            this._Router.navigate(['/home'])
            this._AuthnService.isLogin.next(true);
          }
        },
        error:(err)=>{
          this.apiResponse =err.error.message;
          this.loading =false
        }
      });
    }
  }

  visible:boolean = true;
  changeType:boolean =true;

  viewPass(){
    this.visible=!this.visible;
    this.changeType=!this.changeType;
  }
}
