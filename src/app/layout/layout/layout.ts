import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Footer } from "../footer/footer";
import { RouterOutlet } from '@angular/router';
import { LandingPage } from '../../pages/landing-page/landing-page';

@Component({
  selector: 'icourse-layout',
  imports: [Navbar, RouterOutlet, Footer, LandingPage],
  templateUrl: './layout.html',
})
export class Layout {

}
