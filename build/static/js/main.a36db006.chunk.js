(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){},26:function(e,t,a){e.exports=a(70)},70:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),c=a.n(s),o=(a(10),a(17)),i=a(8),l=a.n(i),u=a(18),m=a(19),d=a(20),h=a(24),p=a(21),y=a(25);var f=function(e){var t=e.dayNumber,a=e.day,n=e.min,s=e.max;return r.a.createElement("div",{className:"day day--".concat(t)},r.a.createElement("h2",{className:"date"},a),r.a.createElement("p",{className:"temp"},"Tempratures:"),r.a.createElement("p",{className:"min"},"Low: ",n,"\xb0"),r.a.createElement("p",{className:"max"},"High: ",s,"\xb0"))},v=a(22),g=a.n(v),E=(a(50),{initialIndex:2,pageDots:!1,draggable:!1});var w=function(e){return r.a.createElement(g.a,{className:"carousel",elementType:"div",options:E,disableImagesLoaded:!1,reloadOnUpdate:!0},e.days)},b=a(23),x=a.n(b);function k(e,t){var a,n,r,s=[];for(a=0,n=e.length;a<n;a+=t)r=e.slice(a,a+t),s.push(r);return s}var C=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(h.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).state={city:"",dayChunks:[],dates:[],showCarousel:!1},a.getWeatherData=function(){var e=Object(u.a)(l.a.mark(function e(t){var n,r;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.get("http://api.openweathermap.org/data/2.5/forecast?q=".concat(t,",US&units=imperial&appid=581268fb978a3330cfbfb8c780e67361")).then(function(e){a.setState({city:e.data.city.name,dayChunks:k(e.data.list,8),dates:[],datesMinMax:[]})});case 2:n=[],r=[],a.state.dayChunks.forEach(function(e){var t="May ".concat(e[0].dt_txt.substr(8,2));n.push(t);var a=[];e.forEach(function(e){a.push(e.main.temp_min),a.push(e.main.temp_max)}),a.sort(),r.push([a[0],a[a.length-1]])}),a.setState({dates:n,datesMinMax:r});case 6:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a.onChange=function(e){return a.setState(Object(o.a)({},e.target.name,e.target.value))},a}return Object(y.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e,t=this;return e=this.state.dates?this.state.dates.map(function(e,a){return r.a.createElement(f,{key:a,dayNumber:a+1,day:e,min:Math.round(t.state.datesMinMax[a][0]),max:Math.round(t.state.datesMinMax[a][1])})}):r.a.createElement("p",null,"Could not get weather data..."),r.a.createElement("div",{className:"App",style:{backgroundImage:"url(https://source.unsplash.com/collection/4762064)"}},r.a.createElement("div",{className:"contentArea"},r.a.createElement("h1",null,"The Forecast for ",this.state.city),r.a.createElement("h3",null,"Type in a city name to see the 5 day temprature forecast"),r.a.createElement("div",{className:"search"},r.a.createElement("input",{placeholder:"Enter city",onChange:this.onChange,name:"city",value:this.state.city}),r.a.createElement("button",{onClick:function(){t.setState({showCarousel:!0}),t.getWeatherData(t.state.city),document.body.classList.add("search-results")}},"GO"))),r.a.createElement("div",{className:"carousel-container"},this.state.showCarousel?r.a.createElement(w,{days:e}):null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[26,1,2]]]);
//# sourceMappingURL=main.a36db006.chunk.js.map