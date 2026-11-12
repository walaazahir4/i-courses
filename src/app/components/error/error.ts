import { Component } from '@angular/core';
import { Button } from "../../shared/button/button";
import { RouterModule } from '@angular/router';


@Component({
  selector: 'icourse-error',
  imports: [Button, RouterModule],
  templateUrl: './error.html',
})
export class Error {

}
