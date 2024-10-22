import { Component } from "@angular/core";
import { AlertService, CoreService } from "wacom";
import { ConferenceqnaService, Conferenceqna, Answer } from "../../services/conferenceqna.service";
import { FormService } from "src/app/core/modules/form/form.service";
import { TranslateService } from "src/app/core/modules/translate/translate.service";
import { FormInterface } from "src/app/core/modules/form/interfaces/form.interface";
import { Router } from "@angular/router";
import { UserService } from "src/app/modules/user/services/user.service";

@Component({
  templateUrl: "./qnas.component.html",
  styleUrls: ["./qnas.component.scss"],
})
export class QnasComponent {
  sessionId = this._router.url.includes('/qnas/') ? this._router.url.replace('/qnas/', '') : '';

  columns = ["name", "description"];
  questionsComponents: any = []
  answersComponents:any=[]

  form: FormInterface = this._form.getForm("qnas", {
    formId: "qnas",
    title: "Qnas",
    components: [
      {
        name: "Text",
        key: "name",
        focused: true,
        required: true,
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
      {
        components: this.questionsComponents
      },
      {
        name: 'Button',
        key:"questions",
        fields: [
          {
            name: "Label",
            value: "Add Question",
          },
          {
            name: "Click",
            value: () => {
              const question = {
                components: [
                  {
                    name: "Text",
                    key: "questions[].question",
                    fields: [
                      {
                        name: "Placeholder",
                        value: "fill question",
                      },
                      {
                        name: "Label",
                        value: "Question",
                      },

                    ],
                  },
                  {
                    name: "Tags",
                    key: "questions[].answers",
                    fields: [
                      {
                        name: "Placeholder",
                        value: "fill answers",
                      },
                      {
                        name: "Label",
                        value: "Answers",
                      },
                    ],
                  },
                  {
                    name: "Button",
                    fields: [
                      {
                        name: "Label",
                        value: "Remove",
                      },
                      {
                        name: "Click",
                        value: () => {
                          const index = this.questionsComponents.indexOf(question)
                          if (index !== -1) this.questionsComponents.splice(index, 1)
                        },
                      },
                    ],
                  },
                ],
              }
              this.questionsComponents.push(question);
            },
          },
        ],

      },
      {
        components: this.answersComponents
      },
      {
        name: 'Button',
        key:"answers",
        fields: [
          {
            name: "Label",
            value: "Add Answer",
          },
          {
            name: "Click",
            value: () => {
              const answer = {
                components: [
                  {
                    name: "Text",
                    key: "answers[].answer",
                    fields: [
                      {
                        name: "Placeholder",
                        value: "fill answer",
                      },
                      {
                        name: "Label",
                        value: "Answer",
                      },

                    ],
                  },
                  {
                    name: "Button",
                    fields: [
                      {
                        name: "Label",
                        value: "Remove",
                      },
                      {
                        name: "Click",
                        value: () => {
                          const index = this.answersComponents.indexOf(answer)
                          if (index !== -1) this.answersComponents.splice(index, 1)
                        },
                      },
                    ],
                  },
                ],
              }
              this.answersComponents.push(answer);
            },
          },
        ],

      }

    ],
  });

  config = {
    create: () => {
      this._form.modal<Conferenceqna>(this.form, {
        label: "Create",
        click: (created: unknown, close: () => void) => {
          if (this.sessionId) (created as Conferenceqna).session = this.sessionId

          const newAnswers=(created as Conferenceqna).answers.map(el=>({
            answer:el.answer,
            author:this.us.user._id,
            questionId:''
          }))
//@ts-ignore
          created.answers=newAnswers
console.log(created)
          // this._sc.create(created as Conferenceqna);
          close();
        },
      },
      {questions:[]}
    );
    },
    update: (doc: Conferenceqna) => {
console.log(doc)
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
      ? this._sc.qnasBySessionId[this.sessionId] || []
      : this._sc.conferenceqnas;
  }

  constructor(
    private _translate: TranslateService,
    private _alert: AlertService,
    private _sc: ConferenceqnaService,
    private _form: FormService,
    private _core: CoreService,
    private _router: Router,

    private us:UserService
  ) { }
}
