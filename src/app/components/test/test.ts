import { Component } from '@angular/core';
import { AiCard } from "../../shared/ai-card/ai-card";
import { Button } from "../../shared/button/button";
import { Input } from "../../shared/input/input";
import { PersonCard } from "../../shared/person-card/person-card";
import { ProgressCard } from "../../shared/progress-card/progress-card";
import { InfoCard } from "../../shared/info-card/info-card";
import { FeedbackCard } from "../../shared/feedback-card/feedback-card";
import { DataCard } from "../../shared/data-card/data-card";
import { FeatureCard } from "../../shared/feature-card/feature-card";
import { Login } from "../login/login";
import { WelcomeCard } from "../../shared/welcome-card/welcome-card";
import { AtomCard } from "../../shared/atom/atom-card/atom-card";
import { Courses } from '../masar/courses/courses';
import { Filter } from '../../shared/filter/filter';


@Component({
  selector: 'icourse-test',
  imports: [AiCard, Button, Input, PersonCard, ProgressCard, InfoCard, FeedbackCard, DataCard, FeatureCard, Login, WelcomeCard, AtomCard, Courses, Filter],
  templateUrl: './test.html',
})
export class Test {

}
