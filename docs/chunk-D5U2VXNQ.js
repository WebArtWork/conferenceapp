import{i as D}from"./chunk-GINPEAZQ.js";import{$a as M,A as c,Ba as w,E as C,Ia as l,K as _,La as x,Ma as k,Na as T,Qa as f,Ua as F,X as y,Z as g,cb as A,j as u,k as v,m,n as I,o as b,xa as S,z as j}from"./chunk-KFEDSICO.js";var q=(()=>{let e=class e extends x{constructor(n,t,o,a){super({name:"conferencesession"},n,t,o,a),this.conferencesessions=[],this.get().subscribe(r=>this.conferencesessions.push(...r)),a.on("conferencesession_create").subscribe(r=>{this.conferencesessions.push(r)}),a.on("conferencesession_delete").subscribe(r=>{this.conferencesessions.splice(this.conferencesessions.findIndex(p=>p._id===r._id),1)})}};e.\u0275fac=function(t){return new(t||e)(m(T),m(k),m(f),m(l))},e.\u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var h=(()=>{let e=class e{get rows(){return this._sc.conferencesessions}constructor(n,t,o,a,r,p){this._translate=n,this._alert=t,this._sc=o,this._form=a,this._core=r,this._router=p,this.conferenceId=this._router.url.replace("/sessions/",""),this.columns=["name","description"],this.form=this._form.getForm("sessions",{formId:"sessions",title:"Sessions",components:[{name:"Text",key:"name",focused:!0,fields:[{name:"Placeholder",value:"fill sessions title"},{name:"Label",value:"Title"}]},{name:"Text",key:"description",fields:[{name:"Placeholder",value:"fill sessions description"},{name:"Label",value:"Description"}]}]}),this.config={create:()=>{this._form.modal(this.form,{label:"Create",click:(s,d)=>{this.conferenceId&&(s.conference=this.conferenceId),this._sc.create(s),d()}})},update:s=>{this._form.modal(this.form,[],s).then(d=>{this._core.copy(d,s),this._sc.update(s)})},delete:s=>{this._alert.question({text:this._translate.translate("Common.Are you sure you want to delete this Conferencesession?"),buttons:[{text:this._translate.translate("Common.No")},{text:this._translate.translate("Common.Yes"),callback:()=>{this._sc.delete(s)}}]})},buttons:[{icon:"cloud_download",click:s=>{this._form.modalUnique("sessions","url",s)}}]}}};e.\u0275fac=function(t){return new(t||e)(c(F),c(f),c(q),c(A),c(l),c(S))},e.\u0275cmp=I({type:e,selectors:[["ng-component"]],decls:2,vars:4,consts:[["title","Sessions",3,"columns","config","rows"]],template:function(t,o){t&1&&(y(0),_(1,"wtable",0)),t&2&&(g("",o.conferenceId,`
`),j(),C("columns",o.columns)("config",o.config)("rows",o.rows))},dependencies:[M]});let i=e;return i})();var R=[{path:"",component:h},{path:":session_id",component:h}],O=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=b({type:e}),e.\u0275inj=v({imports:[w.forChild(R),D]});let i=e;return i})();export{O as SessionsModule};