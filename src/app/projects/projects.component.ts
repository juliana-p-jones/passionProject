import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../project';
import { ProjectServiceService } from '../project-service.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  projects!: Project[];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectServiceService){ }

  ngOnInit() {
    this.projectService.fetchAllProjects().subscribe(data => {
      this.projects = data;
    });
  }
  addProjectButton(){
    this.router.navigate(['new-project']);
  }
  viewProject(id: number){
    this.router.navigate(['project-details', id]);
  }

}
