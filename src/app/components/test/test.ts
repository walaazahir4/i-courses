import { Component } from '@angular/core';
import { AiCard } from "../../shared/ai-card/ai-card";
import { Button } from "../../shared/button/button";
import { Input } from "../../shared/input/input";

@Component({
  selector: 'icourse-test',
  imports: [AiCard, Button, Input],
  templateUrl: './test.html',
})
export class Test {

}
