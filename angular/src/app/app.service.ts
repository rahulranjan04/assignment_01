import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable()
export class AppService {

constructor(private http: HttpClient) { }


url = `${'http://localhost:9002/airlines'}`;

 doGet(){
return this.http.get(this.url);
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
this.url = `${this.url +'/fare/' + originpath}`;
this.http.get(this.url);
}
}
