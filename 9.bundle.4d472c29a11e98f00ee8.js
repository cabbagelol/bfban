(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{40:function(e,t,n){"use strict";n.d(t,"j",(function(){return m})),n.d(t,"c",(function(){return a})),n.d(t,"d",(function(){return i})),n.d(t,"b",(function(){return c})),n.d(t,"h",(function(){return l})),n.d(t,"i",(function(){return p})),n.d(t,"g",(function(){return f})),n.d(t,"f",(function(){return h})),n.d(t,"l",(function(){return g})),n.d(t,"k",(function(){return v})),n.d(t,"a",(function(){return s})),n.d(t,"e",(function(){return o})),n.d(t,"m",(function(){return d}));var r=n(6);function a(e){var t=e.id;return Object(r.b)({method:"post",url:"/checkGameIdExist",data:{id:t}})}function i(e){return g(e.originId)?e.gameName?0===e.checkbox.length?(this.$Message.error("选择作弊方式"),!1):4!==e.captcha.length?(this.$Message.error("正确填写验证码"),!1):0===g(e.description).length?(this.$Message.error("论述必填"),!1):void 0:(this.$Message.error("选择游戏"),!1):(this.$Message.error("请填写举报游戏ID"),!1)}var s=[{value:"stealth",label:"隐身"},{value:"wallhack",label:"透视"},{value:"aimbot",label:"自瞄"},{value:"oneShotKill",label:"秒杀"},{value:"gadgetModify",label:"改装备"},{value:"damageChange",label:"改伤"},{value:"shootingThroughWalls",label:"子弹穿墙"}];function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e||"",n=[];return _.each(t.split(","),(function(e){_.each(s,(function(t,r){t.value===e&&n.push(t.label)}))})),n.sort().reverse().join(" ")}var c=[{value:"0",label:"未处理"},{value:"5",label:"回复讨论中"},{value:"6",label:"等待管理确认"},{value:"1",label:"认为石锤"},{value:"2",label:"嫌疑再观察"},{value:"3",label:"认为没开挂"},{value:"4",label:"回收站"}],u=[{value:"bf1",label:"战地1"},{value:"bfv",label:"战地v"}];function l(e){var t=_.find(c,(function(t,n){return t.value===e}));return t?t.label:""}function p(e){var t=_.find(u,(function(t,n){return t.value===e}));return t?t.label:""}function f(e){var t=e;return t=function(e){return e.replace(/([a-z\-_0-9\/\:\.]*\.(jpg|jpeg|png|gif))/gi,(function(e){return'<img src="'.concat(e,'" />')}))}(t=function(e){return e.replace(/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gi,(function(e){return/(jpg|jpeg|png|gif)$/gi.test(e)?e:-1!==new URL(e).hostname.indexOf("bfban.com")?'<a href="'.concat(e,'">').concat(e,"</a>"):'<a target="_blank" href="'.concat(e,'">').concat(e,"</a>")}))}(t=function(e){return e.replace(/\r\n|\r|\n/g,"<br />")}(t)))}function h(e){var t=moment.tz.guess();return moment(e).clone().tz(t).format("YYYY-MM-DD HH:mm:ss")}function g(e){return e.replace(/\s+/g,"")}function v(e){return/\s+/.test(e)}function d(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,t=this;t.style="display: none;";var n=document.createElement("span");t.parentNode.insertBefore(n,t.nextSibling);var r=e;n.innerText="等待 ".concat(r," 秒后重试");var a=setInterval((function(){r>1?(r-=1,n.innerText="等待 ".concat(r," 秒重试")):(t.style="",n.innerText="",clearInterval(a))}),1e3)}function m(e){return e.replace(/\s+(src)=/gi," data-src=")}},69:function(e,t,n){"use strict";n.r(t);var r=n(15),a=n.n(r),i=n(40),s=n(6);function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var u=Vuex,l=u.mapActions,p=u.mapMutations,f={data:function(){return{signin:{username:"",password:"",captcha:""},spinShow:!1}},beforeMount:function(){this.$route.query.rurl&&this.$Message.info("请先登录")},methods:c(c(c({},l({signinUser:"signin"})),p(["SIGNIN"])),{},{refreshCaptcha:function(){this.$refs.captcha.src=s.a+"/captcha?r="+Math.random(),i.m.call(this.$refs.reCaptcha)},handleSignin:function(){var e=this,t=_.each(this.signin,(function(e,t,n){n[t]=e.trim()})),n=t.username,r=t.password,a=t.captcha;n&&r&&4===a.length?(this.spinShow=!0,Object(s.b)({method:"post",url:"/account/signin",headers:{},data:{username:n,password:r,captcha:a}}).then((function(t){e.spinShow=!1;var n=t.data;1===n.error?(e.$Message.error("登录失败 "+n.msg),e.signin.password="",e.signin.captcha="",e.refreshCaptcha()):e.signinUser(n.data).then((function(){var t=e.$route.query.rurl;t?e.$router.push(t):e.$router.go("-1"),e.$Message.success("登录成功")}))}))):this.$Message.error("请规范填写")}})},h=n(1),g=Object(h.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"content"},[n("Form",{staticStyle:{position:"relative"},attrs:{"label-width":80}},[n("Divider",[e._v(e._s(e.$t("signin.title")))]),e._v(" "),n("FormItem",{attrs:{label:e.$t("signin.form.username")}},[n("Input",{attrs:{type:"text",placeholder:e.$t("signin.form.username")},model:{value:e.signin.username,callback:function(t){e.$set(e.signin,"username",t)},expression:"signin.username"}})],1),e._v(" "),n("FormItem",{attrs:{label:e.$t("signin.form.password")}},[n("Input",{attrs:{type:"password",placeholder:e.$t("signin.form.password")},model:{value:e.signin.password,callback:function(t){e.$set(e.signin,"password",t)},expression:"signin.password"}})],1),e._v(" "),n("FormItem",{attrs:{label:e.$t("signin.form.captcha")}},[n("Input",{attrs:{type:"text",placeholder:e.$t("signin.form.captcha")},model:{value:e.signin.captcha,callback:function(t){e.$set(e.signin,"captcha",t)},expression:"signin.captcha"}}),e._v(" "),n("img",{ref:"captcha"}),e._v(" "),n("a",{ref:"reCaptcha",attrs:{href:"#"},on:{click:function(t){return t.stopPropagation(),t.preventDefault(),e.refreshCaptcha(t)}}},[e._v("\n          "+e._s(e.$t("signin.form.getCaptcha"))+"\n        ")])],1),e._v(" "),n("FormItem",[n("Button",{attrs:{type:"primary"},on:{click:function(t){return t.preventDefault(),t.stopPropagation(),e.handleSignin(t)}}},[e._v(e._s(e.$t("signin.form.submit")))]),e._v(" "),n("router-link",{attrs:{to:{name:"signup"}}},[e._v(e._s(e.$t("signin.form.submitHint")))])],1),e._v(" "),n("Spin",{directives:[{name:"show",rawName:"v-show",value:e.spinShow,expression:"spinShow"}],attrs:{size:"large",fix:""}})],1)],1)])}),[],!1,null,null,null);t.default=g.exports}}]);