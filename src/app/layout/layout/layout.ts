import { Component } from '@angular/core';
import { Navbar } from "../navbar/navbar";
import { Footer } from "../footer/footer";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'icourse-layout',
  imports: [Navbar, RouterOutlet, Footer],
  templateUrl: './layout.html',
})
export class Layout {

}
