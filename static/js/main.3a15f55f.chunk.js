(this.webpackJsonphousesearcher=this.webpackJsonphousesearcher||[]).push([[0],{17:function(e,a,t){e.exports=t(28)},22:function(e,a,t){},28:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),c=t(2),s=t.n(c),o=(t(22),t(6)),i=t(1),l=t(15),m=t(16);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var u={searchField:""},h={property:[],isPending:!1,error:""},d=t(3),_=t(4),p=t(7),E=t(5),g=t(8),f=function(e){var a=e.features,t=e.id,r=e.name,c=e.area,s=e.postcode,o=e.type,i=e.desc,l=e.price,m=e.image;return n.a.createElement("div",{className:"card"},n.a.createElement("div",{className:"card__house card__house--front"},n.a.createElement("div",{className:"house__details"},n.a.createElement("img",{className:"house__img",src:m,alt:"property-".concat(t,", ").concat(r)}),n.a.createElement("h2",{className:"house__name"},r),n.a.createElement("p",{className:"house__address"},"".concat(c,", ").concat(s)),n.a.createElement("p",{className:"house__type"},o),n.a.createElement("p",{className:"house__price"},n.a.createElement("span",{className:"house__price--currency"},"\xa3"),l)),n.a.createElement("div",{className:"card__house card__house--back"},n.a.createElement("div",{className:"house__details"},n.a.createElement("p",{className:"house__description"},i),n.a.createElement("ul",{className:"house__list"},n.a.createElement("li",{className:"house__item house__item--emojiBed"},"".concat(a.bedrooms," bedrooms")),n.a.createElement("li",{className:"house__item house__item--emojiCity"},"".concat(a.city_distance,"mi from city center")),n.a.createElement("li",{className:"house__item house__item--emojiSchool"},"".concat(a.school_distance,"mi from local school")),n.a.createElement("li",{className:"house__item house__item--emojiParking"},"parking, ".concat(a.parking))),n.a.createElement("a",{className:"btn btn__primary",href:"#!",target:"_blank"},"View")))))},y=function(e){var a=e.property;return n.a.createElement("div",{className:"card-container"},a.map((function(e){return n.a.createElement(f,{key:e.id,features:e.house_features,id:e.id,name:e.house_address,area:e.house_area,postcode:e.house_postcode,type:e.house_type,desc:e.house_desc,price:e.house_price,image:e.imageData})})))},v=function(e){var a=e.searchChange;return n.a.createElement("div",{className:"search"},n.a.createElement("input",{onChange:a,className:"search__input tc",type:"search",placeholder:"search for property type"}))},N=function(){return n.a.createElement("div",{className:"loader"},n.a.createElement("div",{className:"loader__spinner"},n.a.createElement("div",{className:"loader__spinner loader__spinner--rect1"}),n.a.createElement("div",{className:"loader__spinner loader__spinner--rect2"}),n.a.createElement("div",{className:"loader__spinner loader__spinner--rect3"}),n.a.createElement("div",{className:"loader__spinner loader__spinner--rect4"}),n.a.createElement("div",{className:"loader__spinner loader__spinner--rect5"})))},b=function(e){return n.a.createElement("div",{className:"scroll"},e.children)},O=function(e){function a(e){var t;return Object(d.a)(this,a),(t=Object(p.a)(this,Object(E.a)(a).call(this,e))).state={hasError:!1},t}return Object(g.a)(a,e),Object(_.a)(a,[{key:"componentDidCatch",value:function(e,a){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?n.a.createElement("h1",{className:"tc error-msg"},"Oops..Something went wrong."):this.props.children}}]),a}(r.Component),S=function(e){function a(){return Object(d.a)(this,a),Object(p.a)(this,Object(E.a)(a).apply(this,arguments))}return Object(g.a)(a,e),Object(_.a)(a,[{key:"componentDidMount",value:function(){(0,this.props.onFetchHomes)()}},{key:"render",value:function(){var e=this.props,a=e.searchField,t=e.onSearchChange,r=e.property,c=e.isPending,s=r.filter((function(e){return e.house_type.toLowerCase().includes(a.toLowerCase())}));return c?n.a.createElement(N,null):n.a.createElement(n.a.Fragment,null,n.a.createElement("h1",{className:"main-heading tc"},"Home Searcher"),n.a.createElement(v,{searchChange:t}),n.a.createElement(b,null,n.a.createElement(O,null,n.a.createElement(y,{property:s}))))}}]),a}(r.Component),j=Object(o.b)((function(e){var a=e.searchHomes,t=e.getHomes;return{searchField:a.searchField,property:t.property,isPending:t.isPending,error:t.error}}),(function(e){return{onSearchChange:function(a){return e({type:"CHANGE_SEARCH_FIELD",payload:a.target.value})},onFetchHomes:function(){return e((function(e){e({type:"REQUEST_HOMES_PENDING"}),fetch("https://api.jsonbin.io/b/5e66463103d6af389870144e/2").then((function(e){return e.json()})).then((function(a){return e({type:"REQUEST_HOMES_SUCCESS",payload:a})})).catch((function(a){return e({type:"REQUEST_HOMES_FAILED",payload:a})}))}))}}}))(S),C=Object(l.createLogger)(),H=Object(i.c)({searchHomes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:a.payload});default:return e}},getHomes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(a.type){case"REQUEST_HOMES_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_HOMES_SUCCESS":return Object.assign({},e,{property:a.payload,isPending:!1});case"REQUEST_HOMES_FAILED":return Object.assign({},e,{error:a.payload,isPending:!1});default:return e}}}),w=Object(i.d)(H,Object(i.a)(m.a,C));s.a.render(n.a.createElement(o.a,{store:w},n.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[17,1,2]]]);
//# sourceMappingURL=main.3a15f55f.chunk.js.map