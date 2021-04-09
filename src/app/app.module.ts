import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CollabListComponent } from './components/collab-list/collab-list.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CollabDetailsComponent } from './components/collab-details/collab-details.component';
import { BudgetUploadComponent } from './components/budget-upload/budget-upload.component';

@NgModule({
  declarations: [
    AppComponent,
    CollabListComponent,
    CollabDetailsComponent,
    BudgetUploadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,  
    AppRoutingModule,  
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
