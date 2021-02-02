import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-modules-list',
  templateUrl: './modules-list.page.html',
  styleUrls: ['./modules-list.page.scss'],
})
export class ModulesListPage implements OnInit {

  constructor(private titleService: Title) { 
    this.titleService.setTitle('MIMA Modules List');
  }

  ngOnInit() {
  }

}
