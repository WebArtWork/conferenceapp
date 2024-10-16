import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { QuestionsComponent } from './questions.component';
import { Routes, RouterModule } from '@angular/router';
import { LikesPipe } from 'src/app/core/pipes/likes.pipe';
import { DislikesPipe } from 'src/app/core/pipes/dislikes.pipe';

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
		CoreModule,
		LikesPipe,
		DislikesPipe
	],
	declarations: [
		QuestionsComponent,

	],
	providers: []

})

export class QuestionsModule { }
