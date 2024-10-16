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

interface Vote {
  author?:string;
  answer:string;
  answers:string[];
}
interface Comment{
  author?:string;
  comment:string
}

export interface Conferencepoll extends CrudDocument {
  session:string;
  question:string;
  answers:string[];
  votes: Vote[];
  startTime: Date;
  endTime: Date;
  isAnonymous:boolean;
  isMultiple:boolean;
  isQuiz:boolean;
  correctAnswer:string;
  comments:Comment[]
}

@Injectable({
  providedIn: "root",
})
export class ConferencepollService extends CrudService<Conferencepoll> {
  _helper=inject(HelperService)
  
  conferencepolls: Conferencepoll[] = [];

  pollsBySessionId:Record<string, Conferencepoll[]>={}
  setPollsBySessionId=this._helper.createParentIdToChildrenIds<Conferencepoll[]>(this.pollsBySessionId,this.conferencepolls,"session")

  constructor(
    _http: HttpService,
    _store: StoreService,
    _alert: AlertService,
    _core: CoreService
  ) {
    super(
      {
        name: "conferencepoll",
      },
      _http,
      _store,
      _alert,
      _core
    );

    this.get().subscribe((conferencepolls: Conferencepoll[]) =>{
      this.conferencepolls.push(...conferencepolls)
    
      this.setPollsBySessionId()
    });

    _core.on("conferencepoll_create").subscribe((conferencepoll: Conferencepoll) => {
      this.conferencepolls.push(conferencepoll);
    
      this.setPollsBySessionId()
    });

    _core.on("conferencepoll_delete").subscribe((conferencepoll: Conferencepoll) => {
      this.conferencepolls.splice(
        this.conferencepolls.findIndex((o) => o._id === conferencepoll._id),
        1
      );
    
      this.setPollsBySessionId()
    });
  }
}
