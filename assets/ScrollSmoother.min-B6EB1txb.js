var et=(T,E)=>()=>(E||T((E={exports:{}}).exports,E),E.exports);var tt=et((Se,Ye)=>{/*!
 * ScrollSmoother 3.11.4
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * This plugin is a membership benefit of Club GreenSock and is only authorized for use in sites/apps/products developed by individuals/companies with an active Club GreenSock membership. See https://greensock.com/club
 * @author: Jack Doyle, jack@greensock.com
 */(function(T,E){typeof Se=="object"&&typeof Ye<"u"?E(Se):typeof define=="function"&&define.amd?define(["exports"],E):E((T=T||self).window=T.window||{})})(void 0,function(T){function E(i,h){for(var _=0;_<h.length;_++){var w=h[_];w.enumerable=w.enumerable||!1,w.configurable=!0,"value"in w&&(w.writable=!0),Object.defineProperty(i,w.key,w)}}function Te(){return typeof window<"u"}function Ee(){return a||Te()&&(a=window.gsap)&&a.registerPlugin&&a}var a,Z,g,q,K,x,L,xe,o,P,$,Pe,Re,ke,Ce,O=(V.register=function(h){return Z||(a=h||Ee(),Te()&&window.document&&(g=window,q=document,K=q.documentElement,x=q.body),a&&(L=a.utils.toArray,xe=a.utils.clamp,$=a.parseEase("expo"),ke=a.core.context||function(){},Ce=a.delayedCall(.2,function(){return o.isRefreshing||P&&P.refresh()}).pause(),o=a.core.globals().ScrollTrigger,a.core.globals("ScrollSmoother",V),x&&o&&(Pe=o.core._getVelocityProp,Re=o.core._inputObserver,V.refresh=o.refresh,Z=1))),Z},function(h,_,w){return _&&E(h.prototype,_),w&&E(h,w),h}(V,[{key:"progress",get:function(){return this.scrollTrigger?this.scrollTrigger.animation._time/100:0}}]),V);function V(i){var h=this;Z||V.register(a)||console.warn("Please gsap.registerPlugin(ScrollSmoother)"),i=this.vars=i||{},P&&P.kill(),ke(P=this);function _(){return Y.update(-y)}function w(){return p.style.overflow="visible"}function ee(e){e.update();var t=e.getTween();t&&(t.pause(),t._time=t._dur,t._tTime=t._tDur),he=!1,e.animation.progress(e.progress,!0)}function te(e,t){(e!==y&&!R||t)&&(Qe&&(e=Math.round(e)),k&&(p.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+e+", 0, 1)",p._gsap.y=e+"px"),me=e-y,y=e,o.isUpdating||o.update())}function re(e){return arguments.length?(e<0&&(e=0),D.y=-e,he=!0,R?y=-e:te(-e),o.isRefreshing?f.update():se(e),this):-y}function _e(e){d.scrollTop=0,e.target.contains&&e.target.contains(d)||Ne&&Ne(h,e)===!1||(o.isInViewport(e.target)||e.target===Le||h.scrollTo(e.target,!1,"center center"),Le=e.target)}function Ae(e){var t,n,r,s;u.forEach(function(l){t=l.pins,s=l.markers,e.forEach(function(c){l.trigger&&c.trigger&&l!==c&&(c.trigger===l.trigger||c.pinnedContainer===l.trigger||l.trigger.contains(c.trigger))&&(n=c.start,r=(n-l.start-l.offset)/l.ratio-(n-l.start),t.forEach(function(A){return r-=A.distance/l.ratio-A.distance}),c.setPositions(n+r,c.end+r),c.markerStart&&s.push(a.quickSetter([c.markerStart,c.markerEnd],"y","px")),c.pin&&0<c.end&&(r=c.end-c.start,t.push({start:c.start,end:c.end,distance:r,trig:c}),l.setPositions(l.start,l.end+r),l.vars.onRefresh(l)))})})}function Me(){w(),requestAnimationFrame(w),u&&(u.forEach(function(e){var t=e.start,n=e.auto?Math.min(o.maxScroll(e.scroller),e.end):t+(e.end-t)/e.ratio,r=(n-e.end)/2;t-=r,n-=r,e.offset=r||1e-4,e.pins.length=0,e.setPositions(Math.min(t,n),Math.max(t,n)),e.vars.onRefresh(e)}),Ae(o.sort())),Y.reset()}function fe(){return o.addEventListener("refresh",Me)}function Je(){return u&&u.forEach(function(e){return e.vars.onRefresh(e)})}function We(){return u&&u.forEach(function(e){return e.vars.onRefreshInit(e)}),Je}function ze(e,t,n,r){return function(){var s=typeof t=="function"?t(n,r):t;return s||s===0||(s=r.getAttribute("data-"+ie+e)||(e==="speed"?1:0)),r.setAttribute("data-"+ie+e,s),s==="auto"?s:parseFloat(s)}}function Ge(e,t,n,r,s){function l(){t=Ze(),n=$e(),H=parseFloat(t)||1,ye=(N=t==="auto")?0:.5,b&&b.kill(),b=n&&a.to(e,{ease:$,overwrite:!1,y:"+=0",duration:n}),v&&(v.ratio=H,v.autoSpeed=N)}function c(){W.y=ce+"px",W.renderTransform(1),l()}function A(M){if(N){c();var S=function(B,z){var C,F,j=B.parentNode||K,Q=B.getBoundingClientRect(),I=j.getBoundingClientRect(),Ve=I.top-Q.top,je=I.bottom-Q.bottom,X=(Math.abs(Ve)>Math.abs(je)?Ve:je)/(1-z),Ke=-X*z;return 0<X&&(F=(C=I.height/(g.innerHeight+I.height))==.5?2*I.height:2*Math.min(I.height,-X*C/(2*C-1))*(z||1),Ke+=z?-F*z:-F/2,X+=F),{change:X,offset:Ke}}(e,xe(0,1,-M.start/(M.end-M.start)));G=S.change,we=S.offset}else G=(M.end-M.start)*(1-H),we=0;ue.forEach(function(m){return G-=m.distance*(1-H)}),M.vars.onUpdate(M),b&&b.progress(1)}s=(typeof s=="function"?s(r,e):s)||0;var H,v,N,b,ye,we,Ze=ze("speed",t,r,e),$e=ze("lag",n,r,e),ce=a.getProperty(e,"y"),W=e._gsap,ue=[],be=[],G=0;return l(),(H!==1||N||b)&&(A(v=o.create({trigger:N?e.parentNode:e,start:"top bottom+="+s,end:"bottom top-="+s,scroller:d,scrub:!0,refreshPriority:-999,onRefreshInit:c,onRefresh:A,onKill:function(S){var m=u.indexOf(S);0<=m&&u.splice(m,1),c()},onUpdate:function(S){var m,B,z,C=ce+G*(S.progress-ye),F=ue.length,j=0;if(S.offset){if(F){for(B=-y,z=S.end;F--;){if((m=ue[F]).trig.isActive||B>=m.start&&B<=m.end)return void(b&&(m.trig.progress+=m.trig.direction<0?.001:-.001,m.trig.update(0,0,1),b.resetTo("y",parseFloat(W.y),-me,!0),le&&b.progress(1)));B>m.end&&(j+=m.distance),z-=m.distance}C=ce+j+G*((a.utils.clamp(S.start,S.end,B)-S.start-j)/(z-S.start)-ye)}C=function(I){return Math.round(1e5*I)/1e5||0}(C+we),be.length&&!N&&be.forEach(function(Q){return Q(C-j)}),b?(b.resetTo("y",C,-me,!0),le&&b.progress(1)):(W.y=C+"px",W.renderTransform(1))}}})),a.core.getCache(v.trigger).stRevert=We,v.startY=ce,v.pins=ue,v.markers=be,v.ratio=H,v.autoSpeed=N,e.style.willChange="transform"),v}var p,d,de,f,u,U,He,Be,Fe,R,ne,Ie,ge,he,Le,Oe=i.smoothTouch,Ue=i.onUpdate,De=i.onStop,pe=i.smooth,Ne=i.onFocusIn,ve=i.normalizeScroll,Qe=i.wholePixels,Xe=this,oe=typeof ResizeObserver<"u"&&i.autoResize!==!1&&new ResizeObserver(function(){return o.isRefreshing||Ce.restart(!0)}),ie=i.effectsPrefix||"",se=o.getScrollFunc(g),k=o.isTouch===1?Oe===!0?.8:parseFloat(Oe)||0:pe===0||pe===!1?0:parseFloat(pe)||.8,ae=k&&+i.speed||1,y=0,me=0,le=1,Y=Pe(0),D={y:0};function J(){return de=p.clientHeight,p.style.overflow="visible",x.style.height=g.innerHeight+(de-g.innerHeight)/ae+"px",de-g.innerHeight}fe(),o.addEventListener("killAll",fe),a.delayedCall(.5,function(){return le=0}),this.scrollTop=re,this.scrollTo=function(e,t,n){var r=a.utils.clamp(0,o.maxScroll(g),isNaN(e)?h.offset(e,n):+e);t?R?a.to(h,{duration:k,scrollTop:r,overwrite:"auto",ease:$}):se(r):re(r)},this.offset=function(e,t){var n,r=(e=L(e)[0]).style.cssText,s=o.create({trigger:e,start:t||"top top"});return u&&Ae([s]),n=s.start,s.kill(!1),e.style.cssText=r,a.core.getCache(e).uncache=1,n},this.content=function(e){if(arguments.length){var t=L(e||"#smooth-content")[0]||console.warn("ScrollSmoother needs a valid content element.")||x.children[0];return t!==p&&(Fe=(p=t).getAttribute("style")||"",oe&&oe.observe(p),a.set(p,{overflow:"visible",width:"100%",boxSizing:"border-box",y:"+=0"}),k||a.set(p,{clearProps:"transform"})),this}return p},this.wrapper=function(e){return arguments.length?(d=L(e||"#smooth-wrapper")[0]||function(n){var r=q.querySelector(".ScrollSmoother-wrapper");return r||((r=q.createElement("div")).classList.add("ScrollSmoother-wrapper"),n.parentNode.insertBefore(r,n),r.appendChild(n)),r}(p),Be=d.getAttribute("style")||"",J(),a.set(d,k?{overflow:"hidden",position:"fixed",height:"100%",width:"100%",top:0,left:0,right:0,bottom:0}:{overflow:"visible",position:"relative",width:"100%",height:"auto",top:"auto",bottom:"auto",left:"auto",right:"auto"}),this):d},this.effects=function(e,t){if(u=u||[],!e)return u.slice(0);(e=L(e)).forEach(function(H){for(var v=u.length;v--;)u[v].trigger===H&&u[v].kill()}),t=t||{};var n,r,s=t.speed,l=t.lag,c=t.effectsPadding,A=[];for(n=0;n<e.length;n++)(r=Ge(e[n],s,l,n,c))&&A.push(r);return u.push.apply(u,A),A},this.sections=function(e,t){if(U=U||[],!e)return U.slice(0);var n=L(e).map(function(r){return o.create({trigger:r,start:"top 120%",end:"bottom -20%",onToggle:function(l){r.style.opacity=l.isActive?"1":"0",r.style.pointerEvents=l.isActive?"all":"none"}})});return t&&t.add?U.push.apply(U,n):U=n.slice(0),n},this.content(i.content),this.wrapper(i.wrapper),this.render=function(e){return te(e||e===0?e:y)},this.getVelocity=function(){return Y.getVelocity(-y)},o.scrollerProxy(d,{scrollTop:re,scrollHeight:function(){return J()&&x.scrollHeight},fixedMarkers:i.fixedMarkers!==!1&&!!k,content:p,getBoundingClientRect:function(){return{top:0,left:0,width:g.innerWidth,height:g.innerHeight}}}),o.defaults({scroller:d});var qe=o.getAll().filter(function(e){return e.scroller===g||e.scroller===d});qe.forEach(function(e){return e.revert(!0,!0)}),f=o.create({animation:a.fromTo(D,{y:0},{y:function(){return-J()},immediateRender:!1,ease:"none",data:"ScrollSmoother",duration:100,onUpdate:function(){if(this._dur){var t=he;t&&(ee(f),D.y=y),te(D.y,t),_(),Ue&&!R&&Ue(Xe)}}}),onRefreshInit:function(t){if(u){var n=o.getAll().filter(function(s){return!!s.pin});u.forEach(function(s){s.vars.pinnedContainer||n.forEach(function(l){if(l.pin.contains(s.trigger)){var c=s.vars;c.pinnedContainer=l.pin,s.vars=null,s.init(c,s.animation)}})})}var r=t.getTween();ge=r&&r._end>r._dp._time,Ie=y,D.y=0,k&&(d.style.pointerEvents="none",d.scrollTop=0,setTimeout(function(){return d.style.removeProperty("pointer-events")},50))},onRefresh:function(t){t.animation.invalidate(),t.setPositions(t.start,J()/ae),ge||ee(t),D.y=-se(),te(D.y),le||t.animation.progress(a.utils.clamp(0,1,Ie/-t.end)),ge&&(t.progress-=.001,t.update())},id:"ScrollSmoother",scroller:g,invalidateOnRefresh:!0,start:0,refreshPriority:-9999,end:function(){return J()/ae},onScrubComplete:function(){Y.reset(),De&&De(h)},scrub:k||!0}),this.smooth=function(e){return arguments.length&&(ae=(k=e||0)&&+i.speed||1,f.scrubDuration(e)),f.getTween()?f.getTween().duration():0},f.getTween()&&(f.getTween().vars.ease=i.ease||$),this.scrollTrigger=f,i.effects&&this.effects(i.effects===!0?"[data-"+ie+"speed], [data-"+ie+"lag]":i.effects,{effectsPadding:i.effectsPadding}),i.sections&&this.sections(i.sections===!0?"[data-section]":i.sections),qe.forEach(function(e){e.vars.scroller=d,e.revert(!1,!0),e.init(e.vars,e.animation)}),this.paused=function(e,t){return arguments.length?(!!R!==e&&(e?(f.getTween()&&f.getTween().pause(),se(-y),Y.reset(),(ne=o.normalizeScroll())&&ne.disable(),(R=o.observe({preventDefault:!0,type:"wheel,touch,scroll",debounce:!1,allowClicks:!0,onChangeY:function(){return re(-y)}})).nested=Re(K,"wheel,touch,scroll",!0,t!==!1)):(R.nested.kill(),R.kill(),R=0,ne&&ne.enable(),f.progress=(-y-f.start)/(f.end-f.start),ee(f))),this):!!R},this.kill=this.revert=function(){h.paused(!1),ee(f),f.kill();for(var e=(u||[]).concat(U||[]),t=e.length;t--;)e[t].kill();o.scrollerProxy(d),o.removeEventListener("killAll",fe),o.removeEventListener("refresh",Me),d.style.cssText=Be,p.style.cssText=Fe;var n=o.defaults({});n&&n.scroller===d&&o.defaults({scroller:g}),h.normalizer&&o.normalizeScroll(!1),clearInterval(He),P=null,oe&&oe.disconnect(),x.style.removeProperty("height"),g.removeEventListener("focusin",_e)},this.refresh=function(e,t){return f.refresh(e,t)},ve&&(this.normalizer=o.normalizeScroll(ve===!0?{debounce:!0,content:!k&&p}:ve)),o.config(i),"overscrollBehavior"in g.getComputedStyle(x)&&a.set([x,K],{overscrollBehavior:"none"}),"scrollBehavior"in g.getComputedStyle(x)&&a.set([x,K],{scrollBehavior:"auto"}),g.addEventListener("focusin",_e),He=setInterval(_,250),q.readyState==="loading"||requestAnimationFrame(function(){return o.refresh()})}O.version="3.11.4",O.create=function(i){return P&&i&&P.content()===L(i.content)[0]?P:new O(i)},O.get=function(){return P},Ee()&&a.registerPlugin(O),T.ScrollSmoother=O,T.default=O,typeof window>"u"||window!==T?Object.defineProperty(T,"__esModule",{value:!0}):delete T.default})});export default tt();
