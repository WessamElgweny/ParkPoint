import { Injectable } from '@angular/core';
import { LoginData, User } from './interface/user';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthnService {
  isLogin = new BehaviorSubject(false);
  userName = new BehaviorSubject('');

  constructor(private _HttpClient:HttpClient,private _Router:Router) {
    if(localStorage.getItem('token')!==null){
     this.isLogin.next(true);
    }
    else{
      this.isLogin.next(false);
    }
  }
  signUp(user:User):Observable<any>{
    return this._HttpClient.post('https://www.parking.somee.com/api/accounts/register', user)
  }
  signIn(user:LoginData):Observable<any>{
    return this._HttpClient.post('https://www.parking.somee.com/api/accounts/login', user)
  }
  signOut(){
    localStorage.removeItem('token');
    this.userName.next('');
    this.isLogin.next(false);
    this._Router.navigate(['/login']);
  }
}
