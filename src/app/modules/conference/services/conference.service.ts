import { Injectable } from "@angular/core";
import {
  AlertService,
  CoreService,
  HttpService,
  StoreService,
  CrudService,
  CrudDocument,
} from "wacom";

export interface Conference extends CrudDocument {
  name: string;
  description: string;
}

@Injectable({
  providedIn: "root",
})
export class ConferenceService extends CrudService<Conference> {
  conferences: Conference[] = [];
  constructor(
    _http: HttpService,
    _store: StoreService,
    _alert: AlertService,
    _core: CoreService
  ) {
    super(
      {
        name: "conference",
      },
      _http,
      _store,
      _alert,
      _core
    );

    this.get().subscribe((conferences: Conference[]) => this.conferences.push(...conferences));

    _core.on("conference_create").subscribe((conference: Conference) => {
      this.conferences.push(conference);
    });

    _core.on("conference_delete").subscribe((conference: Conference) => {
      this.conferences.splice(
        this.conferences.findIndex((o) => o._id === conference._id),
        1
      );
    });
  }
}
