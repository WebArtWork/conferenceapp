import { Component, Input } from '@angular/core';
import { Conferencecomment } from 'src/app/modules/conferencecomment/services/conferencecomment.service';
@Component({
	templateUrl: './comment.component.html',
	styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
	@Input() comments:Conferencecomment[]
}
