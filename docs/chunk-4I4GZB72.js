import{a as b}from"./chunk-KTAYE5MI.js";import{a as $}from"./chunk-UDI6VNAT.js";import{a as z}from"./chunk-Z4IP6HMX.js";import{a as U}from"./chunk-UQMI4Q3B.js";import{a as P}from"./chunk-V5HLRYLJ.js";import{a as Q}from"./chunk-X7527GYE.js";import{a as R}from"./chunk-ZDVQHVNV.js";import{a as L}from"./chunk-OBHVOQZM.js";import{a as N}from"./chunk-JZQEN5BD.js";import{a as A}from"./chunk-46L23NRM.js";import"./chunk-TBFD5B5Q.js";import{i as D,j,k as w}from"./chunk-FSVJJL4R.js";import{A as o,B as h,Ca as O,D as u,F as c,J as s,K as i,L as m,P as C,Q as g,Y as r,Z as p,cb as T,k as y,na as S,o as v,oa as M,p as E,y as F,ya as q}from"./chunk-HOEKJOMB.js";function ne(t,e){if(t&1&&(s(0,"div")(1,"h1"),r(2,"Links"),i(),m(3,"hr"),s(4,"h1"),r(5),i(),s(6,"p"),r(7),i(),m(8,"hr"),i()),t&2){let l=e.$implicit;o(5),p(l.name),o(2),p(l.description)}}var B=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=v({type:e,selectors:[["app-speaker-links"]],inputs:{links:"links"},decls:1,vars:1,consts:[[4,"ngFor","ngForOf"]],template:function(n,a){n&1&&u(0,ne,9,2,"div",0),n&2&&c("ngForOf",a.links)},dependencies:[S]});let t=e;return t})();function se(t,e){if(t&1&&(s(0,"div")(1,"h2"),r(2),i(),s(3,"p"),r(4),i(),m(5,"hr"),i()),t&2){let l=e.$implicit;o(2),p(l.name),o(2),p(l.description)}}var G=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=v({type:e,selectors:[["app-speaker-polls"]],inputs:{polls:"polls"},decls:5,vars:1,consts:[[4,"ngFor","ngForOf"]],template:function(n,a){n&1&&(s(0,"div")(1,"h1"),r(2,"Polls"),i(),m(3,"hr"),u(4,se,6,2,"div",0),i()),n&2&&(o(4),c("ngForOf",a.polls))},dependencies:[S]});let t=e;return t})();function oe(t,e){if(t&1&&(s(0,"div")(1,"h2"),r(2),i(),s(3,"p"),r(4),i(),m(5,"hr"),i()),t&2){let l=e.$implicit;o(2),p(l.name),o(2),p(l.description)}}var H=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=v({type:e,selectors:[["app-speaker-qnas"]],inputs:{qnas:"qnas"},decls:5,vars:1,consts:[[4,"ngFor","ngForOf"]],template:function(n,a){n&1&&(s(0,"div")(1,"h1"),r(2,"Qnas"),i(),m(3,"hr"),u(4,oe,6,2,"div",0),i()),n&2&&(o(4),c("ngForOf",a.qnas))},dependencies:[S]});let t=e;return t})();var J=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=v({type:e,selectors:[["app-speaker-session"]],inputs:{session:"session"},decls:6,vars:2,template:function(n,a){n&1&&(s(0,"div")(1,"h2"),r(2),i(),s(3,"p"),r(4),i(),m(5,"hr"),i()),n&2&&(o(2),p(a.session.name),o(2),p(a.session.description))}});let t=e;return t})();function ae(t,e){if(t&1&&(s(0,"div")(1,"a",1)(2,"h2"),r(3),i(),s(4,"p"),r(5),i()(),m(6,"hr"),i()),t&2){let l=e.$implicit;o(),c("href","/#/speaker/"+l._id,F),o(2),p(l.name),o(2),p(l.description)}}var K=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=v({type:e,selectors:[["app-speaker-sessions"]],inputs:{sessions:"sessions"},decls:5,vars:1,consts:[[4,"ngFor","ngForOf"],[3,"href"]],template:function(n,a){n&1&&(s(0,"div")(1,"h1"),r(2,"Sessions"),i(),m(3,"hr"),u(4,ae,7,3,"div",0),i()),n&2&&(o(4),c("ngForOf",a.sessions))},dependencies:[S]});let t=e;return t})();function me(t,e){if(t&1&&(s(0,"div")(1,"h2"),r(2),i(),s(3,"p"),r(4),i(),m(5,"hr"),i()),t&2){let l=e.$implicit;o(2),p(l.name),o(2),p(l.description)}}var V=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=v({type:e,selectors:[["app-speaker-reactions"]],inputs:{reactions:"reactions"},decls:5,vars:1,consts:[[4,"ngFor","ngForOf"]],template:function(n,a){n&1&&(s(0,"div")(1,"h1"),r(2,"Reactions"),i(),m(3,"hr"),u(4,me,6,2,"div",0),i()),n&2&&(o(4),c("ngForOf",a.reactions))},dependencies:[S]});let t=e;return t})();function le(t,e){if(t&1&&m(0,"app-speaker-sessions",7),t&2){let l=g();c("sessions",l.sessions)}}function de(t,e){if(t&1&&m(0,"app-speaker-session",8),t&2){let l=g();c("session",l.session)}}var x=(()=>{let e=class e{constructor(f,n,a,_,W,X,Y,Z,ee,te,ie){this._pollService=f,this._reactionService=n,this._qnaService=a,this._questionService=_,this._commentService=W,this._messageService=X,this._noteService=Y,this._linkService=Z,this._ss=ee,this._modal=te,this._router=ie,this.sessions=this._ss.conferencesessions,this.sessionId=this._router.url.includes("/speaker/")?this._router.url.replace("/speaker/",""):"",this.session=this.sessionId?this.sessions.find(d=>d._id===this.sessionId)||{}:{},this.links=this.sessionId?this._linkService.conferencelinks.filter(d=>d.session===this.sessionId)||[]:[],this.comments=this.sessionId?this._commentService.conferencecomments.filter(d=>d.session===this.sessionId)||[]:[],this.polls=this.sessionId?this._pollService.conferencepolls.filter(d=>d.session===this.sessionId)||[]:[],this.qnas=this.sessionId?this._qnaService.conferenceqnas.filter(d=>d.session===this.sessionId)||[]:[],this.reactions=this.sessionId?this._reactionService.conferencereactions.filter(d=>d.session===this.sessionId)||[]:this._reactionService.conferencereactions,this.messages=this.sessionId?this._messageService.conferencemessages.filter(d=>d.session===this.sessionId)||[]:this._messageService.conferencemessages,this.notes=this.sessionId?this._noteService.conferencenotes.filter(d=>d.session===this.sessionId)||[]:this._noteService.conferencenotes,this.questions=this.sessionId?this._questionService.conferencequestions.filter(d=>d.session===this.sessionId)||[]:this._questionService.conferencequestions}OpenModalLinks(){this._modal.show({component:B,links:this.links})}OpenModalComment(){this._modal.show({component:N,comments:this.comments})}OpenModalPoll(){this._modal.show({component:G,polls:this.polls})}OpenModalQna(){this._modal.show({component:H,qnas:this.qnas})}};e.\u0275fac=function(n){return new(n||e)(h(P),h(L),h(Q),h(R),h($),h(z),h(U),h(b),h(A),h(T),h(q))},e.\u0275cmp=v({type:e,selectors:[["ng-component"]],decls:28,vars:10,consts:[[1,"counter",3,"click"],[3,"sessions",4,"ngIf"],[3,"session",4,"ngIf"],[3,"notes"],["type","messages",3,"messages"],["type","questions",3,"questions"],[3,"reactions"],[3,"sessions"],[3,"session"]],template:function(n,a){n&1&&(s(0,"div")(1,"div")(2,"div",0),C("click",function(){return a.OpenModalLinks()}),s(3,"span"),r(4,"Links: "),i(),s(5,"span"),r(6),i()(),s(7,"div",0),C("click",function(){return a.OpenModalComment()}),s(8,"span"),r(9,"Commnets: "),i(),s(10,"span"),r(11),i()(),s(12,"div",0),C("click",function(){return a.OpenModalPoll()}),s(13,"span"),r(14,"Polls: "),i(),s(15,"span"),r(16),i()(),s(17,"div",0),C("click",function(){return a.OpenModalQna()}),s(18,"span"),r(19,"Qnas: "),i(),s(20,"span"),r(21),i()()(),u(22,le,1,1,"app-speaker-sessions",1)(23,de,1,1,"app-speaker-session",2),m(24,"app-notes",3)(25,"app-chat",4)(26,"app-chat",5)(27,"app-speaker-reactions",6),i()),n&2&&(o(6),p(a.links.length),o(5),p(a.comments.length),o(5),p(a.polls.length),o(5),p(a.qnas.length),o(),c("ngIf",!a.sessionId),o(),c("ngIf",a.sessionId),o(),c("notes",a.notes),o(),c("messages",a.messages),o(),c("questions",a.questions),o(),c("reactions",a.reactions))},dependencies:[M,D,j,J,K,V],styles:[".counter[_ngcontent-%COMP%]{cursor:pointer}"]});let t=e;return t})();var fe=[{path:"",component:x},{path:":speaker_id",component:x}],We=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=E({type:e}),e.\u0275inj=y({imports:[O.forChild(fe),w]});let t=e;return t})();export{We as SpeakerModule};