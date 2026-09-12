import { Component } from '@angular/core';
import { Hero } from "../../components/hero/hero";
import { Masar } from "../../components/masar/masar";
import { Why } from "../../components/why/why";
import { About } from "../../components/about/about";
import { Ready } from "../../components/ready/ready";
import { Feedback } from "../../components/feedback/feedback";

@Component({
  selector: 'icourse-landing-page',
  imports: [Hero, Masar, Why, About, Ready, Feedback],
  templateUrl: './landing-page.html',
})
export class LandingPage {

}
