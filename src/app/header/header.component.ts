import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  tabClicked: number = 1;
  @Output() tabClick= new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  onTabChange(tab: number) {
    this.tabClick.emit(tab);
  }
}
