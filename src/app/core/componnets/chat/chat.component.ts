import { Component, Input } from '@angular/core';
import { Conferencemessage } from 'src/app/modules/conferencemessage/services/conferencemessage.service';
import { Conferencequestion } from 'src/app/modules/conferencequestion/services/conferencequestion.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {
  @Input({required:true}) type: "messages"|"questions"
  @Input() messages:Conferencemessage[]
  @Input() questions:Conferencequestion[]

  questionsLikeToggle:any={}

  LikeToggle(question_id:string,action:"like"|"dislike"){
    if(this.questionsLikeToggle[question_id] && this.questionsLikeToggle[question_id]===action){
      this.questionsLikeToggle[question_id]=''
    }else{
      this.questionsLikeToggle[question_id]=action
    }
  }
}

// type LikeToggleType="like"|"dislike"|""