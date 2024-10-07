import { Component } from '@angular/core';
import { Conferencelink, ConferencelinkService } from 'src/app/modules/conferencelink/services/conferencelink.service';
import { Conferencesession, ConferencesessionService } from 'src/app/modules/conferencesession/services/conferencesession.service';
import { SpeakerSessionsComponent } from './speaker-sessions/speaker-sessions.component';
import { Router } from '@angular/router';
import { ModalService } from 'src/app/core/modules/modal/modal.service';
import { SpeakerLinksComponent } from './speaker-links/speaker-links.component';
import { Conferencecomment, ConferencecommentService } from 'src/app/modules/conferencecomment/services/conferencecomment.service';
import { CommentComponent } from 'src/app/modals/comment/comment.component';
import { Conferencemessage, ConferencemessageService } from 'src/app/modules/conferencemessage/services/conferencemessage.service';
import { Conferencenote, ConferencenoteService } from 'src/app/modules/conferencenote/services/conferencenote.service';
import { SpeakerPollsComponent } from './speaker-polls/speaker-polls.component';
import { Conferencepoll, ConferencepollService } from 'src/app/modules/conferencepoll/services/conferencepoll.service';
import { SpeakerQnasComponent } from './speaker-qnas/speaker-qnas.component';
import { ConferenceqnaService } from 'src/app/modules/conferenceqna/services/conferenceqna.service';
@Component({
	templateUrl: './speaker.component.html',
	styleUrls: ['./speaker.component.scss'],
})
export class SpeakerComponent {

	sessions:Conferencesession[] = this._ss.conferencesessions;
	sessionId = this._router.url.includes('/speaker/') ? this._router.url.replace('/speaker/', ''): '';
	
	session=this.sessionId
		?this.sessions.find(item => item._id === this.sessionId) || {} as Conferencesession
		:{} as Conferencesession
	
	links:Conferencelink[]=this.sessionId
		?this._linkService.conferencelinks.filter(item=>item.session===this.sessionId) || []
		:[]

	comments:Conferencecomment[]=this.sessionId
		?this._commentService.conferencecomments.filter(item=>item.session===this.sessionId) || []
		:[]

	messages:Conferencemessage[]=this.sessionId
		?this._messageService.conferencemessages.filter(item=>item.session===this.sessionId) || []
		:this._messageService.conferencemessages

	notes:Conferencenote[]=this.sessionId
		?this._noteService.conferencenotes.filter(item=>item.session===this.sessionId) || []
		:this._noteService.conferencenotes

	polls:Conferencepoll[]=this.sessionId
		?this._pollService.conferencepolls.filter(item=>item.session===this.sessionId) || []
		:[]

	qnas:Conferencepoll[]=this.sessionId
		?this._qnaService.conferenceqnas.filter(item=>item.session===this.sessionId) || []
		:[]

	constructor(
		private _pollService:ConferencepollService,
		private _qnaService:ConferenceqnaService,
		private _commentService:ConferencecommentService,
		private _messageService:ConferencemessageService,
		private _noteService:ConferencenoteService,
		private _linkService:ConferencelinkService,
		private _ss: ConferencesessionService,
		private _modal: ModalService,
		private _router: Router
	){}

	OpenModalLinks():void{
		this._modal.show({
			component:SpeakerLinksComponent,
			links:this.links
		  });
	}

	OpenModalComment():void{
		this._modal.show({
			component:CommentComponent,
			comments:this.comments
		  });	
	}

	OpenModalPoll():void{
		this._modal.show({
			component:SpeakerPollsComponent,
			polls:this.polls
		  });	
	}

	OpenModalQna():void{
		this._modal.show({
			component:SpeakerQnasComponent,
			qnas:this.qnas
		  });	
	}
}