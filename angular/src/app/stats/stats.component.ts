import { Component,OnInit } from '@angular/core';
import { debounceTime, map } from 'rxjs/operators';
import {AppService} from '../service/app.service';


@Component({
  selector: 'app-root',
  templateUrl: './stats.component.html',
  styleUrls: ['../app.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'],
  providers : [AppService]
})

export class StatsComponent implements OnInit {
statistics:any;

constructor(private appService: AppService) {
this.appService=appService;
}

ngOnInit() {
this.appService.doGetStatistics().subscribe(data => this.statistics = data);
}

doGetStatistics(){
this.appService.doGetStatistics().subscribe(data => this.statistics = data);
}

}
