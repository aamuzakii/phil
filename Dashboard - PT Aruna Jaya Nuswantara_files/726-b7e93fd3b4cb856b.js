"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[726],{7898:function(t,n,e){var r=e(9669),o=e.n(r);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}var i="https://api.louassist.com/v1/";n.Z={createSessionUser:function(t){return function(n){return new Promise((function(e){o().post("".concat(i,"assistant/public/session-user/create/"),t,{withCredentials:!0}).then((function(t){var r=t.status,o=t.data;201===r?(n({type:"UPDATE_SESSION_USER",payload:o}),e({hasError:!1,data:o})):e({hasError:!0,data:o})})).catch((function(){e({hasError:!0,data:void 0})}))}))}},identifyUser:function(t){return function(n){return new Promise((function(e){o().post("".concat(i,"assistant/public/tracked-user/").concat(t.trackedUserId,"/identify/"),t,{withCredentials:!0}).then((function(t){var r=t.status,o=t.data;200===r?(n({type:"UPDATE_SESSION_USER",payload:o}),e({hasError:!1,data:o})):e({hasError:!0,data:o})})).catch((function(){e({hasError:!0,data:void 0})}))}))}},track:function(t,n){return new Promise((function(e){o().post("".concat(i,"public/events/create/"),function(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})))),r.forEach((function(n){a(t,n,e[n])}))}return t}({eventName:t},n)).then((function(t){var n=t.status,r=t.data;e(201===n?{hasError:!1,status:n,data:r}:{hasError:!0,status:n})})).catch((function(t){e({hasError:!0,status:t.response?t.response.status:400})}))}))}}},7221:function(t,n,e){e.d(n,{AL:function(){return w},E_:function(){return l},Eb:function(){return f},G1:function(){return s},GA:function(){return v},HE:function(){return m},Yc:function(){return c},aD:function(){return u},bb:function(){return i},eb:function(){return y},ei:function(){return o},i_:function(){return E},lF:function(){return h},p_:function(){return a},u8:function(){return p},yv:function(){return d}});var r=e(943),o=function(){return(0,r.b)({type:"LOU_TRACK_PLAYER_OPENED_EVENT",payload:{}})},a=function(){return(0,r.b)({type:"LOU_TRACK_PLAYER_CLOSED_EVENT",payload:{}})},i=function(t){return(0,r.b)({type:"LOU_TRACK_PLAYER_SEARCHED_EVENT",payload:{searchTerm:t}})},u=function(t,n){return(0,r.b)({type:"LOU_TRACK_WORKFLOW_VIEWED_EVENT",payload:{workflow:t,method:n}})},c=function(t){return(0,r.b)({type:"LOU_TRACK_WORKFLOW_COMPLETED_EVENT",payload:{workflow:t}})},f=function(t,n){return(0,r.b)({type:"LOU_TRACK_WORKFLOW_EXITED_EVENT",payload:{workflow:t,stepIndex:n}})},l=function(t,n){return(0,r.b)({type:"LOU_TRACK_WORKFLOW_STEP_VIEWED_EVENT",payload:{workflow:t,stepIndex:n}})},s=function(t,n){return(0,r.b)({type:"LOU_TRACK_WORKFLOW_STEP_COMPLETED_EVENT",payload:{workflow:t,stepIndex:n}})},d=function(t,n){return(0,r.b)({type:"LOU_TRACK_SURVEY_VIEWED_EVENT",payload:{workflow:t,stepIndex:n}})},p=function(t,n,e){return(0,r.b)({type:"LOU_TRACK_SURVEY_COMPLETED_EVENT",payload:{workflow:t,stepIndex:n,surveyData:e}})},v=function(t,n){return(0,r.b)({type:"LOU_TRACK_SURVEY_EXITED_EVENT",payload:{workflow:t,stepIndex:n}})},w=function(t){return(0,r.b)({type:"LOU_TRACK_WIDGET_LAUNCHED_EVENT",payload:{widget:t}})},E=function(t){return(0,r.b)({type:"LOU_TRACK_WIDGET_COMPLETED_EVENT",payload:{widget:t}})},h=function(t){return(0,r.b)({type:"LOU_TRACK_WIDGET_OPENED_EVENT",payload:{widget:t}})},y=function(t){return(0,r.b)({type:"LOU_TRACK_WIDGET_CLOSED_EVENT",payload:{widget:t}})},m=function(t,n,e){return(0,r.b)({type:"LOU_TRACK_WIDGET_BLOCK_COMPLETED_EVENT",payload:{widget:t,widgetBlock:n,widgetBlockIndex:e}})}},608:function(t,n,e){e.d(n,{c:function(){return r}});var r=function(t){return function(n){return new Promise((function(e){n({type:"UPDATE_SESSION_USER",payload:t}),e()}))}}},228:function(t,n,e){e.d(n,{rl:function(){return v},d$:function(){return d},md:function(){return s},$P:function(){return p}});var r=e(4051),o=e.n(r),a=e(7425),i=e(9669),u=e.n(i),c=function(t){return"location=".concat(encodeURIComponent(t.location),"&referrer=").concat(encodeURIComponent(t.referrer),"&hostname=").concat(encodeURIComponent(t.hostname),"&environment=").concat(t.environment,"&browser_language=").concat(t.browserLanguage,"&broswer_name=").concat(t.browserName,"&browser_version=").concat(t.browserVersion,"&tracked_user_id=").concat(encodeURIComponent(t.trackedUserId)).concat(t.activeWidgetId?"&=active_widget_id=".concat(encodeURIComponent(t.activeWidgetId)):"")};function f(t,n,e,r,o,a,i){try{var u=t[a](i),c=u.value}catch(f){return void e(f)}u.done?n(c):Promise.resolve(c).then(r,o)}var l="https://api.louassist.com/v1/",s=function(t,n,e,r,i){return function(){var s,d=(s=o().mark((function f(s){var d,p,v,w;return o().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return d=r||null,p=n||{},s({type:a.fF,payload:{location:p.location}}),v="?".concat(c(p)).concat(d?"&term=".concat(encodeURIComponent(d)):"").concat(p.builderIsActive?"&builder=true":"").concat(e?"&window_width=".concat(e):""),o.prev=4,o.next=7,u().get("".concat(l,"assistant/public/company/").concat(t,"/workflows/").concat(v),{cancelToken:i&&i.token});case 7:if(w=o.sent.data,s({type:a.Kb,payload:{data:w,location:p.location}}),!w){o.next=13;break}return o.abrupt("return",{hasError:!1,data:w});case 13:return o.abrupt("return",{hasError:!0,reason:void 0});case 14:o.next=20;break;case 16:return o.prev=16,o.t0=o.catch(4),s({type:a.Ag,payload:{errMsg:o.t0.response}}),o.abrupt("return",{hasError:!0,reason:"CANCELED"});case 20:case"end":return o.stop()}}),f,null,[[4,16]])})),function(){var t=this,n=arguments;return new Promise((function(e,r){var o=s.apply(t,n);function a(t){f(o,e,r,a,i,"next",t)}function i(t){f(o,e,r,a,i,"throw",t)}a(void 0)}))});return function(t){return d.apply(this,arguments)}}()},d=function(t,n,e,r,o,a,i){return new Promise((function(c){u().get("".concat(l,"assistant/public/workflows/").concat(t,"/?window_width=").concat(n,"&tracked_user_id=").concat(e,"&company_id=").concat(r,"&environment=").concat(o,"&ignore_segments=").concat(!a,"&browser_language=").concat(i.browserLanguage,"&browser_name=").concat(i.browserName,"&browser_version=").concat(i.browserVersion)).then((function(t){var n=t.data;c({hasError:!1,data:n})})).catch((function(){c({hasError:!0})}))}))},p=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void 0;return function(o){return new Promise((function(i,f){o({type:a.Ud,payload:{location:n.location,searchTerm:e}});var s="?".concat(c(n)).concat(e?"&term=".concat(encodeURIComponent(e)):"").concat(n.builderIsActive?"&builder=true":"");u().get("".concat(l,"assistant/public/company/").concat(t,"/workflows/").concat(s),{cancelToken:r&&r.token}).then((function(t){var e=t.data;o({type:a.e8,payload:{searchResult:e,location:n.location}}),e?i(e):f()})).catch((function(t){o({type:a.QJ,payload:{errMsg:t.response}}),f("CANCELED")}))}))}},v=function(){return function(t){return t({type:a.Bi})}}},276:function(t,n,e){var r=e(5893),o=e(7294),a=function(t){var n=t.text,e=(0,o.useRef)();return(0,o.useEffect)((function(){if(e.current){var t=document.createComment(n);e.current.parentNode.insertBefore(t,e.current)}}),[n]),(0,r.jsx)("div",{ref:e})};a.defaultProps={text:"\nExperience powered by Lou\nwww.louassist.com\n"},n.Z=a},3443:function(t,n,e){e.d(n,{zW:function(){return u},$6:function(){return $},D9:function(){return x},eI:function(){return R.Z},$h:function(){return F}});var r=e(1914),o=e(7294),a=e(4416),i=e(5775);function u(){var t=(0,a.v9)(i.qt);o.useEffect((function(){t.length&&(0,r.k)(t)}),[t])}var c=e(4051),f=e.n(c),l=e(4592);function s(t,n,e,r,o,a,i){try{var u=t[a](i),c=u.value}catch(f){return void e(f)}u.done?n(c):Promise.resolve(c).then(r,o)}function d(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var a=t.apply(n,e);function i(t){s(a,r,o,i,u,"next",t)}function u(t){s(a,r,o,i,u,"throw",t)}i(void 0)}))}}var p="anjdeafahmohgbdmpildijdgodchjgog";function v(){var t=window.chrome,n=window.navigator,e=n.vendor,r="undefined"!==typeof window.opr,o=n.userAgent.indexOf("Edge")>-1;return!!n.userAgent.match("CriOS")||null!==t&&"undefined"!==typeof t&&"Google Inc."===e&&!1===r&&!1===o}function w(){return E.apply(this,arguments)}function E(){return(E=d(f().mark((function t(){var n,e;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=function(){return new Promise((function(t){window.chrome.runtime.sendMessage&&window.chrome.runtime.sendMessage(p,{type:l.MESSAGE_TYPES.EXTENSION_VERSION},(function(n){window.chrome.runtime.lastError||t(Boolean(n))}))}))},!v()||"undefined"===typeof window.chrome||!window.chrome.runtime){t.next=6;break}return t.next=4,n();case 4:return e=t.sent,t.abrupt("return",e);case 6:return t.abrupt("return",!1);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function y(t,n,e,r,o,a,i){try{var u=t[a](i),c=u.value}catch(f){return void e(f)}u.done?n(c):Promise.resolve(c).then(r,o)}function m(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,o,a=[],i=!0,u=!1;try{for(e=e.call(t);!(i=(r=e.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==e.return||e.return()}finally{if(u)throw o}}return a}}(t,n)||function(t,n){if(!t)return;if("string"===typeof t)return h(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return h(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function S(){var t,n=m(o.useState(!1),2),e=n[0],r=n[1],a=o.useCallback((t=f().mark((function t(){var n;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,w();case 2:n=t.sent,r(n);case 4:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(r,o){var a=t.apply(n,e);function i(t){y(a,r,o,i,u,"next",t)}function u(t){y(a,r,o,i,u,"throw",t)}i(void 0)}))}),[]);return o.useEffect((function(){a()}),[a]),e}var b=e(7898),T=e(7221),_=e(228),g=e(7940),k=e(9448),I=e(9572),O=e(4004),A=e(6743),R=e(4445),L=e(3481),C=function(){var t=(0,o.useState)(!1),n=t[0],e=t[1];return(0,o.useEffect)((function(){var t;return n&&(t=setTimeout((function(){e(!1)}),300)),function(){t&&clearTimeout(t)}}),[n]),[n,function(t){e(!0),setTimeout((function(){t()}),250)}]},W=e(9669),P=e.n(W),U=function(){var t=(0,o.useState)(null),n=t[0],e=t[1],r=(0,o.useCallback)((function(){n&&n.cancel();var t=P().CancelToken.source();return e(t),t}),[n,e]),a=(0,o.useCallback)((function(){n&&n.cancel(),e(null)}),[n,e]);return[n,r,a]},D=e(2721),N=e(9328);function x(t){var n=o.useRef(null);return o.useEffect((function(){n.current=t})),n.current}var G=e(608);function V(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function M(t,n,e,r,o,a,i){try{var u=t[a](i),c=u.value}catch(f){return void e(f)}u.done?n(c):Promise.resolve(c).then(r,o)}function j(t){return function(){var n=this,e=arguments;return new Promise((function(r,o){var a=t.apply(n,e);function i(t){M(a,r,o,i,u,"next",t)}function u(t){M(a,r,o,i,u,"throw",t)}i(void 0)}))}}function K(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function H(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})))),r.forEach((function(n){K(t,n,e[n])}))}return t}function Y(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,o,a=[],i=!0,u=!1;try{for(e=e.call(t);!(i=(r=e.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==e.return||e.return()}finally{if(u)throw o}}return a}}(t,n)||function(t,n){if(!t)return;if("string"===typeof t)return V(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return V(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var $=function(){var t=(0,o.useState)(null),n=t[0],e=t[1],u=(0,o.useState)(null),c=u[0],s=u[1],d=(0,o.useState)(0),p=d[0],v=d[1],w=(0,o.useState)(!1),E=w[0],h=w[1],y=(0,o.useState)(null),m=y[0],W=y[1],P=(0,o.useState)(null),V=P[0],M=P[1],K=Y(U(),3),$=(K[0],K[1]),Z=K[2],F=(0,o.useState)(null),B=F[0],z=F[1],q=x(B),X=(0,o.useState)(!1),J=X[0],Q=X[1],tt=(0,o.useState)(""),nt=tt[0],et=tt[1],rt=(0,o.useState)(!1),ot=rt[0],at=rt[1],it=(0,o.useState)(!1),ut=it[0],ct=it[1],ft=(0,o.useState)(null),lt=ft[0],st=ft[1],dt=(0,o.useState)(!1),pt=dt[0],vt=dt[1],wt=(0,o.useState)(!1),Et=wt[0],ht=wt[1],yt=Y(C(),2),mt=yt[0],St=yt[1],bt=(0,o.useState)(!1),Tt=bt[0],_t=bt[1],gt=x(Tt),kt=(0,a.v9)(k.f),It=S(),Ot=(0,a.v9)(i.o9),At=(0,a.v9)(k.x),Rt=(0,R.Z)(),Lt=(0,D.TL)(),Ct=(0,o.useCallback)((function(t,n,r,o){r&&((0,g.t_)(l.STORAGE.TUTORIAL_SESSION_ID,r),(0,g.t_)(l.STORAGE.ACTIVE_TUTORIAL,t),(0,g.t_)("LOU_ACTIVE_WORKFLOW_FETCH_LOCATION",o),(0,g.qQ)(l.STORAGE.STEP_NUMBER,n)),e(t),s(o),v(n),h(!1),St((function(){ht(!0)}))}),[St]),Wt=(0,o.useCallback)((function(){St((function(){ht(!1),Q(!1),(0,A.m9)(),Ot&&0!==Ot.length||(0,r.os)(),(0,g.t_)(l.STORAGE.PLAYER_STATE,"CLOSED")}))}),[Ot,St]),Pt=function(){var t=j(f().mark((function t(n,e){var r,o,a;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,b.Z.track(n,e);case 3:if(r=t.sent,o=r.status,a=r.data,201!==o){t.next=10;break}return t.abrupt("return",a.workflowSessionId);case 10:throw new Error("ran into issue tracking event");case 11:t.next=16;break;case 13:return t.prev=13,t.t0=t.catch(0),t.abrupt("return","errorSessionId");case 16:case"end":return t.stop()}}),t,null,[[0,13]])})));return function(n,e){return t.apply(this,arguments)}}(),Ut=(0,o.useCallback)(function(){var t=j(f().mark((function t(n,e,o){var a,i,u,c,l,s,d,p,v,w,E;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return i=n.isSplitTesting,u=At.splitTestWorkflows[n.randomWorkflowId],l=(c=i&&u)?L.s6.TourSuppressedBySplitTest:L.s6.TourStarted,s=i?{deliveryMethod:e,isSplitTesting:i,isSuppressedBySplitTest:u}:{deliveryMethod:e},h(!0),ct(!1),t.next=10,Pt(l,H({workflowId:n.randomWorkflowId,workflowVariantId:null===(a=n.variant)||void 0===a?void 0:a.randomWorkflowVariantId,eventData:s},At));case 10:d=t.sent,c?((0,I.d$)(n,"views",At),(0,r.Ub)(n.variant?n.variant.steps[0]:n.steps[0]).then((function(t){var e;b.Z.track(L.s6.TourSuppressedAction,H({workflowId:n.randomWorkflowId,workflowVariantId:null===(e=n.variant)||void 0===e?void 0:e.randomWorkflowVariantId,workflowSessionId:d,eventData:t},At))}))):(b.Z.track(L.s6.TourStepViewed,H({workflowId:n.randomWorkflowId,workflowVariantId:null===(p=n.variant)||void 0===p?void 0:p.randomWorkflowVariantId,workflowStepId:null===(v=n.variant)||void 0===v||null===(w=v.steps)||void 0===w||null===(E=w[0])||void 0===E?void 0:E.randomWorkflowStepId,workflowSessionId:d},At)),T.aD(n,e),Ct(n,0,d,o),(0,I.d$)(n,"views",At)),W(null);case 13:case"end":return t.stop()}}),t)})));return function(n,e,r){return t.apply(this,arguments)}}(),[At,Ct]),Dt=(0,o.useCallback)((function(t,e,o,a){pt?vt(!1):t&&t.variant&&(n||E?W({workflow:t,deliveryMethod:o,fetchLocation:a}):((0,I.Xp)(t),kt||o===L.pz.Builder?Ct(t,0,"builderSession",e.location):e.sessionUserId&&Rt.hasReceivedDimensions?(Ut(t,o,a),o===L.pz.Link&&(0,r.iA)()):W({workflow:t,deliveryMethod:o,fetchLocation:a})))}),[n,pt,E,kt,Rt,Ct,Ut]),Nt=(0,o.useCallback)((function(t,e,o,a,i){var u,c=a.location;if(!n)if(Ot&&(u=Ot.find((function(n){return n.randomWorkflowId===t}))),Rt.hasReceivedDimensions)if(u){var f=Y((0,I.vW)(u,(0,I.NC)(a)),2),l=f[0],s=f[1];e&&l||!e?Dt(u,a,i,c):(0,r.EN)([{workflow:u,reason:s,deliveryMethod:i}])}else(0,_.d$)(t,Rt.width,a.trackedUserId,a.companyId,a.environment,o,{browserLanguage:a.browserLanguage,browserName:a.browserName,browserVersion:a.browserVersion}).then((function(t){var n=t.hasError,o=t.data;if(!n&&o.randomWorkflowId){var u=Y((0,I.vW)(o,(0,I.NC)(a)),2),f=u[0],l=u[1];e&&f||!e?Dt(o,a,i,c):(0,r.EN)([{workflow:o,reason:l,deliveryMethod:i}])}})).catch((function(){}));else W({workflow:u,deliveryMethod:i})}),[n,Ot,Rt,Dt]),xt=(0,o.useCallback)((function(){(0,g.VV)(l.STORAGE.ACTIVE_TUTORIAL),(0,g.VV)("LOU_ACTIVE_WORKFLOW_FETCH_LOCATION"),(0,g.dZ)(l.STORAGE.STEP_NUMBER),(0,g.VV)(l.STORAGE.REDIRECT_ON_START),e(null),s(null),v(0),(0,r.Wn)(),Wt()}),[Wt]),Gt=(0,o.useCallback)(j(f().mark((function t(){var e,r;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(kt){t.next=7;break}return e=(0,I.d$)(n,"completions",At),t.next=4,Lt((0,G.c)(e));case 4:r=(0,g.G)(l.STORAGE.TUTORIAL_SESSION_ID),T.Yc(n),b.Z.track(L.s6.TourCompleted,H({workflowId:n.randomWorkflowId,workflowVariantId:n.variant&&n.variant.randomWorkflowVariantId,workflowSessionId:r},At));case 7:case"end":return t.stop()}}),t)}))),[n,At,kt,Lt]),Vt=(0,o.useCallback)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(ut)vt(!0);else if(E)M(t);else if(n){if(!kt){(0,I.d$)(n,"quits",At);try{var e,r,o,a=(0,g.G)(l.STORAGE.TUTORIAL_SESSION_ID),i=t.stepNumber||(0,g.$o)(l.STORAGE.STEP_NUMBER),u=null===(e=n.variant)||void 0===e?void 0:e.steps,c=(null===u||void 0===u?void 0:u.length)>=i-1&&(null===(r=u[i])||void 0===r?void 0:r.randomWorkflowStepId);T.Eb(n,i),b.Z.track(L.s6.TourExited,H({workflowId:n.randomWorkflowId,workflowVariantId:null===(o=n.variant)||void 0===o?void 0:o.randomWorkflowVariantId,workflowSessionId:a,workflowStepId:c,eventData:t},At))}catch(f){}}xt()}}),[E,ut,n,At,kt,xt]);(0,o.useEffect)((function(){V&&!E&&(Vt(V),M(null))}),[V,E,Vt]);var Mt=(0,o.useCallback)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!kt){var e,r,o;(0,I.d$)(n,"quits",At);var a=(0,g.G)(l.STORAGE.TUTORIAL_SESSION_ID),i=t.stepNumber||(0,g.$o)(l.STORAGE.STEP_NUMBER),u=null===(e=n.variant)||void 0===e?void 0:e.steps,c=(null===u||void 0===u?void 0:u.length)>=i-1&&(null===(r=u[i])||void 0===r?void 0:r.randomWorkflowStepId),f=H({workflowId:n.randomWorkflowId,workflowVariantId:null===(o=n.variant)||void 0===o?void 0:o.randomWorkflowVariantId,workflowSessionId:a,workflowStepId:c,eventData:t},At);T.GA(n,i),T.Eb(n,i),b.Z.track(L.s6.SurveyExited,f),b.Z.track(L.s6.TourExited,f)}xt()}),[n,At,kt,xt]),jt=(0,o.useCallback)(function(){var t=j(f().mark((function t(n){return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n&&n.length>0)||kt){t.next=6;break}return at(!1),t.next=4,(0,r.v7)();case 4:t.next=10;break;case 6:if(kt){t.next=10;break}return J&&((0,g.t_)(l.STORAGE.PLAYER_STATE,"CLOSED"),Q(!1)),t.next=10,(0,r.os)();case 10:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),[kt,J]),Kt=(0,o.useCallback)(function(){var t=j(f().mark((function t(n){var e,o,a,i,u,c,s,d,p,v,w,E;return f().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(kt||Tt){t.next=24;break}return e=(0,N.iz)("companyId"),o=$(),a=Rt.width,Lt((0,_.rl)()),t.prev=5,i=n.location,st(i),t.next=10,Lt((0,_.md)(e,n,a,null,o));case 10:u=t.sent,c=u.hasError,s=u.reason,d=u.data,p=d.widgets,v=d.deprecatedHelpWidgetWorkflows,w=d.autoStartWorkflows,E=d.linkStartWorkflows,ct(!0),c?"CANCELED"!==s&&(J&&((0,g.t_)(l.STORAGE.PLAYER_STATE,"CLOSED"),Q(!1)),(0,r.os)(),(0,r.EN)([])):jt(v).then((function(){z({autoStartWorkflows:w,linkStartWorkflows:E,widgets:p,fetchLocation:i})})),t.next=24;break;case 22:t.prev=22,t.t0=t.catch(5);case 24:case"end":return t.stop()}}),t,null,[[5,22]])})));return function(n){return t.apply(this,arguments)}}(),[kt,J,Lt,jt,Tt,$,Rt.width]);return(0,o.useEffect)((function(){!gt&&Tt?Z():gt&&!Tt&&Kt(At)}),[Z,Kt,Tt,gt,At]),(0,o.useEffect)((function(){At.sessionUserId&&Rt.hasReceivedDimensions&&m&&!n&&!Tt&&(!Y((0,I.vW)(m.workflow,(0,I.NC)(At)),1)[0]||m.fetchLocation&&m.fetchLocation!==lt||Dt(m.workflow,At,m.deliveryMethod,m.fetchLocation),W(null),ct(!1))}),[At,Rt,m,n,lt,Dt,Tt]),(0,o.useEffect)((function(){if(!q&&B){if(!Tt){var t,n=B.autoStartWorkflows,e=B.linkStartWorkflows,o=B.widgets,a=B.fetchLocation,i=(0,I.Ng)(n,e,(0,I.NC)(At));i&&a===lt&&Dt(i,At,e.length>0?L.pz.Link:L.pz.Url,a);var u=(null===(t=At.defaultUserProperties)||void 0===t?void 0:t.widgets_history)||{},c=(0,O.P0)(o,u);if(c&&(0,r.H5)(c,!0),It){var f=(0,I.N9)(i,n,e,(0,I.NC)(At));(0,r.EN)(f)}}ct(!1),z(null)}}),[Tt,lt,q,B,At,It,Dt]),(0,o.useEffect)((function(){(0,r.bJ)(J)}),[J]),(0,o.useEffect)((function(){Et||(0,r.Xe)(ot)}),[Et,ot]),(0,o.useEffect)((function(){Rt.hasReceivedDimensions&&!Rt.isDesktop&&at(!0),Rt.hasReceivedDimensions&&n&&n.variant&&(n.variant.screenSizeRangeMinWidth&&n.variant.screenSizeRangeMinWidth>Rt.width||n.variant.screenSizeRangeMaxWidth&&n.variant.screenSizeRangeMaxWidth<Rt.width)&&xt()}),[Rt.hasReceivedDimensions,Rt.isDesktop,Rt.width,n,xt]),(0,o.useEffect)((function(){kt&&Z()}),[kt,Z]),{deprecatedHelpWidgetIsOpen:J,mainframeIsActive:Et,activeWorkflow:n,activeWorkflowFetchLocation:c,activeWorkflowStepIndex:p,deprecatedHelpWidgetTriggerText:nt,deprecatedHelpWidgetTriggerIsHidden:ot,mainframeIsTransitioning:mt,handleActiveWorkflowCheck:function(){var t=(0,g.G)(l.STORAGE.ACTIVE_TUTORIAL),n=(0,g.G)("LOU_ACTIVE_WORKFLOW_FETCH_LOCATION"),e=(0,g.G)(l.STORAGE.TUTORIAL_SESSION_ID),r=(0,g.$o)(l.STORAGE.STEP_NUMBER)||0;t&&Ct(t,r,e,n)},handleFetchWorkflows:Kt,handleWorkflowLaunchSequence:Dt,handleWorkflowLaunchSequenceWithWorkflowId:Nt,handleWorkflowCleanupSequence:xt,handleWorkflowCompletion:Gt,handleWorkflowExit:Vt,handleWorkflowSurveyExit:Mt,handleDeprecatedHelpWidgetTriggerClick:function(){(0,g.t_)(l.STORAGE.PLAYER_STATE,J?"CLOSED":"OPEN"),kt||(J?(Lt((0,_.rl)()),T.p_(),b.Z.track(L.s6.WidgetClosed,H({},At))):(T.ei(),b.Z.track(L.s6.WidgetOpened,H({},At)))),St((function(){Q(!J)}))},setIsIdentifyingUser:_t,updateDeprecatedHelpWidgetTriggerText:function(t){(0,g.t_)(l.STORAGE.TRIGGER_TEXT,t),et(t)},updateDeprecatedHelpWidgetPositioning:function(t){var n={right:t.POSITION_RIGHT||"15px",bottom:t.POSITION_BOTTOM||"15px",left:t.POSITION_LEFT,top:t.POSITION_TOP};(0,r.vq)(n)},updateDeprecatedHelpWidgetStylesFromStorage:function(){et((0,g.G)(l.STORAGE.TRIGGER_TEXT)||"Help?"),at((0,g.G)(l.STORAGE.HIDE_TRIGGER)||!0)}}},Z=e(7425);function F(){var t=(0,a.I0)();return function(n){var e,r=(0,I.gw)(n);t((e=r,function(t){t({type:Z.Mi,payload:{themeColor:e}})}))}}},4445:function(t,n,e){e.d(n,{Z:function(){return d}});var r=e(4051),o=e.n(r),a=e(4592),i=e(1914),u=e(7294),c=e(8800);function f(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function l(t,n,e,r,o,a,i){try{var u=t[a](i),c=u.value}catch(f){return void e(f)}u.done?n(c):Promise.resolve(c).then(r,o)}function s(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,o,a=[],i=!0,u=!1;try{for(e=e.call(t);!(i=(r=e.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==e.return||e.return()}finally{if(u)throw o}}return a}}(t,n)||function(t,n){if(!t)return;if("string"===typeof t)return f(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return f(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(){var t,n=s(u.useState(!1),2),e=n[0],r=n[1],f=s(u.useState(null),2),d=f[0],p=f[1],v=s(u.useState(null),2),w=v[0],E=v[1],h=s(u.useState(!1),2),y=h[0],m=h[1],S=u.useCallback((t=o().mark((function t(){var n,e,a;return o().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,i.p8)();case 2:n=t.sent,e=n.width,a=n.height,p(e),E(a),r(!0);case 8:case"end":return t.stop()}}),t)})),function(){var n=this,e=arguments;return new Promise((function(r,o){var a=t.apply(n,e);function i(t){l(a,r,o,i,u,"next",t)}function u(t){l(a,r,o,i,u,"throw",t)}i(void 0)}))}),[]);return u.useEffect((function(){S()}),[S]),u.useEffect((function(){var t=(0,c.cy)(a.HOSTS.PLAYER_SCRIPT,(function(t){if("LOU_SCREEN_SIZE_UPDATED"===t.type){var n=t.payload,e=n.width,r=n.height;p(e),E(r)}}));return function(){return window.removeEventListener("message",t)}}),[]),u.useEffect((function(){m(d>767)}),[d]),{width:d,height:w,isDesktop:y,hasReceivedDimensions:e}}},6743:function(t,n,e){e.d(n,{Wp:function(){return f},bi:function(){return c},iI:function(){return a},m9:function(){return u},w0:function(){return i}});var r=e(4592),o=e(943),a=function(){return(0,o.b)({type:r.MESSAGE_TYPES.PLAYER_MOUNTED})},i=function(t){return(0,o.b)({type:r.MESSAGE_TYPES.ENTER_TUTORIAL,payload:{fetchLocation:t}})},u=function(){return(0,o.b)({type:r.MESSAGE_TYPES.EXIT_TUTORIAL})},c=function(t){return(0,o.b)({type:r.MESSAGE_TYPES.UPDATE_PLAYER_HEIGHT,payload:{height:t}})},f=function(t){return(0,o.b)({type:r.MESSAGE_TYPES.UPDATE_PLAYER_WIDTH,payload:{width:t}})}},9448:function(t,n,e){e.d(n,{f:function(){return a},x:function(){return o}});var r=e(9328),o=function(t){return t.sessionUser},a=function(t){try{return Boolean((0,r.iz)("builder"))}catch(n){return t.sessionUser&&t.sessionUser.builderIsActive}}},5775:function(t,n,e){e.d(n,{J6:function(){return f},Th:function(){return c},Yq:function(){return i},o9:function(){return r},ol:function(){return o},qt:function(){return u},ry:function(){return a}});var r=function(t){return t.workflows.helpWidgetWorkflows},o=function(t){return t.workflows.isSearching},a=function(t){return t.workflows.searchResult},i=function(t){return t.workflows.searchTerm},u=function(t){return t.workflows.eventListeners},c=function(t){return t.workflows.eventWorkflowsMap},f=function(t){return t.workflows.eventWidgetsMap}},791:function(t,n,e){e.d(n,{D:function(){return l}});var r=e(6876);function o(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})))),r.forEach((function(n){a(t,n,e[n])}))}return t}function u(t,n){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){var e=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=e){var r,o,a=[],i=!0,u=!1;try{for(e=e.call(t);!(i=(r=e.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(c){u=!0,o=c}finally{try{i||null==e.return||e.return()}finally{if(u)throw o}}return a}}(t,n)||function(t,n){if(!t)return;if("string"===typeof t)return o(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(t,n)}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=function(t,n){return t.map((function(t){for(var e=t.offset,r=t.length,o=0;o<n.length;o++){var a=n[o];e>a.offset&&(e-=a.oldLength-a.newLength),e<=a.offset&&(e+r>=a.offset+a.oldLength?r-=a.oldLength-a.newLength:r-=Math.max(0,e+r-(a.offset+a.oldLength)))}return i({},t,{offset:e,length:r})}))},f=function(t,n){if(!t)return t;var e=i({},t);return Object.entries(t).forEach((function(t){var o,a=u(t,2),c=a[0],f=a[1];if(null===(o=f.data)||void 0===o?void 0:o.url){var l=u((0,r.m)(f.data.url,n),1)[0];e[c]=i({},f,{data:i({},f.data,{url:l})})}})),e},l=function(t,n){return i({},t,{blocks:t.blocks.map((function(t){var e=u((0,r.m)(t.text,n),2),o=e[0],a=e[1];return i({},t,{text:o,inlineStyleRanges:c(t.inlineStyleRanges,a),entityRanges:c(t.entityRanges,a)})})),entityMap:f(t.entityMap,n)})}},6876:function(t,n,e){e.d(n,{m:function(){return r}});var r=function(t,n){var e=[];if(!t)return[t,e];var r=t.match(/\{\{([^}]+)\}\}/g);if(!r)return[t,e];for(var o=t,a=0;a<r.length;a++){for(var i=r[a],u=i.replace("{{","").replace("}}","").trim().split("|"),c="",f=0;f<u.length;f++){var l=u[f];if(l.includes("default:")){c=l.replace("default:","").trim().slice(1,-1);break}var s=l.split(".");if("user"===(null===s||void 0===s?void 0:s[0])){var d,p=null===n||void 0===n||null===(d=n.customUserProperties)||void 0===d?void 0:d[(null===s||void 0===s?void 0:s[1])||""];if(p){c=p.toString();break}}}e.push({offset:o.search(i),oldLength:i.length,newLength:c.length}),o=o.replace(i,c)}return[o,e]}},2721:function(t,n,e){e.d(n,{TL:function(){return f}});var r=e(4416),o=e(1574),a=e(9569);function i(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function u(t){return function(t){if(Array.isArray(t))return i(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"===typeof t)return i(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return i(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var c=[e(3894).Z],f=((0,a.MT)(o.Z,a.md.apply(void 0,u(c))),function(){return(0,r.I0)()})},4004:function(t,n,e){e.d(n,{P0:function(){return l},g1:function(){return f}});var r=e(3630),o=e(9328);function a(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function i(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function u(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})))),r.forEach((function(n){i(t,n,e[n])}))}return t}function c(t){return function(t){if(Array.isArray(t))return a(t)}(t)||function(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,n){if(!t)return;if("string"===typeof t)return a(t,n);var e=Object.prototype.toString.call(t).slice(8,-1);"Object"===e&&t.constructor&&(e=t.constructor.name);if("Map"===e||"Set"===e)return Array.from(e);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return a(t,n)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var f=function(t,n){var e=Date.now(),a={id:(0,o.DO)(),eventType:r.P.Completed,timestamp:e};return n&&n[t]?u({},n,i({},t,u({},n[t],{completions:n[t].completions+1,last_completed_at:e,events:c(n[t].events||[]).concat([a])}))):u({},n,i({},t,{views:1,completions:1,first_viewed_at:e,last_viewed_at:e,first_completed_at:e,last_completed_at:e,events:[a]}))},l=function(t,n){for(var e=0;e<t.length;e++){var r=t[e];if(!n[r.randomWidgetId]||0===n[r.randomWidgetId].views)return r}return null}}}]);