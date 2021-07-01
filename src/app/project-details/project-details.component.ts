import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../project';
import { ProjectServiceService } from '../project-service.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
  project = new Project();
  

  constructor(
    private router: Router,
    private projectService: ProjectServiceService,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params[`id`];
    this.projectService.fetchProjectById(id).subscribe(
      response => {
        this.project = response;
      },
      error => console.log(error)
    );
  }

  hourlyCost(): number {
    let sum = this.project.hourlyRate * this.project.hoursLogged;
    return sum;
  }
  totalCost(): number {
    let sum = this.hourlyCost() + this.project.materialsCost;
    return sum;
  }

  updateProject(id: number) {
    this.router.navigate(['update-project', id]);
  }
  backButton() {
    this.router.navigate(['projects'])
  }
  deleteProjectButton(id: number) {
    this.projectService.deleteProject(id).subscribe(
      response => {
        this.backButton();
      }
    );
  }

}
