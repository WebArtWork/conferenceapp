import { Component } from "@angular/core";
import { AlertService, CoreService } from "wacom";
import { ConferencequestionService, Conferencequestion } from "../../services/conferencequestion.service";
import { FormService } from "src/app/core/modules/form/form.service";
import { TranslateService } from "src/app/core/modules/translate/translate.service";
import { FormInterface } from "src/app/core/modules/form/interfaces/form.interface";
import { Router } from "@angular/router";
import { UserService } from "src/app/modules/user/services/user.service";

@Component({
  templateUrl: "./questions.component.html",
  styleUrls: ["./questions.component.scss"],
})
export class QuestionsComponent {
  sessionId = this._router.url.includes('/questions/') ? this._router.url.replace('/questions/', '') : '';

  columns = ["author","text","likes", "dislikes"];

  form: FormInterface = this._form.getForm("questions", {
    formId: "questions",
    title: "Questions",
    components: [
      {
        name: "Text",
        key: "text",
        focused: true,
        required:true,
        fields: [
          {
            name: "Placeholder",
            value: "fill question text",
          },
          {
            name: "Label",
            value: "Question",
          },
        ],
      },
    ],
  });

  config = {
    create: () => {
      this._form.modal<Conferencequestion>(this.form, {
        label: "Create",
        click: (created: unknown, close: () => void) => {
          if(this.sessionId) (created as Conferencequestion).session=this.sessionId

          this._sc.create(created as Conferencequestion);
          close();
        },
      });
    },
    update: (doc: Conferencequestion) => {
      this._form
        .modal<Conferencequestion>(this.form, [], doc)
        .then((updated: Conferencequestion) => {
          this._core.copy(updated, doc);
          this._sc.update(doc);
        });
    },
    delete: (doc: Conferencequestion) => {
      this._alert.question({
        text: this._translate.translate(
          "Common.Are you sure you want to delete this Conferencequestion?"
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
        click: (doc: Conferencequestion) => {
          this._form.modalUnique<Conferencequestion>("questions", "url", doc);
        },
      },
    ],
  };

  get rows(): Conferencequestion[] {
    return this.sessionId 
      ?this._sc.questionsBySessionId[this.sessionId] || []
      :this._sc.conferencequestions;
  }

  constructor(
    private _translate: TranslateService,
    private _alert: AlertService,
    private _sc: ConferencequestionService,
    private _form: FormService,
    private _core: CoreService,
    private _router:Router,

    public us:UserService
  ) {}
}
