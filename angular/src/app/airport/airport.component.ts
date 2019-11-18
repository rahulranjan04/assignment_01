import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx';
import { AppService } from '../service/app.service';


@Component({
  selector: 'app-root',
  templateUrl: './airport.component.html',
  styleUrls: ['../app.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'],
  providers: [AppService]
})


export class AirportComponent implements OnInit {

p: number = 1;
allAirResults: any;
searchAirport: string;

searchAirportInput: FormControl = new FormControl();

constructor(private appService: AppService) {
this.appService = appService;
}


key: string = 'name';
reverse: boolean = false;
sort(key) {
this.key = key;
this.reverse = !this.reverse;
}



ngOnInit() {
this.appService.doGet(this.p).subscribe(data => this.allAirResults = data);

this.searchAirportInput.valueChanges.debounceTime(1000).subscribe(() => {
if (this.searchAirport !== undefined) {
this.appService.doGetSearch(this.searchAirport).subscribe(data => this.allAirResults = data);
}
});
}

getServerData() {
this.appService.doGet(this.p).subscribe(data => this.allAirResults = data);
}
}
