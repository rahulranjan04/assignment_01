import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class AppService {

constructor(private http: HttpClient) { }


url = `${'/airlines'}`;

 doGet(page){
return this.http.get(this.url+'/all?page='+page);
}

doGetFare(originpath,destination) {
let urlFare;
urlFare = `${this.url + '/fare/'+originpath +'/'+destination}`;
return this.http.get(urlFare);
}

doGetSearch(term) {
let urlSearch;
urlSearch = `${this.url +'/search?term='+term}`;
return this.http.get(urlSearch);
}


doGetAirports(originpath) {
 let urlAirport;
urlAirport = `${this.url +'/fare/' + originpath}`;
return this.http.get(urlAirport);
}

doGetStatistics() {
let urlStat;
urlStat = `${this.url+'/httpstatus'}`;
return this.http.get(urlStat);
}
}
