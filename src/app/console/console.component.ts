import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.css']
})
export class ConsoleComponent implements OnInit {

  items: Observable<any[]>;

  constructor(public db: AngularFireDatabase) { 
    this.items = db.list('/minuwangoda').valueChanges();
    
  }

  ngOnInit() {
    this.items.forEach(element => {
      // console.log(element);
      element.forEach(data => {
        console.log(data);
      });
    });    
  }

  showItems(){
    
  }

}
