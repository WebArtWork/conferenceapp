import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { ConferencesComponent } from './conferences.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
	path: '',
	component: ConferencesComponent
}];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CoreModule
	],
	declarations: [
		ConferencesComponent
	],
	providers: []

})

export class ConferencesModule { }
