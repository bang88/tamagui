(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[195],{611:function(e,t,n){"use strict";n.d(t,{h:function(){return _}});var a=n(6841),i=n(9040),l=n(9097),r=n(2784),o=n(4371),c=n(3739),s=" _boxSizing-deolkf _color-1gcmrwd _display-1471scf _fontFamily-ia93fe _fontSize-fmpm7w _fontWeight-by9z28 _letterSpacing-19vwail _lineHeight-memlb2 _opacity-icoktb _wordWrap-qvutc0 _opacity--hover-6dt33c ";function _(){return r.createElement("header",{tag:"header",className:" _alignItems-1awozwy _boxSizing-deolkf _display-6koalj _flexBasis-1mlwlqe _flexDirection-18u37iz _flexShrink-1q142lx _justifyContent-1wtj0ep _paddingBottom-c618ug _paddingLeft-ll5uop _paddingRight-q7v43y _paddingTop-6j2qwp _position-bnwqim _zIndex-184en5c "},r.createElement(l.default,{href:"/",passHref:!0},r.createElement("a",{tag:"a",className:" _alignItems-1oszu61 _boxSizing-deolkf _cursor-1loqt21 _display-6koalj _flexBasis-1mlwlqe _flexDirection-eqz5dr _flexShrink-1q142lx _marginBottom-70510l _marginTop-kbtpn4 "},r.createElement("div",{className:" _alignItems-1oszu61 _boxSizing-deolkf _display-6koalj _flexBasis-1mlwlqe _flexDirection-eqz5dr _flexShrink-1q142lx _height-109y4c4 _marginBottom-1ut4w64 _marginLeft-lqms97 _marginRight-de1ba6 _marginTop-19i43ro _opacity-zjitw4 _overflowX-11yh6sk _overflowY-buy8e9 _pointerEvents-633pao _position-u8s1d _width-92ng3h _zIndex-qpiwx7 "},r.createElement("span",{className:" _boxSizing-deolkf _display-1471scf _fontFamily-187pbxx _wordWrap-qvutc0 "},"Tamagui homepage")),r.createElement(a.Xe,null))),r.createElement("div",{className:" _alignItems-1awozwy _bottom-1p0dtai _boxSizing-deolkf _display-6koalj _flexBasis-1mlwlqe _flexDirection-18u37iz _flexShrink-1q142lx _justifyContent-1777fci _left-1d2f490 _position-u8s1d _right-zchlnj _top-ipm5af  _pointerEvents-633pao _zIndex-1wyyakw  _display-_sm_hvic4v"},r.createElement(a.Pk,null)),r.createElement(o.s,{tag:"nav",space:"$6",className:" _alignItems-1awozwy _boxSizing-deolkf _display-6koalj _flexBasis-1mlwlqe _flexDirection-18u37iz _flexShrink-1q142lx _pointerEvents-105ug2t "},r.createElement(l.default,{href:"/docs/intro/installation",passHref:!0},r.createElement("a",{tag:"a",className:s},"Docs")),r.createElement(l.default,{href:"/blog",passHref:!0},r.createElement("a",{tag:"a",className:s},"Blog")),r.createElement(c.X,null),r.createElement(i.T,null)))}},6668:function(e,t,n){"use strict";n.d(t,{H:function(){return m}});var a=n(7729),i=n(5632),l=n(2784);function r(e,t){var n="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"===typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e))||t&&e&&"number"===typeof e.length){n&&(e=n);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,r=!0,c=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return r=e.done,e},e:function(e){c=!0,l=e},f:function(){try{r||null==n.return||n.return()}finally{if(c)throw l}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;function m(e){var t,n=e,o=n.url,m=void 0===o?"https://tamagui.dev":o,f=n.pathname,u=n.title,p=void 0===u?"Tamagui":u,d=n.description,g=void 0===d?"":d,y=n.poster,h=function(e,t){var n={};for(var a in e)s.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c){var i,l=r(c(e));try{for(l.s();!(i=l.n()).done;)a=i.value,t.indexOf(a)<0&&_.call(e,a)&&(n[a]=e[a])}catch(o){l.e(o)}finally{l.f()}}return n}(n,["url","pathname","title","description","poster"]),w=(0,i.useRouter)(),v=null!=(t=h.image)?t:y?"".concat(m,"/").concat(y):"".concat(m,"/social.png"),x=f||w.pathname;return l.createElement(a.default,null,l.createElement("title",null,p),l.createElement("meta",{name:"description",content:g}),l.createElement("meta",{name:"viewport",content:"width=device-width"}),l.createElement("link",{rel:"icon",href:"/favicon.png"}),l.createElement("link",{rel:"icon",href:"/favicon.svg",type:"image/svg+xml"}),l.createElement("meta",{property:"og:url",content:"".concat(m).concat(x)}),l.createElement("meta",{property:"og:title",content:p}),l.createElement("meta",{property:"og:description",content:g}),l.createElement("meta",{property:"og:image",content:v}),l.createElement("meta",{name:"twitter:site",content:"@tamagui_dev"}),l.createElement("meta",{name:"twitter:card",content:"summary_large_image"}))}},3641:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return u},default:function(){return p}});var a=n(611),i=n(6668),l=n(8840),r=n(3021),o=n(1807),c=n(2784),s=n(1801),_=n(4371),m=n(2675),f=n(9715),u=!0;function p(e){var t=e.frontmatters;return c.createElement(c.Fragment,null,c.createElement(i.H,{title:"Blog \u2014 Tamagui",description:"What's up with Tamagui."}),c.createElement(a.h,null),c.createElement(m.W,{ai:"center"},c.createElement(s.H1,{accessibilityRole:"header",className:" _boxSizing-deolkf _color-1gcmrwd _display-1471scf _fontFamily-144z2zw _fontSize-1ruxd8i _fontWeight-b88u0q _letterSpacing-16krg75 _lineHeight-10afay3 _marginBottom-1y8qy0p _wordWrap-qvutc0 "},"Blog"),c.createElement("h2",{tag:"h2",className:" _boxSizing-deolkf _color-17rf3w5 _display-1471scf _fontFamily-ia93fe _fontSize-gx9jbw _letterSpacing-1if7pb1 _lineHeight-1swc4fo _wordWrap-qvutc0  _color-17rf3w5 _fontWeight-1od2jal "},"What's new with Tamagui")),c.createElement(m.W,{mt:"$6",mb:"$7"},t.map((function(e){return c.createElement("div",{key:e.title,className:" _alignItems-1oszu61 _boxSizing-deolkf _display-6koalj _flexBasis-1mlwlqe _flexDirection-eqz5dr _flexShrink-1q142lx "},c.createElement(_.F,{space:"$2",className:" _alignItems-1oszu61 _boxSizing-deolkf _display-6koalj _flexBasis-1mlwlqe _flexDirection-eqz5dr _flexShrink-1q142lx _marginBottom-1bx65tq "},c.createElement(f.r,{href:e.slug,passHref:!0},c.createElement(s.H3,{accessibilityRole:"header",className:" _boxSizing-deolkf _color-1gcmrwd _display-1471scf _fontFamily-144z2zw _fontSize-27v78f _fontWeight-b88u0q _letterSpacing-1iidw5 _lineHeight-f1tnfd _wordWrap-qvutc0 "},e.title)),c.createElement("div",{className:" _alignItems-1oszu61 _boxSizing-deolkf _display-6koalj _flexBasis-1mlwlqe _flexDirection-18u37iz _flexShrink-1q142lx "},c.createElement("time",{tag:"time",className:" _boxSizing-deolkf _color-scmqyp _display-1471scf _fontFamily-ia93fe _fontSize-xhjkfv _fontWeight-1l8u9vb _letterSpacing-16zsm3a _lineHeight-ueinmy _wordWrap-qvutc0  _color-scmqyp "},(0,r.Z)((0,o.Z)(e.publishedAt),"MMMM yyyy")),c.createElement("span",{className:" _boxSizing-deolkf _color-scmqyp _display-1471scf _fontFamily-ia93fe _fontSize-xhjkfv _fontWeight-1l8u9vb _letterSpacing-16zsm3a _lineHeight-ueinmy _wordWrap-qvutc0 "},"\xa0by ",l.o[e.by].name),"changelog"===e.type&&c.createElement(Badge,{css:{ml:"$2"}},"Changelog")),c.createElement("span",{className:" _boxSizing-deolkf _color-scmqyp _display-1471scf _fontFamily-ia93fe _fontSize-fzrsgv _fontWeight-1k2qt2l _letterSpacing-1vhldrj _lineHeight-1en2a72 _wordWrap-qvutc0 "},e.description)))}))))}},8840:function(e,t,n){"use strict";n.d(t,{o:function(){return a}});var a={nate:{name:"Nate Wienert",twitter:"natebirdman",avatar:""}}},7423:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog",function(){return n(3641)}])}},function(e){e.O(0,[251,774,888,179],(function(){return t=7423,e(e.s=t);var t}));var t=e.O();_N_E=t}]);