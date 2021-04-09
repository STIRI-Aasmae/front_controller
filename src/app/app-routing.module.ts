import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CollabListComponent } from './components/collab-list/collab-list.component'
import { CollabDetailsComponent} from './components/collab-details/collab-details.component'
import { BudgetUploadComponent } from './components/budget-upload/budget-upload.component'

const routes: Routes = [
  { path: '', redirectTo: 'collabs', pathMatch: 'full' },
  { path: 'collabs', component: CollabListComponent },
  { path: 'collab/:id', component: CollabDetailsComponent },
  { path: 'upload', component: BudgetUploadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
