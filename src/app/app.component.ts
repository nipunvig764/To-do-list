import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
require('firebase/auth');
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyD4DU8OQcUcVUbw0xJaKEg-5ONxc9_Ig-U",
      authDomain: "example-1dec4.firebaseapp.com",
    });
  }

  // onServerAdded(serverdata:{serverName:string,serverContent:string}){
  //   this.serverElements.push({
  //     type:'server',
  //     name:serverdata.serverName,
  //     content:serverdata.serverContent
  //   });
  // }
  // onBlueprintAdded(serverData:{serverName:string,serverContent:string}){
  //   this.serverElements.push({
  //     type:'blueprint',
  //     name:serverData.serverName,
  //     content:serverData.serverContent
  //   });
  // }
}
