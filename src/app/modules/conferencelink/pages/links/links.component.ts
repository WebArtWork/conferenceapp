import { Component } from "@angular/core";
import { AlertService, CoreService } from "wacom";
import { ConferencelinkService, Conferencelink } from "../../services/conferencelink.service";
import { FormService } from "src/app/core/modules/form/form.service";
import { TranslateService } from "src/app/core/modules/translate/translate.service";
import { FormInterface } from "src/app/core/modules/form/interfaces/form.interface";

@Component({
  templateUrl: "./links.component.html",
  styleUrls: ["./links.component.scss"],
})
export class LinksComponent {
  columns = ["name", "description"];

  form: FormInterface = this._form.getForm("links", {
    formId: "links",
    title: "Links",
    components: [
      {
        name: "Text",
        key: "name",
        focused: true,
        fields: [
          {
            name: "Placeholder",
            value: "fill links title",
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
            value: "fill links description",
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
      this._form.modal<Conferencelink>(this.form, {
        label: "Create",
        click: (created: unknown, close: () => void) => {
          this._sc.create(created as Conferencelink);
          close();
        },
      });
    },
    update: (doc: Conferencelink) => {
      this._form
        .modal<Conferencelink>(this.form, [], doc)
        .then((updated: Conferencelink) => {
          this._core.copy(updated, doc);
          this._sc.update(doc);
        });
    },
    delete: (doc: Conferencelink) => {
      this._alert.question({
        text: this._translate.translate(
          "Common.Are you sure you want to delete this Conferencelink?"
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
        click: (doc: Conferencelink) => {
          this._form.modalUnique<Conferencelink>("links", "url", doc);
        },
      },
    ],
  };

  get rows(): Conferencelink[] {
    return this._sc.conferencelinks;
  }

  constructor(
    private _translate: TranslateService,
    private _alert: AlertService,
    private _sc: ConferencelinkService,
    private _form: FormService,
    private _core: CoreService
  ) {}
}
