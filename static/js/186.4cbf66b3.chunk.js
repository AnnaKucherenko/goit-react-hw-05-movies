"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{706:function(e,n,t){t.d(n,{AR:function(){return s},Hx:function(){return p},Wg:function(){return d},bI:function(){return f},xc:function(){return l}});var r=t(861),a=t(757),c=t.n(a),u="https://api.themoviedb.org/3";function o(){return i.apply(this,arguments)}function i(){return i=(0,r.Z)(c().mark((function e(){var n,t,r,a=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>0&&void 0!==a[0]?a[0]:"",t=a.length>1&&void 0!==a[1]?a[1]:{},e.next=4,fetch(n,t);case 4:if(!(r=e.sent).ok){e.next=11;break}return e.next=8,r.json();case 8:e.t0=e.sent,e.next=12;break;case 11:e.t0=Promise.reject(new Error("Not found"));case 12:return e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e)}))),i.apply(this,arguments)}function s(){return o("".concat(u,"/trending/movie/day?api_key=a5d27c40376a4ea09985282eed260888"))}function f(e){return o("".concat(u,"/search/movie?api_key=a5d27c40376a4ea09985282eed260888&query=").concat(e,"&language=en-US&page=1&include_adult=false"))}function d(e){return o("".concat(u,"/movie/").concat(e,"?api_key=a5d27c40376a4ea09985282eed260888&language=en-US"))}function l(e){return o("".concat(u,"/movie/").concat(e,"/credits?api_key=a5d27c40376a4ea09985282eed260888&language=en-US"))}function p(e){return o("".concat(u,"/movie/").concat(e,"/reviews?api_key=a5d27c40376a4ea09985282eed260888&language=en-US&page=1"))}},186:function(e,n,t){t.r(n),t.d(n,{default:function(){return i}});var r=t(152),a=t(791),c=t(871),u=t(706),o=t(184);function i(){var e=(0,c.UO)().movieId,n=(0,a.useState)(null),t=(0,r.Z)(n,2),i=t[0],s=t[1];return(0,a.useEffect)((function(){(0,u.Hx)(e).then((function(e){return s(e.results)}))}),[e]),(0,o.jsx)(o.Fragment,{children:i&&(0,o.jsx)("ul",{children:i.map((function(e){return(0,o.jsxs)("li",{children:[(0,o.jsxs)("p",{children:["Author:",e.author]}),(0,o.jsx)("p",{children:e.content})]},e.author_details.username)}))})})}}}]);
//# sourceMappingURL=186.4cbf66b3.chunk.js.map