import { Component, inject, input } from '@angular/core';
import { Button } from '../button/button';
import { ProgressBarModule } from 'primeng/progressbar';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'icourse-progress-card',
  imports: [Button, ProgressBarModule, CommonModule],
  templateUrl: './progress-card.html',
})
export class ProgressCard {
  img = input<string>('./images/imgProg.jpg');
  text = input<string>('مسار تصميم واجهات المستخدم');
  date = input<string>('12 ابريل 2025');
  desc = input<string>(
    'تعرف على المبادئ الأساسية لواجهة المستخدم تصميم والبدء في إنشاء جميل، التصاميم الوظيفية.',
  );
  progress = input<number>(60);
  variant = input<'pic' | 'video'>('pic');
  direction = input<'imgLeft' | 'imgRight'>('imgLeft')
  btnText = input<string>('قراءة');
  private sanitizer = inject(DomSanitizer);
  vid = input<string>('https://www.youtube.com/embed/PWuTLTFMtYw?si=yPPRgZ0kvXSD2Fek');

  youtubeUrl(): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.vid());
  }
}
