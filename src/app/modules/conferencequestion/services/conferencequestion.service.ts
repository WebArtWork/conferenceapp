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

export interface Conferencequestion extends CrudDocument {
  name: string;
  description: string;
  session:string;
}

@Injectable({
  providedIn: "root",
})
export class ConferencequestionService extends CrudService<Conferencequestion> {
  _helper=inject(HelperService)
  
  conferencequestions: Conferencequestion[] = [];

  questionsBySessionId:Record<string, Conferencequestion[]>={}
  setQuestionsBySessionId=this._helper.createParentIdToChildrenIds<Conferencequestion[]>(this.questionsBySessionId,this.conferencequestions,"session")

  constructor(
    _http: HttpService,
    _store: StoreService,
    _alert: AlertService,
    _core: CoreService
  ) {
    super(
      {
        name: "conferencequestion",
      },
      _http,
      _store,
      _alert,
      _core
    );

    this.get().subscribe((conferencequestions: Conferencequestion[]) =>{
      this.conferencequestions.push(...conferencequestions)
    
      this.setQuestionsBySessionId()
    });

    _core.on("conferencequestion_create").subscribe((conferencequestion: Conferencequestion) => {
      this.conferencequestions.push(conferencequestion);
    
      this.setQuestionsBySessionId()
    });

    _core.on("conferencequestion_delete").subscribe((conferencequestion: Conferencequestion) => {
      this.conferencequestions.splice(
        this.conferencequestions.findIndex((o) => o._id === conferencequestion._id),
        1
      );
    
      this.setQuestionsBySessionId()
    });
  }
}
