import{a as F}from"./chunk-TBFD5B5Q.js";import{i as k}from"./chunk-6LRXWN5R.js";import{B as c,Ca as j,F as S,Ja as l,L as _,Ma as C,Na as g,Oa as w,Ra as f,Va as x,ab as B,db as T,j as u,k as v,m,n as I,o as q,p as y,ya as b}from"./chunk-HOEKJOMB.js";var M=(()=>{let e=class e extends C{constructor(n,t,o,a){super({name:"conferenceqna"},n,t,o,a),this._helper=I(F),this.conferenceqnas=[],this.qnasBySessionId={},this.setQnasBySessionId=this._helper.createParentIdToChildrenIds(this.qnasBySessionId,this.conferenceqnas,"session"),this.get().subscribe(r=>{this.conferenceqnas.push(...r),this.setQnasBySessionId()}),a.on("conferenceqna_create").subscribe(r=>{this.conferenceqnas.push(r),this.setQnasBySessionId()}),a.on("conferenceqna_delete").subscribe(r=>{this.conferenceqnas.splice(this.conferenceqnas.findIndex(h=>h._id===r._id),1),this.setQnasBySessionId()})}};e.\u0275fac=function(t){return new(t||e)(m(w),m(g),m(f),m(l))},e.\u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var p=(()=>{let e=class e{get rows(){return this.sessionId?this._sc.qnasBySessionId[this.sessionId]||[]:this._sc.conferenceqnas}constructor(n,t,o,a,r,h){this._translate=n,this._alert=t,this._sc=o,this._form=a,this._core=r,this._router=h,this.sessionId=this._router.url.includes("/qnas/")?this._router.url.replace("/qnas/",""):"",this.columns=["name","description"],this.form=this._form.getForm("qnas",{formId:"qnas",title:"Qnas",components:[{name:"Text",key:"name",focused:!0,fields:[{name:"Placeholder",value:"fill qnas title"},{name:"Label",value:"Title"}]},{name:"Text",key:"description",fields:[{name:"Placeholder",value:"fill qnas description"},{name:"Label",value:"Description"}]}]}),this.config={create:()=>{this._form.modal(this.form,{label:"Create",click:(s,d)=>{this.sessionId&&(s.session=this.sessionId),this._sc.create(s),d()}})},update:s=>{this._form.modal(this.form,[],s).then(d=>{this._core.copy(d,s),this._sc.update(s)})},delete:s=>{this._alert.question({text:this._translate.translate("Common.Are you sure you want to delete this Conferenceqna?"),buttons:[{text:this._translate.translate("Common.No")},{text:this._translate.translate("Common.Yes"),callback:()=>{this._sc.delete(s)}}]})},buttons:[{icon:"cloud_download",click:s=>{this._form.modalUnique("qnas","url",s)}}]}}};e.\u0275fac=function(t){return new(t||e)(c(x),c(f),c(M),c(T),c(l),c(b))},e.\u0275cmp=q({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["title","Qnas",3,"columns","config","rows"]],template:function(t,o){t&1&&_(0,"wtable",0),t&2&&S("columns",o.columns)("config",o.config)("rows",o.rows)},dependencies:[B]});let i=e;return i})();var N=[{path:"",component:p},{path:":qna_id",component:p}],V=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=y({type:e}),e.\u0275inj=v({imports:[j.forChild(N),k]});let i=e;return i})();export{V as QnasModule};
