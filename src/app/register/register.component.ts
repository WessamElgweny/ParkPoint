import { Component } from '@angular/core';
import { AuthnService } from '../authn.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private _AuthnService:AuthnService,private _Router:Router){}
  apiResponse:string='';
  loading:boolean= false;

  registrationForm = new FormGroup({
    displayName: new FormControl(null,[Validators.required,Validators.minLength(3),Validators.maxLength(30)]),
    email:    new FormControl(null,[Validators.required,Validators.email]),   
    phoneNumber: new FormControl(null,[Validators.required,Validators.pattern(/[011|012|015|010]{3}[0-9]{8}$/)]),
    password:    new FormControl(null,[Validators.required,Validators.pattern(/^[A-Z].*@.[a-zA-Z0-9]{5,16}$/)]),
    age:         new FormControl(null,[Validators.required,Validators.pattern(/[2-9]{1}[0-9]{1}|18|19$/)]),
    carNumber:  new FormControl(null,[Validators.required])
  })
  signUp(formData:any){
    formData.markAllAsTouched();
    if(formData.valid){
      this.loading = true;
      this._AuthnService.signUp(formData.value).subscribe({
        next:(response)=>{
          this.loading =false
          if(this.apiResponse!='This Email is allready Exsist'){
            this._Router.navigate(['/login'])
          }
        },
        error:(err)=>{
          this.apiResponse =err.error.errors;
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
