import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'icourse-button',
  imports: [CommonModule],
  templateUrl: './button.html',
})
export class Button {
size = input<'large' | 'medium' | 'small'>('large')
variant = input<'primary' | 'secondary'>('primary')
disabled = input<boolean>(false)
icon = input<boolean>(false)
iconName = input<string>('user')
 text = input<string>('Button')
}
