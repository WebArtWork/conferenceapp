import{a as F}from"./chunk-TBFD5B5Q.js";import{i as k}from"./chunk-6LRXWN5R.js";import{B as c,Ca as C,F as _,Ja as l,L as b,Ma as g,Na as w,Oa as x,Ra as f,Va as N,ab as B,db as T,j as u,k as v,m,n as I,o as y,p as S,ya as j}from"./chunk-HOEKJOMB.js";var A=(()=>{let e=class e extends g{constructor(s,t,n,a){super({name:"conferencenote"},s,t,n,a),this._helper=I(F),this.conferencenotes=[],this.notesBySessionId={},this.setNotesBySessionId=this._helper.createParentIdToChildrenIds(this.notesBySessionId,this.conferencenotes,"session"),this.get().subscribe(r=>{this.conferencenotes.push(...r),this.setNotesBySessionId()}),a.on("conferencenote_create").subscribe(r=>{this.conferencenotes.push(r),this.setNotesBySessionId()}),a.on("conferencenote_delete").subscribe(r=>{this.conferencenotes.splice(this.conferencenotes.findIndex(h=>h._id===r._id),1),this.setNotesBySessionId()})}};e.\u0275fac=function(t){return new(t||e)(m(x),m(w),m(f),m(l))},e.\u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var p=(()=>{let e=class e{get rows(){return this.sessionId?this._sc.notesBySessionId[this.sessionId]||[]:this._sc.conferencenotes}constructor(s,t,n,a,r,h){this._translate=s,this._alert=t,this._sc=n,this._form=a,this._core=r,this._router=h,this.sessionId=this._router.url.includes("/notes/")?this._router.url.replace("/notes/",""):"",this.columns=["name","description"],this.form=this._form.getForm("notes",{formId:"notes",title:"Notes",components:[{name:"Text",key:"name",focused:!0,fields:[{name:"Placeholder",value:"fill notes title"},{name:"Label",value:"Title"}]},{name:"Text",key:"description",fields:[{name:"Placeholder",value:"fill notes description"},{name:"Label",value:"Description"}]}]}),this.config={create:()=>{this._form.modal(this.form,{label:"Create",click:(o,d)=>{this.sessionId&&(o.session=this.sessionId),this._sc.create(o),d()}})},update:o=>{this._form.modal(this.form,[],o).then(d=>{this._core.copy(d,o),this._sc.update(o)})},delete:o=>{this._alert.question({text:this._translate.translate("Common.Are you sure you want to delete this Conferencenote?"),buttons:[{text:this._translate.translate("Common.No")},{text:this._translate.translate("Common.Yes"),callback:()=>{this._sc.delete(o)}}]})},buttons:[{icon:"cloud_download",click:o=>{this._form.modalUnique("notes","url",o)}}]}}};e.\u0275fac=function(t){return new(t||e)(c(N),c(f),c(A),c(T),c(l),c(j))},e.\u0275cmp=y({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["title","Notes",3,"columns","config","rows"]],template:function(t,n){t&1&&b(0,"wtable",0),t&2&&_("columns",n.columns)("config",n.config)("rows",n.rows)},dependencies:[B]});let i=e;return i})();var q=[{path:"",component:p},{path:":note_id",component:p}],V=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=S({type:e}),e.\u0275inj=v({imports:[C.forChild(q),k]});let i=e;return i})();export{V as NotesModule};
