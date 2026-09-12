import { Component, input } from '@angular/core';

@Component({
  selector: 'icourse-info-card',
  imports: [],
  templateUrl: './info-card.html',
})
export class InfoCard {
title = input<string>(' المحتوى العملي ')
icon = input<string>('book')
desc = input<string>('مشاريع العالم الحقيقي و تمارين تعدك للتصميم الاحترافي عمل.')
}
