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

export interface Conferencereaction extends CrudDocument {
  svg:string;
  session:string;
}

@Injectable({
  providedIn: "root",
})
export class ConferencereactionService extends CrudService<Conferencereaction> {
  _helper=inject(HelperService)
  
  conferencereactions: Conferencereaction[] = [];
  
  reactionsBySessionId:Record<string, Conferencereaction[]>={}
  setReactionsBySessionId=this._helper.createParentIdToChildrenIds<Conferencereaction[]>(this.reactionsBySessionId,this.conferencereactions,"session")
  
  constructor(
    _http: HttpService,
    _store: StoreService,
    _alert: AlertService,
    _core: CoreService
  ) {
    super(
      {
        name: "conferencereaction",
      },
      _http,
      _store,
      _alert,
      _core
    );

    this.get().subscribe((conferencereactions: Conferencereaction[]) =>{
      this.conferencereactions.push(...conferencereactions)
    
      this.setReactionsBySessionId()
    });

    _core.on("conferencereaction_create").subscribe((conferencereaction: Conferencereaction) => {
      this.conferencereactions.push(conferencereaction);
    
      this.setReactionsBySessionId()
    });

    _core.on("conferencereaction_delete").subscribe((conferencereaction: Conferencereaction) => {
      this.conferencereactions.splice(
        this.conferencereactions.findIndex((o) => o._id === conferencereaction._id),
        1
      );
    
      this.setReactionsBySessionId()
    });
  }
}
