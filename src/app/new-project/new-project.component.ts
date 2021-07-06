import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Project } from '../project';
import { ProjectServiceService } from '../project-service.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent {
  projectform!: FormGroup;
  commission!: FormGroup;
  validMessage: string ="";

constructor(
  private route: ActivatedRoute,
  private router: Router,
  private projectService: ProjectServiceService) {
   }

   ngOnInit() {
    this.projectform = new FormGroup({
      title: new FormControl('', Validators.required),
      startDate: new FormControl('', Validators.required),
      dueDate: new FormControl('', Validators.required),
      materials: new FormControl('', Validators.required),
      materialsCost: new FormControl('', Validators.required),
      hourlyRate: new FormControl('', Validators.required),
      hoursLogged: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      notes: new FormControl('', Validators.required),
      completion: new FormControl('', Validators.required),
      sold: new FormControl('', Validators.required),
      // photo: new FormControl(''),

      commission: new FormGroup({
      commission: new FormControl(''),
      commissioner:  new FormControl(''), 
      requirements: new FormControl(''),
      commissionType: new FormControl('')
    }),
    });
  }

  //  onSubmit(){
  //   this.projectService.addProject(this.project).subscribe(result =>
  //    this.gotoProjects());
  // }
  submitRegistration(){
    if (this.projectform.valid){
      console.log("Your user information has been submitted. Thank you!")
    this.projectService.addProject(this.projectform.value).subscribe(
      result =>{
     this.gotoProjects();
     return true; 
    },
     error =>{
     }
   )
 } else {
   this.validMessage = "Please fill out all fields before submitting!"
 }
}

  gotoProjects(){
    this.router.navigate(['/projects']);
  }
  backButton() {
    console.log("this works");
    this.router.navigate(['projects'])
  }

collapseCommission(){
  var x = document.getElementById("commissionFields");
  if (x!.style.display === "none") {
    x!.style.display = "block";
  } else {
    x!.style.display = "none";
  }
}
  showCommission(){
    var x = document.getElementById("commissionFields");
    x!.style.display = "block";
  }

}
