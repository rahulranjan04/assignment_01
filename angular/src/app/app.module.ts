import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppFareComponent } from './farecomponent/app.farecomponent';
import { AirportComponent } from './airportcomponent/app.airportcomponent';
import { AppStatsComponent } from './statscomponent/app.statscomponent';
import { HomeComponent } from './homecomponent/homecomponent';
import { AppComponent } from './app.component';
import { HttpClientModule,HttpErrorResponse } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from 'angular-carousel';


const appRoutes: Routes = [
   { path: 'Fare', component: AppFareComponent },
   { path: 'Airports', component: AirportComponent },
   { path: 'Stats', component: AppStatsComponent },
   { path: 'Home', component: HomeComponent },
   {path: '', redirectTo: 'Home', pathMatch: 'full'},
   {path: '**', component: HomeComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AirportComponent,
    AppStatsComponent,
    AppFareComponent,
    HomeComponent
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
  bootstrap: [AppComponent]
})
export class AppModule { }
