"use strict";var _createClass=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}();function _asyncToGenerator(t){return function(){var e=t.apply(this,arguments);return new Promise(function(t,n){return function r(i,o){try{var c=e[i](o),s=c.value}catch(t){return void n(t)}if(!c.done)return Promise.resolve(s).then(function(t){r("next",t)},function(t){r("throw",t)});t(s)}("next")})}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var PriceSelector=function(t){function e(){return _classCallCheck(this,e),_possibleConstructorReturn(this,(e.__proto__||Object.getPrototypeOf(e)).apply(this,arguments))}return _inherits(e,HTMLElement),_createClass(e,[{key:"connectedCallback",value:function(){console.log(this.getAttributeNames()),this.innerHTML="\n        <style>\n\n        \n        .selector-wrap {\n            display: flex;\n            font-family: Open Sans,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;\n        }\n        .icon-container {\n            color: "+(this.getAttribute("icon-color")?this.getAttribute("icon-color"):"black")+";\n            font-size: "+(this.getAttribute("font-size")?this.getAttribute("font-size"):"15px")+";\n            width: 25px;\n        }\n\n        .price-container {\n            color: "+(this.getAttribute("color")?this.getAttribute("color"):"black")+";\n            font-size: "+(this.getAttribute("font-size")?this.getAttribute("font-size"):"15px")+';\n        }\n\n        @media (max-width: 500px) {\n          .icon-container { \n            font-size: 14px;\n          }\n\n          .price-container { \n            font-size: 14px;\n          }\n\n        }\n        </style>\n        <div class="selector-wrap d-flex align-items-center justify-content-left">\n            <div class="icon-container">\n                <ion-icon name="caret-down-outline"></ion-icon>\n            </div>\n            <div id="price-container" class="price-container">\n                BTC/USD 10000\n            </div>\n        </div>',this.fetchPrice()}},{key:"fetchPrice",value:function(){var t=_asyncToGenerator(regeneratorRuntime.mark(function t(){var e,n,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return e=this.getAttribute("default-coin")?this.getAttribute("default-coiin"):"bitcoin",n=this.getAttribute("default-currency")?this.getAttribute("default-currency"):"usd",r=null,t.next=5,fetch("https://api.coingecko.com/api/v3/coins/"+e).then(function(t){return t.json()}).then(function(t){return r=t});case 5:document.getElementById("price-container").innerHTML=r.symbol.toUpperCase()+"/"+n.toUpperCase()+" "+r.market_data.current_price[n];case 6:case"end":return t.stop()}},t,this)}));return function(){return t.apply(this,arguments)}}()}]),e}();customElements.define("price-selector",PriceSelector);