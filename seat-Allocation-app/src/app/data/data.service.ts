import { Injectable } from '@angular/core';
import { SeatAllocation } from './seat-allocation';
import {Observable, of ,throwError} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { retry, map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  allocateSeatOnPost(seatAllocation:SeatAllocation):Observable<any>{
    // return of(seatAllocation);
    return this.http.post('http://localhost:4200/server/allocate-seat',seatAllocation).pipe(map(res => res))

  }
  fetchAllocationlist():Observable<any>{
    console.log("kl");
    return this.http.get('http://localhost:4200/server/find-all-employee-details');

  }
 
  getBuildingArrays():Observable<any>{


    return of(['1','2','3','4','5','6','7','8','9','10']);

  }
  getFloorArrays():Observable<any>{

    return of(['1','2','3','4','5']);

  }
  getSeatArrays():Observable<any>{

    return of(['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15']);

  }
 
  
 }

