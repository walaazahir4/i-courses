import { Component, input } from '@angular/core';

@Component({
  selector: 'icourse-person-card',
  imports: [],
  templateUrl: './person-card.html',
})
export class PersonCard {
img = input<string>('./images/person1.jpg')
name = input<string>('أوليفيا كيم ')
position = input<string>('خبير أنظمة التصميم ')
hrefLinkOne = input<string>('')
hrefLinkTwo = input<string>('')
hrefLinkThree = input<string>('')
desc = input<string>(' متخصصون في إنشاء قوالب قابله للتطوير مع المشاركه في أنظمة التصميم للمؤسسات المهمه مثل Microsoft .')
}
