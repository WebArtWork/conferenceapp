import{a as S}from"./chunk-5YTB6EZD.js";import{La as h,Oa as d,Pa as f,Qa as p,Ta as I,j as o,m as i,n as a}from"./chunk-VFNXFQAG.js";var B=(()=>{let e=class e extends d{constructor(c,t,l,r){super({name:"conferenceqna"},c,t,l,r),this._helper=a(S),this.conferenceqnas=[],this.qnasBySessionId={},this.setQnasBySessionId=this._helper.createParentIdToChildrenIds(this.qnasBySessionId,this.conferenceqnas,"session"),this.get().subscribe(s=>{this.conferenceqnas.push(...s),this.setQnasBySessionId()}),r.on("conferenceqna_create").subscribe(s=>{this.conferenceqnas.push(s),this.setQnasBySessionId()}),r.on("conferenceqna_delete").subscribe(s=>{this.conferenceqnas.splice(this.conferenceqnas.findIndex(m=>m._id===s._id),1),this.setQnasBySessionId()})}};e.\u0275fac=function(t){return new(t||e)(i(p),i(f),i(I),i(h))},e.\u0275prov=o({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();export{B as a};
