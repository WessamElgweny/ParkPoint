import { CanActivateFn, Router } from '@angular/router';
import { AuthnService } from './authn.service';
import { inject } from '@angular/core';

export const pathGuard: CanActivateFn = (route, state) => {
  let _Router =inject(Router)
  let _authn = inject(AuthnService)
  if(_authn.isLogin.value){
   return true;
  }
  else{
     _Router.navigate(['/login'])
   return false;
  }
};
