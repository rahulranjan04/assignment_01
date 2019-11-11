import { Component,OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {
  HttpClientModule,
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
  HttpParams
} from '@angular/common/http';
import "rxjs/Rx";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css', '../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})
export class AppComponent implements OnInit {
  title = 'KLM';
   apiRoot: 'http://localhost:9002/airlines';

   fare: any;
   airports: any;
   term: any;
   airresults: any;
   allairresults: any;


   originpath: string;
   destination: string;
   listdata: string;
   searchAirport : string;

  constructor(private http: HttpClient) {}

  results: any;
 queryField: FormControl = new FormControl();
 queryField1: FormControl = new FormControl();

  showSelected: boolean;
   hideSelected:boolean;
 

    ShowButton() {
        this.showSelected = true;
        this.hideSelected = false;
    }
    HideButton() {
        this.showSelected = false;
        this.hideSelected = true;
    }

  key: string = 'name';
  reverse: boolean = false;
  sort(key){
    this.key = key;
    this.reverse = !this.reverse;
  }

  p: number = 1;

 ngOnInit() {

     this.showSelected = false;
        this.hideSelected = true;
        
    this.queryField.valueChanges.debounceTime(2000).subscribe(() => {
     if(this.originpath!=undefined) 
     {
   const url = `${'http://localhost:9002/airlines/search?term='+ this.originpath}`;
    this.http.get(url).subscribe(response => this.term = response);
    }
}); 

    this.queryField1.valueChanges.debounceTime(1000).subscribe(() => {
       if(this.destination!=undefined) 
     {
   const url = `${'http://localhost:9002/airlines/search?term='+ this.destination}`;
    this.http.get(url).subscribe(response => this.term = response);
     }
}); 

 const url = `${'http://localhost:9002/airlines'}`;
    this.http.get(url).subscribe(response => this.allairresults = response);

  }


  doGet() {
    const url = `${'http://localhost:9002/airlines'}`;
    this.http.get(url).subscribe(response => this.results = response);
  }

  doGetFare() {
    const url = `${'http://localhost:9002/airlines/fare/'+ this.originpath +'/'+ this.destination}`;
    console.log(url);
    this.http.get(url).subscribe(response => this.fare = response);
  }

   doGetSearch() {
    const url = `${'http://localhost:9002/airlines/search?term='+ this.searchAirport}`;
    console.log(url);
    this.http.get(url).subscribe(response => this.allairresults = response);
  }

  doGetAirports() {
    const url = `${'http://localhost:9002/airlines/fare/'+ this.originpath}`;
    console.log(url);
    this.http.get(url).subscribe(response => this.airports = response);
  }




}
