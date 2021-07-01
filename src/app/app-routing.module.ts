import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewProjectComponent } from './new-project/new-project.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectsComponent } from './projects/projects.component';
import { UpdateProjectComponent } from './update-project/update-project.component';

const routes: Routes = [
  {path:'projects', component:ProjectsComponent},
  {path:'new-project', component:NewProjectComponent},
  {path:'project-details/:id', component:ProjectDetailsComponent},
  {path:'update-project/:id', component: UpdateProjectComponent},
  // {path: '**', redirectTo: 'projects', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
