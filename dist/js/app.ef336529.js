(function(){"use strict";var n={2902:function(n,e,r){var t=r(5130),o=r(6768);function a(n,e,r,t,a,i){const u=(0,o.g2)("router-view");return(0,o.uX)(),(0,o.Wv)(u)}var i={name:"App"},u=r(1241);const s=(0,u.A)(i,[["render",a]]);var l=s;function c(n,e,r,t,a,i){return(0,o.uX)(),(0,o.CE)("h1",null,"Hello I am HomePage")}var f={name:"HomePage"};const p=(0,u.A)(f,[["render",c]]);var d=p;const m={class:"reg"};function v(n,e,r,a,i,u){return(0,o.uX)(),(0,o.CE)("div",null,[e[5]||(e[5]=(0,o.Lk)("h1",null,"Sign Up",-1)),(0,o.Lk)("form",null,[(0,o.Lk)("div",m,[e[3]||(e[3]=(0,o.Lk)("label",{for:"email"},"Email",-1)),(0,o.bo)((0,o.Lk)("input",{type:"email","onUpdate:modelValue":e[0]||(e[0]=n=>i.email=n),id:"email",name:"email",required:""},null,512),[[t.Jo,i.email]]),e[4]||(e[4]=(0,o.Lk)("label",{for:"password"},"Password",-1)),(0,o.bo)((0,o.Lk)("input",{type:"password","onUpdate:modelValue":e[1]||(e[1]=n=>i.password=n),id:"password",name:"password",required:""},null,512),[[t.Jo,i.password]]),(0,o.Lk)("button",{onClick:e[2]||(e[2]=(...n)=>u.signUp&&u.signUp(...n))},"Sign Up")])])])}r(4114);var g=r(4373),h={name:"SignUp",data(){return{email:"",password:""}},methods:{async signUp(){let n=await g.A.post("http://localhost:3000/user",{email:this.email,password:this.password});console.warn(n),201==n.status?(localStorage.setItem("user-info",JSON.stringify(n.data)),this.$router.push({name:"HomePage"})):alert("User already exists")}}};const b=(0,u.A)(h,[["render",v]]);var w=b,y=r(973);const k=[{name:"HomePage",component:d,path:"/"},{name:"SignUp",component:w,path:"/sign-up"}],O=(0,y.aE)({history:(0,y.LA)(),routes:k});var S=O;(0,t.Ef)(l).use(S).mount("#app")}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var a=e[t]={exports:{}};return n[t].call(a.exports,a,a.exports,r),a.exports}r.m=n,function(){var n=[];r.O=function(e,t,o,a){if(!t){var i=1/0;for(c=0;c<n.length;c++){t=n[c][0],o=n[c][1],a=n[c][2];for(var u=!0,s=0;s<t.length;s++)(!1&a||i>=a)&&Object.keys(r.O).every((function(n){return r.O[n](t[s])}))?t.splice(s--,1):(u=!1,a<i&&(i=a));if(u){n.splice(c--,1);var l=o();void 0!==l&&(e=l)}}return e}a=a||0;for(var c=n.length;c>0&&n[c-1][2]>a;c--)n[c]=n[c-1];n[c]=[t,o,a]}}(),function(){r.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return r.d(e,{a:e}),e}}(),function(){r.d=function(n,e){for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"===typeof window)return window}}()}(),function(){r.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)}}(),function(){r.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})}}(),function(){var n={524:0};r.O.j=function(e){return 0===n[e]};var e=function(e,t){var o,a,i=t[0],u=t[1],s=t[2],l=0;if(i.some((function(e){return 0!==n[e]}))){for(o in u)r.o(u,o)&&(r.m[o]=u[o]);if(s)var c=s(r)}for(e&&e(t);l<i.length;l++)a=i[l],r.o(n,a)&&n[a]&&n[a][0](),n[a]=0;return r.O(c)},t=self["webpackChunkrestaurant_project"]=self["webpackChunkrestaurant_project"]||[];t.forEach(e.bind(null,0)),t.push=e.bind(null,t.push.bind(t))}();var t=r.O(void 0,[504],(function(){return r(2902)}));t=r.O(t)})();
//# sourceMappingURL=app.ef336529.js.map