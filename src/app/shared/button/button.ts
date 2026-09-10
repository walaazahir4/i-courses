import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'icourse-button',
  imports: [CommonModule],
  templateUrl: './button.html',
})
export class Button {
size = input<'large' | 'medium' | 'small'>('large');
// variant = input<'primary' | 'secondary'>('primary');
variant = input<'primary' | 'secondary' | 'secondaryWithIcons'>('primary');
disabled = input<boolean>(false);
icon = input<boolean>(false);
iconName = input<string>('user');
iconRight = input<boolean>(false);
iconRightName = input<string>('user');
 text = input<string>('Button');
 twoIcons = input<boolean>(false);
}
