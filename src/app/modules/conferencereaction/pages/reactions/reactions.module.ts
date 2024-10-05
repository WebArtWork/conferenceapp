import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { ReactionsComponent } from './reactions.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: ReactionsComponent
	},
	{
		path: ':reaction_id',
		component: ReactionsComponent
	},
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CoreModule
	],
	declarations: [
		ReactionsComponent
	],
	providers: []

})

export class ReactionsModule { }
