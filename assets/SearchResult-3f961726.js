import{a as M,b as j,n as O,c as V,m as W,l as _,d as z,y as B,h as J,e as N,f as T,r as L,g as X,i as Y,L as Z,H as ee}from"./app-1c47275a.js";import{c as te,D as ae,K as se,r as g,h as w,w as x,j as t,R as Q,G as le,i as ue}from"./framework-83fdd257.js";const re="search-pro-result-history",o=M(re,[]),ne=()=>{const{resultHistoryCount:u}=L,c=u>0;return{enabled:c,resultHistory:o,addResultHistory:l=>{c&&(o.value.length<u?o.value=[l,...o.value]:o.value=[l,...o.value.slice(0,u-1)])},removeResultHistory:l=>{o.value=[...o.value.slice(0,l),...o.value.slice(l+1)]}}},oe=u=>{const c=j(),l=g(!1),h=g([]);let i;const v=T(d=>{l.value=!0,i==null||i.terminate(),d?(i=new Worker(`/${L.worker}`,{}),i.addEventListener("message",({data:f})=>{h.value=f,l.value=!1}),i.postMessage({query:d,routeLocale:c.value})):(h.value=[],l.value=!1)},L.delay);return x([u,c],()=>v(u.value),{immediate:!0}),{searching:l,results:h}};var ve=te({name:"SearchResult",props:{query:{type:String,required:!0}},emits:["close","updateQuery"],setup(u,{emit:c}){const l=X(),h=ae(),i=j(),v=O(Y),{addQueryHistory:d}=Z(),{enabled:f,resultHistory:b,addResultHistory:q,removeResultHistory:A}=ne(),$=se(u,"query"),{results:y,searching:E}=oe($),r=g(0),s=g(0),D=w(()=>b.value.length>0),R=w(()=>y.value.length>0),H=w(()=>y.value[r.value]||null),U=()=>{r.value=r.value>0?r.value-1:y.value.length-1,s.value=H.value.contents.length-1},F=()=>{r.value=r.value<y.value.length-1?r.value+1:0,s.value=0},G=()=>{s.value<H.value.contents.length-1?s.value=s.value+1:F()},I=()=>{s.value>0?s.value=s.value-1:U()},C=e=>e.map(a=>ue(a)?a:t(a[0],a[1])),S=e=>{if(e.type==="custom"){const a=ee[e.index]||"$content",[p,m=""]=le(a)?a[i.value].split("$content"):a.split("$content");return C([p,...e.display,m])}return C(e.display)},k=()=>{r.value=0,s.value=0,c("updateQuery",""),c("close")};return V("keydown",e=>{if(R.value){if(e.key==="ArrowUp")I();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const a=H.value.contents[s.value];l.value.path!==a.path&&(d(u.query),q(a),h.push(a.path),k())}}}),x([r,s],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>t("div",{class:["search-pro-result",{empty:$.value?!R.value:!D.value}],id:"search-pro-results"},$.value===""?D.value?t("ul",{class:"search-pro-result-list"},t("li",{class:"search-pro-result-list-item"},[t("div",{class:"search-pro-result-title"},v.value.history),b.value.map((e,a)=>t(Q,{to:e.path,class:["search-pro-result-item",{active:s.value===a}],onClick:()=>{k()}},()=>[t(W,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[e.type==="content"&&e.header?t("div",{class:"content-header"},e.header):null,t("div",S(e))]),t("button",{class:"search-pro-close-icon",onClick:p=>{p.preventDefault(),p.stopPropagation(),A(a)}},t(_))]))])):f?v.value.emptyHistory:v.value.emptyResult:E.value?t(z,{hint:v.value.searching}):R.value?t("ul",{class:"search-pro-result-list"},y.value.map(({title:e,contents:a},p)=>{const m=r.value===p;return t("li",{class:["search-pro-result-list-item",{active:m}]},[t("div",{class:"search-pro-result-title"},e||"Documentation"),a.map((n,K)=>{const P=m&&s.value===K;return t(Q,{to:n.path,class:["search-pro-result-item",{active:P,"aria-selected":P}],onClick:()=>{d(u.query),q(n),k()}},()=>[n.type==="content"?null:t(n.type==="title"?B:n.type==="heading"?J:N,{class:"search-pro-result-type"}),t("div",{class:"search-pro-result-content"},[n.type==="content"&&n.header?t("div",{class:"content-header"},n.header):null,t("div",S(n))])])})])})):v.value.emptyResult)}});export{ve as default};
