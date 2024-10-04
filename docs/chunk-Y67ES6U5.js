import{a as F}from"./chunk-TBFD5B5Q.js";import{i as T}from"./chunk-6LRXWN5R.js";import{B as c,Ca as j,F as S,Ja as m,L as _,Ma as C,Na as g,Oa as w,Ra as f,Va as x,ab as B,db as L,j as u,k,m as a,n as v,o as I,p as y,ya as b}from"./chunk-HOEKJOMB.js";var A=(()=>{let e=class e extends C{constructor(n,i,o,l){super({name:"conferencelink"},n,i,o,l),this._helper=v(F),this.conferencelinks=[],this.linksBySessionId={},this.setLinksBySessionId=this._helper.createParentIdToChildrenIds(this.linksBySessionId,this.conferencelinks,"session"),this.get().subscribe(r=>{this.conferencelinks.push(...r),this.setLinksBySessionId()}),l.on("conferencelink_create").subscribe(r=>{this.conferencelinks.push(r),this.setLinksBySessionId()}),l.on("conferencelink_delete").subscribe(r=>{this.conferencelinks.splice(this.conferencelinks.findIndex(h=>h._id===r._id),1),this.setLinksBySessionId()})}};e.\u0275fac=function(i){return new(i||e)(a(w),a(g),a(f),a(m))},e.\u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var p=(()=>{let e=class e{get rows(){return this.sessionId?this._sc.linksBySessionId[this.sessionId]||[]:this._sc.conferencelinks}constructor(n,i,o,l,r,h){this._translate=n,this._alert=i,this._sc=o,this._form=l,this._core=r,this._router=h,this.sessionId=this._router.url.includes("/links/")?this._router.url.replace("/links/",""):"",this.columns=["name","description"],this.form=this._form.getForm("links",{formId:"links",title:"Links",components:[{name:"Text",key:"name",focused:!0,fields:[{name:"Placeholder",value:"fill links title"},{name:"Label",value:"Title"}]},{name:"Text",key:"description",fields:[{name:"Placeholder",value:"fill links description"},{name:"Label",value:"Description"}]}]}),this.config={create:()=>{this._form.modal(this.form,{label:"Create",click:(s,d)=>{this.sessionId&&(s.session=this.sessionId),this._sc.create(s),d()}})},update:s=>{this._form.modal(this.form,[],s).then(d=>{this._core.copy(d,s),this._sc.update(s)})},delete:s=>{this._alert.question({text:this._translate.translate("Common.Are you sure you want to delete this Conferencelink?"),buttons:[{text:this._translate.translate("Common.No")},{text:this._translate.translate("Common.Yes"),callback:()=>{this._sc.delete(s)}}]})},buttons:[{icon:"cloud_download",click:s=>{this._form.modalUnique("links","url",s)}}]}}};e.\u0275fac=function(i){return new(i||e)(c(x),c(f),c(A),c(L),c(m),c(b))},e.\u0275cmp=I({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["title","Links",3,"columns","config","rows"]],template:function(i,o){i&1&&_(0,"wtable",0),i&2&&S("columns",o.columns)("config",o.config)("rows",o.rows)},dependencies:[B]});let t=e;return t})();var P=[{path:"",component:p},{path:":link_id",component:p}],V=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=y({type:e}),e.\u0275inj=k({imports:[j.forChild(P),T]});let t=e;return t})();export{V as LinksModule};
