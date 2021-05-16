import { Component, OnInit } from '@angular/core';
import { Services, Works } from './home-page-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  servicesArray = Services;
  worksArray = Works;

  constructor() {}

  ngOnInit() {}
}
