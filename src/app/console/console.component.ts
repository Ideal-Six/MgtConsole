import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { Extras } from '../model/extras';
import { Taxi } from '../model/taxi';
import { Tractor } from '../model/tractor';
import { Chat } from '../model/chat';
import { Complain } from '../model/complain';
import { Galireq } from '../model/galireq';
import { Lightbulb } from '../model/lightbulb';
import { Trashpoint } from '../model/trashpoint';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {

  items: Observable<any[]>;

  alert: string;  
  taxis: Array<Taxi>;
  chats: Array<Chat>;
  complains: Array<Complain>;
  galireqs:Array<Galireq>;
  lightbulbs:Array<Lightbulb>;
  news:string;
  tractors: Array<Tractor>;
  trashpoints: Array<Trashpoint>;

  constructor(public db: AngularFireDatabase) { 
    this.items = db.list('/minuwangoda').valueChanges();
    
  }

  ngOnInit() {
    this.items.forEach(element => {
      // console.log(element[1]);
      // element.forEach(data => {
      //   console.log(data);
      // });
      console.log('\n---------------------------------------------------');

      this.alert = element[0];
      
      let taxiElements:Observable<any> = element[1];
      this.getTaxiList(taxiElements);

      let chatElements:Observable<any> = element[2];
      this.getChatList(chatElements);

      let complainElements:Observable<any> = element[3];
      this.getComplainList(complainElements);

      let galireqElements:Observable<any> = element[4];
      this.getGalireqList(galireqElements);
      
      let lightbulbElements:Observable<any> = element[5];
      this.getLightbulbList(lightbulbElements);

      this.news = element[6];

      let tractorElements:Observable<any> = element[8];
      this.getTractorList(tractorElements);
      
      let trashpointElements:Observable<any> = element[9];
      this.getTrashpointList(trashpointElements);
      
      console.log(this.taxis);
    });    
  }

  getTaxiList(taxiElements:Observable<any>){
    this.taxis = [];
    let keys = Object.keys(taxiElements);
    // console.log(taxiElements);
    // console.log(taxiElements['AAA-4904-සමන්ත කුමාර-0778654088'].extras.empty);
    keys.forEach(key => {
      let extras: Extras;
      if(taxiElements[key].extras){
        // console.log(taxiElements[key].extras.empty);
        extras = new Extras(taxiElements[key].extras.empty,taxiElements[key].extras.parcelled,0);
      }
      let taxi: Taxi = new Taxi(
        key,
        taxiElements[key].accuracy,
        taxiElements[key].altitude,
        taxiElements[key].bearing,
        taxiElements[key].complete,
        taxiElements[key].elapsedRealtimeNanos,
        extras,
        taxiElements[key].fromMockProvider,
        taxiElements[key].latitude,
        taxiElements[key].longitude,
        taxiElements[key].provider,
        taxiElements[key].speed,
        taxiElements[key].time
      );
      this.taxis.push(taxi);
    });
  }

  getTractorList(tractorElements:Observable<any>){
    this.tractors = [];
    let keys = Object.keys(tractorElements);
    keys.forEach(key => {
      let extras: Extras;
      if(tractorElements[key].extras){
        extras = new Extras(tractorElements[key].extras.empty,
          tractorElements[key].extras.parcelled,0);
      }
      let tractor: Tractor = new Tractor(
        key,
        tractorElements[key].accuracy,
        tractorElements[key].altitude,
        tractorElements[key].bearing,
        tractorElements[key].complete,
        tractorElements[key].elapsedRealtimeNanos,
        extras,
        tractorElements[key].fromMockProvider,
        tractorElements[key].latitude,
        tractorElements[key].longitude,
        tractorElements[key].provider,
        tractorElements[key].speed,
        tractorElements[key].time
      );
      this.tractors.push(tractor);
    });
  }

  getLightbulbList(lightbulbElements:Observable<any>){
    this.lightbulbs = [];
    let keys = Object.keys(lightbulbElements);
    keys.forEach(key => {
      let extras: Extras;
      if(lightbulbElements[key].extras){
        extras = new Extras(lightbulbElements[key].extras.empty,
          lightbulbElements[key].extras.parcelled,lightbulbElements[key].extras.size);
      }
      let lightbulb: Lightbulb = new Lightbulb(
        key,
        lightbulbElements[key].accuracy,
        lightbulbElements[key].altitude,
        lightbulbElements[key].bearing,
        lightbulbElements[key].bearingAccuracyDegrees,
        lightbulbElements[key].complete,
        lightbulbElements[key].elapsedRealtimeNanos,
        extras,
        lightbulbElements[key].fromMockProvider,
        lightbulbElements[key].latitude,
        lightbulbElements[key].longitude,
        lightbulbElements[key].provider,
        lightbulbElements[key].speed,
        lightbulbElements[key].speedAccuracyMetersPerSecond,
        lightbulbElements[key].time,
        lightbulbElements[key].verticalAccuracyMeters
      );
      this.lightbulbs.push(lightbulb);
    });
  }

  getTrashpointList(trashpointElements:Observable<any>){
    this.trashpoints = [];
    let keys = Object.keys(trashpointElements);
    keys.forEach(key => {
      let extras: Extras;
      if(trashpointElements[key].extras){
        extras = new Extras(trashpointElements[key].extras.empty,
          trashpointElements[key].extras.parcelled,0);
      }
      let trashpoint: Trashpoint = new Trashpoint(
        key,
        trashpointElements[key].accuracy,
        trashpointElements[key].altitude,
        trashpointElements[key].bearing,
        trashpointElements[key].complete,
        trashpointElements[key].elapsedRealtimeNanos,
        extras,
        trashpointElements[key].fromMockProvider,
        trashpointElements[key].latitude,
        trashpointElements[key].longitude,
        trashpointElements[key].provider,
        trashpointElements[key].speed,
        trashpointElements[key].time
      );
      this.trashpoints.push(trashpoint);
    });
  }

  getChatList(chatElements:Observable<any>){
    this.chats = [];
    let keys = Object.keys(chatElements);
    keys.forEach(key => {
      let chat: Chat = new Chat(
        key,
        chatElements[key].messageText,
        chatElements[key].messageTime,        
      );
      this.chats.push(chat);
    });
  }

  getComplainList(complainElements:Observable<any>){
    this.complains = [];
    let keys = Object.keys(complainElements);
    keys.forEach(key => {
      let complain: Complain = new Complain(
        key,
        complainElements[key].compl,
        complainElements[key].name, 
        complainElements[key].num,        
      );
      this.complains.push(complain);
    });
  }

  getGalireqList(galireqElements:Observable<any>){
    this.galireqs = [];
    let keys = Object.keys(galireqElements);
    keys.forEach(key => {
      let galireq: Galireq = new Galireq(
        key,
        galireqElements[key].addr,
        galireqElements[key].name, 
        galireqElements[key].num,        
      );
      this.galireqs.push(galireq);
    });
  }

}
