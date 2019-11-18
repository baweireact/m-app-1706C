(this["webpackJsonpm-app-test"]=this["webpackJsonpm-app-test"]||[]).push([[0],{108:function(e,t,n){e.exports=n(187)},11:function(e,t,n){"use strict";var a=n(31),r=n.n(a),i=n(44),o=n(24),c=n.n(o),u="/api/nav",s="/api/list",l="/api/my_book",d="/api/login",m="/api/register",p="/api/detail",h="/api/add",f="/api/update";c.a.interceptors.request.use((function(e){return e})),c.a.interceptors.response.use((function(e){return 400===e.data.code&&alert(e.data.message),403===e.data.code&&(window.location.href="/login"),e}));var v=function(){var e=Object(i.a)(r.a.mark((function e(t){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c()(t);case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t.a={getNav:function(){return v({url:u})},getList:function(e){return v({url:s+e})},getMyBook:function(){return v({url:l})},login:function(e){return v({url:d,data:e,method:"post"})},getDetail:function(e){return v({url:p+e})},add:function(e){return v({url:h,data:e,method:"post"})},update:function(e){return v({url:f,data:e,method:"post"})},register:function(e){return v({url:m,data:e,method:"post"})}}},186:function(e,t,n){},187:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(13),o=n.n(i),c=n(14),u=n(20),s=n(36),l={navList:[],currentId:0,currentList:[],myBook:[],loading:!1},d=Object(s.c)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_STATE":var n=JSON.parse(JSON.stringify(e));return n[t.key]=t.value,n;default:return e}}),Object(s.a)((function(e){return function(t){return function(n){return"function"===typeof n?n(e.dispatch):t(n)}}}),(function(e){return function(e){return function(t){console.log("\u65e5\u5fd7:"+t.type),e(t)}}}))),m=n(3),p=n(4),h=n(6),f=n(5),v=n(7),b=n(21),y=n(96),E=n(11),g=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={username:"",password:""},n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"handleInput",value:function(e,t){this.setState(Object(y.a)({},e,t.target.value))}},{key:"handleLogin",value:function(){var e=this,t=this.state,n=t.username,a=t.password;""!==n.trim()?""!==a.trim()?E.a.login({username:n,password:a}).then((function(t){200===t.code&&(localStorage.setItem("username",t.data.username),e.props.history.push("/index/home"))})):alert("\u5bc6\u7801\u4e0d\u80fd\u4e3a\u7a7a"):alert("\u7528\u6237\u540d\u4e0d\u80fd\u4e3a\u7a7a")}},{key:"handleEnter",value:function(e){13===e.keyCode&&this.handleLogin()}},{key:"render",value:function(){var e=this,t=this.state,n=t.username,a=t.password;return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("input",{value:n,onChange:this.handleInput.bind(this,"username"),autoFocus:!0,placeholder:"\u8bf7\u8f93\u5165\u7528\u6237\u540d"})),r.a.createElement("div",null,r.a.createElement("input",{value:a,onChange:function(t){return e.handleInput("password",t)},onKeyUp:this.handleEnter.bind(this),placeholder:"\u8bf7\u8f93\u5165\u5bc6\u7801",type:"password"})),r.a.createElement("button",{onClick:this.handleLogin.bind(this)},"\u767b\u5f55"))}}]),t}(a.Component),k=n(31),O=n.n(k),j=n(44),S=n(30),w=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"handleNav",value:function(e){this.props.setState("currentId",e),this.props.onDispacth(S.a.getList(e))}},{key:"componentDidMount",value:function(){var e=this.props.currentId;this.props.onDispacth(S.a.getNav()),this.props.onDispacth(S.a.getList(e))}},{key:"render",value:function(){var e=this,t=this.props,n=t.navList,a=t.currentId,i=n.map((function(t){return r.a.createElement("span",{key:t.id,className:"m-nav-item "+(a===t.id?"active":""),onClick:e.handleNav.bind(e,t.id)},t.title)}));return r.a.createElement("div",null,i)}}]),t}(a.Component),T=Object(c.b)((function(e){return{navList:e.navList,currentId:e.currentId}}),(function(e){return{setState:function(t,n){e({type:"SET_STATE",key:t,value:n})},onDispacth:function(t){e(t)}}}))(w),L=n(97),N=n.n(L),_=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"handleDetail",value:function(e){this.props.history.push("/index/detail/".concat(e))}},{key:"handleAdd",value:function(e){var t=this,n=this.props,a=n.myBook,r=n.currentId;e.count=1,e.checked=!0,a.push(e),this.props.setState("myBook",a),this.props.setState("loading",!0),E.a.add({book:e}).then((function(e){200===e.code&&t.props.onDispacth(S.a.getList(r))}))}},{key:"render",value:function(){var e=this,t=this.props.currentList.map((function(t){return r.a.createElement("div",{key:t.id,className:"m-list-item"},r.a.createElement(N.a,{className:"m-list-item-img-wrap"},r.a.createElement("img",{src:t.avatar,className:"m-list-item-img"})),r.a.createElement("div",{className:"m-list-item-info"},t.title,r.a.createElement("button",{onClick:e.handleDetail.bind(e,t.id)},"\u8be6\u60c5"),t.is_in_my_book?r.a.createElement("button",null,"\u5df2\u6536\u85cf"):r.a.createElement("button",{onClick:e.handleAdd.bind(e,t)},"\u6536\u85cf")))}));return r.a.createElement("div",null,t)}}]),t}(a.Component),I=Object(c.b)((function(e){return{navList:e.navList,currentId:e.currentId,currentList:e.currentList,myBook:e.myBook}}),(function(e){return{setState:function(t,n){e({type:"SET_STATE",key:t,value:n})},onDispacth:function(t){e(t)}}}))(Object(b.g)(_)),B=n(188),C=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(T,null),r.a.createElement(I,null),r.a.createElement(B.a,null,"\u56de\u5230\u9876\u90e8"))}}]),t}(a.Component),x=n(105),A=Object(c.b)((function(e){return{myBook:e.myBook}}),(function(e){return{setState:function(t,n){e({type:"SET_STATE",key:t,value:n})}}}))((function(e){var t=Object(a.useState)({}),n=Object(x.a)(t,2),i=n[0],o=n[1];return Object(a.useEffect)((function(){var t=e.match.params.id;e.setState("loading",!0),E.a.getDetail("?id=".concat(t)).then((function(t){200===t.code&&(o(t.data),e.setState("loading",!1))}))}),[]),r.a.createElement("div",null,r.a.createElement("img",{src:i.avatar}),i.title,i.is_in_my_book?r.a.createElement("button",null,"\u5df2\u6536\u85cf"):r.a.createElement("button",{onClick:function(t){var n=e.myBook;t.count=1,t.checked=!0,n.push(t),e.setState("myBook",n),E.a.add({book:t}).then((function(e){if(200===e.code){t.is_in_my_book=!0;var n=JSON.parse(JSON.stringify(t));o(n)}}))}.bind(void 0,i)},"\u6536\u85cf"))})),D=n(71),J=n(24),z=n.n(J);var M=!0,R=function(e){function t(e){var n;return Object(m.a)(this,t),(n=Object(h.a)(this,Object(f.a)(t).call(this,e))).state={newsList:[],page:1,end:""},n.newsRef=r.a.createRef(),n}return Object(v.a)(t,e),Object(p.a)(t,[{key:"handleScroll",value:function(e){var t=this,n=this.state,a=n.page,r=n.newsList,i=n.end;e.target.clientHeight+e.target.scrollTop+100>e.target.scrollHeight&&M&&""===i&&(console.log("\u5feb\u5230\u5e95\u5566"),M=!1,a+=1,this.setState({page:a}),z()({url:"/api/news?page=".concat(a,"&size=10")}).then((function(e){200===e.data.code&&(t.setState({newsList:[].concat(Object(D.a)(r),Object(D.a)(e.data.data))}),M=!0,e.data.data.length<10&&t.setState({end:"\u6211\u662f\u6709\u5e95\u7ebf\u7684~"}))})))}},{key:"handleToTop",value:function(){document.getElementById("top").scrollIntoView(!0)}},{key:"componentDidMount",value:function(){var e=this;z()({url:"/api/news?page=1&size=10"}).then((function(t){200===t.data.code&&e.setState({newsList:t.data.data})}))}},{key:"render",value:function(){var e=this.state,t=e.newsList,n=e.end,a=t.map((function(e){return r.a.createElement("div",{key:e.id,className:"m-news-item"},r.a.createElement("img",{src:e.image}),r.a.createElement("div",null,e.name))}));return r.a.createElement("div",{className:"m-news-wrap",id:"news",ref:this.newsRef,onScroll:this.handleScroll.bind(this)},r.a.createElement("div",{id:"top"}),a,r.a.createElement("div",{className:"m-end"},n),r.a.createElement("button",{className:"m-up-btn",onClick:this.handleToTop.bind(this)},"\u2191"),r.a.createElement(B.a,{target:function(){return document.getElementById("news")}},"\u56de\u5230\u9876\u90e8"))}}]),t}(a.Component),H=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.loading,n=e.lazyLoading;return r.a.createElement("div",{className:"m-loading-wrap "+(t?"active ":"")+(n?"active":"")})}}]),t}(a.Component),W=Object(c.b)((function(e){return{loading:e.loading}}))(H),q=Object(a.lazy)(Object(j.a)(O.a.mark((function e(){return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Promise((function(e){setTimeout((function(){e(n.e(3).then(n.bind(null,189)))}),2e3)}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))),F=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(u.b,{to:"/index/home",className:"m-nav-item"},"\u9996\u9875"),r.a.createElement(u.b,{to:"/index/my_book",className:"m-nav-item"},"\u4e66\u5305"),r.a.createElement(u.b,{to:"/index/news",className:"m-nav-item"},"\u65b0\u95fb")),r.a.createElement(a.Suspense,{fallback:r.a.createElement(W,{lazyLoading:!0})},r.a.createElement(b.d,null,r.a.createElement(b.b,{path:"/index/home",component:C}),r.a.createElement(b.b,{path:"/index/my_book",render:function(){return localStorage.getItem("username")?r.a.createElement(q,null):r.a.createElement(b.a,{to:"/login"})}}),r.a.createElement(b.b,{path:"/index/detail/:id",component:A}),r.a.createElement(b.b,{path:"/index/news",component:R}))))}}]),t}(a.Component),K=function(e){function t(){return Object(m.a)(this,t),Object(h.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b.d,null,r.a.createElement(b.a,{from:"/",to:"/login",exact:!0}),r.a.createElement(b.b,{path:"/index",component:F}),r.a.createElement(b.b,{path:"/login",component:g})),r.a.createElement(W,null))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(185),n(186);o.a.render(r.a.createElement(c.a,{store:d},r.a.createElement(u.a,null,r.a.createElement(K,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},30:function(e,t,n){"use strict";var a=n(11);t.a={getNav:function(){return function(e){a.a.getNav().then((function(t){e({type:"SET_STATE",key:"navList",value:t.data})}))}},getList:function(e){return function(t){t({type:"SET_STATE",key:"loading",value:!0}),a.a.getList("?id=".concat(e)).then((function(e){t({type:"SET_STATE",key:"currentList",value:e.data}),t({type:"SET_STATE",key:"loading",value:!1})}))}},getMyBook:function(){return function(e){e({type:"SET_STATE",key:"loading",value:!0}),a.a.getMyBook().then((function(t){200===t.code&&(e({type:"SET_STATE",key:"myBook",value:t.data}),e({type:"SET_STATE",key:"loading",value:!1}))}))}}}}},[[108,1,2]]]);
//# sourceMappingURL=main.c0b0e05c.chunk.js.map