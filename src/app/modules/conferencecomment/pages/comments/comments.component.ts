import { Component } from "@angular/core";
import { AlertService, CoreService } from "wacom";
import { ConferencecommentService, Conferencecomment } from "../../services/conferencecomment.service";
import { FormService } from "src/app/core/modules/form/form.service";
import { TranslateService } from "src/app/core/modules/translate/translate.service";
import { FormInterface } from "src/app/core/modules/form/interfaces/form.interface";
import { Router } from "@angular/router";
import { UserService } from "src/app/modules/user/services/user.service";

@Component({
  templateUrl: "./comments.component.html",
  styleUrls: ["./comments.component.scss"],
})
export class CommentsComponent {
  sessionId = this._router.url.includes('/comments/') ? this._router.url.replace('/comments/', '') : '';

  columns = ["author","text"];

  form: FormInterface = this._form.getForm("comments", {
    formId: "comments",
    title: "Comments",
    components: [
      {
        name: "Text",
        key: "text",
        focused: true,
        required:true,
        fields: [
          {
            name: "Placeholder",
            value: "fill comments text",
          },
          {
            name: "Label",
            value: "Comment",
          },
        ],
      },
    ],
  });

  config = {
    create: () => {
      this._form.modal<Conferencecomment>(this.form, {
        label: "Create",
        click: (created: unknown, close: () => void) => {
          if(this.sessionId) (created as Conferencecomment).session=this.sessionId

          this._sc.create(created as Conferencecomment);
          close();
        },
      });
    },
    update: (doc: Conferencecomment) => {
      this._form
        .modal<Conferencecomment>(this.form, [], doc)
        .then((updated: Conferencecomment) => {
          this._core.copy(updated, doc);
          this._sc.update(doc);
        });
    },
    delete: (doc: Conferencecomment) => {
      this._alert.question({
        text: this._translate.translate(
          "Common.Are you sure you want to delete this Conferencecomment?"
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
        click: (doc: Conferencecomment) => {
          this._form.modalUnique<Conferencecomment>("comments", "url", doc);
        },
      },
    ],
  };

  get rows(): Conferencecomment[] {
    return this.sessionId
    ?this._sc.commentsBySessionId[this.sessionId] || []
    :this._sc.conferencecomments;
  }

  constructor(
    private _translate: TranslateService,
    private _alert: AlertService,
    private _sc: ConferencecommentService,
    private _form: FormService,
    private _core: CoreService,
    private _router: Router,

    public us:UserService,
  ) {}
}
