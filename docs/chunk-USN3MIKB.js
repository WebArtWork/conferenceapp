import{a as k,h as $}from"./chunk-6P3OES2T.js";import"./chunk-6F5R2FFA.js";import{A as x,Aa as P,B as s,E as d,G as c,Ha as v,J as _,K as g,O as y,Oa as j,P as M,Q as l,Sa as F,Va as I,_a as S,cb as T,db as U,k as h,la as O,m as u,n as C,r as b,s as w}from"./chunk-Y6LYE74S.js";function D(t,e){if(t&1){let a=y();_(0,"winput",3),M("wChange",function(n){let r=b(a).$implicit,m=l().$implicit,p=l();return r.is[m]=n,w(p.update(r))}),g()}if(t&2){let a=e.$implicit,i=l().$implicit;c("value",a.is[i])}}function V(t,e){if(t&1&&d(0,D,1,1,"ng-template",2),t&2){let a=e.$implicit;c("cell",a)}}var N=(()=>{let e=class e{get roles(){return this._us.roles}get users(){return this._us.users}constructor(i,n,r,m,p){this._translate=i,this._us=n,this._form=r,this._alert=m,this._core=p,this.form=this._form.getForm("user"),this.config={create:()=>{this._form.modal(this.form,{label:"Create",click:(o,f)=>{this._us.create(o,{alert:"User has been created",callback:f.bind(this)})}}).then(this._us.create.bind(this))},update:o=>{this._form.modal(this.form,[],o).then(f=>{this._core.copy(f,o),this._us.update(o,{alert:"User has been updated"})})},delete:o=>{this._alert.question({text:this._translate.translate("Common.Are you sure you want to delete this user?"),buttons:[{text:this._translate.translate("Common.No")},{text:this._translate.translate("Common.Yes"),callback:()=>{this._us.delete(o,{name:"admin",alert:"User has been deleted",callback:()=>{}})}}]})}},this.columns=["name","email"];for(let o of this._us.roles)this.columns.push(o)}update(i){this._us.updateAdmin(i)}};e.\u0275fac=function(n){return new(n||e)(s(F),s(k),s(S),s(j),s(v))},e.\u0275cmp=u({type:e,selectors:[["app-users"]],decls:2,vars:4,consts:[[3,"columns","config","rows"],[4,"ngFor","ngForOf"],[3,"cell"],["type","checkbox",3,"wChange","value"]],template:function(n,r){n&1&&(_(0,"wtable",0),d(1,V,1,1,null,1),g()),n&2&&(c("columns",r.columns)("config",r.config)("rows",r.users),x(),c("ngForOf",r.roles))},dependencies:[O,I,U,T],styles:["[_ngcontent-%COMP%]:root{--c-white: #fff;--c-basic: #3558ae;--c-primary: #256eff;--c-primary-hover: #0051f1;--c-secondary: red;--c-bg-primary: #f3f4f7;--c-bg-secondary: #ffffff;--c-bg-tertiary: #fcfdfe;--c-border: #f0f1f7;--c-shadow: #f3f3f3;--c-text-primary: #666666;--c-text-secondary: #19235c;--c-placeholder: #adb8c6;--c-img-round: 50%}html.dark[_ngcontent-%COMP%]:root{--c-white: #fff;--c-basic: #333;--c-bg-primary: #282828;--c-bg-secondary: #343434;--c-bg-tertiary: #404040;--c-border: #404040;--c-shadow: #444444;--c-text-primary: #ffffff;--c-text-secondary: #ffffff;--c-placeholder: #7a7a7a}.w-table-user[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap}.w-table-user__img[_ngcontent-%COMP%]{width:30px;height:30px;min-width:30px;min-height:30px;margin-right:10px}.w-table-user__img[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%;border-radius:var(--b-radius-img)}@media (max-width: 991.9px){.w-table-user__img[_ngcontent-%COMP%]{display:none}}@media (max-width: 991.9px){.w-table[_ngcontent-%COMP%]   .email[_ngcontent-%COMP%], .w-table[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%]{display:none}}.w-table[_ngcontent-%COMP%]   .checkbox[_ngcontent-%COMP%]{height:18px;max-height:18px;display:block}.w-table[_ngcontent-%COMP%]   .checkbox__body[_ngcontent-%COMP%]{padding:2px}.users-field[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:flex-end}.users-field[_ngcontent-%COMP%]   .w-btn[_ngcontent-%COMP%]{margin:10px}.users-field[_ngcontent-%COMP%]   .forms[_ngcontent-%COMP%]{width:100%}@media (max-width: 575.9px){.users-field[_ngcontent-%COMP%]{flex-direction:column;align-items:center}.users-field[_ngcontent-%COMP%]   .w-btn[_ngcontent-%COMP%]{margin-bottom:20px;width:100%}}.w-table__td.actions[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]{transition:var(--transition)}.w-table__td.actions[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]:hover{color:var(--c-error)}.w-table__td.actions[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] + i[_ngcontent-%COMP%]{margin-left:15px}.users__header[_ngcontent-%COMP%]{letter-spacing:0;line-height:23px;font-weight:500;font-size:20px;color:var(--c-text-primary);display:flex;justify-content:space-between;align-items:center;border-radius:var(--b-radius)}"]});let t=e;return t})();var E=[{path:"",component:N}],X=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=C({type:e}),e.\u0275inj=h({imports:[P.forChild(E),$]});let t=e;return t})();export{X as UsersModule};
