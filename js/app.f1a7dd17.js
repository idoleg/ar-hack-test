(function(t){function e(e){for(var a,s,c=e[0],o=e[1],l=e[2],f=0,p=[];f<c.length;f++)s=c[f],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(t[a]=o[a]);u&&u(e);while(p.length)p.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,c=1;c<n.length;c++){var o=n[c];0!==r[o]&&(a=!1)}a&&(i.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},i=[];function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/ar-hack-test/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],o=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=o;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("85ec"),r=n.n(a);r.a},2283:function(t,e,n){"use strict";var a=n("6136"),r=n.n(a);r.a},4285:function(t,e,n){"use strict";var a=n("457f"),r=n.n(a);r.a},"457f":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return"camera"!=t.step?n("div",{attrs:{id:"app"}},["enter"==t.step?n("Enter",{on:{change:t.change}}):t._e(),"start"==t.step?n("Start",{on:{change:t.change}}):t._e(),"sale"==t.step?n("Sale",{on:{change:t.change}}):t._e(),"video"==t.step?n("Video",{on:{change:t.change}}):t._e()],1):t._e()},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"enter"},[t._m(0),t._m(1),n("div",{staticClass:"enter-ellips-1"}),n("img",{attrs:{src:"card.png"}}),n("img",{staticClass:"enter-aks-1",attrs:{src:"aks-1.png"}}),n("div",{staticClass:"button-column"},[n("Button",{attrs:{label:"Камера"},on:{click:function(e){return t.$emit("change","camera")}}}),n("Button",{attrs:{label:"Далее",outline:""},on:{click:function(e){return t.$emit("change","start")}}})],1)])},c=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",[t._v("Привет,"),n("br"),t._v(" я Аксик!")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[t._v(" я помогу тебе покупать"),n("br"),t._v(" лучшие товары - выгодно! ")])}],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:{button:!t.outline,"button-outline":t.outline},on:{click:function(e){return t.$emit("click")}}},[t._v(" "+t._s(t.label)+" ")])},l=[],u={props:{label:String,outline:Boolean}},f=u,p=(n("2283"),n("2877")),v=Object(p["a"])(f,o,l,!1,null,"50f455cc",null),d=v.exports,h={components:{Button:d}},_=h,m=(n("7fc2"),Object(p["a"])(_,s,c,!1,null,"ec660e38",null)),g=m.exports,b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"start"},[t._m(0),n("span",[t._v(" Просто отсканируй код! ")]),n("div",{staticClass:"start-ellips-1"}),t._m(1),n("div",{staticClass:"button-row"},[n("Button",{attrs:{label:"Камера"},on:{click:function(e){return t.$emit("change","camera")}}}),n("Button",{attrs:{label:"Далее",outline:""},on:{click:function(e){return t.$emit("change","video")}}})],1)])},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",[t._v("Найди меня"),n("br"),t._v(" в магазине")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"text-align":"center"}},[n("img",{staticClass:"start-aks-2",attrs:{src:"aks-2.png"}})])}],y={components:{Button:d}},E=y,k=(n("5a89"),Object(p["a"])(E,b,x,!1,null,"446ab9e8",null)),$=k.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h3",[t._v("Я расскажу тебе об Аксиках")]),t._m(0),n("div",{staticClass:"button-row"},[n("Button",{attrs:{label:"Камера"},on:{click:function(e){return t.$emit("change","camera")}}}),n("Button",{attrs:{label:"Поиграть",outline:""}})],1)])},w=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("video",{staticClass:"aks-video",attrs:{controls:"controls",poster:"video.jpeg"}},[n("source",{attrs:{src:"video.mp4",type:"video/mp4;"}})])}],C={components:{Button:d}},O=C,j=(n("a697"),Object(p["a"])(O,S,w,!1,null,"9b74fe6e",null)),B=j.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sale"},[t._m(0),n("div",{staticClass:"sale-ellips-1"}),n("img",{staticClass:"sale-1",attrs:{src:"sale-1.png"}}),t._m(1),t._m(2),t._m(3),t._m(4),n("div",{staticClass:"button-sale"},[n("Button",{attrs:{label:"О товаре"}})],1),t._m(5)])},P=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h3",[t._v("Скидка"),n("br"),t._v(" от Аксика!")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticStyle:{"font-size":"20px","line-height":"24px",padding:"10px 0"}},[t._v(" на любую пасту"),n("br"),t._v(" SPLAT special ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticStyle:{"font-size":"14px","line-height":"14px",padding:"5px 0"}},[t._v(" * не забудьте предьявить"),n("br"),t._v(" на кассе карту лояльности ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticStyle:{"font-size":"14px","line-height":"14px",padding:"5px 0"}},[t._v(" * скидка возвратится на карту лояльности"),n("br"),t._v(" в виде бонусов в течении 5 дней ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"text-align":"right"}},[n("img",{staticClass:"sale-aks-4",attrs:{src:"aks-4.png"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{"margin-top":"100px",position:"relative"}},[n("p",{staticStyle:{color:"#02903A","font-size":"14px","line-height":"14px"}},[t._v(" Второй Аксик удвоит скидку! ")]),n("div",{staticStyle:{"text-align":"right"}},[n("img",{staticClass:"sale-aks-5",attrs:{src:"aks-5.png"}})]),n("h3",{staticStyle:{color:"#EB261D","line-height":"36px","font-size":"36px"}},[t._v(" Скидка "),n("br"),t._v(" от Аксика "),n("br"),t._v(" на зубные щетки SPLAT ")]),n("img",{staticClass:"sale-2",attrs:{src:"sale-2.png"}})])}],T={components:{Button:d}},z=T,M=(n("4285"),Object(p["a"])(z,A,P,!1,null,"429d17dc",null)),V=M.exports,D=n("ecec"),H=n.n(D),I=document.createElement("video"),L=document.createElement("canvas"),q=L.getContext("2d"),J={name:"App",components:{Enter:g,Start:$,Sale:V,Video:B},data:function(){return{qrValue:null,step:"enter"}},mounted:function(){var t=this;document.addEventListener("click",(function(){"camera"===t.step&&(t.step="sale")}))},methods:{tick:function(){if(I.readyState===I.HAVE_ENOUGH_DATA){L.height=I.videoHeight,L.width=I.videoWidth,q.drawImage(I,0,0,L.width,L.height);var t=q.getImageData(0,0,L.width,L.height),e=H()(t.data,t.width,t.height,{inversionAttempts:"dontInvert"});e&&console.log(e.data)}requestAnimationFrame(this.tick)},change:function(t){var e=this;setTimeout((function(){e.step=t}),100)}}},F=J,G=(n("034f"),Object(p["a"])(F,r,i,!1,null,null,null)),N=G.exports;a["a"].config.productionTip=!1,a["a"].config.ignoredElements=["a-scene","a-marker","a-entity"],new a["a"]({render:function(t){return t(N)}}).$mount("#app")},"5a89":function(t,e,n){"use strict";var a=n("ddad"),r=n.n(a);r.a},6136:function(t,e,n){},"7fc2":function(t,e,n){"use strict";var a=n("c403"),r=n.n(a);r.a},"85ec":function(t,e,n){},8980:function(t,e,n){},a697:function(t,e,n){"use strict";var a=n("8980"),r=n.n(a);r.a},c403:function(t,e,n){},ddad:function(t,e,n){}});
//# sourceMappingURL=app.f1a7dd17.js.map