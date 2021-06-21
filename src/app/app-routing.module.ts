import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewProjectComponent } from './new-project/new-project.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path:'projects', component:ProjectsComponent},
  {path:'new-project', component:NewProjectComponent},
  {path:'project-details/:id', component:ProjectDetailsComponent},
  // {path:'edit-project/:id', component: EditProjectComponent},
  // {path: '**', redirectTo: 'projects', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
