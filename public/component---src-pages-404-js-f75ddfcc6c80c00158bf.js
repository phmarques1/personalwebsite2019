(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{138:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(147),o=a(151);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(o.a,{title:"404: Not found"}),r.a.createElement("h1",null,"NOT FOUND"),r.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},143:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return y}),a.d(t,"StaticQueryContext",function(){return g}),a.d(t,"StaticQuery",function(){return m}),a.d(t,"useStaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(142),s=a.n(c);a.d(t,"Link",function(){return s.a}),a.d(t,"withPrefix",function(){return c.withPrefix}),a.d(t,"navigate",function(){return c.navigate}),a.d(t,"push",function(){return c.push}),a.d(t,"replace",function(){return c.replace}),a.d(t,"navigateTo",function(){return c.navigateTo});var u=a(144),l=a.n(u);a.d(t,"PageRenderer",function(){return l.a});var d=a(32);a.d(t,"parsePath",function(){return d.a});var g=r.a.createContext({}),m=function(e){return r.a.createElement(g.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})},p=function(e){r.a.useContext;var t=r.a.useContext(g);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function y(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},144:function(e,t,a){var n;e.exports=(n=a(149))&&n.default||n},145:function(e,t,a){"use strict";var n=a(143),r=a(4),i=a.n(r),o=a(0),c=a.n(o),s=(a(154),a(146)),u=a.n(s),l=function(e){return c.a.createElement("div",{className:"header"},c.a.createElement("div",{className:"headerGroup"},c.a.createElement("div",null,c.a.createElement(n.Link,{to:"/"},c.a.createElement("img",{src:a(150),width:"173",class:"logo"}))),c.a.createElement("div",{className:"menuItems"},c.a.createElement(n.Link,{to:"/",className:u()("",e.menuLinkFirst)},"Work"),c.a.createElement(n.Link,{to:"/about",className:u()("",e.menuLinkSecond)},"About"))))};l.propTypes={siteTitle:i.a.string},l.defaultProps={siteTitle:""},t.a=l},147:function(e,t,a){"use strict";var n=a(148),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(143),u=(a(145),a(155),function(e){var t=e.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(e){return i.a.createElement(i.a.Fragment,null,t)},data:n})});u.propTypes={children:c.a.node.isRequired},t.a=u},148:function(e){e.exports={data:{site:{siteMetadata:{title:"Pedro Marques | Product Designer"}}}}},149:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(53),s=a(2),u=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},150:function(e,t){e.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMTcxcHgiIGhlaWdodD0iMThweCIgdmlld0JveD0iMCAwIDE3MSAxOCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDwhLS0gR2VuZXJhdG9yOiBTa2V0Y2ggNTMgKDcyNTIwKSAtIGh0dHBzOi8vc2tldGNoYXBwLmNvbSAtLT4KICAgIDx0aXRsZT5QZWRybyBNYXJxdWVzPC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9IldlbGNvbWUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZvbnQtZmFtaWx5PSJUZXJtaW5hLUJvbGQsIFRlcm1pbmEiIGZvbnQtc2l6ZT0iMTgiIGZvbnQtd2VpZ2h0PSJib2xkIj4KICAgICAgICA8ZyBpZD0iUGVyc29uYWwtV2Vic2l0ZSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTEyMS4wMDAwMDAsIC0zNC4wMDAwMDApIiBmaWxsPSIjMDAwMDAwIj4KICAgICAgICAgICAgPHRleHQgaWQ9IlBlZHJvLU1hcnF1ZXMiPgogICAgICAgICAgICAgICAgPHRzcGFuIHg9IjEyMCIgeT0iNDgiPlBlZHJvIE1hcnF1ZXM8L3RzcGFuPgogICAgICAgICAgICA8L3RleHQ+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4="},151:function(e,t,a){"use strict";var n=a(152),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(153),u=a.n(s),l=a(143);function d(e){var t=e.description,a=e.lang,r=e.meta,o=e.keywords,c=e.title;return i.a.createElement(l.StaticQuery,{query:g,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}d.defaultProps={lang:"en",meta:[],keywords:[]},d.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.array,keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired},t.a=d;var g="1025518380"},152:function(e){e.exports={data:{site:{siteMetadata:{title:"Pedro Marques | Product Designer",description:"I am a product designer taking complex technology and making it simple. For humans.",author:"Pedro Marques"}}}}}}]);
//# sourceMappingURL=component---src-pages-404-js-f75ddfcc6c80c00158bf.js.map