import { Component } from "@angular/core";
import { AlertService, CoreService } from "wacom";
import { ConferenceService, Conference } from "../../services/conference.service";
import { FormService } from "src/app/core/modules/form/form.service";
import { TranslateService } from "src/app/core/modules/translate/translate.service";
import { FormInterface } from "src/app/core/modules/form/interfaces/form.interface";
import { Router } from "@angular/router";

@Component({
  templateUrl: "./conferences.component.html",
  styleUrls: ["./conferences.component.scss"],
})
export class ConferencesComponent {
  columns = ["name", "description"];

  form: FormInterface = this._form.getForm("conferences", {
    formId: "conferences",
    title: "Conferences",
    components: [
      {
        name: "Text",
        key: "name",
        focused: true,
        fields: [
          {
            name: "Placeholder",
            value: "fill conferences title",
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
            value: "fill conferences description",
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
      this._form.modal<Conference>(this.form, {
        label: "Create",
        click: (created: unknown, close: () => void) => {
          this._sc.create(created as Conference);
          close();
        },
      });
    },
    update: (doc: Conference) => {
      this._form
        .modal<Conference>(this.form, [], doc)
        .then((updated: Conference) => {
          this._core.copy(updated, doc);
          this._sc.update(doc);
        });
    },
    delete: (doc: Conference) => {
      this._alert.question({
        text: this._translate.translate(
          "Common.Are you sure you want to delete this Conference?"
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
        click: (doc: Conference) => {
          this._form.modalUnique<Conference>("conferences", "url", doc);
        },
      },

      {
        icon: "cast",
        click: (doc: Conference) => {
          this._router.navigateByUrl('/sessions/'+ doc._id)
        },
      },
    ],
  };

  get rows(): Conference[] {
    return this._sc.conferences;
  }

  constructor(
    private _translate: TranslateService,
    private _alert: AlertService,
    private _sc: ConferenceService,
    private _form: FormService,
    private _core: CoreService,
    private _router: Router
  ) {}
}
