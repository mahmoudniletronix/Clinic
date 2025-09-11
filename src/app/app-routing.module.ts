import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CliniTableComponent } from './Components/clinic-table/clini-table.component';

const routes: Routes = [
  { path: 'clinicTable', component: CliniTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
