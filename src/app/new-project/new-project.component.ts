import { Component, OnInit } from '@angular/core';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css'],
  providers: [ProjectService]
})
export class NewProjectComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  submitForm(name: string, starters: string, description: string, goalAmount: string, plan: string, rewards: string, categories: string) {
    var amountRaised: number = 0;
    var backers: string[] = null;
    var newProject: Project = new Project(name, starters, description, Number(goalAmount), amountRaised, backers, plan, rewards, categories);
    this.projectService.addProject(newProject);
  }

}
