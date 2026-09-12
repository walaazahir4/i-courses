import { Component, signal } from '@angular/core';
import { FeatureCard } from "../../shared/feature-card/feature-card";
import { Button } from "../../shared/button/button";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'icourse-masar',
  imports: [FeatureCard, Button, CommonModule],
  templateUrl: './masar.html',
})
export class Masar {
showAll = signal(false);

cards = [
  {img: './images/featureImg.jpg', },
  {img: './images/masar1.jpg', },
  {img: './images/masar2.jpg', },
  {img: './images/masar3.jpg', },
  {img: './images/featureImg.jpg', },
  {img: './images/masar1.jpg', },
]

// img = input<string>('./images/featureImg.jpg');
// title = input<string>('طرق بحث UX ')
// status = input<string>('متوسط')
// desc = input<string>('إتقان فن بحث المستخدم للإبداع المنتجات التي تلبي احتياجات المستخدم حقا و توقعات.');
// price = input<string>('150$')
// numWeeks = input<number>(8)
// numLesson = input<number>(32)
// btnText = input<string>('سجل الان')
}
