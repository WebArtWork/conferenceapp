import { Component, Input } from '@angular/core';
import { Conferencelink } from 'src/app/modules/conferencelink/services/conferencelink.service';

@Component({
  selector: 'app-speaker-links',
  templateUrl: './speaker-links.component.html',
  styleUrl: './speaker-links.component.scss'
})
export class SpeakerLinksComponent {
  @Input() links:Conferencelink[]
}
