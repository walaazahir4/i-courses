import { Component, input } from '@angular/core';
import { AtomCard } from "../atom/atom-card/atom-card";

@Component({
  selector: 'icourse-welcome-card',
  imports: [AtomCard],
  templateUrl: './welcome-card.html',
})
export class WelcomeCard {
img = input<string>('./images/wel1.jpg')
name = input<string>('أحمد')
EnterText = input<string>('ui')
}
