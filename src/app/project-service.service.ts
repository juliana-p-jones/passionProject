import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from './project';

@Injectable(
  {
  providedIn: 'root'
}
)

export class ProjectServiceService {


  constructor(private http: HttpClient) {   }
  //POST
  addProject(project: Project){
    return this.http.post<Project>(`http://localhost:8080/passionproject/project`, project);
  }
  //Get all
  fetchAllProjects(): Observable<Project[]>{
    return this.http.get<Project[]>('http://localhost:8080/passionproject/projects');
  }

  //Get Project by ID
  fetchProjectById(id: number): Observable<Project>{
    return this.http.get<Project>(`http://localhost:8080/passionproject/project/${id}`);
  }

  //PUT by ID
  editProject(id:number, project: Project): Observable<Project>{
    return this.http.put<Project>(`http://localhost:8080/passionproject/project/${id}`, project);
  }

  //Delete by ID
  deleteProject(id: number): Observable<any>{
    return this.http.delete<any>(`http://localhost:8080/passionproject/${id}`);
  }

}
