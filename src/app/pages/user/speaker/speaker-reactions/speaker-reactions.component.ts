import { Component, Input } from '@angular/core';
import { Conferencereaction } from 'src/app/modules/conferencereaction/services/conferencereaction.service';

@Component({
  selector: 'app-speaker-reactions',
  templateUrl: './speaker-reactions.component.html',
  styleUrl: './speaker-reactions.component.scss'
})
export class SpeakerReactionsComponent {
  @Input() reactions:Conferencereaction[]
}
