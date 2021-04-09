import { Component, OnInit } from '@angular/core'; 
import { BudgetService } from  'src/app/services/budget.service';

@Component({
  selector: 'app-budget-upload',
  templateUrl: './budget-upload.component.html',
  styleUrls: ['./budget-upload.component.css']
})
export class BudgetUploadComponent implements OnInit {
  
  // Variable to store shortLink from api response
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file: File = null; // Variable to store file

  constructor(private uploadService: BudgetService) { }

  ngOnInit() {
  }

  onChange(event) {
    this.file = event.target.files[0];
  }

  // OnClick of button Upload
  onUpload() {
    this.loading = !this.loading;
    console.log(this.file);
    this.uploadService.upload(this.file).subscribe(
        (event: any) => {
            if (typeof (event) === 'object') {

                // Short link via api response
                this.shortLink = event.link;

                this.loading = false; // Flag variable 
            }
        }
    );
}

}
