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
  commentsComponents:any=[]
  votesComponents:any=[]
  answersComponents:any=[]

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
        components: this.answersComponents
      },
      {
        name:"Button",
        key:"answers",
        fields:[
          {
            name:"Label",
            value:"Add Answer"
          },
          {
            name:"Click",
            value:()=>{
              const answer={
                components:[
                  {
                    name: "Tags",
                    key: "answers",
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
                ]
              }
              this.answersComponents.push(answer)
            }
          }
        ]
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
        components: this.commentsComponents
      },
      {
        name:"Button",
        key:"comments",
        fields:[
          {
            name:"Label",
            value:"Add Commnet"
          },
          {
            name:"Click",
            value:()=>{
              const comment={
                components:[
                  {
                    name: "Text",
                    key: "comments[].comment",
                    fields: [
                      {
                        name: "Placeholder",
                        value: "fill comment",
                      },
                      {
                        name: "Label",
                        value: "Comment",
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
                          const index = this.commentsComponents.indexOf(comment)
                          if (index !== -1) this.commentsComponents.splice(index, 1)
                        },
                      },
                    ],
                  },
                ]
              }
              this.commentsComponents.push(comment)
            }
          }
        ]
      },

      {
        components: this.votesComponents
      },
      {
        name:"Button",
        key:"votes",
        fields:[
          {
            name:"Label",
            value:"Add Vote"
          },
          {
            name:"Click",
            value:()=>{
              const vote={
                components:[
                  {
                    name: "Text",
                    key: "votes[].answer",
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
                    name: "Tags",
                    key: "votes[].answers",
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
                          const index = this.votesComponents.indexOf(vote)
                          if (index !== -1) this.votesComponents.splice(index, 1)
                        },
                      },
                    ],
                  },
                ]
              }
              this.votesComponents.push(vote)
            }
          }
        ]
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

          if(!(created as Conferencepoll).isAnonymous){
            const newComments=(created as Conferencepoll).comments.map(el=>({
              answer:el.comment,
              author:this.us.user._id,
            }))
            const newVotes=(created as Conferencepoll).votes.map(el=>({
              answer:el.answer,
              answers:el.answers,
              author:this.us.user._id,
            }))
  //@ts-ignore
            created.comments=newComments
  //@ts-ignore
            created.votes=newVotes
          }

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
