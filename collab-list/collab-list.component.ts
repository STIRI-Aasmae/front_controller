import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Collab } from 'src/app/models/collab.model'
import { CollabService } from 'src/app/services/collab.service'
@Component({
  selector: 'app-collab-list',
  templateUrl: './collab-list.component.html',
  styleUrls: ['./collab-list.component.css']
})
export class CollabListComponent implements OnInit {
  collabs?: Collab[]; 
  constructor(private collabService: CollabService) { }

  ngOnInit() {
    this.retrieveCollabs();
  }

  retrieveCollabs(): void {
    this.collabService.getAll()
      .subscribe(
        data => {
          this.collabs = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
