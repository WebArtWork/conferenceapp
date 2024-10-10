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
@Component({
	templateUrl: './attendee.component.html',
	styleUrls: ['./attendee.component.scss']
})
export class AttendeeComponent {

	messages:Conferencemessage[]=this._messageService.conferencemessages || []
	notes:Conferencenote[]=this._noteService.conferencenotes || []
	questions:Conferencequestion[]=this._questionService.conferencequestions
	polls:Conferencepoll[]=this._pollService.conferencepolls || []
	qnas:Conferenceqna[]=this._qnaService.conferenceqnas || []
	links:Conferencelink[]=this._linkService.conferencelinks || []
	comments:Conferencecomment[]=this._commentService.conferencecomments || []
	reactions:Conferencereaction[]=this._reactionService.conferencereactions || []

	constructor(
		private _messageService:ConferencemessageService,
		private _noteService:ConferencenoteService,
		private _questionService:ConferencequestionService,
		private _reactionService:ConferencereactionService,
		private _linkService:ConferencelinkService,
		private _pollService:ConferencepollService,
		private _qnaService:ConferenceqnaService,
		private _commentService:ConferencecommentService,
		private _modal: ModalService,
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
}
