import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Project } from '../project.model';
import { ProjectService } from '../project.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-funding-form',
  templateUrl: './funding-form.component.html',
  styleUrls: ['./funding-form.component.css'],
  providers: [ProjectService]
})

export class FundingFormComponent implements OnInit {
  fundMeForm: boolean = false;
  fundMeButton: boolean = true;
  @Input() selectedProject;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  fundMe() {
    this.fundMeForm = true;
    this.fundMeButton = false;
  }
  
  submitFundingForm(backer: string, fundingAmount: string) {
    this.selectedProject.backers.push(backer);
    this.selectedProject.amountRaised = Number(this.selectedProject.amountRaised) + Number(fundingAmount);
    console.log(this.selectedProject);
    this.projectService.donateToProject(this.selectedProject);
    this.fundMeForm = false;
    this.fundMeButton = true;
  }

}
