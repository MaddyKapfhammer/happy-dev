import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { TimeTrackerComponent } from './time-tracker/time-tracker.component';
import { ToDoComponent } from './to-do/to-do.component';
import { HappinessTrackerComponent } from './happiness-tracker/happiness-tracker.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'timer', component: TimeTrackerComponent},
  {path: 'happiness', component: HappinessTrackerComponent},
  {path: 'todo', component: ToDoComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [],
  imports: [
    [CommonModule], [RouterModule.forRoot(routes)],
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
