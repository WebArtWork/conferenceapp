import{i as T}from"./chunk-GINPEAZQ.js";import{$a as x,A as c,Ba as _,E as C,Ia as l,K as j,La as g,Ma as I,Na as w,Qa as f,Ua as S,cb as k,j as u,k as h,m,n as v,o as b,xa as y}from"./chunk-KFEDSICO.js";var M=(()=>{let e=class e extends g{constructor(r,t,n,a){super({name:"conference"},r,t,n,a),this.conferences=[],this.get().subscribe(s=>this.conferences.push(...s)),a.on("conference_create").subscribe(s=>{this.conferences.push(s)}),a.on("conference_delete").subscribe(s=>{this.conferences.splice(this.conferences.findIndex(p=>p._id===s._id),1)})}};e.\u0275fac=function(t){return new(t||e)(m(w),m(I),m(f),m(l))},e.\u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var A=(()=>{let e=class e{get rows(){return this._sc.conferences}constructor(r,t,n,a,s,p){this._translate=r,this._alert=t,this._sc=n,this._form=a,this._core=s,this._router=p,this.columns=["name","description"],this.form=this._form.getForm("conferences",{formId:"conferences",title:"Conferences",components:[{name:"Text",key:"name",focused:!0,fields:[{name:"Placeholder",value:"fill conferences title"},{name:"Label",value:"Title"}]},{name:"Text",key:"description",fields:[{name:"Placeholder",value:"fill conferences description"},{name:"Label",value:"Description"}]}]}),this.config={create:()=>{this._form.modal(this.form,{label:"Create",click:(o,d)=>{this._sc.create(o),d()}})},update:o=>{this._form.modal(this.form,[],o).then(d=>{this._core.copy(d,o),this._sc.update(o)})},delete:o=>{this._alert.question({text:this._translate.translate("Common.Are you sure you want to delete this Conference?"),buttons:[{text:this._translate.translate("Common.No")},{text:this._translate.translate("Common.Yes"),callback:()=>{this._sc.delete(o)}}]})},buttons:[{icon:"cloud_download",click:o=>{this._form.modalUnique("conferences","url",o)}},{icon:"cast",click:o=>{this._router.navigateByUrl("/sessions/"+o._id)}}]}}};e.\u0275fac=function(t){return new(t||e)(c(S),c(f),c(M),c(k),c(l),c(y))},e.\u0275cmp=v({type:e,selectors:[["ng-component"]],decls:1,vars:3,consts:[["title","Conferences",3,"columns","config","rows"]],template:function(t,n){t&1&&j(0,"wtable",0),t&2&&C("columns",n.columns)("config",n.config)("rows",n.rows)},dependencies:[x]});let i=e;return i})();var q=[{path:"",component:A}],G=(()=>{let e=class e{};e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=b({type:e}),e.\u0275inj=h({imports:[_.forChild(q),T]});let i=e;return i})();export{G as ConferencesModule};
