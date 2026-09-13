import { Component, input } from '@angular/core';

@Component({
  selector: 'icourse-atom-card',
  imports: [],
  templateUrl: './atom-card.html',
})
export class AtomCard {
text = input<string>(' تطبيق هاتف')
}
