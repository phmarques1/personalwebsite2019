(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{139:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(148),i=a(152);t.default=function(){return n.a.createElement(o.a,null,n.a.createElement(i.a,{title:"404: Not found"}),n.a.createElement("h1",null,"NOT FOUND"),n.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))}},144:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return l}),a.d(t,"StaticQuery",function(){return g}),a.d(t,"useStaticQuery",function(){return A});var r=a(0),n=a.n(r),o=a(4),i=a.n(o),s=a(143),u=a.n(s);a.d(t,"Link",function(){return u.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var d=a(145),c=a.n(d);a.d(t,"PageRenderer",function(){return c.a});var p=a(32);a.d(t,"parsePath",function(){return p.a});var l=n.a.createContext({}),g=function(e){return n.a.createElement(l.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):n.a.createElement("div",null,"Loading (StaticQuery)")})},A=function(e){n.a.useContext;var t=n.a.useContext(l);if(t[e]&&t[e].data)return t[e].data;throw new Error("The result of this StaticQuery could not be fetched.\n\nThis is likely a bug in Gatsby and if refreshing the page does not fix it, please open an issue in https://github.com/gatsbyjs/gatsby/issues")};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}g.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},145:function(e,t,a){var r;e.exports=(r=a(150))&&r.default||r},146:function(e,t,a){"use strict";var r=a(144),n=a(4),o=a.n(n),i=a(0),s=a.n(i),u=(a(156),a(147)),d=a.n(u),c=function(e){return s.a.createElement("div",{className:"header"},s.a.createElement("div",{className:"headerGroup"},s.a.createElement("div",null,s.a.createElement(r.Link,{to:"/"},s.a.createElement("img",{src:a(151),width:"173",class:"logo"}))),s.a.createElement("div",{className:"menuItems"},s.a.createElement(r.Link,{to:"/",className:d()("",e.menuLinkFirst)},"Work"),s.a.createElement(r.Link,{to:"/about",className:d()("",e.menuLinkSecond)},"About"))))};c.propTypes={siteTitle:o.a.string},c.defaultProps={siteTitle:""},t.a=c},148:function(e,t,a){"use strict";var r=a(149),n=a(0),o=a.n(n),i=a(4),s=a.n(i),u=a(144),d=(a(146),a(157),function(e){var t=e.children;return o.a.createElement(u.StaticQuery,{query:"755544856",render:function(e){return o.a.createElement(o.a.Fragment,null,t)},data:r})});d.propTypes={children:s.a.node.isRequired},t.a=d},149:function(e){e.exports={data:{site:{siteMetadata:{title:"Pedro Marques | Product Designer"}}}}},150:function(e,t,a){"use strict";a.r(t);a(33);var r=a(0),n=a.n(r),o=a(4),i=a.n(o),s=a(53),u=a(2),d=function(e){var t=e.location,a=u.default.getResourcesForPathnameSync(t.pathname);return n.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};d.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=d},151:function(e,t){e.exports="data:image/png;base64,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"},152:function(e,t,a){"use strict";var r=a(153),n=a(0),o=a.n(n),i=a(4),s=a.n(i),u=a(155),d=a.n(u),c=a(144);function p(e){var t=e.description,n=e.lang,i=e.meta,s=e.keywords,u=e.title;return o.a.createElement(c.StaticQuery,{query:l,render:function(e){var r=t||e.site.siteMetadata.description;return o.a.createElement(d.a,{htmlAttributes:{lang:n},title:u,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:r},{property:"og:title",content:"Pedro Marques - Product Designer"},{property:"og:image",content:"https://previews.dropbox.com/p/thumb/AAVlqU5f1hFfQj-8SjnvhaErLCLVmlM8Ma6Pl2biCkADUgz64vzVU2rH9HeGNkuPD-l2MAZnhFfgjpNyrtR0BA9bHZzAj39y-I4JBYIneMsNX0yiaVkhOwhU8NKy9qMKgmbof6qxrBrafO2tcnA4CbiZVPl5Vv4-bea_eP0umHE5uqFUjmoPEbCPMJdJ3bUrfSE8KEkMnpUj5F4Z10tK5mXFCoaZ2nSfoTyLkt_VGzcrJw/p.png?size_mode=5"},{property:"og:url",content:"https://pedromarques.me"},{property:"og:description",content:r},{property:"og:type",content:"website"},{property:"og:site_name",content:"Pedro Marques"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:"Pedro Marques - Product Designer"},{property:"twitter:image",content:a(154)},{name:"twitter:description",content:r}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(i)})},data:r})}p.defaultProps={lang:"en",meta:[],keywords:[]},p.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=p;var l="1025518380"},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Pedro Marques | Product Designer",description:"I am a product designer taking complex technology and making it simple. For humans.",author:"Pedro Marques"}}}}},154:function(e,t,a){e.exports=a.p+"static/social-image-bca6a62a4d93e102661eeb4d374e22f1.png"}}]);
//# sourceMappingURL=component---src-pages-404-js-ceefc5d409731079a0f2.js.map