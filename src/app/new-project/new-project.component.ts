import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../project';
import { ProjectServiceService } from '../project-service.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent {
  project: Project;
  projectform!: FormGroup;
  commission!: FormGroup;
  validMessage: string ="";

constructor(
  private route: ActivatedRoute,
  private router: Router,
  private projectService: ProjectServiceService) {
    this.project = new Project();
   }

   onSubmit(){
    this.projectService.addProject(this.project).subscribe(result =>
     this.gotoProjects());
  }
  gotoProjects(){
    this.router.navigate(['/projects']);
  }
  backButton() {
    this.router.navigate(['projects'])
  }
//   isCommission(){
//     if (this.project.commission == true)
//   return true;
// else 
//   return false;
//   };
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
    commission: new FormGroup({
    commission: new FormControl('', Validators.required),
    commissioner:  new FormControl('', Validators.required), 
    requirements: new FormControl('', Validators.required),
    commissionType: new FormControl('', Validators.required)
  }),
  });
}
}
