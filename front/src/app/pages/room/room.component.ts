import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeerService } from 'src/app/peer.service';
import { WebSocketService } from 'src/app/web-socket.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  roomName: string;
  currentStream: any;
  userArray: Array<any> = [];

  constructor(private route:ActivatedRoute, private webSocketService:WebSocketService,
    private peerService:PeerService) {
    this.roomName = route.snapshot.paramMap.get('id')!;
  }

  ngOnInit(): void {
    this.initPeer();
    this.checkMediaDevices();
  }

  initPeer = () => {
    const {peer} = this.peerService;
    peer.on('open', (id: any) => {
      console.log('Id Peer: ', id)
    })
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
