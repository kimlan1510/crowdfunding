import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { ProjectService } from '../project.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.css']
  // providers: [ProjectService]
})
export class CategoriesListComponent implements OnInit {
  selectedcategory: string;
  // projects: FirebaseListObservable<any[]>;
  categories = [
    { value: 'Art', display: 'Art'},
    { value: 'Design', display: 'Design'},
    { value: 'Food', display: 'Food'},
    { value: 'Games', display: 'Games'},
    { value: 'Music', display: 'Music'},
    { value: 'Technology', display: 'Technology'}
  ];

  constructor(private router: Router) { }

  ngOnInit() {
    // this.projects = this.projectService.getProjects();
  }

  goToCategoryPage(selectedCategory){
    this.router.navigate(['explore', selectedCategory]);
  }

}
