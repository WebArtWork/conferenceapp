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

export interface Conferencemessage extends CrudDocument {
  text: string;
  author:string;
  session:string;
}

@Injectable({
  providedIn: "root",
})
export class ConferencemessageService extends CrudService<Conferencemessage> {
  _helper=inject(HelperService)
  
  conferencemessages: Conferencemessage[] = [];

  messagesBySessionId:Record<string, Conferencemessage[]>={}
  setMessagesBySessionId=this._helper.createParentIdToChildrenIds<Conferencemessage[]>(this.messagesBySessionId,this.conferencemessages,"session")

  constructor(
    _http: HttpService,
    _store: StoreService,
    _alert: AlertService,
    _core: CoreService
  ) {
    super(
      {
        name: "conferencemessage",
      },
      _http,
      _store,
      _alert,
      _core
    );

    this.get().subscribe((conferencemessages: Conferencemessage[]) =>{ 
      this.conferencemessages.push(...conferencemessages)
    
      this.setMessagesBySessionId()
    });

    _core.on("conferencemessage_create").subscribe((conferencemessage: Conferencemessage) => {
      this.conferencemessages.push(conferencemessage);
    
      this.setMessagesBySessionId()
    });

    _core.on("conferencemessage_delete").subscribe((conferencemessage: Conferencemessage) => {
      this.conferencemessages.splice(
        this.conferencemessages.findIndex((o) => o._id === conferencemessage._id),
        1
      );
    
      this.setMessagesBySessionId()
    });
  }
}
