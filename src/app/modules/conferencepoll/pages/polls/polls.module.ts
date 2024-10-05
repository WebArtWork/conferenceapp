import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { PollsComponent } from './polls.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: PollsComponent
	},
	{
		path: ':poll_id',
		component: PollsComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CoreModule
	],
	declarations: [
		PollsComponent
	],
	providers: []

})

export class PollsModule { }
