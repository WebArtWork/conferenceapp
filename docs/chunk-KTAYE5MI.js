import{a as k}from"./chunk-TBFD5B5Q.js";import{Ja as l,Ma as d,Na as f,Oa as p,Ra as a,j as o,m as s,n as h}from"./chunk-HOEKJOMB.js";var B=(()=>{let e=class e extends d{constructor(c,t,I,r){super({name:"conferencelink"},c,t,I,r),this._helper=h(k),this.conferencelinks=[],this.linksBySessionId={},this.setLinksBySessionId=this._helper.createParentIdToChildrenIds(this.linksBySessionId,this.conferencelinks,"session"),this.get().subscribe(i=>{this.conferencelinks.push(...i),this.setLinksBySessionId()}),r.on("conferencelink_create").subscribe(i=>{this.conferencelinks.push(i),this.setLinksBySessionId()}),r.on("conferencelink_delete").subscribe(i=>{this.conferencelinks.splice(this.conferencelinks.findIndex(S=>S._id===i._id),1),this.setLinksBySessionId()})}};e.\u0275fac=function(t){return new(t||e)(s(p),s(f),s(a),s(l))},e.\u0275prov=o({token:e,factory:e.\u0275fac,providedIn:"root"});let n=e;return n})();export{B as a};
