import { Component, OnInit } from '@angular/core';
import { DataService } from '../data/data.service';
import { SeatAllocation } from '../data/seat-allocation';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
// import { SeatAllocationFormComponent  } from '/seat-allocation-form';




@Component({
  selector: 'app-allocation-listing',
  templateUrl: './allocation-listing.component.html',
  styleUrls: ['./allocation-listing.component.css']
})
export class AllocationListingComponent implements OnInit {

  constructor(private dataService:DataService,private router:Router) { }
  employeeAllocationList:Observable<string[]>


  ngOnInit():void {
    this.dataService.fetchAllocationlist().subscribe(data=>this.employeeAllocationList=data);
console.log("listttt",this.employeeAllocationList);
  }
  btnClick():void {
    // this.router.navigate('seat-allocation-form');
};

}
