(this["webpackJsonpohn-solid-client"]=this["webpackJsonpohn-solid-client"]||[]).push([[0],{135:function(e,t,n){},190:function(e,t){},221:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),a=n(50),o=n.n(a),i=(n(135),n(47)),s=function(){return Object(i.b)()},u=i.c,l=n(6),d=n(0),b=n.n(d),f=n(3),j=n(14),p=n(70),h=n(12),m=n(4),O=n(15),x=function(e){return"http://www.w3.org/2003/01/geo/wgs84_pos#"+e},v=function(e){var t;return(null===(t=/^(https:\/\/.*)\/profile\/card#me$/g.exec(e))||void 0===t?void 0:t[1])+"/public/hospex.ttl"},g=function(){var e=Object(f.a)(b.a.mark((function e(t){var n,r,c,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=v(t),e.next=3,Object(m.f)(n,{fetch:h.fetch});case 3:return r=e.sent,c=Object(m.l)(r),a=c.map((function(e){return{thing:e,url:Object(m.m)(e,O.b.type)}})).filter((function(e){var t=e.thing,n=e.url;return t&&"https://hospex.example.com/terms/0.1#Accommodation"===n})).map((function(e){return e.thing})).map((function(e){var n=Object(m.a)(e),c=Object(m.m)(e,x("location"));if(!c)return null;var a=Object(m.k)(r,c),o=a&&Object(m.e)(a,x("lat")),i=a&&Object(m.e)(a,x("long"));if(null===o||null===i)return null;var s=Object(m.g)(e,O.c.comment);return{id:n,userId:t,position:[o,i],about:Object.fromEntries(s)}})).filter((function(e){return null!==e})),e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(m.f)(t,{fetch:h.fetch});case 3:e.next=9;break;case 5:return e.prev=5,e.t0=e.catch(0),e.next=9,Object(m.p)(t,Object(m.c)(),{fetch:h.fetch});case 9:throw new Error("document already exists");case 10:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=Object(f.a)(b.a.mark((function e(t,n){var r,c,a,o,i,s,u;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.f)(n,{fetch:h.fetch});case 2:return r=e.sent,c="".concat(n,"#location").concat(Date.now()),a=Object(m.b)({url:c}).setUrl(O.b.type,x("Point")).setDecimal(x("lat"),t.position[0]).setDecimal(x("long"),t.position[1]),o=Object(m.b)({url:t.id}).setUrl(O.b.type,"https://hospex.example.com/terms/0.1#Accommodation").setUrl("https://hospex.example.com/terms/0.1#offeredBy",t.userId).setUrl(x("location"),c).setStringWithLocale(O.c.comment,t.about.en[0],"en"),i=o.build(),s=a.build(),u=Object(m.q)(r,i),u=Object(m.q)(u,s),e.next=12,Object(m.p)(n,u,{fetch:h.fetch});case 12:return e.abrupt("return",t);case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),I=function(){var e=Object(f.a)(b.a.mark((function e(t,n){var r,c,a,o,i,s,u,l;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.f)(n,{fetch:h.fetch});case 2:if(r=e.sent,!(c=Object(m.k)(r,t.id))){e.next=16;break}if(o=null!==(a=Object(m.m)(c,x("location")))&&void 0!==a?a:"",!(i=Object(m.k)(r,o))){e.next=15;break}return s=Object(m.b)(c).setStringEnglish(O.c.comment,t.about.en[0]),u=Object(m.b)(i).setDecimal(x("lat"),t.position[0]).setDecimal(x("long"),t.position[1]),l=Object(m.q)(r,s.build()),l=Object(m.q)(l,u.build()),e.next=14,Object(m.p)(n,l,{fetch:h.fetch});case 14:return e.abrupt("return",t);case 15:throw new Error("location to update not found");case 16:throw new Error("offer to update not found");case 17:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),k=function(){var e=Object(f.a)(b.a.mark((function e(t){var n,r,c,a,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.f)(t.id,{fetch:h.fetch});case 2:if(n=e.sent,!(r=Object(m.k)(n,t.id))){e.next=11;break}return a=null!==(c=Object(m.m)(r,x("location")))&&void 0!==c?c:"",o=Object(m.o)(n,a),o=Object(m.o)(o,t.id),e.next=10,Object(m.p)(t.id,o,{fetch:h.fetch});case 10:return e.abrupt("return",t);case 11:throw new Error("offer to remove not found");case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),C=Object(j.b)("offer/getOffersOfUser",function(){var e=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g(t);case 3:return e.abrupt("return",e.sent);case 6:return e.prev=6,e.t0=e.catch(0),e.next=10,y(v(t));case 10:throw e.t0;case 11:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()),N=Object(j.b)("offer/create",function(){var e=Object(f.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.offer,r=t.document,e.next=3,w(n,r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),S=Object(j.b)("offer/update",function(){var e=Object(f.a)(b.a.mark((function e(t){var n,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.offer,r=t.document,e.next=3,I(n,r);case 3:return e.abrupt("return",e.sent);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),E=Object(j.b)("offer/remove",function(){var e=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k(t);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),U=Object(j.c)({name:"offer",initialState:{byId:{},allIds:[]},reducers:{},extraReducers:function(e){e.addCase(C.fulfilled,(function(e,t){t.payload.forEach((function(t){e.byId[t.id]=t,e.allIds.includes(t.id)||e.allIds.push(t.id)}))})).addCase(N.fulfilled,(function(e,t){var n=t.payload;e.byId[n.id]=n,e.allIds.push(n.id)})).addCase(S.fulfilled,(function(e,t){var n=t.payload;e.byId[n.id]=n})).addCase(E.fulfilled,(function(e,t){var n=t.payload;delete e.byId[n.id],e.allIds=e.allIds.filter((function(e){return e!==n.id}))}))}}),L=Object(p.a)((function(e){return e.offer}),(function(e){var t=e.byId;return e.allIds.map((function(e){return t[e]}))})),R=U.reducer,D=function(){var e=Object(f.a)(b.a.mark((function e(t,n){var r,c,a,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Object(h.fetch)(t.groupId,{method:"PATCH",headers:{"Content-Type":"application/sparql-update"},body:"\n        INSERT DATA {\n            <".concat(t.groupId,"> <").concat(O.e.hasMember,"> <").concat(n,"> .\n        }\n    ")}),r=v(n),e.next=4,Object(m.f)(r,{fetch:h.fetch});case 4:return c=e.sent,a=Object(m.k)(c,n),o=Object(m.b)(null!==a&&void 0!==a?a:Object(m.d)({url:n})).addUrl("https://hospex.example.com/terms/0.1#memberOf",t.id).build(),e.next=9,Object(m.p)(r,Object(m.q)(c,o),{fetch:h.fetch});case 9:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),A=function(){var e=Object(f.a)(b.a.mark((function e(t){var n,r,c,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=v(t),e.next=3,Object(m.f)(n,{fetch:h.fetch});case 3:if(r=e.sent,c=Object(m.k)(r,t)){e.next=7;break}return e.abrupt("return",[]);case 7:return a=Object(m.n)(c,"https://hospex.example.com/terms/0.1#memberOf"),e.abrupt("return",a);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),z=function(){var e=Object(f.a)(b.a.mark((function e(t){var n,r,c,a,o,i,s,u;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={id:t,name:{},about:{},groupId:"",memberIds:[]},e.next=3,Object(m.f)(t,{fetch:h.fetch});case 3:if(o=e.sent,i=Object(m.k)(o,t)){e.next=7;break}throw new Error("Community couldn't be fetched");case 7:return a.name.en=null!==(n=Object(m.h)(i,O.d.name))&&void 0!==n?n:"Unknown Name",a.groupId=null!==(r=Object(m.m)(i,O.d.has_usergroup))&&void 0!==r?r:"",a.about.en=null!==(c=Object(m.h)(i,O.d.about))&&void 0!==c?c:"",e.prev=10,e.next=13,Object(m.f)(a.groupId,{fetch:h.fetch});case 13:s=e.sent,(u=Object(m.k)(s,a.groupId))&&(a.memberIds=Object(m.n)(u,O.e.hasMember)),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(10),console.log(e.t0);case 21:return e.abrupt("return",a);case 22:case"end":return e.stop()}}),e,null,[[10,18]])})));return function(t){return e.apply(this,arguments)}}(),P=Object(j.b)("community/join",function(){var e=Object(f.a)(b.a.mark((function e(t,n){var r,c,a,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.getState,c=n.dispatch,a=r(),o=a.login.webId,e.next=5,D(t,o);case 5:return c(T(t.id)),e.abrupt("return",{userId:o,communityId:t.id});case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),T=Object(j.b)("community/getCommunity",function(){var e=Object(f.a)(b.a.mark((function e(t,n){var r,c,a,o,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.getState,c=n.dispatch,e.next=3,z(t);case 3:return a=e.sent,o=r(),i=o.user.allIds,a&&a.memberIds.forEach((function(e){i.includes(e)||c($(e))})),e.abrupt("return",a);case 8:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),q=Object(j.b)("community/getCommunitiesOfUser",function(){var e=Object(f.a)(b.a.mark((function e(t,n){var r,c,a,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.getState,c=n.dispatch,e.next=3,A(t);case 3:return a=e.sent,o=r(),a.forEach((function(e){o.community.allIds.includes(e)||c(T(e))})),e.abrupt("return",{userId:t,communities:a});case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),M=Object(j.c)({name:"community",initialState:{byId:{},allIds:[]},reducers:{},extraReducers:function(e){e.addCase(T.fulfilled,(function(e,t){var n=t.payload;n&&(e.byId[n.id]=n,e.allIds.includes(n.id)||e.allIds.push(n.id))}))}}),Z=function(e){return e.community.byId},H=Object(p.a)((function(e){return e.community.allIds}),Z,(function(e,t){return e.map((function(e){return t[e]})).filter((function(e){return!!e}))})),W=Object(p.a)((function(e){return e.login.webId}),(function(e){return e.user.byId}),(function(e,t){return t[e]})),J=Object(p.a)(W,Z,(function(e,t){var n;return null!==(n=null===e||void 0===e?void 0:e.communityIds.map((function(e){return t[e]})).filter((function(e){return!!e})))&&void 0!==n?n:[]})),B=M.reducer,F=function(){var e=Object(f.a)(b.a.mark((function e(t){var n,r,c,a,o,i,s,u,l;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.f)(t,{fetch:h.fetch});case 2:if(a=e.sent,o=Object(m.k)(a,t)){e.next=6;break}return e.abrupt("return",null);case 6:if(i=null!==(n=Object(m.i)(o,O.e.fn)||Object(m.i)(o,O.a.name))&&void 0!==n?n:"",!(s=null!==(r=Object(m.m)(o,O.e.hasPhoto))&&void 0!==r?r:"")){e.next=14;break}return e.next=11,V(s);case 11:e.t0=e.sent,e.next=15;break;case 14:e.t0="";case 15:return u=e.t0,l=null!==(c=Object(m.i)(o,O.e.note)||Object(m.j)(o,O.e.note,"en"))&&void 0!==c?c:"",e.abrupt("return",{id:t,name:i,avatar:u,about:l,communityIds:[]});case 18:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),V=function(){var e=Object(f.a)(b.a.mark((function e(t){var n,r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.fetch)(t);case 2:return n=e.sent,e.next=5,n.blob();case 5:return r=e.sent,c=URL.createObjectURL(r),e.abrupt("return",c);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=Object(j.b)("user/fetchUser",function(){var e=Object(f.a)(b.a.mark((function e(t,n){var r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.dispatch,e.next=3,F(t);case 3:return c=e.sent,r(C(t)),r(q(t)),e.abrupt("return",c);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),_=Object(j.c)({name:"user",initialState:{byId:{},allIds:[]},reducers:{},extraReducers:function(e){e.addCase($.fulfilled,(function(e,t){var n=t.payload;n&&(e.byId[n.id]=n,e.allIds.includes(n.id)||e.allIds.push(n.id))})).addCase(q.fulfilled,(function(e,t){var n=t.payload,r=n.userId,c=n.communities;e.byId[r].communityIds=c})).addCase(P.fulfilled,(function(e,t){var n=t.payload,r=n.userId,c=n.communityId;e.byId[r].communityIds.includes(c)||e.byId[r].communityIds.push(c)}))}}).reducer,G=function(e,t){return t},K=Object(p.a)(G,(function(e){return e.user.byId}),(function(e,t){var n;return null!==(n=t[e])&&void 0!==n?n:{id:e,name:"",avatar:"",about:""}})),Q=Object(p.a)(G,(function(e){return e.offer.byId}),(function(e,t){return Object.values(t).filter((function(t){return t.userId===e}))})),X=function(){var e=Object(f.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.login)({oidcIssuer:t,redirectUrl:globalThis.location.href,clientName:"Open Hospitality Network"});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(f.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.handleIncomingRedirect)({url:globalThis.location.href,restorePreviousSession:!0});case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ee=function(){var e=Object(f.a)(b.a.mark((function e(){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(h.logout)();case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),te={webId:"",isLoggedIn:!1,status:"pending",joinStatus:"pending"},ne=Object(j.b)("login/login",X),re=Object(j.b)("login/init",function(){var e=Object(f.a)(b.a.mark((function e(t,n){var r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.dispatch,e.next=3,Y();case 3:return(null===(c=e.sent)||void 0===c?void 0:c.isLoggedIn)&&(null===c||void 0===c?void 0:c.webId)&&r($(c.webId)),e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()),ce=Object(j.b)("login/logout",ee),ae=Object(j.c)({name:"login",initialState:te,reducers:{},extraReducers:function(e){e.addCase(ne.pending,(function(e){e.status="pending"})).addCase(ne.fulfilled,(function(e){e.status="success"})).addCase(re.fulfilled,(function(e,t){var n,r,c,a;e.status="success",e.webId=null!==(n=null===(r=t.payload)||void 0===r?void 0:r.webId)&&void 0!==n?n:"",e.isLoggedIn=null!==(c=null===(a=t.payload)||void 0===a?void 0:a.isLoggedIn)&&void 0!==c&&c})).addCase(ce.fulfilled,(function(e){e.isLoggedIn=te.isLoggedIn,e.status="success",e.webId=te.webId})).addCase(C.rejected,(function(e){e.joinStatus="new"})).addCase(C.fulfilled,(function(e){e.joinStatus="old"}))}}),oe=function(e){return e.login},ie=ae.reducer,se=n(2),ue=function(){var e=Object(r.useState)("https://solidcommunity.net"),t=Object(l.a)(e,2),n=t[0],c=t[1],a=s();return Object(se.jsx)("div",{className:"flex flex-col items-center justify-evenly min-h-screen m-5",children:Object(se.jsxs)("div",{className:"space-y-10",children:[Object(se.jsxs)("section",{className:"flex flex-col items-center space-y-2",children:[Object(se.jsxs)("header",{children:[Object(se.jsx)("h1",{children:"Open Hospitality"}),Object(se.jsx)("p",{className:"italic",children:"hospitality, decentralized"})]}),Object(se.jsxs)("div",{className:"w-80 flex items-center justify-evenly",children:[Object(se.jsx)("a",{href:"https://openhospitality.network",children:Object(se.jsx)("img",{src:"https://openhospitality.network/assets/img/logo.png",title:"Open Hospitality Network",alt:"Open Hospitality Network logo",className:"h-32"})}),Object(se.jsx)("span",{className:"text-3xl",children:"+"}),Object(se.jsx)("a",{href:"https://solidproject.org",children:Object(se.jsx)("img",{src:"https://avatars3.githubusercontent.com/u/14262490?v=3&s=200",title:"Solid Project",alt:"Solid Project logo",className:"h-32 p-5"})})]})]}),Object(se.jsxs)("form",{className:"w-96 flex flex-col items-center space-y-2",onSubmit:function(e){e.preventDefault(),a(ne(n))},children:[Object(se.jsx)("header",{className:"text-xl font-bold",children:"Sign in with your Solid Identity"}),Object(se.jsx)("label",{htmlFor:"provider",children:"Select your Solid Pod Provider"}),Object(se.jsx)("input",{className:"rounded border px-2 py-1 w-full",id:"provider",type:"text",value:n,onChange:function(e){return c(e.target.value)}}),Object(se.jsx)("button",{className:"bg-blue-900 text-blue-50 w-full",type:"submit",children:"Sign In"})]})]})})},le=n(222),de=n(223),be=n(224),fe=n(225),je=n(126),pe=n.n(je),he=(n(209),n(210),function(e){var t=e.points;return Object(se.jsxs)(le.a,{center:[50,15],zoom:10,style:{width:"100vw",height:"100vh"},children:[Object(se.jsx)(de.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"}),Object(se.jsx)(pe.a,{children:t.map((function(e){return Object(se.jsx)(be.a,{position:e.position,children:Object(se.jsxs)(fe.a,{children:[Object(se.jsx)("p",{children:e.id}),Object(se.jsx)("p",{children:e.userId}),Object(se.jsx)("p",{children:Object.entries(e.about).map((function(e){var t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(se.jsxs)("li",{children:[Object(se.jsx)("b",{children:n})," ",Object(se.jsx)("span",{children:r.join("----")})]},n)}))})]})},e.id)}))})]})}),me=function(){var e=u(L);return Object(se.jsx)(he,{points:e})},Oe=n(38),xe=function(){var e=u(oe),t=s();return Object(se.jsxs)("nav",{style:{position:"fixed",top:"1rem",right:"1em",zIndex:500},children:[Object(se.jsx)(Oe.b,{to:"/",children:"map"}),Object(se.jsx)("br",{}),Object(se.jsx)(Oe.b,{to:"/users/".concat(encodeURIComponent(e.webId)),children:"my profile"}),Object(se.jsx)("br",{}),Object(se.jsx)(Oe.b,{to:"/offers",children:"my offers"}),Object(se.jsx)("br",{}),Object(se.jsx)(Oe.b,{to:"/communities",children:"communities"}),Object(se.jsx)("br",{}),Object(se.jsx)("button",{onClick:function(){return t(ce())},children:"Logout"})]})},ve=n(13),ge=function(){var e=Object(ve.f)(),t=decodeURIComponent(e.webId),n=Object(i.c)((function(e){return K(e,t)})),r=Object(i.c)((function(e){return Q(e,t)}));return Object(se.jsxs)("div",{children:[Object(se.jsx)("p",{children:Object(se.jsx)("a",{href:n.id,children:n.name})}),Object(se.jsx)("p",{children:Object(se.jsx)("img",{src:n.avatar,alt:"Image of ".concat(n.name)})}),Object(se.jsx)("p",{children:n.about}),Object(se.jsx)("ul",{children:r.map((function(e){return Object(se.jsx)("li",{children:JSON.stringify(e)},e.id)}))})]})},ye=n(20),we=n(226),Ie=function(e){var t,n=e.offer,c=e.onSubmit,a=e.onCancel,o=e.submit,i=Object(r.useState)(n),s=Object(l.a)(i,2),u=s[0],d=s[1];Object(r.useEffect)((function(){d(n)}),[n]);return Object(se.jsxs)("form",{className:"w-64 p-4 bg-blue-200 rounded flex flex-col gap-4",onSubmit:function(e){e.preventDefault(),c(u)},children:[Object(se.jsx)(Ne,{location:u.position,onChange:function(e){d((function(t){return Object(ye.a)(Object(ye.a)({},t),{},{position:e})}))},className:"w-56 h-56"}),Object(se.jsx)("textarea",{value:null!==(t=u.about.en[0])&&void 0!==t?t:"",onChange:function(e){d((function(t){return Object(ye.a)(Object(ye.a)({},t),{},{about:{en:[e.target.value]}})}))},placeholder:"about"}),Object(se.jsx)("button",{className:"bg-green-300 hover:bg-green-400",type:"submit",children:o}),Object(se.jsx)("button",{className:"hover:bg-gray-100",type:"button",onClick:a,children:"Cancel"})]})},ke=function(e){return(e%360-540)%360+180},Ce=function(e){var t=e.onDrag,n=Object(we.b)({drag:function(){var e=n.getCenter(),r=e.lat,c=e.lng;t([r,ke(c)]),n.setView([r,ke(c)])}});return null},Ne=function(e){var t=e.location,n=e.className,r=void 0===n?"":n,c=e.onChange;return Object(se.jsxs)(le.a,{attributionControl:!1,center:t,zoom:12,scrollWheelZoom:"center",doubleClickZoom:"center",touchZoom:"center",className:r,children:[Object(se.jsx)(Ce,{onDrag:c}),Object(se.jsx)(de.a,{url:"https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"}),Object(se.jsx)(be.a,{position:t})]})},Se=n(72),Ee=n.n(Se),Ue=function(e){var t=e.confirmString,n=e.onConfirm,c=e.onCancel,a=Object(r.useState)(!0),o=Object(l.a)(a,2),i=o[0],s=o[1],u=Object(r.useState)(""),d=Object(l.a)(u,2),b=d[0],f=d[1];return Object(se.jsxs)(Ee.a,{isOpen:i,onRequestClose:function(){return s(!1)},onAfterClose:c,contentLabel:"Are you sure?",closeTimeoutMS:150,overlayClassName:{base:"bg-opacity-90 bg-gray-900 fixed top-0 left-0 bottom-0 right-0 z-5000",afterOpen:"",beforeClose:""},children:[Object(se.jsx)("h1",{children:"Are you sure you want to remove offer?"}),Object(se.jsxs)("form",{onSubmit:function(e){e.preventDefault(),b===t&&n()},className:"flex flex-col gap-2",children:[Object(se.jsxs)("label",{children:["Please enter"," ",Object(se.jsx)("samp",{children:Object(se.jsx)("kbd",{children:t})})," ","below"]}),Object(se.jsx)("input",{className:"border rounded",type:"text",value:b,onChange:function(e){return f(e.target.value)},autoFocus:!0}),Object(se.jsx)("button",{type:"submit",disabled:t!==b,className:"disabled:opacity-50 bg-red-400 disabled:cursor-not-allowed cursor-pointer",children:"Confirm"}),Object(se.jsx)("button",{className:"border",onClick:c,children:"Cancel"})]})]})},Le=function(e){var t=e.offer,n=e.onClickEdit,c=s(),a=Object(r.useState)(!1),o=Object(l.a)(a,2),i=o[0],u=o[1];return Object(se.jsxs)("div",{className:"w-64 p-4 bg-blue-50 rounded flex flex-col gap-4",children:[Object(se.jsx)(De,{location:t.position,className:"w-56 h-56"}),Object(se.jsx)("section",{className:"whitespace-pre-line",children:t.about.en}),Object(se.jsx)("button",{className:"bg-white",onClick:n,children:"edit"}),Object(se.jsx)("button",{className:"bg-red-400",onClick:function(){return u(!0)},children:"remove"}),i&&Object(se.jsx)(Ue,{confirmString:new globalThis.URL(t.id).hash,onConfirm:function(){c(E(t)),u(!1)},onCancel:function(){return u(!1)}})]})},Re=function(e){var t=e.location,n=Object(we.a)();return Object(r.useEffect)((function(){n.setView(t,12)}),[t,n]),null},De=function(e){var t=e.location,n=e.className,r=void 0===n?"":n;return Object(se.jsxs)(le.a,{attributionControl:!1,center:t,zoom:12,scrollWheelZoom:"center",doubleClickZoom:"center",touchZoom:"center",className:r,children:[Object(se.jsx)(Re,{location:t}),Object(se.jsx)(de.a,{url:"https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png"}),Object(se.jsx)(be.a,{position:t})]})},Ae=function(){var e=u(W),t=u((function(t){return Q(t,e.id)})),n=s(),c=v(e.id),a=Object(r.useState)(!1),o=Object(l.a)(a,2),i=o[0],d=o[1],b=Object(r.useState)(""),f=Object(l.a)(b,2),j=f[0],p=f[1],h=t.find((function(e){return e.id===j})),m=function(e){n(S({offer:e,document:c})),p("")},O=function(){d(!1),p("")};return Object(se.jsxs)("div",{className:"flex flex-col items-center justify-evenly",children:[Object(se.jsx)("header",{children:Object(se.jsxs)("h1",{children:["Offers of"," ",Object(se.jsx)(Oe.b,{to:"/users/".concat(encodeURIComponent(e.id)),children:e.name})]})}),Object(se.jsxs)("ul",{className:"flex flex-wrap gap-6 justify-center",children:[t.map((function(e){return e===h?Object(se.jsx)(Ie,{offer:h,onSubmit:m,onCancel:O,submit:"Update"}):Object(se.jsx)("li",{children:Object(se.jsx)(Le,{offer:e,onClickEdit:function(){return t=e.id,p(""),d(!1),void p(t);var t}})},e.id)})),i&&Object(se.jsx)(Ie,{offer:{id:"".concat(c,"#offer").concat(Date.now()),userId:e.id,position:[0,0],about:{en:[""]}},onSubmit:function(e){n(N({offer:e,document:c})),d(!1)},onCancel:O,submit:"Create"})]}),!i&&Object(se.jsx)("button",{onClick:function(){d(!0),p("")},children:"Add Offer"})]})},ze=function(){var e=u(H),t=u(J),n=s();return Object(se.jsxs)("div",{children:[Object(se.jsx)("h1",{children:"Communities"}),Object(se.jsx)("ul",{children:e.map((function(e){return Object(se.jsxs)("li",{children:[e.name.en," ",t.includes(e)?"Member":Object(se.jsx)("button",{onClick:function(){return n(P(e))},children:"Join"})]},e.id)}))})]})};var Pe=function(){var e=u(oe),t=s();return Object(r.useEffect)((function(){t(re())}),[t]),Object(r.useEffect)((function(){e.isLoggedIn&&["https://hospex-group-test.solidcommunity.net/profile/card#us","https://mrkvon.inrupt.net/hospex/sleepy-bike/community#us"].forEach((function(e){t(T(e))}))}),[e.isLoggedIn,t]),Object(se.jsx)("div",{className:"App",children:"pending"===e.status?Object(se.jsx)("i",{children:"Loading"}):e.isLoggedIn?Object(se.jsxs)(Oe.a,{children:[Object(se.jsx)(xe,{}),Object(se.jsxs)(ve.c,{children:[Object(se.jsx)(ve.a,{path:"/users/:webId",children:Object(se.jsx)(ge,{})}),Object(se.jsx)(ve.a,{path:"/offers",children:Object(se.jsx)(Ae,{})}),Object(se.jsx)(ve.a,{path:"/communities",children:Object(se.jsx)(ze,{})}),Object(se.jsx)(ve.a,{path:"/",children:Object(se.jsx)(me,{})})]})]}):Object(se.jsx)(ue,{})})},Te=Object(j.a)({reducer:{offer:R,community:B,user:_,login:ie}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Ee.a.setAppElement("#root"),o.a.render(Object(se.jsx)(c.a.StrictMode,{children:Object(se.jsx)(i.a,{store:Te,children:Object(se.jsx)(Pe,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[221,1,2]]]);
//# sourceMappingURL=main.a2b7526d.chunk.js.map