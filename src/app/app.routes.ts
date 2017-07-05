/*
* Router configuration for the application
*
* */
import { Routes, RouterModule} from '@angular/router';

/*import components*/
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {MovieQueryComponent} from './movie-query/movie-query.component'
import {MovieDetailComponent} from './movie-detail/movie-detail.component';
import {MovieListComponent} from './movie-list/movie-list.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home/about',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent,
        children: [
          {
              path: 'about',
              component: AboutComponent
          },
          {
              path: 'movieQuery',
              component: MovieQueryComponent
          },
          {
            path: 'favorites',
            component: MovieListComponent
          }
        ]
    }
];

export const appRouterProviders = RouterModule.forRoot(routes);
