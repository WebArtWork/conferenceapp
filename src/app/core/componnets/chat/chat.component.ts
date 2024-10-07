import { Component, Input } from '@angular/core';
import { Conferencemessage } from 'src/app/modules/conferencemessage/services/conferencemessage.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.scss',
})
export class ChatComponent {
  @Input() messages:Conferencemessage[]
}
