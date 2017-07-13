import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-category-projects',
  templateUrl: './category-projects.component.html',
  styleUrls: ['./category-projects.component.css'],
  providers: [ProjectService]
})

export class CategoryProjectsComponent implements OnInit {
  projects;
  categoryName: string;
  output: Project[] = [];

  constructor(private projectService: ProjectService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) =>{
      this.categoryName = urlParameters['category'];
      console.log(this.categoryName);
    });

    this.projectService.getProjects().subscribe(response => {
      this.projects = response;
      for (let i=0; i<this.projects.length; i++){
        if (this.projects[i].categories === this.categoryName){
          console.log(this.projects[i]);
          this.output.push(this.projects[i]);
        }
      }
      return this.output;
    })
  }

}
