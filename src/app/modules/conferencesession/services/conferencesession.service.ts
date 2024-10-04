import { Injectable } from "@angular/core";
import {
  AlertService,
  CoreService,
  HttpService,
  StoreService,
  CrudService,
  CrudDocument,
} from "wacom";

export interface Conferencesession extends CrudDocument {
  name: string;
  description: string;
  conference:string;
}

@Injectable({
  providedIn: "root",
})
export class ConferencesessionService extends CrudService<Conferencesession> {
  conferencesessions: Conferencesession[] = [];
  constructor(
    _http: HttpService,
    _store: StoreService,
    _alert: AlertService,
    _core: CoreService
  ) {
    super(
      {
        name: "conferencesession",
      },
      _http,
      _store,
      _alert,
      _core
    );

    this.get().subscribe((conferencesessions: Conferencesession[]) => this.conferencesessions.push(...conferencesessions));

    _core.on("conferencesession_create").subscribe((conferencesession: Conferencesession) => {
      this.conferencesessions.push(conferencesession);
    });

    _core.on("conferencesession_delete").subscribe((conferencesession: Conferencesession) => {
      this.conferencesessions.splice(
        this.conferencesessions.findIndex((o) => o._id === conferencesession._id),
        1
      );
    });
  }
}
