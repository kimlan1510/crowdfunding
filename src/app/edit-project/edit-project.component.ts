import { Component, OnInit, Input } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css'],
  providers: [ProjectService]
})
export class EditProjectComponent implements OnInit {
  editProjectForm: boolean = false;
  editProjectButton: boolean = true;
  @Input() selectedProject;

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  beginUpdatingProject(projectToUpdate){
    this.projectService.updateProject(projectToUpdate);
  }

  beginDeletingProject(projectToDelete){
    if(confirm("Are you sure you want to delete this project? You cannot undo this action.")){
      this.projectService.deleteProject(projectToDelete);
    }
  }

  showEditProjectForm() {
    this.editProjectForm = true;
    this.editProjectButton = false;
  }

  hideEditProjectForm() {
    this.editProjectForm = false;
    this.editProjectButton = true;
  }

}
