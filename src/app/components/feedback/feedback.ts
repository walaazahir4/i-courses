import { Component, signal } from '@angular/core';
import { FeedbackCard } from '../../shared/feedback-card/feedback-card';
import { CommonModule } from '@angular/common';
import { Button } from '../../shared/button/button';

@Component({
  selector: 'icourse-feedback',
  imports: [FeedbackCard, CommonModule, Button],
  templateUrl: './feedback.html',
})
export class Feedback {
  showAll = signal(false);

  cards = [
    {
      img: './images/feed1.jpg',
      desc: 'أساسيات تصميم واجهة المستخدم ',
      name: 'يوسف عمر',
      content: '"هذه الدورة غيرت تماما نهج التصميم. المشاريع العملية ساعدتني في بناء بروفايل فوجدت أول وظيفة تصميم لي في شركة ناشئة. كان المدرب داعما بشكل لا يصدق و قدم ملاحظات مفصلة ".',
    },

       {
      img: './images/feed2.jpg',
      desc: 'أساسيات تصميم واجهة المستخدم ',
      name: 'يوسف عمر',
      content: '"هذه الدورة غيرت تماما نهج التصميم. المشاريع العملية ساعدتني في بناء بروفايل فوجدت أول وظيفة تصميم لي في شركة ناشئة. كان المدرب داعما بشكل لا يصدق و قدم ملاحظات مفصلة ".',
    },

       {
      img: './images/feed3.jpg',
      desc: 'أساسيات تصميم واجهة المستخدم ',
      name: 'يوسف عمر',
      content: '"هذه الدورة غيرت تماما نهج التصميم. المشاريع العملية ساعدتني في بناء بروفايل فوجدت أول وظيفة تصميم لي في شركة ناشئة. كان المدرب داعما بشكل لا يصدق و قدم ملاحظات مفصلة ".',
    },

       {
      img: './images/feed1.jpg',
      desc: 'أساسيات تصميم واجهة المستخدم ',
      name: 'يوسف عمر',
      content: '"هذه الدورة غيرت تماما نهج التصميم. المشاريع العملية ساعدتني في بناء بروفايل فوجدت أول وظيفة تصميم لي في شركة ناشئة. كان المدرب داعما بشكل لا يصدق و قدم ملاحظات مفصلة ".',
    },

  ];
}
