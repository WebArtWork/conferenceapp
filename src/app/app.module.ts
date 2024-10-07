import { Conferencesession } from './modules/conferencesession/services/conferencesession.service';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Renderer2 } from '@angular/core';
// Core
import { GuestComponent } from './core/theme/guest/guest.component';
import { UserComponent } from './core/theme/user/user.component';
import { AppComponent } from './app.component';
import { CoreModule } from 'src/app/core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
// config
import { WacomModule, MetaGuard } from 'wacom';
import { environment } from 'src/environments/environment';
import { AuthenticatedGuard } from './core/guards/authenticated.guard';
import { GuestGuard } from './core/guards/guest.guard';
import { AdminsGuard } from './core/guards/admins.guard';
import { AlertModule } from './core/modules/alert/alert.module';
import { ModalModule } from './core/modules/modal/modal.module';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CommentComponent } from './modals/comment/comment.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: '/sign',
		pathMatch: 'full'
	},
	{
		path: '',
		canActivate: [GuestGuard],
		component: GuestComponent,
		children: [
			/* guest */
			{
				path: 'components',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Components'
					}
				},
				loadChildren: () =>
					import('./pages/guest/components/components.module').then(
						(m) => m.ComponentsModule
					)
			},
			{
				path: 'sign',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Sign'
					}
				},
				loadChildren: () =>
					import('./pages/guest/sign/sign.module').then(
						(m) => m.SignModule
					)
			}
		]
	},
	{
		path: '',
		canActivate: [AuthenticatedGuard],
		component: UserComponent,
		children: [
			/* user */
			{
				path: 'attendee',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Attendee'
					}
				},
				loadChildren: () => import('./pages/user/attendee/attendee.module').then(m => m.AttendeeModule)
			}, 
			{
				path: 'speaker',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Speaker'
					}
				},
				loadChildren: () => import('./pages/user/speaker/speaker.module').then(m => m.SpeakerModule)
			}, 
			{
				path: 'profile',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'My Profile'
					}
				},
				loadChildren: () =>
					import('./pages/user/profile/profile.module').then(
						(m) => m.ProfileModule
					)
			},
			{
				path: 'conferences',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Conferences'
					}
				},
				loadChildren: () =>
					import(
						'./modules/conference/pages/conferences/conferences.module'
					).then((m) => m.ConferencesModule)
			},
			{
				path: 'sessions',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Sessions'
					}
				},
				loadChildren: () =>
					import(
						'./modules/conferencesession/pages/sessions/sessions.module'
					).then((m) => m.SessionsModule)
			},
			{
				path: 'links',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Links'
					}
				},
				loadChildren: () =>
					import(
						'./modules/conferencelink/pages/links/links.module'
					).then((m) => m.LinksModule)
			},
			{
				path: 'comments',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Comments'
					}
				},
				loadChildren: () =>
					import(
						'./modules/conferencecomment/pages/comments/comments.module'
					).then((m) => m.CommentsModule)
			},
			{
				path: 'messages',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Messages'
					}
				},
				loadChildren: () =>
					import(
						'./modules/conferencemessage/pages/messages/messages.module'
					).then((m) => m.MessagesModule)
			},
			{
				path: 'notes',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Notes'
					}
				},
				loadChildren: () =>
					import(
						'./modules/conferencenote/pages/notes/notes.module'
					).then((m) => m.NotesModule)
			},
			{
				path: 'polls',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Polls'
					}
				},
				loadChildren: () =>
					import(
						'./modules/conferencepoll/pages/polls/polls.module'
					).then((m) => m.PollsModule)
			},
			{
				path: 'qnas',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Qnas'
					}
				},
				loadChildren: () =>
					import(
						'./modules/conferenceqna/pages/qnas/qnas.module'
					).then((m) => m.QnasModule)
			},
			{
				path: 'questions',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Questions'
					}
				},
				loadChildren: () =>
					import(
						'./modules/conferencequestion/pages/questions/questions.module'
					).then((m) => m.QuestionsModule)
			},
			{
				path: 'reactions',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Reactions'
					}
				},
				loadChildren: () =>
					import(
						'./modules/conferencereaction/pages/reactions/reactions.module'
					).then((m) => m.ReactionsModule)
			}
		]
	},
	{
		path: 'admin',
		canActivate: [AdminsGuard],
		component: UserComponent,
		children: [
			/* admin */
			{
				path: 'users',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Users'
					}
				},
				loadChildren: () =>
					import('./modules/user/pages/users/users.module').then(
						(m) => m.UsersModule
					)
			},
			{
				path: 'forms',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Forms'
					}
				},
				loadChildren: () =>
					import(
						'./modules/customform/pages/customforms/customforms.module'
					).then((m) => m.CustomformsModule)
			},
			{
				path: 'translates',
				canActivate: [MetaGuard],
				data: {
					meta: {
						title: 'Translates'
					}
				},
				loadChildren: () =>
					import(
						'./core/modules/translate/pages/translates/translates.module'
					).then((m) => m.TranslatesModule)
			}
		]
	},
	{
		path: '**',
		redirectTo: 'profile',
		pathMatch: 'full'
	}
];

@NgModule({
	declarations: [AppComponent, GuestComponent, UserComponent, CommentComponent],
	imports: [
		AlertModule,
		ModalModule,
		CoreModule,
		BrowserModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		WacomModule.forRoot({
			store: {},
			http: {
				url: environment.url
			},
			socket: environment.production,
			meta: {
				useTitleSuffix: true,
				defaults: {
					title: 'Web Art Work',
					titleSuffix: ' | Web Art Work',
					'og:image': 'https://webart.work/api/user/cdn/waw-logo.png'
				}
			},
			modal: {
				modals: {
					/* modals */
					comment: CommentComponent,
				}
			}
		}),
		RouterModule.forRoot(routes, {
			scrollPositionRestoration: 'enabled',
			preloadingStrategy: PreloadAllModules
		})
	],
	providers: [
		AuthenticatedGuard,
		GuestGuard,
		AdminsGuard,
		{
			provide: LocationStrategy,
			useClass: HashLocationStrategy
		}
	],
	bootstrap: [AppComponent]
})
export class AppModule {}
