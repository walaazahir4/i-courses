import { Routes } from '@angular/router';
import { Test } from './components/test/test';
import { Layout } from './layout/layout/layout';
import { Error } from './components/error/error';
import { LandingPage } from './pages/landing-page/landing-page';

export const routes: Routes = [
    {path: '', component: Layout},
    {path: 'test', component: Test},
    {path: 'landing-page', component: LandingPage},
    {path: '**', component: Error}
];
