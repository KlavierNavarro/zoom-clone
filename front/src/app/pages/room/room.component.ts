import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  currentStream: any;
  userArray : Array<any> = [];
  constructor() { }

  ngOnInit(): void {
    this.checkMediaDevices();
  }

  checkMediaDevices = () => {
    if(navigator && navigator.mediaDevices) {
      navigator.mediaDevices.getUserMedia({
        audio: false,
        video: true
      }).then(stream => {
        this.currentStream = stream;
        this.addUserVideo(stream);
        this.addUserVideo(stream);
        this.addUserVideo(stream);
        this.addUserVideo(stream);
      }).catch(() => {
        console.log('Error: media devices permission required.')
      })
    }
    else {
      console.log('Error: no media devices found.')
    }
  }

  addUserVideo = (stream: any) => {
    this.userArray.push(stream);
  }
}
