(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{128:function(e,t,n){e.exports={status:"ProfileInfo_status__31wvJ"}},129:function(e,t,n){e.exports={item:"Post_item__2KsXO"}},130:function(e,t,n){e.exports={usersPhoto:"Chat_usersPhoto__1XzaW"}},159:function(e,t,n){},18:function(e,t,n){e.exports={nav:"Navbar_nav__hqimj",item:"Navbar_item__1rYmE",activeClassLink:"Navbar_activeClassLink__1kCFK"}},24:function(e,t,n){e.exports={dialogs:"Dialogs_dialogs__2xRSA",dialogsItems:"Dialogs_dialogsItems__2sNe2",active:"Dialogs_active__2sQhs",messages:"Dialogs_messages__1w_Up",message:"Dialogs_message__1xIDh"}},243:function(e,t,n){},282:function(e,t,n){"use strict";n.r(t);var s=n(0),i=n(1),r=n.n(i);n(159),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(61),c=n.n(a),o=n(10),u=n(12),l=n(8),j=n(123),d=n(23),b=n(5),h=n(283),O={dialogs:[{id:Object(h.a)(),name:"Nastya"},{id:Object(h.a)(),name:"Vlad"},{id:Object(h.a)(),name:"Vika"},{id:Object(h.a)(),name:"Andrey"},{id:Object(h.a)(),name:"Vasia"}],messages:[{id:Object(h.a)(),message:"hi how is your programmnig"},{id:Object(h.a)(),message:'hi, its ok"'},{id:Object(h.a)(),message:"Good"},{id:Object(h.a)(),message:"ok"},{id:Object(h.a)(),message:"yo"}]};var p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-MESSAGE":var n=t.value;return Object(b.a)(Object(b.a)({},e),{},{messages:[].concat(Object(d.a)(e.messages),[{id:Object(h.a)(),message:n}])});default:return e}},g=n(125),f=n.n(g).a.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"7866738e-c5bf-440e-864d-4cc467150876"}}),m=function(e,t){return f.get("users?page=".concat(e,"&count=").concat(t))},x=function(e){return f.delete("follow/".concat(e))},v=function(e){return f.post("follow/".concat(e))},S=function(e){return console.warn("Obsolete method"),_.getProfile(e)},_={getProfile:function(e){return f.get("profile/"+e)},getStatus:function(e){return f.get("profile/status/"+e)},updateStatus:function(e){return f.put("profile/status",{status:e})}},C=function(){return f.get("auth/me")},P=function(e,t,n){return f.post("/auth/login",{email:e,password:t,rememberMe:n})},k=function(){return f.delete("auth/login")},w={profile:null,status:"",posts:[{id:Object(h.a)(),message:"Hi, how are you*?",likekounts:12},{id:Object(h.a)(),message:"its my first post",likekounts:33},{id:Object(h.a)(),message:"go in iron",likekounts:333},{id:Object(h.a)(),message:"its my life",likekounts:333}]},T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-POST":var n=t.value,s={id:Object(h.a)(),likekounts:0,message:n};return Object(b.a)(Object(b.a)({},e),{},{posts:[].concat(Object(d.a)(e.posts),[s])});case"SET_USER_PROFILE":return Object(b.a)(Object(b.a)({},e),{},{profile:t.profile});case"SET_STATUS":case"UPDATE_STATUS":return Object(b.a)(Object(b.a)({},e),{},{status:t.status});default:return e}},y={users:[],pageSize:10,totalCount:100,currentPage:1,isFetching:!1,folowingInProgress:[]},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FOLLOW":return Object(b.a)(Object(b.a)({},e),{},{users:e.users.map((function(e){return t.userid===e.id?Object(b.a)(Object(b.a)({},e),{},{followed:!0}):e}))});case"UN-FOLLOW":return Object(b.a)(Object(b.a)({},e),{},{users:e.users.map((function(e){return t.userid===e.id?Object(b.a)(Object(b.a)({},e),{},{followed:!1}):e}))});case"SETUSERS":return Object(b.a)(Object(b.a)({},e),{},{users:t.users});case"SET-CURRENT-PAGE":return Object(b.a)(Object(b.a)({},e),{},{currentPage:t.currentPage});case"SET-TOTAL-USERS-COUNT":return Object(b.a)(Object(b.a)({},e),{},{totalCount:t.totalCount});case"TOGL-IDFETCHING":return Object(b.a)(Object(b.a)({},e),{},{isFetching:t.isFetching});case"TOGL-IS-FOLLOWING-PROGRESS":return Object(b.a)(Object(b.a)({},e),{},{folowingInProgress:t.isFetching?[].concat(Object(d.a)(e.folowingInProgress),[t.userId]):e.folowingInProgress.filter((function(e){return e!=t.userId}))})}return e},A=function(e){return{type:"SET-CURRENT-PAGE",currentPage:e}},E=function(e){return{type:"SET-TOTAL-USERS-COUNT",totalCount:e}},I=function(e){return{type:"TOGL-IDFETCHING",isFetching:e}},F=function(e,t){return{type:"TOGL-IS-FOLLOWING-PROGRESS",isFetching:e,userId:t}},U=n(39),L=function(e){return{type:"SET-USER-DATA",data:e}},D={id:null,email:null,login:null,isAuth:!1},M=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET-USER-DATA":return Object(b.a)(Object(b.a)({},e),t.data)}return e},R=function(){return function(e){C().then((function(t){if(0===t.data.resultCode){var n=t.data.data,s=n.id,i=n.email,r=n.login;e(L({id:s,email:i,login:r,isAuth:!0}))}}))}},z=n(126),B={initialized:!1},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INITIALIZED_SUCCESS":return Object(b.a)(Object(b.a)({},e),{},{initialized:!0})}return e},W=Object(l.c)({dialogsPage:p,profilePage:T,usersPeges:N,auth:M,form:j.a,app:G}),H=Object(l.e)(W,Object(l.a)(z.a)),J=n(28),K=n(29),Y=n(31),q=n(30),Q=(n(243),n(18)),V=n.n(Q),X=function(){return Object(s.jsxs)("nav",{className:V.a.nav,children:[Object(s.jsx)("div",{className:V.a.item,children:Object(s.jsx)(u.b,{to:"/profile",activeClassName:V.a.activeClassLink,children:"Profile"})}),Object(s.jsx)("div",{className:V.a.item,children:Object(s.jsx)(u.b,{to:"/dialogs",activeClassName:V.a.activeClassLink,children:"Messages"})}),Object(s.jsx)("div",{className:V.a.item,children:Object(s.jsx)(u.b,{to:"/users",activeClassName:V.a.activeClassLink,children:"Users"})}),Object(s.jsx)("div",{className:V.a.item,children:Object(s.jsx)(u.b,{to:"/chat",activeClassName:V.a.activeClassLink,children:"Chat"})}),Object(s.jsx)("div",{className:V.a.item,children:Object(s.jsx)("a",{children:"News"})}),Object(s.jsx)("div",{className:V.a.item,children:Object(s.jsx)("a",{children:"Music"})}),Object(s.jsx)("div",{className:V.a.item,children:Object(s.jsx)("a",{children:"Settings"})})]})},Z=n(11),$=n(24),ee=n.n($),te=function(e){return Object(s.jsx)("div",{className:ee.a.dialog+" "+ee.a.active,children:Object(s.jsx)(u.b,{to:"dialogs/"+e.id,children:e.name})})},ne=function(e){return Object(s.jsx)("div",{className:ee.a.dialog,children:e.message})},se=n(121),ie=n(122),re=function(e){return e?void 0:"Field is required"},ae=function(e){return function(t){if(t)return t.length>e?"Max length is "+e+" symbols ":void 0}},ce=n(90),oe=n(36),ue=n.n(oe),le=function(e){var t=e.input,n=(e.children,e.meta),i=Object(ce.a)(e,["input","children","meta"]),r=n.touched&&n.error;return Object(s.jsxs)("div",{className:ue.a.formControl+" "+(r?ue.a.error:""),children:[Object(s.jsx)("div",{children:Object(s.jsx)("input",Object(b.a)(Object(b.a)({},t),i))}),r&&Object(s.jsx)("span",{children:n.error})]})},je=function(e){var t=e.input,n=(e.children,e.meta),i=Object(ce.a)(e,["input","children","meta"]),r=n.touched&&n.error;return Object(s.jsxs)("div",{className:ue.a.formControl+" "+(r?ue.a.error:""),children:[Object(s.jsx)("div",{children:Object(s.jsx)("textarea",Object(b.a)(Object(b.a)({},t),i))}),r&&Object(s.jsx)("span",{children:n.error})]})},de=function(e){var t=e.dialogsPage.messages.map((function(e){return Object(s.jsx)(ne,{message:e.message},e.id)})),n=e.dialogsPage.dialogs.map((function(e){return Object(s.jsx)(te,{id:e.id,name:e.name},e.id)}));return Object(s.jsxs)("div",{className:ee.a.dialogs,children:[Object(s.jsx)("div",{className:ee.a.dialogsItems,children:n}),Object(s.jsxs)("div",{className:ee.a.messages,children:[Object(s.jsxs)("div",{children:[" ",t]}),Object(s.jsx)(he,{onSubmit:function(t){console.log(t.newMessageBody),e.addMessage(t.newMessageBody)}})]})]})},be=ae(10),he=Object(ie.a)({form:"AddMessageForm"})((function(e){return Object(s.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(s.jsx)("div",{children:Object(s.jsx)(se.a,{placeholder:"Enter your message",validate:[be,re],name:"newMessageBody",component:je})}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{children:"add message"})})]})})),Oe=function(e){return{isAuth:e.auth.isAuth}},pe=function(e){return Object(o.b)(Oe)((function(t){return t.isAuth?Object(s.jsx)(e,Object(b.a)({},t)):Object(s.jsx)(Z.a,{to:"/login"})}))},ge=Object(l.d)(Object(o.b)((function(e){return{dialogsPage:e.dialogsPage}}),(function(e){return{addMessage:function(t){e(function(e){return{type:"ADD-MESSAGE",value:e}}(t))}}})),pe)(de),fe=n(87),me=n.n(fe),xe=n.p+"static/media/user.ab6315c9.png";var ve=function(e){for(var t=Math.ceil(e.totalCount/e.pageSize),n=[],i=1;i<=t;i++)n.push(i);return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:n.map((function(t){return Object(s.jsx)("span",{className:e.currentPage===t?me.a.selectedPage:"",onClick:function(n){e.onPageChanged(t)},children:t},t)}))}),e.users.map((function(t){return Object(s.jsxs)("div",{children:[Object(s.jsx)("span",{children:Object(s.jsxs)("div",{children:[Object(s.jsx)(u.b,{to:"/profile/"+t.id,children:Object(s.jsx)("img",{alt:"photo",src:null!==t.photos.small?t.photos.small:xe,className:me.a.usersPhoto})}),Object(s.jsx)("div",{children:t.followed?Object(s.jsx)("button",{disabled:e.folowingInProgres.some((function(e){return e===t.id})),onClick:function(){e.unFolluwThunk(t.id)},children:"unfollow"}):Object(s.jsx)("button",{disabled:e.folowingInProgres.some((function(e){return e===t.id})),onClick:function(){e.FolluwThunk(t.id)},children:"follow"})})]})}),Object(s.jsxs)("span",{children:[Object(s.jsxs)("span",{children:[Object(s.jsx)("div",{children:t.name}),Object(s.jsx)("div",{children:t.status})]}),Object(s.jsxs)("span",{children:[Object(s.jsx)("div",{children:"u.location.contry"}),Object(s.jsx)("div",{children:"u.location.city"})]})]})]},t.id)}))]})},Se=n.p+"static/media/loader.a1a99674.gif",_e=function(){return Object(s.jsx)("div",{children:Object(s.jsx)("img",{src:Se})})},Ce=function(e){return e.usersPeges.users},Pe=function(e){return e.usersPeges.pageSize},ke=function(e){return e.usersPeges.totalCount},we=function(e){return e.usersPeges.currentPage},Te=function(e){return e.usersPeges.isFetching},ye=function(e){return e.usersPeges.folowingInProgress},Ne=function(e){Object(Y.a)(n,e);var t=Object(q.a)(n);function n(){var e;Object(J.a)(this,n);for(var s=arguments.length,i=new Array(s),r=0;r<s;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).onPageChanged=function(t){e.props.getUsersThunk(t,e.props.pageSize)},e}return Object(K.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersThunk(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(s.jsxs)(s.Fragment,{children:[this.props.isFetching?Object(s.jsx)(_e,{}):null,Object(s.jsx)(ve,{folowingInProgres:this.props.folowingInProgress,unFolluwThunk:this.props.unFolluwThunk,FolluwThunk:this.props.FolluwThunk,currentPage:this.props.currentPage,pageSize:this.props.pageSize,totalCount:this.props.totalCount,setTotalUsersCount:this.props.setTotalUsersCount,onPageChanged:this.onPageChanged,users:this.props.users})]})}}]),n}(r.a.Component),Ae=Object(l.d)(pe,Object(o.b)((function(e){return{users:Ce(e),pageSize:Pe(e),totalCount:ke(e),currentPage:we(e),isFetching:Te(e),folowingInProgress:ye(e)}}),{setCurrentPage:A,setTotalUsersCount:E,toglIsFetching:I,getUsersThunk:function(e,t){return function(n){n(I(!0)),n(A(e)),m(e,t).then((function(e){n(I(!1)),n({type:"SETUSERS",users:e.data.items}),n(E(e.data.totalCount))}))}},unFolluwThunk:function(e){return function(t){t(F(!0,e)),x(+e).then((function(n){0===n.data.resultCode&&t({type:"UN-FOLLOW",userid:e}),t(F(!1,e))}))}},FolluwThunk:function(e){return function(t){t(F(!0,e)),v(+e).then((function(n){0===n.data.resultCode&&t({type:"FOLLOW",userid:e}),t(F(!1,e))}))}}}))(Ne),Ee=n(128),Ie=n.n(Ee),Fe=n(37),Ue=function(e){var t=Object(i.useState)(!1),n=Object(Fe.a)(t,2),r=n[0],a=n[1],c=Object(i.useState)(e.status),o=Object(Fe.a)(c,2),u=o[0],l=o[1];return Object(s.jsxs)("div",{children:[!r&&Object(s.jsx)("div",{children:Object(s.jsx)("span",{onDoubleClick:function(){return a(!0)},children:e.status||"-------"})}),r&&Object(s.jsx)("div",{children:Object(s.jsx)("input",{onChange:function(e){l(e.currentTarget.value)},autoFocus:!0,onBlur:function(){a(!1),e.updateStatus(u)},value:u})})]})},Le=function(e){return e.profile?Object(s.jsx)("div",{children:Object(s.jsxs)("div",{className:Ie.a.discriptionBlock,children:["ava + discriphon",Object(s.jsx)("div",{children:e.profile.fullName}),Object(s.jsx)("img",{src:e.profile.photos.large}),Object(s.jsx)(Ue,{status:e.status,updateStatus:e.updateStatus})]})}):Object(s.jsx)(_e,{})},De=n(88),Me=n.n(De),Re=n(129),ze=n.n(Re),Be=function(e){return Object(s.jsxs)("div",{className:ze.a.item,children:[Object(s.jsx)("img",{alt:"post",src:"https://vignette.wikia.nocookie.net/castle-rock/images/9/9d/Stephen_King._Art_by_CoalRye.jpg/revision/latest?cb=20180716011208&path-prefix=ru"}),e.message,Object(s.jsx)("div",{children:Object(s.jsxs)("span",{children:[e.likekounts," like"]})})]})},Ge=function(e){var t=e.posts.map((function(e){return Object(s.jsx)(Be,{message:e.message,likekounts:e.likekounts,id:e.id},e.id)}));return Object(s.jsxs)("div",{className:Me.a.postsBlock,children:[Object(s.jsx)("h3",{children:"My posts"}),Object(s.jsx)("div",{children:Object(s.jsx)(He,{onSubmit:function(t){e.addPost(t.newPostBody)}})}),Object(s.jsx)("div",{className:Me.a.posts,children:t})]})},We=ae(20),He=Object(ie.a)({form:"AddNewPostForm"})((function(e){return Object(s.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(s.jsx)("div",{children:Object(s.jsx)(se.a,{placeholder:"Enter new post",validate:[We,re],name:"newPostBody",component:je})}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{children:"Add post"})})]})})),Je=Object(o.b)((function(e){return{posts:e.profilePage.posts}}),(function(e){return{addPost:function(t){e(function(e){return{type:"ADD-POST",value:e}}(t))}}}))(Ge),Ke=function(e){return Object(s.jsxs)("div",{children:[Object(s.jsx)(Le,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),Object(s.jsx)(Je,{})]})},Ye=function(e){Object(Y.a)(n,e);var t=Object(q.a)(n);function n(){return Object(J.a)(this,n),t.apply(this,arguments)}return Object(K.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.autorisedUserId)||this.props.history.push("/login"),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"render",value:function(){return Object(s.jsx)("div",{children:Object(s.jsx)(Ke,Object(b.a)(Object(b.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))})}}]),n}(r.a.Component),qe=Object(l.d)(Object(o.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,autorisedUserId:e.auth.id,isAuth:e.auth.isAuth}}),{getUserProfile:function(e){return function(t){S(+e).then((function(e){t({type:"SET_USER_PROFILE",profile:e.data})}))}},getStatus:function(e){return function(t){_.getStatus(+e).then((function(e){t({type:"SET_STATUS",status:e.data})}))}},updateStatus:function(e){return function(t){_.updateStatus(e).then((function(n){0===n.data.resultCode&&t(function(e){return{type:"UPDATE_STATUS",status:e}}(e))}))}}}),pe,Z.f)(Ye),Qe=n(89),Ve=n.n(Qe),Xe=function(e){return Object(s.jsxs)("header",{className:Ve.a.header,children:[Object(s.jsx)("img",{alt:"header",src:"https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"}),Object(s.jsx)("div",{className:Ve.a.loginBlock,children:e.isAuth?Object(s.jsxs)("div",{children:[e.login," --- ",Object(s.jsx)("button",{onClick:e.logoutTC,children:"Logout"})]}):Object(s.jsx)(u.b,{to:"/login",children:"Login"})})]})},Ze=function(e){Object(Y.a)(n,e);var t=Object(q.a)(n);function n(){return Object(J.a)(this,n),t.apply(this,arguments)}return Object(K.a)(n,[{key:"render",value:function(){return Object(s.jsx)(Xe,Object(b.a)({},this.props))}}]),n}(r.a.Component),$e=Object(o.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logoutTC:function(){return function(e){k().then((function(t){0===t.data.resultCode&&e(L({login:null,id:null,email:null,isAuth:!1}))}))}}})(Ze),et=Object(ie.a)({form:"login"})((function(e){return Object(s.jsxs)("form",{onSubmit:e.handleSubmit,children:[Object(s.jsx)("div",{children:Object(s.jsx)(se.a,{placeholder:"email",validate:[re],name:"email",component:le})}),Object(s.jsx)("div",{children:Object(s.jsx)(se.a,{placeholder:"password",validate:[re],name:"password",component:le})}),Object(s.jsx)("div",{children:Object(s.jsx)(se.a,{type:"checkbox",name:"rememberMe",component:le})}),e.error&&Object(s.jsx)("div",{className:ue.a.FormsControl,children:e.error}),Object(s.jsx)("div",{children:Object(s.jsx)("button",{children:"Login"})})]})}));var tt=Object(o.b)((function(e){return{isAuth:e.auth.isAuth}}),{loginTC:function(e,t,n){return function(s){P(e,t,n).then((function(e){if(0===e.data.resultCode)s(R());else{var t=e.data.messages.length>0?e.data.messages[0]:"some error";s(Object(U.a)("login",{_error:t}))}}))}}})((function(e){return e.isAuth?Object(s.jsx)(Z.a,{to:"/profile"}):Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:"Login"}),Object(s.jsx)(et,{onSubmit:function(t){e.loginTC(t.email,t.password,t.rememberMe)}})]})})),nt=n(130),st=n.n(nt),it=function(){var e=Object(i.useState)(""),t=Object(Fe.a)(e,2),n=t[0],r=t[1],a=Object(i.useState)([]),c=Object(Fe.a)(a,2),o=c[0],u=c[1],l=Object(i.useState)(),j=Object(Fe.a)(l,2),b=j[0],h=j[1];b&&(b.onmessage=function(e){var t=JSON.parse(e.data);u([].concat(Object(d.a)(o),Object(d.a)(t)))}),console.log("render"),Object(i.useEffect)((function(){var e=new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx");e&&h(e)}),[]);return Object(s.jsxs)("div",{children:[Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"messanges",children:o.map((function(e,t){return Object(s.jsxs)("div",{className:"messange",children:[Object(s.jsx)("img",{className:st.a.photo,src:e.photo}),Object(s.jsx)("b",{children:e.userName}),Object(s.jsx)("div",{children:e.message})]},t)}))})}),Object(s.jsxs)("div",{children:[Object(s.jsx)("textarea",{value:n,onChange:function(e){r(e.currentTarget.value)}}),Object(s.jsx)("button",{onClick:function(){b&&(b.send(n),r(""))},children:"Send"})]})]})},rt=function(e){Object(Y.a)(n,e);var t=Object(q.a)(n);function n(){return Object(J.a)(this,n),t.apply(this,arguments)}return Object(K.a)(n,[{key:"componentDidMount",value:function(){this.props.initializedApp()}},{key:"render",value:function(){return this.props.initialized?Object(s.jsxs)("div",{className:"app-wrapper",children:[Object(s.jsx)($e,{}),Object(s.jsx)(X,{}),Object(s.jsxs)("div",{className:"app-wrapper-content",children:[Object(s.jsx)(Z.b,{path:"/profile/:userId?",render:function(){return Object(s.jsx)(qe,{})}}),Object(s.jsx)(Z.b,{path:"/dialogs",render:function(){return Object(s.jsx)(ge,{})}}),Object(s.jsx)(Z.b,{path:"/users",render:function(){return Object(s.jsx)(Ae,{})}}),Object(s.jsx)(Z.b,{path:"/login",render:function(){return Object(s.jsx)(tt,{})}}),Object(s.jsx)(Z.b,{path:"/chat",render:function(){return Object(s.jsx)(it,{})}})]})]}):Object(s.jsx)(_e,{})}}]),n}(r.a.Component),at=Object(l.d)(Object(o.b)((function(e){return{initialized:e.app.initialized}}),{initializedApp:function(){return function(e){var t=e(R());e(R());Promise.all([t]).then((function(){e({type:"INITIALIZED_SUCCESS"})}))}}}))(rt);c.a.render(Object(s.jsxs)(u.a,{children:[Object(s.jsx)(o.a,{store:H,children:Object(s.jsx)(at,{})}),","]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},36:function(e,t,n){e.exports={formControl:"FormsControl_formControl__P0OFh",error:"FormsControl_error__1g0kt",FormsControl:"FormsControl_FormsControl__3L67z"}},87:function(e,t,n){e.exports={usersPhoto:"Users_usersPhoto__1Yu6Q",selectedPage:"Users_selectedPage__3sYe4"}},88:function(e,t,n){e.exports={postsBlock:"MyPosts_postsBlock__1aryQ",posts:"MyPosts_posts__1q9rU"}},89:function(e,t,n){e.exports={header:"Header_header__1MOL-",loginBlock:"Header_loginBlock__1z7oD"}}},[[282,1,2]]]);
//# sourceMappingURL=main.b3a6ae55.chunk.js.map