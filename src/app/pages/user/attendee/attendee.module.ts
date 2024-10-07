import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { AttendeeComponent } from './attendee.component';
import { Routes, RouterModule } from '@angular/router';

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
		AttendeeComponent
	],
	providers: []

})

export class AttendeeModule { }
