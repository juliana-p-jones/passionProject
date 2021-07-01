import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSliderModule } from '@angular/material/slider';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { NewProjectComponent } from './new-project/new-project.component';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { HttpClientModule } from '@angular/common/http';
import { ProjectServiceService } from './project-service.service';
import { UpdateProjectComponent } from './update-project/update-project.component';
import {MatRippleModule} from '@angular/material/core';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    NewProjectComponent,
    ProjectsComponent,
    ProjectDetailsComponent,
    UpdateProjectComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot([
      {path: 'app-project-details', component: ProjectDetailsComponent},
      {path: 'app-new-project', component: NewProjectComponent},
      {path: 'app-home', component: HomeComponent},
      {path: '', redirectTo: 'app-home', pathMatch: 'full'},
      {path: 'app-projects', component: ProjectsComponent}
    ]),
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    FormsModule,
    HttpClientModule,
    MatRippleModule
    ],
  providers: [ProjectServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
