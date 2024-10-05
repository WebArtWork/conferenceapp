import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { MessagesComponent } from './messages.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: MessagesComponent
	},
	{
		path: ':message_id',
		component: MessagesComponent
	},
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CoreModule
	],
	declarations: [
		MessagesComponent
	],
	providers: []

})

export class MessagesModule { }
