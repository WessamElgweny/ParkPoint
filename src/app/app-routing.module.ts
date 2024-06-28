import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { pathGuard } from './path.guard';
import { NotfoundComponent } from './notfound/notfound.component';
import { SinglePakyaComponent } from './single-pakya/single-pakya.component';


const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  {path:'pakya/:Id',component:SinglePakyaComponent,canActivate:[pathGuard]},
  {path:'home',component:HomeComponent,canActivate:[pathGuard]},
  {path:'**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
