var et=Object.create,He=Object.defineProperty,tt=Object.getPrototypeOf,rt=Object.prototype.hasOwnProperty,nt=Object.getOwnPropertyNames,at=Object.getOwnPropertyDescriptor;var ie=Object.assign,it=r=>He(r,"__esModule",{value:!0});var ot=(r,i)=>()=>(i||(i={exports:{}},r(i.exports,i)),i.exports);var st=(r,i,v)=>{if(i&&typeof i=="object"||typeof i=="function")for(let s of nt(i))!rt.call(r,s)&&s!=="default"&&He(r,s,{get:()=>i[s],enumerable:!(v=at(i,s))||v.enumerable});return r},ft=r=>st(it(He(r!=null?et(tt(r)):{},"default",r&&r.__esModule&&"default"in r?{get:()=>r.default,enumerable:!0}:{value:r,enumerable:!0})),r);var Re=(r,i,v)=>new Promise((s,N)=>{var A=O=>{try{_(v.next(O))}catch(K){N(K)}},V=O=>{try{_(v.throw(O))}catch(K){N(K)}},_=O=>O.done?s(O.value):Promise.resolve(O.value).then(A,V);_((v=v.apply(r,i)).next())});var Xe=ot((ke,Ae)=>{(function(r){"use strict";var i=r.setTimeout,v=r.clearTimeout,s=r.XMLHttpRequest,N=r.XDomainRequest,A=r.ActiveXObject,V=r.EventSource,_=r.document,O=r.Promise,K=r.fetch,ue=r.Response,R=r.TextDecoder,F=r.TextEncoder,J=r.AbortController;if(typeof window!="undefined"&&typeof _!="undefined"&&!("readyState"in _)&&_.body==null&&(_.readyState="loading",window.addEventListener("load",function(e){_.readyState="complete"},!1)),s==null&&A!=null&&(s=function(){return new A("Microsoft.XMLHTTP")}),Object.create==null&&(Object.create=function(e){function n(){}return n.prototype=e,new n}),Date.now||(Date.now=function(){return new Date().getTime()}),J==null){var M=K;K=function(e,n){var a=n.signal;return M(e,{headers:n.headers,credentials:n.credentials,cache:n.cache}).then(function(t){var c=t.body.getReader();return a._reader=c,a._aborted&&a._reader.cancel(),{status:t.status,statusText:t.statusText,headers:t.headers,body:{getReader:function(){return c}}}})},J=function(){this.signal={_reader:null,_aborted:!1},this.abort=function(){this.signal._reader!=null&&this.signal._reader.cancel(),this.signal._aborted=!0}}}function re(){this.bitsNeeded=0,this.codePoint=0}re.prototype.decode=function(e){function n(y,m,u){if(u===1)return y>=128>>m&&y<<m<=2047;if(u===2)return y>=2048>>m&&y<<m<=55295||y>=57344>>m&&y<<m<=65535;if(u===3)return y>=65536>>m&&y<<m<=1114111;throw new Error}function a(y,m){if(y===6*1)return m>>6>15?3:m>31?2:1;if(y===6*2)return m>15?3:2;if(y===6*3)return 3;throw new Error}for(var t=65533,c="",o=this.bitsNeeded,l=this.codePoint,E=0;E<e.length;E+=1){var p=e[E];o!==0&&(p<128||p>191||!n(l<<6|p&63,o-6,a(o,l)))&&(o=0,l=t,c+=String.fromCharCode(l)),o===0?(p>=0&&p<=127?(o=0,l=p):p>=192&&p<=223?(o=6*1,l=p&31):p>=224&&p<=239?(o=6*2,l=p&15):p>=240&&p<=247?(o=6*3,l=p&7):(o=0,l=t),o!==0&&!n(l,o,a(o,l))&&(o=0,l=t)):(o-=6,l=l<<6|p&63),o===0&&(l<=65535?c+=String.fromCharCode(l):(c+=String.fromCharCode(55296+(l-65535-1>>10)),c+=String.fromCharCode(56320+(l-65535-1&1023))))}return this.bitsNeeded=o,this.codePoint=l,c};var _e=function(){try{return new R().decode(new F().encode("test"),{stream:!0})==="test"}catch(e){console.debug("TextDecoder does not support streaming option. Using polyfill instead: "+e)}return!1};(R==null||F==null||!_e())&&(R=re);var H=function(){};function b(e){this.withCredentials=!1,this.readyState=0,this.status=0,this.statusText="",this.responseText="",this.onprogress=H,this.onload=H,this.onerror=H,this.onreadystatechange=H,this._contentType="",this._xhr=e,this._sendTimeout=0,this._abort=H}b.prototype.open=function(e,n){this._abort(!0);var a=this,t=this._xhr,c=1,o=0;this._abort=function(u){a._sendTimeout!==0&&(v(a._sendTimeout),a._sendTimeout=0),(c===1||c===2||c===3)&&(c=4,t.onload=H,t.onerror=H,t.onabort=H,t.onprogress=H,t.onreadystatechange=H,t.abort(),o!==0&&(v(o),o=0),u||(a.readyState=4,a.onabort(null),a.onreadystatechange())),c=0};var l=function(){if(c===1){var u=0,w="",Y=void 0;if("contentType"in t)u=200,w="OK",Y=t.contentType;else try{u=t.status,w=t.statusText,Y=t.getResponseHeader("Content-Type")}catch(ge){u=0,w="",Y=void 0}u!==0&&(c=2,a.readyState=2,a.status=u,a.statusText=w,a._contentType=Y,a.onreadystatechange())}},E=function(){if(l(),c===2||c===3){c=3;var u="";try{u=t.responseText}catch(w){}a.readyState=3,a.responseText=u,a.onprogress()}},p=function(u,w){if((w==null||w.preventDefault==null)&&(w={preventDefault:H}),E(),c===1||c===2||c===3){if(c=4,o!==0&&(v(o),o=0),a.readyState=4,u==="load")a.onload(w);else if(u==="error")a.onerror(w);else if(u==="abort")a.onabort(w);else throw new TypeError;a.onreadystatechange()}},y=function(u){t!=null&&(t.readyState===4?(!("onload"in t)||!("onerror"in t)||!("onabort"in t))&&p(t.responseText===""?"error":"load",u):t.readyState===3?"onprogress"in t||E():t.readyState===2&&l())},m=function(){o=i(function(){m()},500),t.readyState===3&&E()};"onload"in t&&(t.onload=function(u){p("load",u)}),"onerror"in t&&(t.onerror=function(u){p("error",u)}),"onabort"in t&&(t.onabort=function(u){p("abort",u)}),"onprogress"in t&&(t.onprogress=E),"onreadystatechange"in t&&(t.onreadystatechange=function(u){y(u)}),("contentType"in t||!("ontimeout"in s.prototype))&&(n+=(n.indexOf("?")===-1?"?":"&")+"padding=true"),t.open(e,n,!0),"readyState"in t&&(o=i(function(){m()},0))},b.prototype.abort=function(){this._abort(!1)},b.prototype.getResponseHeader=function(e){return this._contentType},b.prototype.setRequestHeader=function(e,n){var a=this._xhr;"setRequestHeader"in a&&a.setRequestHeader(e,n)},b.prototype.getAllResponseHeaders=function(){return this._xhr.getAllResponseHeaders!=null&&this._xhr.getAllResponseHeaders()||""},b.prototype.send=function(){if((!("ontimeout"in s.prototype)||!("sendAsBinary"in s.prototype)&&!("mozAnon"in s.prototype))&&_!=null&&_.readyState!=null&&_.readyState!=="complete"){var e=this;e._sendTimeout=i(function(){e._sendTimeout=0,e.send()},4);return}var n=this._xhr;"withCredentials"in n&&(n.withCredentials=this.withCredentials);try{n.send(void 0)}catch(a){throw a}};function le(e){return e.replace(/[A-Z]/g,function(n){return String.fromCharCode(n.charCodeAt(0)+32)})}function U(e){for(var n=Object.create(null),a=e.split(`\r
`),t=0;t<a.length;t+=1){var c=a[t],o=c.split(": "),l=o.shift(),E=o.join(": ");n[le(l)]=E}this._map=n}U.prototype.get=function(e){return this._map[le(e)]},s!=null&&s.HEADERS_RECEIVED==null&&(s.HEADERS_RECEIVED=2);function Ee(){}Ee.prototype.open=function(e,n,a,t,c,o,l){e.open("GET",c);var E=0;e.onprogress=function(){var y=e.responseText,m=y.slice(E);E+=m.length,a(m)},e.onerror=function(y){y.preventDefault(),t(new Error("NetworkError"))},e.onload=function(){t(null)},e.onabort=function(){t(null)},e.onreadystatechange=function(){if(e.readyState===s.HEADERS_RECEIVED){var y=e.status,m=e.statusText,u=e.getResponseHeader("Content-Type"),w=e.getAllResponseHeaders();n(y,m,u,new U(w))}},e.withCredentials=o;for(var p in l)Object.prototype.hasOwnProperty.call(l,p)&&e.setRequestHeader(p,l[p]);return e.send(),e};function ve(e){this._headers=e}ve.prototype.get=function(e){return this._headers.get(e)};function we(){}we.prototype.open=function(e,n,a,t,c,o,l){var E=null,p=new J,y=p.signal,m=new R;return K(c,{headers:l,credentials:o?"include":"same-origin",signal:y,cache:"no-store"}).then(function(u){return E=u.body.getReader(),n(u.status,u.statusText,u.headers.get("Content-Type"),new ve(u.headers)),new O(function(w,Y){var ge=function(){E.read().then(function(B){if(B.done)w(void 0);else{var k=m.decode(B.value,{stream:!0});a(k),ge()}}).catch(function(B){Y(B)})};ge()})}).catch(function(u){if(u.name!=="AbortError")return u}).then(function(u){t(u)}),{abort:function(){E!=null&&E.cancel(),p.abort()}}};function ne(){this._listeners=Object.create(null)}function be(e){i(function(){throw e},0)}ne.prototype.dispatchEvent=function(e){e.target=this;var n=this._listeners[e.type];if(n!=null)for(var a=n.length,t=0;t<a;t+=1){var c=n[t];try{typeof c.handleEvent=="function"?c.handleEvent(e):c.call(this,e)}catch(o){be(o)}}},ne.prototype.addEventListener=function(e,n){e=String(e);var a=this._listeners,t=a[e];t==null&&(t=[],a[e]=t);for(var c=!1,o=0;o<t.length;o+=1)t[o]===n&&(c=!0);c||t.push(n)},ne.prototype.removeEventListener=function(e,n){e=String(e);var a=this._listeners,t=a[e];if(t!=null){for(var c=[],o=0;o<t.length;o+=1)t[o]!==n&&c.push(t[o]);c.length===0?delete a[e]:a[e]=c}};function te(e){this.type=e,this.target=void 0}function he(e,n){te.call(this,e),this.data=n.data,this.lastEventId=n.lastEventId}he.prototype=Object.create(te.prototype);function f(e,n){te.call(this,e),this.status=n.status,this.statusText=n.statusText,this.headers=n.headers}f.prototype=Object.create(te.prototype);function d(e,n){te.call(this,e),this.error=n.error}d.prototype=Object.create(te.prototype);var g=-1,h=0,L=1,S=2,T=-1,C=0,z=1,oe=2,pe=3,Se=/^text\/event\-stream(;.*)?$/i,Ke=1e3,Je=18e6,Fe=function(e,n){var a=e==null?n:parseInt(e,10);return a!==a&&(a=n),xe(a)},xe=function(e){return Math.min(Math.max(e,Ke),Je)},se=function(e,n,a){try{typeof n=="function"&&n.call(e,a)}catch(t){be(t)}};function W(e,n){ne.call(this),n=n||{},this.onopen=void 0,this.onmessage=void 0,this.onerror=void 0,this.url=void 0,this.readyState=void 0,this.withCredentials=void 0,this.headers=void 0,this._close=void 0,Ye(this,e,n)}function ze(){return s!=null&&"withCredentials"in s.prototype||N==null?new s:new N}var We=K!=null&&ue!=null&&"body"in ue.prototype;function Ye(e,n,a){n=String(n);var t=Boolean(a.withCredentials),c=a.lastEventIdQueryParameterName||"lastEventId",o=xe(1e3),l=Fe(a.heartbeatTimeout,45e3),E="",p=o,y=!1,m=0,u=a.headers||{},w=a.Transport,Y=We&&w==null?void 0:new b(w!=null?new w:ze()),ge=w!=null&&typeof w!="string"?new w:Y==null?new we:new Ee,B=void 0,k=0,G=g,fe="",Te="",Q="",Ce="",P=C,Me=0,ae=0,Qe=function(D,I,X,q){if(G===h)if(D===200&&X!=null&&Se.test(X)){G=L,y=Date.now(),p=o,e.readyState=L;var j=new f("open",{status:D,statusText:I,headers:q});e.dispatchEvent(j),se(e,e.onopen,j)}else{var x="";D!==200?(I&&(I=I.replace(/\s+/g," ")),x="EventSource's response has a status "+D+" "+I+" that is not 200. Aborting the connection."):x="EventSource's response has a Content-Type specifying an unsupported type: "+(X==null?"-":X.replace(/\s+/g," "))+". Aborting the connection.",Ve();var j=new f("error",{status:D,statusText:I,headers:q});e.dispatchEvent(j),se(e,e.onerror,j),console.error(x)}},Ze=function(D){if(G===L){for(var I=-1,X=0;X<D.length;X+=1){var q=D.charCodeAt(X);(q===`
`.charCodeAt(0)||q==="\r".charCodeAt(0))&&(I=X)}var j=(I!==-1?Ce:"")+D.slice(0,I+1);Ce=(I===-1?Ce:"")+D.slice(I+1),D!==""&&(y=Date.now(),m+=D.length);for(var x=0;x<j.length;x+=1){var q=j.charCodeAt(x);if(P===T&&q===`
`.charCodeAt(0))P=C;else if(P===T&&(P=C),q==="\r".charCodeAt(0)||q===`
`.charCodeAt(0)){if(P!==C){P===z&&(ae=x+1);var Z=j.slice(Me,ae-1),ee=j.slice(ae+(ae<x&&j.charCodeAt(ae)===" ".charCodeAt(0)?1:0),x);Z==="data"?(fe+=`
`,fe+=ee):Z==="id"?Te=ee:Z==="event"?Q=ee:Z==="retry"?(o=Fe(ee,o),p=o):Z==="heartbeatTimeout"&&(l=Fe(ee,l),k!==0&&(v(k),k=i(function(){ye()},l)))}if(P===C){if(fe!==""){E=Te,Q===""&&(Q="message");var de=new he(Q,{data:fe.slice(1),lastEventId:Te});if(e.dispatchEvent(de),Q==="open"?se(e,e.onopen,de):Q==="message"?se(e,e.onmessage,de):Q==="error"&&se(e,e.onerror,de),G===S)return}fe="",Q=""}P=q==="\r".charCodeAt(0)?T:C}else P===C&&(Me=x,P=z),P===z?q===":".charCodeAt(0)&&(ae=x+1,P=oe):P===oe&&(P=pe)}}},je=function(D){if(G===L||G===h)G=g,k!==0&&(v(k),k=0),k=i(function(){ye()},p),p=xe(Math.min(o*16,p*2)),e.readyState=h;else if(G===S&&D!=null){console.error(D);var I=new d("error",{error:D});e.dispatchEvent(I),se(e,e.onerror,I)}},Ve=function(){G=S,B!=null&&(B.abort(),B=void 0),k!==0&&(v(k),k=0),e.readyState=S},ye=function(){if(k=0,G!==g){if(!y&&B!=null)je(new Error("No activity within "+l+" milliseconds. "+(G===h?"No response received.":m+" chars received.")+" Reconnecting.")),B!=null&&(B.abort(),B=void 0);else{var D=Math.max((y||Date.now())+l-Date.now(),1);y=!1,k=i(function(){ye()},D)}return}y=!1,m=0,k=i(function(){ye()},l),G=h,fe="",Q="",Te=E,Ce="",Me=0,ae=0,P=C;var I=n;if(n.slice(0,5)!=="data:"&&n.slice(0,5)!=="blob:"&&E!==""){var X=n.indexOf("?");I=X===-1?n:n.slice(0,X+1)+n.slice(X+1).replace(/(?:^|&)([^=&]*)(?:=[^&]*)?/g,function(ee,de){return de===c?"":ee}),I+=(n.indexOf("?")===-1?"?":"&")+c+"="+encodeURIComponent(E)}var q=e.withCredentials,j={};j.Accept="text/event-stream";var x=e.headers;if(x!=null)for(var Z in x)Object.prototype.hasOwnProperty.call(x,Z)&&(j[Z]=x[Z]);try{B=ge.open(Y,Qe,Ze,je,I,q,j)}catch(ee){throw Ve(),ee}};e.url=n,e.readyState=h,e.withCredentials=t,e.headers=u,e._close=Ve,ye()}W.prototype=Object.create(ne.prototype),W.prototype.CONNECTING=h,W.prototype.OPEN=L,W.prototype.CLOSED=S,W.prototype.close=function(){this._close()},W.CONNECTING=h,W.OPEN=L,W.CLOSED=S,W.prototype.withCredentials=void 0;var Pe=V;s!=null&&(V==null||!("withCredentials"in V.prototype))&&(Pe=W),function(e){if(typeof Ae=="object"&&typeof Ae.exports=="object"){var n=e(ke);n!==void 0&&(Ae.exports=n)}else typeof define=="function"&&define.amd?define(["exports"],e):e(r)}(function(e){e.EventSourcePolyfill=W,e.NativeEventSource=V,e.EventSource=Pe})})(typeof globalThis=="undefined"?typeof window!="undefined"?window:typeof self!="undefined"?self:ke:globalThis)});function Le(r){this.message=r}Le.prototype=new Error,Le.prototype.name="InvalidCharacterError";var Ue=typeof window!="undefined"&&window.atob&&window.atob.bind(window)||function(r){var i=String(r).replace(/=+$/,"");if(i.length%4==1)throw new Le("'atob' failed: The string to be decoded is not correctly encoded.");for(var v,s,N=0,A=0,V="";s=i.charAt(A++);~s&&(v=N%4?64*v+s:s,N++%4)?V+=String.fromCharCode(255&v>>(-2*N&6)):0)s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=".indexOf(s);return V};function dt(r){var i=r.replace(/-/g,"+").replace(/_/g,"/");switch(i.length%4){case 0:break;case 2:i+="==";break;case 3:i+="=";break;default:throw"Illegal base64url string!"}try{return function(v){return decodeURIComponent(Ue(v).replace(/(.)/g,function(s,N){var A=N.charCodeAt(0).toString(16).toUpperCase();return A.length<2&&(A="0"+A),"%"+A}))}(i)}catch(v){return Ue(i)}}function Ie(r){this.message=r}function ct(r,i){if(typeof r!="string")throw new Ie("Invalid token specified");var v=(i=i||{}).header===!0?0:1;try{return JSON.parse(dt(r.split(".")[v]))}catch(s){throw new Ie("Invalid token specified: "+s.message)}}Ie.prototype=new Error,Ie.prototype.name="InvalidTokenError";var $e=ct;function Be(r){return{all:r=r||new Map,on:function(i,v){var s=r.get(i);s&&s.push(v)||r.set(i,[v])},off:function(i,v){var s=r.get(i);s&&s.splice(s.indexOf(v)>>>0,1)},emit:function(i,v){(r.get(i)||[]).slice().map(function(s){s(v)}),(r.get("*")||[]).slice().map(function(s){s(i,v)})}}}var Ge=ft(Xe());var $;(function(r){r.READY="ready",r.CONNECTED="connected",r.DISCONNECTED="disconnected",r.RECONNECTED="reconnected",r.CHANGED="changed",r.ERROR="error"})($||($={}));var qe={debug:!1,baseUrl:"https://config.ff.harness.io/api/1.0",eventUrl:"https://events.ff.harness.io/api/1.0",streamEnabled:!0,allAttributesPrivate:!1,privateAttributeNames:[]},ce=(r,...i)=>console.error(`[FF-SDK] ${r}`,...i),Oe=30*1e3;var ut="1.4.4",lt=500,De=globalThis.fetch,vt=Ge.EventSourcePolyfill,me=!!globalThis.Proxy,Ne=r=>{let{value:i}=r;try{switch(r.kind.toLowerCase()){case"int":case"number":i=Number(i);break;case"boolean":i=i.toString().toLowerCase()==="true";break;case"json":i=JSON.parse(i);break}}catch(v){ce(v)}return i},ht=(r,i,v)=>{let s,N,A,V,_,O=!0,K=()=>{O=!1},ue=()=>{O=!0},R=[],F=Be(),J=ie(ie({},qe),v),M=(f,...d)=>{J.debug&&console.debug(`[FF-SDK] ${f}`,...d)},re=f=>{if(O){let d=Date.now();d-f.lastAccessed>lt&&(f.count++,f.lastAccessed=d)}};globalThis.onbeforeunload=()=>{R.length&&globalThis.localStorage&&(K(),globalThis.localStorage.HARNESS_FF_METRICS=JSON.stringify(R),ue())};let _e=(f,d)=>Re(void 0,null,function*(){return(yield(yield De(`${d.baseUrl}/client/auth`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({apiKey:f,target:i})})).json()).authToken}),H=()=>{if(R.length){M("Sending metrics...",{metrics:R,evaluations:b});let f={metricsData:R.map(d=>({timestamp:Date.now(),count:d.count,metricsType:"FFMETRICS",attributes:[{key:"featureIdentifier",value:d.featureIdentifier},{key:"featureName",value:d.featureIdentifier},{key:"variationIdentifier",value:d.variationIdentifier},{key:"target",value:i.identifier},{key:"SDK_NAME",value:"JavaScript"},{key:"SDK_TYPE",value:"client"},{key:"SDK_VERSION",value:ut}]}))};De(`${J.eventUrl}/metrics/${s}?cluster=${N}`,{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${V}`},body:JSON.stringify(f)}).then(()=>{R=[]}).catch(d=>{M(d)}).finally(()=>{_=window.setTimeout(H,Oe)})}else _=window.setTimeout(H,Oe)},b={},le=function(){return me?new Proxy({},{get(f,d){var h,L,S;let g=f[d];if(f.hasOwnProperty(d)){let T=f[d],C=R.find(z=>z.featureIdentifier===d&&T===z.featureValue);C?(C.variationIdentifier=((h=b[d])==null?void 0:h.identifier)||"",re(C)):R.push({featureIdentifier:d,featureValue:T,variationIdentifier:((L=b[d])==null?void 0:L.identifier)||"",count:O?1:0,lastAccessed:Date.now()}),M("Metrics event: Flag:",d,"has been read with value:",T,"variationIdentifier:",(S=b[d])==null?void 0:S.identifier)}return g}}):{}},U=le();_e(r,J).then(f=>{V=f;let d=$e(f);if(M("Authenticated",d),globalThis.localStorage&&globalThis.localStorage.HARNESS_FF_METRICS)try{delete globalThis.localStorage.HARNESS_FF_METRICS,M("Picking up metrics from previous session")}catch(g){}_=window.setTimeout(H,Oe),s=d.environment,N=d.clusterIdentifier,Ee().then(()=>{M("Fetch all flags ok",U)}).then(()=>{we()}).then(()=>{M("Event stream ready",{storage:U}),F.emit($.READY,U),me||Object.keys(U).forEach(g=>{var h;R.push({featureIdentifier:g,featureValue:U[g],variationIdentifier:((h=b[g])==null?void 0:h.identifier)||"",count:O?1:0,lastAccessed:Date.now()})})}).catch(g=>{F.emit($.ERROR,g)})}).catch(f=>{ce("Authentication error: ",f),F.emit($.ERROR,f)});let Ee=()=>Re(void 0,null,function*(){try{(yield(yield De(`${J.baseUrl}/client/env/${s}/target/${i.identifier}/evaluations?cluster=${N}`,{headers:{Authorization:`Bearer ${V}`}})).json()).forEach(g=>{let h=Ne(g);U[g.flag]=h,b[g.flag]=ie(ie({},g),{value:h})})}catch(f){return ce("Features fetch operation error: ",f),F.emit($.ERROR,f),f}}),ve=f=>Re(void 0,null,function*(){var d;try{let g=yield De(`${J.baseUrl}/client/env/${s}/target/${i.identifier}/evaluations/${f}?cluster=${N}`,{headers:{Authorization:`Bearer ${V}`}});if(g.ok){let h=yield g.json(),L=Ne(h);if(K(),U[f]=L,b[f]=ie(ie({},h),{value:L}),ue(),F.emit($.CHANGED,me?new Proxy(h,{get(S,T){var C;if(S.hasOwnProperty(T)&&T==="value"){let z=S.flag,oe=h.value,pe=R.find(Se=>Se.featureIdentifier===z&&Se.featureValue===oe);pe?(re(pe),pe.variationIdentifier=((C=b[z])==null?void 0:C.identifier)||""):R.push({featureIdentifier:z,featureValue:String(oe),variationIdentifier:b[z].identifier||"",count:O?1:0,lastAccessed:Date.now()}),M("Metrics event: Flag",T,"has been read with value via stream update",oe)}return T==="value"?Ne(h):h[T]}}):{deleted:h.deleted,flag:h.flag,value:Ne(h)}),!me){let S=h.flag,T=R.find(C=>C.featureIdentifier===S&&C.featureValue===h.value);T?(re(T),T.variationIdentifier=((d=b[S])==null?void 0:d.identifier)||""):R.push({featureIdentifier:S,featureValue:String(h.value),variationIdentifier:b[S].identifier||"",count:O?1:0,lastAccessed:Date.now()})}}else F.emit($.ERROR,g)}catch(g){ce("Feature fetch operation error: ",g),F.emit($.ERROR,g)}}),we=()=>{if(!J.streamEnabled){M("Stream is disabled by configuration. Note: Polling is not yet supported");return}A=new vt(`${J.baseUrl}/stream?cluster=${N}`,{headers:{Authorization:`Bearer ${V}`,"API-Key":r}}),A.onopen=f=>{M("Stream connected",f),F.emit($.CONNECTED)},A.onclose=f=>{M("Stream disconnected"),F.emit($.DISCONNECTED)},A.onerror=f=>{ce("Stream has issue",f),F.emit("error",f)},A.addEventListener("*",f=>{let d=JSON.parse(f.data);switch(M("Received event from stream: ",d),d.event){case"create":setTimeout(()=>ve(d.identifier),1e3);break;case"patch":ve(d.identifier);break;case"delete":delete U[d.identifier],F.emit($.CHANGED,{flag:d.identifier,value:void 0,deleted:!0}),M("Evaluation deleted",{message:d,storage:U});break}})},ne=(f,d)=>F.on(f,d),be=(f,d)=>{f?F.off(f,d):he()},te=(f,d)=>{var h;let g=U[f];if(!me&&g!==void 0){let L=g,S=f,T=R.find(C=>C.featureIdentifier===S&&C.featureValue===L);T?(re(T),T.variationIdentifier=((h=b[S])==null?void 0:h.identifier)||""):R.push({featureIdentifier:S,featureValue:L,count:O?1:0,variationIdentifier:b[S].identifier||"",lastAccessed:Date.now()})}return g!==void 0?g:d},he=()=>{M("Closing event stream"),U=le(),b={},clearTimeout(_),F.all.clear(),A.close()};return{on:ne,off:be,variation:te,close:he}};export{$ as Event,ht as initialize};
/** @license
 * eventsource.js
 * Available under MIT License (MIT)
 * https://github.com/Yaffle/EventSource/
 */
//# sourceMappingURL=sdk.client.js.map
