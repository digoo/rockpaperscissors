(this.webpackJsonprockpaperscissors=this.webpackJsonprockpaperscissors||[]).push([[0],{40:function(e,n,t){e.exports=t.p+"static/media/regular.bdc69844.jpg"},41:function(e,n,t){e.exports=t.p+"static/media/thebigbangtheory.909d7a21.jpg"},46:function(e,n,t){e.exports=t(56)},56:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(33),l=t.n(o),c=t(60),s=t(7),p=t(8);function i(){var e=Object(s.a)(["\n@import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');\n\n* {\n  margin: 0;\n  padding: 0;\n  outline: 0;\n  box-sizing: border-box;\n  }\n\n  *:focus {\n    outline: 0;\n  }\n  html, body, #root {\n    height: 100%;\n  }\n\nbody {\n  height: 100%;\n  background: linear-gradient(-90deg, #7159c1, #ab59c1);\n  -webkit-font-smoothing: antialiased;\n}\n\nbody, input, button {\n  font: 14px Roboto, sans-serif;\n}\n\na {\n    text-decoration: none;\n  }\n\n  ul {\n    list-style: none;\n  }\n\nbutton {\n  cursor: pointer;\n}\n\n"]);return i=function(){return e},e}var m=Object(p.a)(i()),u=t(10),b=Object(u.a)(),y=t(2),g=t(5),f=t(24),d=t(23),O=t(14);function h(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n\n  div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    /* border: 1px solid #eee; */\n    margin: 30px auto;\n\n    strong {\n      font-weight: bold;\n      font-size: 22px;\n      color: #fff;\n      text-align: center;\n      margin-bottom: 15px;\n    }\n\n    img {\n      width: 300px;\n      height: 300px;\n    }\n  }\n\n  form {\n    display: flex;\n    flex-direction: column;\n    width: 300px;\n    height: 500px;\n    align-items: center;\n    justify-content: center;\n    text-align: center;\n    border: 1px solid #eee;\n    margin: 30px auto;\n\n    p {\n      color: #fff;\n      font-weight: bold;\n      margin-top: 5px;\n    }\n\n    input {\n      background: rgba(0, 0, 0, 0.1);\n      border: 0;\n      border-radius: 4px;\n      height: 34px;\n      padding: 0 15px;\n      color: #fff;\n      margin: 0 0 5px;\n\n      &:hover {\n        background: ",";\n      }\n\n      &::placeholder {\n        color: rgba(255, 255, 255, 0.7);\n      }\n    }\n    select {\n      background: rgba(0, 0, 0, 0.1);\n      border: 0;\n      border-radius: 4px;\n      height: 24px;\n      padding: 0 5px;\n      color: #fff;\n      margin: 0 0 5px;\n\n      &:hover {\n        background: ",";\n      }\n    }\n    option {\n      color: #fff;\n      background: #7159c1;\n    }\n\n    button {\n      margin: 15px 0 0;\n      height: 34px;\n      width: 188px;\n      background: #7159c1;\n      font-weight: bold;\n      color: #fff;\n      border: 0;\n      border-radius: 4px;\n      font-size: 16px;\n      transition: background 0.2s;\n\n      &:hover {\n        background: ",";\n      }\n      &:active {\n        background: ",";\n      }\n    }\n  }\n"]);return h=function(){return e},e}var j=p.b.div(h(),Object(O.b)(.09,"rgba(0, 0, 0, 0.1)"),Object(O.b)(.09,"rgba(0, 0, 0, 0.1)"),Object(O.a)(.03,"#7159c1"),Object(O.b)(.09,"#7159c1")),v=t(40),k=t.n(v),x=t(41),E=t.n(x),S=f.a().shape({player1Name:f.b().required("Player name is required."),player2Name:f.b().required("Player name is required.")});function N(){var e=Object(a.useState)({player1:{name1:"",bg1:""},player2:{name2:"",bg2:""},bestOf:3}),n=Object(g.a)(e,2),t=n[0],o=n[1];Object(a.useEffect)((function(){var e=JSON.parse(localStorage.getItem("players"));e&&o(e)}),[]);var l=Object(a.useState)(["Red","Blue","Orange","Green","Yellow","Pink"]),c=Object(g.a)(l,1)[0],s=Object(a.useCallback)((function(e){o(Object(y.a)({},t,{player1:Object(y.a)({},t.player1,{bg1:e.target.value})}))}),[t]),p=Object(a.useCallback)((function(e){o(Object(y.a)({},t,{player2:Object(y.a)({},t.player2,{bg2:e.target.value})}))}),[t]),i=Object(a.useCallback)((function(e){o(Object(y.a)({},t,{player1:Object(y.a)({},t.player1,{name1:e.target.value})}))}),[t]),m=Object(a.useCallback)((function(e){o(Object(y.a)({},t,{player2:Object(y.a)({},t.player2,{name2:e.target.value})}))}),[t]),u=Object(a.useState)([3,5,7,9,11,13,15]),f=Object(g.a)(u,1)[0],O=Object(a.useCallback)((function(e){o(Object(y.a)({},t,{bestOf:e.target.value}))}),[t]),h=Object(a.useState)(["Normal","TheBigBangTheory"]),v=Object(g.a)(h,1)[0],x=Object(a.useState)(["Player","Computer","AdvComputer"]),N=Object(g.a)(x,1)[0],w=Object(a.useState)(["rock","paper","scissors"]),T=Object(g.a)(w,1)[0],C=Object(a.useState)(["rock","paper","scissors","lizard","spock"]),P=Object(g.a)(C,1)[0],M=Object(a.useState)({game:"Normal",playerType:"Computer",play:"play"}),B=Object(g.a)(M,2),I=B[0],J=B[1],z=Object(a.useCallback)((function(e){J(Object(y.a)({},I,{game:e.target.value}))}),[I]),F=Object(a.useCallback)((function(e){J(Object(y.a)({},I,{playerType:e.target.value}))}),[I]);return r.a.createElement(r.a.Fragment,null,r.a.createElement(j,{className:"all"},r.a.createElement("div",null,r.a.createElement("strong",null,"Normal Game"),r.a.createElement("img",{src:k.a,alt:"Normal game"})),r.a.createElement(d.a,{schema:S,onSubmit:function(){localStorage.setItem("modes",JSON.stringify(I)),"Normal"===I.game?localStorage.setItem("customSymbols",JSON.stringify(T)):"TheBigBangTheory"===I.game&&localStorage.setItem("customSymbols",JSON.stringify(P)),localStorage.setItem("players",JSON.stringify(t)),b.push("/rockpaperscissors/game")}},r.a.createElement("p",null,"Name of the Player 1:"),r.a.createElement(d.b,{type:"text",name:"player1Name",id:"player1Name",onChange:i,value:t.player1.name1,placeholder:"Please add a player name"}),r.a.createElement("p",null,"Name of the Player 2:"),r.a.createElement(d.b,{type:"text",name:"player2Name",id:"player2Name",onChange:m,value:t.player2.name2,placeholder:"Please add a player name"}),r.a.createElement("p",null,"Color flag of the Player 1:"),r.a.createElement("select",{value:t.player1.bg1,onChange:s},c.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement("p",null,"Color flag of the Player 2:"),r.a.createElement("select",{value:t.player2.bg2,onChange:p},c.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement("p",null,"How long you want to play? Set the bestOf:"),r.a.createElement("select",{value:t.bestOf,onChange:O},f.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement("p",null,"What kind of game you want to play? (Instructions on edges)"),r.a.createElement("select",{value:I.game,onChange:z},v.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement("p",null,"Would you like to play against who?"),r.a.createElement("select",{value:I.playerType,onChange:F},N.map((function(e){return r.a.createElement("option",{key:e,value:e},e)}))),r.a.createElement("button",{type:"submit"},"Let's play!")),r.a.createElement("div",null,r.a.createElement("strong",null,"The big bang theory Game"),r.a.createElement("img",{src:E.a,alt:"The big bang theory game"}))))}var w=t(59);function T(){var e=Object(s.a)(["\n  display: flex;\n  width: 350px;\n  height: 40px;\n  margin-top: 20px;\n  justify-content: space-evenly;\n  align-items: center;\n  background: linear-gradient(-90deg, #7159c1, #ab59c1);\n  border: 1px solid #eee;\n  color: white;\n\n  &:hover {\n    background: ",";\n  }\n\n  &:active {\n    background: ",";\n  }\n"]);return T=function(){return e},e}function C(){var e=Object(s.a)(["\n  width: 20px;\n  height: 20px;\n  border: 2px solid #ffe;\n  text-align: center;\n  color: #fff;\n  font-weight: bold;\n"]);return C=function(){return e},e}function P(){var e=Object(s.a)(["\n  width: 190px;\n  height: 190px;\n  margin: 19px;\n  border-radius: 50%;\n  background-color: ",";\n  background-image: ",";\n  text-align: center;\n  border: 2px solid #ffe;\n  opacity: 1;\n  background-repeat: no-repeat;\n  background-position: center center;\n"]);return P=function(){return e},e}function M(){var e=Object(s.a)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-evenly;\n  width: 600px;\n  margin: 16px auto;\n\n  div.sides {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  div.message {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    width: 300px;\n    height: 20px;\n    margin-top: 20px;\n\n    p {\n      font-size: 16px;\n      font-weight: bold;\n      color: #fff;\n    }\n  }\n"]);return M=function(){return e},e}function B(){var e=Object(s.a)(["\n  display: flex;\n  width: 80px;\n  height: 20px;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n  border: 1px solid #eee;\n  margin: 3px auto 0;\n  color: #fff;\n  font-weight: bold;\n\n  &:first-child {\n    margin-top: 16px;\n  }\n\n  & + & {\n    margin-bottom: 10px;\n    width: 130px;\n  }\n"]);return B=function(){return e},e}function I(){var e=Object(s.a)(["\n  display: flex;\n  flex-direction: row;\n  margin: 0 auto;\n  justify-content: space-evenly;\n\n  div.edges {\n    align-content: center;\n    justify-content: center;\n    /* border: 2px solid #333; */\n    margin-top: 90px;\n    height: 160px;\n    text-align: center;\n\n    strong {\n      font-size: 22px;\n      color: #fff;\n    }\n\n    p {\n      font-size: 16px;\n      color: #fff;\n    }\n  }\n"]);return I=function(){return e},e}var J=p.b.div(I()),z=p.b.div(B()),F=p.b.div(M()),A=p.b.div(P(),(function(e){return e.bg}),(function(e){return"url('./assets/images/symbol/".concat(e.symbol,".png')")})),D=p.b.div(C()),G=p.b.button(T(),Object(O.a)(.03,"#7159c1"),Object(O.a)(.09,"#7159c1"));function R(){var e=Object(a.useState)({player1:{name1:"",bg1:""},player2:{name2:"",bg2:""},bestOf:3}),n=Object(g.a)(e,2),t=n[0],o=n[1];Object(a.useEffect)((function(){o(JSON.parse(localStorage.getItem("players")))}),[]);var l=Object(a.useState)({score1:0,score2:0}),c=Object(g.a)(l,2),s=c[0],p=c[1];Object(a.useEffect)((function(){localStorage.setItem("scores",JSON.stringify(s))}),[s]);var i=Object(a.useState)({message:""}),m=Object(g.a)(i,2),u=m[0],f=m[1];Object(a.useEffect)((function(){localStorage.setItem("messages",JSON.stringify(u))}),[u]);var d=Object(a.useState)({messageFinal:""}),O=Object(g.a)(d,2),h=O[0],j=O[1];Object(a.useEffect)((function(){localStorage.setItem("messages2",JSON.stringify(h))}),[h]);var v=Object(a.useState)({symbolp1:"",symbolp2:""}),k=Object(g.a)(v,2),x=k[0],E=k[1];Object(a.useEffect)((function(){localStorage.setItem("symbols",JSON.stringify(x))}),[x]);var S=Object(a.useState)({psymbolp1:"",psymbolp2:""}),N=Object(g.a)(S,2),T=N[0],C=N[1];Object(a.useEffect)((function(){localStorage.setItem("prevSymbols",JSON.stringify(T))}),[T]);var P=Object(a.useState)({gsymbolp2:""}),M=Object(g.a)(P,2),B=M[0],I=M[1];Object(a.useEffect)((function(){localStorage.setItem("gameSymbols",JSON.stringify(B))}),[B]);var R=Object(a.useState)({game:"",playerType:"",play:""}),q=Object(g.a)(R,2),K=q[0],W=q[1];Object(a.useEffect)((function(){W(JSON.parse(localStorage.getItem("modes")))}),[]);var H=Object(a.useState)([""]),L=Object(g.a)(H,2),Y=L[0],Q=L[1];Object(a.useEffect)((function(){Q(JSON.parse(localStorage.getItem("customSymbols")))}),[]);Object(a.useEffect)((function(){""!==u.message&&"Reseting the game after 2 seconds."!==u.message&&""===h.messageFinal&&(W(Object(y.a)({},K,{play:"pause"})),setTimeout((function(){f(Object(y.a)({},u,{message:"Reseting the game after 2 seconds."}))}),2e3),setTimeout((function(){!function(){var e=JSON.parse(localStorage.getItem("symbols")),n=e.symbolp1,t=e.symbolp2;"rock"===n?I({gsymbolp2:"paper"}):"paper"===n?I({gsymbolp2:"scissors"}):"scissors"===n?I({gsymbolp2:"rock"}):"lizard"===n?I({gsymbolp2:"scissors"}):"spock"===n&&I({gsymbolp2:"paper"}),C({psymbolp1:n,psymbolp2:t})}(),E({symbolp1:"",symbolp2:""}),f(Object(y.a)({},u,{message:""})),W(Object(y.a)({},K,{play:"play"}))}),4e3)),""!==h.messageFinal&&W(Object(y.a)({},K,{play:"end"}))}),[h,u]),Object(a.useEffect)((function(){var e=t.player1.name1,n=t.player2.name2,a=t.bestOf,r=s.score1,o=s.score2;(a===r+o||r>a/2||o>a/2)&&(r>o&&(W(Object(y.a)({},K,{play:"end"})),j(Object(y.a)({},h,{messageFinal:"Game ended, player ".concat(e," win the game!")}))),o>r&&(W(Object(y.a)({},K,{play:"end"})),j(Object(y.a)({},h,{messageFinal:"Game ended, player ".concat(n," win the game!")}))))}),[s]),Object(a.useEffect)((function(){!function(){var e=x.symbolp1,n=x.symbolp2,a=t.player1.name1,r=t.player2.name2,o=s.score1,l=s.score2;""===e||""===n||(e===n?f(Object(y.a)({},u,{message:"Draw, no points added."})):"rock"===e&&"scissors"===n||"rock"===e&&"lizard"===n||"paper"===e&&"rock"===n||"paper"===e&&"spock"===n||"scissors"===e&&"lizard"===n||"scissors"===e&&"paper"===n||"lizard"===e&&"paper"===n||"lizard"===e&&"spock"===n||"spock"===e&&"rock"===n||"spock"===e&&"scissors"===n?(p(Object(y.a)({},s,{score1:Object(w.a)(o,1)})),f(Object(y.a)({},u,{message:"Player ".concat(a," won this round.")}))):(p(Object(y.a)({},s,{score2:Object(w.a)(l,1)})),f(Object(y.a)({},u,{message:"Player ".concat(r," won this round.")}))))}()}),[x]),document.onkeydown=function(e){var n=K.play;!1===e.ctrlKey&&!1===e.shiftKey&&!1===e.altKey&&!1===e.metaKey&&!1===e.repeat&&"play"===n&&("Normal"!==K.game&&"TheBigBangTheory"!==K.game||("Digit1"===e.code&&("Player"===K.playerType&&E((function(){return Object(y.a)({},x,{symbolp1:Y[e.key-1]})})),"Computer"===K.playerType&&E((function(){return Object(y.a)({},x,{symbolp1:Y[e.key-1],symbolp2:Y[Math.floor(Math.random()*Y.length)]})})),"AdvComputer"===K.playerType&&(B.gsymbolp2?E((function(){return Object(y.a)({},x,{symbolp1:Y[e.key-1],symbolp2:B.gsymbolp2})})):E((function(){return Object(y.a)({},x,{symbolp1:Y[e.key-1],symbolp2:Y[Math.floor(Math.random()*Y.length)]})})))),"Digit2"===e.code&&("Player"===K.playerType&&E((function(){return Object(y.a)({},x,{symbolp1:Y[e.key-1]})})),"Computer"===K.playerType&&E((function(){return Object(y.a)({},x,{symbolp1:Y[e.key-1],symbolp2:Y[Math.floor(Math.random()*Y.length)]})})),"AdvComputer"===K.playerType&&(B.gsymbolp2?E((function(){return Object(y.a)({},x,{symbolp1:Y[e.key-1],symbolp2:B.gsymbolp2})})):E((function(){return Object(y.a)({},x,{symbolp1:Y[e.key-1],symbolp2:Y[Math.floor(Math.random()*Y.length)]})})))),"Digit3"===e.code&&("Player"===K.playerType&&E((function(){return Object(y.a)({},x,{symbolp1:Y[e.key-1]})})),"Computer"===K.playerType&&E((function(){return Object(y.a)({},x,{symbolp1:Y[e.key-1],symbolp2:Y[Math.floor(Math.random()*Y.length)]})})),"AdvComputer"===K.playerType&&(B.gsymbolp2?E((function(){return Object(y.a)({},x,{symbolp1:Y[e.key-1],symbolp2:B.gsymbolp2})})):E((function(){return Object(y.a)({},x,{symbolp1:Y[e.key-1],symbolp2:Y[Math.floor(Math.random()*Y.length)]})}))))),"TheBigBangTheory"===K.game&&("Digit4"===e.code&&("Player"===K.playerType&&E((function(){return Object(y.a)({},x,{symbolp1:Y[e.key-1]})})),"Computer"===K.playerType&&E((function(){return Object(y.a)({},x,{symbolp1:Y[e.key-1],symbolp2:Y[Math.floor(Math.random()*Y.length)]})})),"AdvComputer"===K.playerType&&(B.gsymbolp2?E((function(){return Object(y.a)({},x,{symbolp1:Y[e.key-1],symbolp2:B.gsymbolp2})})):E((function(){return Object(y.a)({},x,{symbolp1:Y[e.key-1],symbolp2:Y[Math.floor(Math.random()*Y.length)]})})))),"Digit5"===e.code&&("Player"===K.playerType&&E((function(){return Object(y.a)({},x,{symbolp1:Y[e.key-1]})})),"Computer"===K.playerType&&E((function(){return Object(y.a)({},x,{symbolp1:Y[e.key-1],symbolp2:Y[Math.floor(Math.random()*Y.length)]})})),"AdvComputer"===K.playerType&&(B.gsymbolp2?E((function(){return Object(y.a)({},x,{symbolp1:Y[e.key-1],symbolp2:B.gsymbolp2})})):E((function(){return Object(y.a)({},x,{symbolp1:Y[e.key-1],symbolp2:Y[Math.floor(Math.random()*Y.length)]})}))))),"Normal"!==K.game&&"TheBigBangTheory"!==K.game||"Player"!==K.playerType||("Numpad1"===e.code&&E((function(){return Object(y.a)({},x,{symbolp2:Y[0]})})),"Numpad2"===e.code&&E((function(){return Object(y.a)({},x,{symbolp2:Y[1]})})),"Numpad3"===e.code&&E((function(){return Object(y.a)({},x,{symbolp2:Y[2]})}))),"TheBigBangTheory"===K.game&&"Player"===K.playerType&&("Numpad4"===e.code&&E((function(){return Object(y.a)({},x,{symbolp2:Y[3]})})),"Numpad5"===e.code&&E((function(){return Object(y.a)({},x,{symbolp2:Y[4]})}))))};var U=Object(a.useCallback)((function(){E((function(){return{symbolp1:"",symbolp2:""}})),C({psymbolp1:"",psymbolp2:""}),I({gsymbolp2:""}),W(Object(y.a)({},K,{play:"play"})),f({message:""}),j({messageFinal:""}),p({score1:0,score2:0})}),[K]),V=function(e){var n=e.bg,t=e.symbol;return r.a.createElement(A,{className:"player",bg:n,symbol:t})};return r.a.createElement(r.a.Fragment,null,console.log(x,t,u,K),r.a.createElement(J,null,r.a.createElement("div",{className:"edges"},r.a.createElement("strong",null,"Player One Commands:"),r.a.createElement("p",null,"1 - rock"),r.a.createElement("p",null,"2 - paper"),r.a.createElement("p",null,"3 - scissors"),r.a.createElement("p",null,"(Below works only on The big bang theory game)"),r.a.createElement("p",null,"4 - lizard"),r.a.createElement("p",null,"5 - spock")),r.a.createElement("div",null,r.a.createElement(z,null,"BestOf: ",t.bestOf),r.a.createElement(z,null,K.game),r.a.createElement(F,{className:"App"},r.a.createElement("div",{className:"sides"},r.a.createElement(V,{bg:t.player1.bg1,symbol:x.symbolp1?x.symbolp1:T.psymbolp1}),r.a.createElement(D,null,s.score1)),r.a.createElement("div",{className:"sides"},r.a.createElement(V,{bg:t.player2.bg2,symbol:x.symbolp2?x.symbolp2:T.psymbolp2}),r.a.createElement(D,null,s.score2)),r.a.createElement("div",{className:"message"},r.a.createElement("p",null,h.messageFinal?h.messageFinal:u.message)),r.a.createElement(G,{onClick:U},"Reset Game"),r.a.createElement(G,{onClick:function(){b.push("/rockpaperscissors")}},"Back to Welcome Page"))),r.a.createElement("div",{className:"edges"},r.a.createElement("strong",null,"Player Two Commands:"),r.a.createElement("p",null,"Numpad 1 - rock"),r.a.createElement("p",null,"Numpad 2 - paper"),r.a.createElement("p",null,"Numpad 3 - scissors"),r.a.createElement("p",null,"(Below works only on The big bang theory game)"),r.a.createElement("p",null,"Numpad 4 - lizard"),r.a.createElement("p",null,"Numpad 5 - spock"))))}function q(){return r.a.createElement(c.c,null,r.a.createElement(c.a,{path:"/rockpaperscissors",component:N}),r.a.createElement(c.a,{path:"/rockpaperscissors/game",component:R}),r.a.createElement(c.a,{path:"/",component:function(){return r.a.createElement("div",null,"404 Page not Found")}}))}var K=function(){return r.a.createElement(c.b,{history:b},r.a.createElement(q,null),r.a.createElement(m,null))};l.a.render(r.a.createElement(K,null),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.1bf7dea6.chunk.js.map