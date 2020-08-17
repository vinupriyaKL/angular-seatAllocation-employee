import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SeatAllocationFormComponent } from './seat-allocation-form/seat-allocation-form.component';
import { AllocationListingComponent } from './allocation-listing/allocation-listing.component';

const routes: Routes = [
{path:'register',component:SeatAllocationFormComponent},
{path:'listing',component:AllocationListingComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[SeatAllocationFormComponent]
