import{a as w}from"./chunk-UDI6VNAT.js";import"./chunk-TBFD5B5Q.js";import{k as g}from"./chunk-XOPFU43L.js";import{B as s,Ca as u,F as d,Ja as v,L as h,Ra as _,Va as C,ab as I,db as y,k as a,o as l,p as f,ya as p}from"./chunk-HOEKJOMB.js";var c=(()=>{let e=class e{get rows(){return this.sessionId?this._sc.commentsBySessionId[this.sessionId]||[]:this._sc.conferencecomments}constructor(r,i,n,b,j,S){this._translate=r,this._alert=i,this._sc=n,this._form=b,this._core=j,this._router=S,this.sessionId=this._router.url.includes("/comments/")?this._router.url.replace("/comments/",""):"",this.columns=["name","description"],this.form=this._form.getForm("comments",{formId:"comments",title:"Comments",components:[{name:"Text",key:"name",focused:!0,fields:[{name:"Placeholder",value:"fill comments title"},{name:"Label",value:"Title"}]},{name:"Text",key:"description",fields:[{name:"Placeholder",value:"fill comments description"},{name:"Label",value:"Description"}]}]}),this.config={create:()=>{this._form.modal(this.form,{label:"Create",click:(t,m)=>{this.sessionId&&(t.session=this.sessionId),this._sc.create(t),m()}})},update:t=>{this._form.modal(this.form,[],t).then(m=>{this._core.copy(m,t),this._sc.update(t)})},delete:t=>{this._alert.question({text:this._translate.translate("Common.Are you sure you want to delete this Conferencecomment?"),buttons:[{text:this._translate.translate("Common.No")},{text:this._translate.translate("Common.Yes"),callback:()=>{this._sc.delete(t)}}]})},buttons:[{icon:"cloud_download",click:t=>{this._form.modalUnique("comments","url",t)}}]}}};e.\u0275fac=function(i){return new(i||e)(s(C),s(_),s(w),s(y),s(v),s(p))},e.\u0275cmp=l({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["title","Comments",3,"columns","config","rows"]],template:function(i,n){i&1&&h(0,"wtable",0),i&2&&d("columns",n.columns)("config",n.config)("rows",n.rows)},dependencies:[I]});let o=e;return o})();var k=[{path:"",component:c},{path:":comment_id",component:c}],B=(()=>{let e=class e{};e.\u0275fac=function(i){return new(i||e)},e.\u0275mod=f({type:e}),e.\u0275inj=a({imports:[u.forChild(k),g]});let o=e;return o})();export{B as CommentsModule};