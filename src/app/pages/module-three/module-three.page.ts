import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-module-three',
  templateUrl: './module-three.page.html',
  styleUrls: ['./module-three.page.scss'],
})
export class ModuleThreePage implements OnInit {

  hideMe1: boolean = false;
  hideMe2: boolean = false;
  hideMe3: boolean = false;
  hideMe4: boolean = false;
  hideMe5: boolean = false;

  constructor(private titleService: Title) {
    this.titleService.setTitle('MIMA Module 3');
   }


  hide1() {
    this.hideMe1 = !this.hideMe1;
  }

  hide2() {
    this.hideMe2 = !this.hideMe2;
  }

  hide3() {
    this.hideMe3 = !this.hideMe3;
  }

  hide4() {
    this.hideMe4 = !this.hideMe4;
  }

  hide5() {
    this.hideMe5 = !this.hideMe5;
  }

  ngOnInit() {
  }

}
