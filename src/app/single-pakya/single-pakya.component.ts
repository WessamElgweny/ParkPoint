import { Component } from '@angular/core';
import { PakyasService } from '../pakyas.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-single-pakya',
  templateUrl: './single-pakya.component.html',
  styleUrls: ['./single-pakya.component.css']
})
export class SinglePakyaComponent {
  singlePakya: any = null;
  Id:any ;
  constructor(private _PakyasService:PakyasService,private _ActivatedRoute:ActivatedRoute){}

  ngOnInit(){
   let ID = this._ActivatedRoute.snapshot.params['Id'];
   this.Id=ID;
    this._PakyasService.getSinglePakya(ID).subscribe({
      next:(response)=>{this.singlePakya=response
      }
    })
  } 
  
  onlinePayment(){
   window.open('https://www.payment.somee.com/','_self')
  }
}
