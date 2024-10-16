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

export interface Conferencelink extends CrudDocument {
  name: string;
  description: string;
  session:string;
  url?:string;
}

@Injectable({
  providedIn: "root",
})
export class ConferencelinkService extends CrudService<Conferencelink> {
  _helper=inject(HelperService)
  
  conferencelinks: Conferencelink[] = [];
  
  linksBySessionId:Record<string, Conferencelink[]>={}
  setLinksBySessionId = this._helper.createParentIdToChildrenIds<Conferencelink[]>(this.linksBySessionId,this.conferencelinks,"session")

  constructor(
    _http: HttpService,
    _store: StoreService,
    _alert: AlertService,
    _core: CoreService,
  ) {
    super(
      {
        name: "conferencelink",
      },
      _http,
      _store,
      _alert,
      _core
    );

    this.get().subscribe((conferencelinks: Conferencelink[]) =>{ 
      this.conferencelinks.push(...conferencelinks)
      
      this.setLinksBySessionId()
    });

    _core.on("conferencelink_create").subscribe((conferencelink: Conferencelink) => {
      this.conferencelinks.push(conferencelink);
    
      this.setLinksBySessionId()
    });

    _core.on("conferencelink_delete").subscribe((conferencelink: Conferencelink) => {
      this.conferencelinks.splice(
        this.conferencelinks.findIndex((o) => o._id === conferencelink._id),
        1
      );

      this.setLinksBySessionId()
    });
  }
}