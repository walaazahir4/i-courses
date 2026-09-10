import { Component, input } from '@angular/core';

@Component({
  selector: 'icourse-input',
  imports: [],
  templateUrl: './input.html',
})
export class Input {
 label = input<string>('First Name')
 placeholder = input<string>('Enter your name...')
 type = input<string>('text');
 disabled = input<boolean>(true)
}
