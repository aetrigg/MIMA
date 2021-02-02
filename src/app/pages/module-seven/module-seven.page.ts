import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-module-seven',
  templateUrl: './module-seven.page.html',
  styleUrls: ['./module-seven.page.scss'],
})
export class ModuleSevenPage implements OnInit {

  hideMe1: boolean = false;
  hideMe2: boolean = false;

  constructor(private titleService: Title) { 
    this.titleService.setTitle('MIMA Module 7');
  }

  hide1() {
    this.hideMe1 = !this.hideMe1;
  }

  hide2() {
    this.hideMe2 = !this.hideMe2;
  }

  ngOnInit() {
  }

}
