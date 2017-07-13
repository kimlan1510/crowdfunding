import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Project } from '../project.model';
import { ProjectService} from '../project.service';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  providers: [ProjectService]
})
export class ProjectDetailComponent implements OnInit {

  projectId: string;
  projectToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private projectService: ProjectService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) =>{
      this.projectId = urlParameters['id'];
      console.log(this.projectService.getProjectById(this.projectId));

    });
    this.projectService.getProjectById(this.projectId).subscribe(dataLastEmittedFromObserver => {
      this.projectToDisplay = dataLastEmittedFromObserver;
      console.log(this.projectToDisplay);
      if (this.projectToDisplay.amountRaised > this.projectToDisplay.goalAmount) {
        this.projectToDisplay.active = false;
        this.projectService.markCompleted(this.projectToDisplay);
        console.log(this.projectToDisplay.active);
      }
    })
  }



}
