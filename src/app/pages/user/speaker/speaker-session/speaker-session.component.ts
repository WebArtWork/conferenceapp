import { Component, Input } from '@angular/core';
import { Conferencesession } from 'src/app/modules/conferencesession/services/conferencesession.service';

@Component({
  selector: 'app-speaker-session',
  templateUrl: './speaker-session.component.html',
  styleUrl: './speaker-session.component.scss'
})
export class SpeakerSessionComponent {
  @Input() session:Conferencesession

}
