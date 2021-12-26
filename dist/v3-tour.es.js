var t=Object.defineProperty,e=Object.prototype.hasOwnProperty,n=Object.getOwnPropertySymbols,o=Object.prototype.propertyIsEnumerable,i=(e,n,o)=>n in e?t(e,n,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[n]=o,r=(t,r)=>{for(var s in r||(r={}))e.call(r,s)&&i(t,s,r[s]);if(n)for(var s of n(r))o.call(r,s)&&i(t,s,r[s]);return t};import{resolveComponent as s,openBlock as a,createBlock as p,renderSlot as u,createCommentVNode as c,pushScopeId as l,popScopeId as f,createVNode as d,toDisplayString as h,withModifiers as m,withScopeId as v}from"vue";const g={onStart:()=>{},onPreviousStep:t=>{},onNextStep:t=>{},onStop:()=>{},onSkip:()=>{},onFinish:()=>{}},b={highlight:!1,labels:{buttonSkip:"Skip tour",buttonPrevious:"Previous",buttonNext:"Next",buttonStop:"Finish"},enabledButtons:{buttonSkip:!0,buttonPrevious:!0,buttonNext:!0,buttonStop:!0},startTimeout:0,stopOnTargetNotFound:!0,useKeyboardNavigation:!0,enabledNavigationKeys:{escape:!0,arrowRight:!0,arrowLeft:!0},debug:!1},y={active:"v-tour--active",targetHighlighted:"v-tour__target--highlighted",targetRelative:"v-tour__target--relative"},w="box-shadow 0s ease-in-out 0s",O={enableScrolling:!0,highlight:b.highlight,enabledButtons:b.enabledButtons,modifiers:[{name:"arrow",options:{element:".v-step__arrow",padding:10}},{name:"preventOverflow",options:{rootBoundary:"window",padding:10}},{name:"offset",options:{offset:[0,10]}}],placement:"bottom"},x=39,S=37,k=27;const E={name:"v-tour",props:{steps:{type:Array,default:()=>[]},name:{type:String},options:{type:Object,default:()=>b},callbacks:{type:Object,default:()=>g}},data:()=>({currentStep:-1}),mounted(){this.$tours[this.name]=this},beforeUnmount(){this.customOptions.useKeyboardNavigation&&window.removeEventListener("keyup",this.handleKeyup)},computed:{customOptions(){return r(r({},b),this.options)},customCallbacks(){return r(r({},g),this.callbacks)},isRunning(){return this.currentStep>-1&&this.currentStep<this.numberOfSteps},isFirst(){return 0===this.currentStep},isLast(){return this.currentStep===this.steps.length-1},numberOfSteps(){return this.steps.length},step(){return this.steps[this.currentStep]}},methods:{async start(t){this.customOptions.useKeyboardNavigation&&window.addEventListener("keyup",this.handleKeyup),t=void 0!==t?parseInt(t,10):0;let e=this.steps[t];if(void 0!==e.before)try{await e.before("start")}catch(n){return Promise.reject(n)}return await(()=>new Promise(((e,n)=>{setTimeout((()=>{this.customCallbacks.onStart(),this.currentStep=t,e()}),this.customOptions.startTimeout)})))(),Promise.resolve()},async previousStep(){let t=this.currentStep-1,e=()=>new Promise(((e,n)=>{this.customCallbacks.onPreviousStep(this.currentStep),this.currentStep=t,e()}));if(t>-1){let o=this.steps[t];if(void 0!==o.before)try{await o.before("previous")}catch(n){return Promise.reject(n)}await e()}return Promise.resolve()},async nextStep(){let t=this.currentStep+1,e=()=>new Promise(((e,n)=>{this.customCallbacks.onNextStep(this.currentStep),this.currentStep=t,e()}));if(t<this.numberOfSteps&&-1!==this.currentStep){let o=this.steps[t];if(void 0!==o.before)try{await o.before("next")}catch(n){return Promise.reject(n)}await e()}return Promise.resolve()},stop(){this.customCallbacks.onStop(),document.body.classList.remove("v-tour--active"),this.currentStep=-1},skip(){this.customCallbacks.onSkip(),this.stop()},finish(){this.customCallbacks.onFinish(),this.stop()},handleKeyup(t){switch(this.customOptions.debug&&console.log("[Vue Tour] A keyup event occured:",t),t.keyCode){case x:this.isKeyEnabled("arrowRight")&&this.nextStep();break;case S:this.isKeyEnabled("arrowLeft")&&this.previousStep();break;case k:this.isKeyEnabled("escape")&&this.stop()}},isKeyEnabled(t){const{enabledNavigationKeys:e}=this.customOptions;return!e.hasOwnProperty(t)||e[t]}}},j={class:"v-tour"};E.render=function(t,e,n,o,i,r){const l=s("v-step");return a(),p("div",j,[u(t.$slots,"default",{currentStep:i.currentStep,steps:n.steps,previousStep:r.previousStep,nextStep:r.nextStep,stop:r.stop,skip:r.skip,finish:r.finish,isFirst:r.isFirst,isLast:r.isLast,labels:r.customOptions.labels,enabledButtons:r.customOptions.enabledButtons,highlight:r.customOptions.highlight,debug:r.customOptions.debug},(()=>[n.steps[i.currentStep]?(a(),p(l,{step:n.steps[i.currentStep],key:i.currentStep,"previous-step":r.previousStep,"next-step":r.nextStep,stop:r.stop,skip:r.skip,finish:r.finish,"is-first":r.isFirst,"is-last":r.isLast,labels:r.customOptions.labels,"enabled-buttons":r.customOptions.enabledButtons,highlight:r.customOptions.highlight,"stop-on-fail":r.customOptions.stopOnTargetNotFound,debug:r.customOptions.debug,ionic:r.customOptions.ionic,onTargetNotFound:e[1]||(e[1]=e=>t.$emit("targetNotFound",e))},null,8,["step","previous-step","next-step","stop","skip","finish","is-first","is-last","labels","enabled-buttons","highlight","stop-on-fail","debug","ionic"])):c("",!0)]))])};var B="top",L="bottom",P="right",_="left",T=[B,L,P,_],A=T.reduce((function(t,e){return t.concat([e+"-start",e+"-end"])}),[]),C=[].concat(T,["auto"]).reduce((function(t,e){return t.concat([e,e+"-start",e+"-end"])}),[]),H=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function D(t){return t?(t.nodeName||"").toLowerCase():null}function F(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function N(t){return t instanceof F(t).Element||t instanceof Element}function M(t){return t instanceof F(t).HTMLElement||t instanceof HTMLElement}function R(t){return"undefined"!=typeof ShadowRoot&&(t instanceof F(t).ShadowRoot||t instanceof ShadowRoot)}var W={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var n=e.styles[t]||{},o=e.attributes[t]||{},i=e.elements[t];M(i)&&D(i)&&(Object.assign(i.style,n),Object.keys(o).forEach((function(t){var e=o[t];!1===e?i.removeAttribute(t):i.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,n={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,n.popper),e.styles=n,e.elements.arrow&&Object.assign(e.elements.arrow.style,n.arrow),function(){Object.keys(e.elements).forEach((function(t){var o=e.elements[t],i=e.attributes[t]||{},r=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:n[t]).reduce((function(t,e){return t[e]="",t}),{});M(o)&&D(o)&&(Object.assign(o.style,r),Object.keys(i).forEach((function(t){o.removeAttribute(t)})))}))}},requires:["computeStyles"]};function V(t){return t.split("-")[0]}var q=Math.max,$=Math.min,K=Math.round;function I(t,e){void 0===e&&(e=!1);var n=t.getBoundingClientRect(),o=1,i=1;if(M(t)&&e){var r=t.offsetHeight,s=t.offsetWidth;s>0&&(o=K(n.width)/s||1),r>0&&(i=K(n.height)/r||1)}return{width:n.width/o,height:n.height/i,top:n.top/i,right:n.right/o,bottom:n.bottom/i,left:n.left/o,x:n.left/o,y:n.top/i}}function U(t){var e=I(t),n=t.offsetWidth,o=t.offsetHeight;return Math.abs(e.width-n)<=1&&(n=e.width),Math.abs(e.height-o)<=1&&(o=e.height),{x:t.offsetLeft,y:t.offsetTop,width:n,height:o}}function z(t,e){var n=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(n&&R(n)){var o=e;do{if(o&&t.isSameNode(o))return!0;o=o.parentNode||o.host}while(o)}return!1}function Y(t){return F(t).getComputedStyle(t)}function X(t){return["table","td","th"].indexOf(D(t))>=0}function G(t){return((N(t)?t.ownerDocument:t.document)||window.document).documentElement}function J(t){return"html"===D(t)?t:t.assignedSlot||t.parentNode||(R(t)?t.host:null)||G(t)}function Q(t){return M(t)&&"fixed"!==Y(t).position?t.offsetParent:null}function Z(t){for(var e=F(t),n=Q(t);n&&X(n)&&"static"===Y(n).position;)n=Q(n);return n&&("html"===D(n)||"body"===D(n)&&"static"===Y(n).position)?e:n||function(t){var e=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&M(t)&&"fixed"===Y(t).position)return null;for(var n=J(t);M(n)&&["html","body"].indexOf(D(n))<0;){var o=Y(n);if("none"!==o.transform||"none"!==o.perspective||"paint"===o.contain||-1!==["transform","perspective"].indexOf(o.willChange)||e&&"filter"===o.willChange||e&&o.filter&&"none"!==o.filter)return n;n=n.parentNode}return null}(t)||e}function tt(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}function et(t,e,n){return q(t,$(e,n))}function nt(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function ot(t,e){return e.reduce((function(e,n){return e[n]=t,e}),{})}function it(t){return t.split("-")[1]}var rt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function st(t){var e,n=t.popper,o=t.popperRect,i=t.placement,r=t.variation,s=t.offsets,a=t.position,p=t.gpuAcceleration,u=t.adaptive,c=t.roundOffsets,l=t.isFixed,f=!0===c?function(t){var e=t.x,n=t.y,o=window.devicePixelRatio||1;return{x:K(e*o)/o||0,y:K(n*o)/o||0}}(s):"function"==typeof c?c(s):s,d=f.x,h=void 0===d?0:d,m=f.y,v=void 0===m?0:m,g=s.hasOwnProperty("x"),b=s.hasOwnProperty("y"),y=_,w=B,O=window;if(u){var x=Z(n),S="clientHeight",k="clientWidth";if(x===F(n)&&"static"!==Y(x=G(n)).position&&"absolute"===a&&(S="scrollHeight",k="scrollWidth"),x=x,i===B||(i===_||i===P)&&"end"===r)w=L,v-=(l&&O.visualViewport?O.visualViewport.height:x[S])-o.height,v*=p?1:-1;if(i===_||(i===B||i===L)&&"end"===r)y=P,h-=(l&&O.visualViewport?O.visualViewport.width:x[k])-o.width,h*=p?1:-1}var E,j=Object.assign({position:a},u&&rt);return p?Object.assign({},j,((E={})[w]=b?"0":"",E[y]=g?"0":"",E.transform=(O.devicePixelRatio||1)<=1?"translate("+h+"px, "+v+"px)":"translate3d("+h+"px, "+v+"px, 0)",E)):Object.assign({},j,((e={})[w]=b?v+"px":"",e[y]=g?h+"px":"",e.transform="",e))}var at={passive:!0};var pt={left:"right",right:"left",bottom:"top",top:"bottom"};function ut(t){return t.replace(/left|right|bottom|top/g,(function(t){return pt[t]}))}var ct={start:"end",end:"start"};function lt(t){return t.replace(/start|end/g,(function(t){return ct[t]}))}function ft(t){var e=F(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function dt(t){return I(G(t)).left+ft(t).scrollLeft}function ht(t){var e=Y(t),n=e.overflow,o=e.overflowX,i=e.overflowY;return/auto|scroll|overlay|hidden/.test(n+i+o)}function mt(t){return["html","body","#document"].indexOf(D(t))>=0?t.ownerDocument.body:M(t)&&ht(t)?t:mt(J(t))}function vt(t,e){var n;void 0===e&&(e=[]);var o=mt(t),i=o===(null==(n=t.ownerDocument)?void 0:n.body),r=F(o),s=i?[r].concat(r.visualViewport||[],ht(o)?o:[]):o,a=e.concat(s);return i?a:a.concat(vt(J(s)))}function gt(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function bt(t,e){return"viewport"===e?gt(function(t){var e=F(t),n=G(t),o=e.visualViewport,i=n.clientWidth,r=n.clientHeight,s=0,a=0;return o&&(i=o.width,r=o.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(s=o.offsetLeft,a=o.offsetTop)),{width:i,height:r,x:s+dt(t),y:a}}(t)):N(e)?function(t){var e=I(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}(e):gt(function(t){var e,n=G(t),o=ft(t),i=null==(e=t.ownerDocument)?void 0:e.body,r=q(n.scrollWidth,n.clientWidth,i?i.scrollWidth:0,i?i.clientWidth:0),s=q(n.scrollHeight,n.clientHeight,i?i.scrollHeight:0,i?i.clientHeight:0),a=-o.scrollLeft+dt(t),p=-o.scrollTop;return"rtl"===Y(i||n).direction&&(a+=q(n.clientWidth,i?i.clientWidth:0)-r),{width:r,height:s,x:a,y:p}}(G(t)))}function yt(t,e,n){var o="clippingParents"===e?function(t){var e=vt(J(t)),n=["absolute","fixed"].indexOf(Y(t).position)>=0,o=n&&M(t)?Z(t):t;return N(o)?e.filter((function(t){return N(t)&&z(t,o)&&"body"!==D(t)&&(!n||"static"!==Y(t).position)})):[]}(t):[].concat(e),i=[].concat(o,[n]),r=i[0],s=i.reduce((function(e,n){var o=bt(t,n);return e.top=q(o.top,e.top),e.right=$(o.right,e.right),e.bottom=$(o.bottom,e.bottom),e.left=q(o.left,e.left),e}),bt(t,r));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function wt(t){var e,n=t.reference,o=t.element,i=t.placement,r=i?V(i):null,s=i?it(i):null,a=n.x+n.width/2-o.width/2,p=n.y+n.height/2-o.height/2;switch(r){case B:e={x:a,y:n.y-o.height};break;case L:e={x:a,y:n.y+n.height};break;case P:e={x:n.x+n.width,y:p};break;case _:e={x:n.x-o.width,y:p};break;default:e={x:n.x,y:n.y}}var u=r?tt(r):null;if(null!=u){var c="y"===u?"height":"width";switch(s){case"start":e[u]=e[u]-(n[c]/2-o[c]/2);break;case"end":e[u]=e[u]+(n[c]/2-o[c]/2)}}return e}function Ot(t,e){void 0===e&&(e={});var n=e,o=n.placement,i=void 0===o?t.placement:o,r=n.boundary,s=void 0===r?"clippingParents":r,a=n.rootBoundary,p=void 0===a?"viewport":a,u=n.elementContext,c=void 0===u?"popper":u,l=n.altBoundary,f=void 0!==l&&l,d=n.padding,h=void 0===d?0:d,m=nt("number"!=typeof h?h:ot(h,T)),v="popper"===c?"reference":"popper",g=t.rects.popper,b=t.elements[f?v:c],y=yt(N(b)?b:b.contextElement||G(t.elements.popper),s,p),w=I(t.elements.reference),O=wt({reference:w,element:g,strategy:"absolute",placement:i}),x=gt(Object.assign({},g,O)),S="popper"===c?x:w,k={top:y.top-S.top+m.top,bottom:S.bottom-y.bottom+m.bottom,left:y.left-S.left+m.left,right:S.right-y.right+m.right},E=t.modifiersData.offset;if("popper"===c&&E){var j=E[i];Object.keys(k).forEach((function(t){var e=[P,L].indexOf(t)>=0?1:-1,n=[B,L].indexOf(t)>=0?"y":"x";k[t]+=j[n]*e}))}return k}function xt(t,e,n){return void 0===n&&(n={x:0,y:0}),{top:t.top-e.height-n.y,right:t.right-e.width+n.x,bottom:t.bottom-e.height+n.y,left:t.left-e.width-n.x}}function St(t){return[B,P,L,_].some((function(e){return t[e]>=0}))}function kt(t,e,n){void 0===n&&(n=!1);var o,i,r=M(e),s=M(e)&&function(t){var e=t.getBoundingClientRect(),n=K(e.width)/t.offsetWidth||1,o=K(e.height)/t.offsetHeight||1;return 1!==n||1!==o}(e),a=G(e),p=I(t,s),u={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&(("body"!==D(e)||ht(a))&&(u=(o=e)!==F(o)&&M(o)?{scrollLeft:(i=o).scrollLeft,scrollTop:i.scrollTop}:ft(o)),M(e)?((c=I(e,!0)).x+=e.clientLeft,c.y+=e.clientTop):a&&(c.x=dt(a))),{x:p.left+u.scrollLeft-c.x,y:p.top+u.scrollTop-c.y,width:p.width,height:p.height}}function Et(t){var e=new Map,n=new Set,o=[];function i(t){n.add(t.name),[].concat(t.requires||[],t.requiresIfExists||[]).forEach((function(t){if(!n.has(t)){var o=e.get(t);o&&i(o)}})),o.push(t)}return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){n.has(t.name)||i(t)})),o}var jt={placement:"bottom",modifiers:[],strategy:"absolute"};function Bt(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function Lt(t){void 0===t&&(t={});var e=t,n=e.defaultModifiers,o=void 0===n?[]:n,i=e.defaultOptions,r=void 0===i?jt:i;return function(t,e,n){void 0===n&&(n=r);var i,s,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},jt,r),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},p=[],u=!1,c={state:a,setOptions:function(n){var i="function"==typeof n?n(a.options):n;l(),a.options=Object.assign({},r,a.options,i),a.scrollParents={reference:N(t)?vt(t):t.contextElement?vt(t.contextElement):[],popper:vt(e)};var s,u,f=function(t){var e=Et(t);return H.reduce((function(t,n){return t.concat(e.filter((function(t){return t.phase===n})))}),[])}((s=[].concat(o,a.options.modifiers),u=s.reduce((function(t,e){var n=t[e.name];return t[e.name]=n?Object.assign({},n,e,{options:Object.assign({},n.options,e.options),data:Object.assign({},n.data,e.data)}):e,t}),{}),Object.keys(u).map((function(t){return u[t]}))));return a.orderedModifiers=f.filter((function(t){return t.enabled})),a.orderedModifiers.forEach((function(t){var e=t.name,n=t.options,o=void 0===n?{}:n,i=t.effect;if("function"==typeof i){var r=i({state:a,name:e,instance:c,options:o}),s=function(){};p.push(r||s)}})),c.update()},forceUpdate:function(){if(!u){var t=a.elements,e=t.reference,n=t.popper;if(Bt(e,n)){a.rects={reference:kt(e,Z(n),"fixed"===a.options.strategy),popper:U(n)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(t){return a.modifiersData[t.name]=Object.assign({},t.data)}));for(var o=0;o<a.orderedModifiers.length;o++)if(!0!==a.reset){var i=a.orderedModifiers[o],r=i.fn,s=i.options,p=void 0===s?{}:s,l=i.name;"function"==typeof r&&(a=r({state:a,options:p,name:l,instance:c})||a)}else a.reset=!1,o=-1}}},update:(i=function(){return new Promise((function(t){c.forceUpdate(),t(a)}))},function(){return s||(s=new Promise((function(t){Promise.resolve().then((function(){s=void 0,t(i())}))}))),s}),destroy:function(){l(),u=!0}};if(!Bt(t,e))return c;function l(){p.forEach((function(t){return t()})),p=[]}return c.setOptions(n).then((function(t){!u&&n.onFirstUpdate&&n.onFirstUpdate(t)})),c}}var Pt=Lt({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,n=t.instance,o=t.options,i=o.scroll,r=void 0===i||i,s=o.resize,a=void 0===s||s,p=F(e.elements.popper),u=[].concat(e.scrollParents.reference,e.scrollParents.popper);return r&&u.forEach((function(t){t.addEventListener("scroll",n.update,at)})),a&&p.addEventListener("resize",n.update,at),function(){r&&u.forEach((function(t){t.removeEventListener("scroll",n.update,at)})),a&&p.removeEventListener("resize",n.update,at)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,n=t.name;e.modifiersData[n]=wt({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,n=t.options,o=n.gpuAcceleration,i=void 0===o||o,r=n.adaptive,s=void 0===r||r,a=n.roundOffsets,p=void 0===a||a,u={placement:V(e.placement),variation:it(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:i,isFixed:"fixed"===e.options.strategy};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,st(Object.assign({},u,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:s,roundOffsets:p})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,st(Object.assign({},u,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:p})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}},W,{name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,n=t.options,o=t.name,i=n.offset,r=void 0===i?[0,0]:i,s=C.reduce((function(t,n){return t[n]=function(t,e,n){var o=V(t),i=[_,B].indexOf(o)>=0?-1:1,r="function"==typeof n?n(Object.assign({},e,{placement:t})):n,s=r[0],a=r[1];return s=s||0,a=(a||0)*i,[_,P].indexOf(o)>=0?{x:a,y:s}:{x:s,y:a}}(n,e.rects,r),t}),{}),a=s[e.placement],p=a.x,u=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=p,e.modifiersData.popperOffsets.y+=u),e.modifiersData[o]=s}},{name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,o=t.name;if(!e.modifiersData[o]._skip){for(var i=n.mainAxis,r=void 0===i||i,s=n.altAxis,a=void 0===s||s,p=n.fallbackPlacements,u=n.padding,c=n.boundary,l=n.rootBoundary,f=n.altBoundary,d=n.flipVariations,h=void 0===d||d,m=n.allowedAutoPlacements,v=e.options.placement,g=V(v),b=p||(g===v||!h?[ut(v)]:function(t){if("auto"===V(t))return[];var e=ut(t);return[lt(t),e,lt(e)]}(v)),y=[v].concat(b).reduce((function(t,n){return t.concat("auto"===V(n)?function(t,e){void 0===e&&(e={});var n=e,o=n.placement,i=n.boundary,r=n.rootBoundary,s=n.padding,a=n.flipVariations,p=n.allowedAutoPlacements,u=void 0===p?C:p,c=it(o),l=c?a?A:A.filter((function(t){return it(t)===c})):T,f=l.filter((function(t){return u.indexOf(t)>=0}));0===f.length&&(f=l);var d=f.reduce((function(e,n){return e[n]=Ot(t,{placement:n,boundary:i,rootBoundary:r,padding:s})[V(n)],e}),{});return Object.keys(d).sort((function(t,e){return d[t]-d[e]}))}(e,{placement:n,boundary:c,rootBoundary:l,padding:u,flipVariations:h,allowedAutoPlacements:m}):n)}),[]),w=e.rects.reference,O=e.rects.popper,x=new Map,S=!0,k=y[0],E=0;E<y.length;E++){var j=y[E],H=V(j),D="start"===it(j),F=[B,L].indexOf(H)>=0,N=F?"width":"height",M=Ot(e,{placement:j,boundary:c,rootBoundary:l,altBoundary:f,padding:u}),R=F?D?P:_:D?L:B;w[N]>O[N]&&(R=ut(R));var W=ut(R),q=[];if(r&&q.push(M[H]<=0),a&&q.push(M[R]<=0,M[W]<=0),q.every((function(t){return t}))){k=j,S=!1;break}x.set(j,q)}if(S)for(var $=function(t){var e=y.find((function(e){var n=x.get(e);if(n)return n.slice(0,t).every((function(t){return t}))}));if(e)return k=e,"break"},K=h?3:1;K>0;K--){if("break"===$(K))break}e.placement!==k&&(e.modifiersData[o]._skip=!0,e.placement=k,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},{name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,n=t.options,o=t.name,i=n.mainAxis,r=void 0===i||i,s=n.altAxis,a=void 0!==s&&s,p=n.boundary,u=n.rootBoundary,c=n.altBoundary,l=n.padding,f=n.tether,d=void 0===f||f,h=n.tetherOffset,m=void 0===h?0:h,v=Ot(e,{boundary:p,rootBoundary:u,padding:l,altBoundary:c}),g=V(e.placement),b=it(e.placement),y=!b,w=tt(g),O="x"===w?"y":"x",x=e.modifiersData.popperOffsets,S=e.rects.reference,k=e.rects.popper,E="function"==typeof m?m(Object.assign({},e.rects,{placement:e.placement})):m,j="number"==typeof E?{mainAxis:E,altAxis:E}:Object.assign({mainAxis:0,altAxis:0},E),T=e.modifiersData.offset?e.modifiersData.offset[e.placement]:null,A={x:0,y:0};if(x){if(r){var C,H="y"===w?B:_,D="y"===w?L:P,F="y"===w?"height":"width",N=x[w],M=N+v[H],R=N-v[D],W=d?-k[F]/2:0,K="start"===b?S[F]:k[F],I="start"===b?-k[F]:-S[F],z=e.elements.arrow,Y=d&&z?U(z):{width:0,height:0},X=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},G=X[H],J=X[D],Q=et(0,S[F],Y[F]),nt=y?S[F]/2-W-Q-G-j.mainAxis:K-Q-G-j.mainAxis,ot=y?-S[F]/2+W+Q+J+j.mainAxis:I+Q+J+j.mainAxis,rt=e.elements.arrow&&Z(e.elements.arrow),st=rt?"y"===w?rt.clientTop||0:rt.clientLeft||0:0,at=null!=(C=null==T?void 0:T[w])?C:0,pt=N+ot-at,ut=et(d?$(M,N+nt-at-st):M,N,d?q(R,pt):R);x[w]=ut,A[w]=ut-N}if(a){var ct,lt="x"===w?B:_,ft="x"===w?L:P,dt=x[O],ht="y"===O?"height":"width",mt=dt+v[lt],vt=dt-v[ft],gt=-1!==[B,_].indexOf(g),bt=null!=(ct=null==T?void 0:T[O])?ct:0,yt=gt?mt:dt-S[ht]-k[ht]-bt+j.altAxis,wt=gt?dt+S[ht]+k[ht]-bt-j.altAxis:vt,xt=d&&gt?(kt=et(yt,dt,St=wt))>St?St:kt:et(d?yt:mt,dt,d?wt:vt);x[O]=xt,A[O]=xt-dt}var St,kt;e.modifiersData[o]=A}},requiresIfExists:["offset"]},{name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,n=t.state,o=t.name,i=t.options,r=n.elements.arrow,s=n.modifiersData.popperOffsets,a=V(n.placement),p=tt(a),u=[_,P].indexOf(a)>=0?"height":"width";if(r&&s){var c=function(t,e){return nt("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:ot(t,T))}(i.padding,n),l=U(r),f="y"===p?B:_,d="y"===p?L:P,h=n.rects.reference[u]+n.rects.reference[p]-s[p]-n.rects.popper[u],m=s[p]-n.rects.reference[p],v=Z(r),g=v?"y"===p?v.clientHeight||0:v.clientWidth||0:0,b=h/2-m/2,y=c[f],w=g-l[u]-c[d],O=g/2-l[u]/2+b,x=et(y,O,w),S=p;n.modifiersData[o]=((e={})[S]=x,e.centerOffset=x-O,e)}},effect:function(t){var e=t.state,n=t.options.element,o=void 0===n?"[data-popper-arrow]":n;null!=o&&("string"!=typeof o||(o=e.elements.popper.querySelector(o)))&&z(e.elements.popper,o)&&(e.elements.arrow=o)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,n=t.name,o=e.rects.reference,i=e.rects.popper,r=e.modifiersData.preventOverflow,s=Ot(e,{elementContext:"reference"}),a=Ot(e,{altBoundary:!0}),p=xt(s,o),u=xt(a,i,r),c=St(p),l=St(u);e.modifiersData[n]={referenceClippingOffsets:p,popperEscapeOffsets:u,isReferenceHidden:c,hasPopperEscaped:l},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":l})}}]}),_t=function(t,e,n,o){return(t/=o/2)<1?n/2*t*t+e:-n/2*(--t*(t-2)-1)+e},Tt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},At=function(){var t=void 0,e=void 0,n=void 0,o=void 0,i=void 0,r=void 0,s=void 0,a=void 0,p=void 0,u=void 0,c=void 0,l=void 0;function f(){return window.scrollY||window.pageYOffset}function d(t){return t.getBoundingClientRect().top+e}function h(n){p||(p=n),c=i(u=n-p,e,s,a),window.scrollTo(0,c),u<a?window.requestAnimationFrame(h):function(){window.scrollTo(0,e+s),t&&r&&(t.setAttribute("tabindex","-1"),t.focus());"function"==typeof l&&l();p=!1}()}return function(p){var u=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a=u.duration||1e3,o=u.offset||0,l=u.callback,i=u.easing||_t,r=u.a11y||!1,e=f(),void 0===p?"undefined":Tt(p)){case"number":t=void 0,r=!1,n=e+p;break;case"object":n=d(t=p);break;case"string":t=document.querySelector(p),n=d(t)}switch(s=n-e+o,Tt(u.duration)){case"number":a=u.duration;break;case"function":a=u.duration(s)}window.requestAnimationFrame(h)}}();function Ct(t,e){var n,o;if(0===e.length)return t;for(n=0,o=e.length;n<o;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return t<0?-2*t:t}function Ht(t,e,n,o){var i,r=Ct(Ct(Ct(t,n),(i=e,Object.prototype.toString.call(i))),typeof e);if(null===e)return Ct(r,"null");if(void 0===e)return Ct(r,"undefined");if("object"==typeof e||"function"==typeof e){if(-1!==o.indexOf(e))return Ct(r,"[Circular]"+n);o.push(e);var s=function(t,e,n){return Object.keys(e).sort().reduce((function(t,o){return Ht(t,e[o],o,n)}),t)}(r,e,o);if(!("valueOf"in e)||"function"!=typeof e.valueOf)return s;try{return Ct(s,String(e.valueOf()))}catch(a){return Ct(s,"[valueOf exception]"+(a.stack||a.message))}}return Ct(r,e.toString())}var Dt=function(t){return function(t,e){for(;t.length<e;)t="0"+t;return t}(Ht(0,t,"",[]).toString(16),8)};const Ft={name:"v-step",props:{step:{type:Object},previousStep:{type:Function},nextStep:{type:Function},stop:{type:Function},skip:{type:Function,default:function(){this.stop()}},finish:{type:Function,default:function(){this.stop()}},isFirst:{type:Boolean},isLast:{type:Boolean},labels:{type:Object},enabledButtons:{type:Object},highlight:{type:Boolean},stopOnFail:{type:Boolean},debug:{type:Boolean},ionic:{type:Boolean}},data(){return{hash:Dt(this.step.target),targetElement:document.querySelector(this.step.target)}},computed:{params(){return r(r(r(r({},O),{highlight:this.highlight}),{enabledButtons:Object.assign({},this.enabledButtons)}),this.step.params)},isSticky(){return!this.step.target}},methods:{createStep(){this.debug&&console.log("[Vue Tour] The target element "+this.step.target+' of .v-step[id="'+this.hash+'"] is:',this.targetElement),this.isSticky?document.body.appendChild(this.$refs["v-step-"+this.hash]):this.targetElement?(this.enableScrolling(),this.createHighlight(),Pt(this.targetElement,this.$refs["v-step-"+this.hash],this.params)):(this.debug&&console.error("[Vue Tour] The target element "+this.step.target+' of .v-step[id="'+this.hash+'"] does not exist!'),this.$emit("targetNotFound",this.step),this.stopOnFail&&this.stop())},enableScrolling(){if(this.params.enableScrolling)if(this.step.duration||this.step.offset){let t={duration:this.step.duration||1e3,offset:this.step.offset||0,callback:void 0,a11y:!1};this.ionic?this.ionicScroll(t):At(this.targetElement,t)}else this.targetElement.scrollIntoView({behavior:"smooth"})},isHighlightEnabled(){return this.debug&&console.log(`[Vue Tour] Highlight is ${this.params.highlight?"enabled":"disabled"} for .v-step[id="${this.hash}"]`),this.params.highlight},createHighlight(){if(this.isHighlightEnabled()){document.body.classList.add(y.active);const t=window.getComputedStyle(this.targetElement).getPropertyValue("transition");"all 0s ease 0s"!==t&&(this.targetElement.style.transition=`${t}, ${w}`),this.targetElement.classList.add(y.targetHighlighted),this.targetElement.style.position||this.targetElement.classList.add(y.targetRelative)}else document.body.classList.remove(y.active)},removeHighlight(){if(this.isHighlightEnabled()){const t=this.targetElement,e=this.targetElement.style.transition;this.targetElement.classList.remove(y.targetHighlighted),this.targetElement.classList.remove(y.targetRelative),e.includes(w)&&setTimeout((()=>{t.style.transition=e.replace(`, ${w}`,"")}),0)}},isButtonEnabled(t){return!this.params.enabledButtons.hasOwnProperty(t)||this.params.enabledButtons[t]},getOffset(t){let e=this.targetElement.getBoundingClientRect().top;return t.offset&&(e+=t.offset),e},getIonContent(){const t=document.getElementsByClassName("ion-page");if(t.length){const e={};for(const n of t){e[window.getComputedStyle(n)["z-index"]]=n.querySelector("ion-content")}return{el:e[Math.max(...Object.keys(e).map((t=>+t)))],pages:Object.keys(e).length}}},ionicScroll(t){const e=this.getOffset(t);this.getIonContent().el.scrollByPoint(0,e,this.step.duration||1e3)}},mounted(){this.createStep()},unmounted(){this.removeHighlight()}},Nt=v("data-v-4e730e68");l("data-v-4e730e68");const Mt={key:0,class:"v-step__header"},Rt={class:"v-step__content"},Wt={key:1},Vt={class:"v-step__buttons"};f();const qt=Nt(((t,e,n,o,i,r)=>(a(),p("div",{class:[{"v-step--sticky":r.isSticky},"v-step"],id:"v-step-"+i.hash,ref:"v-step-"+i.hash},[u(t.$slots,"header",{},(()=>[n.step.header?(a(),p("div",Mt,[n.step.header.title?(a(),p("div",{key:0,innerHTML:n.step.header.title},null,8,["innerHTML"])):c("",!0)])):c("",!0)]),{},!0),u(t.$slots,"content",{},(()=>[d("div",Rt,[n.step.content?(a(),p("div",{key:0,innerHTML:n.step.content},null,8,["innerHTML"])):(a(),p("div",Wt,"This is a demo step! The id of this step is "+h(i.hash)+" and it targets "+h(n.step.target)+".",1))])]),{},!0),u(t.$slots,"actions",{},(()=>[d("div",Vt,[!n.isLast&&r.isButtonEnabled("buttonSkip")?(a(),p("button",{key:0,onClick:e[1]||(e[1]=m(((...t)=>n.skip&&n.skip(...t)),["prevent"])),class:"v-step__button v-step__button-skip"},h(n.labels.buttonSkip),1)):c("",!0),!n.isFirst&&r.isButtonEnabled("buttonPrevious")?(a(),p("button",{key:1,onClick:e[2]||(e[2]=m(((...t)=>n.previousStep&&n.previousStep(...t)),["prevent"])),class:"v-step__button v-step__button-previous"},h(n.labels.buttonPrevious),1)):c("",!0),!n.isLast&&r.isButtonEnabled("buttonNext")?(a(),p("button",{key:2,onClick:e[3]||(e[3]=m(((...t)=>n.nextStep&&n.nextStep(...t)),["prevent"])),class:"v-step__button v-step__button-next"},h(n.labels.buttonNext),1)):c("",!0),n.isLast&&r.isButtonEnabled("buttonStop")?(a(),p("button",{key:3,onClick:e[4]||(e[4]=m(((...t)=>n.finish&&n.finish(...t)),["prevent"])),class:"v-step__button v-step__button-stop"},h(n.labels.buttonStop),1)):c("",!0)])]),{},!0),d("div",{class:["v-step__arrow",{"v-step__arrow--dark":n.step.header&&n.step.header.title}],"data-popper-arrow":""},null,2)],10,["id"]))));Ft.render=qt,Ft.__scopeId="data-v-4e730e68";const $t={install(t,e){t.component(E.name,E),t.component(Ft.name,Ft),t.config.globalProperties.$tours={}}};export default $t;
