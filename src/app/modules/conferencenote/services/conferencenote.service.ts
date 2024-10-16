import { inject, Injectable } from "@angular/core";
import { HelperService } from "src/app/core/services/helper.service";
import {
  AlertService,
  CoreService,
  HttpService,
  StoreService,
  CrudService,
  CrudDocument,
} from "wacom";

export interface Conferencenote extends CrudDocument {
  text: string;
  author:string;
  session:string;
}

@Injectable({
  providedIn: "root",
})
export class ConferencenoteService extends CrudService<Conferencenote> {
  _helper=inject(HelperService)
  
  conferencenotes: Conferencenote[] = [];

  notesBySessionId:Record<string,Conferencenote[]>={}
  setNotesBySessionId=this._helper.createParentIdToChildrenIds<Conferencenote[]>(this.notesBySessionId,this.conferencenotes,"session")

  constructor(
    _http: HttpService,
    _store: StoreService,
    _alert: AlertService,
    _core: CoreService
  ) {
    super(
      {
        name: "conferencenote",
      },
      _http,
      _store,
      _alert,
      _core
    );

    this.get().subscribe((conferencenotes: Conferencenote[]) =>{
      this.conferencenotes.push(...conferencenotes)
    
      this.setNotesBySessionId()
    });

    _core.on("conferencenote_create").subscribe((conferencenote: Conferencenote) => {
      this.conferencenotes.push(conferencenote);
    
      this.setNotesBySessionId()
    });

    _core.on("conferencenote_delete").subscribe((conferencenote: Conferencenote) => {
      this.conferencenotes.splice(
        this.conferencenotes.findIndex((o) => o._id === conferencenote._id),
        1
      );
    
      this.setNotesBySessionId()
    });
  }
}
