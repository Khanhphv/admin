import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CommunicationService} from '../../communication.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() sidenav: any;
  @Output() messEvent = new EventEmitter<string>();
  mess
  constructor(private  data: CommunicationService) { }

  ngOnInit(): void {
    console.log(this.sidenav);
    this.data.currentMessage.subscribe(mess => this.mess = mess);
  }
  sendMess() {
    // this.messEvent.emit('alo');
    this.data.changeMessage('alo');
  }

}
