(this["webpackJsonpsecond-app"]=this["webpackJsonpsecond-app"]||[]).push([[0],{42:function(e,t,n){e.exports=n(66)},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},52:function(e,t,n){},59:function(e,t,n){},63:function(e,t,n){},64:function(e,t,n){},65:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(32),l=n.n(c),i=(n(47),n(48),n(49),n(10)),u=n(33),o=n(34),m=n(40),s=n(39),p=Object(a.createContext)(),d=function(e){Object(m.a)(n,e);var t=Object(s.a)(n);function n(){var e;return Object(u.a)(this,n),(e=t.call(this)).addItem=function(t){var n=e.state.items.find((function(e){return e.name===t.target.name})),a=Object(i.a)(e.state.userChoice);a.find((function(e){return e.id===n.id}))?(a.map((function(e){return e.id===n.id?e.quantity+=1:e})),e.setState({userChoice:Object(i.a)(a)})):(n.quantity=1,e.setState({userChoice:[].concat(Object(i.a)(a),[n])}))},e.removeItem=function(t){var n=e.state.items.find((function(e){return e.name===t.target.name})),a=Object(i.a)(e.state.userChoice);a.find((function(e){return e.id===n.id&&0!==e.quantity}))?(a.map((function(e){return e.id===n.id&&0!==e.quantity?e.quantity-=1:e})),e.setState({userChoice:Object(i.a)(a)})):e.setState({userChoice:Object(i.a)(a)})},e.getPrice=function(){return e.state.userChoice.reduce((function(e,t){return e+t.price*t.quantity}),0)},e.setDeault=function(){console.log("got her")},e.state={items:[{name:"beff",quantity:0,price:25,id:1},{name:"egg",quantity:0,price:10,id:2},{name:"cheese",quantity:0,price:15,id:3},{name:"salad",quantity:0,price:5,id:4}],userChoice:[],currentUser:null},e}return Object(o.a)(n,[{key:"render",value:function(){return r.a.createElement(p.Provider,{value:{items:this.state.items,addItem:this.addItem,removeItem:this.removeItem,userChoice:this.state.userChoice,price:this.getPrice(),setDeault:this.setDeault}},this.props.children)}}]),n}(r.a.Component),h=function(e){var t=e.item;return r.a.createElement(p.Consumer,null,(function(e){return r.a.createElement("div",{className:"select"},r.a.createElement("span",{className:"title"},t.name),r.a.createElement("button",{name:t.name,onClick:e.addItem},"More"),r.a.createElement("button",{name:t.name,onClick:e.removeItem},"Less"))}))},f=function(){return r.a.createElement(p.Consumer,null,(function(e){return r.a.createElement("div",{className:"build"},e.items.map((function(e){return r.a.createElement(h,{key:e.id,item:e})})))}))},E=n(3),g=n(4);function b(){var e=Object(E.a)(["\n  margin: auto;\n  width: 400px;\n"]);return b=function(){return e},e}var z=g.a.div(b()),v=(n(52),function(){return r.a.createElement(p.Consumer,null,(function(e){return r.a.createElement(z,null,r.a.createElement("div",{className:"bread-top"}),e.userChoice.length?e.userChoice.map((function(e){return e.quantity?r.a.createElement("div",{className:"".concat(e.name)},r.a.createElement("span",{style:{marginLeft:"45%",color:"White"}},e.quantity)):console.log(e)})):r.a.createElement("h1",{style:{margin:"auto",marginLeft:"30%"}},"No Items"),r.a.createElement("div",{className:"bread-bottom"}))}))});function M(){var e=Object(E.a)(["\n  color: white;\n  font-size: 45px;\n  margin: auto;\n  margin-top: -25px;\n"]);return M=function(){return e},e}function y(){var e=Object(E.a)(["\n  height: 40%;\n  width: 400px;\n  margin: auto;\n"]);return y=function(){return e},e}function O(){var e=Object(E.a)(["\n  width: 100%;\n  height: 60%;\n  display: grid;\n  grid-template-rows: 1fr 30px;\n  justify-content: center;\n"]);return O=function(){return e},e}function j(){var e=Object(E.a)(["\n  margin: auto;\n  height: 78vh;\n  @media (max-width: 375) {\n    margin: auto;\n  }\n"]);return j=function(){return e},e}var x=g.a.div(j()),w=g.a.div(O()),C=g.a.div(y()),k=g.a.span(M()),I=function(e){return r.a.createElement(p.Consumer,null,(function(t){return r.a.createElement(x,null,r.a.createElement(w,null,r.a.createElement(v,null),r.a.createElement(k,null,"$ ",t.price," ",r.a.createElement("button",{onClick:function(){return e.history.push("/checkout")}},"checkout"))),r.a.createElement(C,null,r.a.createElement(f,null)))}))},S=n(12),N=n.n(S),q=n(22),P=n(13);function A(){return(A=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function D(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var L=r.a.createElement("g",{transform:"translate(0.000000,209.000000) scale(0.100000,-0.100000)",fill:"#000000",stroke:"none"},r.a.createElement("path",{d:"M925 2079 c-171 -23 -352 -92 -496 -190 -212 -142 -300 -341 -240 -539 21 -67 21 -73 6 -97 -18 -28 -38 -28 -127 -2 -56 15 -74 5 -64 -35 9 -36 33 -56 69 -57 l32 0 -23 -16 c-26 -18 -28 -40 -6 -65 16 -16 14 -21 -25 -73 -31 -40 -40 -61 -36 -78 5 -20 15 -24 86 -34 44 -5 82 -13 85 -15 3 -3 -4 -21 -15 -40 -25 -41 -27 -73 -12 -202 22 -183 58 -253 177 -337 211 -150 427 -242 679 -286 152 -26 396 -2 621 62 256 73 404 202 452 394 13 51 26 79 45 94 51 44 76 134 59 215 -6 26 -13 96 -15 155 l-5 108 32 -6 c17 -4 51 -20 75 -35 42 -27 46 -28 73 -14 16 8 38 29 49 47 25 41 19 87 -22 178 -36 78 -85 130 -151 159 l-48 21 0 77 c0 91 -37 210 -89 286 -85 123 -331 254 -579 306 -112 24 -465 36 -587 19z m567 -48 c206 -41 309 -85 443 -186 76 -58 120 -107 153 -171 61 -119 74 -280 31 -374 -109 -236 -551 -347 -1134 -285 -390 41 -569 97 -686 214 -81 82 -104 136 -103 241 1 177 97 309 323 443 136 81 280 123 481 141 118 10 388 -3 492 -23z m744 -696 c43 -25 119 -125 130 -172 8 -32 0 -131 -12 -143 -6 -6 -40 3 -92 25 -94 40 -185 65 -232 65 l-33 0 42 30 c44 33 80 83 120 168 14 29 27 52 29 52 3 0 24 -11 48 -25z m-1888 -197 l31 -26 -54 -37 c-43 -30 -59 -36 -82 -31 -15 4 -44 7 -64 6 -61 -1 -88 48 -54 97 14 20 13 21 -19 27 -38 7 -85 40 -74 51 4 4 27 2 52 -4 87 -22 156 -8 156 31 0 5 17 -12 39 -39 21 -27 52 -61 69 -75z m203 -82 c74 -19 179 -40 234 -47 55 -7 102 -13 103 -15 12 -9 -90 -177 -135 -221 -47 -48 -56 -53 -97 -53 -56 0 -146 33 -178 65 -48 48 -101 305 -64 305 2 0 64 -15 137 -34z m1531 12 l66 -12 -38 -45 c-52 -62 -63 -93 -49 -143 5 -22 8 -42 6 -45 -3 -2 -21 0 -41 5 -47 14 -60 -2 -54 -68 3 -28 4 -50 3 -50 -1 0 -12 27 -24 60 -24 66 -35 77 -56 60 -12 -10 -15 -9 -15 4 0 9 -11 28 -25 41 -34 34 -124 36 -155 3 -11 -12 -20 -28 -20 -35 0 -9 -14 -13 -44 -13 -26 0 -48 -6 -56 -15 -15 -18 -41 -20 -57 -4 -8 8 -13 5 -18 -10 -8 -27 -50 -37 -81 -21 -26 14 -70 94 -80 148 l-6 32 55 0 c114 0 418 64 519 110 26 12 55 17 73 14 17 -2 60 -10 97 -16z m-1705 -66 c1 -20 5 -50 9 -66 6 -26 5 -28 -12 -22 -45 18 -172 36 -250 36 -46 0 -84 3 -84 8 1 4 15 24 33 45 l33 38 42 -23 c35 -19 45 -21 62 -10 26 16 40 15 60 -3 15 -14 21 -12 55 15 21 17 41 28 44 25 3 -4 6 -23 8 -43z m924 -30 c11 -12 49 -176 49 -209 0 -46 -30 -43 -73 7 l-34 40 -28 -71 c-38 -98 -74 -106 -75 -16 l0 37 -60 0 c-69 0 -83 14 -56 55 l16 24 -42 -15 c-56 -19 -144 -29 -152 -16 -8 13 11 65 45 127 l28 50 188 -3 c103 -2 191 -7 194 -10z m-1066 -47 c131 -18 162 -30 168 -61 3 -20 1 -24 -12 -19 -36 14 -213 54 -268 60 -73 8 -93 14 -93 26 0 13 90 11 205 -6z m1584 -74 c11 -7 8 -12 -13 -26 -34 -23 -83 -124 -98 -206 l-12 -67 -31 23 c-31 24 -177 97 -255 129 -42 17 -44 19 -25 32 13 10 33 12 66 8 41 -5 48 -4 63 17 12 18 18 21 28 11 18 -18 43 -15 63 8 22 24 42 25 67 3 17 -15 18 -15 18 4 0 33 45 73 82 73 18 0 39 -4 47 -9z m-374 -176 c136 -57 245 -126 245 -155 0 -11 -2 -20 -6 -20 -3 0 -32 19 -66 41 -60 41 -235 129 -257 129 -13 0 -13 3 -5 24 6 16 7 16 89 -19z m-1010 -263 c218 -162 494 -235 885 -236 194 0 242 10 397 84 127 60 229 126 299 192 49 46 54 49 54 27 -1 -67 -84 -175 -197 -255 -128 -92 -283 -142 -523 -170 -189 -21 -318 -15 -470 25 -407 105 -652 287 -677 503 l-6 53 84 -86 c46 -47 116 -109 154 -137z"}),r.a.createElement("path",{d:"M1050 1992 c0 -10 6 -27 14 -38 14 -18 15 -18 21 8 4 15 4 32 0 37 -10 18 -35 12 -35 -7z m30 -13 c0 -11 -4 -17 -10 -14 -5 3 -10 13 -10 21 0 8 5 14 10 14 6 0 10 -9 10 -21z"}),r.a.createElement("path",{d:"M1470 2000 c0 -5 7 -7 15 -4 8 4 22 1 30 -6 9 -7 15 -8 15 -2 0 11 -23 22 -46 22 -8 0 -14 -4 -14 -10z"}),r.a.createElement("path",{d:"M885 1990 c-4 -6 -4 -14 -1 -17 3 -4 6 -1 6 7 0 10 3 10 15 0 20 -16 19 -34 -1 -26 -8 3 -12 2 -9 -4 9 -15 35 -12 35 3 0 21 -37 51 -45 37z"}),r.a.createElement("path",{d:"M1214 1980 c1 -16 56 -28 56 -13 0 12 -22 33 -34 33 -5 0 -1 -7 10 -15 19 -14 19 -14 -3 -15 -12 0 -23 6 -26 13 -2 7 -3 6 -3 -3z"}),r.a.createElement("path",{d:"M1478 1973 c6 -2 18 -2 25 0 6 3 1 5 -13 5 -14 0 -19 -2 -12 -5z"}),r.a.createElement("path",{d:"M1583 1965 c-3 -9 -3 -19 1 -22 3 -4 6 1 6 10 0 10 5 17 10 17 14 0 12 -38 -2 -42 -9 -3 -9 -6 0 -12 13 -8 28 36 17 53 -9 16 -25 13 -32 -4z"}),r.a.createElement("path",{d:"M1710 1926 c0 -28 12 -46 31 -46 24 0 24 22 1 43 -23 21 -32 21 -32 3z m38 -25 c3 -8 -1 -12 -9 -9 -7 2 -15 10 -17 17 -3 8 1 12 9 9 7 -2 15 -10 17 -17z"}),r.a.createElement("path",{d:"M767 1923 c-12 -11 -8 -22 14 -34 31 -16 52 7 25 27 -22 16 -30 17 -39 7z m33 -18 c14 -16 10 -18 -14 -9 -9 3 -16 10 -16 15 0 14 16 11 30 -6z"}),r.a.createElement("path",{d:"M1332 1908 c2 -6 10 -13 16 -14 7 -1 8 0 2 3 -5 2 -8 9 -4 14 3 5 0 9 -6 9 -7 0 -10 -5 -8 -12z"}),r.a.createElement("path",{d:"M1374 1901 c0 -11 4 -17 8 -15 4 3 8 12 8 20 0 8 -4 14 -8 14 -4 0 -8 -9 -8 -19z"}),r.a.createElement("path",{d:"M603 1884 c25 -30 21 -39 -10 -20 l-28 17 24 -20 c13 -12 27 -21 32 -21 17 0 9 27 -13 46 -23 19 -23 19 -5 -2z"}),r.a.createElement("path",{d:"M904 1847 c-8 -21 15 -62 28 -49 13 13 6 54 -9 60 -7 2 -16 -3 -19 -11z m26 -18 c0 -11 -4 -17 -10 -14 -5 3 -10 13 -10 21 0 8 5 14 10 14 6 0 10 -9 10 -21z"}),r.a.createElement("path",{d:"M1500 1827 c0 -8 8 -21 18 -30 14 -13 21 -14 30 -5 9 9 8 16 -5 30 -19 21 -43 24 -43 5z m39 -10 c6 -8 8 -17 4 -20 -7 -8 -33 11 -33 24 0 13 16 11 29 -4z"}),r.a.createElement("path",{d:"M1167 1814 c-14 -14 -7 -75 9 -81 26 -10 38 12 28 48 -9 32 -24 45 -37 33z m31 -53 c-2 -8 -9 -16 -15 -19 -9 -2 -13 8 -13 35 1 36 1 37 16 18 8 -11 13 -26 12 -34z"}),r.a.createElement("path",{d:"M1815 1812 c21 -5 26 -10 17 -16 -7 -4 -21 -5 -30 -1 -13 5 -14 3 -6 -5 14 -15 57 -3 51 13 -2 7 -17 13 -33 14 l-29 2 30 -7z"}),r.a.createElement("path",{d:"M739 1771 c-18 -15 -21 -22 -12 -31 13 -14 29 -7 43 20 15 27 -4 33 -31 11z m21 -10 c0 -12 -20 -25 -27 -18 -7 7 6 27 18 27 5 0 9 -4 9 -9z"}),r.a.createElement("path",{d:"M1010 1756 c0 -15 40 -49 48 -41 2 2 2 16 -2 30 -7 27 -46 36 -46 11z m38 -15 c3 -8 -1 -12 -9 -9 -7 2 -15 10 -17 17 -3 8 1 12 9 9 7 -2 15 -10 17 -17z"}),r.a.createElement("path",{d:"M460 1739 c0 -32 19 -59 40 -59 24 0 26 27 4 58 -19 28 -44 29 -44 1z m50 -36 c0 -7 -6 -13 -14 -13 -15 0 -26 21 -26 47 0 14 3 14 20 -2 11 -10 20 -24 20 -32z"}),r.a.createElement("path",{d:"M629 1701 c-19 -16 -22 -22 -11 -32 10 -11 15 -10 27 4 8 9 10 12 3 7 -17 -14 -31 -13 -26 2 3 7 15 15 29 18 14 4 19 9 12 13 -6 4 -22 -2 -34 -12z"}),r.a.createElement("path",{d:"M294 1686 c-16 -41 22 -94 48 -68 9 9 8 19 -5 47 -18 37 -34 45 -43 21z m37 -27 c7 -14 8 -24 1 -31 -15 -15 -32 0 -32 28 0 30 15 31 31 3z"}),r.a.createElement("path",{d:"M827 1653 c-4 -3 -7 -11 -7 -17 0 -6 5 -4 10 4 9 13 11 13 20 0 15 -23 12 -33 -7 -25 -15 5 -16 4 -5 -6 19 -20 37 3 23 30 -12 22 -23 26 -34 14z"}),r.a.createElement("path",{d:"M1280 1647 c-32 -17 -48 -43 -33 -58 17 -17 40 -5 57 30 18 35 10 45 -24 28z m20 -13 c0 -16 -23 -44 -35 -44 -21 0 -19 27 3 39 19 12 32 14 32 5z"}),r.a.createElement("path",{d:"M1817 1634 c-29 -16 -35 -53 -10 -61 15 -5 53 36 53 59 0 22 -6 22 -43 2z m19 -29 c-18 -28 -36 -33 -36 -11 0 15 40 49 48 41 3 -2 -3 -16 -12 -30z"}),r.a.createElement("path",{d:"M1504 1565 c-9 -23 5 -35 40 -35 42 0 50 9 29 32 -19 22 -61 24 -69 3z m64 -12 c2 -9 -7 -13 -27 -13 -21 0 -31 5 -31 16 0 19 51 16 58 -3z"}),r.a.createElement("path",{d:"M1036 1521 c-14 -16 -15 -20 -2 -30 11 -10 17 -7 30 11 9 12 16 26 16 30 0 15 -27 8 -44 -11z m24 -11 c-6 -11 -15 -18 -21 -14 -6 4 -6 11 2 20 17 21 31 17 19 -6z"}),r.a.createElement("path",{d:"M241 1506 c-9 -11 -6 -18 15 -35 34 -26 66 -28 57 -3 -9 25 -34 52 -48 52 -7 0 -18 -6 -24 -14z m53 -18 c5 -9 7 -20 3 -24 -10 -10 -59 25 -51 37 8 14 35 7 48 -13z"}),r.a.createElement("path",{d:"M576 1499 c-30 -23 -34 -47 -9 -56 19 -7 53 29 53 58 0 24 -11 24 -44 -2z m18 -30 c-20 -23 -34 -25 -34 -5 0 19 44 50 48 36 2 -6 -4 -20 -14 -31z"}),r.a.createElement("path",{d:"M1760 1455 c0 -20 41 -56 60 -53 31 6 23 38 -14 53 -44 18 -46 18 -46 0z m70 -31 c0 -19 -19 -18 -42 3 -27 24 -22 33 12 22 17 -6 30 -17 30 -25z"}),r.a.createElement("path",{d:"M970 1385 c0 -16 34 -55 49 -55 5 0 15 7 22 16 11 14 9 19 -11 35 -30 22 -60 25 -60 4z m54 -14 c12 -13 14 -21 6 -26 -11 -7 -50 21 -50 37 0 15 27 8 44 -11z"}),r.a.createElement("path",{d:"M1363 1344 c-11 -28 52 -47 86 -25 10 7 8 12 -10 25 -30 21 -68 21 -76 0z m68 -10 c11 -14 9 -15 -21 -12 -18 2 -35 9 -38 16 -6 18 43 15 59 -4z"}),r.a.createElement("path",{d:"M376 1313 c-28 -15 -29 -16 -11 -29 34 -25 80 -11 73 22 -4 25 -26 27 -62 7z m54 -8 c0 -19 -24 -29 -47 -20 -17 6 -17 7 1 21 26 18 46 18 46 -1z"}),r.a.createElement("path",{d:"M1700 1284 c0 -18 31 -74 41 -74 12 0 18 42 9 66 -11 27 -50 34 -50 8z m43 -16 c3 -12 3 -26 0 -31 -7 -12 -33 20 -33 40 0 22 27 15 33 -9z"}),r.a.createElement("path",{d:"M863 1243 c-23 -16 -31 -47 -14 -57 14 -9 39 3 46 22 5 14 4 14 -13 -1 -23 -21 -32 -22 -32 -3 0 22 42 49 52 33 5 -8 8 -7 8 6 0 21 -18 21 -47 0z"}),r.a.createElement("path",{d:"M597 1203 c-13 -12 -7 -41 9 -47 24 -9 74 -7 74 3 0 12 -49 51 -65 51 -6 0 -15 -3 -18 -7z m44 -23 l24 -20 -30 2 c-19 2 -31 9 -33 21 -5 23 10 22 39 -3z"}),r.a.createElement("path",{d:"M2175 1271 c-6 -11 9 -23 19 -14 9 9 7 23 -3 23 -6 0 -12 -4 -16 -9z"}),r.a.createElement("path",{d:"M2240 1224 c0 -8 5 -12 10 -9 6 3 10 10 10 16 0 5 -4 9 -10 9 -5 0 -10 -7 -10 -16z"}),r.a.createElement("path",{d:"M2280 1174 c0 -8 5 -12 10 -9 6 3 10 10 10 16 0 5 -4 9 -10 9 -5 0 -10 -7 -10 -16z"}),r.a.createElement("path",{d:"M2130 1164 c0 -8 5 -12 10 -9 6 3 10 10 10 16 0 5 -4 9 -10 9 -5 0 -10 -7 -10 -16z"}),r.a.createElement("path",{d:"M2180 1141 c0 -6 5 -13 10 -16 6 -3 10 1 10 9 0 9 -4 16 -10 16 -5 0 -10 -4 -10 -9z"}),r.a.createElement("path",{d:"M2235 1121 c-6 -11 9 -23 19 -14 9 9 7 23 -3 23 -6 0 -12 -4 -16 -9z"}),r.a.createElement("path",{d:"M2306 1101 c-4 -7 -5 -15 -2 -18 9 -9 19 4 14 18 -4 11 -6 11 -12 0z"}),r.a.createElement("path",{d:"M520 1040 c0 -5 7 -10 16 -10 8 0 12 5 9 10 -3 6 -10 10 -16 10 -5 0 -9 -4 -9 -10z"}),r.a.createElement("path",{d:"M525 990 c3 -5 10 -10 16 -10 5 0 9 5 9 10 0 6 -7 10 -16 10 -8 0 -12 -4 -9 -10z"}),r.a.createElement("path",{d:"M685 980 c3 -5 10 -10 16 -10 5 0 9 5 9 10 0 6 -7 10 -16 10 -8 0 -12 -4 -9 -10z"}),r.a.createElement("path",{d:"M520 950 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0 -15 -4 -15 -10z"}),r.a.createElement("path",{d:"M675 940 c-3 -5 1 -10 9 -10 9 0 16 5 16 10 0 6 -4 10 -9 10 -6 0 -13 -4 -16 -10z"}),r.a.createElement("path",{d:"M525 910 c3 -5 10 -10 16 -10 5 0 9 5 9 10 0 6 -7 10 -16 10 -8 0 -12 -4 -9 -10z"}),r.a.createElement("path",{d:"M655 890 c4 -6 11 -8 16 -5 14 9 11 15 -7 15 -8 0 -12 -5 -9 -10z"}),r.a.createElement("path",{d:"M540 860 c0 -5 7 -10 16 -10 8 0 12 5 9 10 -3 6 -10 10 -16 10 -5 0 -9 -4 -9 -10z"}),r.a.createElement("path",{d:"M640 850 c0 -5 7 -10 15 -10 8 0 15 5 15 10 0 6 -7 10 -15 10 -8 0 -15 -4 -15 -10z"}),r.a.createElement("path",{d:"M545 810 c3 -5 10 -10 16 -10 5 0 9 5 9 10 0 6 -7 10 -16 10 -8 0 -12 -4 -9 -10z"}),r.a.createElement("path",{d:"M625 801 c-6 -11 9 -23 19 -14 9 9 7 23 -3 23 -6 0 -12 -4 -16 -9z"}),r.a.createElement("path",{d:"M1935 999 c11 -13 31 -45 44 -71 13 -27 28 -48 33 -48 15 0 -54 120 -76 132 l-21 11 20 -24z"}),r.a.createElement("path",{d:"M1511 928 c-1 -16 -11 -34 -28 -47 l-28 -21 28 11 c21 9 33 9 55 0 24 -10 25 -10 8 3 -10 8 -22 30 -26 48 -7 30 -8 31 -9 6z"}),r.a.createElement("path",{d:"M1139 920 c-1 -14 -2 -32 -3 -41 -1 -9 -9 -26 -19 -37 -18 -20 -18 -20 3 -15 16 4 23 0 27 -17 l6 -24 8 22 c5 13 18 26 30 30 21 8 21 8 -5 25 -14 9 -30 32 -35 50 -8 29 -9 30 -12 7z"})),R=function(e){var t=e.svgRef,n=e.title,a=D(e,["svgRef","title"]);return r.a.createElement("svg",A({width:"242.000000pt",height:"209.000000pt",viewBox:"0 0 242.000000 209.000000",preserveAspectRatio:"xMidYMid meet",ref:t},a),n?r.a.createElement("title",null,n):null,L)},B=r.a.forwardRef((function(e,t){return r.a.createElement(R,A({svgRef:t},e))})),G=(n.p,n(41)),H=n(14),J=n.n(H),U=(n(54),n(57),function(){var e=Object(q.a)(N.a.mark((function e(t,n){var a,r,c,l;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return a=Y.doc("users/".concat(t.uid)),e.next=5,a.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,c=t.email,l=new Date,e.prev=9,e.next=12,a.set(Object(G.a)({displayName:r,email:c,createDate:l},n));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log(e.t0.message);case 17:return e.abrupt("return",a);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,n){return e.apply(this,arguments)}}());J.a.initializeApp({apiKey:"AIzaSyAzyleJDLVYHi8wpX_iebsYibJqW4NgMIA",authDomain:"build-burger-60085.firebaseapp.com",databaseURL:"https://build-burger-60085.firebaseio.com",projectId:"build-burger-60085",storageBucket:"build-burger-60085.appspot.com",messagingSenderId:"794361113018",appId:"1:794361113018:web:a1f13d729385e293399583",measurementId:"G-ZMQ9HPQ73F"});var W=J.a.auth(),Y=J.a.firestore(),F=new J.a.auth.GoogleAuthProvider;F.setCustomParameters({prompt:"select_account"});J.a,n(59);var Q=n(11),T=function(){var e=Object(a.useState)(""),t=Object(P.a)(e,2),n=t[0],c=t[1],l=Object(a.useState)(null),i=Object(P.a)(l,2),u=(i[0],i[1]);return null,Object(a.useEffect)((function(){u(W.onAuthStateChanged(function(){var e=Object(q.a)(N.a.mark((function e(t){return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:c(t),U(t);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()))}),[null]),r.a.createElement("nav",null,r.a.createElement(Q.b,{to:"/"},r.a.createElement(B,{className:"logo"})),r.a.createElement(Q.b,{to:"/sign-in",className:"option"},n?r.a.createElement("h2",{onClick:function(){return W.signOut()}},"SIGN-OUT"):r.a.createElement("h1",null,"sign-in")))},V=n(23),$=(n(63),function(e){var t=e.handleChange,n=e.lable,a=Object(V.a)(e,["handleChange","lable"]);return r.a.createElement("div",{className:"group"},r.a.createElement("input",Object.assign({className:"form-input",onChange:t},a)),n?r.a.createElement("lable",{className:"".concat(a.valu.length?"shrink":""," form-input-label")},n):null)}),_=(n(64),function(e){var t=e.children,n=e.isGoogleSignIn,a=Object(V.a)(e,["children","isGoogleSignIn"]);return r.a.createElement("div",Object.assign({className:"".concat(n?"google":""," custom-button")},a),t)}),K=(n(65),function(e){var t=Object(a.useState)(""),n=Object(P.a)(t,2),c=n[0],l=n[1],i=Object(a.useState)(""),u=Object(P.a)(i,2),o=u[0],m=u[1],s=function(e){"email"===e.target.name?l(e.target.value):m(e.target.value)};return r.a.createElement("form",null,r.a.createElement($,{name:"email",type:"email",lable:"Email",valu:c,handleChange:s}),r.a.createElement($,{name:"Password",type:"password",lable:"Password",valu:o,handleChange:s}),r.a.createElement("div",{className:"buttons"},r.a.createElement(_,{onClick:function(){""!==c&&""!==o&&e.history.push("/home")}},"signin")))}),X=n(8),Z=function(e){return r.a.createElement("h1",{style:{justifySelf:"center"}},"Thank you for choosing Us!!!!!")};function ee(){var e=Object(E.a)(["\n  display: grid;\n  grid-template-rows: 20px 1fr 20px;\n"]);return ee=function(){return e},e}function te(){var e=Object(E.a)(["\n  grid-area: recipt;\n  margin: auto;\n"]);return te=function(){return e},e}function ne(){var e=Object(E.a)(["\n  grid-area: view;\n  margin: auto;\n"]);return ne=function(){return e},e}function ae(){var e=Object(E.a)(['\n  width: 80vw;\n  margin: auto;\n  height: 70vh;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-areas: "view recipt";\n  @media (max-width: 380px) {\n    display: grid;\n    grid-template-rows: 1fr 1fr;\n    grid-template-columns: 1fr;\n    grid-template-areas: "view" "recipt";\n    margin-left: 0px;\n  }\n']);return ae=function(){return e},e}var re=g.a.div(ae()),ce=g.a.div(ne()),le=g.a.div(te()),ie=g.a.div(ee());function ue(){var e=Object(E.a)(["\n  display: grid;\n  grid-template-columns: 2fr 1fr;\n  grid-template-rows: repeat(3, 20px);\n\n  border-top: 1px solid black;\n  margin-bottom: 10px;\n"]);return ue=function(){return e},e}function oe(){var e=Object(E.a)(["\n  font-size: 18px;\n  justify-content: end;\n  margin-bottom: 10px;\n  padding-left: 15px;\n"]);return oe=function(){return e},e}function me(){var e=Object(E.a)(["\n  grid-area: body;\n  display: grid;\n  margin-top: 0px;\n  grid-template-columns: 2fr 1fr;\n"]);return me=function(){return e},e}function se(){var e=Object(E.a)(["\n  grid-area: title;\n  color: black;\n  height: 25px;\n  border-bottom: 1px solid black;\n  font-size: 18px;\n  padding-left: 15px;\n"]);return se=function(){return e},e}function pe(){var e=Object(E.a)(['\n  width: 250px;\n  height: 300px;\n  display: grid;\n  grid-template-rows: 30px 1fr 80px;\n  grid-template-areas: "title " "body" "total";\n  background-color: white;\n  border-radius: 5px 5px;\n  box-shadow: 5px 3px gray;\n']);return pe=function(){return e},e}var de=g.a.h1(pe()),he=g.a.span(se()),fe=g.a.div(me()),Ee=g.a.span(oe()),ge=g.a.div(ue()),be=function(){return r.a.createElement(p.Consumer,null,(function(e){return r.a.createElement(de,null,r.a.createElement(he,null,"Sample Burger House"),r.a.createElement(fe,null," ",e.userChoice.map((function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ee,null,e.name),r.a.createElement(Ee,null,e.quantity," x ",e.price))}))),r.a.createElement(ge,null,r.a.createElement(Ee,null,"total"),r.a.createElement(Ee,null,e.price),r.a.createElement(Ee,null,"Vat"),r.a.createElement(Ee,null,15*e.price/100),r.a.createElement(Ee,null,"Pay"),r.a.createElement(Ee,null,e.price+15*e.price/100)))}))},ze=function(e){return r.a.createElement(p.Consumer,null,(function(t){return r.a.createElement(ie,null,r.a.createElement("div",{style:{margin:"auto"}},r.a.createElement("button",{onClick:function(){return e.history.push("/")}},"Home"),r.a.createElement("button",{onClick:function(){return e.history.push("/order")},style:{marginLeft:"50px"}},"Order")),r.a.createElement(re,null,r.a.createElement(ce,null,r.a.createElement(v,null)),r.a.createElement(le,null,r.a.createElement(be,null))))}))},ve=function(){return r.a.createElement(d,null,r.a.createElement(T,null),r.a.createElement(X.a,{exact:!0,path:"/",component:K}),r.a.createElement(X.a,{exact:!0,path:"/home",component:I}),r.a.createElement(X.a,{path:"/checkout",component:ze}),r.a.createElement(X.a,{exact:!0,path:"/order",component:Z}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Q.a,null,r.a.createElement(ve,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[42,1,2]]]);
//# sourceMappingURL=main.9315053c.chunk.js.map