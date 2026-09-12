import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Input } from "../../shared/input/input";
import { Button } from "../../shared/button/button";

@Component({
  selector: 'icourse-footer',
  imports: [CommonModule, Input, Button],
  templateUrl: './footer.html',
})
export class Footer {
icons = [
  {name: 'facebook'},
  {name: 'twitter'},
  {name: 'instagram'},
  {name: 'linkedin'},
]

lists = [
  {link: '', text: ' الصفحة الرئيسية '},
  {link: '', text: ' الدورات التدريبية '},
  {link: '', text: ' من نحن '},
  {link: '', text: ' المدربون '},
  {link: '', text: ' المدونة '},
  {link: '', text: ' الاتصال '}
]

supports = [
  
  {link: '', text: '  مركز المساعدة '},
  {link: '', text: '  الأسئلة الشائعة '},
  {link: '', text: '  المجتمع '},
  {link: '', text: '  الملاحظات  '},
  {link: '', text: '  شروط الخدمة  '},
  {link: '', text: '  سياسة الخصوصية  '}
]
}
