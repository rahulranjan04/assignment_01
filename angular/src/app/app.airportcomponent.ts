import { Component,OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {AppService} from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.airportcomponent.html',
  styleUrls: ['./app.component.css', '../../node_modules/bootstrap/dist/css/bootstrap.min.css'],
  providers : [AppService]
})


export class AirportComponent implements OnInit {

  p: number = 1;
title = 'KLM';
apiRoot: 'http://localhost:9002/airlines';
allairresults: any;
searchAirport : string;

constructor(private appService: AppService) {
  this.appService=appService;
 }

  showSelected: boolean;
   hideSelected:boolean;
key: string = 'name';
reverse: boolean = false;
sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  queryField: FormControl = new FormControl();
 queryField1: FormControl = new FormControl(); 

 ngOnInit() {
 this.showSelected = true;
        this.hideSelected = false;
this.appService.doGet().subscribe(data => this.allairresults = data);
}


}
