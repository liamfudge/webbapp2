(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(t,e,n){t.exports=n(17)},,,,,,function(t,e,n){},function(t,e,n){t.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),i=n(2),r=n.n(i),c=(n(14),n(15),n(16),n(3)),u=n(4),l=n(6),s=n(5),p=n(7),f=function(t){function e(){var t;return Object(c.a)(this,e),(t=Object(l.a)(this,Object(s.a)(e).call(this))).input=function(e){t.setState({input:e.target.value})},t.clicked=function(){t.setState({output:t.state.input})},t.state={flowers:{},input:"",output:""},t}return Object(p.a)(e,t),Object(u.a)(e,[{key:"componentWillMount",value:function(){var t=this;fetch("/flower").then(function(t){return t.json()}).then(function(e){t.setState({flowers:e})})}},{key:"render",value:function(){return a.a.createElement("div",null,"Here is a flower",a.a.createElement("div",null,this.state.flowers.name),a.a.createElement("input",{type:"text",placeholder:"write your name here",onChange:this.input.bind(this)}),a.a.createElement("button",{onClick:this.clicked},"Generate Name"),this.state.output)}}]),e}(a.a.Component);var h=function(){return a.a.createElement("div",{className:"App"},a.a.createElement(f,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.fbaeb9a9.chunk.js.map