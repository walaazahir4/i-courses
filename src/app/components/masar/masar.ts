import { Component, signal } from '@angular/core';
import { FeatureCard } from "../../shared/feature-card/feature-card";
import { Button } from "../../shared/button/button";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'icourse-masar',
  imports: [FeatureCard, Button, CommonModule],
  templateUrl: './masar.html',
})
export class Masar {
cards = [
  {img: './images/featureImg.jpg', },
  {img: './images/masar1.jpg', },
  {img: './images/masar2.jpg', },
  {img: './images/masar3.jpg', },
]


}
