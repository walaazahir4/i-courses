import { Component, input } from '@angular/core';
import { Button } from "../button/button";

@Component({
  selector: 'icourse-ai-card',
  imports: [Button],
  templateUrl: './ai-card.html',
})
export class AiCard {
img = input<string>('./images/aiImg.jpg')
date = input<string>('.12 ابريل 2025')
title = input<string>(' الذكاء الاصطناعي في التصميم')
btnText = input<string>('قراءة')
desc = input<string>('إتقان فن بحث المستخدم للإبداع المنتجات التي تلبي احتياجات المستخدم حقا و توقعات. إتقان فن بحث المستخدم للإبداع المنتجات التي تلبي احتياجات المستخدم حقا و توقعات.إتقان فن بحث المستخدم للإبداع المنتجات التي تلبي احتياجات المستخدم حقا و توقعات. إتقان فن بحث المستخدم للإبداع المنتجات التي تلبي احتياجات المستخدم حقا و توقعات. إتقان فن بحث المستخدم للإبداع المنتجات التي تلبي احتياجات المستخدم حقا و توقعات.إتقان فن بحث المستخدم للإبداع المنتجات التي تلبي احتياجات المستخدم حقا و توقعات.')
}
