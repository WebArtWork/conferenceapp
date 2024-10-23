import{a as z}from"./chunk-MJGZQ2NV.js";import{a as V}from"./chunk-ZED4WO2F.js";import{a as L}from"./chunk-BIDSNZAX.js";import{a as R}from"./chunk-V3CUS5ZS.js";import{a as G}from"./chunk-D7OQTUTI.js";import{a as U}from"./chunk-ZGQ7XGOZ.js";import{a as Q}from"./chunk-ZBP6DZBY.js";import{a as $}from"./chunk-ZSEPNPNW.js";import{a as N}from"./chunk-GYE7HX3V.js";import{a as P}from"./chunk-M2LIFLUD.js";import"./chunk-5YTB6EZD.js";import{i as w,j as D,k as j}from"./chunk-LUCCG7SP.js";import{Aa as q,B as o,C as u,E as h,Ea as T,G as l,K as i,L as n,M as f,Q as _,R as C,Z as a,_ as p,eb as b,k as E,o as v,p as M,pa as S,qa as I,u as F,z as O}from"./chunk-VFNXFQAG.js";function se(t,e){if(t&1&&(i(0,"div",2)(1,"h2"),a(2),n(),i(3,"p"),a(4),n()()),t&2){let c=e.$implicit;o(2),p(c.name),o(2),p(c.description)}}var A=(()=>{let e=class e{};e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=v({type:e,selectors:[["app-speaker-links"]],inputs:{links:"links"},decls:6,vars:1,consts:[[1,"scrollable-container"],["class","item",4,"ngFor","ngForOf"],[1,"item"]],template:function(s,r){s&1&&(i(0,"div")(1,"h1"),a(2,"Links"),n(),f(3,"hr"),i(4,"div",0),h(5,se,5,2,"div",1),n()()),s&2&&(o(5),l("ngForOf",r.links))},dependencies:[S]});let t=e;return t})();function oe(t,e){if(t&1&&(i(0,"div",2)(1,"p"),a(2),n()()),t&2){let c=e.$implicit;o(2),p(c.question)}}var B=(()=>{let e=class e{};e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=v({type:e,selectors:[["app-speaker-polls"]],inputs:{polls:"polls"},decls:6,vars:1,consts:[[1,"scrollable-container"],["class","item",4,"ngFor","ngForOf"],[1,"item"]],template:function(s,r){s&1&&(i(0,"div")(1,"h1"),a(2,"Polls"),n(),f(3,"hr"),i(4,"div",0),h(5,oe,3,1,"div",1),n()()),s&2&&(o(5),l("ngForOf",r.polls))},dependencies:[S]});let t=e;return t})();function re(t,e){if(t&1&&(i(0,"div",2)(1,"h2"),a(2),n(),i(3,"p"),a(4),n()()),t&2){let c=e.$implicit;o(2),p(c.name),o(2),p(c.description)}}var H=(()=>{let e=class e{};e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=v({type:e,selectors:[["app-speaker-qnas"]],inputs:{qnas:"qnas"},decls:6,vars:1,consts:[[1,"scrollable-container"],["class","item",4,"ngFor","ngForOf"],[1,"item"]],template:function(s,r){s&1&&(i(0,"div")(1,"h1"),a(2,"Qnas"),n(),f(3,"hr"),i(4,"div",0),h(5,re,5,2,"div",1),n()()),s&2&&(o(5),l("ngForOf",r.qnas))},dependencies:[S]});let t=e;return t})();var J=(()=>{let e=class e{};e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=v({type:e,selectors:[["app-speaker-session"]],inputs:{session:"session"},decls:6,vars:2,template:function(s,r){s&1&&(i(0,"div")(1,"h2"),a(2),n(),i(3,"p"),a(4),n(),f(5,"hr"),n()),s&2&&(o(2),p(r.session.name),o(2),p(r.session.description))}});let t=e;return t})();function pe(t,e){if(t&1&&(i(0,"div",5)(1,"a",6)(2,"h2"),a(3),n(),i(4,"p"),a(5),n()()()),t&2){let c=e.$implicit;o(),l("href","/#/speaker/"+c._id,O),o(2),p(c.name),o(2),p(c.description)}}function le(t,e){if(t&1&&(i(0,"div",3),h(1,pe,6,3,"div",4),n()),t&2){let c=C();o(),l("ngForOf",c.sessions)}}var K=(()=>{let e=class e{constructor(){this.isCollapsed=!1}};e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=v({type:e,selectors:[["app-speaker-sessions"]],inputs:{sessions:"sessions"},decls:8,vars:2,consts:[[1,"collapsible-button",3,"click"],[1,"material-icons"],["class","collapsible-content scrollable-container",4,"ngIf"],[1,"collapsible-content","scrollable-container"],["class","item",4,"ngFor","ngForOf"],[1,"item"],[3,"href"]],template:function(s,r){s&1&&(i(0,"div")(1,"h1",0),_("click",function(){return r.isCollapsed=!r.isCollapsed}),i(2,"span"),a(3,"Sessions"),n(),i(4,"i",1),a(5),n()(),f(6,"hr"),h(7,le,2,1,"div",2),n()),s&2&&(o(5),p(r.isCollapsed?"expand_less":"expand_more"),o(2),l("ngIf",r.isCollapsed))},dependencies:[S,I]});let t=e;return t})();function me(t,e){if(t&1&&(i(0,"div",5),F(),i(1,"svg"),a(2),n()()),t&2){let c=e.$implicit;o(2),p(c.svg)}}function de(t,e){if(t&1&&(i(0,"div",3),h(1,me,3,1,"div",4),n()),t&2){let c=C();o(),l("ngForOf",c.reactions)}}var W=(()=>{let e=class e{constructor(){this.isCollapsed=!1}};e.\u0275fac=function(s){return new(s||e)},e.\u0275cmp=v({type:e,selectors:[["app-speaker-reactions"]],inputs:{reactions:"reactions"},decls:8,vars:2,consts:[[1,"collapsible-button",3,"click"],[1,"material-icons"],["class","collapsible-content scrollable-container",4,"ngIf"],[1,"collapsible-content","scrollable-container"],["class","item",4,"ngFor","ngForOf"],[1,"item"]],template:function(s,r){s&1&&(i(0,"div")(1,"h1",0),_("click",function(){return r.isCollapsed=!r.isCollapsed}),i(2,"span"),a(3,"Reactions"),n(),i(4,"i",1),a(5),n()(),f(6,"hr"),h(7,de,2,1,"div",2),n()),s&2&&(o(5),p(r.isCollapsed?"expand_less":"expand_more"),o(2),l("ngIf",r.isCollapsed))},dependencies:[S,I]});let t=e;return t})();function ve(t,e){if(t&1&&f(0,"app-speaker-sessions",11),t&2){let c=C();l("sessions",c.sessions)}}function he(t,e){if(t&1&&f(0,"app-speaker-session",12),t&2){let c=C();l("session",c.session)}}var y=(()=>{let e=class e{constructor(d,s,r,k,X,Y,Z,ee,te,ie,ne){this._pollService=d,this._reactionService=s,this._qnaService=r,this._questionService=k,this._commentService=X,this._messageService=Y,this._noteService=Z,this._linkService=ee,this._ss=te,this._modal=ie,this._router=ne,this.sessions=this._ss.conferencesessions,this.sessionId=this._router.url.includes("/speaker/")?this._router.url.replace("/speaker/",""):"",this.session=this.sessionId?this.sessions.find(m=>m._id===this.sessionId)||{}:{},this.links=this.sessionId?this._linkService.conferencelinks.filter(m=>m.session===this.sessionId)||[]:[],this.comments=this.sessionId?this._commentService.conferencecomments.filter(m=>m.session===this.sessionId)||[]:[],this.polls=this.sessionId?this._pollService.conferencepolls.filter(m=>m.session===this.sessionId)||[]:[],this.qnas=this.sessionId?this._qnaService.conferenceqnas.filter(m=>m.session===this.sessionId)||[]:[],this.reactions=this.sessionId?this._reactionService.conferencereactions.filter(m=>m.session===this.sessionId)||[]:this._reactionService.conferencereactions,this.messages=this.sessionId?this._messageService.conferencemessages.filter(m=>m.session===this.sessionId)||[]:this._messageService.conferencemessages,this.notes=this.sessionId?this._noteService.conferencenotes.filter(m=>m.session===this.sessionId)||[]:this._noteService.conferencenotes,this.questions=this.sessionId?this._questionService.conferencequestions.filter(m=>m.session===this.sessionId)||[]:this._questionService.conferencequestions}OpenModalLinks(){this._modal.show({component:A,links:this.links})}OpenModalComment(){this._modal.show({component:N,comments:this.comments})}OpenModalPoll(){this._modal.show({component:B,polls:this.polls})}OpenModalQna(){this._modal.show({component:H,qnas:this.qnas})}};e.\u0275fac=function(s){return new(s||e)(u(G),u($),u(U),u(Q),u(V),u(L),u(R),u(z),u(P),u(b),u(q))},e.\u0275cmp=v({type:e,selectors:[["ng-component"]],decls:29,vars:10,consts:[[1,"container"],[1,"sidebar"],[1,"counter",3,"click"],[1,"material-icons"],[1,"content"],[3,"sessions",4,"ngIf"],[3,"session",4,"ngIf"],[3,"notes"],["type","messages",3,"messages"],["type","questions",3,"questions"],[3,"reactions"],[3,"sessions"],[3,"session"]],template:function(s,r){s&1&&(i(0,"div",0)(1,"div",1)(2,"div",2),_("click",function(){return r.OpenModalLinks()}),i(3,"i",3),a(4,"link"),n(),i(5,"span"),a(6),n()(),i(7,"div",2),_("click",function(){return r.OpenModalComment()}),i(8,"i",3),a(9,"forum"),n(),i(10,"span"),a(11),n()(),i(12,"div",2),_("click",function(){return r.OpenModalPoll()}),i(13,"i",3),a(14,"poll"),n(),i(15,"span"),a(16),n()(),i(17,"div",2),_("click",function(){return r.OpenModalQna()}),i(18,"i",3),a(19,"live_help"),n(),i(20,"span"),a(21),n()()(),i(22,"div",4),h(23,ve,1,1,"app-speaker-sessions",5)(24,he,1,1,"app-speaker-session",6),f(25,"app-notes",7)(26,"app-chat",8)(27,"app-chat",9)(28,"app-speaker-reactions",10),n()()),s&2&&(o(6),p(r.links.length),o(5),p(r.comments.length),o(5),p(r.polls.length),o(5),p(r.qnas.length),o(2),l("ngIf",!r.sessionId),o(),l("ngIf",r.sessionId),o(),l("notes",r.notes),o(),l("messages",r.messages),o(),l("questions",r.questions),o(),l("reactions",r.reactions))},dependencies:[I,w,D,J,K,W],styles:[".counter[_ngcontent-%COMP%]{cursor:pointer}.container[_ngcontent-%COMP%]{display:flex;flex-direction:row}.sidebar[_ngcontent-%COMP%]{width:100px;padding:20px 10px}.content[_ngcontent-%COMP%]{width:100%}"]});let t=e;return t})();var ue=[{path:"",component:y},{path:":speaker_id",component:y}],Ze=(()=>{let e=class e{};e.\u0275fac=function(s){return new(s||e)},e.\u0275mod=M({type:e}),e.\u0275inj=E({imports:[T.forChild(ue),j]});let t=e;return t})();export{Ze as SpeakerModule};