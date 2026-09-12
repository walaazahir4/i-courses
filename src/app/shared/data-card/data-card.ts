import { Component, input } from '@angular/core';
import { Button } from "../button/button";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'icourse-data-card',
  imports: [Button, CommonModule],
  templateUrl: './data-card.html',
})
export class DataCard {
img = input<string>('./images/imgData.jpg')
price = input<string>('30 $')
numberOfRate = input<number>(4.5)
number = input<number>(22)
status = input<string>('جديد')
time = input<number>(10)
level = input<number>(20)
lec = input<string>('كل المستويات')
desc = input<string>('تعرف على المبادئ الأساسية لتجربة المستخدم تصميم والبدء في إنشاء جميل تعرف على تعرف على المبادئ الأساسية لتجربة لتجربة المستخدم تصميم ')
title = input<string>('تعلم احتراف ال UX من الصفر تعلم احتراف ال  UX من الصفر تعلم احتراف')
instructor = input<string>('محمد سالم')
lastUpdate = input<string>('  20 ابريل 2025 ');

type = input<'small' | 'large'>('small');
paginate = input<boolean>(false);
}
