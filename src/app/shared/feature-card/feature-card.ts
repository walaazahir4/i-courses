import { Component, input } from '@angular/core';
import { Button } from "../button/button";

@Component({
  selector: 'icourse-feature-card',
  imports: [Button],
  templateUrl: './feature-card.html',
})
export class FeatureCard {
img = input<string>('./images/featureImg.jpg');
title = input<string>('طرق بحث UX ')
status = input<string>('متوسط')
desc = input<string>('إتقان فن بحث المستخدم للإبداع المنتجات التي تلبي احتياجات المستخدم حقا و توقعات.');
price = input<string>('150$')
numWeeks = input<number>(8)
numLesson = input<number>(32)
btnText = input<string>('سجل الان')
}
