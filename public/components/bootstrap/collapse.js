define("components/bootstrap/collapse",function(e,t,n){var i=e("components/jquery/jquery");!function(i,a){if("function"==typeof define&&define.amd)define(["exports","module","./util"],a);else if("undefined"!=typeof t&&"undefined"!=typeof n)a(t,n,e("components/bootstrap/util"));else{var s={exports:{}};a(s.exports,s,i.Util),i.collapse=s.exports}}(this,function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),l=a(n),o=function(e){var t="collapse",n="4.0.0-alpha",i="bs.collapse",a="."+i,o=".data-api",u=e.fn[t],g=600,d={toggle:!0,parent:""},f={toggle:"boolean",parent:"string"},h={SHOW:"show"+a,SHOWN:"shown"+a,HIDE:"hide"+a,HIDDEN:"hidden"+a,CLICK_DATA_API:"click"+a+o},c={IN:"in",COLLAPSE:"collapse",COLLAPSING:"collapsing",COLLAPSED:"collapsed"},_={WIDTH:"width",HEIGHT:"height"},p={ACTIVES:".panel > .in, .panel > .collapsing",DATA_TOGGLE:'[data-toggle="collapse"]'},m=function(){function a(t,n){s(this,a),this._isTransitioning=!1,this._element=t,this._config=this._getConfig(n),this._triggerArray=e.makeArray(e('[data-toggle="collapse"][href="#'+t.id+'"],'+('[data-toggle="collapse"][data-target="#'+t.id+'"]'))),this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}return r(a,[{key:"toggle",value:function(){e(this._element).hasClass(c.IN)?this.hide():this.show()}},{key:"show",value:function(){var t=this;if(!this._isTransitioning&&!e(this._element).hasClass(c.IN)){var n=void 0,s=void 0;if(this._parent&&(n=e.makeArray(e(p.ACTIVES)),n.length||(n=null)),!(n&&(s=e(n).data(i),s&&s._isTransitioning))){var r=e.Event(h.SHOW);if(e(this._element).trigger(r),!r.isDefaultPrevented()){n&&(a._jQueryInterface.call(e(n),"hide"),s||e(n).data(i,null));var o=this._getDimension();e(this._element).removeClass(c.COLLAPSE).addClass(c.COLLAPSING),this._element.style[o]=0,this._element.setAttribute("aria-expanded",!0),this._triggerArray.length&&e(this._triggerArray).removeClass(c.COLLAPSED).attr("aria-expanded",!0),this.setTransitioning(!0);var u=function(){e(t._element).removeClass(c.COLLAPSING).addClass(c.COLLAPSE).addClass(c.IN),t._element.style[o]="",t.setTransitioning(!1),e(t._element).trigger(h.SHOWN)};if(!l["default"].supportsTransitionEnd())return void u();var d=o[0].toUpperCase()+o.slice(1),f="scroll"+d;e(this._element).one(l["default"].TRANSITION_END,u).emulateTransitionEnd(g),this._element.style[o]=this._element[f]+"px"}}}}},{key:"hide",value:function(){var t=this;if(!this._isTransitioning&&e(this._element).hasClass(c.IN)){var n=e.Event(h.HIDE);if(e(this._element).trigger(n),!n.isDefaultPrevented()){var i=this._getDimension(),a=i===_.WIDTH?"offsetWidth":"offsetHeight";this._element.style[i]=this._element[a]+"px",l["default"].reflow(this._element),e(this._element).addClass(c.COLLAPSING).removeClass(c.COLLAPSE).removeClass(c.IN),this._element.setAttribute("aria-expanded",!1),this._triggerArray.length&&e(this._triggerArray).addClass(c.COLLAPSED).attr("aria-expanded",!1),this.setTransitioning(!0);var s=function(){t.setTransitioning(!1),e(t._element).removeClass(c.COLLAPSING).addClass(c.COLLAPSE).trigger(h.HIDDEN)};return this._element.style[i]=0,l["default"].supportsTransitionEnd()?void e(this._element).one(l["default"].TRANSITION_END,s).emulateTransitionEnd(g):void s()}}}},{key:"setTransitioning",value:function(e){this._isTransitioning=e}},{key:"dispose",value:function(){e.removeData(this._element,i),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null}},{key:"_getConfig",value:function(n){return n=e.extend({},d,n),n.toggle=Boolean(n.toggle),l["default"].typeCheckConfig(t,n,f),n}},{key:"_getDimension",value:function(){var t=e(this._element).hasClass(_.WIDTH);return t?_.WIDTH:_.HEIGHT}},{key:"_getParent",value:function(){var t=this,n=e(this._config.parent)[0],i='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]';return e(n).find(i).each(function(e,n){t._addAriaAndCollapsedClass(a._getTargetFromElement(n),[n])}),n}},{key:"_addAriaAndCollapsedClass",value:function(t,n){if(t){var i=e(t).hasClass(c.IN);t.setAttribute("aria-expanded",i),n.length&&e(n).toggleClass(c.COLLAPSED,!i).attr("aria-expanded",i)}}}],[{key:"_getTargetFromElement",value:function(t){var n=l["default"].getSelectorFromElement(t);return n?e(n)[0]:null}},{key:"_jQueryInterface",value:function(t){return this.each(function(){var n=e(this),s=n.data(i),r=e.extend({},d,n.data(),"object"==typeof t&&t);if(!s&&r.toggle&&/show|hide/.test(t)&&(r.toggle=!1),s||(s=new a(this,r),n.data(i,s)),"string"==typeof t){if(void 0===s[t])throw new Error('No method named "'+t+'"');s[t]()}})}},{key:"VERSION",get:function(){return n}},{key:"Default",get:function(){return d}}]),a}();return e(document).on(h.CLICK_DATA_API,p.DATA_TOGGLE,function(t){t.preventDefault();var n=m._getTargetFromElement(this),a=e(n).data(i),s=a?"toggle":e(this).data();m._jQueryInterface.call(e(n),s)}),e.fn[t]=m._jQueryInterface,e.fn[t].Constructor=m,e.fn[t].noConflict=function(){return e.fn[t]=u,m._jQueryInterface},m}(i);t.exports=o})});