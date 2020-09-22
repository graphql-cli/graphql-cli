(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{54:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));var a=n(2),r=n(6),i=(n(0),n(79)),o=n(82),c=n(83),l={id:"init",title:"init",sidebar_label:"init"},b={unversionedId:"init",id:"init",isDocsHomePage:!1,title:"init",description:"Create a GraphQL project using a template or GraphQL Config file for your existing project.",source:"@site/docs/command-init.md",slug:"/init",permalink:"/init",editUrl:"https://github.com/urigo/graphql-cli/edit/master/website/docs/command-init.md",version:"current",sidebar_label:"init",sidebar:"docs",previous:{title:"generate",permalink:"/generate"},next:{title:"introspect",permalink:"/introspect"}},u=[{value:"Installation",id:"installation",children:[]},{value:"Usage",id:"usage",children:[]}],p={rightToc:u};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Create a GraphQL project using a template or GraphQL Config file for your existing project."),Object(i.b)("h3",{id:"installation"},"Installation"),Object(i.b)(o.a,{defaultValue:"yarn",values:[{label:"yarn",value:"yarn"},{label:"npm",value:"npm"}],mdxType:"Tabs"},Object(i.b)(c.a,{value:"yarn",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"yarn global add @graphql-cli/init\n"))),Object(i.b)(c.a,{value:"npm",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"npm i -g @graphql-cli/init\n")))),Object(i.b)("p",null,"Note: Because you probably won't need to run this command again after bootstrapping your project, you can also run it using ",Object(i.b)("inlineCode",{parentName:"p"},"npx")," instead of installing the package: ",Object(i.b)("inlineCode",{parentName:"p"},"npx graphql init"),"."),Object(i.b)("h3",{id:"usage"},"Usage"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"graphql init\n")),Object(i.b)("p",null,"Follow the prompts to set up your project."),Object(i.b)("h4",{id:"arguments"},"Arguments"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"None")),Object(i.b)("h4",{id:"options"},"Options"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"option"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"alias"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"description"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"default"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"--projectName")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Name of a project in GraphQL Config"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"undefined"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"--templateName")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Name of one of the predefined templates"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"undefined"))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"--templateUrl")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"GitHub URL of the template. For example ",Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"http://github.com/example/graphql-cli-example-template"}),"http://github.com/example/graphql-cli-example-template")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"undefined"))))))}s.isMDXComponent=!0},78:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},79:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(o,".").concat(d)]||p[d]||s[d]||i;return n?r.a.createElement(m,c(c({ref:t},b),{},{components:n})):r.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var b=2;b<i;b++)o[b]=n[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},81:function(e,t,n){"use strict";var a=n(0),r=n(80);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},82:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(81),o=n(78),c=n(47),l=n.n(c),b=37,u=39;t.a=function(e){var t=e.block,n=e.children,c=e.defaultValue,p=e.values,s=e.groupId,d=Object(i.a)(),m=d.tabGroupChoices,f=d.setTabGroupChoices,O=Object(a.useState)(c),j=O[0],g=O[1],y=Object(a.useState)(!1),h=y[0],v=y[1];if(null!=s){var N=m[s];null!=N&&N!==j&&p.some((function(e){return e.value===N}))&&g(N)}var w=function(e){g(e),null!=s&&f(s,e)},x=[],C=function(e){e.metaKey||e.altKey||e.ctrlKey||v(!0)},E=function(){v(!1)};return Object(a.useEffect)((function(){window.addEventListener("keydown",C),window.addEventListener("mousedown",E)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t})},p.map((function(e){var t=e.value,n=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":j===t,className:Object(o.a)("tabs__item",l.a.tabItem,{"tabs__item--active":j===t}),style:h?{}:{outline:"none"},key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,n){switch(n.keyCode){case u:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e),C(e)},onFocus:function(){return w(t)},onClick:function(){w(t),v(!1)},onPointerDown:function(){return v(!1)}},n)}))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter((function(e){return e.props.value===j}))[0]))}},83:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);