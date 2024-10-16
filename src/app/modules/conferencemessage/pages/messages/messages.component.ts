import { Component } from "@angular/core";
import { AlertService, CoreService } from "wacom";
import { ConferencemessageService, Conferencemessage } from "../../services/conferencemessage.service";
import { FormService } from "src/app/core/modules/form/form.service";
import { TranslateService } from "src/app/core/modules/translate/translate.service";
import { FormInterface } from "src/app/core/modules/form/interfaces/form.interface";
import { Router } from "@angular/router";
import { UserService } from "src/app/modules/user/services/user.service";

@Component({
  templateUrl: "./messages.component.html",
  styleUrls: ["./messages.component.scss"],
})
export class MessagesComponent {
  sessionId = this._router.url.includes('/messages/') ? this._router.url.replace('/messages/', '') : '';

  columns = ["author","text"];

  form: FormInterface = this._form.getForm("messages", {
    formId: "messages",
    title: "Messages",
    components: [
      {
        name: "Text",
        key: "text",
        focused: true,
        required:true,
        fields: [
          {
            name: "Placeholder",
            value: "fill message text",
          },
          {
            name: "Label",
            value: "Message",
          },
        ],
      },
    ],
  });

  config = {
    create: () => {
      this._form.modal<Conferencemessage>(this.form, {
        label: "Create",
        click: (created: unknown, close: () => void) => {
          if(this.sessionId) (created as Conferencemessage).session=this.sessionId

          this._sc.create(created as Conferencemessage);
          close();
        },
      });
    },
    update: (doc: Conferencemessage) => {
      this._form
        .modal<Conferencemessage>(this.form, [], doc)
        .then((updated: Conferencemessage) => {
          this._core.copy(updated, doc);
          this._sc.update(doc);
        });
    },
    delete: (doc: Conferencemessage) => {
      this._alert.question({
        text: this._translate.translate(
          "Common.Are you sure you want to delete this Conferencemessage?"
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
        click: (doc: Conferencemessage) => {
          this._form.modalUnique<Conferencemessage>("messages", "url", doc);
        },
      },
    ],
  };

  get rows(): Conferencemessage[] {
    return this.sessionId 
      ?this._sc.messagesBySessionId[this.sessionId] || []
      :this._sc.conferencemessages;
  }

  constructor(
    private _translate: TranslateService,
    private _alert: AlertService,
    private _sc: ConferencemessageService,
    private _form: FormService,
    private _core: CoreService,
    private _router: Router,

    public us:UserService,
  ) {}
}
