import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../project';
import { ProjectServiceService } from '../project-service.service';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent implements OnInit {
project = new Project();

  constructor() { }
  // constructor(private data:ProjectServiceService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // const id = this.activatedRoute.snapshot.params[`id`];
    // this.data.fetchProjectById(id).subscribe(
    //   response =>{
    //       this.project = response;
    //   },
    //   error => console.log(error)
    // );
  }



}
