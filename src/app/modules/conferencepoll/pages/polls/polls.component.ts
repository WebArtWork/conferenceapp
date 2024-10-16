import { Component } from "@angular/core";
import { AlertService, CoreService } from "wacom";
import { ConferencepollService, Conferencepoll } from "../../services/conferencepoll.service";
import { FormService } from "src/app/core/modules/form/form.service";
import { TranslateService } from "src/app/core/modules/translate/translate.service";
import { FormInterface } from "src/app/core/modules/form/interfaces/form.interface";
import { Router } from "@angular/router";
import { UserService } from "src/app/modules/user/services/user.service";

@Component({
  templateUrl: "./polls.component.html",
  styleUrls: ["./polls.component.scss"],
})
export class PollsComponent {
  sessionId = this._router.url.includes('/polls/') ? this._router.url.replace('/polls/', '') : '';

  columns = ["question","correctAnswer","isAnonymous","isMultiple","isQuiz","startTime", "endTime"];

  form: FormInterface = this._form.getForm("polls", {
    formId: "polls",
    title: "Polls",
    components: [
      {
        name: "Text",
        key: "question",
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
      {
        name: "Text",
        key: "correctAnswer",
        fields: [
          {
            name: "Placeholder",
            value: "fill correct answer text",
          },
          {
            name: "Label",
            value: "Correct Answer",
          },
        ],
      },
      {
        name: "Boolean",
        key: "isAnonymous",
        fields: [
          {
            name: "Label",
            value: "Anonymous",
          },
        ],
      },
      {
        name: "Boolean",
        key: "isMultiple",
        fields: [
          {
            name: "Label",
            value: "Multiple",
          },
        ],
      },
      {
        name: "Boolean",
        key: "isQuiz",
        fields: [
          {
            name: "Label",
            value: "Quiz",
          },
        ],
      },
      {
				name: 'DateTime',
				key: 'startTime',
				fields: [
					{
						name: 'Label',
						value: 'Start Time'
					}
				]
			},
			{
				name: 'DateTime',
				key: 'endTime',
				fields: [
					{
						name: 'Label',
						value: 'End Time'
					}
				]
			},
    ],
  });

  config = {
    create: () => {
      this._form.modal<Conferencepoll>(this.form, {
        label: "Create",
        click: (created: unknown, close: () => void) => {
          if(this.sessionId) (created as Conferencepoll).session=this.sessionId
console.log(created)
          this._sc.create(created as Conferencepoll);
          close();
        },
      });
    },
    update: (doc: Conferencepoll) => {
      this._form
        .modal<Conferencepoll>(this.form, [], doc)
        .then((updated: Conferencepoll) => {
          this._core.copy(updated, doc);
          this._sc.update(doc);
        });
    },
    delete: (doc: Conferencepoll) => {
      this._alert.question({
        text: this._translate.translate(
          "Common.Are you sure you want to delete this Conferencepoll?"
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
        click: (doc: Conferencepoll) => {
          this._form.modalUnique<Conferencepoll>("polls", "url", doc);
        },
      },
    ],
  };

  get rows(): Conferencepoll[] {
    return this.sessionId 
      ?this._sc.pollsBySessionId[this.sessionId] || []
      :this._sc.conferencepolls;
  }

  constructor(
    private _translate: TranslateService,
    private _alert: AlertService,
    private _sc: ConferencepollService,
    private _form: FormService,
    private _core: CoreService,
    private _router:Router,
    public us:UserService
  ){}
}
