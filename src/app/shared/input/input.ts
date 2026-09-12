import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'icourse-input',
  imports: [CommonModule],
  templateUrl: './input.html',
})
export class Input {
 label = input<string>('First Name')
 placeholder = input<string>('Enter your name...')
 inputType = input<string>('text'); 
 disabled = input<boolean>(false)
 leftIcon = input<boolean>(false)
 rightIcon = input<boolean>(false)
 leftIconName = input<string>('user')
 rightIconName = input<string>('heart')
 error = input<boolean>(false)
 errorText = input<string>('This is your error');
 size = input<'large' | 'medium' | 'small'>('large');
 value = '';


}
