import { Component,OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx';
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
term: any;

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


queryFieldSearch: FormControl = new FormControl();

 ngOnInit() {

this.appService.doGet(this.p).subscribe(data => this.allairresults = data);

this.queryFieldSearch.valueChanges.debounceTime(1000).subscribe(() => {
if ( this.searchAirport !== undefined){
this.appService.doGetSearch(this.searchAirport).subscribe(data => this.allairresults= data);
}
});

}

getServerData()
{
this.appService.doGet(this.p).subscribe(data => this.allairresults = data);
}

}
