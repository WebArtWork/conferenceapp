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
  conference: string;
}

@Injectable({
  providedIn: "root",
})
export class ConferencesessionService extends CrudService<Conferencesession> {
  conferencesessions: Conferencesession[] = [];

  sessionsByConferenceId: Record<string, Conferencesession[]> = {};
  setSessionsByConferenceId(): void {
    for (const conferenceId in this.sessionsByConferenceId) {
      for (
        let i = this.sessionsByConferenceId[conferenceId].length - 1;
        i >= 0;
        i--
      ) {
        if (
          !this.conferencesessions.find(
            (s) =>
              s.conference ===
              this.sessionsByConferenceId[conferenceId][i]._id
          )
        ) {
          this.sessionsByConferenceId[conferenceId].splice(i, 1);
        }
      }
    }

    for (const session of this.conferencesessions) {
      if (!session.conference) {
        continue;
      }

      this.sessionsByConferenceId[session.conference] =
        this.sessionsByConferenceId[session.conference] || [];

      if (
        !this.sessionsByConferenceId[session.conference].find(
          (s) => s._id === session._id
        )
      ) {
        this.sessionsByConferenceId[session.conference].push(session);
      }
    }
  }

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

    this.get().subscribe((conferencesessions: Conferencesession[]) =>{
      this.conferencesessions.push(...conferencesessions);

      this.setSessionsByConferenceId()
    })
      

    _core.on("conferencesession_create").subscribe((conferencesession: Conferencesession) => {
      this.conferencesessions.push(conferencesession);

      this.setSessionsByConferenceId()
    });

    _core.on("conferencesession_delete").subscribe((conferencesession: Conferencesession) => {
      this.conferencesessions.splice(
        this.conferencesessions.findIndex((o) => o._id === conferencesession._id),
        1
      );

      this.setSessionsByConferenceId()
    });
  }
}
