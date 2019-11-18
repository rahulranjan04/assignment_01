import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { FareComponent } from './fare/fare.component';
import { AirportComponent } from './airport/airport.component';
import { StatsComponent } from './stats/stats.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from 'angular-carousel';


const appRoutes: Routes = [
  { path: 'Fare', component: FareComponent },
  { path: 'Airports', component: AirportComponent },
  { path: 'Stats', component: StatsComponent },
  { path: 'Home', component: HomeComponent },
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AirportComponent,
    StatsComponent,
    FareComponent,
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
