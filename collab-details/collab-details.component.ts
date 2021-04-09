import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CollabService } from 'src/app/services/collab.service';
import { Collab} from 'src/app/models/collab.model'
@Component({
  selector: 'app-collab-details',
  templateUrl: './collab-details.component.html',
  styleUrls: ['./collab-details.component.css']
})
export class CollabDetailsComponent implements OnInit {
  currentCollab: Collab = {
    id_jira_collab: '',
    collab_name:'',
    team:'',
  };
  message = '';

  constructor( private collabService: CollabService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.message = '';
    this.getCollab(this.route.snapshot.paramMap.get('id'))
  }

  getCollab(id): void {
    this.collabService.get(id)
      .subscribe(
        data => {
          this.currentCollab = data[0];
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updateCollab(): void {
    this.collabService.update(this.currentCollab.id_jira_collab, this.currentCollab)
      .subscribe(
        response => {
          console.log(response);
          this.message = 'The collab was updated successfully!';
        },
        error => {
          console.log(error);
        });
  }

}
