import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { QuestionsComponent } from './questions.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: QuestionsComponent
	},
	{
		path: ':question_id',
		component: QuestionsComponent
	},
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CoreModule
	],
	declarations: [
		QuestionsComponent
	],
	providers: []

})

export class QuestionsModule { }
