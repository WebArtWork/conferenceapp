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

export interface Conferencecomment extends CrudDocument {
  text: string;
  author:string;
  session:string;
}

@Injectable({
  providedIn: "root",
})
export class ConferencecommentService extends CrudService<Conferencecomment> {
  _helper=inject(HelperService)

  conferencecomments: Conferencecomment[] = [];

  commentsBySessionId:Record<string, Conferencecomment[]>={}
  setCommentsBySessionId=this._helper.createParentIdToChildrenIds<Conferencecomment[]>(this.commentsBySessionId,this.conferencecomments,"session")

  constructor(
    _http: HttpService,
    _store: StoreService,
    _alert: AlertService,
    _core: CoreService
  ) {
    super(
      {
        name: "conferencecomment",
      },
      _http,
      _store,
      _alert,
      _core
    );

    this.get().subscribe((conferencecomments: Conferencecomment[]) =>{ 
      this.conferencecomments.push(...conferencecomments)
    
      this.setCommentsBySessionId()
    });

    _core.on("conferencecomment_create").subscribe((conferencecomment: Conferencecomment) => {
      this.conferencecomments.push(conferencecomment);

      this.setCommentsBySessionId()
    });

    _core.on("conferencecomment_delete").subscribe((conferencecomment: Conferencecomment) => {
      this.conferencecomments.splice(
        this.conferencecomments.findIndex((o) => o._id === conferencecomment._id),
        1
      );

      this.setCommentsBySessionId()
    });
  }
}
