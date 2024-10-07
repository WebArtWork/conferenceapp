import{a as I}from"./chunk-46L23NRM.js";import"./chunk-TBFD5B5Q.js";import{k as C}from"./chunk-BS2Z273D.js";import{B as s,Ca as p,F as d,Ja as _,L as h,Ra as v,Va as g,ab as y,db as k,k as l,o as m,p as f,ya as u}from"./chunk-HOEKJOMB.js";var a=(()=>{let t=class t{get rows(){return this.conferenceId?this._sc.sessionsByConferenceId[this.conferenceId]||[]:this._sc.conferencesessions}constructor(n,i,r,w,B,U){this._translate=n,this._alert=i,this._sc=r,this._form=w,this._core=B,this._router=U,this.conferenceId=this._router.url.includes("/sessions/")?this._router.url.replace("/sessions/",""):"",this.columns=["name","description"],this.form=this._form.getForm("sessions",{formId:"sessions",title:"Sessions",components:[{name:"Text",key:"name",focused:!0,fields:[{name:"Placeholder",value:"fill sessions title"},{name:"Label",value:"Title"}]},{name:"Text",key:"description",fields:[{name:"Placeholder",value:"fill sessions description"},{name:"Label",value:"Description"}]}]}),this.config={create:()=>{this._form.modal(this.form,{label:"Create",click:(e,c)=>{this.conferenceId&&(e.conference=this.conferenceId),this._sc.create(e),c()}})},update:e=>{this._form.modal(this.form,[],e).then(c=>{this._core.copy(c,e),this._sc.update(e)})},delete:e=>{this._alert.question({text:this._translate.translate("Common.Are you sure you want to delete this Conferencesession?"),buttons:[{text:this._translate.translate("Common.No")},{text:this._translate.translate("Common.Yes"),callback:()=>{this._sc.delete(e)}}]})},buttons:[{icon:"cloud_download",click:e=>{this._form.modalUnique("sessions","url",e)}},{icon:"link",click:e=>{this._router.navigateByUrl("/links/"+e._id)}},{icon:"forum",click:e=>{this._router.navigateByUrl("/comments/"+e._id)}},{icon:"message",click:e=>{this._router.navigateByUrl("/messages/"+e._id)}},{icon:"note",click:e=>{this._router.navigateByUrl("/notes/"+e._id)}},{icon:"poll",click:e=>{this._router.navigateByUrl("/polls/"+e._id)}},{icon:"live_help",click:e=>{this._router.navigateByUrl("/qnas/"+e._id)}},{icon:"contact_support",click:e=>{this._router.navigateByUrl("/questions/"+e._id)}},{icon:"favorite",click:e=>{this._router.navigateByUrl("/reactions/"+e._id)}}]}}};t.\u0275fac=function(i){return new(i||t)(s(g),s(v),s(I),s(k),s(_),s(u))},t.\u0275cmp=m({type:t,selectors:[["ng-component"]],decls:1,vars:3,consts:[["title","Sessions",3,"columns","config","rows"]],template:function(i,r){i&1&&h(0,"wtable",0),i&2&&d("columns",r.columns)("config",r.config)("rows",r.rows)},dependencies:[y]});let o=t;return o})();var j=[{path:"",component:a},{path:":session_id",component:a}],P=(()=>{let t=class t{};t.\u0275fac=function(i){return new(i||t)},t.\u0275mod=f({type:t}),t.\u0275inj=l({imports:[p.forChild(j),C]});let o=t;return o})();export{P as SessionsModule};
