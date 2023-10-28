"use strict";(self.webpackChunktodolist=self.webpackChunktodolist||[]).push([[499],{5499:function(n,e,t){t.r(e),t.d(e,{default:function(){return Ie}});var i,r,o,d,s,a,c,l,x,p,h,u,f,g,b,m,w,Z,v,j,y,k,P,z,C,D,S,A,M,E,T,G,L,I,O,Y,F,N,U,W,$,B,Q,R,V,_,q,H,J,K,X,nn,en,tn,rn,on,dn,sn,an,cn,ln=t(9439),xn=t(2791),pn=t(7689),hn=t(4612),un=t(6874),fn=t(2273),gn=t(168),bn=t(82),mn=bn.ZP.div(i||(i=(0,gn.Z)(["\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: rgba(0, 0, 0, 0.6);\n"]))),wn=bn.ZP.div(r||(r=(0,gn.Z)(["\n  width: 25vw;\n  background: white;\n  border-radius: 16px;\n  display: flex;\n  padding: 10px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  transform: translateY(0);\n  transition: transform 0.3s linear;\n  ",";\n"])),(function(n){return n.showDelete&&(0,bn.iv)(o||(o=(0,gn.Z)(["\n      transform: translateY(-100%);\n    "])))})),Zn=bn.ZP.p(d||(d=(0,gn.Z)(["\n  font-size: 18px;\n  color: #555;\n  wrap: wrap;\n  text-align: center;\n  padding: 10px;\n  @media screen and (min-width: 920px) {\n    font-size: 20px;\n  }\n"]))),vn=bn.ZP.div(s||(s=(0,gn.Z)(["\n  height: 80px;\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n"]))),jn=bn.ZP.button(a||(a=(0,gn.Z)(["\n  background: white;\n  border: 1px solid blue;\n  color: blue;\n  width: 70px;\n  height: 40px;\n  border-radius: 8px;\n  font-size: 14px;\n  margin: 8px;\n  cursor: pointer;\n  transition: border, background-color, font-weight, 0.25s linear;\n\n  &:hover {\n    border: 2px solid blue;\n    font-weight: 500;\n    background: #eee;\n  }\n  @media screen and (min-width: 920px) {\n    width: 120px;\n    font-size: 20px;\n  }\n"]))),yn=bn.ZP.button(c||(c=(0,gn.Z)(["\n  background: white;\n  border: 1px solid red;\n  color: red;\n  width: 70px;\n  height: 40px;\n  border-radius: 8px;\n  margin: 8px;\n  cursor: pointer;\n  font-size: 14px;\n  transition: border, background-color, font-weight, 0.25s linear;\n  &:hover {\n    border: 2px solid red;\n    font-weight: 500;\n    background-color: #eee;\n  }\n  @media screen and (min-width: 920px) {\n    width: 120px;\n    font-size: 20px;\n  }\n"]))),kn=t(9230),Pn=t(184),zn=function(){var n=(0,xn.useContext)(fn.l),e=n.showDelete,t=n.setShowDelete,i=n.id,r=n.setId,o=(0,xn.useContext)(un.E).deleteTask,d=(0,kn.$G)().t;return(0,Pn.jsx)(mn,{children:(0,Pn.jsxs)(wn,{showDelete:e,children:[(0,Pn.jsx)(Zn,{children:d("mdlDltTitle")}),(0,Pn.jsxs)(vn,{children:[(0,Pn.jsx)(yn,{onClick:function(){o(i),r(0),t(!1)},children:d("mdlDlt")}),(0,Pn.jsx)(jn,{onClick:function(){t(!1)},children:d("mdlDltCanc")})]})]})})},Cn=bn.ZP.div(l||(l=(0,gn.Z)(["\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  z-index: 3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n  background: rgba(0, 0, 0, 0.6);\n"]))),Dn=bn.ZP.div(x||(x=(0,gn.Z)(["\n  width: 300px;\n  background: white;\n  border-radius: 16px;\n  opacity: 1;\n  display: flex;\n  gap: 10px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 32px;\n  padding-bottom: 8px;\n  @media screen and (min-width: 920px) {\n    width: 350px;\n  }\n"]))),Sn=bn.ZP.div(p||(p=(0,gn.Z)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n"]))),An=bn.ZP.button(h||(h=(0,gn.Z)(["\n  background: white;\n  border: 1px solid blue;\n  color: blue;\n  height: 40px;\n  border-radius: 8px;\n  margin: 8px;\n  transition: border, background-color, font-weight, 0.25s linear;\n  cursor: pointer;\n  width: 90px;\n  &:hover {\n    border: 2px solid blue;\n    font-weight: 500;\n    background: #eee;\n  }\n  font-size: 14px;\n  @media screen and (min-width: 920px) {\n    width: 120px;\n    font-size: 20px;\n  }\n"]))),Mn=bn.ZP.button(u||(u=(0,gn.Z)(["\n  background: white;\n  border: 1px solid green;\n  color: green;\n  height: 40px;\n  border-radius: 8px;\n  margin: 8px;\n  font-size: 14px;\n  transition: border, background-color, font-weight, 0.25s linear;\n  width: 90px;\n  cursor: pointer;\n  &:hover {\n    border: 2px solid green;\n    font-weight: 500;\n    background: #eee;\n  }\n  @media screen and (min-width: 920px) {\n    width: 120px;\n    font-size: 20px;\n  }\n"]))),En=bn.ZP.input(f||(f=(0,gn.Z)(["\n  height: 40px;\n  border-radius: 8px;\n  border: 1px solid #999;\n  padding-left: 8px;\n  font-size: 20px;\n  width: 260px;\n  color: #555;\n  box-sizing: border-box;\n  ",";\n  &:focus {\n    border: 1px solid #999;\n    outline: none;\n  }\n\n  &::placeholder {\n    color: #bbb;\n    opacity: 0.6;\n    font-size: 18px;\n    color: ",";\n  }\n"])),(function(n){return n.error&&(0,bn.iv)(g||(g=(0,gn.Z)(["\n      border: 1px solid red;\n    "])))}),(function(n){return n.error?"red":"#bbb"})),Tn=bn.ZP.select(b||(b=(0,gn.Z)(["\n  width: 260px;\n  height: 40px;\n  border-radius: 8px;\n  border: 1px solid #999;\n  padding-left: 8px;\n  font-size: 20px;\n  color: #555;\n  box-sizing: border-box;\n\n  &:focus {\n    border: 1px solid #999;\n    outline: none;\n  }\n\n  &::placeholder {\n    color: #bbb;\n  }\n"]))),Gn=bn.ZP.div(m||(m=(0,gn.Z)(["\n  background: transparent;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n"]))),Ln=(bn.ZP.p(w||(w=(0,gn.Z)(["\n  font-size: 16px;\n  opacity: 0.6;\n  color: red;\n"]))),bn.ZP.p(Z||(Z=(0,gn.Z)(["\n  font-size: 18px;\n  color: #555;\n  @media screen and (min-width: 920px) {\n    font-size: 20px;\n  }\n"])))),In=bn.ZP.span(v||(v=(0,gn.Z)(["\n  display: flex;\n  color: #777;\n  padding: 10px;\n  border: 1px solid #777;\n  width: 240px;\n  justify-content: center;\n  border-radius: 6px;\n  cursor: pointer;\n  align-items: center;\n  transition: color, border 0.3s linear;\n  ",";\n"])),(function(n){return n.isActive&&(0,bn.iv)(j||(j=(0,gn.Z)(["\n      color: #bdbdbd;\n      border: 1px solid #bedbb0;\n    "])))})),On=bn.ZP.img(y||(y=(0,gn.Z)(["\n  width: 14px;\n  cursor: pointer;\n  transition: transform 0.3s linear;\n  ",";\n  margin: 4px 24px;\n"])),(function(n){return n.isActive&&(0,bn.iv)(k||(k=(0,gn.Z)(["\n      transform: rotate(180deg);\n    "])))})),Yn=t(9533),Fn=t(8871),Nn=bn.ZP.div(P||(P=(0,gn.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  right: 30px;\n  width: 233px;\n  height: 254px;\n  padding: 18px;\n  border-radius: 8px;\n  border: 1px solid #bedbb0;\n  background: #fff;\n"]))),Un=bn.ZP.div(z||(z=(0,gn.Z)(["\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin-bottom: 14px;\n"]))),Wn=bn.ZP.div(C||(C=(0,gn.Z)(["\n  cursor: pointer;\n  color: #bedbb0;\n  transition: color 0.3s linear;\n\n  &:hover {\n    color: #161616;\n  }\n"]))),$n=bn.ZP.span(D||(D=(0,gn.Z)(["\n  background-color: rgba(22, 22, 22, 0.2);\n  display: block;\n  width: 100%;\n  height: 1px;\n  margin-bottom: 14px;\n"]))),Bn=bn.ZP.span(S||(S=(0,gn.Z)(["\n  color: #161616;\n  font-family: Poppins;\n  font-size: 16px;\n  font-style: normal;\n  width: 100%;\n  font-weight: 500;\n  line-height: normal;\n  letter-spacing: -0.32p;\n"]))),Qn=bn.ZP.table(A||(A=(0,gn.Z)(["\n  width: 100%;\n"]))),Rn=bn.ZP.tr(M||(M=(0,gn.Z)(["\n  color: rgba(22, 22, 22, 0.5);\n  font-family: Poppins;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: 500;\n  line-height: normal;\n  letter-spacing: -0.28px;\n"]))),Vn=bn.ZP.th(E||(E=(0,gn.Z)(["\n  color: rgba(22, 22, 22, 0.5);\n  font-family: Poppins;\n  font-size: 14px;\n  font-weight: 500;\n  line-height: normal;\n  letter-spacing: -0.28px;\n  text-align: center;\n"]))),_n=bn.ZP.td(T||(T=(0,gn.Z)(["\n  text-align: center;\n  cursor: pointer;\n  color: ",";\n  font-family: Poppins;\n  font-size: 14px;\n  padding: 3px;\n  box-sizing: border-box;\n  font-style: normal;\n  font-weight: 400;\n  line-height: 18px;\n  transition: border-radius 0.3s linear, background-color 0.3s linear;\n  border-radius: ",";\n  background-color: ",";\n\n  &:hover {\n    border-radius: 100px;\n    background-color: #bedbb0;\n  }\n  ","\n"])),(function(n){return n.prevMonth?"rgba(22, 22, 22, 0.20)":"#161616"}),(function(n){return n.today?"100px":n.prevMonth?"0":"100px"}),(function(n){return n.today&&!n.prevMonth?"#dfe7db":""}),(function(n){return n.current&&(0,bn.iv)(G||(G=(0,gn.Z)(["\n      border: 1px solid #bedbb0;\n      padding: 1px;\n    "])))})),qn=function(n,e){for(var t=new Date(n,e,1).getDay(),i=function(n,e){return new Date(n,e+1,0).getDate()}(n,e),r=new Date(n,e,0).getDate(),o=[[]],d=0,s=1-t;s<=i;s++){if(o[d]||(o[d]=[]),s<=0)o[d].push({day:r+s,prevMonth:!0,weekend:s%7===6||s%7===0});else{var a=s%7===6||s%7===0;o[d].push({day:s,prevMonth:!1,weekend:a})}6===new Date(n,e,s).getDay()&&d++}return o},Hn=t(9806),Jn=t(1632),Kn=function(n){var e=n.setSelectedDate,t=new Date,i=(0,xn.useState)(t.getFullYear()),r=(0,ln.Z)(i,2),o=r[0],d=r[1],s=(0,xn.useState)(t.getMonth()),a=(0,ln.Z)(s,2),c=a[0],l=a[1],x=(0,xn.useState)(""),p=(0,ln.Z)(x,2),h=p[0],u=p[1],f=qn(o,c);return(0,Pn.jsxs)(Nn,{children:[(0,Pn.jsxs)(Un,{children:[(0,Pn.jsx)(Wn,{onClick:function(){return function(n,e,t,i){0===t?(n(i-1),e(11)):e(t-1)}(d,l,c,o)},children:(0,Pn.jsx)(Hn.G,{icon:Jn.acZ})}),(0,Pn.jsx)(Bn,{children:"".concat(new Date(o,c).toLocaleString("en-US",{month:"long"}).charAt(0).toUpperCase()+new Date(o,c).toLocaleString("en-US",{month:"long"}).slice(1),"  ").concat(o," ")}),(0,Pn.jsx)(Wn,{onClick:function(){return function(n,e,t,i){11===t?(n(i+1),e(0)):e(t+1)}(d,l,c,o)},children:(0,Pn.jsx)(Hn.G,{icon:Jn.eFW})})]}),(0,Pn.jsx)($n,{}),(0,Pn.jsxs)(Qn,{children:[(0,Pn.jsx)("thead",{children:(0,Pn.jsx)(Rn,{children:["Mo","Tu","We","Th","Fr","Sa","Su"].map((function(n){return(0,Pn.jsx)(Vn,{children:n},n)}))})}),(0,Pn.jsx)("tbody",{children:f.map((function(n,i){return(0,Pn.jsx)("tr",{children:n.map((function(n,i){return(0,Pn.jsx)(_n,{day:n.day,prevMonth:n.prevMonth,weekend:n.weekend,current:h===n.day,today:n.day&&o===t.getFullYear()&&c===t.getMonth()&&n.day===t.getDate(),lastMonth:n.prevMonth&&n.day!==t.getDate(),onClick:function(){return n.day&&function(n){u(n);var t=new Date(o,c,n);e(t)}(n.day,t.month)},children:n.day&&n.day},i)}))},i)}))})]})]})},Xn=t(7812),ne=t(880),ee=function(){var n=(0,xn.useContext)(un.E).addTask,e=(0,xn.useContext)(Fn.i).categList,t=(0,xn.useContext)(Yn.a).setShowAdd,i=(0,kn.$G)().t,r=(0,xn.useState)(""),o=(0,ln.Z)(r,2),d=o[0],s=o[1],a=(0,xn.useState)(0),c=(0,ln.Z)(a,2),l=c[0],x=c[1],p=(0,xn.useState)(""),h=(0,ln.Z)(p,2),u=h[0],f=h[1],g=(0,xn.useState)(new Date),b=(0,ln.Z)(g,2),m=b[0],w=b[1],Z=(0,xn.useState)(!1),v=(0,ln.Z)(Z,2),j=v[0],y=v[1];(0,xn.useEffect)((function(){var n=setTimeout((function(){f("")}),2e3);return function(){clearTimeout(n)}}),[u]);return(0,Pn.jsxs)(Cn,{children:[j&&(0,Pn.jsx)(Gn,{onClick:function(n){n.target===n.currentTarget&&y(!1)},children:(0,Pn.jsx)(Kn,{setSelectedDate:w})}),(0,Pn.jsxs)(Dn,{children:[(0,Pn.jsx)(Ln,{children:i("mdlAdInp")}),(0,Pn.jsx)(En,{error:u,placeholder:u||i("mdlAdInpPlch"),onChange:function(n){s(n.target.value)},value:d}),(0,Pn.jsxs)(In,{isActive:j,onClick:function(){return y(!0)},children:[(0,Xn.Z)(m,"yyyy-MM-dd"),(0,Pn.jsx)(On,{isActive:j,src:ne.E})]}),(0,Pn.jsx)(Ln,{children:i("mdlAdOpt")}),(0,Pn.jsx)(Tn,{id:"select",onChange:function(n){var e=Number(n.target.value);x(e)},children:e.map((function(n,e){return(0,Pn.jsx)("option",{value:e,children:n.name},n.id)}))}),(0,Pn.jsxs)(Sn,{children:[(0,Pn.jsx)(Mn,{onClick:function(){if(d)if(e[l]){var i={id:Math.random(),title:d,categorie:e[l].name,color:e[l].color,done:!1,date:m};t(!1),n(i)}else console.error("Invalid category selected");else f("Please enter task name.")},children:i("mdlAdBtnAdd")}),(0,Pn.jsx)(An,{onClick:function(){t(!1)},children:i("mdlAdBtnCanc")})]})]})]})},te=t(4805),ie=bn.ZP.div(L||(L=(0,gn.Z)(["\n  width: 100vw;\n  height: 100vh;\n  position: fixed;\n  z-index: 3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n  background: rgba(0, 0, 0, 0.6);\n"]))),re=bn.ZP.div(I||(I=(0,gn.Z)(["\n  width: 300px;\n  background: white;\n  border-radius: 16px;\n  opacity: 1;\n  gap: 10px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 32px;\n  padding-bottom: 8px;\n  @media screen and (min-width: 920px) {\n    width: 350px;\n  }\n"]))),oe=bn.ZP.div(O||(O=(0,gn.Z)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n"]))),de=bn.ZP.button(Y||(Y=(0,gn.Z)(["\n  background: white;\n  border: 1px solid blue;\n  color: blue;\n  height: 40px;\n  border-radius: 8px;\n  cursor: pointer;\n  margin: 8px;\n  width: 90px;\n  transition: border, background-color, font-weight, 0.25s linear;\n\n  &:hover {\n    border: 2px solid blue;\n    font-weight: 500;\n    background: #eee;\n  }\n  font-size: 14px;\n  @media screen and (min-width: 920px) {\n    width: 120px;\n    font-size: 20px;\n  }\n"]))),se=bn.ZP.button(F||(F=(0,gn.Z)(["\n  background: white;\n  border: 1px solid green;\n  color: green;\n  height: 40px;\n  border-radius: 8px;\n  margin: 8px;\n  cursor: pointer;\n  font-size: 14px;\n  transition: border, background-color, font-weight, 0.25s linear;\n  width: 90px;\n  &:hover {\n    border: 2px solid green;\n    font-weight: 500;\n    background: #eee;\n  }\n  @media screen and (min-width: 920px) {\n    width: 120px;\n    font-size: 20px;\n  }\n"]))),ae=bn.ZP.input(N||(N=(0,gn.Z)(["\n  height: 40px;\n  border-radius: 8px;\n  border: 1px solid #999;\n  padding-left: 8px;\n  font-size: 20px;\n  width: 260px;\n  color: #555;\n  box-sizing: border-box;\n  &:focus {\n    border: 1px solid #999;\n    outline: none;\n  }\n\n  &::placeholder {\n    color: #bbb;\n    opacity: 0.6;\n    font-size: 18px;\n  }\n"]))),ce=bn.ZP.select(U||(U=(0,gn.Z)(["\n  width: 260px;\n  height: 40px;\n  border-radius: 8px;\n  border: 1px solid #999;\n  padding-left: 8px;\n  font-size: 20px;\n  color: #555;\n  box-sizing: border-box;\n\n  &:focus {\n    border: 1px solid #999;\n    outline: none;\n  }\n\n  &::placeholder {\n    color: #bbb;\n  }\n"]))),le=bn.ZP.p(W||(W=(0,gn.Z)(["\n  font-size: 18px;\n  color: #555;\n  @media screen and (min-width: 920px) {\n    font-size: 20px;\n  }\n"]))),xe=bn.ZP.span($||($=(0,gn.Z)(["\n  display: flex;\n  color: #777;\n  padding: 10px;\n  border: 1px solid #777;\n  width: 240px;\n  justify-content: center;\n  border-radius: 6px;\n  cursor: pointer;\n  align-items: center;\n  transition: color, border 0.3s linear;\n  ",";\n"])),(function(n){return n.isActive&&(0,bn.iv)(B||(B=(0,gn.Z)(["\n      color: #bdbdbd;\n      border: 1px solid #bedbb0;\n    "])))})),pe=bn.ZP.div(Q||(Q=(0,gn.Z)(["\n  background: transparent;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 9999;\n"]))),he=bn.ZP.img(R||(R=(0,gn.Z)(["\n  width: 14px;\n  cursor: pointer;\n  transition: transform 0.3s linear;\n  ",";\n  margin: 4px 24px;\n"])),(function(n){return n.isActive&&(0,bn.iv)(V||(V=(0,gn.Z)(["\n      transform: rotate(180deg);\n    "])))})),ue=function(){var n=(0,xn.useContext)(un.E),e=n.editTask,t=n.taskList,i=(0,xn.useContext)(fn.l),r=i.setShowEdit,o=i.id,d=(0,xn.useState)(!1),s=(0,ln.Z)(d,2),a=s[0],c=s[1],l=(0,xn.useState)(new Date),x=(0,ln.Z)(l,2),p=x[0],h=x[1],u=(0,kn.$G)().t,f=(0,xn.useState)(""),g=(0,ln.Z)(f,2),b=g[0],m=g[1],w=(0,xn.useState)(t.filter((function(n){return n.id===o}))),Z=(0,ln.Z)(w,2),v=Z[0];Z[1];(0,xn.useEffect)((function(){var n=v[0].title;m(n)}),[t]);return(0,Pn.jsxs)(ie,{children:[a&&(0,Pn.jsx)(pe,{onClick:function(n){n.target===n.currentTarget&&c(!1)},children:(0,Pn.jsx)(Kn,{setSelectedDate:h})}),(0,Pn.jsxs)(re,{children:[(0,Pn.jsx)(le,{children:u("mdlEdInp")}),(0,Pn.jsx)(ae,{placeholder:u("mdlAdInpPlch"),onChange:function(n){m(n.target.value)},value:b}),(0,Pn.jsxs)(xe,{isActive:a,onClick:function(){return c(!0)},children:[(0,Xn.Z)(p,"yyyy-MM-dd"),(0,Pn.jsx)(he,{isActive:a,src:ne.E})]}),(0,Pn.jsx)(le,{children:u("mdlEdOpt")}),(0,Pn.jsx)(ce,{id:"select",children:(0,Pn.jsx)("option",{children:v[0].categorie})}),(0,Pn.jsxs)(oe,{children:[(0,Pn.jsx)(se,{onClick:function(){v[0].title=b,v[0].date=p,e(o,v[0]),r(!1)},children:u("btnEd")}),(0,Pn.jsx)(de,{onClick:function(){r(!1)},children:u("btnCanc")})]})]})]})},fe=t(4238),ge=t(6588),be=bn.ZP.div(_||(_=(0,gn.Z)(["\n  height: 65px;\n  width: 80vw;\n  background: white;\n  border-radius: 16px;\n  box-shadow: 0 3px 3px #ccc;\n  display: flex;\n  margin: 8px;\n  box-sizing: border-box;\n  @media screen and (min-width: 920px) {\n    height: 80px;\n    width: 70vw;\n  }\n"]))),me=bn.ZP.h2(q||(q=(0,gn.Z)(["\n  font-size: 16px;\n  color: #555;\n  display: flex;\n  gap: 10px;\n  margin: 8px 16px;\n  font-weight: 500;\n\n  ","\n  @media screen and (min-width: 920px) {\n    font-size: 22px;\n  }\n"])),(function(n){return n.done&&(0,bn.iv)(H||(H=(0,gn.Z)(["\n      color: #bbb;\n      font-weight: 400;\n      text-decoration: line-through;\n    "])))})),we=bn.ZP.img(J||(J=(0,gn.Z)(["\n  width: 18px;\n  margin: 18px;\n  background: white;\n\n  &:hover {\n    cursor: pointer;\n  }\n  @media screen and (min-width: 920px) {\n    width: 24px;\n    margin: 24px;\n  }\n"]))),Ze=bn.ZP.div(K||(K=(0,gn.Z)(["\n  width: 60px;\n  height: 60px;\n  border-right: 2px solid #eee;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  @media screen and (min-width: 920px) {\n    width: 80px;\n    height: 80px;\n  }\n"]))),ve=bn.ZP.div(X||(X=(0,gn.Z)(["\n  height: 60px;\n  width: 55vw;\n  display: flex;\n  flex-direction: column;\n  padding: 6px 8px;\n  box-sizing: border-box;\n  @media screen and (min-width: 920px) {\n    height: 80px;\n  }\n"]))),je=bn.ZP.div(nn||(nn=(0,gn.Z)(["\n  height: 20px;\n  margin: 0 16px;\n  display: flex;\n  align-items: center;\n"]))),ye=bn.ZP.div(en||(en=(0,gn.Z)(["\n  height: 12px;\n  width: 12px;\n  background: ",";\n  @media screen and (min-width: 920px) {\n    height: 16px;\n    width: 16px;\n    border-radius: 6px;\n  }\n"])),(function(n){return n.color})),ke=bn.ZP.p(tn||(tn=(0,gn.Z)(["\n  color: #999;\n  margin-left: 8px;\n  font-weight: 400;\n  @media screen and (min-width: 920px) {\n    font-size: 16px;\n  }\n"]))),Pe=(bn.ZP.input.attrs({type:"checkbox"})(rn||(rn=(0,gn.Z)(["\n  display: none;\n"]))),bn.ZP.div(on||(on=(0,gn.Z)(["\n  background: white;\n  height: 18px;\n  width: 18px;\n  border: 1px solid #7f56da;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &:hover {\n    cursor: pointer;\n  }\n  @media screen and (min-width: 920px) {\n    height: 24px;\n    width: 24px;\n  }\n"])))),ze=bn.ZP.div(dn||(dn=(0,gn.Z)(["\n  background: #7f56da;\n  height: 16px;\n  width: 16px;\n  border-radius: 10px;\n  ","\n  @media screen and (min-width: 920px) {\n    height: 20px;\n    width: 20px;\n  }\n"])),(function(n){return!n.done&&(0,bn.iv)(sn||(sn=(0,gn.Z)(["\n      display: none;\n    "])))})),Ce=bn.ZP.span(an||(an=(0,gn.Z)(["\n  color: #777;\n  font-weight: 600;\n  font-size: 12px;\n  margin-left: 50px;\n  ","\n"])),(function(n){return n.done&&(0,bn.iv)(cn||(cn=(0,gn.Z)(["\n      color: rgba(255, 0, 0, 0.5);\n      font-weight: 400;\n    "])))}));var De=t.p+"static/media/edit.8a3dc1f03d3a1f0286396eee3e6e2d5c.svg";var Se=t.p+"static/media/erase.0f0ce77c27c83073a8558322d2408d85.svg",Ae=t(9579),Me=function(n){var e=n.id,t=n.name,i=n.list,r=n.color,o=n.done,d=n.date,s=(0,xn.useContext)(fn.l),a=s.setShowDelete,c=s.setShowEdit,l=s.setId,x=(0,xn.useContext)(un.E).checkTask;return(0,Pn.jsxs)(be,{children:[(0,Pn.jsx)(Ze,{children:(0,Pn.jsx)(Pe,{onClick:function(){x(e)},children:(0,Pn.jsx)(ze,{done:o})})}),(0,Pn.jsxs)(ve,{children:[(0,Pn.jsx)(me,{done:o,children:t}),(0,Pn.jsxs)(je,{children:[(0,Pn.jsx)(ye,{color:r}),(0,Pn.jsx)(ke,{children:i}),(0,Pn.jsxs)(Ce,{done:(0,Ae.Z)(new Date(d),new Date),children:["Deadline: ",function(){var n=new Date(d);return(0,Xn.Z)(n,"yyyy-MM-dd")}()]})]})]}),(0,Pn.jsx)(we,{src:De,onClick:function(){c(!0),l(e)}}),(0,Pn.jsx)(we,{src:Se,onClick:function(){a(!0),l(e)}})]})},Ee=t(9470),Te=t(5754),Ge=function(n){var e=n.name,t=n.handleDone,i=n.handleAll,r=n.handleNotDone,o=n.allActive,d=n.doneActive,s=n.notDoneActive,a=n.listOfLists,c=n.listToDisplay,l=(0,kn.$G)().t;return(0,Pn.jsxs)(hn.or,{children:[(0,Pn.jsx)(Ee.Z,{}),(0,Pn.jsx)(hn.h4,{children:e}),(0,Pn.jsxs)(hn.gh,{children:[(0,Pn.jsx)(hn.Dx,{onClick:t,children:l("upBar")}),(0,Pn.jsxs)(hn.R0,{children:[(0,Pn.jsx)("div",{onClick:i,children:(0,Pn.jsx)(ge.Z,{name:l("filterAll"),active:o})}),(0,Pn.jsx)("div",{onClick:t,children:(0,Pn.jsx)(ge.Z,{name:l("filterDn"),active:d})}),(0,Pn.jsx)("div",{onClick:r,children:(0,Pn.jsx)(ge.Z,{name:l("filterNDone"),active:s})}),(0,Pn.jsx)(hn.k1,{src:Te.Z})]})]}),a[c].map((function(n){return(0,Pn.jsx)(Me,{id:n.id,name:n.title,list:n.categorie,color:n.color,done:n.done,date:n.date},n.id)})),(0,Pn.jsx)(fe.Z,{})]})},Le=t(5597),Ie=function(){var n=(0,pn.UO)().name,e=(0,pn.s0)(),t=(0,xn.useContext)(Fn.i).categList,i=(0,xn.useContext)(un.E),r=i.taskList,o=i.doneTasks,d=i.notDoneTasks,s=(0,xn.useContext)(fn.l),a=s.showDelete,c=s.showEdit,l=(0,xn.useContext)(Yn.a).showAdd,x=(0,xn.useState)(0),p=(0,ln.Z)(x,2),h=p[0],u=p[1],f=[r.filter((function(e){return e.categorie===n})),o.filter((function(e){return e.categorie===n})),d.filter((function(e){return e.categorie===n}))];(0,xn.useEffect)((function(){if(t){var n,i=null===(n=t[0])||void 0===n?void 0:n.name;i?e("/categorie/"+i):t.length<=0&&e("/categorie/")}}),[]);var g=(0,xn.useState)(!0),b=(0,ln.Z)(g,2),m=b[0],w=b[1],Z=(0,xn.useState)(!1),v=(0,ln.Z)(Z,2),j=v[0],y=v[1],k=(0,xn.useState)(!1),P=(0,ln.Z)(k,2),z=P[0],C=P[1],D=(0,xn.useState)(!1),S=(0,ln.Z)(D,2),A=S[0],M=S[1],E=(0,te.useMediaQuery)({minWidth:320,maxWidth:920});return(0,Pn.jsxs)(hn.T3,{children:[(0,Pn.jsx)(hn.Vv,{onClick:function(){return M(!A)},id:"burger_menu",children:(0,Pn.jsx)(Hn.G,{icon:Jn.xiG,size:"xl"})}),!E&&(0,Pn.jsx)(Le.Z,{}),A&&(0,Pn.jsx)(hn.YM,{onClick:function(n){"backdrop"===n.target.id&&M(!A)},id:"backdrop",children:(0,Pn.jsx)(Le.Z,{})}),(0,Pn.jsx)(Ge,{name:n,handleDone:function(){u(1),w(!1),y(!0),C(!1)},handleAll:function(){u(0),w(!0),y(!1),C(!1)},handleNotDone:function(){u(2),w(!1),y(!1),C(!0)},allActive:m,doneActive:j,notDoneActive:z,listOfLists:f,listToDisplay:h}),c&&(0,Pn.jsx)(ue,{}),a&&(0,Pn.jsx)(zn,{}),l&&(0,Pn.jsx)(ee,{})]})}}}]);
//# sourceMappingURL=499.f0cc7205.chunk.js.map