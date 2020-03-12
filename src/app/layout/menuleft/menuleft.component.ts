import {Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-menuleft',
  templateUrl: './menuleft.component.html',
  styleUrls: ['./menuleft.component.css']
})
export class MenuleftComponent implements OnInit {
  opened = true;
  constructor() { }

  ngOnInit(): void {
  }

}
