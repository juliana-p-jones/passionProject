import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectServiceService } from '../project-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
  private router: Router,
  private projectService: ProjectServiceService) { }

  ngOnInit(): void {
  }
  newProjectButton() {
    this.router.navigate(['app-new-project'])
  }
}
