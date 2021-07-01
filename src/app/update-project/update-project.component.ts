import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../project';
import { ProjectServiceService } from '../project-service.service';

@Component({
  selector: 'app-update-project',
  templateUrl: './update-project.component.html',
  styleUrls: ['./update-project.component.css']
})
export class UpdateProjectComponent {
  project: Project;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectServiceService) {
      this.project = new Project();
     }
  
     onSubmit(){
      this.projectService.editProject(this.project.id, this.project).subscribe(result =>
       this.gotoProjects());
    }
    gotoProjects(){
      this.router.navigate(['/projects']);
    }
    backButton(){
      this.router.navigate(['/projects'])
    }
  }
  