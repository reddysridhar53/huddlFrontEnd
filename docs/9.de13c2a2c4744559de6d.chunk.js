(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"6908ff6468bad40a18c6":function(e,n,t){"use strict";t.r(n);var r=t("8af190b70a6bc55c6f1b"),o=t("e95a63b25fb92ed15721"),i="GET_USER",a="GET_USER_SUCCESS",l="GET_USER_ERROR";function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.forEach(function(n){f(e,n,t[n])})}return e}function f(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var s,d=function(e,n){switch(n.type){case i:return c({},e,{loading:!0,errorMessage:null});case a:return c({},e,{loading:!1,user:n.payload});case l:return c({},e,{loading:!1,errorMessage:n.error});default:return e}},u=t("74c8eb96ab0c694f20d1"),m=t("f3e27fd1cdba8fb4b92c"),p=(t("8a2d1b95e05b6a321e74"),t("19be155092ade822ed25")),y=t("0b3cb19af78752326f59"),b=y.c.section.withConfig({displayName:"styledElements__UserPageWrapper",componentId:"sc-5oxcm8-0"})(["display:flex;width:100%;height:100%;flex:1;background:#f5f7f9;"]),v=y.c.h1.withConfig({displayName:"styledElements__PageTitle",componentId:"sc-5oxcm8-1"})(["font-size:2.5em;font-weight:500;color:rgba(0,0,0,0.8);"]),g=y.c.div.withConfig({displayName:"styledElements__UserDetailsWrapper",componentId:"sc-5oxcm8-2"})(["display:flex;width:100%;flex:1;flex-direction:column;max-width:964px;margin:0 auto;@media only screen and (max-width:964px){padding:1em;}"]),h=y.c.div.withConfig({displayName:"styledElements__UserItemRow",componentId:"sc-5oxcm8-3"})(["display:flex;margin-bottom:1em;&:last-child{margin-bottom:0;}"]),w=y.c.div.withConfig({displayName:"styledElements__UserItemCol",componentId:"sc-5oxcm8-4"})(["display:flex;text-transform:capitalize;color:rgba(0,0,0,0.8);font-size:2em;flex:1 0 75%;",";@media only screen and (max-width:964px){font-size:1.6em;flex:1 0 70%;",";}"],function(e){return e.main&&Object(y.b)(["flex:1 0 25%;font-size:1.8em;color:rgba(0,0,0,0.6);"])},function(e){return e.main&&Object(y.b)(["flex:1 0 30%;font-size:1.4em;"])}),x=y.c.div.withConfig({displayName:"styledElements__ErrorMessageWrapper",componentId:"sc-5oxcm8-5"})(["display:flex;"]);y.c.div.withConfig({displayName:"styledElements__UserDetailsFragment",componentId:"sc-5oxcm8-6"})(["display:flex;flex:1;flex-direction:column;"]);function _(e,n,t,r){s||(s="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(n||0===i||(n={children:void 0}),n&&o)for(var a in o)void 0===n[a]&&(n[a]=o[a]);else n||(n=o||{});if(1===i)n.children=r;else if(i>1){for(var l=new Array(i),c=0;c<i;c++)l[c]=arguments[c+3];n.children=l}return{$$typeof:s,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}var E=_(p.a,{to:"/"},void 0,"Go to Posts"),O=_(v,{},void 0,"User Details");var S,j=function(e){var n=e.user,t=Object.keys(n);if(!t||!t.length)return null;var o=Object(r.useMemo)(function(){return t.filter(function(e){return"id"!==e})},[1]);return _(g,{},void 0,E,O,o.map(function(e){var t=n[e];return _(h,{},e,_(w,{main:!0},void 0,e),_(w,{},void 0,"postIds"!==e?t:t.map(function(e,n){return _("span",{},void 0,"".concat(e).concat(n!==t.length-1?", ":""))})))}))};function I(e,n,t,r){S||(S="function"===typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103);var o=e&&e.defaultProps,i=arguments.length-3;if(n||0===i||(n={children:void 0}),n&&o)for(var a in o)void 0===n[a]&&(n[a]=o[a]);else n||(n=o||{});if(1===i)n.children=r;else if(i>1){for(var l=new Array(i),c=0;c<i;c++)l[c]=arguments[c+3];n.children=l}return{$$typeof:S,type:e,key:void 0===t?null:""+t,ref:null,props:n,_owner:null}}function C(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=[],r=!0,o=!1,i=void 0;try{for(var a,l=e[Symbol.iterator]();!(r=(a=l.next()).done)&&(t.push(a.value),!n||t.length!==n);r=!0);}catch(e){o=!0,i=e}finally{try{r||null==l.return||l.return()}finally{if(o)throw i}}return t}(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var U=I(m.a,{});n.default=Object(o.withRouter)(function(e){var n=C(Object(r.useReducer)(d,{loading:!0,user:{},errorMessage:null}),2),t=n[0],o=n[1],c=e.match.params.userId;Object(r.useEffect)(function(){o({type:i}),Object(u.a)(c).then(function(e){o({type:a,payload:e})}).catch(function(e){o({type:l,payload:e})})},[]);var f=t.user,s=t.errorMessage,m=t.loading;return I(b,{},void 0,m&&!s?U:s?I(x,{},void 0,s):I(j,{user:f}))})}}]);