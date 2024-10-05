import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { QnasComponent } from './qnas.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: QnasComponent
	},
	{
		path: ':qna_id',
		component: QnasComponent
	},

];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CoreModule
	],
	declarations: [
		QnasComponent
	],
	providers: []

})

export class QnasModule { }
