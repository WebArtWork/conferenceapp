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

export interface Conferencepoll extends CrudDocument {
  name: string;
  description: string;
  session:string;
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
