(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(31)},28:function(e,t,n){},29:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(4),c=n.n(o),s=n(8),i=n(3),l=n(17),u=n(18),h=(n(28),n(5)),d=n(6),b=n(9),E=n(7),p=n(10),m=function(e){var t=e.name,n=e.email,r=e.id;return a.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},a.a.createElement("img",{src:"https://robohash.org/".concat(r,"?200x200"),alt:"robot photo"}),a.a.createElement("div",null,a.a.createElement("h2",null,t),a.a.createElement("p",null,n)))},g=function(e){var t=e.robots;return a.a.createElement("div",null,t.map(function(e,n){return a.a.createElement(m,{key:n,id:t[n].id,name:t[n].name,email:t[n].email})}))},f=function(e){e.searchfield;var t=e.searchChange;return a.a.createElement("div",{className:"pa2"},a.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},O=function(e){return a.a.createElement("div",{style:{overflow:"scroll",border:"5px solid black",height:"500px"}},e.children)},v=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(b.a)(this,Object(E.a)(t).call(this))).state={hasError:!1},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?a.a.createElement("h1",null,"Opps... That is not good"):this.props.children}}]),t}(r.Component),S=(n(29),function(e){function t(){return Object(h.a)(this,t),Object(b.a)(this,Object(E.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,r=e.robots,o=e.isPending,c=r.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return o?a.a.createElement("h1",null,"Loading..."):a.a.createElement("div",{className:"tc"},a.a.createElement("h1",{className:"f1"},"RoboFriends"),a.a.createElement(f,{searchChange:n}),a.a.createElement(O,null,a.a.createElement(v,null,a.a.createElement(g,{robots:c}))))}}]),t}(r.Component)),R=Object(s.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e(function(e){e({type:"RESQEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"RESQEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"RESQEST_ROBOTS_FAILED",payload:t})})})}}})(S);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y={searchField:""},j={isPending:!1,robots:[],error:""},w=(n(30),Object(l.createLogger)()),C=Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"RESQEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"RESQEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"RESQEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),_=Object(i.d)(C,Object(i.a)(u.a,w));c.a.render(a.a.createElement(s.a,{store:_},a.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.2dc16324.chunk.js.map