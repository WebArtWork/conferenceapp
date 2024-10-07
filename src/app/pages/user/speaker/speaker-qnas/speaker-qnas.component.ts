import { Component, Input } from '@angular/core';
import { Conferenceqna } from 'src/app/modules/conferenceqna/services/conferenceqna.service';

@Component({
  selector: 'app-speaker-qnas',
  templateUrl: './speaker-qnas.component.html',
  styleUrl: './speaker-qnas.component.scss'
})
export class SpeakerQnasComponent {
  @Input() qnas:Conferenceqna[]
}
