import { Component } from "@angular/core";
import { AlertService, CoreService } from "wacom";
import { ConferencesessionService, Conferencesession } from "../../services/conferencesession.service";
import { FormService } from "src/app/core/modules/form/form.service";
import { TranslateService } from "src/app/core/modules/translate/translate.service";
import { FormInterface } from "src/app/core/modules/form/interfaces/form.interface";
import { Router } from "@angular/router";

@Component({
  templateUrl: "./sessions.component.html",
  styleUrls: ["./sessions.component.scss"],
})
export class SessionsComponent {
  conferenceId = this._router.url.replace('/sessions/', '');
  
  columns = ["name", "description"];

  form: FormInterface = this._form.getForm("sessions", {
    formId: "sessions",
    title: "Sessions",
    components: [
      {
        name: "Text",
        key: "name",
        focused: true,
        fields: [
          {
            name: "Placeholder",
            value: "fill sessions title",
          },
          {
            name: "Label",
            value: "Title",
          },
        ],
      },
      {
        name: "Text",
        key: "description",
        fields: [
          {
            name: "Placeholder",
            value: "fill sessions description",
          },
          {
            name: "Label",
            value: "Description",
          },
        ],
      },
    ],
  });

  config = {
    create: () => {
      this._form.modal<Conferencesession>(this.form, {
        label: "Create",
        click: (created: unknown, close: () => void) => {
          if(this.conferenceId){
            (created as Conferencesession).conference=this.conferenceId
          }
          this._sc.create(created as Conferencesession);
          close();
        },
      });
    },
    update: (doc: Conferencesession) => {
      this._form
        .modal<Conferencesession>(this.form, [], doc)
        .then((updated: Conferencesession) => {
          this._core.copy(updated, doc);
          this._sc.update(doc);
        });
    },
    delete: (doc: Conferencesession) => {
      this._alert.question({
        text: this._translate.translate(
          "Common.Are you sure you want to delete this Conferencesession?"
        ),
        buttons: [
          {
            text: this._translate.translate("Common.No"),
          },
          {
            text: this._translate.translate("Common.Yes"),
            callback: () => {
              this._sc.delete(doc);
            },
          },
        ],
      });
    },
    buttons: [
      {
        icon: "cloud_download",
        click: (doc: Conferencesession) => {
          this._form.modalUnique<Conferencesession>("sessions", "url", doc);
        },
      },
    ],
  };

  get rows(): Conferencesession[] {
    return this._sc.conferencesessions;
  }

  constructor(
    private _translate: TranslateService,
    private _alert: AlertService,
    private _sc: ConferencesessionService,
    private _form: FormService,
    private _core: CoreService,
    private _router:Router
  ) {}
}
