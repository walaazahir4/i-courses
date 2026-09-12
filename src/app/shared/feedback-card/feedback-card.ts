import { Component, input } from '@angular/core';

@Component({
  selector: 'icourse-feedback-card',
  imports: [],
  templateUrl: './feedback-card.html',
})
export class FeedbackCard {
img = input<string>('./images/person1.jpg')
desc = input<string>(' أساسيات تصميم واجهة المستخدم ')
name = input<string>('يوسف عمر')
content = input<string>('هذه الدورة غيرت تماما نهج التصميم. المشاريع العمليةساعدتني في بناء بروفايل فوجدت أول وظيفة تصميم لي في شركة ناشئة. كان المدرب داعما بشكل لا يصدق قدم ملاحظات مفصلة')
}
