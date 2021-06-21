import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../project';
import { ProjectServiceService } from '../project-service.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  project = new Project();

//  constructor(private data:ProjectServiceService, private router:Router) { }
constructor(
  private projectService:ProjectServiceService
  ){}
  // constructor(){}
  ngOnInit(): void {}
  // submitProjectButton() {
  //   this.data.addProject(this.project).subscribe(
  //     response => {
  //       this.router.navigate(['projects']);
  //     }
  //   )
  // }
  submitProjectButton() {
    // this.data.addProject(this.project).subscribe;
  }
}
