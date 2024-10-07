import { Component, Input } from '@angular/core';
import { Conferencepoll } from 'src/app/modules/conferencepoll/services/conferencepoll.service';

@Component({
  selector: 'app-speaker-polls',
  templateUrl: './speaker-polls.component.html',
  styleUrl: './speaker-polls.component.scss'
})
export class SpeakerPollsComponent {
  @Input() polls:Conferencepoll[]
}
