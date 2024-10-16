import { Component } from "@angular/core";
import { AlertService, CoreService } from "wacom";
import { ConferencereactionService, Conferencereaction } from "../../services/conferencereaction.service";
import { FormService } from "src/app/core/modules/form/form.service";
import { TranslateService } from "src/app/core/modules/translate/translate.service";
import { FormInterface } from "src/app/core/modules/form/interfaces/form.interface";
import { Router } from "@angular/router";
import { UserService } from "src/app/modules/user/services/user.service";

@Component({
  templateUrl: "./reactions.component.html",
  styleUrls: ["./reactions.component.scss"],
})
export class ReactionsComponent {
  sessionId = this._router.url.includes('/reactions/') ? this._router.url.replace('/reactions/', '') : '';

  columns = ["author","svg"];

  form: FormInterface = this._form.getForm("reactions", {
    formId: "reactions",
    title: "Reactions",
    components: [
      {
        name: "Text",
        key: "svg",
        focused: true,
        required:true,
        fields: [
          {
            name: "Label",
            value: "SVG",
          },
        ],
      },
    ],
  });

  config = {
    create: () => {
      this._form.modal<Conferencereaction>(this.form, {
        label: "Create",
        click: (created: unknown, close: () => void) => {
          if(this.sessionId) (created as Conferencereaction).session=this.sessionId

          this._sc.create(created as Conferencereaction);
          close();
        },
      });
    },
    update: (doc: Conferencereaction) => {
      this._form
        .modal<Conferencereaction>(this.form, [], doc)
        .then((updated: Conferencereaction) => {
          this._core.copy(updated, doc);
          this._sc.update(doc);
        });
    },
    delete: (doc: Conferencereaction) => {
      this._alert.question({
        text: this._translate.translate(
          "Common.Are you sure you want to delete this Conferencereaction?"
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
        click: (doc: Conferencereaction) => {
          this._form.modalUnique<Conferencereaction>("reactions", "url", doc);
        },
      },
    ],
  };

  get rows(): Conferencereaction[] {
    return this.sessionId 
      ?this._sc.reactionsBySessionId[this.sessionId] || []
      :this._sc.conferencereactions;
  }

  constructor(
    private _translate: TranslateService,
    private _alert: AlertService,
    private _sc: ConferencereactionService,
    private _form: FormService,
    private _core: CoreService,
    private _router:Router,

    public us:UserService
  ) {}
}
