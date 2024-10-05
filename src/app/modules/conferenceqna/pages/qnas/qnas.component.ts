import { Component } from "@angular/core";
import { AlertService, CoreService } from "wacom";
import { ConferenceqnaService, Conferenceqna } from "../../services/conferenceqna.service";
import { FormService } from "src/app/core/modules/form/form.service";
import { TranslateService } from "src/app/core/modules/translate/translate.service";
import { FormInterface } from "src/app/core/modules/form/interfaces/form.interface";
import { Router } from "@angular/router";

@Component({
  templateUrl: "./qnas.component.html",
  styleUrls: ["./qnas.component.scss"],
})
export class QnasComponent {
  sessionId = this._router.url.includes('/qnas/') ? this._router.url.replace('/qnas/', '') : '';
  
  columns = ["name", "description"];

  form: FormInterface = this._form.getForm("qnas", {
    formId: "qnas",
    title: "Qnas",
    components: [
      {
        name: "Text",
        key: "name",
        focused: true,
        fields: [
          {
            name: "Placeholder",
            value: "fill qnas title",
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
            value: "fill qnas description",
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
      this._form.modal<Conferenceqna>(this.form, {
        label: "Create",
        click: (created: unknown, close: () => void) => {
          if(this.sessionId) (created as Conferenceqna).session=this.sessionId 

          this._sc.create(created as Conferenceqna);
          close();
        },
      });
    },
    update: (doc: Conferenceqna) => {
      this._form
        .modal<Conferenceqna>(this.form, [], doc)
        .then((updated: Conferenceqna) => {
          this._core.copy(updated, doc);
          this._sc.update(doc);
        });
    },
    delete: (doc: Conferenceqna) => {
      this._alert.question({
        text: this._translate.translate(
          "Common.Are you sure you want to delete this Conferenceqna?"
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
        click: (doc: Conferenceqna) => {
          this._form.modalUnique<Conferenceqna>("qnas", "url", doc);
        },
      },
    ],
  };

  get rows(): Conferenceqna[] {
    return this.sessionId 
      ?this._sc.qnasBySessionId[this.sessionId] || []
      :this._sc.conferenceqnas;
  }

  constructor(
    private _translate: TranslateService,
    private _alert: AlertService,
    private _sc: ConferenceqnaService,
    private _form: FormService,
    private _core: CoreService,
    private _router:Router
  ) {}
}
