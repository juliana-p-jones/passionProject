import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../project';
import { ProjectServiceService } from '../project-service.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  
  projects!: Project[];

  // constructor(private data:ProjectServiceService, private router:Router) { }
// constructor(private data:ProjectServiceService){}
constructor(){}
ngOnInit():void{}
//   ngOnInit(): void {
//     this.fetchAllProjects();
//   }

//   fetchAllProjects(){
//     this.data.fetchAllProjects().subscribe(
//       response => {
//         this.projects = response;
//         console.log(this.projects);
//       }
//     );
// }
// addProjectButton(){
//   // route them to the addStudent component
//   this.router.navigate(['new-project']);
// }
 addProjectButton(){}
// viewProject(id: number){
//   this.router.navigate(['project-details', id]);
// }
viewProject(id: number){}
// deleteProject(id:number){
//   this.data.deleteProject(id).subscribe(
//     response =>{
//       this.fetchAllProjects();
//     }
//   )
//   }
}
