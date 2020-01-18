(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{32:function(e,t,n){e.exports=n(48)},48:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),l=n(26),c=n.n(l),u=n(11),o=n(3),i=n(6),s=n(8),p=n(7),m=n(9),f=n(4),h={type:"SUCCESS"},E={type:"FAILURE"},b=function(){return{type:"SUCCESS"}},d=function(){return{type:"FAILURE"}},v=function(e){return{type:"USER_INPUT_SUBMIT",payload:e}},O=function(e){return{type:"USER_INPUT_CHANGE",payload:e}},g=function(e){return{type:"USER_INPUT",payload:e}},_=function(){return{type:"LOGIN_SUCCESS"}},S=function(){return{type:"LOGIN_FAILURE"}},j=function(e){return{type:"ADD_PROFILE",payload:e}},C=function(){return{type:"REMOVE_PROFILE"}},x=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return console.log(e.props.stateprop1)}}," Get State "),r.a.createElement("button",{onClick:function(){return e.props.action1()}}," Dispatch Action 1 "),r.a.createElement("button",{onClick:function(){return e.props.action2()}},"Dispatch Action 2 "),r.a.createElement("button",{onClick:function(){return e.props.action_creator1()}},"Dispatch Action Creator 1 "),r.a.createElement("button",{onClick:function(){return e.props.action_creator2()}},"Dispatch Action Creator 2 "),this.props.user_text?r.a.createElement("h3",null," ",this.props.user_text," "):r.a.createElement("h3",null," No User Text "),r.a.createElement("br",null),this.props.stateprop1?r.a.createElement("p",null," stateprop1 is true "):r.a.createElement("p",null," stateprop1 is false "))}}]),t}(a.Component);var y=Object(f.b)(function(e){return{stateprop1:e.reducer1.stateprop1,user_text:e.user_reducer.user_text}},function(e){return{action1:function(){return e(h)},action2:function(){return e(E)},action_creator1:function(){return e(b())},action_creator2:function(){return e(d())}}})(x),k=n(50),R=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(k.a,{to:"/",style:{padding:"5px"}},"Home"),r.a.createElement(k.a,{to:"/profile",style:{padding:"5px"}},"Profile"),r.a.createElement(k.a,{to:"/component1",style:{padding:"5px"}},"Component 1"),r.a.createElement(k.a,{to:"/container1",style:{padding:"5px"}},"Container 1"),r.a.createElement(k.a,{to:"/form1",style:{padding:"5px"}},"Form 1"),r.a.createElement(k.a,{to:"/renderlist",style:{padding:"5px"}},"List"),r.a.createElement(k.a,{to:"/hookscontainer",style:{padding:"5px"}},"Hooks Container"),r.a.createElement(k.a,{to:"/hooksform",style:{padding:"5px"}},"Hooks Form"),r.a.createElement(k.a,{to:"/privateroute",style:{padding:"5px"}},"Private Route"),this.props.is_authenticated?r.a.createElement("button",{onClick:function(){return e.props.auth.logout()}},"Logout"):r.a.createElement("button",{onClick:function(){return e.props.auth.login()}},"Login"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))}}]),t}(a.Component);var I=Object(f.b)(function(e){return{is_authenticated:e.auth_reducer.is_authenticated}})(R),U=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,l=new Array(a),c=0;c<a;c++)l[c]=arguments[c];return(n=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(l)))).RenderProfile=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,e.profile.profile.nickname),r.a.createElement("br",null),r.a.createElement("img",{src:e.profile.profile.picture,alt:""}),r.a.createElement("br",null),r.a.createElement("h4",null," ",e.profile.profile.email),r.a.createElement("br",null),r.a.createElement("h5",null," ",e.profile.profile.name," "),r.a.createElement("br",null),r.a.createElement("h6",null," Email Verified: "),e.profile.profile.email_verified?r.a.createElement("p",null,"Yes"):r.a.createElement("p",null,"No"),r.a.createElement("br",null))},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(this.RenderProfile,{profile:this.props.profile}))}}]),t}(a.Component);var A=Object(f.b)(function(e){return{profile:e.auth_reducer.profile}})(U),T=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={value:""},n.handleChange=function(e){return n.setState({value:e.target.value})},n.handleSubmit=function(e){e.preventDefault(),n.props.input_action_creator(e.target.name.value)},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("label",null," Input "),r.a.createElement("input",{id:"name",onChange:this.handleChange,type:"text"}),r.a.createElement("button",{type:"submit"}," Submit ")),r.a.createElement("br",null),r.a.createElement("h3",null,"React State:"),r.a.createElement("p",null,this.state.value),r.a.createElement("br",null),r.a.createElement("h3",null,"Redux State:"),r.a.createElement("p",null,this.props.user_text))}}]),t}(a.Component);var D=Object(f.b)(function(e){return{user_text:e.user_reducer.user_text}},function(e){return{input_action_creator:function(t){return e(g(t))}}})(T),P=function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,r=new Array(a),l=0;l<a;l++)r[l]=arguments[l];return(n=Object(s.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={items:[{id:1,text:"text 1",num:10,bool:!0},{id:2,text:"text 2",num:20,bool:!1},{id:3,text:"text 3",num:30,bool:!0}]},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.state.items.map(function(e){return r.a.createElement("div",{key:e.id},r.a.createElement(k.a,{to:{pathname:"/listitem/"+e.id,state:{list_item:e}},style:{marginTop:"25px",padding:"5px"}},"List Item ",e.id),r.a.createElement("br",null),r.a.createElement("br",null))}))}}]),t}(a.Component);var w=Object(f.b)(function(e){return{}})(P),L=function(e){return r.a.createElement("div",null,"Component 1",console.log(e))},F=function(e){return r.a.createElement("div",null,"Callback")},G=function(e){return r.a.createElement("div",null,"Private Component")},N=function(e){return r.a.createElement("div",null,"UnauthRedirect")},H=function(e){return r.a.createElement("div",null,"Home")},M=function(e){return r.a.createElement("div",null,r.a.createElement("h3",null,e.location.state.list_item.text),r.a.createElement("h4",null," ",e.location.state.list_item.num," "),r.a.createElement("div",null,e.location.state.list_item.bool?r.a.createElement("p",null,"Boolean is True"):r.a.createElement("p",null,"Boolean is False")))},V=n(28),J=n(29),B=n.n(J)()(),W=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.auth.isAuthenticated()?(this.props.login_success(),this.props.add_profile(this.props.auth.userProfile),B.replace("/")):(this.props.login_failure(),this.props.remove_profile(),B.replace("/"))}},{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(a.Component);var z=Object(f.b)(function(e){return{}},function(e){return{login_success:function(){return e(_())},login_failure:function(){return e(S())},add_profile:function(t){return e(j(t))},remove_profile:function(){return e(C())}}})(W),Y=n(51),Z=n(54),q=n(52),K=n(53),Q=n(5),X={stateprop1:!1,stateprop2:!1},$=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X;switch((arguments.length>1?arguments[1]:void 0).type){case"SUCCESS":return Object(Q.a)({},e,{stateprop1:!0,stateprop2:!0});case"FAILURE":return Object(Q.a)({},e,{stateprop1:!1,stateprop2:!1});default:return e}},ee=r.a.createContext({prop1:!1}),te=function(){var e=Object(a.useContext)(ee),t=Object(a.useState)(0),n=Object(u.a)(t,2),l=n[0],c=n[1],o=Object(a.useState)(""),i=Object(u.a)(o,2),s=i[0],p=i[1],m=Object(a.useReducer)($,X),f=Object(u.a)(m,2),h=f[0],E=f[1];Object(a.useEffect)(function(){setTimeout(function(){return p("useEffect Worked")},3e3)},[l]);return r.a.createElement("div",null,"React Hooks",r.a.createElement("br",null),r.a.createElement("button",{onClick:function(){c(l+1)}},"Inc Local State"),r.a.createElement("button",{onClick:function(){c(l-1)}},"Dec Local State"),r.a.createElement("button",{onClick:function(){p("Some String")}},"Change Use Effect"),r.a.createElement("button",{onClick:function(){E(b())}},"Dispatch True"),r.a.createElement("button",{onClick:function(){E(d())}},"Dispatch False"),r.a.createElement("button",{onClick:function(){return e.addGlobalValue()}},"Inc Global State"),r.a.createElement("button",{onClick:function(){return e.decGlobalValue()}},"Dec Global State"),r.a.createElement("button",{onClick:function(){return e.dispatchContextTrue()}},"Dispatch Global True"),r.a.createElement("button",{onClick:function(){return e.dispatchContextFalse()}},"Dispatch Global False"),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement("p",null,"Local State: ",l),r.a.createElement("br",null),r.a.createElement("p",null,"Global State: ",e.valueGlobalState),r.a.createElement("br",null),s?r.a.createElement("p",null,s):r.a.createElement("p",null," No Value "),r.a.createElement("br",null),e.useContextSubmit?r.a.createElement("p",null,e.useContextSubmit):r.a.createElement("p",null,"No User Text"),e.reducerGlobalState?r.a.createElement("p",null,"State Prop 2 is True"):r.a.createElement("p",null," State Prop 2 is False "),r.a.createElement("br",null),h.stateprop1?r.a.createElement("p",null,"State Prop 1 is True"):r.a.createElement("p",null,"State Prop1 is False")))},ne={user_text_change:"",user_text_submit:""},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_INPUT_CHANGE":return Object(Q.a)({},e,{user_text_change:t.payload});case"USER_INPUT_SUBMIT":return Object(Q.a)({},e,{user_text_submit:t.payload});default:return e}},re=function(){var e=Object(a.useContext)(ee),t=Object(a.useState)(""),n=Object(u.a)(t,2),l=n[0],c=n[1],o=Object(a.useState)(""),i=Object(u.a)(o,2),s=i[0],p=i[1],m=Object(a.useReducer)(ae,ne),f=Object(u.a)(m,2),h=f[0],E=f[1];return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),p(e.target.useState.value)}},r.a.createElement("label",null,"React useState: "),r.a.createElement("input",{id:"useState",type:"text",onChange:function(e){e.preventDefault(),c(e.target.value)}}),r.a.createElement("button",{type:"submit"},"Submit")),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),E(v(e.target.useReducer.value))}},r.a.createElement("label",null,"React useReducer: "),r.a.createElement("input",{id:"useReducer",type:"text",onChange:function(e){e.preventDefault(),E(O(e.target.value))}}),r.a.createElement("button",{type:"submit"},"Submit")),r.a.createElement("form",{onSubmit:e.contextHandleSubmit},r.a.createElement("label",null,"React useContext: "),r.a.createElement("input",{id:"useContext",type:"text",onChange:e.contextHandleChange}),r.a.createElement("button",{type:"submit"},"Submit")),r.a.createElement("di",null,r.a.createElement("h2",null," React useState: "),r.a.createElement("p",null," Change: ",l),r.a.createElement("p",null,"Submit: ",s)),r.a.createElement("di",null,r.a.createElement("h2",null," React useReducer: "),r.a.createElement("p",null," Change: ",h.user_text_change),r.a.createElement("p",null,"Submit: ",h.user_text_submit)),r.a.createElement("di",null,r.a.createElement("h2",null," React useContext: "),r.a.createElement("p",null," Change: ",e.useContextChange),r.a.createElement("p",null,"Submit: ",e.useContextSubmit)))},le=new function e(){var t=this;Object(o.a)(this,e),this.auth0=new V.a.WebAuth({domain:"webapp1.auth0.com",clientID:"uZxUdMAsiDWeu3OrNpoi4JwJscdF5nAx",redirectUri:"http://localhost:3000/callback",responseType:"token id_token",scope:"openid profile email"}),this.userProfile={},this.login=function(){t.auth0.authorize()},this.handleAuth=function(){t.auth0.parseHash(function(e,n){if(n){localStorage.setItem("access_token",n.accessToken),localStorage.setItem("id_token",n.idToken);var a=JSON.stringify(1e3*n.expiresIn+(new Date).getTime());localStorage.setItem("expiresAt",a),t.getProfile(),setTimeout(function(){B.replace("/authcheck")},2e3)}else console.log(e)})},this.getAccessToken=function(){return localStorage.getItem("access_token")?localStorage.getItem("access_token"):null},this.getProfile=function(){var e=t.getAccessToken();e&&t.auth0.client.userInfo(e,function(e,n){n&&(t.userProfile={profile:n})})},this.logout=function(){localStorage.removeItem("access_token"),localStorage.removeItem("id_token"),localStorage.removeItem("expiresAt"),setTimeout(function(){B.replace("/authcheck")},200)},this.isAuthenticated=function(){var e=JSON.parse(localStorage.getItem("expiresAt"));return(new Date).getTime()<e}},ce=function(e){var t=e.component,n=e.auth;return r.a.createElement(Y.a,{render:function(e){return!0===n.isAuthenticated()?r.a.createElement(t,Object.assign({auth:n},e)):r.a.createElement(Z.a,{to:{pathname:"/redirect"}})}})},ue=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;le.isAuthenticated()?(this.props.login_success(),le.getProfile(),setTimeout(function(){e.props.add_profile(le.userProfile)},400)):(this.props.login_failure(),this.props.remove_profile())}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(q.a,{history:B},r.a.createElement("div",null,r.a.createElement(I,{auth:le}),r.a.createElement(K.a,null,r.a.createElement(Y.a,{exact:!0,path:"/",component:H}),r.a.createElement(Y.a,{exact:!0,path:"/form1",component:D}),r.a.createElement(Y.a,{exact:!0,path:"/container1",render:function(){return r.a.createElement(y,{auth:le})}}),r.a.createElement(Y.a,{path:"/authcheck",render:function(){return r.a.createElement(z,{auth:le})}}),r.a.createElement(Y.a,{path:"/redirect",component:N}),r.a.createElement(Y.a,{path:"/renderlist",component:w}),r.a.createElement(Y.a,{path:"/hookscontainer",component:te}),r.a.createElement(Y.a,{path:"/hooksform",component:re}),r.a.createElement(Y.a,{path:"/callback",render:function(e){return function(e){e.location.hash&&le.handleAuth()}(e),r.a.createElement(F,null)}}),r.a.createElement(Y.a,{path:"/component1",render:function(e){return r.a.createElement(L,e)}}),r.a.createElement(Y.a,{path:"/listitem/:id",component:M}),r.a.createElement(ce,{path:"/privateroute",auth:le,component:G}),r.a.createElement(ce,{path:"/profile",auth:le,component:A})))))}}]),t}(a.Component);var oe=Object(f.b)(null,function(e){return{login_success:function(){return e(_())},login_failure:function(){return e(S())},add_profile:function(t){return e(j(t))},remove_profile:function(){return e(C())}}})(ue),ie=function(){var e=Object(a.useState)(0),t=Object(u.a)(e,2),n=t[0],l=t[1],c=Object(a.useReducer)($,X),o=Object(u.a)(c,2),i=o[0],s=o[1],p=Object(a.useReducer)(ae,ne),m=Object(u.a)(p,2),f=m[0],h=m[1];return r.a.createElement("div",null,"React",r.a.createElement(ee.Provider,{value:{valueGlobalState:n,addGlobalValue:function(){l(n+1)},decGlobalValue:function(){l(n-1)},reducerGlobalState:i.stateprop2,dispatchContextTrue:function(){s(b())},dispatchContextFalse:function(){s(d())},useContextChange:f.user_text_change,useContextSubmit:f.user_text_submit,contextHandleChange:function(e){return function(e){e.preventDefault(),h(O(e.target.value))}(e)},contextHandleSubmit:function(e){return function(e){e.preventDefault(),e.persist(),h(v(e.target.useContext.value))}(e)}}},r.a.createElement(oe,null)))},se={stateprop1:!1},pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se;switch((arguments.length>1?arguments[1]:void 0).type){case"SUCCESS":return Object(Q.a)({},e,{stateprop1:!0});case"FAILURE":return Object(Q.a)({},e,{stateprop1:!1});default:return e}},me={is_authenticated:!1,profile:null},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SUCCESS":return Object(Q.a)({},e,{is_authenticated:!0});case"LOGIN_FAILURE":return Object(Q.a)({},e,{is_authenticated:!1});case"ADD_PROFILE":return Object(Q.a)({},e,{profile:t.payload});case"REMOVE_PROFILE":return Object(Q.a)({},e,{profile:null});default:return e}},he={user_text:""},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_INPUT":return Object(Q.a)({},e,{user_text:t.payload});default:return e}},be=n(12),de=Object(be.combineReducers)({reducer1:pe,auth_reducer:fe,user_reducer:Ee}),ve=n(30),Oe=Object(be.createStore)(de,Object(ve.composeWithDevTools)(Object(be.applyMiddleware)()));c.a.render(r.a.createElement(f.a,{store:Oe},r.a.createElement(ie,null)),document.getElementById("root"))}},[[32,2,1]]]);
//# sourceMappingURL=main.614e6332.chunk.js.map