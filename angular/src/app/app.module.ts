import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirportComponent } from './app.airportcomponent';
import { AppStatsComponent } from './app.statscomponent';
import { AppMain } from './app.main';
import { HttpClientModule,HttpErrorResponse } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';


const appRoutes: Routes = [
   { path: 'Fare', component: AppComponent },
   { path: 'Airports', component: AirportComponent },
   { path: 'Stats', component: AppStatsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AirportComponent,
    AppStatsComponent,
    AppMain
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    Ng2OrderModule,
    NgxPaginationModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppMain]
})
export class AppModule { }
