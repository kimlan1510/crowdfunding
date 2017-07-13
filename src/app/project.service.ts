import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class ProjectService {
  projects: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.projects = database.list('projects');
   }

   getProjects() {
     return this.projects;
   }

   addProject(newProject: Project) {
     this.projects.push(newProject);
   }

   getProjectById(projectId: string) {
     return this.database.object('/projects/' + projectId);
   }

   donateToProject(selectedProject) {
     const projectInFirebase = this.getProjectById(selectedProject.$key);
     projectInFirebase.update({
       amountRaised: selectedProject.amountRaised,
       backers: selectedProject.backers
     });
   }

   updateProject(localUpdatedProject) {
    const projectEntryInFirebase = this.getProjectById(localUpdatedProject.$key);
    projectEntryInFirebase.update({name: localUpdatedProject.name,
    starters: localUpdatedProject.starters,
    goalAmount: localUpdatedProject.goalAmount,
    description: localUpdatedProject.description,
    categories: localUpdatedProject.categories,
    plan: localUpdatedProject.plan,
    rewards: localUpdatedProject.rewards});
  }

  deleteProject(localProjectToDelete) {
    const projectEntryInFirebase = this.getProjectById(localProjectToDelete.$key);
    projectEntryInFirebase.remove();
  }

  markCompleted(selectedProject) {
    const projectInFirebase = this.getProjectById(selectedProject.$key);
    projectInFirebase.update({
      active: selectedProject.active
    });
  }

}
