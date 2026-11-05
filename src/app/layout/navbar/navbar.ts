import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Input } from "../../shared/input/input";
import { Button } from "../../shared/button/button";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'icourse-navbar',
  imports: [CommonModule, Input, Button, RouterModule],
  templateUrl: './navbar.html',
})
export class Navbar {
  isLoggedIn = signal(false);
}
