import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import 'rxjs/Rx';
import { AppService } from '../service/app.service';


@Component({
  selector: 'app-root',
  templateUrl: './fare.component.html',
  styleUrls: ['../app.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'],
  providers: [AppService]
})

export class FareComponent implements OnInit {


fare: any;
term: any;
showSelected: boolean;

originpath: string;
destination: string;

originInput: FormControl = new FormControl();
destinationInput: FormControl = new FormControl();


constructor(private appService: AppService) {
this.appService = appService;
}

ngOnInit() {

this.showSelected = false;

this.originInput.valueChanges.debounceTime(1000).subscribe(() => {
if (this.originpath !== undefined) {
this.appService.doGetSearch(this.originpath).subscribe(data => this.term = data);
}
});

this.destinationInput.valueChanges.debounceTime(1000).subscribe(() => {
if (this.destination !== undefined) {
this.appService.doGetSearch(this.destination).subscribe(data => this.term = data);
}
});
}

doGetFares() {
this.appService.doGetFare(this.originpath, this.destination).subscribe(data => this.fare = data);
}

}
