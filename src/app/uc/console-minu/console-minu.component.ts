import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';
import { Complain } from 'src/app/model/complain';

@Component({
  selector: 'app-console-minu',
  templateUrl: './console-minu.component.html',
  styleUrls: ['./console-minu.component.css']
})
export class ConsoleMinuComponent implements OnInit {

  complainItems: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.complainItems = db.list('/minuwangoda/complain').valueChanges();
    
  }

  ngOnInit() {    
    this.complainItems.forEach(element => {
      console.log(element);
    });

  }

}
