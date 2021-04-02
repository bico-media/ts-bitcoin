(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{161:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return y}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),p=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=p(r),b=n,y=l["".concat(o,".").concat(b)]||l[b]||d[b]||a;return r?i.a.createElement(y,c(c({ref:t},u),{},{components:r})):i.a.createElement(y,c({ref:t},u))}));function y(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<a;u++)o[u]=r[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},86:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),i=r(7),a=(r(0),r(161)),o={title:"Public Keys"},c={unversionedId:"guides/pub-keys",id:"guides/pub-keys",isDocsHomePage:!1,title:"Public Keys",description:"A public key is a key that is derived from a private key and under normal circumstances can be shared publicly. Public keys can be used for encryption, Diffie-Helman shared secrets, and deriving addresses for receiving money. Mathematically, a public key is a point on the secp256k1 elliptic curve and it is equal to a private key times the base point.",source:"@site/docs/guides/pub-keys.md",slug:"/guides/pub-keys",permalink:"/ts-bitcoin/docs/guides/pub-keys",editUrl:"https://github.com/ts-bitcoin/ts-bitcoin/tree/master/docs/docs/guides/pub-keys.md",version:"current",sidebar:"docs",previous:{title:"Private Keys",permalink:"/ts-bitcoin/docs/guides/priv-keys"},next:{title:"Addresses",permalink:"/ts-bitcoin/docs/guides/addresses"}},s=[],u={toc:s};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A public key is a key that is derived from a private key and under normal circumstances can be shared publicly. Public keys can be used for encryption, Diffie-Helman shared secrets, and deriving addresses for receiving money. Mathematically, a public key is a point on the secp256k1 elliptic curve and it is equal to a private key times the base point."),Object(a.b)("p",null,"In this library, the PubKey class is wrapper of Point."),Object(a.b)("p",null,"To generate a new private key and the corresponding public key, use:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"const privateKey = PrivKey.fromRandom()\nconst publicKey = PubKey.fromPrivKey(privateKey)\n")),Object(a.b)("p",null,"If you wish to save or display a public key, you should use compressed hex format, and you can use the .toHex() method to do that. For example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-typescript"},"publicKey.toHex()\n\n// prints:\n// 0340a908047b5aa865e48f6c5917bc04c9d45e50ed81b43d10798b6aebe2e55ed9\n// ...or whatever your public key is corresponding to the private key.\n")))}p.isMDXComponent=!0}}]);