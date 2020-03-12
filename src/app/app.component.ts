import { Component, ViewChild, HostListener , OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {CommunicationService} from './communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  opened = true;
  @ViewChild('sidenav', { static: true }) sidenav: MatSidenav;

  constructor(private data: CommunicationService) {
  }
  ngOnInit() {
    this.data.currentMessage.subscribe(mess => this.sidenav.toggle())
    if (window.innerWidth < 599) {
      this.sidenav.fixedTopGap = 56;
      this.opened = false;
    } else {
      this.sidenav.fixedTopGap = 64;
      this.opened = true;
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (event.target.innerWidth < 599) {
      this.sidenav.fixedTopGap = 56;
    } else {
      this.sidenav.fixedTopGap = 64;
    }
  }

  isBiggerScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width < 768) {
      return true;
    } else {
      return false;
    }
  }
  toggle(event) {
    console.log(event);
    if (event) {
      this.sidenav.toggle();
    }
  }

}
