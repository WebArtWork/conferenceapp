import{a as F}from"./chunk-TBFD5B5Q.js";import{i as k}from"./chunk-6LRXWN5R.js";import{B as l,Ca as C,F as _,Ja as m,L as b,Ma as g,Na as w,Oa as x,Ra as p,Va as P,ab as B,db as T,j as u,k as v,m as a,n as I,o as y,p as S,ya as j}from"./chunk-HOEKJOMB.js";var A=(()=>{let e=class e extends g{constructor(s,t,r,c){super({name:"conferencepoll"},s,t,r,c),this._helper=I(F),this.conferencepolls=[],this.pollsBySessionId={},this.setPollsBySessionId=this._helper.createParentIdToChildrenIds(this.pollsBySessionId,this.conferencepolls,"session"),this.get().subscribe(n=>{this.conferencepolls.push(...n),this.setPollsBySessionId()}),c.on("conferencepoll_create").subscribe(n=>{this.conferencepolls.push(n),this.setPollsBySessionId()}),c.on("conferencepoll_delete").subscribe(n=>{this.conferencepolls.splice(this.conferencepolls.findIndex(f=>f._id===n._id),1),this.setPollsBySessionId()})}};e.\u0275fac=function(t){return new(t||e)(a(x),a(w),a(p),a(m))},e.\u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var d=(()=>{let e=class e{get rows(){return this.sessionId?this._sc.pollsBySessionId[this.sessionId]||[]:this._sc.conferencepolls}constructor(s,t,r,c,n,f){this._translate=s,this._alert=t,this._sc=r,this._form=c,this._core=n,this._router=f,this.sessionId=this._router.url.includes("/polls/")?this._router.url.replace("/polls/",""):"",this.columns=["name","description"],this.form=this._form.getForm("polls",{formId:"polls",title:"Polls",components:[{name:"Text",key:"name",focused:!0,fields:[{name:"Placeholder",value:"fill polls title"},{name:"Label",value:"Title"}]},{name:"Text",key:"description",fields:[{name:"Placeholder",value:"fill polls description"},{name:"Label",value:"Description"}]}]}),this.config={create:()=>{this._form.modal(this.form,{label:"Create",click:(o,h)=>{this.sessionId&&(o.session=this.sessionId),this._sc.create(o),h()}})},update:o=>{this._form.modal(this.form,[],o).then(h=>{this._core.copy(h,o),this._sc.update(o)})},delete:o=>{this._alert.question({text:this._translate.translate("Common.Are you sure you want to delete this Conferencepoll?"),buttons:[{text:this._translate.translate("Common.No")},{text:this._translate.translate("Common.Yes"),callback:()=>{this._sc.delete(o)}}]})},buttons:[{icon:"cloud_download",click:o=>{this._form.modalUnique("polls","url",o)}}]}}};e.\u0275fac=function(t){return new(t||e)(l(P),l(p),l(A),l(T),l(m),l(j))},e.\u0275cmp=y({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["title","Polls",3,"columns","config","rows"]],template:function(t,r){t&1&&b(0,"wtable",0),t&2&&_("columns",r.columns)("config",r.config)("rows",r.rows)},dependencies:[B]});let i=e;return i})();var q=[{path:"",component:d},{path:":poll_id",component:d}],V=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=S({type:e}),e.\u0275inj=v({imports:[C.forChild(q),k]});let i=e;return i})();export{V as PollsModule};