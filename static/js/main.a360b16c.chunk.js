(this.webpackJsonpFlexAxis=this.webpackJsonpFlexAxis||[]).push([[0],{39:function(e,t,c){},54:function(e,t,c){},63:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),o=c(20),a=c.n(o),i=(c(54),c(2)),d=c(12),l=(c(39),c(22)),r=c(49),m=c(34),j=c.p+"static/media/nuuk.53610b05.svg",u=c(1),x=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(m.a,{bg:"mediumgray",width:"100%",variant:"dark",children:[Object(u.jsx)(m.a.Brand,{children:Object(u.jsx)("img",{src:j,height:"auto",width:"200vw",alt:"Nuuk logo"})}),Object(u.jsx)(m.a.Brand,{children:Object(u.jsx)("h1",{children:"FlexAxis"})})]})})},h=c(37),f=c(38),p=c(25),b=c(66),O=c(48),g=c.n(O),y="172.20.85.90",w="http://".concat(y,":4001"),v=Object(r.a)(w);var N=function(){var e=function(e,t){e.preventDefault(),v.emit("command",t),console.log("Command ".concat(t," emitted"))};Object(n.useEffect)((function(){v.on("welcome",(function(e){return console.log("From server => ",e)})),v.on("streamstatus",(function(e){return function(e){console.log(e),!0===e?N(!1):!1===e&&N(!0)}(e)}))}),[]);var t=Object(n.useState)({ip:"",username:"",password:""}),c=Object(d.a)(t,2),s=(c[0],c[1]),o=Object(n.useState)({ip:"172.20.85.127",username:"root",password:"Nuuk2022"}),a=Object(d.a)(o,2),r=a[0],m=a[1],j=Object(n.useState)(!0),O=Object(d.a)(j,2),w=O[0],N=O[1];Object(n.useEffect)((function(){if(!1===w){var e="wss://".concat(y,":6789/stream"),t=new g.a.VideoElement("#video-canvas",e,{autoplay:!0});console.log(t)}}),[w]);var C=!1,k=!1,S=!1,K=!1,P=!1,E=!1,L=!1,F=!1;return Object(n.useEffect)((function(){document.addEventListener("keydown",(function(e){"KeyW"===e.code&&!1===C?(console.log("W"),v.emit("command","upspeed"),C=!0):"KeyS"===e.code&&!1===S?(console.log("S"),v.emit("command","downspeed"),S=!0):"KeyA"===e.code&&!1===k?(console.log("A"),k=!0,v.emit("command","leftspeed")):"KeyD"===e.code&&!1===K?(console.log("D"),K=!0,v.emit("command","rightspeed")):"KeyQ"===e.code&&!1===P?(console.log("Q"),P=!0,v.emit("command","zoominspeed")):"KeyE"===e.code&&!1===E?(console.log("E"),E=!0,v.emit("command","zoomoutspeed")):"Space"===e.code&&!1===F?(console.log("Space"),E=!0):"ShiftLeft"===e.code&&!1===L&&(console.log("ShiftLeft"),E=!0)})),document.addEventListener("keyup",(function(e){"KeyW"===e.code?(C=!1,v.emit("command","stopspeed")):"KeyS"===e.code?(S=!1,v.emit("command","stopspeed")):"KeyA"===e.code?(k=!1,v.emit("command","stopspeed")):"KeyD"===e.code?(console.log("No D"),K=!1,v.emit("command","stopspeed")):"KeyQ"===e.code?(P=!1,v.emit("command","stopzoomspeed")):"KeyE"===e.code?(E=!1,v.emit("command","stopzoomspeed")):"Space"===e.code?(console.log("No Space"),F=!1):"ShiftLeft"===e.code&&(L=!1)}))}),[]),Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(x,{}),w?Object(u.jsxs)(b.a,{className:"pt-5 pl-5 pr-5",children:[Object(u.jsxs)(b.a.Group,{className:"mb-3",controlId:"formBasicIP",children:[Object(u.jsx)(b.a.Label,{children:"Camera IP address"}),Object(u.jsx)(b.a.Control,{type:"ip",placeholder:"IP address",value:r.ip,onChange:function(e){return m(Object(i.a)(Object(i.a)({},r),{},{ip:e.target.value}))}}),Object(u.jsx)(b.a.Text,{className:"text-muted",children:"Private or Public. If public, make sure port 443 is port forwarded."})]}),Object(u.jsxs)(b.a.Group,{className:"mb-3",controlId:"formBasicUser",children:[Object(u.jsx)(b.a.Label,{children:"Username"}),Object(u.jsx)(b.a.Control,{type:"user",placeholder:"Username",value:r.username,onChange:function(e){return m(Object(i.a)(Object(i.a)({},r),{},{username:e.target.value}))}})]}),Object(u.jsxs)(b.a.Group,{className:"mb-3",controlId:"formBasicPassword",children:[Object(u.jsx)(b.a.Label,{children:"Password"}),Object(u.jsx)(b.a.Control,{type:"password",placeholder:"Password",value:r.password,onChange:function(e){return m(Object(i.a)(Object(i.a)({},r),{},{password:e.target.value}))}})]}),Object(u.jsx)(l.a,{className:"mt-2",onClick:function(e){return function(e){e.preventDefault(),s(r),v.emit("camera",r),m({ip:"",username:"",password:""}),alert("Axis camera credentials changed successfuly"),N(!1)}(e)},children:"Apply Changes"})]}):Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(h.a,{className:"d-flex flex-row w-100 h-100",fluid:!0,children:Object(u.jsxs)(f.a,{className:"w-100",children:[Object(u.jsx)(p.a,{xs:12,sm:6,className:"d-flex justify-content-center w-100",children:Object(u.jsx)("div",{id:"video-canvas",style:{height:"300px",width:"500px"}})}),Object(u.jsx)(p.a,{xs:12,sm:6,className:"d-flex justify-content-center w-100",children:Object(u.jsxs)("div",{className:"w-100 h-100 mt-2",children:[Object(u.jsx)("div",{className:"d-flex justify-content-center mb-3",xs:"12",lg:"6",md:"6",children:Object(u.jsx)(l.a,{onClick:function(){return N(!0),void v.emit("deletestream")},children:"Edit Credentials"})}),Object(u.jsx)("div",{className:"d-flex mt-1 justify-content-center w-100",children:Object(u.jsx)(l.a,{variant:"primary",style:{width:"120px"},onClick:function(t){return e(t,"zoomin")},children:"Zoom in"})}),Object(u.jsxs)("div",{className:"d-flex flex-column mt-3 justify-content-center",children:[Object(u.jsx)("div",{className:"d-flex justify-content-around w-100",children:Object(u.jsx)(l.a,{style:{width:"120px",height:"auto"},onClick:function(t){return e(t,"up")},children:"Tilt Up"})}),Object(u.jsx)(h.a,{className:"w-100",children:Object(u.jsxs)(f.a,{xs:"12",lg:"6",md:"6",className:"d-flex mt-2 justify-content-center",children:[Object(u.jsx)(p.a,{className:"d-flex justify-content-center",style:{width:"120px"},children:Object(u.jsx)(l.a,{style:{width:"120px"},onClick:function(t){return e(t,"left")},children:"Pan Left"})}),Object(u.jsx)(p.a,{className:"d-flex justify-content-center",style:{width:"120px"},children:Object(u.jsx)(l.a,{style:{width:"120px"},onClick:function(t){return e(t,"right")},children:"Pan Right"})})]})}),Object(u.jsx)("div",{className:"d-flex justify-content-around mt-2",children:Object(u.jsx)(l.a,{style:{width:"120px"},onClick:function(t){return e(t,"down")},children:"Tilt Down"})})]}),Object(u.jsx)("div",{className:"d-flex justify-content-around mt-2 w-100",children:Object(u.jsx)(l.a,{style:{width:"120px"},onClick:function(t){return e(t,"zoomout")},children:"Zoom Out"})})]})})]})})})]})})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,67)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,o=t.getLCP,a=t.getTTFB;c(e),n(e),s(e),o(e),a(e)}))};a.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(N,{})}),document.getElementById("root")),C()}},[[63,1,2]]]);
//# sourceMappingURL=main.a360b16c.chunk.js.map