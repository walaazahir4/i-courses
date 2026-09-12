import { Component } from '@angular/core';
import { InfoCard } from '../../shared/info-card/info-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'icourse-why',
  imports: [InfoCard, CommonModule],
  templateUrl: './why.html',
})
export class Why {
  cards = [
    {
      title: 'المحتوى العملي ',
      icon: 'book',
      desc: 'مشاريع العالم الحقيقي و تمارين تعدك للتصميم الاحترافي عمل.',
    },
    {
      title: ' التحديات الأسبوعية ',
      icon: 'crown',
      desc: 'اختبر مهاراتك بانتظام تصميم التحديات والحصول على ردود الفعل من الخبراء.',
    },
    {
      title: ' المجتمع النشط ',
      icon: 'users',
      desc: 'انضم إلى مجتمع نابض بالحياة من المصممين لمشاركة الأفكار والحصول على الإلهام.',
    },
    {
      title: ' المجتمع النشط ',
      icon: 'sitemap',
      desc: 'انضم إلى مجتمع نابض بالحياة من المصممين لمشاركة الأفكار والحصول على الإلهام.',
    },
  ];

  // title = input<string>(' المحتوى العملي ')
  // icon = input<string>('book')
  // desc = input<string>('مشاريع العالم الحقيقي و تمارين تعدك للتصميم الاحترافي عمل.')
}
