(this["webpackJsonpg21-trivia"]=this["webpackJsonpg21-trivia"]||[]).push([[0],{137:function(e,t){},155:function(e,t,a){},156:function(e,t,a){"use strict";a.r(t);var n,r=a(0),o=a.n(r),i=a(13),c=a.n(i),l=a(11),s=a(52);!function(e){e[e.INIT=0]="INIT",e[e.LOADING=1]="LOADING",e[e.LOADED=2]="LOADED"}(n||(n={}));var u={status:n.INIT,questions:[]},m=Object(s.b)({name:"quiz",initialState:u,reducers:{setStatus:function(e,t){e.status=t.payload,t.payload===n.INIT&&(e.questions=[])},addQuestions:function(e,t){e.questions=t.payload},submitAnswer:function(e,t){e.questions=e.questions.map((function(e){if(e.question===t.payload.question&&"boolean"===e.type)switch(e.type){case"boolean":var a=e.correct_answer,n=/true/i.test(a);e.is_correct=n===t.payload.answer;break;default:e.is_correct=!1}return e}))}}}),p=Object(s.a)({reducer:m.reducer}),d=m.actions,f=d.setStatus,b=d.addQuestions,h=d.submitAnswer,E=(m.reducer,a(30)),y=a.n(E),v=a(42),g=a(35),O=a(25),j=a(187),x=a(188),q=a(189),w=a(84),k=a(191),N=a(186),_=a(73),I=a.n(_),z=a(74),A=a(20),D=a(18),T=a(46),C=a(177),F=a(178),L=a(76),W=a.n(L),B=function(){var e=Object(l.b)(),t=Object(O.g)(),a=Object(l.c)((function(e){return e.questions})),i=Object(D.partition)(a,(function(e){return!Object(D.isNil)(e.is_correct)})),c=Object(A.a)(i,1)[0];function s(){return(s=Object(v.a)(y.a.mark((function t(){return y.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:e(f(n.INIT));case 1:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(r.useEffect)((function(){c.length>0&&function(){s.apply(this,arguments)}()})),o.a.createElement(o.a.Fragment,null,o.a.createElement(T.a,{variant:"h4",component:"h1",color:"primary"},"Welcome to the Triva Challenge!"),o.a.createElement(q.a,{py:"1em"},o.a.createElement(T.a,{variant:"h5",component:"p"},"You will be presented with 10 True or False questions.")),o.a.createElement(T.a,{variant:"h5",component:"p"},"Can you score 100%?"),o.a.createElement(q.a,{py:"3em"},o.a.createElement(C.a,{variant:"extended",color:"primary",size:"large",onClick:function(){return t.push("/quiz/1")}},"Begin\xa0",o.a.createElement(W.a,null))),o.a.createElement(F.a,{variant:"determinate",value:0,color:"primary",style:{position:"fixed",top:0,left:0,right:0,height:"1px"}}))},H=a(80),Q=a.n(H),S=a(190),G=a(45),J=a.n(G),Y=a(180),M=a(179),R=a(78),P=a.n(R),X=a(79),$=a.n(X),K=a(192),U=function(e){var t=e.question,a=e.answerQuestion;return o.a.createElement(K.a,{className:"card",variant:"outlined",style:{maxWidth:"600px",margin:"0 auto"}},o.a.createElement(M.a,null,o.a.createElement(q.a,{py:"0.4em",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",minHeight:160,textAlign:"center"},o.a.createElement(T.a,{variant:"h5",component:"p"},J()(t))),o.a.createElement(Y.a,{style:{display:"block"}},o.a.createElement(C.a,{variant:"extended",color:"primary",onClick:function(){return a(!0)}},"True\xa0",o.a.createElement(P.a,null))," ",o.a.createElement(C.a,{variant:"extended",color:"primary",onClick:function(){return a(!1)}},"False\xa0",o.a.createElement($.a,null)))))},V=a(182),Z=a(77),ee=a(181),te=a(27),ae=function(e){var t=Object(Z.a)(),a=(e.completed-1)/e.total*100,n=Object(ee.a)({root:{position:"relative",textAlign:"center",width:"100px",margin:"0 auto"},top:{position:"absolute",left:0},bottom:{position:"absolute",left:0,color:Object(te.a)(t.palette.primary.main,.5)},label:{position:"relative",top:"62px"}})();return o.a.createElement("div",{className:n.root},o.a.createElement(T.a,{variant:"body1",component:"p",className:n.label},e.completed," of ",e.total),o.a.createElement(V.a,{variant:"static",className:n.bottom,value:100,thickness:2,size:100}),o.a.createElement(V.a,{variant:"static",color:"primary",className:n.top,value:a+5,thickness:2,size:100}))},ne=function(){var e=Object(l.b)(),t=Object(O.h)().questionIndex,a=Object(O.g)(),n=+t,i=Object(l.c)((function(e){return e.questions})),c=i.length,s=Object(D.partition)(i,(function(e){return!Object(D.isNil)(e.is_correct)})),u=Object(A.a)(s,1)[0],m=n===u.length+1,p=(n-1)/c*100,d=!m&&n===c;Object(r.useEffect)((function(){d?a.push("/results"):m||a.push("/quiz/".concat(u.length+1))}),[u.length,a,m,d]);var f=i[+t-1],b=f.question,E=f.category;if(!b)return o.a.createElement("p",null,"Oops, the question failed to load! Reload the quiz to try again.");var y=function(t){e(h({answer:t,question:b}))};return o.a.createElement(o.a.Fragment,null,o.a.createElement(q.a,{pb:"1em",style:{minHeight:"400px"}},i.map((function(e,t){return o.a.createElement(O.b,{key:t,exact:!0,path:"/quiz/".concat(t+1)},(function(a){var n=null!=a.match;return o.a.createElement(S.a,{in:n,timeout:1e3,classNames:"question",unmountOnExit:!0},o.a.createElement(q.a,{pb:"1em",key:t,className:"question"},o.a.createElement("div",{className:"category"},o.a.createElement(T.a,{variant:"h4",component:"h2",color:"primary"},o.a.createElement(Q.a,{color:"secondary"})," ",E)),o.a.createElement(U,{question:e.question,answerQuestion:y})))}))}))),o.a.createElement(ae,{completed:n,total:c}),o.a.createElement(F.a,{variant:"determinate",value:p,color:"primary",style:{position:"fixed",top:0,left:0,right:0,height:"1px"}}))},re=a(183),oe=a(193),ie=a(184),ce=a(185),le=a(81),se=a.n(le),ue=a(82),me=a.n(ue),pe=a(83),de=a.n(pe),fe=function(){var e=Object(O.g)(),t=Object(l.c)((function(e){return e.questions})),a=t.length,n=Object(D.partition)(t,(function(e){return!Object(D.isNil)(e.is_correct)})),r=Object(A.a)(n,1)[0];if(!(r.length===a))return o.a.createElement(O.a,{to:"/quiz/".concat(r.length+1)});var i=Object(D.partition)(t,(function(e){return!0===e.is_correct})),c=Object(A.a)(i,1)[0];return o.a.createElement(o.a.Fragment,null,o.a.createElement(T.a,{variant:"h4",component:"h2"},"You scored ",c.length," / ",a),o.a.createElement(q.a,{py:"1em"},o.a.createElement(K.a,{variant:"outlined",style:{maxWidth:"600px",margin:"0 auto"}},o.a.createElement(M.a,null,o.a.createElement(re.a,{dense:!0},t.map((function(e){return o.a.createElement(oe.a,{key:e.question},o.a.createElement(ie.a,null,e.is_correct?o.a.createElement(se.a,{color:"primary"}):o.a.createElement(me.a,{color:"secondary"})),o.a.createElement(ce.a,{primary:J()(e.question),secondary:"Correct answer: ".concat(e.correct_answer,".")}))})))))),o.a.createElement(q.a,{py:"2em"},o.a.createElement(C.a,{variant:"extended",color:"primary",size:"large",onClick:function(){return e.push("/")}},"Play again?\xa0",o.a.createElement(de.a,null))),o.a.createElement(F.a,{variant:"determinate",value:100,color:"primary",style:{position:"fixed",top:0,left:0,right:0,height:"1px"}}))},be=function(){var e=Object(l.c)((function(e){return e.status})),t=Object(l.b)(),a=Object(w.a)({palette:{type:"dark",primary:{main:"#2D7FF9"},secondary:{main:"#E23E2F"},background:{default:"#1E1E1E"}},typography:{fontFamily:["Roboto",'"Helvetica Neue"',"Arial","sans-serif"].join(",")},overrides:{MuiTypography:{h4:{minHeight:"2.4em",marginBottom:"0.5em"}},MuiCardContent:{root:{padding:"24px"}}}});function i(){return(i=Object(v.a)(y.a.mark((function a(){return y.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(e!==n.INIT){a.next=6;break}return t(f(n.LOADING)),a.next=4,fetch("https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean");case 4:a.sent.json().then((function(e){t(b(e.results)),t(f(n.LOADED))}));case 6:case"end":return a.stop()}}),a)})))).apply(this,arguments)}return a=Object(k.a)(a),Object(r.useEffect)((function(){!function(){i.apply(this,arguments)}()})),o.a.createElement(N.a,{theme:a},o.a.createElement(j.a,null),o.a.createElement(I.a,{params:z,style:{position:"absolute",top:0,left:0,right:0,bottom:0,overflow:"hidden"}}),o.a.createElement(x.a,{fixed:!0},o.a.createElement(q.a,{textAlign:"center",marginTop:"3em"},o.a.createElement(g.a,{basename:"".concat("/trivia-demo","/")},o.a.createElement(O.d,null,o.a.createElement(O.b,{exact:!0,path:"/",component:B}),o.a.createElement(O.b,{exact:!0,path:"/quiz/:questionIndex"},e===n.LOADED?o.a.createElement(ne,null):o.a.createElement(V.a,{color:"primary"})),o.a.createElement(O.b,{exact:!0,path:"/results",component:fe}))))))};a(155),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(l.a,{store:p},o.a.createElement(be,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},74:function(e){e.exports=JSON.parse('{"particles":{"number":{"value":300,"density":{"enable":true,"value_area":800}},"color":{"value":"#ffffff"},"shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},"polygon":{"nb_sides":5}},"opacity":{"value":0.25,"random":false,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},"size":{"value":3,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},"line_linked":{"enable":false,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},"move":{"enable":true,"speed":1,"direction":"none","random":false,"straight":false,"out_mode":"out","bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":false,"mode":"repulse"},"onclick":{"enable":false,"mode":"push"},"resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},"bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true}')},95:function(e,t,a){e.exports=a(156)}},[[95,1,2]]]);
//# sourceMappingURL=main.e8aa8005.chunk.js.map