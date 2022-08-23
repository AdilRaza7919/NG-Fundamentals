import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { CreateEventComponent } from './events/create-event.component';
import { EventDetailsComponent } from './events/event-details/event-details.component';
import { EventsListComponent } from './events/events-list.component';
import { EventRouteActivator } from './events/event-details/event-route-activator.service';
import { EventsListResolver } from './events-list-resolver.service';

import { UserModule } from './user/user.module';

const routes: Routes = [
  { path: 'events/new', component: CreateEventComponent },
  { path: 'events', component: EventsListComponent },
  { path: 'events/:id', component: EventDetailsComponent },
  {path:'404',component: Error404Component},
   { path: '', redirectTo: '/events', pathMatch: 'full'},
   {
    path:'user',
    loadChildren:() =>import('./user/user.module')
    .then(m => m.UserModule)
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
