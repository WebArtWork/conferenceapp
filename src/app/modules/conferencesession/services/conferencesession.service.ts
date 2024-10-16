import { inject, Injectable } from '@angular/core';
import { HelperService } from 'src/app/core/services/helper.service';
import {
	AlertService,
	CoreService,
	HttpService,
	StoreService,
	CrudService,
	CrudDocument
} from 'wacom';

export interface Conferencesession extends CrudDocument {
	name: string;
	description: string;
	conference: string;
	startTime: Date;
  	endTime: Date;
  	status: 'new'|'prepared'|'inProgres'|'ended'|'canceled';
}

@Injectable({
	providedIn: 'root'
})
export class ConferencesessionService extends CrudService<Conferencesession> {
  _helper=inject(HelperService)
  
  conferencesessions: Conferencesession[] = [];

	sessionsByConferenceId: Record<string, Conferencesession[]> = {};
  setSessionsByConferenceId = this._helper.createParentIdToChildrenIds<Conferencesession[]>(this.sessionsByConferenceId,this.conferencesessions,"conference")


	constructor(
		_http: HttpService,
		_store: StoreService,
		_alert: AlertService,
		_core: CoreService
	) {
		super(
			{
				name: 'conferencesession'
			},
			_http,
			_store,
			_alert,
			_core
		);

		this.get().subscribe((conferencesessions: Conferencesession[]) => {
			this.conferencesessions.push(...conferencesessions);

			this.setSessionsByConferenceId();
		});

		_core
			.on('conferencesession_create')
			.subscribe((conferencesession: Conferencesession) => {
				this.conferencesessions.push(conferencesession);

				this.setSessionsByConferenceId();
			});

		_core
			.on('conferencesession_delete')
			.subscribe((conferencesession: Conferencesession) => {
				this.conferencesessions.splice(
					this.conferencesessions.findIndex(
						(o) => o._id === conferencesession._id
					),
					1
				);

				this.setSessionsByConferenceId();
			});
	}
}
