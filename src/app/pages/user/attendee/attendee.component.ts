import { Component } from '@angular/core';
import { ModalService } from 'src/app/core/modules/modal/modal.service';
import { CommentComponent } from 'src/app/modals/comment/comment.component';
import { Conferencecomment, ConferencecommentService } from 'src/app/modules/conferencecomment/services/conferencecomment.service';
import { Conferencelink, ConferencelinkService } from 'src/app/modules/conferencelink/services/conferencelink.service';
import { Conferencemessage, ConferencemessageService } from 'src/app/modules/conferencemessage/services/conferencemessage.service';
import { Conferencenote, ConferencenoteService } from 'src/app/modules/conferencenote/services/conferencenote.service';
import { Conferencepoll, ConferencepollService } from 'src/app/modules/conferencepoll/services/conferencepoll.service';
import { Conferenceqna, ConferenceqnaService } from 'src/app/modules/conferenceqna/services/conferenceqna.service';
import { Conferencequestion, ConferencequestionService } from 'src/app/modules/conferencequestion/services/conferencequestion.service';
import { Conferencereaction, ConferencereactionService } from 'src/app/modules/conferencereaction/services/conferencereaction.service';
import { AttendeeReactionsComponent } from './attendee-reactions/attendee-reactions.component';
import { Router } from '@angular/router';
import { Conference, ConferenceService } from 'src/app/modules/conference/services/conference.service';
import { Conferencesession, ConferencesessionService } from 'src/app/modules/conferencesession/services/conferencesession.service';
@Component({
	templateUrl: './attendee.component.html',
	styleUrls: ['./attendee.component.scss']
})
export class AttendeeComponent {
	conferenceId:string = this._router.url.includes('/attendee/') ? this._router.url.replace('/attendee/', '') : '';
	sessionId:string=''

	conferences:Conference[]=this._conferenceService.conferences || []
	sessions:Conferencesession[]=this.conferenceId
		?this._sessionsService.conferencesessions.filter(item=>item.conference===this.conferenceId)|| []
		:[]
	notes:Conferencenote[]=this._noteService.conferencenotes || []

	messages:Conferencemessage[]=[]
	questions:Conferencequestion[]=[]
	polls:Conferencepoll[]=[]
	qnas:Conferenceqna[]=[]
	links:Conferencelink[]=[]
	comments:Conferencecomment[]=[]
	reactions:Conferencereaction[]=[]

	constructor(
		private _conferenceService:ConferenceService,
		private _sessionsService:ConferencesessionService,
		private _noteService:ConferencenoteService,
		private _messageService:ConferencemessageService,
		private _questionService:ConferencequestionService,
		private _reactionService:ConferencereactionService,
		private _linkService:ConferencelinkService,
		private _pollService:ConferencepollService,
		private _qnaService:ConferenceqnaService,
		private _commentService:ConferencecommentService,
		private _modal: ModalService,
		private _router:Router
	){}

	OpenModalComment():void{
		this._modal.show({
			component:CommentComponent,
			comments:this.comments
		});	
	}

	OpenModalReaction():void{
		this._modal.show({
			component:AttendeeReactionsComponent,
			reactions:this.reactions
		});	
	}

	receiveSession(event:string){
		this.sessionId=event
		
		this.messages=this._messageService.conferencemessages.filter(item=>item.session===this.sessionId) || []
		this.questions=this._questionService.conferencequestions.filter(item=>item.session===this.sessionId) || []
		this.polls=this._pollService.conferencepolls.filter(item=>item.session===this.sessionId) || []
		this.qnas=this._qnaService.conferenceqnas.filter(item=>item.session===this.sessionId) || []
		this.links=this._linkService.conferencelinks.filter(item=>item.session===this.sessionId) || []
		this.comments=this._commentService.conferencecomments.filter(item=>item.session===this.sessionId) || []
		this.reactions=this._reactionService.conferencereactions.filter(item=>item.session===this.sessionId) || []
	}
}
