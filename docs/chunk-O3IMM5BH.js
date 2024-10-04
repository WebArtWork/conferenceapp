import{i as T}from"./chunk-GINPEAZQ.js";import{$a as x,A as c,Ba as g,E as v,Ia as l,K as _,La as B,Ma as S,Na as j,Qa as m,Ua as w,cb as k,j as u,k as I,m as a,n as C,o as y,xa as b}from"./chunk-KFEDSICO.js";var M=(()=>{let e=class e extends B{setSessionsByConferenceId(){for(let s in this.sessionsByConferenceId)for(let i=this.sessionsByConferenceId[s].length-1;i>=0;i--)this.conferencesessions.find(t=>t.conference===this.sessionsByConferenceId[s][i]._id)||this.sessionsByConferenceId[s].splice(i,1);for(let s of this.conferencesessions)s.conference&&(this.sessionsByConferenceId[s.conference]=this.sessionsByConferenceId[s.conference]||[],this.sessionsByConferenceId[s.conference].find(i=>i._id===s._id)||this.sessionsByConferenceId[s.conference].push(s))}constructor(s,i,t,f){super({name:"conferencesession"},s,i,t,f),this.conferencesessions=[],this.sessionsByConferenceId={},this.get().subscribe(r=>{this.conferencesessions.push(...r),this.setSessionsByConferenceId()}),f.on("conferencesession_create").subscribe(r=>{this.conferencesessions.push(r),this.setSessionsByConferenceId()}),f.on("conferencesession_delete").subscribe(r=>{this.conferencesessions.splice(this.conferencesessions.findIndex(d=>d._id===r._id),1),this.setSessionsByConferenceId()})}};e.\u0275fac=function(i){return new(i||e)(a(j),a(S),a(m),a(l))},e.\u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();var p=(()=>{let e=class e{get rows(){return console.log(this.conferenceId?this._sc.sessionsByConferenceId[this.conferenceId]||[]:this._sc.conferencesessions),console.log(this._sc.conferencesessions,this.conferenceId),this.conferenceId?this._sc.sessionsByConferenceId[this.conferenceId]||[]:this._sc.conferencesessions}constructor(s,i,t,f,r,d){this._translate=s,this._alert=i,this._sc=t,this._form=f,this._core=r,this._router=d,this.conferenceId=this._router.url.includes("/sessions/")?this._router.url.replace("/sessions/",""):"",this.columns=["name","description"],this.form=this._form.getForm("sessions",{formId:"sessions",title:"Sessions",components:[{name:"Text",key:"name",focused:!0,fields:[{name:"Placeholder",value:"fill sessions title"},{name:"Label",value:"Title"}]},{name:"Text",key:"description",fields:[{name:"Placeholder",value:"fill sessions description"},{name:"Label",value:"Description"}]}]}),this.config={create:()=>{this._form.modal(this.form,{label:"Create",click:(o,h)=>{this.conferenceId&&(o.conference=this.conferenceId),this._sc.create(o),h()}})},update:o=>{this._form.modal(this.form,[],o).then(h=>{this._core.copy(h,o),this._sc.update(o)})},delete:o=>{this._alert.question({text:this._translate.translate("Common.Are you sure you want to delete this Conferencesession?"),buttons:[{text:this._translate.translate("Common.No")},{text:this._translate.translate("Common.Yes"),callback:()=>{this._sc.delete(o)}}]})},buttons:[{icon:"cloud_download",click:o=>{this._form.modalUnique("sessions","url",o)}}]}}};e.\u0275fac=function(i){return new(i||e)(c(w),c(m),c(M),c(k),c(l),c(b))},e.\u0275cmp=C({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["title","Sessions",3,"columns","config","rows"]],template:function(i,t){i&1&&_(0,"wtable",0),i&2&&v("columns",t.columns)("config",t.config)("rows",t.rows)},dependencies:[x]});let n=e;return n})();var N=[{path:"",component:p},{path:":session_id",component:p}],G=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=y({type:e}),e.\u0275inj=I({imports:[g.forChild(N),T]});let n=e;return n})();export{G as SessionsModule};