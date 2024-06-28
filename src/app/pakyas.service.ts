import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PakyasService {

  constructor(private _HttpClient:HttpClient){}
  getPakyas():Observable<any>{
    return this._HttpClient.get('https://www.parking.somee.com/api/Pakyas')
  }
  Booking():Observable<any>{
    return this._HttpClient.get('https://esp32-e9004-default-rtdb.firebaseio.com/SensorData/emptySensor.json')
  }
  getSinglePakya(id:any):Observable<any>{
    return this._HttpClient.get(`https://www.parking.somee.com/api/Pakyas/${id}`)
  }
}
