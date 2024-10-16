import { Component } from "@angular/core";
import { AlertService, CoreService } from "wacom";
import { ConferencenoteService, Conferencenote } from "../../services/conferencenote.service";
import { FormService } from "src/app/core/modules/form/form.service";
import { TranslateService } from "src/app/core/modules/translate/translate.service";
import { FormInterface } from "src/app/core/modules/form/interfaces/form.interface";
import { Router } from "@angular/router";
import { UserService } from "src/app/modules/user/services/user.service";

@Component({
  templateUrl: "./notes.component.html",
  styleUrls: ["./notes.component.scss"],
})
export class NotesComponent {
  sessionId = this._router.url.includes('/notes/') ? this._router.url.replace('/notes/', '') : '';
  columns = ["author","text"];

  form: FormInterface = this._form.getForm("notes", {
    formId: "notes",
    title: "Notes",
    components: [
      {
        name: "Text",
        key: "text",
        focused: true,
        required:true,
        fields: [
          {
            name: "Placeholder",
            value: "fill note text",
          },
          {
            name: "Label",
            value: "Note",
          },
        ],
      },
    ],
  });

  config = {
    create: () => {
      this._form.modal<Conferencenote>(this.form, {
        label: "Create",
        click: (created: unknown, close: () => void) => {
          if(this.sessionId) (created as Conferencenote).session=this.sessionId 

          this._sc.create(created as Conferencenote);
          close();
        },
      });
    },
    update: (doc: Conferencenote) => {
      this._form
        .modal<Conferencenote>(this.form, [], doc)
        .then((updated: Conferencenote) => {
          this._core.copy(updated, doc);
          this._sc.update(doc);
        });
    },
    delete: (doc: Conferencenote) => {
      this._alert.question({
        text: this._translate.translate(
          "Common.Are you sure you want to delete this Conferencenote?"
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
        click: (doc: Conferencenote) => {
          this._form.modalUnique<Conferencenote>("notes", "url", doc);
        },
      },
    ],
  };

  get rows(): Conferencenote[] {
    return this.sessionId 
      ?this._sc.notesBySessionId[this.sessionId] || []
      :this._sc.conferencenotes;
  }

  constructor(
    private _translate: TranslateService,
    private _alert: AlertService,
    private _sc: ConferencenoteService,
    private _form: FormService,
    private _core: CoreService,
    private _router:Router,

    public us:UserService
  ) {}
}
