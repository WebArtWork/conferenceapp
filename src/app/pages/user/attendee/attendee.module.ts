import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { AttendeeComponent } from './attendee.component';
import { Routes, RouterModule } from '@angular/router';
import { AttendeeLinksComponent } from './attendee-links/attendee-links.component';
import { AttendeeQnasComponent } from './attendee-qnas/attendee-qnas.component';
import { AttendeePollsComponent } from './attendee-polls/attendee-polls.component';
import { AttendeeReactionsComponent } from './attendee-reactions/attendee-reactions.component';

const routes: Routes = [{
	path: '',
	component: AttendeeComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CoreModule
	],
	declarations: [
		AttendeeComponent,
  		AttendeeLinksComponent,
    	AttendeeQnasComponent,
    	AttendeePollsComponent,
     	AttendeeReactionsComponent
	],
	providers: []

})

export class AttendeeModule { }
