(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[98462],{198462:(e,t,n)=>{n.d(t,{cA:()=>P,fM:()=>O,N5:()=>Z});var r=n(667294),o=n(991067),i=n(435851),a=n(172071),c=n(31062),s=n(383434),u=n(938085);const d=(0,s.X)("LayoutShiftDebugger"),l=e=>e instanceof HTMLElement&&e.dataset&&(e.dataset.layoutShiftBoundaryId||e.dataset.testId)||e.parentNode&&l(e.parentNode)||null,p=e=>Math.round(1e3*e);let f=[];const m=({staticContext:e,getCurrentRoute:t,getLastNavigationTime:n})=>{const r=(0,c.Jx)({annotateMarks:["initialAppLoad","RenderReactContainer"],name:"cumulative_layout_shift",pwtStaticContext:e});let o=0;const s=e=>{o=e.timeStamp};window.addEventListener("scroll",s),window.addEventListener("beforeunload",(()=>{window.removeEventListener("scroll",s)}));const m=`${(0,i.Z)(e)}.CLS`,v=()=>(e=>{let t=Object.freeze({}),n=0;f.forEach((({value:e,shift:{sources:r},route:o,params:i,hadRecentNavigation:a,hadRecentScroll:c,isAuth:s})=>{if(n+=e,!r||!r.length)return;const u=e/r.length;r.forEach((({node:e})=>{const n=e?l(e)||"ROOT":"NODE_REMOVED",r=i&&i.scope?i.scope:"none",d={route:o,searchScope:r,boundaryId:n,hadRecentNavigation:a,hadRecentScroll:c,isAuth:s},p=JSON.stringify(d);t={...t,[p]:{score:((t[p]||{}).score||0)+u,tags:d}}}))})),Object.keys(t).forEach((n=>{const{score:r,tags:o}=t[n];a.Z.count(`${e}.shifts`,p(r),1,{...o})})),d("Debug CLS boundaries",n,t,f),f=[]})(m);let h,g=0,w=0,E=0;(0,u.kz)((({entries:r,value:i})=>{if(E=i||0,r.length){const{path:a,params:c}=t();h=n();const s=r[0].startTime,u=g!==s,d=u?r:r.slice(w);u&&(g=s),f=f.concat(d.map((t=>({value:i,shift:t,route:a,params:c,hadRecentNavigation:h>0&&h+500>t.startTime,hadRecentScroll:o>0&&o+500>t.startTime,isAuth:e.isAuthenticated})))),w=r.length}}),!0);const S=setInterval((()=>{if(f.length){v();const t=(e=E)<=.1?"good":e<=.25?"adequate":"poor";a.Z.count(`${m}.${t}`,1,1),r.stop(p(E))}var e}),1e3);window.addEventListener("beforeunload",(()=>{clearInterval(S),0===E&&r.abort("no_shifts_detected")}))};var v=n(311560),h=n(69028);var g=n(361115),w=n(156381);const E=e=>Number(e.toFixed(2)),S={pin_closeup:{LCP:"pin_closeup_lcp",FID:"pin_closeup_fid"},board:{LCP:"board_lcp",FID:"board_fid"},other_profile:{LCP:"other_profile_lcp",FID:"other_profile_fid"},topic:{LCP:"topic_lcp",FID:"topic_fid"}},_=["CA","GB","DE","FR","AU","JP","BR","MX"],C=({surface:e,pwtStaticContext:t})=>{const n=t.isAuthenticated?"web_react18_render_auth":"web_react18_render_unauth";switch(e){case"pin_closeup":return[(0,g.v8)({getExperimentGroup:e=>{var n;return null!==(n=t.getExperimentGroup(e))&&void 0!==n?n:""},isAuthenticated:t.isAuthenticated,isDesktop:"desktop"===t.deviceType}),n];default:return[n]}},y=({pwtStaticContext:e,surface:t})=>{const n="pin_closeup"===t||"board"===t||"other_profile"===t||"topic"===t?(({pwtStaticContext:e,surface:t})=>{const n=(0,c.Jx)({annotateExperiments:C({surface:t,pwtStaticContext:e}),annotateResourceTimingForSurface:t,annotateMarks:["initialAppLoad","RenderReactContainer",...e.isAuthenticated?[]:["firstClientRenderUnauthPageWrapper","mountUnauthPageWrapper"],..."pin_closeup"===t?["firstClientRenderCloseupPage","firstClientRenderCloseupImage"]:[]],name:S[t].LCP,pwtStaticContext:e}),r=(0,c.Jx)({name:S[t].FID,pwtStaticContext:e});return(e,t)=>{"LCP"===e?n.stop(t):"FID"===e&&r.stop(t)}})({pwtStaticContext:e,surface:t}):null,{isAuthenticated:r,isBot:o,isSocialBot:s,deviceType:d,country:l,fullPath:p,browserName:f,osName:m}=e,g={},y=(c,u,w)=>{if(!g[c]){g[c]=!0;const E=(0,i.Z)(e),S=`${E}.${t}.${c}`,C=`${E}.tags.${t}.${c}`;let y;if(y="iOS"===m&&"Chrome"===f?"iOS_Chrome":"CrUX","LCPCount"===c)a.Z.count(`${S}.sum`,u,1),a.Z.increment(`${S}.size`,1);else{const e=(0,v.Z)(l),i=(0,h.Z)(p);"FID"===c||"FIDStartTime"===c?(a.Z.timing(`${S}`,u,1),a.Z.timing(`${C}`,u,1,{timingBucket:null==w?void 0:w.timingBucket,isAuth:r,CrUXSegment:y,region:e,..."pin_closeup"===t&&("feedback"===i||"sent"===i||"default"===i)&&{pinType:i}})):(a.Z.timing(`${S}`,u,1),a.Z.timing(`${C}`,u,1,{isAuth:r,CrUXSegment:y,region:e,..."pin_closeup"===t&&("feedback"===i||"sent"===i||"default"===i)&&{pinType:i}})),!r&&_.includes(l)&&(({botType:e,deviceType:t,isChrome:n,region:r})=>{const o=`pwtlogger.${e}.${t}`,i=["all",...r?[r.toLowerCase()]:[]],a=["all",...n?["chrome"]:[]],c=[];return i.forEach((e=>{a.forEach((t=>{c.push(`${o}.region_${e}.browser_${t}`)}))})),c})({botType:(s?"socialBot":o&&"bot")||"nonbot",deviceType:d,isChrome:!0,region:e}).forEach((e=>{a.Z.timing(`${e}.tags.growthSEO.${t}_${c}`,u,1,{country:l})})),n&&n(c,u)}}};(0,u.Tx)((({value:e})=>{const t=(0,w.Af)();let n;n=e<=100?"Good":e>100&&e<=300?"Needs Improvement":"Poor",y("FID",E(e),{timingBucket:n}),t&&y("FIDStartTime",E(t),{timingBucket:n})})),(0,u.Tb)((({value:e})=>{y("LCPCount",(0,w.Kj)()),y("LCP",(e=>10*Math.round(e/10))(e))})),(0,u.Y)((({value:e})=>y("FCP",e)))};var T=n(790348);let A=null;const L=e=>{switch(e){case"/":return"homefeed";case"/pin/:id":return"pin_closeup";case"/pin/:id/visual-search":return"flashlight";case"/:username/:slug":return"board";case"/:username":return"other_profile";case"/search/:scope":return"search";case"/ideas/:interest/:id":return"topic";default:return null}};var b=n(969853),x=n(543059),R=n(7789),k=n(22773),$=n(276775),I=n(785893);const B=(0,r.createContext)(null),D=(0,r.createContext)(null);function P({children:e,immutableLocation:t,resourceTimingCacheSize:n,routerHistoryAction:i,staticContext:a}){const s=(0,r.useRef)(null),u=(0,r.useRef)(null),d=(0,r.useRef)(t),l=(0,r.useRef)(!0),{path:p,params:f}=(0,$.useRouteMatch)(),v=(0,r.useRef)(p),h=(0,r.useRef)(f),g=!a.isCachedRender&&(0,o.Z)(a.deviceType);(0,r.useEffect)((()=>{v.current=p}),[p]),(0,r.useEffect)((()=>{h.current=f}),[f]),(0,r.useEffect)((()=>{if((0,k.X_)({size:n||1e3}),(0,w.UQ)(),(0,T.A9)("totalSessionVolume"),window.performance?["clearMarks","clearMeasures","clearResourceTimings","getEntries","getEntriesByName","getEntriesByType","mark","measure","now","setResourceTimingBufferSize"].forEach((e=>{window.performance[e]||(0,T.A9)(`not_supported.window.performance.${e}`)})):(0,T.A9)("not_supported.window.performance"),window.PerformanceObserver||(0,T.A9)("not_supported.window.PerformanceObserer"),(0,b.v)()||(0,T.A9)("not_supported.grid_profiler"),l.current=!1,g&&!R.is){if(((e,t)=>{let n,r=0,o=0,i=null,a=null,s=null,u=null,d=[];const l=()=>{o+=1,s=window.requestAnimationFrame(l)},p=()=>{if(u){const n=d.some((e=>null!==i&&i-e>0&&i-e<=500)),o=t(),{isAuthenticated:s}=e;if(n){const t=(0,c.Jx)({name:"scroll_session",pwtStaticContext:e});if(!t)return;const n={surface:o,isAuthenticated:s};if(null===i||null===a||0===r)if(null===i&&null===a)t.error("no_duration",n);else if(null==i)A=a,t.error("no_start",n);else if(null==a){let e;e=A&&i-A<750?"no_end.outside_window":"no_end.single_event",t.error(e,n)}else t.error("no_frames",n);else{A=a;const e=a-i,c=e/r;0===c?t.error("zero_value",n):c<0?t.error("negative_value",n):(t.addBinaryAnnotation("surface",o,"STRING"),t.addBinaryAnnotation("isAuthenticated",s,"BOOL"),t.addBinaryAnnotation("duration_ms",e,"I32"),t.addBinaryAnnotation("total_frames_rendered",r,"I16"),t.stop(c))}}else(0,T.A9)("WARN.scroll_session.not_user",{tags:{isAuthenticated:s,surface:o}})}window.cancelAnimationFrame(s),r=0,o=0,d=[],a=null,i=null,u=null},f=({timeStamp:e})=>{n&&clearTimeout(n),n=setTimeout(p,500),null===u?(u=100*Math.random()<10,u&&(s=window.requestAnimationFrame(l),i=e)):u&&(a=e,r+=o,o=0)},m=({timeStamp:e})=>{d.push(e)};["wheel","pointerdown","keydown"].forEach((e=>{window.addEventListener(e,m,{passive:!0,capture:!0})})),window.addEventListener("scroll",f,{passive:!0}),window.addEventListener("pagehide",(()=>{window.removeEventListener("scroll",f),["wheel","pointerdown","keydown"].forEach((e=>{window.removeEventListener(e,m)}))}))})(a,(()=>L(v.current)?L(v.current)||"UNKNOWN_SURFACE":v.current||"UNKNOWN_SURFACE")),"Chrome"===a.browserName){m({staticContext:a,getCurrentRoute:()=>({path:v.current,params:h.current}),getLastNavigationTime:()=>u.current||0});const e=L(v.current);e&&y({pwtStaticContext:a,surface:e})}}}),[]);var E,S;if(E=t.pathname,["/advertiser/"].reduce(((e,t)=>E.includes(t)||e),!1)?d.current.pathname!==t.pathname:d.current!==t){d.current=t,u.current=null!==(S=window.performance)&&void 0!==S&&S.now?window.performance.now():null;const{current:e}=u;if(!l.current){const t=!s.current;(0,T.A9)("routeStart",{tags:{action:i}}),(0,k.Eg)(t),(0,w.Ux)(t),(0,w.on)(),(0,x.tl)();const{customBufferSize:n,defaultBufferSize:r}=(0,k.LH)();e&&((0,T.A9)("routeStart.customBufferSize",{count:n}),(0,T.A9)("routeStart.defaultBufferSize",{count:r}),s.current={time:e,action:i})}}return(0,I.jsx)(B.Provider,{value:g?a:null,children:(0,I.jsx)(D.Provider,{value:s.current,children:e})})}const O=()=>(0,r.useContext)(D),Z=()=>(0,r.useContext)(B)},607150:(e,t,n)=>{n.d(t,{D3:()=>i,Hd:()=>s,jh:()=>c,rX:()=>a});var r=n(672115),o=n(156381);const i=e=>({...(0,r.Z)(e),domComplete:e.domComplete||0,domContentLoadedEventEnd:e.domContentLoadedEventEnd||0,domContentLoadedEventStart:e.domContentLoadedEventStart||0,domInteractive:e.domInteractive||0,loadEventEnd:e.loadEventEnd||0,loadEventStart:e.loadEventStart||0}),a=()=>{const{firstInputDelay:e,largestContentfulPaint:t}=(0,o.v2)();return{firstInputDelayStart:(null==e?void 0:e.startTime)||0,firstInputDelayEnd:(null==e?void 0:e.endTime)||0,largestContentfulPaint:t||0}},c=(e,t)=>Object.keys(t).reduce(((n,r)=>({...n,[`${e}${r}`]:t[r]})),{}),s=(e,t)=>Object.keys(e).reduce(((n,r)=>t.includes(r)?{...n,[r]:e[r]}:n),Object.freeze({}))},672115:(e,t,n)=>{n.d(t,{Z:()=>r});const r=e=>({connectEnd:e.connectEnd||0,connectStart:e.connectStart||0,domainLookupEnd:e.domainLookupEnd||0,domainLookupStart:e.domainLookupStart||0,fetchStart:e.fetchStart||0,requestStart:e.requestStart||0,redirectEnd:e.redirectEnd||0,redirectStart:e.redirectStart||0,responseEnd:e.responseEnd||0,responseStart:e.responseStart||0,secureConnectionStart:e.secureConnectionStart||0,startTime:e.startTime||0,workerStart:e.workerStart||0,unloadEventStart:e.unloadEventStart||0,unloadEventEnd:e.unloadEventEnd||0})},505771:(e,t,n)=>{n.d(t,{Z:()=>c});var r=n(358864),o=n(672115),i=n(528961);const a=({category:e,isDeferred:t,isExternal:n})=>[e].concat(t?["deferred"]:[]).concat(n?["external"]:[]).join("_");function c(e,t){const{category:n,timing:c,isDeferred:s,isExternal:u,isVisuallyCompleteRequired:d}=e;return c.responseEnd&&("image"!==n||d)?{name:a(e),id:(0,r.Z)(),parentId:t,startTime:c.startTime,endTime:c.responseEnd,annotationMap:(0,o.Z)(c),binaryAnnotationMap:{category:(0,i.sk)(n),decodedBodySize:(0,i.cC)(c.decodedBodySize||0),initiatorType:(0,i.sk)(c.initiatorType),isDeferred:(0,i.qr)(s),isExternal:(0,i.qr)(u),name:(0,i.sk)(c.name),nextHopProtocol:(0,i.sk)(c.nextHopProtocol),transferSize:(0,i.cC)(c.transferSize||0)}}:null}},31062:(e,t,n)=>{n.d(t,{ku:()=>A,Jx:()=>C,PY:()=>T});var r=n(860273),o=n(156381);const i=()=>(0,o.PJ)().reduce(((e,{identifier:t,loadTime:n,renderTime:r})=>e[`${t}_loadTime`]?e[`${t}_dupe_loadTime`]?{...e,[`${t}_dupe_loadTime`]:n,[`${t}_dupe_renderTime`]:r}:e:{...e,[`${t}_loadTime`]:n,[`${t}_renderTime`]:r}),Object.freeze({}));var a=n(672115),c=n(607150),s=n(22773),u=n(464609);const d=e=>{switch(e){case"pin_closeup":{const e=(0,u.Z)();return(e=>{const t=(0,s.y0)();return e.reduce(((e,{name:n,match:r})=>t.filter((e=>r(e))).slice(0,2).reduce(((e,t,r)=>({...e,...(0,c.jh)(`${n}${r?"_dupe1":""}_`,(0,a.Z)(t))})),e)),Object.freeze({}))})([{name:"mainImage",match:({name:t})=>t===e},{name:"PinResource",match:({name:e})=>e.includes("PinResource")}])}default:return{}}};var l=n(169213),p=n(358864),f=n(558775),m=n(505771),v=n(383434),h=n(543059),g=n(453821),w=n(638089),E=n(790348);const S=(0,v.X)("LightStopwatch"),_={},C=({annotateExperiments:e,annotateMarks:t,annotateResourceTimingForSurface:n,name:o,pwtStaticContext:a})=>{const s=(()=>{let e=[],t=null;if(window.PerformanceObserver){const n=1e3;t=(0,l.Z)({entryTypes:["resource"]},(t=>{e=e.concat(t.getEntries()),e.length>n&&(e=e.slice(-n))}))}return{get:()=>e,disconnect:()=>{t&&t.disconnect()}}})();let u=!0,v={};(0,E.A9)(`TIMING.${o}`,{tags:{isAuth:a.isAuthenticated}});const C={type:"stopwatch",name:o,navigationType:"initial_app_load"},y={abort:e=>{u?(u=!1,(0,f.Z)({metricId:C,pwtStaticContext:a,result:{type:"ABORT",reason:e}})):(0,E.H)("duplicate_abort_action",{action:o})},error:(e,t)=>{const n={...t,action:o};u?(e&&(0,E.H)(e,n),s&&s.disconnect(),u=!1):(0,E.H)("duplicate_error_action",n)},stop:l=>{if(!u)return void(0,E.H)("duplicate_stop_action",{action:o});u=!1,s.disconnect();const S=(0,p.Z)(),_=(0,r.Z)(),y=s.get(),T={type:"COMPLETE",traceId:(0,p.Z)(),startTime:0,endTime:l,spans:[{name:"network_resources",id:S,startTime:0,endTime:l,annotationMap:{},binaryAnnotationMap:{},parentId:null},...y.map((e=>(0,m.Z)((0,g.p)(e,[]),S))).filter(Boolean)],annotationMap:{...(0,c.jh)("resource_",n?d(n):{}),...(0,c.jh)("element_",i()),...(0,c.jh)("mark_",t&&t.length?(0,c.Hd)((0,h.gQ)(),t):{}),...(0,c.jh)("browser_",_?(0,c.D3)(_):{})},binaryAnnotationMap:(0,w.ng)({annotateExperiments:e,metricId:C,pwtStaticContext:a,performanceResourceTimings:y,binaryAnnotations:v})};(0,f.Z)({metricId:C,pwtStaticContext:a,result:T,isAuth:a.isAuthenticated})},addBinaryAnnotation:(e,t,n)=>{S(`adding binary annotation {${e}: ${String(t)}}`),v={...v,[e]:{value:t,type:n}}}};return _[o]=y,y},y=e=>_[e],T=e=>!!y(e),A=({stopwatchName:e,binaryAnnotationName:t,value:n,annotationType:r})=>{const o=y(e);o&&o.addBinaryAnnotation(t,n,r)}},435851:(e,t,n)=>{n.d(t,{Z:()=>r});const r=e=>{const{deviceType:t,isBot:n,isSocialBot:r}=e;return`coreWebVitalsLite.v1.${(r?"socialBot":n&&"bot")||"nonbot"}.${t}`}},69028:(e,t,n)=>{function r(e){return e.split("/")[3]||"default"}n.d(t,{Z:()=>r})},464609:(e,t,n)=>{n.d(t,{Z:()=>o,f:()=>r});const r="closeupImage",o=()=>{if(!document.querySelector)return null;const e=document.querySelector('head>link[rel="preload"][as="image"][href^="https://i.pinimg.com/"]');return e instanceof HTMLLinkElement?e.href:null}},938085:(e,t,n)=>{n.d(t,{CA:()=>O,Tb:()=>D,Tx:()=>I,Y:()=>T,kz:()=>A});var r,o,i,a,c=-1,s=function(e){addEventListener("pageshow",(function(t){t.persisted&&(c=t.timeStamp,e(t))}),!0)},u=function(){return window.performance&&performance.getEntriesByType&&performance.getEntriesByType("navigation")[0]},d=function(){var e=u();return e&&e.activationStart||0},l=function(e,t){var n=u(),r="navigate";return c>=0?r="back-forward-cache":n&&(r=document.prerendering||d()>0?"prerender":document.wasDiscarded?"restore":n.type.replace(/_/g,"-")),{name:e,value:void 0===t?-1:t,rating:"good",delta:0,entries:[],id:"v3-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12),navigationType:r}},p=function(e,t,n){try{if(PerformanceObserver.supportedEntryTypes.includes(e)){var r=new PerformanceObserver((function(e){Promise.resolve().then((function(){t(e.getEntries())}))}));return r.observe(Object.assign({type:e,buffered:!0},n||{})),r}}catch(e){}},f=function(e,t,n,r){var o,i;return function(a){t.value>=0&&(a||r)&&((i=t.value-(o||0))||void 0===o)&&(o=t.value,t.delta=i,t.rating=function(e,t){return e>t[1]?"poor":e>t[0]?"needs-improvement":"good"}(t.value,n),e(t))}},m=function(e){requestAnimationFrame((function(){return requestAnimationFrame((function(){return e()}))}))},v=function(e){var t=function(t){"pagehide"!==t.type&&"hidden"!==document.visibilityState||e(t)};addEventListener("visibilitychange",t,!0),addEventListener("pagehide",t,!0)},h=function(e){var t=!1;return function(n){t||(e(n),t=!0)}},g=-1,w=function(){return"hidden"!==document.visibilityState||document.prerendering?1/0:0},E=function(e){"hidden"===document.visibilityState&&g>-1&&(g="visibilitychange"===e.type?e.timeStamp:0,_())},S=function(){addEventListener("visibilitychange",E,!0),addEventListener("prerenderingchange",E,!0)},_=function(){removeEventListener("visibilitychange",E,!0),removeEventListener("prerenderingchange",E,!0)},C=function(){return g<0&&(g=w(),S(),s((function(){setTimeout((function(){g=w(),S()}),0)}))),{get firstHiddenTime(){return g}}},y=function(e){document.prerendering?addEventListener("prerenderingchange",(function(){return e()}),!0):e()},T=function(e,t){t=t||{},y((function(){var n,r=[1800,3e3],o=C(),i=l("FCP"),a=p("paint",(function(e){e.forEach((function(e){"first-contentful-paint"===e.name&&(a.disconnect(),e.startTime<o.firstHiddenTime&&(i.value=Math.max(e.startTime-d(),0),i.entries.push(e),n(!0)))}))}));a&&(n=f(e,i,r,t.reportAllChanges),s((function(o){i=l("FCP"),n=f(e,i,r,t.reportAllChanges),m((function(){i.value=performance.now()-o.timeStamp,n(!0)}))})))}))},A=function(e,t){t=t||{},T(h((function(){var n,r=[.1,.25],o=l("CLS",0),i=0,a=[],c=function(e){e.forEach((function(e){if(!e.hadRecentInput){var t=a[0],n=a[a.length-1];i&&e.startTime-n.startTime<1e3&&e.startTime-t.startTime<5e3?(i+=e.value,a.push(e)):(i=e.value,a=[e])}})),i>o.value&&(o.value=i,o.entries=a,n())},u=p("layout-shift",c);u&&(n=f(e,o,r,t.reportAllChanges),v((function(){c(u.takeRecords()),n(!0)})),s((function(){i=0,o=l("CLS",0),n=f(e,o,r,t.reportAllChanges),m((function(){return n()}))})),setTimeout(n,0))})))},L={passive:!0,capture:!0},b=new Date,x=function(e,t){r||(r=t,o=e,i=new Date,$(removeEventListener),R())},R=function(){if(o>=0&&o<i-b){var e={entryType:"first-input",name:r.type,target:r.target,cancelable:r.cancelable,startTime:r.timeStamp,processingStart:r.timeStamp+o};a.forEach((function(t){t(e)})),a=[]}},k=function(e){if(e.cancelable){var t=(e.timeStamp>1e12?new Date:performance.now())-e.timeStamp;"pointerdown"==e.type?function(e,t){var n=function(){x(e,t),o()},r=function(){o()},o=function(){removeEventListener("pointerup",n,L),removeEventListener("pointercancel",r,L)};addEventListener("pointerup",n,L),addEventListener("pointercancel",r,L)}(t,e):x(t,e)}},$=function(e){["mousedown","keydown","touchstart","pointerdown"].forEach((function(t){return e(t,k,L)}))},I=function(e,t){t=t||{},y((function(){var n,i=[100,300],c=C(),u=l("FID"),d=function(e){e.startTime<c.firstHiddenTime&&(u.value=e.processingStart-e.startTime,u.entries.push(e),n(!0))},m=function(e){e.forEach(d)},g=p("first-input",m);n=f(e,u,i,t.reportAllChanges),g&&v(h((function(){m(g.takeRecords()),g.disconnect()}))),g&&s((function(){var c;u=l("FID"),n=f(e,u,i,t.reportAllChanges),a=[],o=-1,r=null,$(addEventListener),c=d,a.push(c),R()}))}))},B={},D=function(e,t){t=t||{},y((function(){var n,r=[2500,4e3],o=C(),i=l("LCP"),a=function(e){var t=e[e.length-1];if(t){var r=Math.max(t.startTime-d(),0);r<o.firstHiddenTime&&(i.value=r,i.entries=[t],n())}},c=p("largest-contentful-paint",a);if(c){n=f(e,i,r,t.reportAllChanges);var u=h((function(){B[i.id]||(a(c.takeRecords()),c.disconnect(),B[i.id]=!0,n(!0))}));["keydown","click"].forEach((function(e){addEventListener(e,u,!0)})),v(u),s((function(o){i=l("LCP"),n=f(e,i,r,t.reportAllChanges),m((function(){i.value=performance.now()-o.timeStamp,B[i.id]=!0,n(!0)}))}))}}))},P=function e(t){document.prerendering?y((function(){return e(t)})):"complete"!==document.readyState?addEventListener("load",(function(){return e(t)}),!0):setTimeout(t,0)},O=function(e,t){t=t||{};var n=[800,1800],r=l("TTFB"),o=f(e,r,n,t.reportAllChanges);P((function(){var i=u();if(i){var a=i.responseStart;if(a<=0||a>performance.now())return;r.value=Math.max(a-d(),0),r.entries=[i],o(!0),s((function(){r=l("TTFB",0),(o=f(e,r,n,t.reportAllChanges))(!0)}))}}))}}}]);
//# sourceMappingURL=https://sm.pinimg.com/webapp/98462-b60d84b595146520.mjs.map