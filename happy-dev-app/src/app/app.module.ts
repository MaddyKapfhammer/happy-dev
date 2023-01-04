import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TimeTrackerComponent } from './time-tracker/time-tracker.component';
import { ToDoComponent } from './to-do/to-do.component';
import { HappinessTrackerComponent } from './happiness-tracker/happiness-tracker.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    TimeTrackerComponent,
    ToDoComponent,
    HappinessTrackerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }