(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{40:function(e,t,r){"use strict";r.d(t,"j",(function(){return g})),r.d(t,"c",(function(){return a})),r.d(t,"d",(function(){return i})),r.d(t,"b",(function(){return c})),r.d(t,"h",(function(){return l})),r.d(t,"i",(function(){return h})),r.d(t,"g",(function(){return v})),r.d(t,"f",(function(){return f})),r.d(t,"l",(function(){return d})),r.d(t,"k",(function(){return p})),r.d(t,"a",(function(){return o})),r.d(t,"e",(function(){return s})),r.d(t,"m",(function(){return m}));var n=r(6);function a(e){var t=e.id;return Object(n.b)({method:"post",url:"/checkGameIdExist",data:{id:t}})}function i(e){return d(e.originId)?e.gameName?0===e.checkbox.length?(this.$Message.error("选择作弊方式"),!1):4!==e.captcha.length?(this.$Message.error("正确填写验证码"),!1):0===d(e.description).length?(this.$Message.error("论述必填"),!1):void 0:(this.$Message.error("选择游戏"),!1):(this.$Message.error("请填写举报游戏ID"),!1)}var o=[{value:"stealth",label:"隐身"},{value:"wallhack",label:"透视"},{value:"aimbot",label:"自瞄"},{value:"oneShotKill",label:"秒杀"},{value:"gadgetModify",label:"改装备"},{value:"damageChange",label:"改伤"},{value:"shootingThroughWalls",label:"子弹穿墙"}];function s(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e||"",r=[];return _.each(t.split(","),(function(e){_.each(o,(function(t,n){t.value===e&&r.push(t.label)}))})),r.sort().reverse().join(" ")}var c=[{value:"0",label:"未处理"},{value:"5",label:"回复讨论中"},{value:"6",label:"等待管理确认"},{value:"1",label:"认为石锤"},{value:"2",label:"嫌疑再观察"},{value:"3",label:"认为没开挂"},{value:"4",label:"回收站"}],u=[{value:"bf1",label:"战地1"},{value:"bfv",label:"战地v"}];function l(e){var t=_.find(c,(function(t,r){return t.value===e}));return t?t.label:""}function h(e){var t=_.find(u,(function(t,r){return t.value===e}));return t?t.label:""}function v(e){var t=e;return t=function(e){return e.replace(/([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/gi,(function(e){return'<img src="'.concat(e,'" />')}))}(t=function(e){return e.replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,(function(e){return/(jpg|jpeg|png|gif)$/gi.test(e)?e:-1!==new URL(e).hostname.indexOf("bfban.com")?'<a href="'.concat(e,'">').concat(e,"</a>"):'<a target="_blank" href="'.concat(e,'">').concat(e,"</a>")}))}(t=function(e){return e.replace(/\r\n|\r|\n/g,"<br />")}(t)))}function f(e){var t=moment.tz.guess();return moment(e).clone().tz(t).format("YYYY-MM-DD HH:mm:ss")}function d(e){return e.replace(/\s+/g,"")}function p(e){return/\s+/.test(e)}function m(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,t=this;t.style="display: none;";var r=document.createElement("span");t.parentNode.insertBefore(r,t.nextSibling);var n=e;r.innerText="等待 ".concat(n," 秒后重试");var a=setInterval((function(){n>1?(n-=1,r.innerText="等待 ".concat(n," 秒重试")):(t.style="",r.innerText="",clearInterval(a))}),1e3)}function g(e){return e.replace(/\s+(src)=/gi," data-src=")}},41:function(e,t,r){e.exports=r(44)},42:function(e,t){function r(e,t,r,n,a,i,o){try{var s=e[i](o),c=s.value}catch(e){return void r(e)}s.done?t(c):Promise.resolve(c).then(n,a)}e.exports=function(e){return function(){var t=this,n=arguments;return new Promise((function(a,i){var o=e.apply(t,n);function s(e){r(o,a,i,s,c,"next",e)}function c(e){r(o,a,i,s,c,"throw",e)}s(void 0)}))}}},44:function(e,t,r){var n=function(e){"use strict";var t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",o=n.toStringTag||"@@toStringTag";function s(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,r){return e[t]=r}}function c(e,t,r,n){var a=t&&t.prototype instanceof h?t:h,i=Object.create(a.prototype),o=new I(n||[]);return i._invoke=function(e,t,r){var n="suspendedStart";return function(a,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw i;return S()}for(r.method=a,r.arg=i;;){var o=r.delegate;if(o){var s=b(o,r);if(s){if(s===l)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=u(e,t,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===l)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(e,r,o),i}function u(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var l={};function h(){}function v(){}function f(){}var d={};d[a]=function(){return this};var p=Object.getPrototypeOf,m=p&&p(p(x([])));m&&m!==t&&r.call(m,a)&&(d=m);var _=f.prototype=h.prototype=Object.create(d);function g(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function y(e,t){var n;this._invoke=function(a,i){function o(){return new t((function(n,o){!function n(a,i,o,s){var c=u(e[a],e,i);if("throw"!==c.type){var l=c.arg,h=l.value;return h&&"object"==typeof h&&r.call(h,"__await")?t.resolve(h.__await).then((function(e){n("next",e,o,s)}),(function(e){n("throw",e,o,s)})):t.resolve(h).then((function(e){l.value=e,o(l)}),(function(e){return n("throw",e,o,s)}))}s(c.arg)}(a,i,n,o)}))}return n=n?n.then(o,o):o()}}function b(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,b(e,t),"throw"===t.method))return l;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=u(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,l;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,l):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,l)}function w(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function I(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(w,this),this.reset(!0)}function x(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,i=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return i.next=i}}return{next:S}}function S(){return{value:void 0,done:!0}}return v.prototype=_.constructor=f,f.constructor=v,v.displayName=s(f,o,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===v||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,f):(e.__proto__=f,s(e,o,"GeneratorFunction")),e.prototype=Object.create(_),e},e.awrap=function(e){return{__await:e}},g(y.prototype),y.prototype[i]=function(){return this},e.AsyncIterator=y,e.async=function(t,r,n,a,i){void 0===i&&(i=Promise);var o=new y(c(t,r,n,a),i);return e.isGeneratorFunction(r)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},g(_),s(_,o,"Generator"),_[a]=function(){return this},_.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=x,I.prototype={constructor:I,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return o.type="throw",o.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var i=this.tryEntries[a],o=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var s=r.call(i,"catchLoc"),c=r.call(i,"finallyLoc");if(s&&c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var i=a;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),l},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),k(r),l}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;k(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:x(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},e}(e.exports);try{regeneratorRuntime=n}catch(e){Function("r","regeneratorRuntime = r")(n)}},47:function(e,t,r){},62:function(e,t,r){"use strict";var n=r(47);r.n(n).a},68:function(e,t,r){"use strict";r.r(t);var n=r(41),a=r.n(n),i=r(42),o=r.n(i),s=r(6),c=r(40),u={data:function(){return{cheater:{originId:""},origins:[],games:[],timelineList:[],verify:{status:"1",checkbox:[],suggestion:""},spinShow:!0,idExist:!1,verifySpinShow:!1,reply:{cheaterId:"",userId:"",content:"",toFloor:"",toUserId:""},replySpinShow:!1,gameName:"",isCheaterExist:!0,replyModal:!1,cheatMethodsGlossary:c.a,updateUserInfospinShow:!1}},watch:{$route:"loadData"},created:function(){this.loadData()},updated:function(){new LazyLoad({})},methods:{loadData:function(){var e=this,t=this.$route.params.ouid;Object(s.b)({method:"get",url:"/cheaters/".concat(t)}).then((function(t){e.spinShow=!1;var r=t.data.data,n=r.cheater,a=r.games,i=r.origins,o=r.reports,s=r.verifies,u=r.confirms,l=r.replies;if(0===n.length)return e.isCheaterExist=!1,!1;e.isCheaterExist=!0,e.cheater=n[0],e.origins=_.sortBy(i,"createDatetime").reverse(),e.games=_.sortBy(a,"game"),o=_.each(o,(function(e,t,r){e.type="report"})),s=_.each(s,(function(e,t,r){e.type="verify"})),u=_.each(u,(function(e,t,r){e.type="confirm"})),l=_.each(l,(function(e,t,r){e.type="reply"})),o=_.each(o,(function(e){e.description=Object(c.j)(e.description)})),l=_.each(l,(function(e,t,r){e.content=Object(c.j)(e.content)}));var h=o.concat(s,u,l);h=_.sortBy(h,(function(e){return new Date(e.createDatetime).getTime()})),h=_.each(h,(function(e,t){e.floor=t+1})),e.timelineList=h}))},jumpToBookmark:function(e){var t=e.target.dataset.hash,r=document.querySelector(t),n=r.offsetParent.offsetTop+r.offsetParent.offsetParent.offsetTop+r.offsetParent.offsetParent.offsetParent.offsetTop-document.querySelector("header").offsetHeight;document.documentElement.scrollTop=n,r.setAttribute("style","background: rgba(255, 153, 1, 0.15)"),setTimeout((function(){r.setAttribute("style","transition: background 1s ease .5s;")}),100)},handleStatus:c.h,convertCheatMethods:c.e,doVerify:function(){var e=this;return o()(a.a.mark((function t(){var r,n,i,o,u,l;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.verify.status,n=e.verify.suggestion,i=e.verify.checkbox.join(","),o=e.cheater.originUserId,("1"!==r||""!==i)&&""!==n.trim()){t.next=7;break}return e.$Message.warning("请填写完整"),t.abrupt("return",!1);case 7:return e.verifySpinShow=!0,t.next=10,Object(s.b)({method:"post",url:"/cheaters/status",data:{originUserId:o}});case 10:if(u=t.sent,!(l=u.data).error){t.next=15;break}return e.$Message.error(l.msg),t.abrupt("return",!1);case 15:if(0!==l.error||"1"!==l.status){t.next=19;break}if(confirm("当前是 石锤 状态，你确定要处理成 ".concat(Object(c.h)(r)," 吗？"))){t.next=19;break}return e.verifySpinShow=!1,t.abrupt("return",!1);case 19:n=Object(c.g)(n),Object(s.b)({method:"post",url:"/cheaters/verify",data:{status:r,suggestion:n,cheatMethods:i,originUserId:o}}).then((function(t){e.verifySpinShow=!1;var r=t.data;if(0===t.data.error){e.verify.status="1",e.verify.suggestion="",e.verify.checkbox=[];var n=r.data,a=n.id,i=n.userId,o=n.createDatetime,s=n.status,u=n.suggestion,l=n.username,h=n.cheatMethods,v=n.privilege;e.cheater.status=s,e.timelineList.push({type:"verify",id:a,userId:i,createDatetime:Object(c.f)(o),status:"6"===s?"1":s,suggestion:u,cheatMethods:h,username:l,privilege:v}),e.$Message.success("提交成功")}else e.$Message.error("提交失败 "+r.msg)}));case 21:case"end":return t.stop()}}),t)})))()},doConfirm:function(e){var t=this,r=e.target.dataset,n=r.userVerifyCheaterId,a=(r.userVerifyCheaterUsername,r.cheatMethods),i=this.$store.state.user.userId,o=this.$route.params.ouid;Object(s.b)({method:"post",url:"/cheaters/confirm",data:{userVerifyCheaterId:n,userId:i,originUserId:o,cheatMethods:a}}).then((function(e){var r=e.data;if(0===r.error){var o=r.data.createDatetime;t.cheater.status="1",t.timelineList.push({type:"confirm",userId:i,userVerifyCheaterId:n,createDatetime:Object(c.f)(o),cheatMethods:a,username:t.$store.state.user.username})}else t.$Message.warning(r.msg)}))},isSelf:function(e){var t=this.$store.state.user.userId;return parseInt(t)===parseInt(e)},handleReply:function(e){var t=e.target.dataset,r=t.floor,n=t.userId;this.reply.toFloor="undefined"===r?"":r,this.reply.toUserId="undefined"===n?"":n,this.replyModal=!0},cancelReply:function(){this.reply={}},doReply:function(){var e=this;this.replySpinShow=!0;var t=this.cheater.id,r=this.$store.state.user.userId,n=this.reply,a=n.toFloor,i=n.toUserId,o=this.cheater.originUserId,u=this.reply.content,l=void 0===u?"":u,h={cheaterId:t,userId:r,content:l=Object(c.g)(l),originUserId:o};a&&(h.toFloor=a),i&&(h.toUserId=i),Object(s.b)({method:"post",url:"/cheaters/reply",data:h}).then((function(t){e.replySpinShow=!1;var r=t.data;if(0===r.error){var n=r.data,a=n.createDatetime,i=n.content,o=n.status;e.$Message.success("回复成功"),e.cancelReply();var s=e.$store.state.user.username,u=e.$store.state.user.uId;e.timelineList.push({type:"reply",createDatetime:Object(c.f)(a),content:i,foo:s,fooUId:u,bar:"",barUId:""}),e.cheater.status=o}else e.$Message.error(r.msg)}))},handleCmdEnter:function(e,t){if((e.metaKey||e.ctrlKey)&&13==e.keyCode)switch(t){case"reply":this.doReply();break;case"verify":this.doVerify()}},updateCheaterInfo:function(e){var t=this;if(c.m.call(e.target,60),!Boolean(this.$store.state.user))return this.$Message.error("请登录"),!1;this.updateUserInfospinShow=!0;var r=this.cheater.originUserId;Object(s.b)({method:"post",url:"/cheaters/updateCheaterInfo",data:{originUserId:r}}).then((function(e){t.updateUserInfospinShow=!1;var r=e.data;if(0===r.error){var n=r.data.origin,a=n.cheaterGameName,i=n.originUserId,o=n.avatarLink;t.cheater.originId=a,t.cheater.originUserId=i,t.cheater.avatarLink=o,t.origins.unshift(r.data.origin),t.$Message.success("更新完成")}else t.$Message.error(r.msg)}))}},computed:{isVerified:function(){return this.verifies.length>0},isAdmin:function(){var e=this.$store.state.user,t=!!e&&"normal"!==e.userPrivilege;return Boolean(t)},isLogin:function(){return Boolean(this.$store.state.user)}}},l=(r(62),r(1)),h=Object(l.a)(u,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container"},[r("div",{staticClass:"content"},[e.isCheaterExist?r("div",{staticStyle:{position:"relative"}},[r("div",{staticStyle:{display:"flex","flex-direction":"column",position:"relative"}},[r("span",{staticStyle:{"font-size":"1.6rem"}},[e._v("\n          "+e._s(e.cheater.originId)+"\n        ")]),e._v(" "),r("div",[r("Tag",{attrs:{color:"error"}},[e._v("\n            "+e._s(e.handleStatus(e.cheater.status))+"\n          ")]),e._v(" "),e.cheater.cheatMethods?r("Tag",{attrs:{color:"warning"}},[e._v("\n            "+e._s(e.convertCheatMethods(e.cheater.cheatMethods))+"\n          ")]):e._e()],1),e._v(" "),r("p",[r("span",[e._v("\n            围观\n            "),r("span",{staticClass:"is-size-6"},[e._v(e._s(e.cheater.n||0))]),e._v("\n            次\n          ")]),e._v(" "),r("span",[e._v("\n              回复\n              "),r("span",{staticClass:"is-size-6"},[e._v(e._s(e.cheater.commentsNum||0))]),e._v("\n              次\n          ")])]),e._v(" "),r("p",[r("span",[e._v("\n            第一次被举报:\n            "),r("span",{staticClass:"is-size-6"},[e.cheater.createDatetime?r("Time",{attrs:{time:e.cheater.createDatetime}}):e._e()],1)]),e._v(" "),r("span",[e._v("\n            最近更新:\n            "),r("span",{staticClass:"is-size-6"},[e.cheater.updateDatetime?r("Time",{attrs:{time:e.cheater.updateDatetime}}):e._e()],1)])]),e._v(" "),r("div",{staticStyle:{"margin-top":".4rem"}},[r("h2",[e._v("Ta的被举报的游戏：")]),e._v(" "),r("div",e._l(e.games,(function(t){return r("router-link",{key:t.game,attrs:{to:{name:"cheaters"}}},[e._v("\n              "+e._s(t.game)+"\n            ")])})),1)]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.cheater.originId,expression:"cheater.originId"}],staticStyle:{"margin-top":".4rem"}},[r("h2",[e._v("\n            Ta的相关战绩链接：\n          ")]),e._v(" "),e._l(e.games,(function(t){return r("p",{key:t.game},[r("Tag",[e._v("\n              "+e._s(t.game)+"\n            ")]),e._v(" "),r("a",{directives:[{name:"show",rawName:"v-show",value:""+t.game=="bf1",expression:"`${g.game}` === 'bf1'"}],attrs:{target:"_blank",href:"https://battlefieldtracker.com/bf1/profile/pc/"+e.cheater.originId}},[e._v("\n              battlefieldtracker\n            ")]),e._v(" "),r("a",{directives:[{name:"show",rawName:"v-show",value:""+t.game=="bf1",expression:"`${g.game}` === 'bf1'"}],attrs:{target:"_blank",href:"http://bf1stats.com/pc/"+e.cheater.originId}},[e._v("\n              bf1stats\n            ")]),e._v(" "),r("a",{directives:[{name:"show",rawName:"v-show",value:""+t.game=="bfv",expression:"`${g.game}` === 'bfv'"}],attrs:{target:"_blank",href:"https://battlefieldtracker.com/bfv/profile/origin/"+e.cheater.originId}},[e._v("\n              battlefieldtracker\n            ")]),e._v(" "),r("a",{attrs:{target:"_blank",href:"https://www.247fairplay.com/CheatDetector/"+e.cheater.originId}},[e._v("\n              247fairplay\n            ")])],1)})),e._v(" "),e.cheater.trackerShot?r("a",{attrs:{href:e.cheater.trackerShot,target:"_blank"}},[e._v("bf1tracker数据截图")]):e._e(),e._v(" "),e.cheater.trackerWeaponShot?r("a",{attrs:{href:e.cheater.trackerWeaponShot,target:"_blank"}},[e._v("bf1tracker武器截图")]):e._e(),e._v(" "),e.cheater.bf1statsShot?r("a",{attrs:{href:e.cheater.bf1statsShot,target:"_blank"}},[e._v("bf1stats数据截图")]):e._e()],2),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.cheater.avatarLink,expression:"cheater.avatarLink"}],staticStyle:{"margin-top":".4rem"}},[r("h2",[e._v("\n            Ta的origin头像：\n          ")]),e._v(" "),r("img",{attrs:{src:e.cheater.avatarLink,alt:"avatar",width:"208",height:"208"}})]),e._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:e.origins.length,expression:"origins.length"}],staticStyle:{"margin-top":".4rem"}},[r("h2",[e._v("Ta的历史ID：")]),e._v(" "),r("table",[e._m(0),e._v(" "),r("tbody",e._l(e.origins,(function(t){return r("tr",{key:t.id},[r("td",[r("Time",{attrs:{time:t.createDatetime}})],1),e._v(" "),r("td",[e._v(e._s(t.cheaterGameName))])])})),0)])]),e._v(" "),e._m(1),e._v(" "),r("div",{staticStyle:{"margin-top":".4rem"}},[r("p",{staticClass:"hint"},[e._v("\n            若发现 链接失效 或 改名，请点击\n            "),r("a",{attrs:{href:"#"},on:{click:function(t){return t.preventDefault(),e.updateCheaterInfo(t)}}},[e._v("更新资料")]),e._v("，\n            bfban.com 有能力"),r("b",[e._v("永久追踪")]),e._v("被举报者的行踪。\n          ")]),e._v(" "),r("p",{staticClass:"hint"},[e._v("\n            服务器也会定期抓取、更新被举报人的信息\n          ")]),e._v(" "),r("p",{staticClass:"hint"},[e._v("\n            历史ID也可以用来搜索\n          ")])]),e._v(" "),r("Spin",{directives:[{name:"show",rawName:"v-show",value:e.updateUserInfospinShow,expression:"updateUserInfospinShow"}],attrs:{size:"large",fix:""}})],1),e._v(" "),r("div",[r("h2",{staticStyle:{margin:"1rem 0"}},[e._v("时间线")]),e._v(" "),e._l(e.timelineList,(function(t){return r("TimelineItem",{key:t.createDatetime,attrs:{pending:""}},["report"===t.type?r("div",{staticClass:"timeline-content"},[r("div",{staticClass:"timeline-time"},[r("Time",{attrs:{time:t.createDatetime}}),e._v(" "),r("router-link",{attrs:{to:{name:"account",params:{uId:""+t.uId}}}},["admin"===t.privilege?r("Tag",{attrs:{color:"success"}},[e._v("\n                  管理员\n                ")]):e._e(),e._v(" "),r("b",[e._v(e._s(t.username))])],1),e._v("\n              举报\n\n              "),r("router-link",{attrs:{to:{name:"cheater",ouid:""+t.originUserId}}},[e._v("\n                "+e._s(t.cheaterGameName)+"\n              ")]),e._v("\n\n              在\n\n              "),r("router-link",{attrs:{to:{name:"cheaters",query:{game:""+t.game}}}},[e._v("\n                "+e._s(t.game)+"\n              ")]),e._v("\n\n              游戏中\n\n              "),r("b",[e._v("\n                "+e._s(e.convertCheatMethods(t.cheatMethods||""))+"\n              ")])],1),e._v(" "),t.bilibiliLink?r("p",[r("Tag",{attrs:{color:"primary"}},[e._v("\n                视频链接\n              ")]),e._v(" "),r("a",{attrs:{href:t.bilibiliLink,target:"_blank"}},[e._v(e._s(t.bilibiliLink))])],1):e._e(),e._v(" "),t.description?r("div",{staticClass:"description",domProps:{innerHTML:e._s(t.description)}}):e._e(),e._v(" "),e.isLogin?r("p",[r("a",{attrs:{href:"#","data-floor":""+t.floor,"data-user-id":""+t.userId},on:{click:function(t){return t.preventDefault(),e.handleReply(t)}}},[e._v("回复")])]):e._e()]):e._e(),e._v(" "),"verify"===t.type?r("div",{staticClass:"timeline-content bookmark",attrs:{id:"user-verify-cheater-"+t.id}},[r("div",{staticClass:"timeline-time"},[t.createDatetime?r("Time",{attrs:{time:t.createDatetime}}):e._e(),e._v(" "),r("router-link",{attrs:{to:{name:"account",params:{uId:""+t.uId}}}},["admin"===t.privilege?r("Tag",{attrs:{color:"success"}},[e._v("\n                  管理员\n                ")]):e._e(),e._v(" "),r("b",[e._v(e._s(t.username))])],1),e._v("\n\n              认为\n\n              "),r("Tag",{attrs:{color:"warning"}},[e._v("\n                "+e._s(e.handleStatus(t.status))+"\n              ")]),e._v(" "),t.cheatMethods?r("span",[e._v("\n            ，\n            作弊方式\n\n            "),r("b",[e._v("\n              "+e._s(e.convertCheatMethods(t.cheatMethods||""))+"\n            ")])]):e._e()],1),e._v(" "),r("div",{staticClass:"description",domProps:{innerHTML:e._s(t.suggestion)}}),e._v(" "),r("p",{directives:[{name:"show",rawName:"v-show",value:e.isAdmin&&"1"!==e.cheater.status&&"1"===t.status&&!e.isSelf(t.userId),expression:"isAdmin && cheater.status !== '1' && l.status === '1' && !isSelf(l.userId)"}]},[r("a",{attrs:{href:"#","data-user-verify-cheater-id":t.id,"data-cheat-methods":t.cheatMethods,"data-user-verify-cheater-username":t.username},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.doConfirm(t)}}},[r("Icon",{attrs:{type:"md-thumbs-up"}}),e._v("\n                赞同上处理 并 石锤\n              ")],1)]),e._v(" "),e.isLogin?r("p",[r("a",{attrs:{href:"#","data-floor":""+t.floor,"data-user-id":""+t.userId},on:{click:function(t){return t.preventDefault(),e.handleReply(t)}}},[e._v("回复")])]):e._e()]):e._e(),e._v(" "),"confirm"===t.type?r("div",{staticClass:"timeline-content"},[r("div",{staticClass:"timeline-time"},[t.createDatetime?r("Time",{attrs:{time:t.createDatetime}}):e._e(),e._v(" "),r("router-link",{attrs:{to:{name:"account",params:{uId:""+t.uId}}}},["admin"===t.privilege?r("Tag",{attrs:{color:"success"}},[e._v("\n                  管理员\n                ")]):e._e(),e._v(" "),r("b",[e._v(e._s(t.username))])],1),e._v("\n              赞同了\n              "),r("a",{attrs:{"data-hash":"#user-verify-cheater-"+t.userVerifyCheaterId},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.jumpToBookmark(t)}}},[e._v("\n                # 该决定\n              ")]),e._v("\n              ，作弊方式\n\n              "),r("b",[e._v("\n                "+e._s(e.convertCheatMethods(t.cheatMethods||""))+"\n              ")])],1),e._v(" "),e.isLogin?r("p",[r("a",{attrs:{href:"#","data-floor":""+t.floor,"data-user-id":""+t.userId},on:{click:function(t){return t.preventDefault(),e.handleReply(t)}}},[e._v("回复")])]):e._e()]):e._e(),e._v(" "),"reply"===t.type?r("div",{staticClass:"timeline-content"},[r("div",{staticClass:"timeline-time"},[t.createDatetime?r("Time",{attrs:{time:t.createDatetime}}):e._e(),e._v(" "),t.foo?r("router-link",{attrs:{to:{name:"account",params:{uId:""+t.fooUId}}}},["admin"===t.fooPrivilege?r("Tag",{attrs:{color:"success"}},[e._v("\n                  管理员\n                ")]):e._e(),e._v(" "),r("b",[e._v(e._s(t.foo))])],1):e._e(),e._v("\n              回复\n              "),t.bar?r("router-link",{attrs:{to:{name:"account",params:{uId:""+t.barUId}}}},["admin"===t.barPrivilege?r("Tag",{attrs:{color:"success"}},[e._v("\n                  管理员\n                ")]):e._e(),e._v(" "),r("b",[e._v(e._s(t.bar))])],1):e._e()],1),e._v(" "),r("div",{staticClass:"description",domProps:{innerHTML:e._s(t.content)}}),e._v(" "),e.isLogin?r("p",[r("a",{attrs:{href:"#","data-floor":""+t.floor,"data-user-id":""+t.userId},on:{click:function(t){return t.preventDefault(),e.handleReply(t)}}},[e._v("回复")])]):e._e()]):e._e()])})),e._v(" "),r("Page",{staticClass:"page",attrs:{"page-size":e.limit,"show-total":"",current:e.page,total:e.total,size:"small"},on:{"on-change":e.handlePageChange}})],2),e._v(" "),e.isLogin?r("div",[e._m(2),e._v(" "),r("Form",{staticStyle:{position:"relative"},attrs:{"label-width":80}},[r("p",[r("Input",{attrs:{type:"textarea",autosize:{minRows:2},placeholder:"说点什么吧。。。"},on:{"on-keydown":function(t){return e.handleCmdEnter(t,"reply")}},model:{value:e.reply.content,callback:function(t){e.$set(e.reply,"content",t)},expression:"reply.content"}})],1),e._v(" "),r("Button",{attrs:{type:"primary"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.doReply(t)}}},[e._v("回复")]),e._v(" "),r("Spin",{directives:[{name:"show",rawName:"v-show",value:e.replySpinShow,expression:"replySpinShow"}],attrs:{size:"large",fix:""}})],1)],1):e._e(),e._v(" "),"1"===e.cheater.status?r("div",[r("Divider")],1):e._e(),e._v(" "),r("p",{staticClass:"hint"},[e._v("注册登录后才可以参与讨论")]),e._v(" "),e.isAdmin?r("div",[r("Divider",[e._v("管理员专区")]),e._v(" "),r("p",{staticClass:"hint"},[e._v("不要轻易下判断，如果不能做出处理判断，就使用上方回复 参与讨论，等待举报者回复")]),e._v(" "),r("p",{staticClass:"hint"},[e._v("管理员的任何处理操作都会对作弊者的 现有状态 造成改变，如果不是100%确定，请使用回复留言讨论")]),e._v(" "),r("h2",{staticStyle:{margin:"1rem 0"}},[e._v("处理意见")]),e._v(" "),r("Form",{ref:"verifyForm",staticStyle:{position:"relative"},attrs:{"label-width":80}},[r("FormItem",{attrs:{label:"意见"}},[r("Select",{model:{value:e.verify.status,callback:function(t){e.$set(e.verify,"status",t)},expression:"verify.status"}},[r("Option",{attrs:{value:"1"}},[e._v("石锤")]),e._v(" "),r("Option",{attrs:{value:"2"}},[e._v("嫌疑再观察")]),e._v(" "),r("Option",{attrs:{value:"3"}},[e._v("没有问题不是挂")]),e._v(" "),r("Option",{attrs:{value:"4"}},[e._v("回收站")])],1)],1),e._v(" "),r("FormItem",{directives:[{name:"show",rawName:"v-show",value:"1"===e.verify.status,expression:"verify.status === '1'"}],attrs:{label:"作弊方式"}},[r("CheckboxGroup",{model:{value:e.verify.checkbox,callback:function(t){e.$set(e.verify,"checkbox",t)},expression:"verify.checkbox"}},e._l(e.cheatMethodsGlossary,(function(t){return r("Checkbox",{key:t.value,attrs:{label:t.value}},[e._v("\n                "+e._s(t.label)+"\n              ")])})),1)],1),e._v(" "),r("FormItem",{attrs:{label:"理由"}},[r("Input",{attrs:{type:"textarea",autosize:{minRows:2},placeholder:"必填"},on:{"on-keydown":function(t){return e.handleCmdEnter(t,"verify")}},model:{value:e.verify.suggestion,callback:function(t){e.$set(e.verify,"suggestion",t)},expression:"verify.suggestion"}})],1),e._v(" "),r("FormItem",[r("Button",{attrs:{type:"primary"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.doVerify(t)}}},[e._v("提交")])],1),e._v(" "),r("Spin",{directives:[{name:"show",rawName:"v-show",value:e.verifySpinShow,expression:"verifySpinShow"}],attrs:{size:"large",fix:""}})],1)],1):e._e(),e._v(" "),r("Modal",{attrs:{title:"回复","ok-text":"提交","cancel-text":"取消"},on:{"on-ok":e.doReply,"on-cancel":e.cancelReply},model:{value:e.replyModal,callback:function(t){e.replyModal=t},expression:"replyModal"}},[e.isLogin?r("div",[r("Form",{ref:"replyForm",staticStyle:{position:"relative"},attrs:{"label-width":80}},[r("Input",{attrs:{type:"textarea",autosize:{minRows:2},placeholder:"说点什么吧。。。"},on:{"on-keydown":function(t){return e.handleCmdEnter(t,"reply")}},model:{value:e.reply.content,callback:function(t){e.$set(e.reply,"content",t)},expression:"reply.content"}})],1)],1):r("div",[e._v("请登录后参与回复")])]),e._v(" "),r("Spin",{directives:[{name:"show",rawName:"v-show",value:e.spinShow,expression:"spinShow"}],attrs:{size:"large",fix:""}})],1):r("div",[e._v("404 不存在")])])])}),[function(){var e=this.$createElement,t=this._self._c||e;return t("thead",[t("tr",[t("td",[t("b",[this._v("更新时间")])]),this._v(" "),t("td",[t("b",[this._v("ID")])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticStyle:{"margin-top":".4rem"}},[t("h2",[this._v("管理员处理历史：")]),this._v(" "),t("table",[t("thead",[t("tr",[t("td",[t("b",[this._v("处理时间")])]),this._v(" "),t("td",[t("b",[this._v("操作")])])])]),this._v(" "),t("tbody")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",{staticClass:"hint"},[this._v("如果有新的证据图片或视频需要补充，可以再次举报。回复功能只能回复文本或链接。如需回复图片，请移步这里 "),t("a",{attrs:{href:"https://sm.ms/",target:"_blank"}},[this._v("上传图片 ")]),this._v("，然后复制图片链接进行回复。")])}],!1,null,null,null);t.default=h.exports}}]);