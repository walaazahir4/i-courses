import { Routes } from '@angular/router';
import { Test } from './components/test/test';
import { Layout } from './layout/layout/layout';
import { Error } from './components/error/error';
import { LandingPage } from './pages/landing-page/landing-page';
import { Courses } from './components/masar/courses/courses';

export const routes: Routes = [
     {
    path: '',
    component: Layout,
    children: [
      { path: '', component: LandingPage },
      { path: 'courses', component: Courses }
    ]
  },
    {path: '', component: Layout},
    {path: 'test', component: Test},
    {path: 'layout', component: Layout},
    {path: '**', component: Error}
];
