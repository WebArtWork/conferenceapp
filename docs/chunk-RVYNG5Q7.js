import{a as w}from"./chunk-UQMI4Q3B.js";import"./chunk-TBFD5B5Q.js";import{k as g}from"./chunk-BS2Z273D.js";import{B as s,Ca as u,F as d,Ja as v,L as h,Ra as _,Va as I,ab as C,db as y,k as m,o as l,p as f,ya as p}from"./chunk-HOEKJOMB.js";var a=(()=>{let e=class e{get rows(){return this.sessionId?this._sc.notesBySessionId[this.sessionId]||[]:this._sc.conferencenotes}constructor(r,i,n,b,j,S){this._translate=r,this._alert=i,this._sc=n,this._form=b,this._core=j,this._router=S,this.sessionId=this._router.url.includes("/notes/")?this._router.url.replace("/notes/",""):"",this.columns=["name","description"],this.form=this._form.getForm("notes",{formId:"notes",title:"Notes",components:[{name:"Text",key:"name",focused:!0,fields:[{name:"Placeholder",value:"fill notes title"},{name:"Label",value:"Title"}]},{name:"Text",key:"description",fields:[{name:"Placeholder",value:"fill notes description"},{name:"Label",value:"Description"}]}]}),this.config={create:()=>{this._form.modal(this.form,{label:"Create",click:(t,c)=>{this.sessionId&&(t.session=this.sessionId),this._sc.create(t),c()}})},update:t=>{this._form.modal(this.form,[],t).then(c=>{this._core.copy(c,t),this._sc.update(t)})},delete:t=>{this._alert.question({text:this._translate.translate("Common.Are you sure you want to delete this Conferencenote?"),buttons:[{text:this._translate.translate("Common.No")},{text:this._translate.translate("Common.Yes"),callback:()=>{this._sc.delete(t)}}]})},buttons:[{icon:"cloud_download",click:t=>{this._form.modalUnique("notes","url",t)}}]}}};e.\u0275fac=function(i){return new(i||e)(s(I),s(_),s(w),s(y),s(v),s(p))},e.\u0275cmp=l({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["title","Notes",3,"columns","config","rows"]],template:function(i,n){i&1&&h(0,"wtable",0),i&2&&d("columns",n.columns)("config",n.config)("rows",n.rows)},dependencies:[C]});let o=e;return o})();var k=[{path:"",component:a},{path:":note_id",component:a}],B=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=f({type:e}),e.\u0275inj=m({imports:[u.forChild(k),g]});let o=e;return o})();export{B as NotesModule};
