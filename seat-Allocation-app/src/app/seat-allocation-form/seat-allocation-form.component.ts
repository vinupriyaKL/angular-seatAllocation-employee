import { Component, OnInit } from '@angular/core';
import { SeatAllocation } from '../data/seat-allocation';
import {DataService} from '../data/data.service';
import {Observable, of ,throwError} from 'rxjs';


  import { from } from 'rxjs';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-seat-allocation-form',
  templateUrl: './seat-allocation-form.component.html',
  styleUrls: ['./seat-allocation-form.component.css']
})
export class SeatAllocationFormComponent implements OnInit {
  seatAllocation:SeatAllocation={
    empName:"",
    empId:"",
    projectCode:"",
    buildingNo:"",
    floorNo:"",
    seatNo:""

  }
  postError:boolean=false;
  errorText:string="";
  buildingArray:Observable<string[]>
  seatArray:Observable<string[]>
  floorArray:Observable<string[]>


  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.buildingArray=this.dataService.getBuildingArrays();
    this.floorArray=this.dataService.getFloorArrays();
    this.seatArray=this.dataService.getSeatArrays();

  }
  onSubmit(form:NgForm){
    this.postError=false;

    this.dataService.allocateSeatOnPost(this.seatAllocation).subscribe(
      result=>console.log('success',result),
      error=>this.onHttpError(error)
    )
  }
  onHttpError(errorResponse:any){
    this.postError=true;
    this.errorText=errorResponse.error;
   

  }

}
