import { Component, input } from '@angular/core';
import { Input } from "../../shared/input/input";
import { Button } from "../../shared/button/button";

@Component({
  selector: 'icourse-signin',
  imports: [Input, Button],
  templateUrl: './signin.html',
})
export class Signin {
hasAccount = input<boolean>(true)

}
