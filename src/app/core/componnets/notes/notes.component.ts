import { Component, Input } from '@angular/core';
import { Conferencenote } from 'src/app/modules/conferencenote/services/conferencenote.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.scss'
})
export class NotesComponent {
  @Input() notes:Conferencenote[]
}
