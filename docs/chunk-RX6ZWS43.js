import{a as g}from"./chunk-X7527GYE.js";import"./chunk-TBFD5B5Q.js";import{k as y}from"./chunk-BS2Z273D.js";import{B as s,Ca as u,F as d,Ja as v,L as h,Ra as _,Va as q,ab as I,db as C,k as m,o as l,p as f,ya as p}from"./chunk-HOEKJOMB.js";var c=(()=>{let e=class e{get rows(){return this.sessionId?this._sc.qnasBySessionId[this.sessionId]||[]:this._sc.conferenceqnas}constructor(r,i,n,w,b,j){this._translate=r,this._alert=i,this._sc=n,this._form=w,this._core=b,this._router=j,this.sessionId=this._router.url.includes("/qnas/")?this._router.url.replace("/qnas/",""):"",this.columns=["name","description"],this.form=this._form.getForm("qnas",{formId:"qnas",title:"Qnas",components:[{name:"Text",key:"name",focused:!0,fields:[{name:"Placeholder",value:"fill qnas title"},{name:"Label",value:"Title"}]},{name:"Text",key:"description",fields:[{name:"Placeholder",value:"fill qnas description"},{name:"Label",value:"Description"}]}]}),this.config={create:()=>{this._form.modal(this.form,{label:"Create",click:(t,a)=>{this.sessionId&&(t.session=this.sessionId),this._sc.create(t),a()}})},update:t=>{this._form.modal(this.form,[],t).then(a=>{this._core.copy(a,t),this._sc.update(t)})},delete:t=>{this._alert.question({text:this._translate.translate("Common.Are you sure you want to delete this Conferenceqna?"),buttons:[{text:this._translate.translate("Common.No")},{text:this._translate.translate("Common.Yes"),callback:()=>{this._sc.delete(t)}}]})},buttons:[{icon:"cloud_download",click:t=>{this._form.modalUnique("qnas","url",t)}}]}}};e.\u0275fac=function(i){return new(i||e)(s(q),s(_),s(g),s(C),s(v),s(p))},e.\u0275cmp=l({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["title","Qnas",3,"columns","config","rows"]],template:function(i,n){i&1&&h(0,"wtable",0),i&2&&d("columns",n.columns)("config",n.config)("rows",n.rows)},dependencies:[I]});let o=e;return o})();var T=[{path:"",component:c},{path:":qna_id",component:c}],B=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=f({type:e}),e.\u0275inj=m({imports:[u.forChild(T),y]});let o=e;return o})();export{B as QnasModule};
