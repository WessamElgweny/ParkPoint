import { Component, OnInit, VERSION } from '@angular/core';
import { PakyasService } from '../pakyas.service';
import { Pakyas } from '../interface/pakyas';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  PakyasContainer:Pakyas[] = [];
  id:any;
  constructor(private _PakyasService:PakyasService){}
  ngOnInit():void{
    this._PakyasService.getPakyas().subscribe({
      next:(response)=>{this.PakyasContainer=response
      },
      error:(err)=>{console.log(err)}
    }) 
    this._PakyasService.Booking().subscribe({
      next:(response)=>{
        this.id=response
      },
      error:(err)=>{console.log(err)}
    })
}
}
