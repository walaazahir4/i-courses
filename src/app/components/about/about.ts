import { Component } from '@angular/core';
import { PersonCard } from '../../shared/person-card/person-card';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'icourse-about',
  imports: [PersonCard, CommonModule],
  templateUrl: './about.html',
})
export class About {
 currentPage = 0;
  pageSize = 4;
currentIndex = 0;

  cards = [
    {
      img: './images/person1.jpg',
      name: 'أوليفيا كيم',
      position: 'خبير أنظمة التصميم',
      desc: 'متخصصون في إنشاء قوالب قابله للتطوير مع المشاركه في أنظمة التصميم للمؤسسات المهمه مثل Microsoft.',
    },
    {
      img: './images/person2.jpg',
      name: 'أوليفيا كيم',
      position: 'خبير أنظمة التصميم',
      desc: 'متخصصون في إنشاء قوالب قابله للتطوير مع المشاركه في أنظمة التصميم للمؤسسات المهمه مثل Microsoft.',
    },
    {
      img: './images/person3.jpg',
      name: 'أوليفيا كيم',
      position: 'خبير أنظمة التصميم',
      desc: 'متخصصون في إنشاء قوالب قابله للتطوير مع المشاركه في أنظمة التصميم للمؤسسات المهمه مثل Microsoft.',
    },
    {
      img: './images/person4.jpg',
      name: 'أوليفيا كيم',
      position: 'خبير أنظمة التصميم',
      desc: 'متخصصون في إنشاء قوالب قابله للتطوير مع المشاركه في أنظمة التصميم للمؤسسات المهمه مثل Microsoft.',
    },
    {
      img: './images/person1.jpg',
      name: 'أوليفيا كيم',
      position: 'خبير أنظمة التصميم',
      desc: 'متخصصون في إنشاء قوالب قابله للتطوير مع المشاركه في أنظمة التصميم للمؤسسات المهمه مثل Microsoft.',
    },
     {
      img: './images/person3.jpg',
      name: 'أوليفيا كيم',
      position: 'خبير أنظمة التصميم',
      desc: 'متخصصون في إنشاء قوالب قابله للتطوير مع المشاركه في أنظمة التصميم للمؤسسات المهمه مثل Microsoft.',
    },
     {
      img: './images/person3.jpg',
      name: 'أوليفيا كيم',
      position: 'خبير أنظمة التصميم',
      desc: 'متخصصون في إنشاء قوالب قابله للتطوير مع المشاركه في أنظمة التصميم للمؤسسات المهمه مثل Microsoft.',
    },
  ];

 get visibleCards() {
  return this.cards.slice(
    this.currentIndex,
    this.currentIndex + this.pageSize
  );
}

nextPage() {
  if (this.currentIndex < this.cards.length - this.pageSize) {
    this.currentIndex++;
  }
}

previousPage() {
  if (this.currentIndex > 0) {
    this.currentIndex--;
  } }

}
