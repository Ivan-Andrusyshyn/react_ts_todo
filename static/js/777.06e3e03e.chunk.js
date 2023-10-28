"use strict";(self.webpackChunktodolist=self.webpackChunktodolist||[]).push([[777],{1777:function(n,e,i){i.r(e),i.d(e,{default:function(){return I}});var t,o,r,s,c,l,d,a,x,f,u,h,Z=i(9439),p=i(2791),g=i(7689),v=i(168),j=i(82),m=j.ZP.div(t||(t=(0,v.Z)(["\n  position: fixed;\n  display: flex;\n  justify-content: flex-start;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  z-index: 999;\n  background-color: rgba(0, 0, 0, 0.1);\n  backdrop-filter: blur(4px);\n"]))),w=j.ZP.div(o||(o=(0,v.Z)(["\n  position: fixed;\n  left: 50px;\n  top: 30px;\n  cursor: pointer;\n"]))),k=j.ZP.div(r||(r=(0,v.Z)(["\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  flex: row;\n  background-color: #f5f5f5;\n"]))),b=(j.ZP.div(s||(s=(0,v.Z)(["\n  height: 100vh;\n  width: 18vw;\n  background-color: white;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  padding: 8px 0;\n  box-sizing: border-box;\n"]))),j.ZP.img(c||(c=(0,v.Z)(["\n  width: 50px;\n  margin: 32px;\n"]))),j.ZP.div(l||(l=(0,v.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 60vh;\n"]))),j.ZP.div(d||(d=(0,v.Z)(["\n  height: 100vh;\n  width: 82vw;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: start;\n  overflow-y: scroll;\n  @media screen and (min-width: 820px) {\n    width: 100vw;\n  }\n"])))),y=j.ZP.h1(a||(a=(0,v.Z)(["\n  font-size: 40px;\n  font-weight: 400;\n  color: #555;\n  margin: 16px;\n"]))),C=j.ZP.div(x||(x=(0,v.Z)(["\n  height: 20px;\n  width: 70vw;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 16px;\n  margin-bottom: 4px;\n"]))),P=j.ZP.h3(f||(f=(0,v.Z)(["\n  font-size: 24px;\n  color: #555;\n"]))),z=j.ZP.div(u||(u=(0,v.Z)(["\n  height: 20px;\n  display: flex;\n  justify-content: center;\n"]))),S=j.ZP.img(h||(h=(0,v.Z)(["\n  height: 20px;\n  margin: 0 8px;\n"]))),D=i(8290),E=i(4238),G=i(6874),A=i(6588),L=i(5754),T=i(2273),W=i(2219),B=i(2629),M=i(9533),N=i(9515),O=i(9806),Q=i(1632),U=i(4805),$=i(5474),_=i(9230),q=i(9470),F=i(8871),H=i(184),I=function(){var n=(0,g.UO)().name,e=(0,_.$G)().t,i=(0,g.s0)(),t=(0,p.useContext)(F.i).categList,o=(0,p.useContext)(G.E),r=o.taskList,s=o.doneTasks,c=o.notDoneTasks,l=(0,p.useContext)(T.l),d=l.showDelete,a=l.showEdit,x=(0,p.useContext)(M.a).showAdd,f=(0,p.useState)(0),u=(0,Z.Z)(f,2),h=u[0],v=u[1],j=[r.filter((function(e){return e.categorie===n})),s.filter((function(e){return e.categorie===n})),c.filter((function(e){return e.categorie===n}))];(0,p.useEffect)((function(){if(t){var n,e=null===(n=t[0])||void 0===n?void 0:n.name;e?i("/categorie/"+e):t.length<=0&&i("/categorie/")}}),[]);var I=(0,p.useState)(!0),J=(0,Z.Z)(I,2),K=J[0],R=J[1],V=(0,p.useState)(!1),X=(0,Z.Z)(V,2),Y=X[0],nn=X[1],en=(0,p.useState)(!1),tn=(0,Z.Z)(en,2),on=tn[0],rn=tn[1],sn=(0,p.useState)(!1),cn=(0,Z.Z)(sn,2),ln=cn[0],dn=cn[1],an=(0,U.useMediaQuery)({minWidth:320,maxWidth:920});function xn(){v(1),R(!1),nn(!0),rn(!1)}return(0,H.jsxs)(k,{children:[(0,H.jsx)(w,{onClick:function(){return dn(!ln)},id:"burger_menu",children:(0,H.jsx)(O.G,{icon:Q.xiG,size:"xl"})}),!an&&(0,H.jsx)(N.Z,{}),ln&&(0,H.jsx)(m,{onClick:function(n){"backdrop"===n.target.id&&dn(!ln)},id:"backdrop",children:(0,H.jsx)(N.Z,{})}),(0,H.jsxs)(b,{children:[(0,H.jsx)(q.Z,{}),(0,H.jsx)(y,{children:n}),(0,H.jsxs)(C,{children:[(0,H.jsx)(P,{onClick:xn,children:e("upBar")}),(0,H.jsxs)(z,{children:[(0,H.jsx)("div",{onClick:function(){v(0),R(!0),nn(!1),rn(!1)},children:(0,H.jsx)(A.Z,{name:e("filterAll"),active:K})}),(0,H.jsx)("div",{onClick:xn,children:(0,H.jsx)(A.Z,{name:e("filterDn"),active:Y})}),(0,H.jsx)("div",{onClick:function(){v(2),R(!1),nn(!1),rn(!0)},children:(0,H.jsx)(A.Z,{name:e("filterNDone"),active:on})}),(0,H.jsx)(S,{src:L.Z})]})]}),j[h].map((function(n){return(0,H.jsx)(D.Z,{id:n.id,name:n.title,list:n.categorie,color:n.color,done:n.done,date:n.date},n.id)})),(0,H.jsx)(E.Z,{})]}),a&&(0,H.jsx)($.Z,{}),d&&(0,H.jsx)(W.Z,{}),x&&(0,H.jsx)(B.Z,{})]})}}}]);
//# sourceMappingURL=777.06e3e03e.chunk.js.map