define("components/bootstrap/dropdown",function(e,t,n){var r=e("components/jquery/jquery");!function(r,o){if("function"==typeof define&&define.amd)define(["exports","module","./util"],o);else if("undefined"!=typeof t&&"undefined"!=typeof n)o(t,n,e("components/bootstrap/util"));else{var a={exports:{}};o(a.exports,a,r.Util),r.dropdown=a.exports}}(this,function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=o(n),l=function(e){var t="dropdown",n="4.0.0-alpha",r="bs.dropdown",o="."+r,l=".data-api",d=e.fn[t],u={HIDE:"hide"+o,HIDDEN:"hidden"+o,SHOW:"show"+o,SHOWN:"shown"+o,CLICK:"click"+o,CLICK_DATA_API:"click"+o+l,KEYDOWN_DATA_API:"keydown"+o+l},f={BACKDROP:"dropdown-backdrop",DISABLED:"disabled",OPEN:"open"},c={BACKDROP:".dropdown-backdrop",DATA_TOGGLE:'[data-toggle="dropdown"]',FORM_CHILD:".dropdown form",ROLE_MENU:'[role="menu"]',ROLE_LISTBOX:'[role="listbox"]',NAVBAR_NAV:".navbar-nav",VISIBLE_ITEMS:'[role="menu"] li:not(.disabled) a, [role="listbox"] li:not(.disabled) a'},h=function(){function t(e){a(this,t),this._element=e,this._addEventListeners()}return i(t,[{key:"toggle",value:function(){if(this.disabled||e(this).hasClass(f.DISABLED))return!1;var n=t._getParentFromElement(this),r=e(n).hasClass(f.OPEN);if(t._clearMenus(),r)return!1;if("ontouchstart"in document.documentElement&&!e(n).closest(c.NAVBAR_NAV).length){var o=document.createElement("div");o.className=f.BACKDROP,e(o).insertBefore(this),e(o).on("click",t._clearMenus)}var a={relatedTarget:this},i=e.Event(u.SHOW,a);return e(n).trigger(i),i.isDefaultPrevented()?!1:(this.focus(),this.setAttribute("aria-expanded","true"),e(n).toggleClass(f.OPEN),e(n).trigger(e.Event(u.SHOWN,a)),!1)}},{key:"dispose",value:function(){e.removeData(this._element,r),e(this._element).off(o),this._element=null}},{key:"_addEventListeners",value:function(){e(this._element).on(u.CLICK,this.toggle)}}],[{key:"_jQueryInterface",value:function(n){return this.each(function(){var o=e(this).data(r);if(o||e(this).data(r,o=new t(this)),"string"==typeof n){if(void 0===o[n])throw new Error('No method named "'+n+'"');o[n].call(this)}})}},{key:"_clearMenus",value:function(n){if(!n||3!==n.which){var r=e(c.BACKDROP)[0];r&&r.parentNode.removeChild(r);for(var o=e.makeArray(e(c.DATA_TOGGLE)),a=0;a<o.length;a++){var i=t._getParentFromElement(o[a]),s={relatedTarget:o[a]};if(e(i).hasClass(f.OPEN)&&!(n&&"click"===n.type&&/input|textarea/i.test(n.target.tagName)&&e.contains(i,n.target))){var l=e.Event(u.HIDE,s);e(i).trigger(l),l.isDefaultPrevented()||(o[a].setAttribute("aria-expanded","false"),e(i).removeClass(f.OPEN).trigger(e.Event(u.HIDDEN,s)))}}}}},{key:"_getParentFromElement",value:function(t){var n=void 0,r=s["default"].getSelectorFromElement(t);return r&&(n=e(r)[0]),n||t.parentNode}},{key:"_dataApiKeydownHandler",value:function(n){if(/(38|40|27|32)/.test(n.which)&&!/input|textarea/i.test(n.target.tagName)&&(n.preventDefault(),n.stopPropagation(),!this.disabled&&!e(this).hasClass(f.DISABLED))){var r=t._getParentFromElement(this),o=e(r).hasClass(f.OPEN);if(!o&&27!==n.which||o&&27===n.which){if(27===n.which){var a=e(r).find(c.DATA_TOGGLE)[0];e(a).trigger("focus")}return void e(this).trigger("click")}var i=e.makeArray(e(c.VISIBLE_ITEMS));if(i=i.filter(function(e){return e.offsetWidth||e.offsetHeight}),i.length){var s=i.indexOf(n.target);38===n.which&&s>0&&s--,40===n.which&&s<i.length-1&&s++,~s||(s=0),i[s].focus()}}}},{key:"VERSION",get:function(){return n}}]),t}();return e(document).on(u.KEYDOWN_DATA_API,c.DATA_TOGGLE,h._dataApiKeydownHandler).on(u.KEYDOWN_DATA_API,c.ROLE_MENU,h._dataApiKeydownHandler).on(u.KEYDOWN_DATA_API,c.ROLE_LISTBOX,h._dataApiKeydownHandler).on(u.CLICK_DATA_API,h._clearMenus).on(u.CLICK_DATA_API,c.DATA_TOGGLE,h.prototype.toggle).on(u.CLICK_DATA_API,c.FORM_CHILD,function(e){e.stopPropagation()}),e.fn[t]=h._jQueryInterface,e.fn[t].Constructor=h,e.fn[t].noConflict=function(){return e.fn[t]=d,h._jQueryInterface},h}(r);t.exports=l})});