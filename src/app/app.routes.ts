import { Routes  } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectComponent } from './components/project/project.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LifeComponent } from './components/life/life.component';


export const routes: Routes = [
    {
        path: '',
        title: ' Abutair Portfolio ',
        component: HomepageComponent,
      },
      {
        path: 'about',
        title: ' About < Abutair Portfolio ',
        component: AboutComponent,
      },
      {
        path: 'project',
        title: 'Project < Abutair Portfolio',
        component: ProjectComponent,
      },
      {
        path: 'life',
        title: 'Life < Abutair Portfolio',
        component: LifeComponent,
      },
      { 
        path: '**',
        title:'App PageNot Found',
        component: PageNotFoundComponent 
    }
];
