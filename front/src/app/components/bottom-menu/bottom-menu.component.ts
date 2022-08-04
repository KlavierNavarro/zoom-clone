import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-menu',
  templateUrl: './bottom-menu.component.html',
  styleUrls: ['./bottom-menu.component.scss']
})
export class BottomMenuComponent implements OnInit {
  menu:Array<any> = [
    {name: 'Mute', icon: 'uil uil-microphone'},
    {name: 'Home', icon: 'uil uil-home'},
    {name: 'Share', icon: 'uil uil-share'}
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
