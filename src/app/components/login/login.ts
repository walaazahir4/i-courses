import { Component, input } from '@angular/core';
import { Input } from "../../shared/input/input";
import { Button } from "../../shared/button/button";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'icourse-login',
  imports: [Input, Button, RouterModule],
  templateUrl: './login.html',
})
export class Login {
hasAccount = input<boolean>(true)
}
