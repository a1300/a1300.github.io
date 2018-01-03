webpackJsonp(["styles"],{

/***/ "../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--7-1!../node_modules/postcss-loader/lib/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../../src/styles/css/cssreset.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles/css/cssreset.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--7-1!../../../node_modules/postcss-loader/lib/index.js??postcss!./cssreset.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--7-1!../../../node_modules/postcss-loader/lib/index.js??postcss!./cssreset.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../../src/styles/css/new-age.css":
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles/css/new-age.css");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__("../../../../style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js??ref--7-1!../../../node_modules/postcss-loader/lib/index.js??postcss!./new-age.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js??ref--7-1!../../../node_modules/postcss-loader/lib/index.js??postcss!./new-age.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles/css/cssreset.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/lib/index.js?{\"ident\":\"postcss\",\"sourceMap\":false}!../../../../../src/styles/css/new-age.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html,\nbody {\n  width: 100%;\n  height: 100%; \n}\n\nbody {\n  font-family: 'Muli', 'Helvetica', 'Arial', 'sans-serif'; \n}\n\na {\n  color: #fdcc52;\n  transition: all .35s; }\n  a:hover, a:focus {\n    color: #fcbd20; \n  }\n\n  h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    font-family: 'Catamaran', 'Helvetica', 'Arial', 'sans-serif';\n    font-weight: 200;\n    letter-spacing: 1px;\n}\n\nh1 {\n  font-size: 20px;\n  margin-left: 10px;\n  margin-top: 10px;\n  margin-right: 20px;\n}\n\np {\n  line-height: 1.5;\n  margin-bottom: 20px;\n  margin-left: 20px;\n  margin-top: 10px;\n}\n\nstrong {\n  font-weight: bold;\n  color: #222222;\n}\n\n/*\nhtml,\nbody {\n  width: 100%;\n  height: 100%; \n}\n\nbody {\n  font-family: 'Muli', 'Helvetica', 'Arial', 'sans-serif'; }\n\na {\n  color: #fdcc52;\n  -webkit-transition: all .35s;\n  -moz-transition: all .35s;\n  transition: all .35s; }\n  a:hover, a:focus {\n    color: #fcbd20; }\n\nhr {\n  max-width: 100px;\n  margin: 25px auto 0;\n  border-width: 1px;\n  border-color: rgba(34, 34, 34, 0.1); }\n\nhr.light {\n  border-color: white; }\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: 'Catamaran', 'Helvetica', 'Arial', 'sans-serif';\n  font-weight: 200;\n  letter-spacing: 1px; }\n\np {\n  font-size: 18px;\n  line-height: 1.5;\n  margin-bottom: 20px; }\n\nsection {\n  padding: 100px 0; }\n  section h2 {\n    font-size: 50px; }\n\n#mainNav {\n  border-color: rgba(34, 34, 34, 0.05);\n  background-color: white;\n  -webkit-transition: all .35s;\n  -moz-transition: all .35s;\n  transition: all .35s;\n  font-family: 'Catamaran', 'Helvetica', 'Arial', 'sans-serif';\n  font-weight: 200;\n  letter-spacing: 1px; }\n  #mainNav .navbar-brand {\n    color: #fdcc52;\n    font-family: 'Catamaran', 'Helvetica', 'Arial', 'sans-serif';\n    font-weight: 200;\n    letter-spacing: 1px; }\n    #mainNav .navbar-brand:hover, #mainNav .navbar-brand:focus {\n      color: #fcbd20; }\n  #mainNav .navbar-toggler {\n    font-size: 12px;\n    padding: 8px 10px;\n    color: #222222; }\n  #mainNav .navbar-nav > li > a {\n    font-size: 11px;\n    font-family: 'Lato', 'Helvetica', 'Arial', 'sans-serif';\n    letter-spacing: 2px;\n    text-transform: uppercase; }\n    #mainNav .navbar-nav > li > a.active {\n      color: #fdcc52 !important;\n      background-color: transparent; }\n      #mainNav .navbar-nav > li > a.active:hover {\n        background-color: transparent; }\n  #mainNav .navbar-nav > li > a,\n  #mainNav .navbar-nav > li > a:focus {\n    color: #222222; }\n    #mainNav .navbar-nav > li > a:hover,\n    #mainNav .navbar-nav > li > a:focus:hover {\n      color: #fdcc52; }\n  @media (min-width: 992px) {\n    #mainNav {\n      border-color: transparent;\n      background-color: transparent; }\n      #mainNav .navbar-brand {\n        color: fade(white, 70%); }\n        #mainNav .navbar-brand:hover, #mainNav .navbar-brand:focus {\n          color: white; }\n      #mainNav .navbar-nav > li > a,\n      #mainNav .navbar-nav > li > a:focus {\n        color: rgba(255, 255, 255, 0.7); }\n        #mainNav .navbar-nav > li > a:hover,\n        #mainNav .navbar-nav > li > a:focus:hover {\n          color: white; }\n      #mainNav.navbar-shrink {\n        border-color: rgba(34, 34, 34, 0.1);\n        background-color: white; }\n        #mainNav.navbar-shrink .navbar-brand {\n          color: #222222; }\n          #mainNav.navbar-shrink .navbar-brand:hover, #mainNav.navbar-shrink .navbar-brand:focus {\n            color: #fdcc52; }\n        #mainNav.navbar-shrink .navbar-nav > li > a,\n        #mainNav.navbar-shrink .navbar-nav > li > a:focus {\n          color: #222222; }\n          #mainNav.navbar-shrink .navbar-nav > li > a:hover,\n          #mainNav.navbar-shrink .navbar-nav > li > a:focus:hover {\n            color: #fdcc52; } }\n\nheader.masthead {\n  position: relative;\n  width: 100%;\n  padding-top: 150px;\n  padding-bottom: 100px;\n  color: white;\n  background: url(\"../img/bg-pattern.png\"), #7b4397;\n  background: url(\"../img/bg-pattern.png\"), -webkit-linear-gradient(to left, #7b4397, #dc2430);\n  background: url(\"../img/bg-pattern.png\"), linear-gradient(to left, #7b4397, #dc2430); }\n  header.masthead .header-content {\n    max-width: 500px;\n    margin-bottom: 100px;\n    text-align: center; }\n    header.masthead .header-content h1 {\n      font-size: 30px; }\n  header.masthead .device-container {\n    max-width: 325px;\n    margin-right: auto;\n    margin-left: auto; }\n    header.masthead .device-container .screen img {\n      border-radius: 3px; }\n  @media (min-width: 992px) {\n    header.masthead {\n      height: 100vh;\n      min-height: 775px;\n      padding-top: 0;\n      padding-bottom: 0; }\n      header.masthead .header-content {\n        margin-bottom: 0;\n        text-align: left; }\n        header.masthead .header-content h1 {\n          font-size: 50px; }\n      header.masthead .device-container {\n        max-width: 325px; } }\n\nsection.download {\n  position: relative;\n  padding: 150px 0; }\n  section.download h2 {\n    font-size: 50px;\n    margin-top: 0; }\n  section.download .badges .badge-link {\n    display: block;\n    margin-bottom: 25px; }\n    section.download .badges .badge-link:last-child {\n      margin-bottom: 0; }\n    section.download .badges .badge-link img {\n      height: 60px; }\n    @media (min-width: 768px) {\n      section.download .badges .badge-link {\n        display: inline-block;\n        margin-bottom: 0; } }\n  @media (min-width: 768px) {\n    section.download h2 {\n      font-size: 70px; } }\n\nsection.features .section-heading {\n  margin-bottom: 100px; }\n  section.features .section-heading h2 {\n    margin-top: 0; }\n  section.features .section-heading p {\n    margin-bottom: 0; }\n\nsection.features .device-container,\nsection.features .feature-item {\n  max-width: 325px;\n  margin: 0 auto; }\n\nsection.features .device-container {\n  margin-bottom: 100px; }\n  @media (min-width: 992px) {\n    section.features .device-container {\n      margin-bottom: 0; } }\n\nsection.features .feature-item {\n  padding-top: 50px;\n  padding-bottom: 50px;\n  text-align: center; }\n  section.features .feature-item h3 {\n    font-size: 30px; }\n  section.features .feature-item i {\n    font-size: 80px;\n    display: block;\n    margin-bottom: 15px;\n    background: -webkit-linear-gradient(to left, #7b4397, #dc2430);\n    background: linear-gradient(to left, #7b4397, #dc2430);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent; }\n\nsection.cta {\n  position: relative;\n  padding: 250px 0;\n  background-image: url(\"../img/bg-cta.jpg\");\n  background-position: center;\n  -webkit-background-size: cover;\n  -moz-background-size: cover;\n  -o-background-size: cover;\n  background-size: cover; }\n  section.cta .cta-content {\n    position: relative;\n    z-index: 1; }\n    section.cta .cta-content h2 {\n      font-size: 50px;\n      max-width: 450px;\n      margin-top: 0;\n      margin-bottom: 25px;\n      color: white; }\n    @media (min-width: 768px) {\n      section.cta .cta-content h2 {\n        font-size: 80px; } }\n  section.cta .overlay {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5); }\n\nsection.contact {\n  text-align: center; }\n  section.contact h2 {\n    margin-top: 0;\n    margin-bottom: 25px; }\n    section.contact h2 i {\n      color: #dd4b39; }\n  section.contact ul.list-social {\n    margin-bottom: 0; }\n    section.contact ul.list-social li a {\n      font-size: 40px;\n      line-height: 80px;\n      display: block;\n      width: 80px;\n      height: 80px;\n      color: white;\n      border-radius: 100%; }\n    section.contact ul.list-social li.social-twitter a {\n      background-color: #1da1f2; }\n      section.contact ul.list-social li.social-twitter a:hover {\n        background-color: #0d95e8; }\n    section.contact ul.list-social li.social-facebook a {\n      background-color: #3b5998; }\n      section.contact ul.list-social li.social-facebook a:hover {\n        background-color: #344e86; }\n    section.contact ul.list-social li.social-google-plus a {\n      background-color: #dd4b39; }\n      section.contact ul.list-social li.social-google-plus a:hover {\n        background-color: #d73925; }\n\nfooter {\n  padding: 25px 0;\n  text-align: center;\n  color: rgba(255, 255, 255, 0.3);\n  background-color: #222222; }\n  footer p {\n    font-size: 12px;\n    margin: 0; }\n  footer ul {\n    margin-bottom: 0; }\n    footer ul li a {\n      font-size: 12px;\n      color: rgba(255, 255, 255, 0.3); }\n      footer ul li a:hover, footer ul li a:focus, footer ul li a:active, footer ul li a.active {\n        text-decoration: none; }\n\n.bg-primary {\n  background: #fdcc52;\n  background: -webkit-linear-gradient(#fdcc52, #fdc539);\n  background: linear-gradient(#fdcc52, #fdc539); }\n\n.text-primary {\n  color: #fdcc52; }\n\n.no-gutter > [class*='col-'] {\n  padding-right: 0;\n  padding-left: 0; }\n\n.btn-outline {\n  color: white;\n  border: 1px solid;\n  border-color: white; }\n  .btn-outline:hover, .btn-outline:focus, .btn-outline:active, .btn-outline.active {\n    color: white;\n    border-color: #fdcc52;\n    background-color: #fdcc52; }\n\n.btn {\n  border-radius: 300px;\n  font-family: 'Lato', 'Helvetica', 'Arial', 'sans-serif';\n  letter-spacing: 2px;\n  text-transform: uppercase; }\n\n.btn-xl {\n  font-size: 11px;\n  padding: 15px 45px; } */\n", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/lib/css-base.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "../../../../style-loader/addStyles.js":
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__("../../../../../src/styles.css");
__webpack_require__("../../../../../src/styles/css/cssreset.css");
module.exports = __webpack_require__("../../../../../src/styles/css/new-age.css");


/***/ })

},[4]);
//# sourceMappingURL=styles.bundle.js.map