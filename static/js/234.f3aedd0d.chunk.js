"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[234],{1234:function(n,e,r){r.r(e),r.d(e,{default:function(){return H}});var t,o,i,a,c,s,d=r(3531),l=r(7176),x=r(9085),p=r(6036),u=r(966),h=r(6316),b=r(8069),f=r(168),g=r(6444),m=g.ZP.li(t||(t=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  /* border-bottom: 1px solid black; */\n  padding: 5px 10px;\n\n  background-color: rgb(238, 250, 238);\n  border-radius: 8px;\n  color: #000;\n\n  &:not(:last-child) {\n    margin-bottom: 15px;\n  }\n\n  & button {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    border: none;\n    padding: 2px 4px;\n    border-radius: 5px;\n    background-color: #2c3e50;\n    color: #fff;\n\n    transition: background-color 250ms linear;\n\n    & svg {\n      width: 30px;\n      height: auto;\n    }\n\n    &:disabled {\n      opacity: 20%;\n    }\n\n    &:hover {\n      background-color: red;\n    }\n  }\n"]))),j=g.ZP.div(o||(o=(0,f.Z)(["\n  display: flex;\n  gap: 5px;\n\n  @media screen and (max-width: 480px) {\n    flex-direction: column;\n    font-size: 17px;\n  }\n"]))),w=g.ZP.a(i||(i=(0,f.Z)(["\n  border-bottom: solid 1px #fff;\n\n  &:hover {\n    color: #2c3e50;\n    border-bottom: solid 1px #2c3e50;\n  }\n"]))),v=g.ZP.div(a||(a=(0,f.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),Z=r(3329),y=function(n){var e=n.visibleContacts,r=(0,d.useDispatch)(),t=(0,d.useSelector)(b.selectIsLoading);return(0,Z.jsx)("ul",{children:e.map((function(n){var e=n.id,o=n.name,i=n.number;return(0,Z.jsxs)(m,{children:[(0,Z.jsxs)(j,{children:[(0,Z.jsxs)("p",{children:[o,": "]})," ",(0,Z.jsx)(w,{href:"tel:".concat(i),children:i})]}),(0,Z.jsxs)(v,{children:[t&&(0,Z.jsx)(u.Z,{size:"30"}),(0,Z.jsx)("button",{type:"button",onClick:function(){!function(n){r((0,h.xX)(n)).unwrap().then((function(n){x.Am.success("".concat(n.name," removed from contacts."))})).catch((function(){return x.Am.error("Sorry something went wrong try again")}))}(e)},disabled:t,children:(0,Z.jsx)(p.OZs,{})})]})]},e)}))})},k=r(8268),P=g.ZP.div(c||(c=(0,f.Z)(["\n  box-sizing: border-box;\n  width: 100%;\n  background-color: rgb(208, 250, 208);\n  padding: 10px 30px;\n\n  @media screen and (min-width: 1280px) {\n    width: 600px;\n    margin: 0 auto;\n  }\n"]))),C=g.ZP.label(s||(s=(0,f.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  color: #000;\n\n  @media screen and (max-width: 400px) {\n    gap: 8px;\n    flex-direction: column;\n  }\n\n  & input {\n    width: 100%;\n    flex: 1 1 0;\n    padding-left: 8px;\n    border: none;\n    border-color: rgb(208, 250, 208);\n    background-color: transparent;\n    color: #000;\n    border: 1px solid #000;\n    font-size: 16px;\n    outline: none;\n\n    &:focus {\n      border-color: #000;\n    }\n  }\n"])));var S,z,L,_,F=function(){var n=(0,d.useDispatch)(),e=(0,d.useSelector)((function(n){return n.filterValue}));return(0,Z.jsx)(P,{children:(0,Z.jsxs)(C,{children:["Find contacts by name",(0,Z.jsx)("input",{type:"text",value:e,onChange:function(e){return n((0,k.j)(e.target.value))},placeholder:"search"})]})})},I=r(1087),A=g.ZP.div(S||(S=(0,f.Z)(["\n  margin: 0 auto;\n  border-radius: 10px;\n  overflow: hidden;\n  box-shadow: rgb(150, 150, 150) 10px 10px 20px;\n\n  @media screen and (min-width: 1280px) {\n    width: 600px;\n    margin: 0 auto;\n  }\n"]))),D=(0,g.ZP)(I.Link)(z||(z=(0,f.Z)(["\n  color: rgb(0, 177, 163);\n"]))),E=g.ZP.p(L||(L=(0,f.Z)(["\n  text-align: center;\n"]))),B=g.ZP.div(_||(_=(0,f.Z)(["\n  box-sizing: border-box;\n  width: 100%;\n  padding: 20px 30px;\n\n  background-color: #fff;\n\n  @media screen and (min-width: 1280px) {\n    width: 600px;\n    margin: 0 auto;\n  }\n"])));var H=function(){var n=(0,d.useSelector)(b.selectContacts),e=(0,d.useSelector)(b.selectFilter),r=(0,d.useSelector)(b.selectIsLoading),t=(0,d.useSelector)(b.selectUser),o=(0,d.useSelector)(b.selectIsRefreshing),i=Boolean(n.length),a=e.toLowerCase(),c=n.filter((function(n){return n.name.toLowerCase().includes(a)}));return(0,Z.jsxs)(l.E.div,{initial:{opacity:0,scale:.75},animate:{opacity:1,scale:1},transition:{duration:.8,delay:.2,ease:[0,.71,.2,1.01]},children:[(o||r)&&!i&&(0,Z.jsx)(u.Z,{}),(0,Z.jsxs)(A,{children:[!i&&!o&&!r&&(0,Z.jsx)(l.E.div,{initial:{opacity:0,scale:.75},animate:{opacity:1,scale:1},transition:{duration:.8,delay:.2,ease:[0,.71,.2,1.01]},children:(0,Z.jsx)(B,{children:(0,Z.jsxs)(E,{children:["Hello ",t.name," please"," ",(0,Z.jsx)(D,{to:"/phone-book/add",children:"add"})," your first contact"]})})}),i&&(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(F,{}),(0,Z.jsxs)(B,{children:[!c.length&&(0,Z.jsx)("p",{children:"No matches"}),c&&(0,Z.jsx)(y,{visibleContacts:c})]})]})]})]})}}}]);
//# sourceMappingURL=234.f3aedd0d.chunk.js.map