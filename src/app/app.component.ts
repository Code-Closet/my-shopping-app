import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  selectedTab: number = 1;

  changeTab(tab: number){
    console.log("Tab No : "+tab);
    this.selectedTab = tab;
  }
}
