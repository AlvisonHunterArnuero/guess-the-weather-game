(this["webpackJsonpguess-weather"]=this["webpackJsonpguess-weather"]||[]).push([[0],{17:function(e,t,r){},24:function(e,t,r){},25:function(e,t,r){"use strict";r.r(t);var s=r(1),a=r.n(s),n=r(5),c=r.n(n),i=(r(17),r(8)),u=r.n(i),o=r(10),l=r(12),d=r(3),p=r(0),b=function(e){var t="",r=e.arrResponses.filter((function(e){return!1===e.isCorrect})).length;if(5===e.currentCity&&r<2)t="pet/happy.png";else switch(r){case 1:t="pet/sad.png";break;case 2:t="pet/sweat.png";break;case 3:t="pet/surprised.png";break;case 4:t="pet/cry.png";break;default:t="pet/welcome.png"}return Object(p.jsx)("div",{className:"card bg-dark text-white mb-3 my-4",children:Object(p.jsxs)("div",{className:"row g-0",children:[Object(p.jsx)("div",{className:"col-md-4",children:Object(p.jsx)("img",{src:t,className:"img-fluid rounded-start w-50 my-2",alt:e.currentCity})}),Object(p.jsx)("div",{className:"col-md-8",children:Object(p.jsxs)("div",{className:"card-body",children:[Object(p.jsx)("h5",{className:"card-title display-6 text-warning text-uppercase text-start",children:"Guess The Weather Game"}),Object(p.jsx)("p",{className:"card-text fs-5 col-11 my-4 text-start",children:"Hello pals, I am the weather Jiraffe. In this game, 5 cities will be displayed in the screen one by one. your mission, if you decide to take it, will be to guess the current weather in each of these cities you're are being presented with. If you assert in at least 3 of them, with a deviation of 5 grades maxs, you shall certainly win, otherwise you lose. Are you ready for this quest, champion?"}),5===e.currentCity&&Object(p.jsx)("div",{className:"row text-center",children:r<3?Object(p.jsx)("h1",{className:"text-success",children:'"You\'ve won, Congrats!"'}):Object(p.jsx)("h1",{className:"text-danger",children:'"Oh, no: You lose, pal!"'})})]})})]})})},j=function(e){var t=e.currentCity;return Object(p.jsx)("div",{className:"progress",children:Object(p.jsx)("div",{className:"progress-bar progress-bar-striped progress-bar-animated",role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100",style:{width:20*t+"%"}})})},h=function(e){var t=e.arrResponses;return Object(p.jsx)("div",{children:Object(p.jsx)("ul",{className:"list-group list-group-numbered",children:t.map((function(e,t){var r=e.city,s=e.userResponse,a=e.cityTemperature,n=e.isCorrect;return Object(p.jsxs)("li",{className:"list-group-item d-flex justify-content-between align-items-start",children:[Object(p.jsxs)("div",{className:"ms-2 me-auto text-muted",children:[Object(p.jsx)("div",{className:"fw-bold text-dark",children:r}),Object(p.jsxs)("span",{className:n?"text-primary small ms-3":"text-danger small ms-3 text-decoration-line-through",children:["Your Guess: ",s,"\xb0C"]})]}),Object(p.jsxs)("span",{className:"badge bg-dark p-3 w-25",children:[a," \xb0C"]})]},t)}))})})},m=function(){return Object(p.jsx)("div",{className:"spinner-border text-primary my-3",role:"status",children:Object(p.jsx)("span",{className:"visually-hidden",children:"Loading..."})})},y=function(e){return Object(p.jsxs)("div",{className:"input-group mb-3",children:[Object(p.jsx)("input",{value:e.temperature||"",onChange:e.handleInputChange,onFocus:function(e){return e.target.value=""},type:"text",placeholder:e.fillerText,className:"form-control","aria-label":e.placeholder,"aria-describedby":"button-addon2"}),Object(p.jsx)("button",{className:"btn btn-outline-secondary",type:"button",id:"button-addon2",onClick:e.handleSubmit,children:" Submit"})]})},f=(r(24),"user/setTemperature"),x="city/setCurrent",O="user/updateResponses",g="city/setWeather",v="city/setLoading",w=function(e){return{type:f,payload:e}},N=function(e){return{type:x,payload:e}},C=function(e){return{type:O,payload:e}},k=function(e){return function(t){return t(R(!0)),fetch("https://api.openweathermap.org/data/2.5/weather?q="+e+"&units=metric&appid=9cff733aee57cb05b63dd4f731c46bc4").then((function(e){if(e.ok)return e;throw new Error(e.status+e.statusText)})).then((function(e){return e.json()})).then((function(e){return t(W(e))}))}},W=function(e){return{type:g,payload:e}},R=function(e){return{type:v,payload:e}},T=["Managua","London","Amsterdam","Paris","Berlin"],L=function(){var e=Object(d.c)((function(e){return e.guessWeather.temperature})),t=Object(d.c)((function(e){return e.guessWeather.currentCity})),r=Object(d.c)((function(e){return e.guessWeather.arrResponses})),a=Object(d.c)((function(e){return e.guessWeather.cityWeather})),n=Object(d.c)((function(e){return e.guessWeather.isLoading})),c=Object(d.b)(),i=function(){c(w(0)),c(C([])),c(N(0))};Object(s.useEffect)((function(){if("{}"!==JSON.stringify(a)){var s=a.main.temp,n=[].concat(Object(l.a)(r),[{city:T[t],userResponse:e,isCorrect:parseFloat(e)>=s&&parseFloat(e)<=s+5,cityTemperature:s}]);c(C(n)),c(w(0)),c(N(t+1))}}),[a]);var f=function(){var e=Object(o.a)(u.a.mark((function e(r){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r.preventDefault(),t<5?c(k(T[t])):i();case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{className:"App container",children:[Object(p.jsxs)("div",{className:"row",children:[Object(p.jsx)(b,{currentCity:t,arrResponses:r}),5!==t&&Object(p.jsxs)(p.Fragment,{children:[n?Object(p.jsx)(m,{}):Object(p.jsxs)("h5",{className:"text-secondary lead my-2",children:[Object(p.jsx)("span",{className:"fw-bold text-uppercase text-dark",children:"Current City:"})," ",T[t]||"All cities have been displayed"]}),Object(p.jsx)(y,{temperature:e,fillerText:"Type in your best guess",currentCity:t,handleInputChange:function(e){c(w(e.target.value))},handleSubmit:f})]})]}),Object(p.jsx)("div",{className:"row my-2",children:Object(p.jsx)(j,{currentCity:t})}),Object(p.jsx)("div",{className:"row",children:Object(p.jsx)(h,{arrResponses:r})}),Object(p.jsx)("div",{className:"row my-3 justify-content-center",children:t>=5&&Object(p.jsx)("button",{className:"btn btn-outline-success text-uppercase",type:"button",id:"button-addon2",onClick:i,children:"Play Again"})})]})},F=r(4),I=r(11),S=r(2),A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{temperature:0,currentCity:0,arrResponses:[],cityWeather:{},isLoading:!1},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f:return Object(S.a)(Object(S.a)({},e),{},{temperature:t.payload});case x:return Object(S.a)(Object(S.a)({},e),{},{currentCity:t.payload});case O:return Object(S.a)(Object(S.a)({},e),{},{arrResponses:t.payload});case g:return Object(S.a)(Object(S.a)({},e),{},{cityWeather:t.payload,isLoading:!1});case v:return Object(S.a)(Object(S.a)({},e),{},{isLoading:t.payload});default:return e}},J=Object(F.b)({guessWeather:A}),P=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,26)).then((function(t){var r=t.getCLS,s=t.getFID,a=t.getFCP,n=t.getLCP,c=t.getTTFB;r(e),s(e),a(e),n(e),c(e)}))},B=Object(F.c)(J,Object(F.a)(I.a));c.a.render(Object(p.jsxs)(a.a.StrictMode,{children:[Object(p.jsx)(d.a,{store:B,children:Object(p.jsx)(L,{})}),","]}),document.getElementById("root")),P()}},[[25,1,2]]]);
//# sourceMappingURL=main.0ab0866a.chunk.js.map