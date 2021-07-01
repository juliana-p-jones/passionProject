import { Component } from '@angular/core';
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
}
