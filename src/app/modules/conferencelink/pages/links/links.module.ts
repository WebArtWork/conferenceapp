import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { LinksComponent } from './links.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: '',
		component: LinksComponent
	},
	{
		path: ':link_id',
		component: LinksComponent
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes), CoreModule],
	declarations: [LinksComponent],
	providers: []
})
export class LinksModule {}
