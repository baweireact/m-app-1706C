(function(e){function t(t){for(var n,o,i=t[0],u=t[1],d=t[2],l=0,f=[];l<i.length;l++)o=i[l],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&f.push(a[o][0]),a[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);c&&c(t);while(f.length)f.shift()();return r.push.apply(r,d||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],n=!0,i=1;i<s.length;i++){var u=s[i];0!==a[u]&&(n=!1)}n&&(r.splice(t--,1),e=o(o.s=s[0]))}return e}var n={},a={app:0},r=[];function o(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=e,o.c=n,o.d=function(e,t,s){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(s,n,function(t){return e[t]}.bind(null,n));return s},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],u=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var c=u;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"274c":function(e,t,s){},"365c":function(e,t,s){"use strict";(function(e){s("96cf");var n=s("89ba"),a=s("bc3a"),r=s.n(a),o=s("4f8d");console.log(e),r.a.interceptors.request.use((function(e){return e.headers.token=localStorage.getItem("token"),e})),r.a.interceptors.response.use((function(e){return 400===e.data.code?alert(e.data.message):403===e.data.code&&(alert("登录过期"),window.location.href="/login"),e}));var i=function(){var e=Object(n["a"])(regeneratorRuntime.mark((function e(t){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r()(t);case 2:return s=e.sent,e.abrupt("return",s.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();t["a"]={login:function(e){return i({url:o["a"].login,data:e,method:"post"})},register:function(e){return i({url:o["a"].register,data:e,method:"post"})},modifyPassword:function(e){return i({url:o["a"].modifyPassword,data:e,method:"post"})},getUserInfo:function(){return i({url:o["a"].getUserInfo})},quit:function(){return i({url:o["a"].quit})},getMessageList:function(){return i({url:o["a"].getMessageList})},addMessage:function(e){return i({url:o["a"].addMessage,data:e,method:"post"})},updateMessage:function(e){return i({url:o["a"].updateMessage,data:e,method:"post"})}}}).call(this,s("4362"))},4678:function(e,t,s){var n={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-SG":"cdab","./en-SG.js":"cdab","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-nz":"6f50","./en-nz.js":"6f50","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-tw":"90ea","./zh-tw.js":"90ea"};function a(e){var t=r(e);return s(t)}function r(e){if(!s.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}a.keys=function(){return Object.keys(n)},a.resolve=r,e.exports=a,a.id="4678"},"4f8d":function(e,t,s){"use strict";var n={login:"/api/user/login",register:"/api/user/register",modifyPassword:"/api/user/modify_password",getUserInfo:"/api/user/get_user_info",quit:"/api/user/quit",getMessageList:"/api/user/get_message_list",addMessage:"/api/user/add_message",updateMessage:"/api/user/update_message"};t["a"]=n},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},r=[],o=s("2877"),i={},u=Object(o["a"])(i,a,r,!1,null,null,null),d=u.exports,c=s("8c4f"),l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],ref:"username",attrs:{placeholder:"请输入用户名"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),s("div",["checkbox"===(e.isShow?"text":"password")?s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{placeholder:"请输入密码",type:"checkbox"},domProps:{checked:Array.isArray(e.password)?e._i(e.password,null)>-1:e.password},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin()},change:function(t){var s=e.password,n=t.target,a=!!n.checked;if(Array.isArray(s)){var r=null,o=e._i(s,r);n.checked?o<0&&(e.password=s.concat([r])):o>-1&&(e.password=s.slice(0,o).concat(s.slice(o+1)))}else e.password=a}}}):"radio"===(e.isShow?"text":"password")?s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{placeholder:"请输入密码",type:"radio"},domProps:{checked:e._q(e.password,null)},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin()},change:function(t){e.password=null}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{placeholder:"请输入密码",type:e.isShow?"text":"password"},domProps:{value:e.password},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin()},input:function(t){t.target.composing||(e.password=t.target.value)}}}),s("span",{class:"icon iconfont m-input-icon "+(e.isShow?"icon-caozuo-xianshihaoma":"icon-buxianshimima"),on:{click:function(t){return e.handlePassword()}}})]),s("button",{on:{click:function(t){return e.handleLogin()}}},[e._v("登录")]),s("router-link",{attrs:{to:"/register"}},[e._v("注册")])],1)},f=[],m=(s("498a"),s("365c")),p={data:function(){return{username:"admin",password:"123456",isShow:!1}},methods:{handleLogin:function(){var e=this;""!==this.username.trim()?""!==this.password.trim()?m["a"].login({username:this.username,password:this.password}).then((function(t){200===t.code&&(localStorage.setItem("token",t.data.token),localStorage.setItem("username",t.data.username),e.$router.push("/index/home"))})):alert("密码不能为空"):alert("用户名不能为空")},handlePassword:function(){this.isShow=!this.isShow}},mounted:function(){this.$refs.username.focus()}},h=p,v=Object(o["a"])(h,l,f,!1,null,null,null),g=v.exports,b=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.username,expression:"username"}],ref:"username",attrs:{placeholder:"请输入用户名"},domProps:{value:e.username},on:{input:function(t){t.target.composing||(e.username=t.target.value)}}})]),s("div",["checkbox"===(e.isShow?"text":"password")?s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{placeholder:"请输入密码",type:"checkbox"},domProps:{checked:Array.isArray(e.password)?e._i(e.password,null)>-1:e.password},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleRegister()},change:function(t){var s=e.password,n=t.target,a=!!n.checked;if(Array.isArray(s)){var r=null,o=e._i(s,r);n.checked?o<0&&(e.password=s.concat([r])):o>-1&&(e.password=s.slice(0,o).concat(s.slice(o+1)))}else e.password=a}}}):"radio"===(e.isShow?"text":"password")?s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{placeholder:"请输入密码",type:"radio"},domProps:{checked:e._q(e.password,null)},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleRegister()},change:function(t){e.password=null}}}):s("input",{directives:[{name:"model",rawName:"v-model",value:e.password,expression:"password"}],attrs:{placeholder:"请输入密码",type:e.isShow?"text":"password"},domProps:{value:e.password},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleRegister()},input:function(t){t.target.composing||(e.password=t.target.value)}}}),s("span",{class:"icon iconfont m-input-icon "+(e.isShow?"icon-caozuo-xianshihaoma":"icon-buxianshimima"),on:{click:function(t){return e.handlePassword()}}})]),s("button",{on:{click:function(t){return e.handleRegister()}}},[e._v("注册")])])},w=[],j={data:function(){return{username:"",password:"",isShow:!1}},methods:{handleRegister:function(){var e=this;if(""!==this.username.trim()){var t=this.checkPassword(this.password.trim());"正确"===t?m["a"].register({username:this.username,password:this.password}).then((function(t){200===t.code&&(localStorage.setItem("token",t.data.token),localStorage.setItem("username",t.data.username),e.$router.push("/index/home"))})):alert(t)}else alert("用户名不能为空")},handlePassword:function(){this.isShow=!this.isShow},checkPassword:function(e){return e.length<6||e.length>30?"密码长度应该在6-30位之间":/^\d+$/.test(e)?"不能是全数字":/^[a-z]+$/i.test(e)?"不能是全字母":/^[A-Za-z0-9]+$/.test(e)?"正确":"只能含有数字和字母，不能有其他字符"}},mounted:function(){this.$refs.username.focus()}},k=j,y=Object(o["a"])(k,b,w,!1,null,null,null),_=y.exports,x=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",[s("router-link",{staticClass:"m-nav-item",attrs:{to:"/index/home"}},[e._v("朋友圈")]),s("router-link",{staticClass:"m-nav-item",attrs:{to:"/index/me"}},[e._v("我的")])],1),s("router-view")],1)},P=[],S={},L=S,O=Object(o["a"])(L,x,P,!1,null,null,null),$=O.exports,M=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"m-post-btn-wrap"},[s("router-link",{staticClass:"m-post-btn",attrs:{to:"/post_message"}},[e._v("发布消息")])],1),s("div",e._l(e.messageList,(function(t,n){return s("div",{key:t.id,staticClass:"m-message-list-item"},[s("div",[e._v(e._s(t.username)+" : "+e._s(t.message))]),s("div",[e._v("发布时间："+e._s(t.createTime))]),s("div",[t.like.find((function(t){return t===e.username}))?s("button",{on:{click:function(t){return e.handleCancelLike(n)}}},[e._v("取消点赞")]):s("button",{on:{click:function(t){return e.handleLike(n)}}},[e._v("点赞")]),s("button",{on:{click:function(t){return e.handleShow(n)}}},[e._v("评论")]),t.username===e.username?s("button",{on:{click:function(t){return e.handleDelete(n)}}},[e._v("删除")]):e._e()]),s("div",[e._v(" 点赞: "),s("span",[e._v(e._s(t.like.join(",")))])]),s("div",[e._v(" 评论: "),e._l(t.comment,(function(t,n){return s("div",{key:n},[e._v(e._s(t.username)+":"+e._s(t.content))])}))],2)])})),0),s("el-dialog",{attrs:{visible:e.visible},on:{close:e.handleClose}},[s("el-input",{attrs:{type:"text",placeholder:"请输入评论内容"},model:{value:e.comment,callback:function(t){e.comment=t},expression:"comment"}}),s("div",{attrs:{slot:"footer"},slot:"footer"},[s("el-button",{on:{click:e.handleClose}},[e._v("取消")]),s("el-button",{on:{click:e.handleConfirm}},[e._v("确定")])],1)],1)],1)},z=[],C=(s("c740"),s("d81d"),s("a434"),s("c1df")),E=s.n(C);E.a.locale("zh-cn");var I={data:function(){return{visible:!1,comment:"",currentIndex:0,username:localStorage.getItem("username")}},computed:{messageList:function(){var e=JSON.parse(JSON.stringify(this.$store.state.messageList));return e=e.map((function(e){return e.createTime=E()(e.createTime).fromNow(),e})),e}},methods:{handleShow:function(e){this.comment="",this.currentIndex=e,this.visible=!0},handleClose:function(){this.visible=!1},handleLike:function(e){var t=this.$store.state.messageList;t[e].like.push(this.username),this.$store.commit({type:"setState",key:"messageList",value:t}),this.updateMessageList()},handleCancelLike:function(e){var t=this,s=this.$store.state.messageList,n=s[e].like.findIndex((function(e){return e===t.username}));s[e].like.splice(n,1),this.$store.commit({type:"setState",key:"messageList",value:s}),this.updateMessageList()},handleConfirm:function(){var e=this.$store.state.messageList;e[this.currentIndex].comment.push({username:this.username,content:this.comment}),this.$store.commit({type:"setState",key:"messageList",value:e}),this.visible=!1,this.updateMessageList()},handleDelete:function(e){var t=this.$store.state.messageList;t.splice(e,1),this.$store.commit({type:"setState",key:"messageList",value:t}),this.updateMessageList()},updateMessageList:function(){var e=this.$store.state.messageList;m["a"].updateMessage({newMessageList:e}).then((function(e){}))}},mounted:function(){this.$store.dispatch({type:"getMessageList"})}},N=I,q=Object(o["a"])(N,M,z,!1,null,null,null),A=q.exports,R=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",[e._v(" 用户名："+e._s(e.userInfo.username)+" ")]),s("div",[s("router-link",{attrs:{to:"/modify_password"}},[e._v("修改密码")])],1),s("div",[s("button",{on:{click:e.handleQuit}},[e._v("退出")])])])},T=[],U={data:function(){return{userInfo:{}}},methods:{handleQuit:function(){m["a"].quit().then((function(e){200===e.code&&(window.location.href="/login")}))}},mounted:function(){var e=this;m["a"].getUserInfo().then((function(t){200===t.code&&(e.userInfo=t.data)}))}},D=U,J=Object(o["a"])(D,R,T,!1,null,null,null),F=J.exports,G=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.oldPassword,expression:"oldPassword"}],ref:"autoFocus",attrs:{type:"password",placeholder:"请输入原密码"},domProps:{value:e.oldPassword},on:{input:function(t){t.target.composing||(e.oldPassword=t.target.value)}}})]),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.newPassword,expression:"newPassword"}],attrs:{placeholder:"请输入新密码",type:"password"},domProps:{value:e.newPassword},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleModifyPassword()},input:function(t){t.target.composing||(e.newPassword=t.target.value)}}})]),s("button",{on:{click:function(t){return e.handleModifyPassword()}}},[e._v("确认提交")])])},Q=[],Z={data:function(){return{oldPassword:"",newPassword:""}},methods:{handleModifyPassword:function(){var e=this,t=this.checkPassword(this.newPassword.trim());"正确"===t?m["a"].modifyPassword({oldPassword:this.oldPassword,newPassword:this.newPassword}).then((function(t){200===t.code&&(alert(t.message),e.$router.push("/login"))})):alert(t)},checkPassword:function(e){return e.length<6||e.length>30?"密码长度应该在6-30位之间":/^\d+$/.test(e)?"不能是全数字":/^[a-z]+$/i.test(e)?"不能是全字母":/^[A-Za-z0-9]+$/.test(e)?"正确":"只能含有数字和字母，不能有其他字符"}},mounted:function(){this.$refs.autoFocus.focus()}},B=Z,H=Object(o["a"])(B,G,Q,!1,null,null,null),K=H.exports,V=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.message,expression:"message"}],attrs:{name:"",id:"",cols:"30",rows:"10",placeholder:"请输入要发布的内容"},domProps:{value:e.message},on:{input:function(t){t.target.composing||(e.message=t.target.value)}}}),s("div",[s("button",{on:{click:e.handlePostMessage}},[e._v("发布")])])])},W=[],X={data:function(){return{message:""}},methods:{handlePostMessage:function(){var e=this;""!==this.message.trim()?m["a"].addMessage({message:this.message}).then((function(t){200===t.code&&e.$router.push("/index/home")})):alert("消息不能为空")}}},Y=X,ee=Object(o["a"])(Y,V,W,!1,null,null,null),te=ee.exports;n["default"].use(c["a"]);var se=[{path:"/",redirect:"/login"},{path:"/login",component:g},{path:"/register",component:_},{path:"/index",component:$,children:[{path:"/index/home",component:A},{path:"/post_message",component:te},{path:"/index/me",component:F}]},{path:"/modify_password",component:K}],ne=new c["a"]({mode:"history",base:"/",routes:se}),ae=ne,re=s("2f62");n["default"].use(re["a"]);var oe=new re["a"].Store({state:{messageList:[]},mutations:{setState:function(e,t){e[t.key]=t.value}},actions:{getMessageList:function(e){var t=e.commit;m["a"].getMessageList().then((function(e){200===e.code&&t({type:"setState",key:"messageList",value:e.data})}))}},modules:{}}),ie=s("5c96"),ue=s.n(ie);s("0fae"),s("274c"),s("a766");n["default"].config.productionTip=!1,n["default"].use(ue.a),new n["default"]({router:ae,store:oe,render:function(e){return e(d)}}).$mount("#app")},a766:function(e,t,s){}});
//# sourceMappingURL=app.bb9ca3cc.js.map