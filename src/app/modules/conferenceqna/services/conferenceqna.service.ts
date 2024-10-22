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

interface Question{
  question:string;
  answers:string[]
}

export interface Answer{
  author:string;
  questionId:string;
  answer:string
}

export interface Conferenceqna extends CrudDocument {
  name: string;
  description: string;
  session:string;
  questions:Question[];
  answers:Answer[];
}

@Injectable({
  providedIn: "root",
})
export class ConferenceqnaService extends CrudService<Conferenceqna> {
  _helper=inject(HelperService)
  
  conferenceqnas: Conferenceqna[] = [];

  qnasBySessionId:Record<string, Conferenceqna[]>={}
  setQnasBySessionId=this._helper.createParentIdToChildrenIds<Conferenceqna[]>(this.qnasBySessionId,this.conferenceqnas,"session")

  constructor(
    _http: HttpService,
    _store: StoreService,
    _alert: AlertService,
    _core: CoreService
  ) {
    super(
      {
        name: "conferenceqna",
      },
      _http,
      _store,
      _alert,
      _core
    );

    this.get().subscribe((conferenceqnas: Conferenceqna[]) =>{
      this.conferenceqnas.push(...conferenceqnas)
    
      this.setQnasBySessionId()
    });

    _core.on("conferenceqna_create").subscribe((conferenceqna: Conferenceqna) => {
      this.conferenceqnas.push(conferenceqna);
    
      this.setQnasBySessionId()
    });

    _core.on("conferenceqna_delete").subscribe((conferenceqna: Conferenceqna) => {
      this.conferenceqnas.splice(
        this.conferenceqnas.findIndex((o) => o._id === conferenceqna._id),
        1
      );
    
      this.setQnasBySessionId()
    });
  }
}
