import { Injectable } from "@angular/core";
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
}

@Injectable({
  providedIn: "root",
})
export class ConferencelinkService extends CrudService<Conferencelink> {
  conferencelinks: Conferencelink[] = [];
  constructor(
    _http: HttpService,
    _store: StoreService,
    _alert: AlertService,
    _core: CoreService
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

    this.get().subscribe((conferencelinks: Conferencelink[]) => this.conferencelinks.push(...conferencelinks));

    _core.on("conferencelink_create").subscribe((conferencelink: Conferencelink) => {
      this.conferencelinks.push(conferencelink);
    });

    _core.on("conferencelink_delete").subscribe((conferencelink: Conferencelink) => {
      this.conferencelinks.splice(
        this.conferencelinks.findIndex((o) => o._id === conferencelink._id),
        1
      );
    });
  }
}
