import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { NotesComponent } from './notes.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: NotesComponent
	},
	{
		path: ':note_id',
		component: NotesComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CoreModule
	],
	declarations: [
		NotesComponent
	],
	providers: []

})

export class NotesModule { }
