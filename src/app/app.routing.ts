import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent }   from './home/home.component';
import { AboutComponent }   from './about/about.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailComponent} from './project-detail/project-detail.component';
import { AdminComponent }   from './admin/admin.component';
import { NewProjectComponent }   from './new-project/new-project.component';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { CategoryProjectsComponent } from './category-projects/category-projects.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'projects',
    component: ProjectListComponent
  },
  {
    path: 'projects/:id',
    component: ProjectDetailComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'new-project',
    component: NewProjectComponent
  },
  {
    path: 'explore',
    component: CategoriesListComponent
  },
  {
    path: 'explore/:category',
    component: CategoryProjectsComponent
  }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
