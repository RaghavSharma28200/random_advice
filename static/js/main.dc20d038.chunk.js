(this.webpackJsonprandom_quotes=this.webpackJsonprandom_quotes||[]).push([[0],{41:function(t,e,n){},42:function(t,e,n){"use strict";n.r(e);var c=n(2),a=n.n(c),i=n(12),o=n.n(i),r=n(13),s=n(14),d=n(17),u=n(16),h=n(15),l=n.n(h),v=n(1),b=function(t){Object(d.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(r.a)(this,n);for(var c=arguments.length,a=new Array(c),i=0;i<c;i++)a[i]=arguments[i];return(t=e.call.apply(e,[this].concat(a))).state={advice:""},t.fetchAdvice=function(){l.a.get("https://api.adviceslip.com/advice").then((function(e){var n=e.data.slip.advice;t.setState({advice:n})})).catch((function(t){alert("Check Your Internet Connection or Try again")}))},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){this.fetchAdvice()}},{key:"render",value:function(){return Object(v.jsx)("div",{className:"container",children:Object(v.jsxs)("div",{className:"box",children:[Object(v.jsx)("h1",{className:"text",children:this.state.advice}),Object(v.jsx)("button",{onClick:this.fetchAdvice,className:"btn",children:"Give Advice"})]})})}}]),n}(c.Component),f=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,43)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,o=e.getTTFB;n(t),c(t),a(t),i(t),o(t)}))};n(41);o.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(b,{})}),document.getElementById("root")),f()}},[[42,1,2]]]);
//# sourceMappingURL=main.dc20d038.chunk.js.map