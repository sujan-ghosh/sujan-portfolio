import { Routes } from '@angular/router';

import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Experience } from './pages/experience/experience';
import { Skills } from './pages/skills/skills';
import { Projects } from './pages/projects/projects';
import { Education } from './pages/education/education';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'experience', component: Experience },
  { path: 'skills', component: Skills },
  { path: 'projects', component: Projects },
  { path: 'education', component: Education },
  { path: 'contact', component: Contact },
  { path: '**', redirectTo: '' },
];
