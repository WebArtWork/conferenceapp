import{a as l}from"./chunk-TBFD5B5Q.js";import{Ja as h,Ma as d,Na as p,Oa as a,Ra as I,j as c,m as i,n as f}from"./chunk-HOEKJOMB.js";var B=(()=>{let e=class e extends d{constructor(o,t,m,r){super({name:"conferencesession"},o,t,m,r),this._helper=f(l),this.conferencesessions=[],this.sessionsByConferenceId={},this.setSessionsByConferenceId=this._helper.createParentIdToChildrenIds(this.sessionsByConferenceId,this.conferencesessions,"conference"),this.get().subscribe(s=>{this.conferencesessions.push(...s),this.setSessionsByConferenceId()}),r.on("conferencesession_create").subscribe(s=>{this.conferencesessions.push(s),this.setSessionsByConferenceId()}),r.on("conferencesession_delete").subscribe(s=>{this.conferencesessions.splice(this.conferencesessions.findIndex(u=>u._id===s._id),1),this.setSessionsByConferenceId()})}};e.\u0275fac=function(t){return new(t||e)(i(a),i(p),i(I),i(h))},e.\u0275prov=c({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();export{B as a};