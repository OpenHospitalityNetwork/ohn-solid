(this["webpackJsonpohn-solid-client"]=this["webpackJsonpohn-solid-client"]||[]).push([[0],{146:function(e,t,n){},201:function(e,t){},277:function(e,t,n){"use strict";n.r(t);var r=n(2),c=n.n(r),o=n(51),a=n.n(o),i=(n(146),n(52)),s=function(){return Object(i.c)()},u=i.d,l=n(5),d=n(0),b=n.n(d),f=n(3),j=n(11),p=n(78),m=n(4),h=n(13),x=n(16),O=function(e){return"http://www.w3.org/2003/01/geo/wgs84_pos#"+e},g=function(e){var t;return(null===(t=/^(https:\/\/.*)\/profile\/card#me$/g.exec(e))||void 0===t?void 0:t[1])+"/public/hospex.ttl"},v=function(){var e=Object(f.a)(b.a.mark((function e(t){var n,r,c,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=g(t),e.next=3,Object(m.f)(n,{fetch:h.fetch});case 3:return r=e.sent,c=Object(m.k)(r),o=c.map((function(e){return{thing:e,url:Object(m.l)(e,x.b.type)}})).filter((function(e){var t=e.thing,n=e.url;return t&&"https://hospex.example.com/terms/0.1#Accommodation"===n})).map((function(e){return e.thing})).map((function(e){var n,c=Object(m.a)(e),o=Object(m.l)(e,O("location"));if(!o)return null;var a=Object(m.j)(r,o),i=a&&Object(m.e)(a,O("lat")),s=a&&Object(m.e)(a,O("long"));if(null===i||null===s)return null;var u=null!==(n=Object(m.g)(e,x.c.comment))&&void 0!==n?n:"";return{id:c,userId:t,position:[i,s],about:{en:u}}})).filter((function(e){return null!==e})),e.abrupt("return",o);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(f.a)(b.a.mark((function e(t,n){var r,c,o,a,i,s,u,l,d,f;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.f)(n,{fetch:h.fetch});case 2:return c=e.sent,o="".concat(n,"#location").concat(Date.now()),a=Object(m.b)({url:o}).setUrl(x.b.type,O("Point")).setDecimal(O("lat"),t.position[0]).setDecimal(O("long"),t.position[1]),i=Object(m.b)({url:t.id}).setUrl(x.b.type,"https://hospex.example.com/terms/0.1#Accommodation").setUrl("https://hospex.example.com/terms/0.1#offeredBy",t.userId).setUrl(O("location"),o).setStringWithLocale(x.c.comment,t.about.en,"en"),s=null!==(r=Object(m.j)(c,t.userId))&&void 0!==r?r:Object(m.d)({url:t.userId}),u=Object(m.b)(s).addUrl("https://hospex.example.com/terms/0.1#offers",t.id).build(),l=i.build(),d=a.build(),f=Object(m.p)(c,l),f=Object(m.p)(f,d),f=Object(m.p)(f,u),e.next=15,Object(m.o)(n,f,{fetch:h.fetch});case 15:return e.abrupt("return",t);case 16:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),w=function(){var e=Object(f.a)(b.a.mark((function e(t,n){var r,c,o,a,i,s,u,l;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.f)(n,{fetch:h.fetch});case 2:if(r=e.sent,!(c=Object(m.j)(r,t.id))){e.next=16;break}if(a=null!==(o=Object(m.l)(c,O("location")))&&void 0!==o?o:"",!(i=Object(m.j)(r,a))){e.next=15;break}return s=Object(m.b)(c).setStringEnglish(x.c.comment,t.about.en),u=Object(m.b)(i).setDecimal(O("lat"),t.position[0]).setDecimal(O("long"),t.position[1]),l=Object(m.p)(r,s.build()),l=Object(m.p)(l,u.build()),e.next=14,Object(m.o)(n,l,{fetch:h.fetch});case 14:return e.abrupt("return",t);case 15:throw new Error("location to update not found");case 16:throw new Error("offer to update not found");case 17:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),I=function(){var e=Object(f.a)(b.a.mark((function e(t){var n,r,c,o,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.f)(t.id,{fetch:h.fetch});case 2:if(n=e.sent,!(r=Object(m.j)(n,t.id))){e.next=11;break}return o=null!==(c=Object(m.l)(r,O("location")))&&void 0!==c?c:"",a=Object(m.n)(n,o),a=Object(m.n)(a,t.id),e.next=10,Object(m.o)(t.id,a,{fetch:h.fetch});case 10:return e.abrupt("return",t);case 11:throw new Error("offer to remove not found");case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),k=Object(j.b)("offer/getOffersOfUser",function(){var e=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),N=Object(j.b)("offer/create",function(){var e=Object(f.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.offer,r=t.document,e.next=3,y(n,r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),C=Object(j.b)("offer/update",function(){var e=Object(f.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.offer,r=t.document,e.next=3,w(n,r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),S=Object(j.b)("offer/remove",function(){var e=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),E=Object(j.c)({name:"offer",initialState:{byId:{},allIds:[]},reducers:{},extraReducers:function(e){e.addCase(k.fulfilled,(function(e,t){t.payload.forEach((function(t){e.byId[t.id]=t,e.allIds.includes(t.id)||e.allIds.push(t.id)}))})).addCase(N.fulfilled,(function(e,t){var n=t.payload;e.byId[n.id]=n,e.allIds.push(n.id)})).addCase(C.fulfilled,(function(e,t){var n=t.payload;e.byId[n.id]=n})).addCase(S.fulfilled,(function(e,t){var n=t.payload;delete e.byId[n.id],e.allIds=e.allIds.filter((function(e){return e!==n.id}))}))}}),L=Object(p.a)((function(e){return e.offer}),(function(e){var t=e.byId;return e.allIds.map((function(e){return t[e]}))})),U=E.reducer,D=n(30),R=n(70),M=n(31),A=n(32),P=n(65),z=n(15),T=n(136),F=n.n(T),H=function(){var e=Object(f.a)(b.a.mark((function e(t){var n,r,c,o,a,i,s,u,l,d,f,j,p;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o={id:t,name:"",avatar:"",about:{en:""},communityIds:[],hospexDocuments:[],offerIds:[]},e.next=3,Object(m.f)(t,{fetch:h.fetch});case 3:if(a=e.sent,i=Object(m.j)(a,t)){e.next=7;break}return e.abrupt("return",null);case 7:if(o.name=null!==(n=Object(m.h)(i,x.e.fn)||Object(m.h)(i,x.a.name))&&void 0!==n?n:"",!(s=null!==(r=Object(m.l)(i,x.e.hasPhoto))&&void 0!==r?r:"")){e.next=15;break}return e.next=12,J(s);case 12:e.t0=e.sent,e.next=16;break;case 15:e.t0="";case 16:return o.avatar=e.t0,o.about.en=null!==(c=Object(m.h)(i,x.e.note)||Object(m.i)(i,x.e.note,"en"))&&void 0!==c?c:"",e.prev=18,u=g(t),e.next=22,Object(m.f)(u,{fetch:h.fetch});case 22:l=e.sent,o.hospexDocuments.push(u),(d=Object(m.j)(l,t))&&(o.communityIds=Object(m.m)(d,"https://hospex.example.com/terms/0.1#memberOf"),f=Object(m.m)(d,"https://hospex.example.com/terms/0.1#offers"),j=Object(m.k)(l),p=j.map((function(e){return{thing:e,url:Object(m.l)(e,"https://hospex.example.com/terms/0.1#offeredBy")}})).filter((function(e){return e.url===t})).map((function(e){return e.thing.url})),o.offerIds=F()([].concat(Object(z.a)(f),Object(z.a)(p)))),e.next=31;break;case 28:e.prev=28,e.t1=e.catch(18),e.t1;case 31:return e.abrupt("return",o);case 32:case"end":return e.stop()}}),e,null,[[18,28]])})));return function(t){return e.apply(this,arguments)}}(),J=function(){var e=Object(f.a)(b.a.mark((function e(t){var n,r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.fetch)(t);case 2:return n=e.sent,e.next=5,n.blob();case 5:return r=e.sent,c=URL.createObjectURL(r),e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),W=function(){var e=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(m.f)(t,{fetch:h.fetch});case 3:e.next=10;break;case 5:return e.prev=5,e.t0=e.catch(0),e.next=9,Object(m.o)(t,Object(m.c)(),{fetch:h.fetch});case 9:return e.abrupt("return",e.sent);case 10:throw new Error("document already exists");case 11:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),Z=function(e){Object(M.a)(n,e);var t=Object(A.a)(n);function n(e,r){var c;Object(D.a)(this,n);var o="[".concat(e.status," ").concat(e.statusText,"]\n").concat(r);return(c=t.call(this,o)).name="HttpErrorResponse",Object.setPrototypeOf(Object(R.a)(c),n.prototype),c}return n}(Object(P.a)(Error)),B=function(){var e=Object(f.a)(b.a.mark((function e(t,n){var r,c,o,a,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.fetch)(t.groupId,{method:"PATCH",headers:{"Content-Type":"application/sparql-update"},body:"\n        INSERT DATA {\n            <".concat(t.groupId,"> <").concat(x.e.hasMember,"> <").concat(n,"> .\n        }\n    ")});case 2:if((r=e.sent).ok){e.next=10;break}return e.t0=Z,e.t1=r,e.next=8,r.text();case 8:throw e.t2=e.sent,new e.t0(e.t1,e.t2);case 10:return c=g(n),e.next=13,Object(m.f)(c,{fetch:h.fetch});case 13:return o=e.sent,a=Object(m.j)(o,n),i=Object(m.b)(null!==a&&void 0!==a?a:Object(m.d)({url:n})).addUrl("https://hospex.example.com/terms/0.1#memberOf",t.id).build(),e.next=18,Object(m.o)(c,Object(m.p)(o,i),{fetch:h.fetch});case 18:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),q=function(){var e=Object(f.a)(b.a.mark((function e(t){var n,r,c,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=g(t),e.next=3,Object(m.f)(n,{fetch:h.fetch});case 3:if(r=e.sent,c=Object(m.j)(r,t)){e.next=7;break}return e.abrupt("return",[]);case 7:return o=Object(m.m)(c,"https://hospex.example.com/terms/0.1#memberOf"),e.abrupt("return",o);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(f.a)(b.a.mark((function e(t){var n,r,c,o,a,i,s,u;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=t,e.t1={},e.t2={},e.next=5,J("https://picsum.photos/400");case 5:return e.t3=e.sent,e.t4=[],o={id:e.t0,name:e.t1,about:e.t2,groupId:"",image:e.t3,memberIds:e.t4},e.next=10,Object(m.f)(t,{fetch:h.fetch});case 10:if(a=e.sent,i=Object(m.j)(a,t)){e.next=14;break}throw new Error("Community couldn't be fetched");case 14:return o.name.en=null!==(n=Object(m.g)(i,x.d.name))&&void 0!==n?n:"Unknown Name",o.groupId=null!==(r=Object(m.l)(i,x.d.has_usergroup))&&void 0!==r?r:"",o.about.en=null!==(c=Object(m.g)(i,x.d.about))&&void 0!==c?c:"",e.prev=17,e.next=20,Object(m.f)(o.groupId,{fetch:h.fetch});case 20:s=e.sent,(u=Object(m.j)(s,o.groupId))&&(o.memberIds=Object(m.m)(u,x.e.hasMember)),e.next=28;break;case 25:e.prev=25,e.t5=e.catch(17),console.log(e.t5);case 28:return e.abrupt("return",o);case 29:case"end":return e.stop()}}),e,null,[[17,25]])})));return function(t){return e.apply(this,arguments)}}(),$=Object(j.b)("community/join",function(){var e=Object(f.a)(b.a.mark((function e(t,n){var r,c,o,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.getState,c=n.dispatch,o=r(),a=o.login.webId,e.next=5,B(t,a);case 5:return c(_(t.id)),e.abrupt("return",{userId:a,communityId:t.id});case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),_=Object(j.b)("community/getCommunity",function(){var e=Object(f.a)(b.a.mark((function e(t,n){var r,c,o,a,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.getState,c=n.dispatch,e.next=3,V(t);case 3:return o=e.sent,a=r(),i=a.user.allIds,o&&o.memberIds.forEach((function(e){i.includes(e)||c(ne(e))})),e.abrupt("return",o);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),G=Object(j.b)("community/getCommunitiesOfUser",function(){var e=Object(f.a)(b.a.mark((function e(t,n){var r,c,o,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.getState,c=n.dispatch,e.next=3,q(t);case 3:return o=e.sent,a=r(),o.forEach((function(e){a.community.allIds.includes(e)||c(_(e))})),e.abrupt("return",{userId:t,communities:o});case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),K=Object(j.c)({name:"community",initialState:{byId:{},allIds:[]},reducers:{},extraReducers:function(e){e.addCase(_.fulfilled,(function(e,t){var n=t.payload;n&&(e.byId[n.id]=n,e.allIds.includes(n.id)||e.allIds.push(n.id))}))}}),Q=function(e){return e.community.byId},X=Object(p.a)((function(e){return e.community.allIds}),Q,(function(e,t){return e.map((function(e){return t[e]})).filter((function(e){return!!e}))})),Y=Object(p.a)((function(e){return e.login.webId}),(function(e){return e.user.byId}),(function(e,t){return t[e]})),ee=Object(p.a)(Y,Q,(function(e,t){var n;return null!==(n=null===e||void 0===e?void 0:e.communityIds.map((function(e){return t[e]})).filter((function(e){return!!e})))&&void 0!==n?n:[]})),te=K.reducer,ne=Object(j.b)("user/fetchUser",function(){var e=Object(f.a)(b.a.mark((function e(t,n){var r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.dispatch,e.next=3,H(t);case 3:return(c=e.sent)&&c.hospexDocuments.length>0&&(r(k(t)),r(G(t))),e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),re=Object(j.b)("user/createHospexDocument",function(){var e=Object(f.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.userId,r=t.documentId,e.next=3,W(r);case 3:return e.abrupt("return",{userId:n,documentId:r});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),ce=Object(j.c)({name:"user",initialState:{byId:{},allIds:[]},reducers:{},extraReducers:function(e){e.addCase(ne.fulfilled,(function(e,t){var n=t.payload;n&&(e.byId[n.id]=n,e.allIds.includes(n.id)||e.allIds.push(n.id))})).addCase(G.fulfilled,(function(e,t){var n=t.payload,r=n.userId,c=n.communities;e.byId[r].communityIds=c})).addCase($.fulfilled,(function(e,t){var n=t.payload,r=n.userId,c=n.communityId;e.byId[r].communityIds.includes(c)||e.byId[r].communityIds.push(c)})).addCase(re.fulfilled,(function(e,t){var n=t.payload,r=n.userId,c=n.documentId;e.byId[r].hospexDocuments.push(c)}))}}).reducer,oe=function(e,t){return t},ae=Object(p.a)(oe,(function(e){return e.user.byId}),(function(e,t){var n;return null!==(n=t[e])&&void 0!==n?n:{id:e,name:"",avatar:"",about:"",communityIds:[]}})),ie=Object(p.a)(oe,(function(e){return e.offer.byId}),(function(e,t){return Object.values(t).filter((function(t){return t.userId===e}))})),se=Object(p.a)(ae,(function(e){return e.community.byId}),(function(e,t){return Object.values(t).filter((function(t){var n;return(null===e||void 0===e||null===(n=e.communityIds)||void 0===n?void 0:n.includes(t.id))&&t.memberIds.includes(e.id)}))})),ue=function(){var e=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.login)({oidcIssuer:t,redirectUrl:globalThis.location.href,clientName:"Open Hospitality Network"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),le=function(){var e=Object(f.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.handleIncomingRedirect)({url:globalThis.location.href,restorePreviousSession:!0});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),de=function(){var e=Object(f.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.logout)();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),be={webId:"",isLoggedIn:!1,status:"pending",joinStatus:"pending"},fe=Object(j.b)("login/login",ue),je=Object(j.b)("login/init",function(){var e=Object(f.a)(b.a.mark((function e(t,n){var r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.dispatch,e.next=3,le();case 3:return(null===(c=e.sent)||void 0===c?void 0:c.isLoggedIn)&&(null===c||void 0===c?void 0:c.webId)&&r(ne(c.webId)),e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),pe=Object(j.b)("login/logout",de),me=Object(j.c)({name:"login",initialState:be,reducers:{},extraReducers:function(e){e.addCase(fe.pending,(function(e){e.status="pending"})).addCase(fe.fulfilled,(function(e){e.status="success"})).addCase(je.fulfilled,(function(e,t){var n,r,c,o;e.status="success",e.webId=null!==(n=null===(r=t.payload)||void 0===r?void 0:r.webId)&&void 0!==n?n:"",e.isLoggedIn=null!==(c=null===(o=t.payload)||void 0===o?void 0:o.isLoggedIn)&&void 0!==c&&c})).addCase(pe.fulfilled,(function(e){e.isLoggedIn=be.isLoggedIn,e.status="success",e.webId=be.webId})).addCase(k.rejected,(function(e){e.joinStatus="new"})).addCase(k.fulfilled,(function(e){e.joinStatus="old"}))}}),he=function(e){return e.login},xe=me.reducer,Oe=n(1),ge=function(){var e=Object(r.useState)("https://solidcommunity.net"),t=Object(l.a)(e,2),n=t[0],c=t[1],o=s();return Object(Oe.jsx)("div",{className:"flex flex-col items-center justify-evenly min-h-screen m-5",children:Object(Oe.jsxs)("div",{className:"space-y-10",children:[Object(Oe.jsxs)("section",{className:"flex flex-col items-center space-y-2",children:[Object(Oe.jsxs)("header",{children:[Object(Oe.jsx)("h1",{children:"Open Hospitality"}),Object(Oe.jsx)("p",{className:"italic",children:"hospitality, decentralized"})]}),Object(Oe.jsxs)("div",{className:"w-80 flex items-center justify-evenly",children:[Object(Oe.jsx)("a",{href:"https://openhospitality.network",children:Object(Oe.jsx)("img",{src:"https://openhospitality.network/assets/img/logo.png",title:"Open Hospitality Network",alt:"Open Hospitality Network logo",className:"h-32"})}),Object(Oe.jsx)("span",{className:"text-3xl",children:"+"}),Object(Oe.jsx)("a",{href:"https://solidproject.org",children:Object(Oe.jsx)("img",{src:"https://avatars3.githubusercontent.com/u/14262490?v=3&s=200",title:"Solid Project",alt:"Solid Project logo",className:"h-32 p-5"})})]})]}),Object(Oe.jsxs)("form",{className:"w-96 flex flex-col items-center gap-2",onSubmit:function(e){e.preventDefault(),o(fe(n))},children:[Object(Oe.jsx)("header",{className:"text-xl font-bold",children:"Sign in with your Solid Identity"}),Object(Oe.jsx)("label",{htmlFor:"provider",children:"Select your Solid Pod Provider"}),Object(Oe.jsx)("input",{className:"rounded border px-2 py-1 w-full",id:"provider",type:"text",value:n,onChange:function(e){return c(e.target.value)}}),Object(Oe.jsx)("button",{className:"bg-pink-300 hover:bg-pink-400 focus:bg-pink-400 text-blue-50 text-xl w-full",type:"submit",children:"Sign In"})]})]})})},ve=(n(264),n(265),n(279)),ye=n(280),we=n(281),Ie=n(282),ke=n(137),Ne=n.n(ke),Ce=n(46),Se=n(23),Ee=function(e){var t=e.offer,n=u((function(e){return ae(e,t.userId)}));return Object(Oe.jsxs)("div",{children:[Object(Oe.jsxs)(Ce.b,{to:"/users/".concat(encodeURIComponent(n.id)),className:"flex gap-2 items-center",children:[n.avatar?Object(Oe.jsx)("img",{src:n.avatar,className:"h-8 rounded"}):Object(Oe.jsx)(Se.g,{className:"h-8"}),n.name]}),Object(Oe.jsx)("p",{className:"whitespace-pre-line text-justify w-56",children:t.about.en})]})},Le=function(e){var t=e.offers;return Object(Oe.jsxs)(ve.a,{center:[30,0],zoom:2,className:"w-screen h-screen",children:[Object(Oe.jsx)(ye.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"}),Object(Oe.jsx)(Ne.a,{children:t.map((function(e){return Object(Oe.jsx)(we.a,{position:e.position,children:Object(Oe.jsx)(Ie.a,{children:Object(Oe.jsx)(Ee,{offer:e})})},e.id)}))})]})},Ue=function(){var e=u(L);return Object(Oe.jsx)(Le,{offers:e})},De=function(){var e=u(he),t=s(),n=[{type:"link",to:"/",title:"map",icon:Se.c},{type:"link",to:"/users/".concat(encodeURIComponent(e.webId)),title:"my profile",icon:Se.g},{type:"link",to:"/offers",title:"my offers",icon:Se.b},{type:"link",to:"/communities",title:"communities",icon:Se.h},{type:"button",onClick:function(){return t(pe())},title:"sign out",icon:Se.e}];return Object(Oe.jsx)("nav",{className:"fixed top-4 right-4 z-500 flex items-center gap-0 bg-opacity-50 bg-white text-gray-400 rounded",children:n.map((function(e){var t=Object(Oe.jsx)(e.icon,{title:e.title,className:"text-4xl p-2"}),n="p-0 hover:text-white hover:bg-opacity-100 hover:bg-black rounded";return"link"===e.type?Object(Oe.jsx)(Ce.b,{className:n,to:e.to,children:t},e.title):Object(Oe.jsx)("button",{className:n,onClick:e.onClick,children:t},e.title)}))})},Re=n(12),Me=[{hoverbg100:"hover:bg-red-100",bg200:"bg-red-200",bg300:"bg-red-300",text900:"text-red-900"},{hoverbg100:"hover:bg-yellow-100",bg200:"bg-yellow-200",bg300:"bg-yellow-300",text900:"text-yellow-900"},{hoverbg100:"hover:bg-green-100",bg200:"bg-green-200",bg300:"bg-green-300",text900:"text-green-900"},{hoverbg100:"hover:bg-blue-100",bg200:"bg-blue-200",bg300:"bg-blue-300",text900:"text-blue-900"},{hoverbg100:"hover:bg-indigo-100",bg200:"bg-indigo-200",bg300:"bg-indigo-300",text900:"text-indigo-900"},{hoverbg100:"hover:bg-purple-100",bg200:"bg-purple-200",bg300:"bg-purple-300",text900:"text-purple-900"},{hoverbg100:"hover:bg-pink-100",bg200:"bg-pink-200",bg300:"bg-pink-300",text900:"text-pink-900"}],Ae=function(e){var t=e.community,n=e.isMember,c=e.onJoin,o=Object(r.useState)(Me[Math.floor(Math.random()*Me.length)]),a=Object(l.a)(o,1)[0];return Object(Oe.jsxs)("div",{className:"w-64 p-4 ".concat(a.bg300," rounded flex flex-col gap-4"),children:[Object(Oe.jsx)("header",{style:{backgroundImage:'url("'.concat(t.image,'")'),textShadow:"0 0 5px white"},className:"py-16 text-center -m-4 rounded-t bg-cover bg-center text-xl font-bold",children:t.name.en}),Object(Oe.jsx)("section",{className:"mt-2 whitespace-pre-line text-justify",children:t.about.en}),n?Object(Oe.jsx)("div",{className:"text-center",children:"Member"}):Object(Oe.jsx)("button",{className:"".concat(a.bg200," ").concat(a.hoverbg100," ").concat(a.text900),onClick:c,children:"Join"})]})},Pe=n(47),ze=n(283),Te=n(80),Fe=n.n(Te),He=function(e){var t=e.confirmString,n=e.onConfirm,c=e.onCancel,o=Object(r.useState)(!0),a=Object(l.a)(o,2),i=a[0],s=a[1],u=Object(r.useState)(""),d=Object(l.a)(u,2),b=d[0],f=d[1];return Object(Oe.jsxs)(Fe.a,{isOpen:i,onRequestClose:function(){return s(!1)},onAfterClose:c,contentLabel:"Are you sure?",closeTimeoutMS:150,overlayClassName:{base:"bg-opacity-90 bg-gray-900 fixed top-0 left-0 bottom-0 right-0 z-5000",afterOpen:"",beforeClose:""},children:[Object(Oe.jsx)("h1",{children:"Are you sure you want to remove offer?"}),Object(Oe.jsxs)("form",{onSubmit:function(e){e.preventDefault(),b===t&&n()},className:"flex flex-col gap-2",children:[Object(Oe.jsxs)("label",{children:["Please enter"," ",Object(Oe.jsx)("samp",{children:Object(Oe.jsx)("kbd",{children:t})})," ","below"]}),Object(Oe.jsx)("input",{className:"border rounded",type:"text",value:b,onChange:function(e){return f(e.target.value)},autoFocus:!0}),Object(Oe.jsx)("button",{type:"submit",disabled:t!==b,className:"disabled:opacity-50 bg-red-400 disabled:cursor-not-allowed cursor-pointer",children:"Confirm"}),Object(Oe.jsx)("button",{className:"border",onClick:c,children:"Cancel"})]})]})},Je=["offer","editable"],We=function(e){var t=e.offer,n=e.editable,c=void 0!==n&&n,o=Object(Pe.a)(e,Je),a=s(),i=Object(r.useState)(!1),u=Object(l.a)(i,2),d=u[0],b=u[1];return Object(Oe.jsxs)("div",{className:"w-64 p-4 bg-blue-50 rounded flex flex-col gap-4",children:[Object(Oe.jsx)(Be,{location:t.position,className:"w-56 h-56"}),Object(Oe.jsx)("section",{className:"whitespace-pre-line text-justify",children:t.about.en}),c&&"onClickEdit"in o&&Object(Oe.jsxs)(Oe.Fragment,{children:[Object(Oe.jsx)("button",{className:"bg-white",onClick:o.onClickEdit,children:"edit"}),Object(Oe.jsx)("button",{className:"bg-red-400",onClick:function(){return b(!0)},children:"remove"}),d&&Object(Oe.jsx)(He,{confirmString:new globalThis.URL(t.id).hash,onConfirm:function(){a(S(t)),b(!1)},onCancel:function(){return b(!1)}})]})]})},Ze=function(e){var t=e.location,n=Object(ze.a)();return Object(r.useEffect)((function(){n.setView(t,12)}),[t,n]),null},Be=function(e){var t=e.location,n=e.className,r=void 0===n?"":n;return Object(Oe.jsxs)(ve.a,{attributionControl:!1,center:t,zoom:12,scrollWheelZoom:"center",doubleClickZoom:"center",touchZoom:"center",className:r,children:[Object(Oe.jsx)(Ze,{location:t}),Object(Oe.jsx)(ye.a,{url:"https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"}),Object(Oe.jsx)(we.a,{position:t})]})},qe=function(){var e=Object(Re.g)(),t=decodeURIComponent(e.webId),n=u((function(e){return ae(e,t)})),r=u((function(e){return ie(e,t)})),c=u(Y),o=u((function(e){return se(e,t)})),a=s();return Object(Oe.jsxs)("div",{className:"flex flex-col items-center gap-4 my-8",children:[Object(Oe.jsxs)("header",{className:"flex items-center gap-2",children:[Object(Oe.jsxs)("h1",{className:"italic",children:["Profile of ",Object(Oe.jsx)("span",{className:"not-italic",children:n.name})]})," ",Object(Oe.jsx)("a",{href:n.id,children:Object(Oe.jsx)(Se.a,{className:"text-xs text-gray-400 hover:text-gray-800"})})]}),n.avatar&&Object(Oe.jsx)("img",{className:"w-56 max-h-56",src:n.avatar,alt:"image of ".concat(n.name)}),Object(Oe.jsx)("p",{className:"w-56 whitespace-pre-line text-justify",children:n.about.en||Object(Oe.jsx)("span",{className:"text-gray-500 italic",children:"This user has no description"})}),Object(Oe.jsxs)("h2",{children:["Offers (",r.length,")"]}),Object(Oe.jsx)("section",{children:Object(Oe.jsx)("ul",{className:"flex flex-wrap gap-6 justify-center",children:r.map((function(e){return Object(Oe.jsx)("li",{children:Object(Oe.jsx)(We,{offer:e})},e.id)}))})}),Object(Oe.jsxs)("h2",{children:["Communities (",o.length,")"]}),Object(Oe.jsx)("section",{children:Object(Oe.jsx)("ul",{className:"flex flex-wrap gap-6 justify-center",children:o.map((function(e){return Object(Oe.jsx)("li",{children:Object(Oe.jsx)(Ae,{community:e,isMember:c.communityIds.includes(e.id)&&e.memberIds.includes(c.id),onJoin:function(){return a($(e))}})},e.id)}))})})]})},Ve=n(20),$e=function(e){var t,n=e.offer,c=e.onSubmit,o=e.onCancel,a=e.submit,i=Object(r.useState)(n),s=Object(l.a)(i,2),u=s[0],d=s[1];Object(r.useEffect)((function(){d(n)}),[n]);return Object(Oe.jsxs)("form",{className:"w-64 p-4 bg-blue-200 rounded flex flex-col gap-4",onSubmit:function(e){e.preventDefault(),c(u)},children:[Object(Oe.jsx)(Qe,{location:u.position,onChange:function(e){d((function(t){return Object(Ve.a)(Object(Ve.a)({},t),{},{position:e})}))},className:"w-56 h-56"}),Object(Oe.jsx)("textarea",{className:"h-40 p-1",value:null!==(t=u.about.en)&&void 0!==t?t:"",onChange:function(e){d((function(t){return Object(Ve.a)(Object(Ve.a)({},t),{},{about:{en:e.target.value}})}))},placeholder:"What can you and your place offer to guests?"}),Object(Oe.jsx)("button",{className:"bg-green-300 hover:bg-green-400",type:"submit",children:a}),Object(Oe.jsx)("button",{className:"hover:bg-gray-100",type:"button",onClick:o,children:"Cancel"})]})},_e=function(e){return(e%360-540)%360+180},Ge=function(e){var t=e.onDrag,n=Object(ze.b)("drag",(function(){var e=n.getCenter(),r=e.lat,c=e.lng;t([r,_e(c)]),n.setView([r,_e(c)])}));return null},Ke=function(e){var t=e.onLocationFound,n=Object(ze.b)("locationfound",(function(e){var r=e.latlng,c=r.lat,o=r.lng;t([c,o]),n.flyTo([c,_e(o)])}));return null},Qe=function(e){var t=e.location,n=e.className,c=void 0===n?"":n,o=e.onChange,a=Object(r.useState)(),i=Object(l.a)(a,2),s=i[0],u=i[1];return Object(Oe.jsxs)("div",{children:[Object(Oe.jsxs)("section",{className:"bg-yellow-200 p-2 text-sm italic",children:["drag map to a new location or"," ",Object(Oe.jsx)("button",{className:"bg-yellow-50",type:"button",onClick:function(){return null===s||void 0===s?void 0:s.locate()},children:"find your location"})]}),Object(Oe.jsxs)(ve.a,{attributionControl:!1,center:t,zoom:12,scrollWheelZoom:"center",doubleClickZoom:"center",touchZoom:"center",className:c,whenCreated:u,children:[Object(Oe.jsx)(Ke,{onLocationFound:o}),Object(Oe.jsx)(Ge,{onDrag:o}),Object(Oe.jsx)(ye.a,{url:"https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"}),Object(Oe.jsx)(we.a,{position:t})]})]})},Xe=function(){var e,t=u(Y),n=u(he).webId,c=u((function(e){return ie(e,n)})),o=s(),a=g(n),i=Object(r.useState)(!1),d=Object(l.a)(i,2),b=d[0],f=d[1],j=Object(r.useState)(""),p=Object(l.a)(j,2),m=p[0],h=p[1],x=c.find((function(e){return e.id===m})),O=function(e){o(C({offer:e,document:a})),h("")},v=function(){f(!1),h("")};return Object(Oe.jsxs)("div",{className:"flex flex-col items-center justify-evenly my-8",children:[Object(Oe.jsx)("header",{children:Object(Oe.jsxs)("h1",{children:["Offers of"," ",Object(Oe.jsx)(Ce.b,{to:"/users/".concat(encodeURIComponent(n)),children:null!==(e=null===t||void 0===t?void 0:t.name)&&void 0!==e?e:"user"})]})}),Object(Oe.jsxs)("ul",{className:"flex flex-wrap gap-6 justify-center",children:[c.map((function(e){return Object(Oe.jsx)("li",{children:e===x?Object(Oe.jsx)($e,{offer:x,onSubmit:O,onCancel:v,submit:"Update"}):Object(Oe.jsx)(We,{offer:e,editable:!0,onClickEdit:function(){return t=e.id,h(""),f(!1),void h(t);var t}})},e.id)})),Object(Oe.jsx)("li",{children:b?Object(Oe.jsx)($e,{offer:{id:"".concat(a,"#offer").concat(Date.now()),userId:n,position:[51.477,0],about:{en:""}},onSubmit:function(e){o(N({offer:e,document:a})),f(!1)},onCancel:v,submit:"Create"}):m?null:Object(Oe.jsx)("button",{className:"w-64 h-64 p-4 bg-blue-400 rounded flex items-center justify-center text-5xl font-bold text-indigo-50",onClick:function(){f(!0),h("")},children:"+ Add"})})]})]})},Ye=function(){var e=u(X),t=u(ee),n=u(Y),r=s();return Object(Oe.jsxs)("div",{className:"flex flex-col items-center justify-evenly my-8",children:[Object(Oe.jsx)("header",{children:Object(Oe.jsx)("h1",{children:"Communities"})}),Object(Oe.jsx)("ul",{className:"flex flex-wrap gap-6 justify-center",children:e.map((function(e){return Object(Oe.jsx)("li",{children:Object(Oe.jsx)(Ae,{community:e,isMember:t.includes(e)&&e.memberIds.includes(n.id),onJoin:function(){return r($(e))}},e.id)},e.id)}))})]})},et=function(e){var t=e.message,n=void 0===t?"Loading":t;return Object(Oe.jsx)("div",{className:"flex items-center justify-center h-screen w-screen",children:n})},tt=Object(j.c)({name:"onboarding",initialState:{onboarding:!1,step:0},reducers:{setOnboarding:function(e,t){e.onboarding=t.payload},incrementStep:function(e){e.step++},decrementStep:function(e){e.step--},setStep:function(e,t){e.step=t.payload}}}),nt=tt.actions,rt=nt.setOnboarding,ct=nt.incrementStep,ot=nt.decrementStep,at=(nt.setStep,function(e){return e.onboarding}),it=tt.reducer,st=function(){var e=s(),t=u(he),n=g(t.webId);return Object(Oe.jsxs)("div",{className:"h-screen flex flex-col items-center justify-center gap-4",children:[Object(Oe.jsx)("h1",{children:"It's your first time..."}),Object(Oe.jsx)("button",{className:"bg-yellow-500",onClick:function(){e(rt(!0)),e(re({documentId:n,userId:t.webId}))},children:"Let's get started!"})]})},ut=function(){var e=u(at),t=s(),n=u(he),c=Object(Re.f)(),o=Object(r.useMemo)((function(){return[{url:"/communities",text:"Join some communities so you can meet people"},{url:"/users/".concat(encodeURIComponent(n.webId)),text:"Edit your profile"},{url:"/offers",text:"If you can, offer hosting to others"},{url:"/",text:"Map is where you can find Hosts"}]}),[n.webId]);return Object(r.useEffect)((function(){c.replace(o[e.step].url)}),[c,e.step,o]),e.onboarding?Object(Oe.jsxs)(Oe.Fragment,{children:[Object(Oe.jsxs)("div",{className:"h-32 w-screen z-2000 fixed flex flex-col items-center justify-evenly bg-purple-400",children:[Object(Oe.jsx)("div",{className:"flex gap-1",children:[0,1,2,3].map((function(t){return Object(Oe.jsx)("div",{className:"".concat(t<=e.step?"bg-purple-300":"bg-purple-50"," h-2 w-2 rounded-full")},t)}))}),Object(Oe.jsx)("div",{children:o[e.step].text}),Object(Oe.jsxs)("div",{className:"flex justify-evenly w-full",children:[e.step>0&&Object(Oe.jsx)("button",{className:"bg-purple-300 hover:bg-purple-50",onClick:function(){return t(ot())},children:"Back"}),e.step<o.length-1&&Object(Oe.jsx)("button",{className:"bg-purple-300 hover:bg-purple-50",onClick:function(){return t(ct())},children:"Next"}),e.step===o.length-1&&Object(Oe.jsx)("button",{className:"bg-purple-300 hover:bg-purple-50",onClick:function(){return t(rt(!1))},children:"Finish"})]})]}),Object(Oe.jsx)("div",{className:"h-32"})]}):null};var lt=function(){var e=u(he),t=s(),n=u(Y);return Object(r.useEffect)((function(){t(je())}),[t]),Object(r.useEffect)((function(){e.isLoggedIn&&["https://mrkvon.inrupt.net/hospex/sleepy-bike/community#us"].forEach((function(e){t(_(e))}))}),[e.isLoggedIn,t]),"pending"===e.status?Object(Oe.jsx)(et,{message:"Initializing..."}):e.isLoggedIn?n?0===n.hospexDocuments.length?Object(Oe.jsx)(st,{}):Object(Oe.jsx)("div",{className:"App",children:Object(Oe.jsxs)(Ce.a,{children:[Object(Oe.jsx)(ut,{}),Object(Oe.jsx)(De,{}),Object(Oe.jsxs)(Re.c,{children:[Object(Oe.jsx)(Re.a,{path:"/users/:webId",children:Object(Oe.jsx)(qe,{})}),Object(Oe.jsx)(Re.a,{path:"/offers",children:Object(Oe.jsx)(Xe,{})}),Object(Oe.jsx)(Re.a,{path:"/communities",children:Object(Oe.jsx)(Ye,{})}),Object(Oe.jsx)(Re.a,{path:"/",children:Object(Oe.jsx)(Ue,{})})]})]})}):Object(Oe.jsx)(et,{message:"Fetching your profile..."}):Object(Oe.jsx)(ge,{})},dt={type:"",title:"",detail:""},bt=Object(j.c)({name:"notification",initialState:dt,reducers:{setNotification:function(e,t){return t.payload},clearNotification:function(){return dt}},extraReducers:function(e){return e.addMatcher(j.d,(function(e,t){var n,r,c;return{type:"error",title:(null!==(n=null!==(r=t.error.code)&&void 0!==r?r:" "+t.error.name)&&void 0!==n?n:"").trim(),detail:null!==(c=t.error.message)&&void 0!==c?c:""}}))}}),ft=bt.actions,jt=ft.setNotification,pt=ft.clearNotification,mt=function(e){return e.notification},ht=bt.reducer,xt=Object(j.a)({reducer:{offer:U,community:te,user:ce,login:xe,onboarding:it,notification:ht}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ot=function(){var e=u(mt);return""===e.type?null:Object(Oe.jsx)(gt,{notification:e})},gt=function(e){var t=e.notification,n=s(),c=Object(r.useMemo)((function(){return function(e){"Escape"===e.key&&(console.log(e.key),e.stopPropagation(),n(pt()))}}),[n]);Object(r.useEffect)((function(){return document.addEventListener("keydown",c,!1),function(){document.removeEventListener("keydown",c,!1)}}),[c]);var o="error"===t.type?"bg-red-500":"success"===t.type?"bg-green-500":"bg-yellow-500";return Object(Oe.jsxs)("div",{tabIndex:0,title:"click to close",className:"".concat(o," p-4 fixed z-5000 bottom-0 bg-opacity-80 hover:bg-opacity-90 rounded-none max-h-screen w-full overflow-auto"),children:[Object(Oe.jsx)("button",{className:"absolute top-3 right-3 p-1 rounded-full ".concat(o),onClick:function(){return n(pt())},children:Object(Oe.jsx)(Se.f,{})}),Object(Oe.jsx)("header",{children:t.title}),Object(Oe.jsx)("section",{children:Object(Oe.jsx)("pre",{children:t.detail})})]})},vt=n(66),yt=function(e){Object(M.a)(n,e);var t=Object(A.a)(n);function n(){var e;Object(D.a)(this,n);for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).state={hasError:!1},e}return Object(vt.a)(n,[{key:"componentDidCatch",value:function(e){this.setState({hasError:!0}),this.props.setNotification({type:"error",title:e.constructor.name,detail:e.message})}},{key:"render",value:function(){return this.state.hasError?Object(Oe.jsxs)("div",{className:"w-screen h-screen flex flex-col items-center justify-evenly font-bold text-2xl text-center",children:[Object(Oe.jsx)(Se.d,{className:"text-5xl text-indigo-700"}),Object(Oe.jsxs)("p",{children:["Sorry, something went terribly wrong.",Object(Oe.jsx)("br",{}),"Please, let us know.",Object(Oe.jsx)("br",{}),"And reload..."]})]}):this.props.children}}]),n}(c.a.Component),wt=Object(i.b)(null,{setNotification:jt})(yt);Fe.a.setAppElement("#root"),a.a.render(Object(Oe.jsx)(c.a.StrictMode,{children:Object(Oe.jsxs)(i.a,{store:xt,children:[Object(Oe.jsx)(wt,{children:Object(Oe.jsx)(lt,{})}),Object(Oe.jsx)(Ot,{})]})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[277,1,2]]]);
//# sourceMappingURL=main.b8a6d0de.chunk.js.map