(self.webpackChunkgatsby_starter_apple=self.webpackChunkgatsby_starter_apple||[]).push([[691],{3584:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return W}});var r=n(5785),o=n(7294),i=n(9),a=n(6968),l=n(7626),c=n(9624),u=n(5444),d=n(7949),f=n(6277),s=n(6125),p=function(e){var t=e.src,n=e.alt,r=(0,u.useStaticQuery)("2965265729"),i=(0,o.useMemo)((function(){var e=r.allImageSharp.edges.find((function(e){return e.node.id===t}));return null==e?void 0:e.node.gatsbyImageData}),[t,r.allImageSharp.edges]);return o.createElement(g,null,o.createElement(m,null,o.createElement(s.G,{image:i,loading:"eager",alt:null!=n?n:"Thumbnail Image"})))},g=i.default.div.withConfig({displayName:"centeredImg__ThumbnailWrapper",componentId:"sc-ku254p-0"})(['position:relative;width:100%;&::after{content:"";display:block;position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;background-color:var(--color-dimmed);transition:0.3s ease;}']),m=i.default.div.withConfig({displayName:"centeredImg__InnerWrapper",componentId:"sc-ku254p-1"})(["overflow:hidden;"]),v=o.memo(p),h=function(e){var t=e.thumbnail,n=e.alt,r=e.category,i=e.title,a=e.desc,l=e.date;return o.createElement(x,null,o.createElement(v,{src:t,alt:n}),o.createElement(b,null,o.createElement("div",null,o.createElement(d.Z,null,r),o.createElement(w,null,i),o.createElement(y,null,a)),o.createElement(f.Z,{dateTime:l},l)))},x=i.default.div.withConfig({displayName:"card__Wrapper",componentId:"sc-nx3lqc-0"})(["position:relative;display:flex;flex-direction:column;overflow:hidden;height:100%;width:100%;border-radius:var(--border-radius-base);background-color:var(--color-card);box-shadow:0 10px 10px var(--color-floating-button-shadow);transform:translateZ(0);"]),b=i.default.div.withConfig({displayName:"card__Text",componentId:"sc-nx3lqc-1"})(["display:flex;flex-direction:column;flex:1 1 auto;justify-content:space-between;padding:var(--sizing-md);& > *{display:block;}"]),w=i.default.h3.withConfig({displayName:"card__Title",componentId:"sc-nx3lqc-2"})(["margin-top:var(--sizing-xs);font-size:var(--text-lg);font-weight:var(--font-weight-bold);line-height:1.3;@media (max-width:","){font-size:1.3125rem;}@media (max-width:","){font-size:var(--text-md);}"],(function(e){return e.theme.device.md}),(function(e){return e.theme.device.sm})),y=i.default.p.withConfig({displayName:"card__Desc",componentId:"sc-nx3lqc-3"})(["line-height:1.5;margin-top:8px;padding-bottom:var(--sizing-sm);color:black;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;word-break:break-word;overflow:hidden;text-overflow:ellipsis;"]),E=o.memo(h),_=function(e){var t=e.posts,n=e.scrollEdgeRef,i=e.maxPostNum,a=void 0===i?10:i,l=e.offsetY,c=void 0===l?400:l,u=(0,o.useState)(!1),d=u[0],f=u[1],s=(0,o.useState)([]),p=s[0],g=s[1],m=(0,o.useState)(!1),v=m[0],h=m[1],x=(0,o.useState)(!1),b=x[0],w=x[1],y=(0,o.useRef)();return(0,o.useLayoutEffect)((function(){t.length&&!v&&(f(t.length>a),g((0,r.Z)(t.slice(0,a))),h(!0))}),[v,t,a]),(0,o.useEffect)((function(){var e=n.current,o={rootMargin:"0px 0px "+c+"px 0px",threshold:[0]};return y.current=new IntersectionObserver((function(e){d&&e.forEach((function(e){var n,o,i;b?e.isIntersecting&&(n=p.length,o=n<t.length,i=o?t.slice(n,n+a):[],f(o),g([].concat((0,r.Z)(p),(0,r.Z)(i)))):w(!0)}))}),o),y.current.observe(e),function(){return y.current&&y.current.disconnect()}})),p},I=i.default.ul.withConfig({displayName:"postGrid__Grid",componentId:"sc-14uqf8l-0"})(["display:grid;grid-gap:var(--grid-gap-xl);grid-template-columns:repeat(3,1fr);list-style:none;& > li{margin-bottom:0;}@media (max-width:","){grid-gap:var(--grid-gap-xl);grid-template-colums:repeat(1,1fr);}"],(function(e){return e.theme.device.sm})),C=i.default.li.withConfig({displayName:"postGrid__List",componentId:"sc-14uqf8l-1"})(["box-sizing:border-box;grid-template-columns:1fr 1fr;a{display:block;height:100%;}a:hover ","::after,a:focus ","::after{opacity:1;}& .gatsby-image-wrapper{transition:opacity 1s ease-out,transform 0.5s ease;}a:hover,a:focus{.gatsby-image-wrapper{transform:scale(1.03);}}@media (max-width:","){grid-column:span 3;padding-right:20px;padding-left:20px;}"],g,g,(function(e){return e.theme.device.sm})),k=function(e){var t=e.posts,n=(0,o.useRef)(null),r=_({posts:t,scrollEdgeRef:n,maxPostNum:10,offsetY:200});return o.createElement(I,{role:"list"},r.map((function(e){var t=e.id,n=e.slug,r=e.title,i=e.desc,a=e.date,l=e.category,c=e.thumbnail,d=e.alt,f=r+" - "+l+" - Posted on "+a;return o.createElement(C,{key:t,role:"listitem"},o.createElement(u.Link,{to:null!=n?n:"","aria-label":f},o.createElement(E,{thumbnail:c,alt:d,category:l,title:r,desc:i,date:a})))})),o.createElement("div",{ref:n}))},z=n(1804),N=n.n(z),S=function(e){var t=e.ref,n=e.targetId;(0,o.useLayoutEffect)((function(){var e=t.current;if(e&&e.scrollWidth>=e.offsetWidth){var r=e.querySelector("#"+n);if(r){var o=r.offsetLeft-e.offsetLeft;e.scrollTo(o-e.offsetWidth/2+r.offsetWidth/2,0)}}}),[t,n])},Z="active",j=i.default.nav.withConfig({displayName:"categoryFilter__Nav",componentId:"sc-p3qwnv-0"})(["display:flex;align-items:center;background-color:var(--color-card);margin-bottom:48px;padding:12px var(--sizing-md);border-radius:var(--border-radius-base);a#active{color:var(--color-white);background-color:var(--color-blue);}@media (max-width:","){padding:12px;overflow:scroll;}"],(function(e){return e.theme.device.sm})),A=i.default.em.withConfig({displayName:"categoryFilter__CategoryTitle",componentId:"sc-p3qwnv-1"})(["position:static;width:auto;height:auto;clip:auto;white-space:auto;flex-shrink:0;font-size:var(--text-base);font-weight:var(--font-weight-bold);font-style:initial;margin-right:var(--sizing-lg);@media (max-width:","){position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(1px,1px,1px,1px);white-space:no-wrap;}"],(function(e){return e.theme.device.sm})),T=(0,i.default)(u.Link).withConfig({displayName:"categoryFilter__CategoryButton",componentId:"sc-p3qwnv-2"})(["cursor:pointer;display:block;background-color:var(--color-category-button);padding:var(--sizing-sm) var(--sizing-base);border-radius:var(--border-radius-base);font-size:1rem;font-weight:var(--font-weight-semi-bold);@media (max-width:","){font-size:1rem;}:focus{outline:none;}&:hover{color:var(--color-white);background-color:var(--color-blue);}&:focus-visible{color:var(--color-white);background-color:var(--color-blue);}"],(function(e){return e.theme.device.sm})),O=i.default.div.withConfig({displayName:"categoryFilter__Divider",componentId:"sc-p3qwnv-3"})(["width:1px;height:32px;margin:0 var(--sizing-sm);transform:translateX(-50%);background-color:var(--color-divider);"]),L=i.default.ul.withConfig({displayName:"categoryFilter__CategoryUl",componentId:"sc-p3qwnv-4"})(["display:flex;list-style:none;-ms-overflow-style:none;scrollbar-width:none;li + li{margin-left:6px;}"]),R=function(e){var t=e.categoryList,n=(0,o.useRef)(null),r=function(e){return e.isCurrent?{id:Z,tabIndex:-1}:{}};return S({ref:n,targetId:Z}),o.createElement(j,{"aria-label":"Category Filter"},o.createElement(A,null,"Category"),o.createElement(T,{getProps:r,to:"/"},"Show All"),o.createElement(O,null),o.createElement(L,{ref:n,className:"invisible-scrollbar"},t.sort((function(e,t){return t.totalCount-e.totalCount})).map((function(e){var t=e.fieldValue;return o.createElement("li",{key:t},o.createElement(T,{getProps:r,to:"/category/"+N()(t)+"/"},t))}))))},q=(i.default.div.withConfig({displayName:"pages__Intro",componentId:"sc-1891g3r-0"})(["position:absolute;left:350px;top:200px;font-size:2.3rem;letter-spacing:-2px;word-spacing:10px;font-weight:400;"]),i.default.div.withConfig({displayName:"pages__Content1",componentId:"sc-1891g3r-1"})(["box-sizing:content-box;width:87.5%;max-width:var(--width);padding-top:30px;padding-bottom:0px;margin:0 auto;"])),U=i.default.main.withConfig({displayName:"pages__Main",componentId:"sc-1891g3r-2"})(["min-width:var(--min-width);min-height:calc(100vh - var(--nav-height) - var(--footer-height));background-color:var(--color-background);"]),D=i.default.div.withConfig({displayName:"pages__Content",componentId:"sc-1891g3r-3"})(["box-sizing:content-box;width:87.5%;max-width:var(--width);padding-top:10px;padding-bottom:var(--sizing-lg);margin:0 auto;@media (max-width:","){padding-top:var(--grid-gap-lg);width:87.5%;}"],(function(e){return e.theme.device.sm})),G=i.default.h2.withConfig({displayName:"pages__PostTitle",componentId:"sc-1891g3r-4"})(["font-size:2rem;font-weight:var(--font-weight-extra-bold);margin-bottom:var(--sizing-md);line-height:1.21875;@media (max-width:","){font-size:1.75rem;}"],(function(e){return e.theme.device.sm})),W=function(e){var t=e.pageContext,n=e.data,i=(0,o.useState)([]),u=i[0],d=i[1],f=t.category,s=n.allMarkdownRemark.edges;(0,o.useLayoutEffect)((function(){(f?s.filter((function(e){var t,n=e.node;return(null==n||null===(t=n.frontmatter)||void 0===t?void 0:t.category)===f})):s).forEach((function(e){var t=e.node,n=t.id,o=(null==t?void 0:t.fields).slug,i=null==t?void 0:t.frontmatter,a=i.title,l=i.desc,c=i.date,u=i.category,f=i.thumbnail,s=i.alt,p=f.childImageSharp;d((function(e){return[].concat((0,r.Z)(e),[{id:n,slug:o,title:a,desc:l,date:c,category:u,thumbnail:null==p?void 0:p.id,alt:s}])}))}))}),[f,s]);var p=(0,a.Z)(),g=f||p.postTitle;return o.createElement(l.Z,null,o.createElement(c.Z,{title:"Home"}),o.createElement(U,null,o.createElement(q,null,o.createElement(R,{categoryList:n.allMarkdownRemark.group})),o.createElement(D,null,o.createElement(G,null,g),o.createElement(k,{posts:u}))))}},7949:function(e,t,n){"use strict";var r=n(9).default.span.withConfig({displayName:"category__Category",componentId:"sc-wcpv1v-0"})(["display:block;font-size:0.875rem;font-weight:var(--font-weight-semi-bold);color:var(--color-text-3);"]);t.Z=r},6277:function(e,t,n){"use strict";var r=n(9).default.time.withConfig({displayName:"dateTime__DateTime",componentId:"sc-105pimp-0"})(["margin-top:12px;font-size:0.875rem;font-weight:var(--font-weight-regular);color:var(--color-text-3);"]);t.Z=r},2705:function(e,t,n){var r=n(5639).Symbol;e.exports=r},9932:function(e){e.exports=function(e,t){for(var n=-1,r=null==e?0:e.length,o=Array(r);++n<r;)o[n]=t(e[n],n,e);return o}},2663:function(e){e.exports=function(e,t,n,r){var o=-1,i=null==e?0:e.length;for(r&&i&&(n=e[++o]);++o<i;)n=t(n,e[o],o,e);return n}},9029:function(e){var t=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(t)||[]}},4239:function(e,t,n){var r=n(2705),o=n(9607),i=n(2333),a=r?r.toStringTag:void 0;e.exports=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":a&&a in Object(e)?o(e):i(e)}},8674:function(e){e.exports=function(e){return function(t){return null==e?void 0:e[t]}}},531:function(e,t,n){var r=n(2705),o=n(9932),i=n(1469),a=n(3448),l=r?r.prototype:void 0,c=l?l.toString:void 0;e.exports=function e(t){if("string"==typeof t)return t;if(i(t))return o(t,e)+"";if(a(t))return c?c.call(t):"";var n=t+"";return"0"==n&&1/t==-Infinity?"-0":n}},5393:function(e,t,n){var r=n(2663),o=n(3816),i=n(8748),a=RegExp("['’]","g");e.exports=function(e){return function(t){return r(i(o(t).replace(a,"")),e,"")}}},9389:function(e,t,n){var r=n(8674)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=r},1957:function(e,t,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;e.exports=r},9607:function(e,t,n){var r=n(2705),o=Object.prototype,i=o.hasOwnProperty,a=o.toString,l=r?r.toStringTag:void 0;e.exports=function(e){var t=i.call(e,l),n=e[l];try{e[l]=void 0;var r=!0}catch(c){}var o=a.call(e);return r&&(t?e[l]=n:delete e[l]),o}},3157:function(e){var t=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return t.test(e)}},2333:function(e){var t=Object.prototype.toString;e.exports=function(e){return t.call(e)}},5639:function(e,t,n){var r=n(1957),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();e.exports=i},2757:function(e){var t="\\u2700-\\u27bf",n="a-z\\xdf-\\xf6\\xf8-\\xff",r="A-Z\\xc0-\\xd6\\xd8-\\xde",o="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",i="["+o+"]",a="\\d+",l="[\\u2700-\\u27bf]",c="["+n+"]",u="[^\\ud800-\\udfff"+o+a+t+n+r+"]",d="(?:\\ud83c[\\udde6-\\uddff]){2}",f="[\\ud800-\\udbff][\\udc00-\\udfff]",s="["+r+"]",p="(?:"+c+"|"+u+")",g="(?:"+s+"|"+u+")",m="(?:['’](?:d|ll|m|re|s|t|ve))?",v="(?:['’](?:D|LL|M|RE|S|T|VE))?",h="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",x="[\\ufe0e\\ufe0f]?",b=x+h+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",d,f].join("|")+")"+x+h+")*"),w="(?:"+[l,d,f].join("|")+")"+b,y=RegExp([s+"?"+c+"+"+m+"(?="+[i,s,"$"].join("|")+")",g+"+"+v+"(?="+[i,s+p,"$"].join("|")+")",s+"?"+p+"+"+m,s+"+"+v,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",a,w].join("|"),"g");e.exports=function(e){return e.match(y)||[]}},3816:function(e,t,n){var r=n(9389),o=n(9833),i=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,a=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=o(e))&&e.replace(i,r).replace(a,"")}},1469:function(e){var t=Array.isArray;e.exports=t},7005:function(e){e.exports=function(e){return null!=e&&"object"==typeof e}},3448:function(e,t,n){var r=n(4239),o=n(7005);e.exports=function(e){return"symbol"==typeof e||o(e)&&"[object Symbol]"==r(e)}},1804:function(e,t,n){var r=n(5393)((function(e,t,n){return e+(n?"-":"")+t.toLowerCase()}));e.exports=r},9833:function(e,t,n){var r=n(531);e.exports=function(e){return null==e?"":r(e)}},8748:function(e,t,n){var r=n(9029),o=n(3157),i=n(9833),a=n(2757);e.exports=function(e,t,n){return e=i(e),void 0===(t=n?void 0:t)?o(e)?a(e):r(e):e.match(t)||[]}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-2bacfd4b5fd76bde9949.js.map