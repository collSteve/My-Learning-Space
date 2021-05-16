import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from "./home";
import { LearningMaterialMainComponent } from './learning-material-main';
import { ProjectsMainComponent } from './projects-main';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'learning_materials_main', component: LearningMaterialMainComponent },
    { path: 'project_main', component: ProjectsMainComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);