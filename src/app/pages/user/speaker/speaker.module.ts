import { NgModule } from '@angular/core';
import { CoreModule } from 'src/app/core/core.module';
import { SpeakerComponent } from './speaker.component';
import { Routes, RouterModule } from '@angular/router';
import { SpeakerSessionComponent } from './speaker-session/speaker-session.component';
import { SpeakerSessionsComponent } from './speaker-sessions/speaker-sessions.component';
import { SpeakerLinksComponent } from './speaker-links/speaker-links.component';
import { SpeakerPollsComponent } from './speaker-polls/speaker-polls.component';
import { SpeakerQnasComponent } from './speaker-qnas/speaker-qnas.component';

const routes: Routes = [
	{
		path: '',
		component: SpeakerComponent
	},
	{
		path: ':speaker_id',
		component: SpeakerComponent
	}
];

@NgModule({
	imports: [
		RouterModule.forChild(routes),
		CoreModule,

	],
	declarations: [
		SpeakerComponent,
 		SpeakerSessionComponent,
   		SpeakerSessionsComponent,
     	SpeakerLinksComponent,
      SpeakerPollsComponent,
      SpeakerQnasComponent,
	],
	providers: []

})

export class SpeakerModule { }
