/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';


	__webpack_require__(2);
	__webpack_require__(6);


	// Reqire index.html so it gets copied to dist
	__webpack_require__(14);


	const App = __webpack_require__(15);
	const mountNode = document.getElementById('main');

	// Third value are initial values for incoming ports
	const app = App.embed(App.Main, mountNode, { getDeleteConfirmation: 0 });

	app.ports.askDeleteConfirmation.subscribe(args => {
		console.log('askDeleteConfirmation', args);
		const id = args[0];
		const message = args[1];
		const response = window.confirm(message);
		if (response) {
			app.ports.getDeleteConfirmation.send(id);
		}
	});

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(3);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./basscss.css", function() {
				var newContent = require("!!./../../css-loader/index.js!./basscss.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "/*! Basscss | http://basscss.com | MIT License */\n\nbody{ margin:0 }\n\nimg{ max-width:100% }\n\nsvg{ max-height:100% }\n\ninput,\nselect,\ntextarea,\nfieldset{\n  font-family: inherit;\n  font-size: 1rem;\n  box-sizing:border-box;\n  margin-top:0;\n  margin-bottom:0;\n}\n\nlabel{\n  vertical-align:middle;\n}\n\ninput[type=text],\ninput[type=date],\ninput[type=datetime],\ninput[type=datetime-local],\ninput[type=email],\ninput[type=month],\ninput[type=number],\ninput[type=password],\ninput[type=search],\ninput[type=tel],\ninput[type=time],\ninput[type=url],\ninput[type=week]{\n  height: 2.25rem;\n  padding: .5rem .5rem;\n  vertical-align:middle;\n  -webkit-appearance:none;\n}\n\nselect{\n  line-height:1.75;\n  padding: .5rem .5rem;\n}\n\nselect:not([multiple]){\n  height: 2.25rem;\n  vertical-align:middle;\n}\n\ntextarea{\n  line-height:1.75;\n  padding: .5rem .5rem;\n}\n\ntable{\n  border-collapse:separate;\n  border-spacing:0;\n  max-width:100%;\n  width:100%;\n}\n\nth{\n  text-align:left;\n  font-weight: bold;\n}\n\nth,\ntd{\n  padding: .25rem 1rem;\n  line-height:inherit;\n}\n\nth{ vertical-align:bottom }\n\ntd{ vertical-align:top }\n\nbody{\n  font-family: 'Helvetica Neue', Helvetica, sans-serif;\n  line-height: 1.5;\n  font-size: 100%;\n}\n\nh1, h2, h3, h4, h5, h6{\n  font-family: 'Helvetica Neue', Helvetica, sans-serif;\n  font-weight: bold;\n  line-height: 1.25;\n  margin-top: 1em;\n  margin-bottom: .5em;\n}\n\np{\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\ndl, ol, ul{\n  margin-top: 0;\n  margin-bottom: 1rem;\n}\n\npre, code, samp{\n  font-family: 'Source Code Pro', Consolas, monospace;\n  font-size: inherit;\n}\n\npre{\n  margin-top: 0;\n  margin-bottom: 1rem;\n  overflow-x:scroll;\n}\n\nh1{ font-size: 2rem }\n\nh2{ font-size: 1.5rem }\n\nh3{ font-size: 1.25rem }\n\nh4{ font-size: 1rem }\n\nh5{ font-size: .875rem }\n\nh6{ font-size: .75rem }\n\nbody{\n  color: #111;\n  background-color: #fff;\n}\n\na{\n  color: #0074d9;\n  text-decoration: none;\n}\n\na:hover{\n  text-decoration: underline;\n}\n\npre, code{\n  background-color: transparent;\n  border-radius: 3px;\n}\n\nhr{\n  border:0;\n  border-bottom-style: solid;\n  border-bottom-width: 1px;\n  border-bottom-color: rgba(0,0,0,.125);\n}\n\n.field{\n  border-style:solid;\n  border-width: 1px;\n  border-color: rgba(0,0,0,.125);\n  border-radius: 3px;\n}\n\n.field:focus,\n.field.is-focused{\n  outline:none;\n  border-color: #0074d9;\n  box-shadow: 0 0 0 2px rgba(0, 116, 217, 0.5);\n}\n\n.field:disabled,\n.field.is-disabled{\n  background-color: rgba(0,0,0,.125);\n  opacity:.5;\n}\n\n.field:-moz-read-only:not(select),\n.field.is-read-only{\n  background-color: rgba(0,0,0,.125);\n}\n\n.field:read-only:not(select),\n.field.is-read-only{\n  background-color: rgba(0,0,0,.125);\n}\n\n.field.is-success{\n  border-color: #2ecc40;\n}\n\n.field.is-success:focus,\n.field.is-success.is-focused{\n  box-shadow: 0 0 0 2px rgba(46, 204, 64, 0.5);\n}\n\n.field.is-warning{\n  border-color: #ffdc00;\n}\n\n.field.is-warning:focus,\n.field.is-warning.is-focused{\n  box-shadow: 0 0 0 2px rgba(255, 220, 0, 0.5);\n}\n\n.field:invalid,\n.field.is-error{\n  border-color: #ff4136;\n}\n\n.field:invalid:focus,\n.field:invalid.is-focused,\n.field.is-error:focus,\n.field.is-error.is-focused{\n  box-shadow: 0 0 0 2px rgba(255, 65, 54, 0.5);\n}\n\n.table-light th,\n.table-light td{\n  border-bottom-width: 1px;\n  border-bottom-style:solid;\n  border-bottom-color: rgba(0,0,0,.125);\n}\n\n.table-light tr:last-child td{\n  border-bottom:0;\n}\n\n.btn{\n  font-family: inherit;\n  font-size: inherit;\n  font-weight: bold;\n  text-decoration:none;\n  cursor:pointer;\n  display:inline-block;\n  line-height: 1.125rem;\n  padding: .5rem 1rem;\n  margin:0;\n  height:auto;\n  border: 1px solid transparent;\n  vertical-align:middle;\n  -webkit-appearance:none;\n  color:inherit;\n  background-color:transparent;\n}\n\n.btn:hover{\n  text-decoration:none;\n}\n\n.btn:focus{\n  outline:none;\n  border-color: rgba(0,0,0,.125);\n  box-shadow: 0 0 0 3px rgba(0,0,0,.25);\n}\n\n::-moz-focus-inner{\n  border:0;\n  padding:0;\n}\n\n.btn-primary{\n  color: #fff;\n  background-color: #0074d9;\n  border-radius: 3px;\n}\n\n.btn-primary:hover{\n  box-shadow: inset 0 0 0 20rem rgba(0,0,0,.0625);\n}\n\n.btn-primary:active{\n  box-shadow: inset 0 0 0 20rem rgba(0,0,0,.125),\n    inset 0 3px 4px 0 rgba(0,0,0,.25),\n    0 0 1px rgba(0,0,0,.125);\n}\n\n.btn-primary:disabled,\n.btn-primary.is-disabled{\n  opacity:.5;\n}\n\n.btn-outline,\n.btn-outline:hover{\n  border-color:currentcolor;\n}\n\n.btn-outline{\n  border-radius: 3px;\n}\n\n.btn-outline:hover{\n  box-shadow: inset 0 0 0 20rem rgba(0,0,0,.0625);\n}\n\n.btn-outline:active{\n  box-shadow: inset 0 0 0 20rem rgba(0,0,0,.125),\n    inset 0 3px 4px 0 rgba(0,0,0,.25),\n    0 0 1px rgba(0,0,0,.125);\n}\n\n.btn-outline:disabled,\n.btn-outline.is-disabled{\n  opacity:.5;\n}\n\n.h1{ font-size: 2rem }\n\n.h2{ font-size: 1.5rem }\n\n.h3{ font-size: 1.25rem }\n\n.h4{ font-size: 1rem }\n\n.h5{ font-size: .875rem }\n\n.h6{ font-size: .75rem }\n\n.font-family-inherit{ font-family:inherit }\n\n.font-size-inherit{ font-size:inherit }\n\n.text-decoration-none{ text-decoration:none }\n\n.bold{ font-weight: bold; font-weight: bold }\n\n.regular{ font-weight:normal }\n\n.italic{ font-style:italic }\n\n.caps{ text-transform:uppercase; letter-spacing: .2em; }\n\n.left-align{ text-align:left }\n\n.center{ text-align:center }\n\n.right-align{ text-align:right }\n\n.justify{ text-align:justify }\n\n.nowrap{ white-space:nowrap }\n\n.break-word{ word-wrap:break-word }\n\n.line-height-1{ line-height: 1 }\n\n.line-height-2{ line-height: 1.125 }\n\n.line-height-3{ line-height: 1.25 }\n\n.line-height-4{ line-height: 1.5 }\n\n.list-style-none{ list-style:none }\n\n.underline{ text-decoration:underline }\n\n.truncate{\n  max-width:100%;\n  overflow:hidden;\n  text-overflow:ellipsis;\n  white-space:nowrap;\n}\n\n.list-reset{\n  list-style:none;\n  padding-left:0;\n}\n\n.inline{ display:inline }\n\n.block{ display:block }\n\n.inline-block{ display:inline-block }\n\n.table{ display:table }\n\n.table-cell{ display:table-cell }\n\n.overflow-hidden{ overflow:hidden }\n\n.overflow-scroll{ overflow:scroll }\n\n.overflow-auto{ overflow:auto }\n\n.clearfix:before,\n.clearfix:after{\n  content:\" \";\n  display:table\n}\n\n.clearfix:after{ clear:both }\n\n.left{ float:left }\n\n.right{ float:right }\n\n.fit{ max-width:100% }\n\n.border-box{ box-sizing:border-box }\n\n.align-baseline{ vertical-align:baseline }\n\n.align-top{ vertical-align:top }\n\n.align-middle{ vertical-align:middle }\n\n.align-bottom{ vertical-align:bottom }\n\n.m0{ margin:0 }\n\n.mt0{ margin-top:0 }\n\n.mr0{ margin-right:0 }\n\n.mb0{ margin-bottom:0 }\n\n.ml0{ margin-left:0 }\n\n.m1{ margin: .5rem }\n\n.mt1{ margin-top: .5rem }\n\n.mr1{ margin-right: .5rem }\n\n.mb1{ margin-bottom: .5rem }\n\n.ml1{ margin-left: .5rem }\n\n.m2{ margin: 1rem }\n\n.mt2{ margin-top: 1rem }\n\n.mr2{ margin-right: 1rem }\n\n.mb2{ margin-bottom: 1rem }\n\n.ml2{ margin-left: 1rem }\n\n.m3{ margin: 2rem }\n\n.mt3{ margin-top: 2rem }\n\n.mr3{ margin-right: 2rem }\n\n.mb3{ margin-bottom: 2rem }\n\n.ml3{ margin-left: 2rem }\n\n.m4{ margin: 4rem }\n\n.mt4{ margin-top: 4rem }\n\n.mr4{ margin-right: 4rem }\n\n.mb4{ margin-bottom: 4rem }\n\n.ml4{ margin-left: 4rem }\n\n.mxn1{ margin-left: -.5rem; margin-right: -.5rem; }\n\n.mxn2{ margin-left: -1rem; margin-right: -1rem; }\n\n.mxn3{ margin-left: -2rem; margin-right: -2rem; }\n\n.mxn4{ margin-left: -4rem; margin-right: -4rem; }\n\n.mx-auto{ margin-left:auto; margin-right:auto; }\n\n.p0{ padding:0 }\n\n.p1{ padding: .5rem }\n\n.py1{ padding-top: .5rem; padding-bottom: .5rem }\n\n.px1{ padding-left: .5rem; padding-right: .5rem }\n\n.p2{ padding: 1rem }\n\n.py2{ padding-top: 1rem; padding-bottom: 1rem }\n\n.px2{ padding-left: 1rem; padding-right: 1rem }\n\n.p3{ padding: 2rem }\n\n.py3{ padding-top: 2rem; padding-bottom: 2rem }\n\n.px3{ padding-left: 2rem; padding-right: 2rem }\n\n.p4{ padding: 4rem }\n\n.py4{ padding-top: 4rem; padding-bottom: 4rem }\n\n.px4{ padding-left: 4rem; padding-right: 4rem }\n\n.relative{ position:relative }\n\n.absolute{ position:absolute }\n\n.fixed{ position:fixed }\n\n.top-0{ top:0 }\n\n.right-0{ right:0 }\n\n.bottom-0{ bottom:0 }\n\n.left-0{ left:0 }\n\n.z1{ z-index: 1 }\n\n.z2{ z-index: 2 }\n\n.z3{ z-index: 3 }\n\n.z4{ z-index: 4 }\n\n.sm-show, .md-show, .lg-show{\n  display:none !important\n}\n\n@media (min-width: 40em){\n  .sm-show{ display:block !important }\n}\n\n@media (min-width: 52em){\n  .md-show{ display:block !important }\n}\n\n@media (min-width: 64em){\n  .lg-show{ display:block !important }\n}\n\n@media (min-width: 40em){\n  .sm-hide{ display:none !important }\n}\n\n@media (min-width: 52em){\n  .md-hide{ display:none !important }\n}\n\n@media (min-width: 64em){\n  .lg-hide{ display:none !important }\n}\n\n.display-none{ display:none !important }\n\n.hide{\n  position:absolute !important;\n  height:1px;\n  width:1px;\n  overflow:hidden;\n  clip:rect(1px, 1px, 1px, 1px);\n}\n\n.container{\n  max-width: 64em;\n  margin-left:auto;\n  margin-right:auto;\n}\n\n.col{\n  float:left;\n  box-sizing:border-box;\n}\n\n.col-right{\n  float:right;\n  box-sizing:border-box;\n}\n\n.col-1{\n  width:8.33333%;\n}\n\n.col-2{\n  width:16.66667%;\n}\n\n.col-3{\n  width:25%;\n}\n\n.col-4{\n  width:33.33333%;\n}\n\n.col-5{\n  width:41.66667%;\n}\n\n.col-6{\n  width:50%;\n}\n\n.col-7{\n  width:58.33333%;\n}\n\n.col-8{\n  width:66.66667%;\n}\n\n.col-9{\n  width:75%;\n}\n\n.col-10{\n  width:83.33333%;\n}\n\n.col-11{\n  width:91.66667%;\n}\n\n.col-12{\n  width:100%;\n}\n\n@media (min-width: 40em){\n\n  .sm-col{\n    float:left;\n    box-sizing:border-box;\n  }\n\n  .sm-col-right{\n    float:right;\n    box-sizing:border-box;\n  }\n\n  .sm-col-1{\n    width:8.33333%;\n  }\n\n  .sm-col-2{\n    width:16.66667%;\n  }\n\n  .sm-col-3{\n    width:25%;\n  }\n\n  .sm-col-4{\n    width:33.33333%;\n  }\n\n  .sm-col-5{\n    width:41.66667%;\n  }\n\n  .sm-col-6{\n    width:50%;\n  }\n\n  .sm-col-7{\n    width:58.33333%;\n  }\n\n  .sm-col-8{\n    width:66.66667%;\n  }\n\n  .sm-col-9{\n    width:75%;\n  }\n\n  .sm-col-10{\n    width:83.33333%;\n  }\n\n  .sm-col-11{\n    width:91.66667%;\n  }\n\n  .sm-col-12{\n    width:100%;\n  }\n\n}\n\n@media (min-width: 52em){\n\n  .md-col{\n    float:left;\n    box-sizing:border-box;\n  }\n\n  .md-col-right{\n    float:right;\n    box-sizing:border-box;\n  }\n\n  .md-col-1{\n    width:8.33333%;\n  }\n\n  .md-col-2{\n    width:16.66667%;\n  }\n\n  .md-col-3{\n    width:25%;\n  }\n\n  .md-col-4{\n    width:33.33333%;\n  }\n\n  .md-col-5{\n    width:41.66667%;\n  }\n\n  .md-col-6{\n    width:50%;\n  }\n\n  .md-col-7{\n    width:58.33333%;\n  }\n\n  .md-col-8{\n    width:66.66667%;\n  }\n\n  .md-col-9{\n    width:75%;\n  }\n\n  .md-col-10{\n    width:83.33333%;\n  }\n\n  .md-col-11{\n    width:91.66667%;\n  }\n\n  .md-col-12{\n    width:100%;\n  }\n\n}\n\n@media (min-width: 64em){\n\n  .lg-col{\n    float:left;\n    box-sizing:border-box;\n  }\n\n  .lg-col-right{\n    float:right;\n    box-sizing:border-box;\n  }\n\n  .lg-col-1{\n    width:8.33333%;\n  }\n\n  .lg-col-2{\n    width:16.66667%;\n  }\n\n  .lg-col-3{\n    width:25%;\n  }\n\n  .lg-col-4{\n    width:33.33333%;\n  }\n\n  .lg-col-5{\n    width:41.66667%;\n  }\n\n  .lg-col-6{\n    width:50%;\n  }\n\n  .lg-col-7{\n    width:58.33333%;\n  }\n\n  .lg-col-8{\n    width:66.66667%;\n  }\n\n  .lg-col-9{\n    width:75%;\n  }\n\n  .lg-col-10{\n    width:83.33333%;\n  }\n\n  .lg-col-11{\n    width:91.66667%;\n  }\n\n  .lg-col-12{\n    width:100%;\n  }\n\n}\n\n.flex{ display:-webkit-box; display:-webkit-flex; display:-ms-flexbox; display:flex }\n\n.flex-column{ -webkit-box-orient:vertical; -webkit-box-direction:normal; -webkit-flex-direction:column; -ms-flex-direction:column; flex-direction:column }\n\n.flex-wrap{ -webkit-flex-wrap:wrap; -ms-flex-wrap:wrap; flex-wrap:wrap }\n\n.flex-center{ -webkit-box-align:center; -webkit-align-items:center; -ms-flex-align:center; align-items:center }\n\n.flex-baseline{ -webkit-box-align:baseline; -webkit-align-items:baseline; -ms-flex-align:baseline; align-items:baseline }\n\n.flex-stretch{ -webkit-box-align:stretch; -webkit-align-items:stretch; -ms-flex-align:stretch; align-items:stretch }\n\n.flex-start{ -webkit-box-align:start; -webkit-align-items:flex-start; -ms-flex-align:start; align-items:flex-start }\n\n.flex-end{ -webkit-box-align:end; -webkit-align-items:flex-end; -ms-flex-align:end; align-items:flex-end }\n\n.flex-justify{ -webkit-box-pack:justify; -webkit-justify-content:space-between; -ms-flex-pack:justify; justify-content:space-between }\n\n.flex-auto{\n  -webkit-box-flex:1;\n  -webkit-flex:1 1 auto;\n      -ms-flex:1 1 auto;\n          flex:1 1 auto;\n  min-width:0;\n  min-height:0;\n}\n\n.flex-grow{ -webkit-box-flex:1; -webkit-flex:1 0 auto; -ms-flex:1 0 auto; flex:1 0 auto }\n\n.flex-none{ -webkit-box-flex:0; -webkit-flex:none; -ms-flex:none; flex:none }\n\n.flex-first{ -webkit-box-ordinal-group:0; -webkit-order:-1; -ms-flex-order:-1; order:-1 }\n\n.flex-last{ -webkit-box-ordinal-group:100000; -webkit-order:99999; -ms-flex-order:99999; order:99999 }\n\n@media (min-width: 40em){\n  .sm-flex{ display:-webkit-box; display:-webkit-flex; display:-ms-flexbox; display:flex }\n}\n\n@media (min-width: 52em){\n  .md-flex{ display:-webkit-box; display:-webkit-flex; display:-ms-flexbox; display:flex }\n}\n\n@media (min-width: 64em){\n  .lg-flex{ display:-webkit-box; display:-webkit-flex; display:-ms-flexbox; display:flex }\n}\n\n.border{\n  border-style:solid;\n  border-width: 1px;\n  border-color: rgba(0,0,0,.125);\n}\n\n.border-top{\n  border-top-style:solid;\n  border-top-width: 1px;\n  border-top-color: rgba(0,0,0,.125);\n}\n\n.border-right{\n  border-right-style:solid;\n  border-right-width: 1px;\n  border-right-color: rgba(0,0,0,.125);\n}\n\n.border-bottom{\n  border-bottom-style:solid;\n  border-bottom-width: 1px;\n  border-bottom-color: rgba(0,0,0,.125);\n}\n\n.border-left{\n  border-left-style:solid;\n  border-left-width: 1px;\n  border-left-color: rgba(0,0,0,.125);\n}\n\n.border-none{ border:0 }\n\n.rounded{ border-radius: 3px }\n\n.circle{ border-radius:50% }\n\n.rounded-top{ border-radius: 3px 3px 0 0 }\n\n.rounded-right{ border-radius: 0 3px 3px 0 }\n\n.rounded-bottom{ border-radius: 0 0 3px 3px }\n\n.rounded-left{ border-radius: 3px 0 0 3px }\n\n.not-rounded{ border-radius:0 }\n\n.black{ color: #111 }\n\n.gray{ color: #aaa }\n\n.silver{ color: #ddd }\n\n.white{ color: #fff }\n\n.aqua{ color: #7fdbff }\n\n.blue{ color: #0074d9 }\n\n.navy{ color: #001f3f }\n\n.teal{ color: #39cccc }\n\n.green{ color: #2ecc40 }\n\n.olive{ color: #3d9970 }\n\n.lime{ color: #01ff70 }\n\n.yellow{ color: #ffdc00 }\n\n.orange{ color: #ff851b }\n\n.red{ color: #ff4136 }\n\n.fuchsia{ color: #f012be }\n\n.purple{ color: #b10dc9 }\n\n.maroon{ color: #85144b }\n\n.color-inherit{ color:inherit }\n\n.muted{ opacity:.5 }\n\n.bg-black{ background-color: #111 }\n\n.bg-gray{ background-color: #aaa }\n\n.bg-silver{ background-color: #ddd }\n\n.bg-white{ background-color: #fff }\n\n.bg-aqua{ background-color: #7fdbff }\n\n.bg-blue{ background-color: #0074d9 }\n\n.bg-navy{ background-color: #001f3f }\n\n.bg-teal{ background-color: #39cccc }\n\n.bg-green{ background-color: #2ecc40 }\n\n.bg-olive{ background-color: #3d9970 }\n\n.bg-lime{ background-color: #01ff70 }\n\n.bg-yellow{ background-color: #ffdc00 }\n\n.bg-orange{ background-color: #ff851b }\n\n.bg-red{ background-color: #ff4136 }\n\n.bg-fuchsia{ background-color: #f012be }\n\n.bg-purple{ background-color: #b10dc9 }\n\n.bg-maroon{ background-color: #85144b }\n\n.bg-darken-1{ background-color: rgba(0,0,0,.0625) }\n\n.bg-darken-2{ background-color: rgba(0,0,0,.125) }\n\n.bg-darken-3{ background-color: rgba(0,0,0,.25) }\n\n.bg-darken-4{ background-color: rgba(0,0,0,.5) }\n\n.bg-lighten-1{ background-color: rgba(255,255,255,.0625) }\n\n.bg-lighten-2{ background-color: rgba(255,255,255,.125) }\n\n.bg-lighten-3{ background-color: rgba(255,255,255,.25) }\n\n.bg-lighten-4{ background-color: rgba(255,255,255,.5) }\n\n:root{\n\n}\n\n", ""]);

	// exports


/***/ },
/* 4 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
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


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

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
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
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
		var sourceMap = obj.sourceMap;

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
		var media = obj.media;
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


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(7);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../css-loader/index.js!./font-awesome.css", function() {
				var newContent = require("!!./../../css-loader/index.js!./font-awesome.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(4)();
	// imports


	// module
	exports.push([module.id, "/*!\n *  Font Awesome 4.5.0 by @davegandy - http://fontawesome.io - @fontawesome\n *  License - http://fontawesome.io/license (Font: SIL OFL 1.1, CSS: MIT License)\n */\n/* FONT PATH\n * -------------------------- */\n@font-face {\n  font-family: 'FontAwesome';\n  src: url(" + __webpack_require__(8) + ");\n  src: url(" + __webpack_require__(9) + "?#iefix&v=4.5.0) format('embedded-opentype'), url(" + __webpack_require__(10) + ") format('woff2'), url(" + __webpack_require__(11) + ") format('woff'), url(" + __webpack_require__(12) + ") format('truetype'), url(" + __webpack_require__(13) + "#fontawesomeregular) format('svg');\n  font-weight: normal;\n  font-style: normal;\n}\n.fa {\n  display: inline-block;\n  font: normal normal normal 14px/1 FontAwesome;\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n/* makes the font 33% larger relative to the icon container */\n.fa-lg {\n  font-size: 1.33333333em;\n  line-height: 0.75em;\n  vertical-align: -15%;\n}\n.fa-2x {\n  font-size: 2em;\n}\n.fa-3x {\n  font-size: 3em;\n}\n.fa-4x {\n  font-size: 4em;\n}\n.fa-5x {\n  font-size: 5em;\n}\n.fa-fw {\n  width: 1.28571429em;\n  text-align: center;\n}\n.fa-ul {\n  padding-left: 0;\n  margin-left: 2.14285714em;\n  list-style-type: none;\n}\n.fa-ul > li {\n  position: relative;\n}\n.fa-li {\n  position: absolute;\n  left: -2.14285714em;\n  width: 2.14285714em;\n  top: 0.14285714em;\n  text-align: center;\n}\n.fa-li.fa-lg {\n  left: -1.85714286em;\n}\n.fa-border {\n  padding: .2em .25em .15em;\n  border: solid 0.08em #eeeeee;\n  border-radius: .1em;\n}\n.fa-pull-left {\n  float: left;\n}\n.fa-pull-right {\n  float: right;\n}\n.fa.fa-pull-left {\n  margin-right: .3em;\n}\n.fa.fa-pull-right {\n  margin-left: .3em;\n}\n/* Deprecated as of 4.4.0 */\n.pull-right {\n  float: right;\n}\n.pull-left {\n  float: left;\n}\n.fa.pull-left {\n  margin-right: .3em;\n}\n.fa.pull-right {\n  margin-left: .3em;\n}\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n  animation: fa-spin 2s infinite linear;\n}\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n  animation: fa-spin 1s infinite steps(8);\n}\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(359deg);\n    transform: rotate(359deg);\n  }\n}\n.fa-rotate-90 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=1);\n  -webkit-transform: rotate(90deg);\n  -ms-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.fa-rotate-180 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);\n  -webkit-transform: rotate(180deg);\n  -ms-transform: rotate(180deg);\n  transform: rotate(180deg);\n}\n.fa-rotate-270 {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);\n  -webkit-transform: rotate(270deg);\n  -ms-transform: rotate(270deg);\n  transform: rotate(270deg);\n}\n.fa-flip-horizontal {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1);\n  -webkit-transform: scale(-1, 1);\n  -ms-transform: scale(-1, 1);\n  transform: scale(-1, 1);\n}\n.fa-flip-vertical {\n  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1);\n  -webkit-transform: scale(1, -1);\n  -ms-transform: scale(1, -1);\n  transform: scale(1, -1);\n}\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical {\n  filter: none;\n}\n.fa-stack {\n  position: relative;\n  display: inline-block;\n  width: 2em;\n  height: 2em;\n  line-height: 2em;\n  vertical-align: middle;\n}\n.fa-stack-1x,\n.fa-stack-2x {\n  position: absolute;\n  left: 0;\n  width: 100%;\n  text-align: center;\n}\n.fa-stack-1x {\n  line-height: inherit;\n}\n.fa-stack-2x {\n  font-size: 2em;\n}\n.fa-inverse {\n  color: #ffffff;\n}\n/* Font Awesome uses the Unicode Private Use Area (PUA) to ensure screen\n   readers do not read off random characters that represent icons */\n.fa-glass:before {\n  content: \"\\F000\";\n}\n.fa-music:before {\n  content: \"\\F001\";\n}\n.fa-search:before {\n  content: \"\\F002\";\n}\n.fa-envelope-o:before {\n  content: \"\\F003\";\n}\n.fa-heart:before {\n  content: \"\\F004\";\n}\n.fa-star:before {\n  content: \"\\F005\";\n}\n.fa-star-o:before {\n  content: \"\\F006\";\n}\n.fa-user:before {\n  content: \"\\F007\";\n}\n.fa-film:before {\n  content: \"\\F008\";\n}\n.fa-th-large:before {\n  content: \"\\F009\";\n}\n.fa-th:before {\n  content: \"\\F00A\";\n}\n.fa-th-list:before {\n  content: \"\\F00B\";\n}\n.fa-check:before {\n  content: \"\\F00C\";\n}\n.fa-remove:before,\n.fa-close:before,\n.fa-times:before {\n  content: \"\\F00D\";\n}\n.fa-search-plus:before {\n  content: \"\\F00E\";\n}\n.fa-search-minus:before {\n  content: \"\\F010\";\n}\n.fa-power-off:before {\n  content: \"\\F011\";\n}\n.fa-signal:before {\n  content: \"\\F012\";\n}\n.fa-gear:before,\n.fa-cog:before {\n  content: \"\\F013\";\n}\n.fa-trash-o:before {\n  content: \"\\F014\";\n}\n.fa-home:before {\n  content: \"\\F015\";\n}\n.fa-file-o:before {\n  content: \"\\F016\";\n}\n.fa-clock-o:before {\n  content: \"\\F017\";\n}\n.fa-road:before {\n  content: \"\\F018\";\n}\n.fa-download:before {\n  content: \"\\F019\";\n}\n.fa-arrow-circle-o-down:before {\n  content: \"\\F01A\";\n}\n.fa-arrow-circle-o-up:before {\n  content: \"\\F01B\";\n}\n.fa-inbox:before {\n  content: \"\\F01C\";\n}\n.fa-play-circle-o:before {\n  content: \"\\F01D\";\n}\n.fa-rotate-right:before,\n.fa-repeat:before {\n  content: \"\\F01E\";\n}\n.fa-refresh:before {\n  content: \"\\F021\";\n}\n.fa-list-alt:before {\n  content: \"\\F022\";\n}\n.fa-lock:before {\n  content: \"\\F023\";\n}\n.fa-flag:before {\n  content: \"\\F024\";\n}\n.fa-headphones:before {\n  content: \"\\F025\";\n}\n.fa-volume-off:before {\n  content: \"\\F026\";\n}\n.fa-volume-down:before {\n  content: \"\\F027\";\n}\n.fa-volume-up:before {\n  content: \"\\F028\";\n}\n.fa-qrcode:before {\n  content: \"\\F029\";\n}\n.fa-barcode:before {\n  content: \"\\F02A\";\n}\n.fa-tag:before {\n  content: \"\\F02B\";\n}\n.fa-tags:before {\n  content: \"\\F02C\";\n}\n.fa-book:before {\n  content: \"\\F02D\";\n}\n.fa-bookmark:before {\n  content: \"\\F02E\";\n}\n.fa-print:before {\n  content: \"\\F02F\";\n}\n.fa-camera:before {\n  content: \"\\F030\";\n}\n.fa-font:before {\n  content: \"\\F031\";\n}\n.fa-bold:before {\n  content: \"\\F032\";\n}\n.fa-italic:before {\n  content: \"\\F033\";\n}\n.fa-text-height:before {\n  content: \"\\F034\";\n}\n.fa-text-width:before {\n  content: \"\\F035\";\n}\n.fa-align-left:before {\n  content: \"\\F036\";\n}\n.fa-align-center:before {\n  content: \"\\F037\";\n}\n.fa-align-right:before {\n  content: \"\\F038\";\n}\n.fa-align-justify:before {\n  content: \"\\F039\";\n}\n.fa-list:before {\n  content: \"\\F03A\";\n}\n.fa-dedent:before,\n.fa-outdent:before {\n  content: \"\\F03B\";\n}\n.fa-indent:before {\n  content: \"\\F03C\";\n}\n.fa-video-camera:before {\n  content: \"\\F03D\";\n}\n.fa-photo:before,\n.fa-image:before,\n.fa-picture-o:before {\n  content: \"\\F03E\";\n}\n.fa-pencil:before {\n  content: \"\\F040\";\n}\n.fa-map-marker:before {\n  content: \"\\F041\";\n}\n.fa-adjust:before {\n  content: \"\\F042\";\n}\n.fa-tint:before {\n  content: \"\\F043\";\n}\n.fa-edit:before,\n.fa-pencil-square-o:before {\n  content: \"\\F044\";\n}\n.fa-share-square-o:before {\n  content: \"\\F045\";\n}\n.fa-check-square-o:before {\n  content: \"\\F046\";\n}\n.fa-arrows:before {\n  content: \"\\F047\";\n}\n.fa-step-backward:before {\n  content: \"\\F048\";\n}\n.fa-fast-backward:before {\n  content: \"\\F049\";\n}\n.fa-backward:before {\n  content: \"\\F04A\";\n}\n.fa-play:before {\n  content: \"\\F04B\";\n}\n.fa-pause:before {\n  content: \"\\F04C\";\n}\n.fa-stop:before {\n  content: \"\\F04D\";\n}\n.fa-forward:before {\n  content: \"\\F04E\";\n}\n.fa-fast-forward:before {\n  content: \"\\F050\";\n}\n.fa-step-forward:before {\n  content: \"\\F051\";\n}\n.fa-eject:before {\n  content: \"\\F052\";\n}\n.fa-chevron-left:before {\n  content: \"\\F053\";\n}\n.fa-chevron-right:before {\n  content: \"\\F054\";\n}\n.fa-plus-circle:before {\n  content: \"\\F055\";\n}\n.fa-minus-circle:before {\n  content: \"\\F056\";\n}\n.fa-times-circle:before {\n  content: \"\\F057\";\n}\n.fa-check-circle:before {\n  content: \"\\F058\";\n}\n.fa-question-circle:before {\n  content: \"\\F059\";\n}\n.fa-info-circle:before {\n  content: \"\\F05A\";\n}\n.fa-crosshairs:before {\n  content: \"\\F05B\";\n}\n.fa-times-circle-o:before {\n  content: \"\\F05C\";\n}\n.fa-check-circle-o:before {\n  content: \"\\F05D\";\n}\n.fa-ban:before {\n  content: \"\\F05E\";\n}\n.fa-arrow-left:before {\n  content: \"\\F060\";\n}\n.fa-arrow-right:before {\n  content: \"\\F061\";\n}\n.fa-arrow-up:before {\n  content: \"\\F062\";\n}\n.fa-arrow-down:before {\n  content: \"\\F063\";\n}\n.fa-mail-forward:before,\n.fa-share:before {\n  content: \"\\F064\";\n}\n.fa-expand:before {\n  content: \"\\F065\";\n}\n.fa-compress:before {\n  content: \"\\F066\";\n}\n.fa-plus:before {\n  content: \"\\F067\";\n}\n.fa-minus:before {\n  content: \"\\F068\";\n}\n.fa-asterisk:before {\n  content: \"\\F069\";\n}\n.fa-exclamation-circle:before {\n  content: \"\\F06A\";\n}\n.fa-gift:before {\n  content: \"\\F06B\";\n}\n.fa-leaf:before {\n  content: \"\\F06C\";\n}\n.fa-fire:before {\n  content: \"\\F06D\";\n}\n.fa-eye:before {\n  content: \"\\F06E\";\n}\n.fa-eye-slash:before {\n  content: \"\\F070\";\n}\n.fa-warning:before,\n.fa-exclamation-triangle:before {\n  content: \"\\F071\";\n}\n.fa-plane:before {\n  content: \"\\F072\";\n}\n.fa-calendar:before {\n  content: \"\\F073\";\n}\n.fa-random:before {\n  content: \"\\F074\";\n}\n.fa-comment:before {\n  content: \"\\F075\";\n}\n.fa-magnet:before {\n  content: \"\\F076\";\n}\n.fa-chevron-up:before {\n  content: \"\\F077\";\n}\n.fa-chevron-down:before {\n  content: \"\\F078\";\n}\n.fa-retweet:before {\n  content: \"\\F079\";\n}\n.fa-shopping-cart:before {\n  content: \"\\F07A\";\n}\n.fa-folder:before {\n  content: \"\\F07B\";\n}\n.fa-folder-open:before {\n  content: \"\\F07C\";\n}\n.fa-arrows-v:before {\n  content: \"\\F07D\";\n}\n.fa-arrows-h:before {\n  content: \"\\F07E\";\n}\n.fa-bar-chart-o:before,\n.fa-bar-chart:before {\n  content: \"\\F080\";\n}\n.fa-twitter-square:before {\n  content: \"\\F081\";\n}\n.fa-facebook-square:before {\n  content: \"\\F082\";\n}\n.fa-camera-retro:before {\n  content: \"\\F083\";\n}\n.fa-key:before {\n  content: \"\\F084\";\n}\n.fa-gears:before,\n.fa-cogs:before {\n  content: \"\\F085\";\n}\n.fa-comments:before {\n  content: \"\\F086\";\n}\n.fa-thumbs-o-up:before {\n  content: \"\\F087\";\n}\n.fa-thumbs-o-down:before {\n  content: \"\\F088\";\n}\n.fa-star-half:before {\n  content: \"\\F089\";\n}\n.fa-heart-o:before {\n  content: \"\\F08A\";\n}\n.fa-sign-out:before {\n  content: \"\\F08B\";\n}\n.fa-linkedin-square:before {\n  content: \"\\F08C\";\n}\n.fa-thumb-tack:before {\n  content: \"\\F08D\";\n}\n.fa-external-link:before {\n  content: \"\\F08E\";\n}\n.fa-sign-in:before {\n  content: \"\\F090\";\n}\n.fa-trophy:before {\n  content: \"\\F091\";\n}\n.fa-github-square:before {\n  content: \"\\F092\";\n}\n.fa-upload:before {\n  content: \"\\F093\";\n}\n.fa-lemon-o:before {\n  content: \"\\F094\";\n}\n.fa-phone:before {\n  content: \"\\F095\";\n}\n.fa-square-o:before {\n  content: \"\\F096\";\n}\n.fa-bookmark-o:before {\n  content: \"\\F097\";\n}\n.fa-phone-square:before {\n  content: \"\\F098\";\n}\n.fa-twitter:before {\n  content: \"\\F099\";\n}\n.fa-facebook-f:before,\n.fa-facebook:before {\n  content: \"\\F09A\";\n}\n.fa-github:before {\n  content: \"\\F09B\";\n}\n.fa-unlock:before {\n  content: \"\\F09C\";\n}\n.fa-credit-card:before {\n  content: \"\\F09D\";\n}\n.fa-feed:before,\n.fa-rss:before {\n  content: \"\\F09E\";\n}\n.fa-hdd-o:before {\n  content: \"\\F0A0\";\n}\n.fa-bullhorn:before {\n  content: \"\\F0A1\";\n}\n.fa-bell:before {\n  content: \"\\F0F3\";\n}\n.fa-certificate:before {\n  content: \"\\F0A3\";\n}\n.fa-hand-o-right:before {\n  content: \"\\F0A4\";\n}\n.fa-hand-o-left:before {\n  content: \"\\F0A5\";\n}\n.fa-hand-o-up:before {\n  content: \"\\F0A6\";\n}\n.fa-hand-o-down:before {\n  content: \"\\F0A7\";\n}\n.fa-arrow-circle-left:before {\n  content: \"\\F0A8\";\n}\n.fa-arrow-circle-right:before {\n  content: \"\\F0A9\";\n}\n.fa-arrow-circle-up:before {\n  content: \"\\F0AA\";\n}\n.fa-arrow-circle-down:before {\n  content: \"\\F0AB\";\n}\n.fa-globe:before {\n  content: \"\\F0AC\";\n}\n.fa-wrench:before {\n  content: \"\\F0AD\";\n}\n.fa-tasks:before {\n  content: \"\\F0AE\";\n}\n.fa-filter:before {\n  content: \"\\F0B0\";\n}\n.fa-briefcase:before {\n  content: \"\\F0B1\";\n}\n.fa-arrows-alt:before {\n  content: \"\\F0B2\";\n}\n.fa-group:before,\n.fa-users:before {\n  content: \"\\F0C0\";\n}\n.fa-chain:before,\n.fa-link:before {\n  content: \"\\F0C1\";\n}\n.fa-cloud:before {\n  content: \"\\F0C2\";\n}\n.fa-flask:before {\n  content: \"\\F0C3\";\n}\n.fa-cut:before,\n.fa-scissors:before {\n  content: \"\\F0C4\";\n}\n.fa-copy:before,\n.fa-files-o:before {\n  content: \"\\F0C5\";\n}\n.fa-paperclip:before {\n  content: \"\\F0C6\";\n}\n.fa-save:before,\n.fa-floppy-o:before {\n  content: \"\\F0C7\";\n}\n.fa-square:before {\n  content: \"\\F0C8\";\n}\n.fa-navicon:before,\n.fa-reorder:before,\n.fa-bars:before {\n  content: \"\\F0C9\";\n}\n.fa-list-ul:before {\n  content: \"\\F0CA\";\n}\n.fa-list-ol:before {\n  content: \"\\F0CB\";\n}\n.fa-strikethrough:before {\n  content: \"\\F0CC\";\n}\n.fa-underline:before {\n  content: \"\\F0CD\";\n}\n.fa-table:before {\n  content: \"\\F0CE\";\n}\n.fa-magic:before {\n  content: \"\\F0D0\";\n}\n.fa-truck:before {\n  content: \"\\F0D1\";\n}\n.fa-pinterest:before {\n  content: \"\\F0D2\";\n}\n.fa-pinterest-square:before {\n  content: \"\\F0D3\";\n}\n.fa-google-plus-square:before {\n  content: \"\\F0D4\";\n}\n.fa-google-plus:before {\n  content: \"\\F0D5\";\n}\n.fa-money:before {\n  content: \"\\F0D6\";\n}\n.fa-caret-down:before {\n  content: \"\\F0D7\";\n}\n.fa-caret-up:before {\n  content: \"\\F0D8\";\n}\n.fa-caret-left:before {\n  content: \"\\F0D9\";\n}\n.fa-caret-right:before {\n  content: \"\\F0DA\";\n}\n.fa-columns:before {\n  content: \"\\F0DB\";\n}\n.fa-unsorted:before,\n.fa-sort:before {\n  content: \"\\F0DC\";\n}\n.fa-sort-down:before,\n.fa-sort-desc:before {\n  content: \"\\F0DD\";\n}\n.fa-sort-up:before,\n.fa-sort-asc:before {\n  content: \"\\F0DE\";\n}\n.fa-envelope:before {\n  content: \"\\F0E0\";\n}\n.fa-linkedin:before {\n  content: \"\\F0E1\";\n}\n.fa-rotate-left:before,\n.fa-undo:before {\n  content: \"\\F0E2\";\n}\n.fa-legal:before,\n.fa-gavel:before {\n  content: \"\\F0E3\";\n}\n.fa-dashboard:before,\n.fa-tachometer:before {\n  content: \"\\F0E4\";\n}\n.fa-comment-o:before {\n  content: \"\\F0E5\";\n}\n.fa-comments-o:before {\n  content: \"\\F0E6\";\n}\n.fa-flash:before,\n.fa-bolt:before {\n  content: \"\\F0E7\";\n}\n.fa-sitemap:before {\n  content: \"\\F0E8\";\n}\n.fa-umbrella:before {\n  content: \"\\F0E9\";\n}\n.fa-paste:before,\n.fa-clipboard:before {\n  content: \"\\F0EA\";\n}\n.fa-lightbulb-o:before {\n  content: \"\\F0EB\";\n}\n.fa-exchange:before {\n  content: \"\\F0EC\";\n}\n.fa-cloud-download:before {\n  content: \"\\F0ED\";\n}\n.fa-cloud-upload:before {\n  content: \"\\F0EE\";\n}\n.fa-user-md:before {\n  content: \"\\F0F0\";\n}\n.fa-stethoscope:before {\n  content: \"\\F0F1\";\n}\n.fa-suitcase:before {\n  content: \"\\F0F2\";\n}\n.fa-bell-o:before {\n  content: \"\\F0A2\";\n}\n.fa-coffee:before {\n  content: \"\\F0F4\";\n}\n.fa-cutlery:before {\n  content: \"\\F0F5\";\n}\n.fa-file-text-o:before {\n  content: \"\\F0F6\";\n}\n.fa-building-o:before {\n  content: \"\\F0F7\";\n}\n.fa-hospital-o:before {\n  content: \"\\F0F8\";\n}\n.fa-ambulance:before {\n  content: \"\\F0F9\";\n}\n.fa-medkit:before {\n  content: \"\\F0FA\";\n}\n.fa-fighter-jet:before {\n  content: \"\\F0FB\";\n}\n.fa-beer:before {\n  content: \"\\F0FC\";\n}\n.fa-h-square:before {\n  content: \"\\F0FD\";\n}\n.fa-plus-square:before {\n  content: \"\\F0FE\";\n}\n.fa-angle-double-left:before {\n  content: \"\\F100\";\n}\n.fa-angle-double-right:before {\n  content: \"\\F101\";\n}\n.fa-angle-double-up:before {\n  content: \"\\F102\";\n}\n.fa-angle-double-down:before {\n  content: \"\\F103\";\n}\n.fa-angle-left:before {\n  content: \"\\F104\";\n}\n.fa-angle-right:before {\n  content: \"\\F105\";\n}\n.fa-angle-up:before {\n  content: \"\\F106\";\n}\n.fa-angle-down:before {\n  content: \"\\F107\";\n}\n.fa-desktop:before {\n  content: \"\\F108\";\n}\n.fa-laptop:before {\n  content: \"\\F109\";\n}\n.fa-tablet:before {\n  content: \"\\F10A\";\n}\n.fa-mobile-phone:before,\n.fa-mobile:before {\n  content: \"\\F10B\";\n}\n.fa-circle-o:before {\n  content: \"\\F10C\";\n}\n.fa-quote-left:before {\n  content: \"\\F10D\";\n}\n.fa-quote-right:before {\n  content: \"\\F10E\";\n}\n.fa-spinner:before {\n  content: \"\\F110\";\n}\n.fa-circle:before {\n  content: \"\\F111\";\n}\n.fa-mail-reply:before,\n.fa-reply:before {\n  content: \"\\F112\";\n}\n.fa-github-alt:before {\n  content: \"\\F113\";\n}\n.fa-folder-o:before {\n  content: \"\\F114\";\n}\n.fa-folder-open-o:before {\n  content: \"\\F115\";\n}\n.fa-smile-o:before {\n  content: \"\\F118\";\n}\n.fa-frown-o:before {\n  content: \"\\F119\";\n}\n.fa-meh-o:before {\n  content: \"\\F11A\";\n}\n.fa-gamepad:before {\n  content: \"\\F11B\";\n}\n.fa-keyboard-o:before {\n  content: \"\\F11C\";\n}\n.fa-flag-o:before {\n  content: \"\\F11D\";\n}\n.fa-flag-checkered:before {\n  content: \"\\F11E\";\n}\n.fa-terminal:before {\n  content: \"\\F120\";\n}\n.fa-code:before {\n  content: \"\\F121\";\n}\n.fa-mail-reply-all:before,\n.fa-reply-all:before {\n  content: \"\\F122\";\n}\n.fa-star-half-empty:before,\n.fa-star-half-full:before,\n.fa-star-half-o:before {\n  content: \"\\F123\";\n}\n.fa-location-arrow:before {\n  content: \"\\F124\";\n}\n.fa-crop:before {\n  content: \"\\F125\";\n}\n.fa-code-fork:before {\n  content: \"\\F126\";\n}\n.fa-unlink:before,\n.fa-chain-broken:before {\n  content: \"\\F127\";\n}\n.fa-question:before {\n  content: \"\\F128\";\n}\n.fa-info:before {\n  content: \"\\F129\";\n}\n.fa-exclamation:before {\n  content: \"\\F12A\";\n}\n.fa-superscript:before {\n  content: \"\\F12B\";\n}\n.fa-subscript:before {\n  content: \"\\F12C\";\n}\n.fa-eraser:before {\n  content: \"\\F12D\";\n}\n.fa-puzzle-piece:before {\n  content: \"\\F12E\";\n}\n.fa-microphone:before {\n  content: \"\\F130\";\n}\n.fa-microphone-slash:before {\n  content: \"\\F131\";\n}\n.fa-shield:before {\n  content: \"\\F132\";\n}\n.fa-calendar-o:before {\n  content: \"\\F133\";\n}\n.fa-fire-extinguisher:before {\n  content: \"\\F134\";\n}\n.fa-rocket:before {\n  content: \"\\F135\";\n}\n.fa-maxcdn:before {\n  content: \"\\F136\";\n}\n.fa-chevron-circle-left:before {\n  content: \"\\F137\";\n}\n.fa-chevron-circle-right:before {\n  content: \"\\F138\";\n}\n.fa-chevron-circle-up:before {\n  content: \"\\F139\";\n}\n.fa-chevron-circle-down:before {\n  content: \"\\F13A\";\n}\n.fa-html5:before {\n  content: \"\\F13B\";\n}\n.fa-css3:before {\n  content: \"\\F13C\";\n}\n.fa-anchor:before {\n  content: \"\\F13D\";\n}\n.fa-unlock-alt:before {\n  content: \"\\F13E\";\n}\n.fa-bullseye:before {\n  content: \"\\F140\";\n}\n.fa-ellipsis-h:before {\n  content: \"\\F141\";\n}\n.fa-ellipsis-v:before {\n  content: \"\\F142\";\n}\n.fa-rss-square:before {\n  content: \"\\F143\";\n}\n.fa-play-circle:before {\n  content: \"\\F144\";\n}\n.fa-ticket:before {\n  content: \"\\F145\";\n}\n.fa-minus-square:before {\n  content: \"\\F146\";\n}\n.fa-minus-square-o:before {\n  content: \"\\F147\";\n}\n.fa-level-up:before {\n  content: \"\\F148\";\n}\n.fa-level-down:before {\n  content: \"\\F149\";\n}\n.fa-check-square:before {\n  content: \"\\F14A\";\n}\n.fa-pencil-square:before {\n  content: \"\\F14B\";\n}\n.fa-external-link-square:before {\n  content: \"\\F14C\";\n}\n.fa-share-square:before {\n  content: \"\\F14D\";\n}\n.fa-compass:before {\n  content: \"\\F14E\";\n}\n.fa-toggle-down:before,\n.fa-caret-square-o-down:before {\n  content: \"\\F150\";\n}\n.fa-toggle-up:before,\n.fa-caret-square-o-up:before {\n  content: \"\\F151\";\n}\n.fa-toggle-right:before,\n.fa-caret-square-o-right:before {\n  content: \"\\F152\";\n}\n.fa-euro:before,\n.fa-eur:before {\n  content: \"\\F153\";\n}\n.fa-gbp:before {\n  content: \"\\F154\";\n}\n.fa-dollar:before,\n.fa-usd:before {\n  content: \"\\F155\";\n}\n.fa-rupee:before,\n.fa-inr:before {\n  content: \"\\F156\";\n}\n.fa-cny:before,\n.fa-rmb:before,\n.fa-yen:before,\n.fa-jpy:before {\n  content: \"\\F157\";\n}\n.fa-ruble:before,\n.fa-rouble:before,\n.fa-rub:before {\n  content: \"\\F158\";\n}\n.fa-won:before,\n.fa-krw:before {\n  content: \"\\F159\";\n}\n.fa-bitcoin:before,\n.fa-btc:before {\n  content: \"\\F15A\";\n}\n.fa-file:before {\n  content: \"\\F15B\";\n}\n.fa-file-text:before {\n  content: \"\\F15C\";\n}\n.fa-sort-alpha-asc:before {\n  content: \"\\F15D\";\n}\n.fa-sort-alpha-desc:before {\n  content: \"\\F15E\";\n}\n.fa-sort-amount-asc:before {\n  content: \"\\F160\";\n}\n.fa-sort-amount-desc:before {\n  content: \"\\F161\";\n}\n.fa-sort-numeric-asc:before {\n  content: \"\\F162\";\n}\n.fa-sort-numeric-desc:before {\n  content: \"\\F163\";\n}\n.fa-thumbs-up:before {\n  content: \"\\F164\";\n}\n.fa-thumbs-down:before {\n  content: \"\\F165\";\n}\n.fa-youtube-square:before {\n  content: \"\\F166\";\n}\n.fa-youtube:before {\n  content: \"\\F167\";\n}\n.fa-xing:before {\n  content: \"\\F168\";\n}\n.fa-xing-square:before {\n  content: \"\\F169\";\n}\n.fa-youtube-play:before {\n  content: \"\\F16A\";\n}\n.fa-dropbox:before {\n  content: \"\\F16B\";\n}\n.fa-stack-overflow:before {\n  content: \"\\F16C\";\n}\n.fa-instagram:before {\n  content: \"\\F16D\";\n}\n.fa-flickr:before {\n  content: \"\\F16E\";\n}\n.fa-adn:before {\n  content: \"\\F170\";\n}\n.fa-bitbucket:before {\n  content: \"\\F171\";\n}\n.fa-bitbucket-square:before {\n  content: \"\\F172\";\n}\n.fa-tumblr:before {\n  content: \"\\F173\";\n}\n.fa-tumblr-square:before {\n  content: \"\\F174\";\n}\n.fa-long-arrow-down:before {\n  content: \"\\F175\";\n}\n.fa-long-arrow-up:before {\n  content: \"\\F176\";\n}\n.fa-long-arrow-left:before {\n  content: \"\\F177\";\n}\n.fa-long-arrow-right:before {\n  content: \"\\F178\";\n}\n.fa-apple:before {\n  content: \"\\F179\";\n}\n.fa-windows:before {\n  content: \"\\F17A\";\n}\n.fa-android:before {\n  content: \"\\F17B\";\n}\n.fa-linux:before {\n  content: \"\\F17C\";\n}\n.fa-dribbble:before {\n  content: \"\\F17D\";\n}\n.fa-skype:before {\n  content: \"\\F17E\";\n}\n.fa-foursquare:before {\n  content: \"\\F180\";\n}\n.fa-trello:before {\n  content: \"\\F181\";\n}\n.fa-female:before {\n  content: \"\\F182\";\n}\n.fa-male:before {\n  content: \"\\F183\";\n}\n.fa-gittip:before,\n.fa-gratipay:before {\n  content: \"\\F184\";\n}\n.fa-sun-o:before {\n  content: \"\\F185\";\n}\n.fa-moon-o:before {\n  content: \"\\F186\";\n}\n.fa-archive:before {\n  content: \"\\F187\";\n}\n.fa-bug:before {\n  content: \"\\F188\";\n}\n.fa-vk:before {\n  content: \"\\F189\";\n}\n.fa-weibo:before {\n  content: \"\\F18A\";\n}\n.fa-renren:before {\n  content: \"\\F18B\";\n}\n.fa-pagelines:before {\n  content: \"\\F18C\";\n}\n.fa-stack-exchange:before {\n  content: \"\\F18D\";\n}\n.fa-arrow-circle-o-right:before {\n  content: \"\\F18E\";\n}\n.fa-arrow-circle-o-left:before {\n  content: \"\\F190\";\n}\n.fa-toggle-left:before,\n.fa-caret-square-o-left:before {\n  content: \"\\F191\";\n}\n.fa-dot-circle-o:before {\n  content: \"\\F192\";\n}\n.fa-wheelchair:before {\n  content: \"\\F193\";\n}\n.fa-vimeo-square:before {\n  content: \"\\F194\";\n}\n.fa-turkish-lira:before,\n.fa-try:before {\n  content: \"\\F195\";\n}\n.fa-plus-square-o:before {\n  content: \"\\F196\";\n}\n.fa-space-shuttle:before {\n  content: \"\\F197\";\n}\n.fa-slack:before {\n  content: \"\\F198\";\n}\n.fa-envelope-square:before {\n  content: \"\\F199\";\n}\n.fa-wordpress:before {\n  content: \"\\F19A\";\n}\n.fa-openid:before {\n  content: \"\\F19B\";\n}\n.fa-institution:before,\n.fa-bank:before,\n.fa-university:before {\n  content: \"\\F19C\";\n}\n.fa-mortar-board:before,\n.fa-graduation-cap:before {\n  content: \"\\F19D\";\n}\n.fa-yahoo:before {\n  content: \"\\F19E\";\n}\n.fa-google:before {\n  content: \"\\F1A0\";\n}\n.fa-reddit:before {\n  content: \"\\F1A1\";\n}\n.fa-reddit-square:before {\n  content: \"\\F1A2\";\n}\n.fa-stumbleupon-circle:before {\n  content: \"\\F1A3\";\n}\n.fa-stumbleupon:before {\n  content: \"\\F1A4\";\n}\n.fa-delicious:before {\n  content: \"\\F1A5\";\n}\n.fa-digg:before {\n  content: \"\\F1A6\";\n}\n.fa-pied-piper:before {\n  content: \"\\F1A7\";\n}\n.fa-pied-piper-alt:before {\n  content: \"\\F1A8\";\n}\n.fa-drupal:before {\n  content: \"\\F1A9\";\n}\n.fa-joomla:before {\n  content: \"\\F1AA\";\n}\n.fa-language:before {\n  content: \"\\F1AB\";\n}\n.fa-fax:before {\n  content: \"\\F1AC\";\n}\n.fa-building:before {\n  content: \"\\F1AD\";\n}\n.fa-child:before {\n  content: \"\\F1AE\";\n}\n.fa-paw:before {\n  content: \"\\F1B0\";\n}\n.fa-spoon:before {\n  content: \"\\F1B1\";\n}\n.fa-cube:before {\n  content: \"\\F1B2\";\n}\n.fa-cubes:before {\n  content: \"\\F1B3\";\n}\n.fa-behance:before {\n  content: \"\\F1B4\";\n}\n.fa-behance-square:before {\n  content: \"\\F1B5\";\n}\n.fa-steam:before {\n  content: \"\\F1B6\";\n}\n.fa-steam-square:before {\n  content: \"\\F1B7\";\n}\n.fa-recycle:before {\n  content: \"\\F1B8\";\n}\n.fa-automobile:before,\n.fa-car:before {\n  content: \"\\F1B9\";\n}\n.fa-cab:before,\n.fa-taxi:before {\n  content: \"\\F1BA\";\n}\n.fa-tree:before {\n  content: \"\\F1BB\";\n}\n.fa-spotify:before {\n  content: \"\\F1BC\";\n}\n.fa-deviantart:before {\n  content: \"\\F1BD\";\n}\n.fa-soundcloud:before {\n  content: \"\\F1BE\";\n}\n.fa-database:before {\n  content: \"\\F1C0\";\n}\n.fa-file-pdf-o:before {\n  content: \"\\F1C1\";\n}\n.fa-file-word-o:before {\n  content: \"\\F1C2\";\n}\n.fa-file-excel-o:before {\n  content: \"\\F1C3\";\n}\n.fa-file-powerpoint-o:before {\n  content: \"\\F1C4\";\n}\n.fa-file-photo-o:before,\n.fa-file-picture-o:before,\n.fa-file-image-o:before {\n  content: \"\\F1C5\";\n}\n.fa-file-zip-o:before,\n.fa-file-archive-o:before {\n  content: \"\\F1C6\";\n}\n.fa-file-sound-o:before,\n.fa-file-audio-o:before {\n  content: \"\\F1C7\";\n}\n.fa-file-movie-o:before,\n.fa-file-video-o:before {\n  content: \"\\F1C8\";\n}\n.fa-file-code-o:before {\n  content: \"\\F1C9\";\n}\n.fa-vine:before {\n  content: \"\\F1CA\";\n}\n.fa-codepen:before {\n  content: \"\\F1CB\";\n}\n.fa-jsfiddle:before {\n  content: \"\\F1CC\";\n}\n.fa-life-bouy:before,\n.fa-life-buoy:before,\n.fa-life-saver:before,\n.fa-support:before,\n.fa-life-ring:before {\n  content: \"\\F1CD\";\n}\n.fa-circle-o-notch:before {\n  content: \"\\F1CE\";\n}\n.fa-ra:before,\n.fa-rebel:before {\n  content: \"\\F1D0\";\n}\n.fa-ge:before,\n.fa-empire:before {\n  content: \"\\F1D1\";\n}\n.fa-git-square:before {\n  content: \"\\F1D2\";\n}\n.fa-git:before {\n  content: \"\\F1D3\";\n}\n.fa-y-combinator-square:before,\n.fa-yc-square:before,\n.fa-hacker-news:before {\n  content: \"\\F1D4\";\n}\n.fa-tencent-weibo:before {\n  content: \"\\F1D5\";\n}\n.fa-qq:before {\n  content: \"\\F1D6\";\n}\n.fa-wechat:before,\n.fa-weixin:before {\n  content: \"\\F1D7\";\n}\n.fa-send:before,\n.fa-paper-plane:before {\n  content: \"\\F1D8\";\n}\n.fa-send-o:before,\n.fa-paper-plane-o:before {\n  content: \"\\F1D9\";\n}\n.fa-history:before {\n  content: \"\\F1DA\";\n}\n.fa-circle-thin:before {\n  content: \"\\F1DB\";\n}\n.fa-header:before {\n  content: \"\\F1DC\";\n}\n.fa-paragraph:before {\n  content: \"\\F1DD\";\n}\n.fa-sliders:before {\n  content: \"\\F1DE\";\n}\n.fa-share-alt:before {\n  content: \"\\F1E0\";\n}\n.fa-share-alt-square:before {\n  content: \"\\F1E1\";\n}\n.fa-bomb:before {\n  content: \"\\F1E2\";\n}\n.fa-soccer-ball-o:before,\n.fa-futbol-o:before {\n  content: \"\\F1E3\";\n}\n.fa-tty:before {\n  content: \"\\F1E4\";\n}\n.fa-binoculars:before {\n  content: \"\\F1E5\";\n}\n.fa-plug:before {\n  content: \"\\F1E6\";\n}\n.fa-slideshare:before {\n  content: \"\\F1E7\";\n}\n.fa-twitch:before {\n  content: \"\\F1E8\";\n}\n.fa-yelp:before {\n  content: \"\\F1E9\";\n}\n.fa-newspaper-o:before {\n  content: \"\\F1EA\";\n}\n.fa-wifi:before {\n  content: \"\\F1EB\";\n}\n.fa-calculator:before {\n  content: \"\\F1EC\";\n}\n.fa-paypal:before {\n  content: \"\\F1ED\";\n}\n.fa-google-wallet:before {\n  content: \"\\F1EE\";\n}\n.fa-cc-visa:before {\n  content: \"\\F1F0\";\n}\n.fa-cc-mastercard:before {\n  content: \"\\F1F1\";\n}\n.fa-cc-discover:before {\n  content: \"\\F1F2\";\n}\n.fa-cc-amex:before {\n  content: \"\\F1F3\";\n}\n.fa-cc-paypal:before {\n  content: \"\\F1F4\";\n}\n.fa-cc-stripe:before {\n  content: \"\\F1F5\";\n}\n.fa-bell-slash:before {\n  content: \"\\F1F6\";\n}\n.fa-bell-slash-o:before {\n  content: \"\\F1F7\";\n}\n.fa-trash:before {\n  content: \"\\F1F8\";\n}\n.fa-copyright:before {\n  content: \"\\F1F9\";\n}\n.fa-at:before {\n  content: \"\\F1FA\";\n}\n.fa-eyedropper:before {\n  content: \"\\F1FB\";\n}\n.fa-paint-brush:before {\n  content: \"\\F1FC\";\n}\n.fa-birthday-cake:before {\n  content: \"\\F1FD\";\n}\n.fa-area-chart:before {\n  content: \"\\F1FE\";\n}\n.fa-pie-chart:before {\n  content: \"\\F200\";\n}\n.fa-line-chart:before {\n  content: \"\\F201\";\n}\n.fa-lastfm:before {\n  content: \"\\F202\";\n}\n.fa-lastfm-square:before {\n  content: \"\\F203\";\n}\n.fa-toggle-off:before {\n  content: \"\\F204\";\n}\n.fa-toggle-on:before {\n  content: \"\\F205\";\n}\n.fa-bicycle:before {\n  content: \"\\F206\";\n}\n.fa-bus:before {\n  content: \"\\F207\";\n}\n.fa-ioxhost:before {\n  content: \"\\F208\";\n}\n.fa-angellist:before {\n  content: \"\\F209\";\n}\n.fa-cc:before {\n  content: \"\\F20A\";\n}\n.fa-shekel:before,\n.fa-sheqel:before,\n.fa-ils:before {\n  content: \"\\F20B\";\n}\n.fa-meanpath:before {\n  content: \"\\F20C\";\n}\n.fa-buysellads:before {\n  content: \"\\F20D\";\n}\n.fa-connectdevelop:before {\n  content: \"\\F20E\";\n}\n.fa-dashcube:before {\n  content: \"\\F210\";\n}\n.fa-forumbee:before {\n  content: \"\\F211\";\n}\n.fa-leanpub:before {\n  content: \"\\F212\";\n}\n.fa-sellsy:before {\n  content: \"\\F213\";\n}\n.fa-shirtsinbulk:before {\n  content: \"\\F214\";\n}\n.fa-simplybuilt:before {\n  content: \"\\F215\";\n}\n.fa-skyatlas:before {\n  content: \"\\F216\";\n}\n.fa-cart-plus:before {\n  content: \"\\F217\";\n}\n.fa-cart-arrow-down:before {\n  content: \"\\F218\";\n}\n.fa-diamond:before {\n  content: \"\\F219\";\n}\n.fa-ship:before {\n  content: \"\\F21A\";\n}\n.fa-user-secret:before {\n  content: \"\\F21B\";\n}\n.fa-motorcycle:before {\n  content: \"\\F21C\";\n}\n.fa-street-view:before {\n  content: \"\\F21D\";\n}\n.fa-heartbeat:before {\n  content: \"\\F21E\";\n}\n.fa-venus:before {\n  content: \"\\F221\";\n}\n.fa-mars:before {\n  content: \"\\F222\";\n}\n.fa-mercury:before {\n  content: \"\\F223\";\n}\n.fa-intersex:before,\n.fa-transgender:before {\n  content: \"\\F224\";\n}\n.fa-transgender-alt:before {\n  content: \"\\F225\";\n}\n.fa-venus-double:before {\n  content: \"\\F226\";\n}\n.fa-mars-double:before {\n  content: \"\\F227\";\n}\n.fa-venus-mars:before {\n  content: \"\\F228\";\n}\n.fa-mars-stroke:before {\n  content: \"\\F229\";\n}\n.fa-mars-stroke-v:before {\n  content: \"\\F22A\";\n}\n.fa-mars-stroke-h:before {\n  content: \"\\F22B\";\n}\n.fa-neuter:before {\n  content: \"\\F22C\";\n}\n.fa-genderless:before {\n  content: \"\\F22D\";\n}\n.fa-facebook-official:before {\n  content: \"\\F230\";\n}\n.fa-pinterest-p:before {\n  content: \"\\F231\";\n}\n.fa-whatsapp:before {\n  content: \"\\F232\";\n}\n.fa-server:before {\n  content: \"\\F233\";\n}\n.fa-user-plus:before {\n  content: \"\\F234\";\n}\n.fa-user-times:before {\n  content: \"\\F235\";\n}\n.fa-hotel:before,\n.fa-bed:before {\n  content: \"\\F236\";\n}\n.fa-viacoin:before {\n  content: \"\\F237\";\n}\n.fa-train:before {\n  content: \"\\F238\";\n}\n.fa-subway:before {\n  content: \"\\F239\";\n}\n.fa-medium:before {\n  content: \"\\F23A\";\n}\n.fa-yc:before,\n.fa-y-combinator:before {\n  content: \"\\F23B\";\n}\n.fa-optin-monster:before {\n  content: \"\\F23C\";\n}\n.fa-opencart:before {\n  content: \"\\F23D\";\n}\n.fa-expeditedssl:before {\n  content: \"\\F23E\";\n}\n.fa-battery-4:before,\n.fa-battery-full:before {\n  content: \"\\F240\";\n}\n.fa-battery-3:before,\n.fa-battery-three-quarters:before {\n  content: \"\\F241\";\n}\n.fa-battery-2:before,\n.fa-battery-half:before {\n  content: \"\\F242\";\n}\n.fa-battery-1:before,\n.fa-battery-quarter:before {\n  content: \"\\F243\";\n}\n.fa-battery-0:before,\n.fa-battery-empty:before {\n  content: \"\\F244\";\n}\n.fa-mouse-pointer:before {\n  content: \"\\F245\";\n}\n.fa-i-cursor:before {\n  content: \"\\F246\";\n}\n.fa-object-group:before {\n  content: \"\\F247\";\n}\n.fa-object-ungroup:before {\n  content: \"\\F248\";\n}\n.fa-sticky-note:before {\n  content: \"\\F249\";\n}\n.fa-sticky-note-o:before {\n  content: \"\\F24A\";\n}\n.fa-cc-jcb:before {\n  content: \"\\F24B\";\n}\n.fa-cc-diners-club:before {\n  content: \"\\F24C\";\n}\n.fa-clone:before {\n  content: \"\\F24D\";\n}\n.fa-balance-scale:before {\n  content: \"\\F24E\";\n}\n.fa-hourglass-o:before {\n  content: \"\\F250\";\n}\n.fa-hourglass-1:before,\n.fa-hourglass-start:before {\n  content: \"\\F251\";\n}\n.fa-hourglass-2:before,\n.fa-hourglass-half:before {\n  content: \"\\F252\";\n}\n.fa-hourglass-3:before,\n.fa-hourglass-end:before {\n  content: \"\\F253\";\n}\n.fa-hourglass:before {\n  content: \"\\F254\";\n}\n.fa-hand-grab-o:before,\n.fa-hand-rock-o:before {\n  content: \"\\F255\";\n}\n.fa-hand-stop-o:before,\n.fa-hand-paper-o:before {\n  content: \"\\F256\";\n}\n.fa-hand-scissors-o:before {\n  content: \"\\F257\";\n}\n.fa-hand-lizard-o:before {\n  content: \"\\F258\";\n}\n.fa-hand-spock-o:before {\n  content: \"\\F259\";\n}\n.fa-hand-pointer-o:before {\n  content: \"\\F25A\";\n}\n.fa-hand-peace-o:before {\n  content: \"\\F25B\";\n}\n.fa-trademark:before {\n  content: \"\\F25C\";\n}\n.fa-registered:before {\n  content: \"\\F25D\";\n}\n.fa-creative-commons:before {\n  content: \"\\F25E\";\n}\n.fa-gg:before {\n  content: \"\\F260\";\n}\n.fa-gg-circle:before {\n  content: \"\\F261\";\n}\n.fa-tripadvisor:before {\n  content: \"\\F262\";\n}\n.fa-odnoklassniki:before {\n  content: \"\\F263\";\n}\n.fa-odnoklassniki-square:before {\n  content: \"\\F264\";\n}\n.fa-get-pocket:before {\n  content: \"\\F265\";\n}\n.fa-wikipedia-w:before {\n  content: \"\\F266\";\n}\n.fa-safari:before {\n  content: \"\\F267\";\n}\n.fa-chrome:before {\n  content: \"\\F268\";\n}\n.fa-firefox:before {\n  content: \"\\F269\";\n}\n.fa-opera:before {\n  content: \"\\F26A\";\n}\n.fa-internet-explorer:before {\n  content: \"\\F26B\";\n}\n.fa-tv:before,\n.fa-television:before {\n  content: \"\\F26C\";\n}\n.fa-contao:before {\n  content: \"\\F26D\";\n}\n.fa-500px:before {\n  content: \"\\F26E\";\n}\n.fa-amazon:before {\n  content: \"\\F270\";\n}\n.fa-calendar-plus-o:before {\n  content: \"\\F271\";\n}\n.fa-calendar-minus-o:before {\n  content: \"\\F272\";\n}\n.fa-calendar-times-o:before {\n  content: \"\\F273\";\n}\n.fa-calendar-check-o:before {\n  content: \"\\F274\";\n}\n.fa-industry:before {\n  content: \"\\F275\";\n}\n.fa-map-pin:before {\n  content: \"\\F276\";\n}\n.fa-map-signs:before {\n  content: \"\\F277\";\n}\n.fa-map-o:before {\n  content: \"\\F278\";\n}\n.fa-map:before {\n  content: \"\\F279\";\n}\n.fa-commenting:before {\n  content: \"\\F27A\";\n}\n.fa-commenting-o:before {\n  content: \"\\F27B\";\n}\n.fa-houzz:before {\n  content: \"\\F27C\";\n}\n.fa-vimeo:before {\n  content: \"\\F27D\";\n}\n.fa-black-tie:before {\n  content: \"\\F27E\";\n}\n.fa-fonticons:before {\n  content: \"\\F280\";\n}\n.fa-reddit-alien:before {\n  content: \"\\F281\";\n}\n.fa-edge:before {\n  content: \"\\F282\";\n}\n.fa-credit-card-alt:before {\n  content: \"\\F283\";\n}\n.fa-codiepie:before {\n  content: \"\\F284\";\n}\n.fa-modx:before {\n  content: \"\\F285\";\n}\n.fa-fort-awesome:before {\n  content: \"\\F286\";\n}\n.fa-usb:before {\n  content: \"\\F287\";\n}\n.fa-product-hunt:before {\n  content: \"\\F288\";\n}\n.fa-mixcloud:before {\n  content: \"\\F289\";\n}\n.fa-scribd:before {\n  content: \"\\F28A\";\n}\n.fa-pause-circle:before {\n  content: \"\\F28B\";\n}\n.fa-pause-circle-o:before {\n  content: \"\\F28C\";\n}\n.fa-stop-circle:before {\n  content: \"\\F28D\";\n}\n.fa-stop-circle-o:before {\n  content: \"\\F28E\";\n}\n.fa-shopping-bag:before {\n  content: \"\\F290\";\n}\n.fa-shopping-basket:before {\n  content: \"\\F291\";\n}\n.fa-hashtag:before {\n  content: \"\\F292\";\n}\n.fa-bluetooth:before {\n  content: \"\\F293\";\n}\n.fa-bluetooth-b:before {\n  content: \"\\F294\";\n}\n.fa-percent:before {\n  content: \"\\F295\";\n}\n", ""]);

	// exports


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "32400f4e08932a94d8bfd2422702c446.eot";

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "32400f4e08932a94d8bfd2422702c446.eot";

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "db812d8a70a4e88e888744c1c9a27e89.woff2";

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "a35720c2fed2c7f043bc7e4ffb45e073.woff";

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "a3de2170e4e9df77161ea5d3f31b2668.ttf";

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f775f9cca88e21d45bebe185b27c0e5b.svg";

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "index.html";

/***/ },
/* 15 */
/***/ function(module, exports) {

	var Elm = Elm || { Native: {} };
	Elm.Native.Basics = {};
	Elm.Native.Basics.make = function(localRuntime) {
		localRuntime.Native = localRuntime.Native || {};
		localRuntime.Native.Basics = localRuntime.Native.Basics || {};
		if (localRuntime.Native.Basics.values)
		{
			return localRuntime.Native.Basics.values;
		}

		var Utils = Elm.Native.Utils.make(localRuntime);

		function div(a, b)
		{
			return (a / b) | 0;
		}
		function rem(a, b)
		{
			return a % b;
		}
		function mod(a, b)
		{
			if (b === 0)
			{
				throw new Error('Cannot perform mod 0. Division by zero error.');
			}
			var r = a % b;
			var m = a === 0 ? 0 : (b > 0 ? (a >= 0 ? r : r + b) : -mod(-a, -b));

			return m === b ? 0 : m;
		}
		function logBase(base, n)
		{
			return Math.log(n) / Math.log(base);
		}
		function negate(n)
		{
			return -n;
		}
		function abs(n)
		{
			return n < 0 ? -n : n;
		}

		function min(a, b)
		{
			return Utils.cmp(a, b) < 0 ? a : b;
		}
		function max(a, b)
		{
			return Utils.cmp(a, b) > 0 ? a : b;
		}
		function clamp(lo, hi, n)
		{
			return Utils.cmp(n, lo) < 0 ? lo : Utils.cmp(n, hi) > 0 ? hi : n;
		}

		function xor(a, b)
		{
			return a !== b;
		}
		function not(b)
		{
			return !b;
		}
		function isInfinite(n)
		{
			return n === Infinity || n === -Infinity;
		}

		function truncate(n)
		{
			return n | 0;
		}

		function degrees(d)
		{
			return d * Math.PI / 180;
		}
		function turns(t)
		{
			return 2 * Math.PI * t;
		}
		function fromPolar(point)
		{
			var r = point._0;
			var t = point._1;
			return Utils.Tuple2(r * Math.cos(t), r * Math.sin(t));
		}
		function toPolar(point)
		{
			var x = point._0;
			var y = point._1;
			return Utils.Tuple2(Math.sqrt(x * x + y * y), Math.atan2(y, x));
		}

		return localRuntime.Native.Basics.values = {
			div: F2(div),
			rem: F2(rem),
			mod: F2(mod),

			pi: Math.PI,
			e: Math.E,
			cos: Math.cos,
			sin: Math.sin,
			tan: Math.tan,
			acos: Math.acos,
			asin: Math.asin,
			atan: Math.atan,
			atan2: F2(Math.atan2),

			degrees: degrees,
			turns: turns,
			fromPolar: fromPolar,
			toPolar: toPolar,

			sqrt: Math.sqrt,
			logBase: F2(logBase),
			negate: negate,
			abs: abs,
			min: F2(min),
			max: F2(max),
			clamp: F3(clamp),
			compare: Utils.compare,

			xor: F2(xor),
			not: not,

			truncate: truncate,
			ceiling: Math.ceil,
			floor: Math.floor,
			round: Math.round,
			toFloat: function(x) { return x; },
			isNaN: isNaN,
			isInfinite: isInfinite
		};
	};

	Elm.Native.Port = {};

	Elm.Native.Port.make = function(localRuntime) {
		localRuntime.Native = localRuntime.Native || {};
		localRuntime.Native.Port = localRuntime.Native.Port || {};
		if (localRuntime.Native.Port.values)
		{
			return localRuntime.Native.Port.values;
		}

		var NS;

		// INBOUND

		function inbound(name, type, converter)
		{
			if (!localRuntime.argsTracker[name])
			{
				throw new Error(
					'Port Error:\n' +
					'No argument was given for the port named \'' + name + '\' with type:\n\n' +
					'    ' + type.split('\n').join('\n        ') + '\n\n' +
					'You need to provide an initial value!\n\n' +
					'Find out more about ports here <http://elm-lang.org/learn/Ports.elm>'
				);
			}
			var arg = localRuntime.argsTracker[name];
			arg.used = true;

			return jsToElm(name, type, converter, arg.value);
		}


		function inboundSignal(name, type, converter)
		{
			var initialValue = inbound(name, type, converter);

			if (!NS)
			{
				NS = Elm.Native.Signal.make(localRuntime);
			}
			var signal = NS.input('inbound-port-' + name, initialValue);

			function send(jsValue)
			{
				var elmValue = jsToElm(name, type, converter, jsValue);
				setTimeout(function() {
					localRuntime.notify(signal.id, elmValue);
				}, 0);
			}

			localRuntime.ports[name] = { send: send };

			return signal;
		}


		function jsToElm(name, type, converter, value)
		{
			try
			{
				return converter(value);
			}
			catch(e)
			{
				throw new Error(
					'Port Error:\n' +
					'Regarding the port named \'' + name + '\' with type:\n\n' +
					'    ' + type.split('\n').join('\n        ') + '\n\n' +
					'You just sent the value:\n\n' +
					'    ' + JSON.stringify(value) + '\n\n' +
					'but it cannot be converted to the necessary type.\n' +
					e.message
				);
			}
		}


		// OUTBOUND

		function outbound(name, converter, elmValue)
		{
			localRuntime.ports[name] = converter(elmValue);
		}


		function outboundSignal(name, converter, signal)
		{
			var subscribers = [];

			function subscribe(handler)
			{
				subscribers.push(handler);
			}
			function unsubscribe(handler)
			{
				subscribers.pop(subscribers.indexOf(handler));
			}

			function notify(elmValue)
			{
				var jsValue = converter(elmValue);
				var len = subscribers.length;
				for (var i = 0; i < len; ++i)
				{
					subscribers[i](jsValue);
				}
			}

			if (!NS)
			{
				NS = Elm.Native.Signal.make(localRuntime);
			}
			NS.output('outbound-port-' + name, notify, signal);

			localRuntime.ports[name] = {
				subscribe: subscribe,
				unsubscribe: unsubscribe
			};

			return signal;
		}


		return localRuntime.Native.Port.values = {
			inbound: inbound,
			outbound: outbound,
			inboundSignal: inboundSignal,
			outboundSignal: outboundSignal
		};
	};

	if (!Elm.fullscreen) {
		(function() {
			'use strict';

			var Display = {
				FULLSCREEN: 0,
				COMPONENT: 1,
				NONE: 2
			};

			Elm.fullscreen = function(module, args)
			{
				var container = document.createElement('div');
				document.body.appendChild(container);
				return init(Display.FULLSCREEN, container, module, args || {});
			};

			Elm.embed = function(module, container, args)
			{
				var tag = container.tagName;
				if (tag !== 'DIV')
				{
					throw new Error('Elm.node must be given a DIV, not a ' + tag + '.');
				}
				return init(Display.COMPONENT, container, module, args || {});
			};

			Elm.worker = function(module, args)
			{
				return init(Display.NONE, {}, module, args || {});
			};

			function init(display, container, module, args, moduleToReplace)
			{
				// defining state needed for an instance of the Elm RTS
				var inputs = [];

				/* OFFSET
				 * Elm's time traveling debugger lets you pause time. This means
				 * "now" may be shifted a bit into the past. By wrapping Date.now()
				 * we can manage this.
				 */
				var timer = {
					programStart: Date.now(),
					now: function()
					{
						return Date.now();
					}
				};

				var updateInProgress = false;
				function notify(id, v)
				{
					if (updateInProgress)
					{
						throw new Error(
							'The notify function has been called synchronously!\n' +
							'This can lead to frames being dropped.\n' +
							'Definitely report this to <https://github.com/elm-lang/Elm/issues>\n');
					}
					updateInProgress = true;
					var timestep = timer.now();
					for (var i = inputs.length; i--; )
					{
						inputs[i].notify(timestep, id, v);
					}
					updateInProgress = false;
				}
				function setTimeout(func, delay)
				{
					return window.setTimeout(func, delay);
				}

				var listeners = [];
				function addListener(relevantInputs, domNode, eventName, func)
				{
					domNode.addEventListener(eventName, func);
					var listener = {
						relevantInputs: relevantInputs,
						domNode: domNode,
						eventName: eventName,
						func: func
					};
					listeners.push(listener);
				}

				var argsTracker = {};
				for (var name in args)
				{
					argsTracker[name] = {
						value: args[name],
						used: false
					};
				}

				// create the actual RTS. Any impure modules will attach themselves to this
				// object. This permits many Elm programs to be embedded per document.
				var elm = {
					notify: notify,
					setTimeout: setTimeout,
					node: container,
					addListener: addListener,
					inputs: inputs,
					timer: timer,
					argsTracker: argsTracker,
					ports: {},

					isFullscreen: function() { return display === Display.FULLSCREEN; },
					isEmbed: function() { return display === Display.COMPONENT; },
					isWorker: function() { return display === Display.NONE; }
				};

				function swap(newModule)
				{
					removeListeners(listeners);
					var div = document.createElement('div');
					var newElm = init(display, div, newModule, args, elm);
					inputs = [];

					return newElm;
				}

				function dispose()
				{
					removeListeners(listeners);
					inputs = [];
				}

				var Module = {};
				try
				{
					Module = module.make(elm);
					checkInputs(elm);
				}
				catch (error)
				{
					if (typeof container.appendChild === "function")
					{
						container.appendChild(errorNode(error.message));
					}
					else
					{
						console.error(error.message);
					}
					throw error;
				}

				if (display !== Display.NONE)
				{
					var graphicsNode = initGraphics(elm, Module);
				}

				var rootNode = { kids: inputs };
				trimDeadNodes(rootNode);
				inputs = rootNode.kids;
				filterListeners(inputs, listeners);

				addReceivers(elm.ports);

				if (typeof moduleToReplace !== 'undefined')
				{
					hotSwap(moduleToReplace, elm);

					// rerender scene if graphics are enabled.
					if (typeof graphicsNode !== 'undefined')
					{
						graphicsNode.notify(0, true, 0);
					}
				}

				return {
					swap: swap,
					ports: elm.ports,
					dispose: dispose
				};
			}

			function checkInputs(elm)
			{
				var argsTracker = elm.argsTracker;
				for (var name in argsTracker)
				{
					if (!argsTracker[name].used)
					{
						throw new Error(
							"Port Error:\nYou provided an argument named '" + name +
							"' but there is no corresponding port!\n\n" +
							"Maybe add a port '" + name + "' to your Elm module?\n" +
							"Maybe remove the '" + name + "' argument from your initialization code in JS?"
						);
					}
				}
			}

			function errorNode(message)
			{
				var code = document.createElement('code');

				var lines = message.split('\n');
				code.appendChild(document.createTextNode(lines[0]));
				code.appendChild(document.createElement('br'));
				code.appendChild(document.createElement('br'));
				for (var i = 1; i < lines.length; ++i)
				{
					code.appendChild(document.createTextNode('\u00A0 \u00A0 ' + lines[i].replace(/  /g, '\u00A0 ')));
					code.appendChild(document.createElement('br'));
				}
				code.appendChild(document.createElement('br'));
				code.appendChild(document.createTextNode('Open the developer console for more details.'));
				return code;
			}


			//// FILTER SIGNALS ////

			// TODO: move this code into the signal module and create a function
			// Signal.initializeGraph that actually instantiates everything.

			function filterListeners(inputs, listeners)
			{
				loop:
				for (var i = listeners.length; i--; )
				{
					var listener = listeners[i];
					for (var j = inputs.length; j--; )
					{
						if (listener.relevantInputs.indexOf(inputs[j].id) >= 0)
						{
							continue loop;
						}
					}
					listener.domNode.removeEventListener(listener.eventName, listener.func);
				}
			}

			function removeListeners(listeners)
			{
				for (var i = listeners.length; i--; )
				{
					var listener = listeners[i];
					listener.domNode.removeEventListener(listener.eventName, listener.func);
				}
			}

			// add receivers for built-in ports if they are defined
			function addReceivers(ports)
			{
				if ('title' in ports)
				{
					if (typeof ports.title === 'string')
					{
						document.title = ports.title;
					}
					else
					{
						ports.title.subscribe(function(v) { document.title = v; });
					}
				}
				if ('redirect' in ports)
				{
					ports.redirect.subscribe(function(v) {
						if (v.length > 0)
						{
							window.location = v;
						}
					});
				}
			}


			// returns a boolean representing whether the node is alive or not.
			function trimDeadNodes(node)
			{
				if (node.isOutput)
				{
					return true;
				}

				var liveKids = [];
				for (var i = node.kids.length; i--; )
				{
					var kid = node.kids[i];
					if (trimDeadNodes(kid))
					{
						liveKids.push(kid);
					}
				}
				node.kids = liveKids;

				return liveKids.length > 0;
			}


			////  RENDERING  ////

			function initGraphics(elm, Module)
			{
				if (!('main' in Module))
				{
					throw new Error("'main' is missing! What do I display?!");
				}

				var signalGraph = Module.main;

				// make sure the signal graph is actually a signal & extract the visual model
				if (!('notify' in signalGraph))
				{
					signalGraph = Elm.Signal.make(elm).constant(signalGraph);
				}
				var initialScene = signalGraph.value;

				// Figure out what the render functions should be
				var render;
				var update;
				if (initialScene.ctor === 'Element_elm_builtin')
				{
					var Element = Elm.Native.Graphics.Element.make(elm);
					render = Element.render;
					update = Element.updateAndReplace;
				}
				else
				{
					var VirtualDom = Elm.Native.VirtualDom.make(elm);
					render = VirtualDom.render;
					update = VirtualDom.updateAndReplace;
				}

				// Add the initialScene to the DOM
				var container = elm.node;
				var node = render(initialScene);
				while (container.firstChild)
				{
					container.removeChild(container.firstChild);
				}
				container.appendChild(node);

				var _requestAnimationFrame =
					typeof requestAnimationFrame !== 'undefined'
						? requestAnimationFrame
						: function(cb) { setTimeout(cb, 1000 / 60); }
						;

				// domUpdate is called whenever the main Signal changes.
				//
				// domUpdate and drawCallback implement a small state machine in order
				// to schedule only 1 draw per animation frame. This enforces that
				// once draw has been called, it will not be called again until the
				// next frame.
				//
				// drawCallback is scheduled whenever
				// 1. The state transitions from PENDING_REQUEST to EXTRA_REQUEST, or
				// 2. The state transitions from NO_REQUEST to PENDING_REQUEST
				//
				// Invariants:
				// 1. In the NO_REQUEST state, there is never a scheduled drawCallback.
				// 2. In the PENDING_REQUEST and EXTRA_REQUEST states, there is always exactly 1
				//    scheduled drawCallback.
				var NO_REQUEST = 0;
				var PENDING_REQUEST = 1;
				var EXTRA_REQUEST = 2;
				var state = NO_REQUEST;
				var savedScene = initialScene;
				var scheduledScene = initialScene;

				function domUpdate(newScene)
				{
					scheduledScene = newScene;

					switch (state)
					{
						case NO_REQUEST:
							_requestAnimationFrame(drawCallback);
							state = PENDING_REQUEST;
							return;
						case PENDING_REQUEST:
							state = PENDING_REQUEST;
							return;
						case EXTRA_REQUEST:
							state = PENDING_REQUEST;
							return;
					}
				}

				function drawCallback()
				{
					switch (state)
					{
						case NO_REQUEST:
							// This state should not be possible. How can there be no
							// request, yet somehow we are actively fulfilling a
							// request?
							throw new Error(
								'Unexpected draw callback.\n' +
								'Please report this to <https://github.com/elm-lang/core/issues>.'
							);

						case PENDING_REQUEST:
							// At this point, we do not *know* that another frame is
							// needed, but we make an extra request to rAF just in
							// case. It's possible to drop a frame if rAF is called
							// too late, so we just do it preemptively.
							_requestAnimationFrame(drawCallback);
							state = EXTRA_REQUEST;

							// There's also stuff we definitely need to draw.
							draw();
							return;

						case EXTRA_REQUEST:
							// Turns out the extra request was not needed, so we will
							// stop calling rAF. No reason to call it all the time if
							// no one needs it.
							state = NO_REQUEST;
							return;
					}
				}

				function draw()
				{
					update(elm.node.firstChild, savedScene, scheduledScene);
					if (elm.Native.Window)
					{
						elm.Native.Window.values.resizeIfNeeded();
					}
					savedScene = scheduledScene;
				}

				var renderer = Elm.Native.Signal.make(elm).output('main', domUpdate, signalGraph);

				// must check for resize after 'renderer' is created so
				// that changes show up.
				if (elm.Native.Window)
				{
					elm.Native.Window.values.resizeIfNeeded();
				}

				return renderer;
			}

			//// HOT SWAPPING ////

			// Returns boolean indicating if the swap was successful.
			// Requires that the two signal graphs have exactly the same
			// structure.
			function hotSwap(from, to)
			{
				function similar(nodeOld, nodeNew)
				{
					if (nodeOld.id !== nodeNew.id)
					{
						return false;
					}
					if (nodeOld.isOutput)
					{
						return nodeNew.isOutput;
					}
					return nodeOld.kids.length === nodeNew.kids.length;
				}
				function swap(nodeOld, nodeNew)
				{
					nodeNew.value = nodeOld.value;
					return true;
				}
				var canSwap = depthFirstTraversals(similar, from.inputs, to.inputs);
				if (canSwap)
				{
					depthFirstTraversals(swap, from.inputs, to.inputs);
				}
				from.node.parentNode.replaceChild(to.node, from.node);

				return canSwap;
			}

			// Returns false if the node operation f ever fails.
			function depthFirstTraversals(f, queueOld, queueNew)
			{
				if (queueOld.length !== queueNew.length)
				{
					return false;
				}
				queueOld = queueOld.slice(0);
				queueNew = queueNew.slice(0);

				var seen = [];
				while (queueOld.length > 0 && queueNew.length > 0)
				{
					var nodeOld = queueOld.pop();
					var nodeNew = queueNew.pop();
					if (seen.indexOf(nodeOld.id) < 0)
					{
						if (!f(nodeOld, nodeNew))
						{
							return false;
						}
						queueOld = queueOld.concat(nodeOld.kids || []);
						queueNew = queueNew.concat(nodeNew.kids || []);
						seen.push(nodeOld.id);
					}
				}
				return true;
			}
		}());

		function F2(fun)
		{
			function wrapper(a) { return function(b) { return fun(a,b); }; }
			wrapper.arity = 2;
			wrapper.func = fun;
			return wrapper;
		}

		function F3(fun)
		{
			function wrapper(a) {
				return function(b) { return function(c) { return fun(a, b, c); }; };
			}
			wrapper.arity = 3;
			wrapper.func = fun;
			return wrapper;
		}

		function F4(fun)
		{
			function wrapper(a) { return function(b) { return function(c) {
				return function(d) { return fun(a, b, c, d); }; }; };
			}
			wrapper.arity = 4;
			wrapper.func = fun;
			return wrapper;
		}

		function F5(fun)
		{
			function wrapper(a) { return function(b) { return function(c) {
				return function(d) { return function(e) { return fun(a, b, c, d, e); }; }; }; };
			}
			wrapper.arity = 5;
			wrapper.func = fun;
			return wrapper;
		}

		function F6(fun)
		{
			function wrapper(a) { return function(b) { return function(c) {
				return function(d) { return function(e) { return function(f) {
				return fun(a, b, c, d, e, f); }; }; }; }; };
			}
			wrapper.arity = 6;
			wrapper.func = fun;
			return wrapper;
		}

		function F7(fun)
		{
			function wrapper(a) { return function(b) { return function(c) {
				return function(d) { return function(e) { return function(f) {
				return function(g) { return fun(a, b, c, d, e, f, g); }; }; }; }; }; };
			}
			wrapper.arity = 7;
			wrapper.func = fun;
			return wrapper;
		}

		function F8(fun)
		{
			function wrapper(a) { return function(b) { return function(c) {
				return function(d) { return function(e) { return function(f) {
				return function(g) { return function(h) {
				return fun(a, b, c, d, e, f, g, h); }; }; }; }; }; }; };
			}
			wrapper.arity = 8;
			wrapper.func = fun;
			return wrapper;
		}

		function F9(fun)
		{
			function wrapper(a) { return function(b) { return function(c) {
				return function(d) { return function(e) { return function(f) {
				return function(g) { return function(h) { return function(i) {
				return fun(a, b, c, d, e, f, g, h, i); }; }; }; }; }; }; }; };
			}
			wrapper.arity = 9;
			wrapper.func = fun;
			return wrapper;
		}

		function A2(fun, a, b)
		{
			return fun.arity === 2
				? fun.func(a, b)
				: fun(a)(b);
		}
		function A3(fun, a, b, c)
		{
			return fun.arity === 3
				? fun.func(a, b, c)
				: fun(a)(b)(c);
		}
		function A4(fun, a, b, c, d)
		{
			return fun.arity === 4
				? fun.func(a, b, c, d)
				: fun(a)(b)(c)(d);
		}
		function A5(fun, a, b, c, d, e)
		{
			return fun.arity === 5
				? fun.func(a, b, c, d, e)
				: fun(a)(b)(c)(d)(e);
		}
		function A6(fun, a, b, c, d, e, f)
		{
			return fun.arity === 6
				? fun.func(a, b, c, d, e, f)
				: fun(a)(b)(c)(d)(e)(f);
		}
		function A7(fun, a, b, c, d, e, f, g)
		{
			return fun.arity === 7
				? fun.func(a, b, c, d, e, f, g)
				: fun(a)(b)(c)(d)(e)(f)(g);
		}
		function A8(fun, a, b, c, d, e, f, g, h)
		{
			return fun.arity === 8
				? fun.func(a, b, c, d, e, f, g, h)
				: fun(a)(b)(c)(d)(e)(f)(g)(h);
		}
		function A9(fun, a, b, c, d, e, f, g, h, i)
		{
			return fun.arity === 9
				? fun.func(a, b, c, d, e, f, g, h, i)
				: fun(a)(b)(c)(d)(e)(f)(g)(h)(i);
		}
	}

	Elm.Native = Elm.Native || {};
	Elm.Native.Utils = {};
	Elm.Native.Utils.make = function(localRuntime) {
		localRuntime.Native = localRuntime.Native || {};
		localRuntime.Native.Utils = localRuntime.Native.Utils || {};
		if (localRuntime.Native.Utils.values)
		{
			return localRuntime.Native.Utils.values;
		}


		// COMPARISONS

		function eq(l, r)
		{
			var stack = [{'x': l, 'y': r}];
			while (stack.length > 0)
			{
				var front = stack.pop();
				var x = front.x;
				var y = front.y;
				if (x === y)
				{
					continue;
				}
				if (typeof x === 'object')
				{
					var c = 0;
					for (var i in x)
					{
						++c;
						if (i in y)
						{
							if (i !== 'ctor')
							{
								stack.push({ 'x': x[i], 'y': y[i] });
							}
						}
						else
						{
							return false;
						}
					}
					if ('ctor' in x)
					{
						stack.push({'x': x.ctor, 'y': y.ctor});
					}
					if (c !== Object.keys(y).length)
					{
						return false;
					}
				}
				else if (typeof x === 'function')
				{
					throw new Error('Equality error: general function equality is ' +
									'undecidable, and therefore, unsupported');
				}
				else
				{
					return false;
				}
			}
			return true;
		}

		// code in Generate/JavaScript.hs depends on the particular
		// integer values assigned to LT, EQ, and GT
		var LT = -1, EQ = 0, GT = 1, ord = ['LT', 'EQ', 'GT'];

		function compare(x, y)
		{
			return {
				ctor: ord[cmp(x, y) + 1]
			};
		}

		function cmp(x, y) {
			var ord;
			if (typeof x !== 'object')
			{
				return x === y ? EQ : x < y ? LT : GT;
			}
			else if (x.isChar)
			{
				var a = x.toString();
				var b = y.toString();
				return a === b
					? EQ
					: a < b
						? LT
						: GT;
			}
			else if (x.ctor === '::' || x.ctor === '[]')
			{
				while (true)
				{
					if (x.ctor === '[]' && y.ctor === '[]')
					{
						return EQ;
					}
					if (x.ctor !== y.ctor)
					{
						return x.ctor === '[]' ? LT : GT;
					}
					ord = cmp(x._0, y._0);
					if (ord !== EQ)
					{
						return ord;
					}
					x = x._1;
					y = y._1;
				}
			}
			else if (x.ctor.slice(0, 6) === '_Tuple')
			{
				var n = x.ctor.slice(6) - 0;
				var err = 'cannot compare tuples with more than 6 elements.';
				if (n === 0) return EQ;
				if (n >= 1) { ord = cmp(x._0, y._0); if (ord !== EQ) return ord;
				if (n >= 2) { ord = cmp(x._1, y._1); if (ord !== EQ) return ord;
				if (n >= 3) { ord = cmp(x._2, y._2); if (ord !== EQ) return ord;
				if (n >= 4) { ord = cmp(x._3, y._3); if (ord !== EQ) return ord;
				if (n >= 5) { ord = cmp(x._4, y._4); if (ord !== EQ) return ord;
				if (n >= 6) { ord = cmp(x._5, y._5); if (ord !== EQ) return ord;
				if (n >= 7) throw new Error('Comparison error: ' + err); } } } } } }
				return EQ;
			}
			else
			{
				throw new Error('Comparison error: comparison is only defined on ints, ' +
								'floats, times, chars, strings, lists of comparable values, ' +
								'and tuples of comparable values.');
			}
		}


		// TUPLES

		var Tuple0 = {
			ctor: '_Tuple0'
		};

		function Tuple2(x, y)
		{
			return {
				ctor: '_Tuple2',
				_0: x,
				_1: y
			};
		}


		// LITERALS

		function chr(c)
		{
			var x = new String(c);
			x.isChar = true;
			return x;
		}

		function txt(str)
		{
			var t = new String(str);
			t.text = true;
			return t;
		}


		// GUID

		var count = 0;
		function guid(_)
		{
			return count++;
		}


		// RECORDS

		function update(oldRecord, updatedFields)
		{
			var newRecord = {};
			for (var key in oldRecord)
			{
				var value = (key in updatedFields) ? updatedFields[key] : oldRecord[key];
				newRecord[key] = value;
			}
			return newRecord;
		}


		// MOUSE COORDINATES

		function getXY(e)
		{
			var posx = 0;
			var posy = 0;
			if (e.pageX || e.pageY)
			{
				posx = e.pageX;
				posy = e.pageY;
			}
			else if (e.clientX || e.clientY)
			{
				posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
				posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
			}

			if (localRuntime.isEmbed())
			{
				var rect = localRuntime.node.getBoundingClientRect();
				var relx = rect.left + document.body.scrollLeft + document.documentElement.scrollLeft;
				var rely = rect.top + document.body.scrollTop + document.documentElement.scrollTop;
				// TODO: figure out if there is a way to avoid rounding here
				posx = posx - Math.round(relx) - localRuntime.node.clientLeft;
				posy = posy - Math.round(rely) - localRuntime.node.clientTop;
			}
			return Tuple2(posx, posy);
		}


		//// LIST STUFF ////

		var Nil = { ctor: '[]' };

		function Cons(hd, tl)
		{
			return {
				ctor: '::',
				_0: hd,
				_1: tl
			};
		}

		function list(arr)
		{
			var out = Nil;
			for (var i = arr.length; i--; )
			{
				out = Cons(arr[i], out);
			}
			return out;
		}

		function range(lo, hi)
		{
			var list = Nil;
			if (lo <= hi)
			{
				do
				{
					list = Cons(hi, list);
				}
				while (hi-- > lo);
			}
			return list;
		}

		function append(xs, ys)
		{
			// append Strings
			if (typeof xs === 'string')
			{
				return xs + ys;
			}

			// append Text
			if (xs.ctor.slice(0, 5) === 'Text:')
			{
				return {
					ctor: 'Text:Append',
					_0: xs,
					_1: ys
				};
			}


			// append Lists
			if (xs.ctor === '[]')
			{
				return ys;
			}
			var root = Cons(xs._0, Nil);
			var curr = root;
			xs = xs._1;
			while (xs.ctor !== '[]')
			{
				curr._1 = Cons(xs._0, Nil);
				xs = xs._1;
				curr = curr._1;
			}
			curr._1 = ys;
			return root;
		}


		// CRASHES

		function crash(moduleName, region)
		{
			return function(message) {
				throw new Error(
					'Ran into a `Debug.crash` in module `' + moduleName + '` ' + regionToString(region) + '\n'
					+ 'The message provided by the code author is:\n\n    '
					+ message
				);
			};
		}

		function crashCase(moduleName, region, value)
		{
			return function(message) {
				throw new Error(
					'Ran into a `Debug.crash` in module `' + moduleName + '`\n\n'
					+ 'This was caused by the `case` expression ' + regionToString(region) + '.\n'
					+ 'One of the branches ended with a crash and the following value got through:\n\n    ' + toString(value) + '\n\n'
					+ 'The message provided by the code author is:\n\n    '
					+ message
				);
			};
		}

		function regionToString(region)
		{
			if (region.start.line == region.end.line)
			{
				return 'on line ' + region.start.line;
			}
			return 'between lines ' + region.start.line + ' and ' + region.end.line;
		}


		// BAD PORTS

		function badPort(expected, received)
		{
			throw new Error(
				'Runtime error when sending values through a port.\n\n'
				+ 'Expecting ' + expected + ' but was given ' + formatValue(received)
			);
		}

		function formatValue(value)
		{
			// Explicity format undefined values as "undefined"
			// because JSON.stringify(undefined) unhelpfully returns ""
			return (value === undefined) ? "undefined" : JSON.stringify(value);
		}


		// TO STRING

		var _Array;
		var Dict;
		var List;

		var toString = function(v)
		{
			var type = typeof v;
			if (type === 'function')
			{
				var name = v.func ? v.func.name : v.name;
				return '<function' + (name === '' ? '' : ': ') + name + '>';
			}
			else if (type === 'boolean')
			{
				return v ? 'True' : 'False';
			}
			else if (type === 'number')
			{
				return v + '';
			}
			else if ((v instanceof String) && v.isChar)
			{
				return '\'' + addSlashes(v, true) + '\'';
			}
			else if (type === 'string')
			{
				return '"' + addSlashes(v, false) + '"';
			}
			else if (type === 'object' && 'ctor' in v)
			{
				if (v.ctor.substring(0, 6) === '_Tuple')
				{
					var output = [];
					for (var k in v)
					{
						if (k === 'ctor') continue;
						output.push(toString(v[k]));
					}
					return '(' + output.join(',') + ')';
				}
				else if (v.ctor === '_Array')
				{
					if (!_Array)
					{
						_Array = Elm.Array.make(localRuntime);
					}
					var list = _Array.toList(v);
					return 'Array.fromList ' + toString(list);
				}
				else if (v.ctor === '::')
				{
					var output = '[' + toString(v._0);
					v = v._1;
					while (v.ctor === '::')
					{
						output += ',' + toString(v._0);
						v = v._1;
					}
					return output + ']';
				}
				else if (v.ctor === '[]')
				{
					return '[]';
				}
				else if (v.ctor === 'RBNode_elm_builtin' || v.ctor === 'RBEmpty_elm_builtin' || v.ctor === 'Set_elm_builtin')
				{
					if (!Dict)
					{
						Dict = Elm.Dict.make(localRuntime);
					}
					var list;
					var name;
					if (v.ctor === 'Set_elm_builtin')
					{
						if (!List)
						{
							List = Elm.List.make(localRuntime);
						}
						name = 'Set';
						list = A2(List.map, function(x) {return x._0; }, Dict.toList(v._0));
					}
					else
					{
						name = 'Dict';
						list = Dict.toList(v);
					}
					return name + '.fromList ' + toString(list);
				}
				else if (v.ctor.slice(0, 5) === 'Text:')
				{
					return '<text>';
				}
				else if (v.ctor === 'Element_elm_builtin')
				{
					return '<element>'
				}
				else if (v.ctor === 'Form_elm_builtin')
				{
					return '<form>'
				}
				else
				{
					var output = '';
					for (var i in v)
					{
						if (i === 'ctor') continue;
						var str = toString(v[i]);
						var parenless = str[0] === '{' || str[0] === '<' || str.indexOf(' ') < 0;
						output += ' ' + (parenless ? str : '(' + str + ')');
					}
					return v.ctor + output;
				}
			}
			else if (type === 'object' && 'notify' in v && 'id' in v)
			{
				return '<signal>';
			}
			else if (type === 'object')
			{
				var output = [];
				for (var k in v)
				{
					output.push(k + ' = ' + toString(v[k]));
				}
				if (output.length === 0)
				{
					return '{}';
				}
				return '{ ' + output.join(', ') + ' }';
			}
			return '<internal structure>';
		};

		function addSlashes(str, isChar)
		{
			var s = str.replace(/\\/g, '\\\\')
					  .replace(/\n/g, '\\n')
					  .replace(/\t/g, '\\t')
					  .replace(/\r/g, '\\r')
					  .replace(/\v/g, '\\v')
					  .replace(/\0/g, '\\0');
			if (isChar)
			{
				return s.replace(/\'/g, '\\\'');
			}
			else
			{
				return s.replace(/\"/g, '\\"');
			}
		}


		return localRuntime.Native.Utils.values = {
			eq: eq,
			cmp: cmp,
			compare: F2(compare),
			Tuple0: Tuple0,
			Tuple2: Tuple2,
			chr: chr,
			txt: txt,
			update: update,
			guid: guid,
			getXY: getXY,

			Nil: Nil,
			Cons: Cons,
			list: list,
			range: range,
			append: F2(append),

			crash: crash,
			crashCase: crashCase,
			badPort: badPort,

			toString: toString
		};
	};

	Elm.Basics = Elm.Basics || {};
	Elm.Basics.make = function (_elm) {
	   "use strict";
	   _elm.Basics = _elm.Basics || {};
	   if (_elm.Basics.values) return _elm.Basics.values;
	   var _U = Elm.Native.Utils.make(_elm),
	   $Native$Basics = Elm.Native.Basics.make(_elm),
	   $Native$Utils = Elm.Native.Utils.make(_elm);
	   var _op = {};
	   var uncurry = F2(function (f,_p0) {
	      var _p1 = _p0;
	      return A2(f,_p1._0,_p1._1);
	   });
	   var curry = F3(function (f,a,b) {
	      return f({ctor: "_Tuple2",_0: a,_1: b});
	   });
	   var flip = F3(function (f,b,a) {    return A2(f,a,b);});
	   var snd = function (_p2) {    var _p3 = _p2;return _p3._1;};
	   var fst = function (_p4) {    var _p5 = _p4;return _p5._0;};
	   var always = F2(function (a,_p6) {    return a;});
	   var identity = function (x) {    return x;};
	   _op["<|"] = F2(function (f,x) {    return f(x);});
	   _op["|>"] = F2(function (x,f) {    return f(x);});
	   _op[">>"] = F3(function (f,g,x) {    return g(f(x));});
	   _op["<<"] = F3(function (g,f,x) {    return g(f(x));});
	   _op["++"] = $Native$Utils.append;
	   var toString = $Native$Utils.toString;
	   var isInfinite = $Native$Basics.isInfinite;
	   var isNaN = $Native$Basics.isNaN;
	   var toFloat = $Native$Basics.toFloat;
	   var ceiling = $Native$Basics.ceiling;
	   var floor = $Native$Basics.floor;
	   var truncate = $Native$Basics.truncate;
	   var round = $Native$Basics.round;
	   var not = $Native$Basics.not;
	   var xor = $Native$Basics.xor;
	   _op["||"] = $Native$Basics.or;
	   _op["&&"] = $Native$Basics.and;
	   var max = $Native$Basics.max;
	   var min = $Native$Basics.min;
	   var GT = {ctor: "GT"};
	   var EQ = {ctor: "EQ"};
	   var LT = {ctor: "LT"};
	   var compare = $Native$Basics.compare;
	   _op[">="] = $Native$Basics.ge;
	   _op["<="] = $Native$Basics.le;
	   _op[">"] = $Native$Basics.gt;
	   _op["<"] = $Native$Basics.lt;
	   _op["/="] = $Native$Basics.neq;
	   _op["=="] = $Native$Basics.eq;
	   var e = $Native$Basics.e;
	   var pi = $Native$Basics.pi;
	   var clamp = $Native$Basics.clamp;
	   var logBase = $Native$Basics.logBase;
	   var abs = $Native$Basics.abs;
	   var negate = $Native$Basics.negate;
	   var sqrt = $Native$Basics.sqrt;
	   var atan2 = $Native$Basics.atan2;
	   var atan = $Native$Basics.atan;
	   var asin = $Native$Basics.asin;
	   var acos = $Native$Basics.acos;
	   var tan = $Native$Basics.tan;
	   var sin = $Native$Basics.sin;
	   var cos = $Native$Basics.cos;
	   _op["^"] = $Native$Basics.exp;
	   _op["%"] = $Native$Basics.mod;
	   var rem = $Native$Basics.rem;
	   _op["//"] = $Native$Basics.div;
	   _op["/"] = $Native$Basics.floatDiv;
	   _op["*"] = $Native$Basics.mul;
	   _op["-"] = $Native$Basics.sub;
	   _op["+"] = $Native$Basics.add;
	   var toPolar = $Native$Basics.toPolar;
	   var fromPolar = $Native$Basics.fromPolar;
	   var turns = $Native$Basics.turns;
	   var degrees = $Native$Basics.degrees;
	   var radians = function (t) {    return t;};
	   return _elm.Basics.values = {_op: _op
	                               ,max: max
	                               ,min: min
	                               ,compare: compare
	                               ,not: not
	                               ,xor: xor
	                               ,rem: rem
	                               ,negate: negate
	                               ,abs: abs
	                               ,sqrt: sqrt
	                               ,clamp: clamp
	                               ,logBase: logBase
	                               ,e: e
	                               ,pi: pi
	                               ,cos: cos
	                               ,sin: sin
	                               ,tan: tan
	                               ,acos: acos
	                               ,asin: asin
	                               ,atan: atan
	                               ,atan2: atan2
	                               ,round: round
	                               ,floor: floor
	                               ,ceiling: ceiling
	                               ,truncate: truncate
	                               ,toFloat: toFloat
	                               ,degrees: degrees
	                               ,radians: radians
	                               ,turns: turns
	                               ,toPolar: toPolar
	                               ,fromPolar: fromPolar
	                               ,isNaN: isNaN
	                               ,isInfinite: isInfinite
	                               ,toString: toString
	                               ,fst: fst
	                               ,snd: snd
	                               ,identity: identity
	                               ,always: always
	                               ,flip: flip
	                               ,curry: curry
	                               ,uncurry: uncurry
	                               ,LT: LT
	                               ,EQ: EQ
	                               ,GT: GT};
	};
	Elm.Maybe = Elm.Maybe || {};
	Elm.Maybe.make = function (_elm) {
	   "use strict";
	   _elm.Maybe = _elm.Maybe || {};
	   if (_elm.Maybe.values) return _elm.Maybe.values;
	   var _U = Elm.Native.Utils.make(_elm);
	   var _op = {};
	   var withDefault = F2(function ($default,maybe) {
	      var _p0 = maybe;
	      if (_p0.ctor === "Just") {
	            return _p0._0;
	         } else {
	            return $default;
	         }
	   });
	   var Nothing = {ctor: "Nothing"};
	   var oneOf = function (maybes) {
	      oneOf: while (true) {
	         var _p1 = maybes;
	         if (_p1.ctor === "[]") {
	               return Nothing;
	            } else {
	               var _p3 = _p1._0;
	               var _p2 = _p3;
	               if (_p2.ctor === "Nothing") {
	                     var _v3 = _p1._1;
	                     maybes = _v3;
	                     continue oneOf;
	                  } else {
	                     return _p3;
	                  }
	            }
	      }
	   };
	   var andThen = F2(function (maybeValue,callback) {
	      var _p4 = maybeValue;
	      if (_p4.ctor === "Just") {
	            return callback(_p4._0);
	         } else {
	            return Nothing;
	         }
	   });
	   var Just = function (a) {    return {ctor: "Just",_0: a};};
	   var map = F2(function (f,maybe) {
	      var _p5 = maybe;
	      if (_p5.ctor === "Just") {
	            return Just(f(_p5._0));
	         } else {
	            return Nothing;
	         }
	   });
	   var map2 = F3(function (func,ma,mb) {
	      var _p6 = {ctor: "_Tuple2",_0: ma,_1: mb};
	      if (_p6.ctor === "_Tuple2" && _p6._0.ctor === "Just" && _p6._1.ctor === "Just")
	      {
	            return Just(A2(func,_p6._0._0,_p6._1._0));
	         } else {
	            return Nothing;
	         }
	   });
	   var map3 = F4(function (func,ma,mb,mc) {
	      var _p7 = {ctor: "_Tuple3",_0: ma,_1: mb,_2: mc};
	      if (_p7.ctor === "_Tuple3" && _p7._0.ctor === "Just" && _p7._1.ctor === "Just" && _p7._2.ctor === "Just")
	      {
	            return Just(A3(func,_p7._0._0,_p7._1._0,_p7._2._0));
	         } else {
	            return Nothing;
	         }
	   });
	   var map4 = F5(function (func,ma,mb,mc,md) {
	      var _p8 = {ctor: "_Tuple4",_0: ma,_1: mb,_2: mc,_3: md};
	      if (_p8.ctor === "_Tuple4" && _p8._0.ctor === "Just" && _p8._1.ctor === "Just" && _p8._2.ctor === "Just" && _p8._3.ctor === "Just")
	      {
	            return Just(A4(func,
	            _p8._0._0,
	            _p8._1._0,
	            _p8._2._0,
	            _p8._3._0));
	         } else {
	            return Nothing;
	         }
	   });
	   var map5 = F6(function (func,ma,mb,mc,md,me) {
	      var _p9 = {ctor: "_Tuple5"
	                ,_0: ma
	                ,_1: mb
	                ,_2: mc
	                ,_3: md
	                ,_4: me};
	      if (_p9.ctor === "_Tuple5" && _p9._0.ctor === "Just" && _p9._1.ctor === "Just" && _p9._2.ctor === "Just" && _p9._3.ctor === "Just" && _p9._4.ctor === "Just")
	      {
	            return Just(A5(func,
	            _p9._0._0,
	            _p9._1._0,
	            _p9._2._0,
	            _p9._3._0,
	            _p9._4._0));
	         } else {
	            return Nothing;
	         }
	   });
	   return _elm.Maybe.values = {_op: _op
	                              ,andThen: andThen
	                              ,map: map
	                              ,map2: map2
	                              ,map3: map3
	                              ,map4: map4
	                              ,map5: map5
	                              ,withDefault: withDefault
	                              ,oneOf: oneOf
	                              ,Just: Just
	                              ,Nothing: Nothing};
	};
	Elm.Native.List = {};
	Elm.Native.List.make = function(localRuntime) {
		localRuntime.Native = localRuntime.Native || {};
		localRuntime.Native.List = localRuntime.Native.List || {};
		if (localRuntime.Native.List.values)
		{
			return localRuntime.Native.List.values;
		}
		if ('values' in Elm.Native.List)
		{
			return localRuntime.Native.List.values = Elm.Native.List.values;
		}

		var Utils = Elm.Native.Utils.make(localRuntime);

		var Nil = Utils.Nil;
		var Cons = Utils.Cons;

		var fromArray = Utils.list;

		function toArray(xs)
		{
			var out = [];
			while (xs.ctor !== '[]')
			{
				out.push(xs._0);
				xs = xs._1;
			}
			return out;
		}

		// f defined similarly for both foldl and foldr (NB: different from Haskell)
		// ie, foldl : (a -> b -> b) -> b -> [a] -> b
		function foldl(f, b, xs)
		{
			var acc = b;
			while (xs.ctor !== '[]')
			{
				acc = A2(f, xs._0, acc);
				xs = xs._1;
			}
			return acc;
		}

		function foldr(f, b, xs)
		{
			var arr = toArray(xs);
			var acc = b;
			for (var i = arr.length; i--; )
			{
				acc = A2(f, arr[i], acc);
			}
			return acc;
		}

		function map2(f, xs, ys)
		{
			var arr = [];
			while (xs.ctor !== '[]' && ys.ctor !== '[]')
			{
				arr.push(A2(f, xs._0, ys._0));
				xs = xs._1;
				ys = ys._1;
			}
			return fromArray(arr);
		}

		function map3(f, xs, ys, zs)
		{
			var arr = [];
			while (xs.ctor !== '[]' && ys.ctor !== '[]' && zs.ctor !== '[]')
			{
				arr.push(A3(f, xs._0, ys._0, zs._0));
				xs = xs._1;
				ys = ys._1;
				zs = zs._1;
			}
			return fromArray(arr);
		}

		function map4(f, ws, xs, ys, zs)
		{
			var arr = [];
			while (   ws.ctor !== '[]'
				   && xs.ctor !== '[]'
				   && ys.ctor !== '[]'
				   && zs.ctor !== '[]')
			{
				arr.push(A4(f, ws._0, xs._0, ys._0, zs._0));
				ws = ws._1;
				xs = xs._1;
				ys = ys._1;
				zs = zs._1;
			}
			return fromArray(arr);
		}

		function map5(f, vs, ws, xs, ys, zs)
		{
			var arr = [];
			while (   vs.ctor !== '[]'
				   && ws.ctor !== '[]'
				   && xs.ctor !== '[]'
				   && ys.ctor !== '[]'
				   && zs.ctor !== '[]')
			{
				arr.push(A5(f, vs._0, ws._0, xs._0, ys._0, zs._0));
				vs = vs._1;
				ws = ws._1;
				xs = xs._1;
				ys = ys._1;
				zs = zs._1;
			}
			return fromArray(arr);
		}

		function sortBy(f, xs)
		{
			return fromArray(toArray(xs).sort(function(a, b) {
				return Utils.cmp(f(a), f(b));
			}));
		}

		function sortWith(f, xs)
		{
			return fromArray(toArray(xs).sort(function(a, b) {
				var ord = f(a)(b).ctor;
				return ord === 'EQ' ? 0 : ord === 'LT' ? -1 : 1;
			}));
		}

		function take(n, xs)
		{
			var arr = [];
			while (xs.ctor !== '[]' && n > 0)
			{
				arr.push(xs._0);
				xs = xs._1;
				--n;
			}
			return fromArray(arr);
		}


		Elm.Native.List.values = {
			Nil: Nil,
			Cons: Cons,
			cons: F2(Cons),
			toArray: toArray,
			fromArray: fromArray,

			foldl: F3(foldl),
			foldr: F3(foldr),

			map2: F3(map2),
			map3: F4(map3),
			map4: F5(map4),
			map5: F6(map5),
			sortBy: F2(sortBy),
			sortWith: F2(sortWith),
			take: F2(take)
		};
		return localRuntime.Native.List.values = Elm.Native.List.values;
	};

	Elm.List = Elm.List || {};
	Elm.List.make = function (_elm) {
	   "use strict";
	   _elm.List = _elm.List || {};
	   if (_elm.List.values) return _elm.List.values;
	   var _U = Elm.Native.Utils.make(_elm),
	   $Basics = Elm.Basics.make(_elm),
	   $Maybe = Elm.Maybe.make(_elm),
	   $Native$List = Elm.Native.List.make(_elm);
	   var _op = {};
	   var sortWith = $Native$List.sortWith;
	   var sortBy = $Native$List.sortBy;
	   var sort = function (xs) {
	      return A2(sortBy,$Basics.identity,xs);
	   };
	   var drop = F2(function (n,list) {
	      drop: while (true) if (_U.cmp(n,0) < 1) return list; else {
	            var _p0 = list;
	            if (_p0.ctor === "[]") {
	                  return list;
	               } else {
	                  var _v1 = n - 1,_v2 = _p0._1;
	                  n = _v1;
	                  list = _v2;
	                  continue drop;
	               }
	         }
	   });
	   var take = $Native$List.take;
	   var map5 = $Native$List.map5;
	   var map4 = $Native$List.map4;
	   var map3 = $Native$List.map3;
	   var map2 = $Native$List.map2;
	   var any = F2(function (isOkay,list) {
	      any: while (true) {
	         var _p1 = list;
	         if (_p1.ctor === "[]") {
	               return false;
	            } else {
	               if (isOkay(_p1._0)) return true; else {
	                     var _v4 = isOkay,_v5 = _p1._1;
	                     isOkay = _v4;
	                     list = _v5;
	                     continue any;
	                  }
	            }
	      }
	   });
	   var all = F2(function (isOkay,list) {
	      return $Basics.not(A2(any,
	      function (_p2) {
	         return $Basics.not(isOkay(_p2));
	      },
	      list));
	   });
	   var foldr = $Native$List.foldr;
	   var foldl = $Native$List.foldl;
	   var length = function (xs) {
	      return A3(foldl,
	      F2(function (_p3,i) {    return i + 1;}),
	      0,
	      xs);
	   };
	   var sum = function (numbers) {
	      return A3(foldl,
	      F2(function (x,y) {    return x + y;}),
	      0,
	      numbers);
	   };
	   var product = function (numbers) {
	      return A3(foldl,
	      F2(function (x,y) {    return x * y;}),
	      1,
	      numbers);
	   };
	   var maximum = function (list) {
	      var _p4 = list;
	      if (_p4.ctor === "::") {
	            return $Maybe.Just(A3(foldl,$Basics.max,_p4._0,_p4._1));
	         } else {
	            return $Maybe.Nothing;
	         }
	   };
	   var minimum = function (list) {
	      var _p5 = list;
	      if (_p5.ctor === "::") {
	            return $Maybe.Just(A3(foldl,$Basics.min,_p5._0,_p5._1));
	         } else {
	            return $Maybe.Nothing;
	         }
	   };
	   var indexedMap = F2(function (f,xs) {
	      return A3(map2,f,_U.range(0,length(xs) - 1),xs);
	   });
	   var member = F2(function (x,xs) {
	      return A2(any,function (a) {    return _U.eq(a,x);},xs);
	   });
	   var isEmpty = function (xs) {
	      var _p6 = xs;
	      if (_p6.ctor === "[]") {
	            return true;
	         } else {
	            return false;
	         }
	   };
	   var tail = function (list) {
	      var _p7 = list;
	      if (_p7.ctor === "::") {
	            return $Maybe.Just(_p7._1);
	         } else {
	            return $Maybe.Nothing;
	         }
	   };
	   var head = function (list) {
	      var _p8 = list;
	      if (_p8.ctor === "::") {
	            return $Maybe.Just(_p8._0);
	         } else {
	            return $Maybe.Nothing;
	         }
	   };
	   _op["::"] = $Native$List.cons;
	   var map = F2(function (f,xs) {
	      return A3(foldr,
	      F2(function (x,acc) {    return A2(_op["::"],f(x),acc);}),
	      _U.list([]),
	      xs);
	   });
	   var filter = F2(function (pred,xs) {
	      var conditionalCons = F2(function (x,xs$) {
	         return pred(x) ? A2(_op["::"],x,xs$) : xs$;
	      });
	      return A3(foldr,conditionalCons,_U.list([]),xs);
	   });
	   var maybeCons = F3(function (f,mx,xs) {
	      var _p9 = f(mx);
	      if (_p9.ctor === "Just") {
	            return A2(_op["::"],_p9._0,xs);
	         } else {
	            return xs;
	         }
	   });
	   var filterMap = F2(function (f,xs) {
	      return A3(foldr,maybeCons(f),_U.list([]),xs);
	   });
	   var reverse = function (list) {
	      return A3(foldl,
	      F2(function (x,y) {    return A2(_op["::"],x,y);}),
	      _U.list([]),
	      list);
	   };
	   var scanl = F3(function (f,b,xs) {
	      var scan1 = F2(function (x,accAcc) {
	         var _p10 = accAcc;
	         if (_p10.ctor === "::") {
	               return A2(_op["::"],A2(f,x,_p10._0),accAcc);
	            } else {
	               return _U.list([]);
	            }
	      });
	      return reverse(A3(foldl,scan1,_U.list([b]),xs));
	   });
	   var append = F2(function (xs,ys) {
	      var _p11 = ys;
	      if (_p11.ctor === "[]") {
	            return xs;
	         } else {
	            return A3(foldr,
	            F2(function (x,y) {    return A2(_op["::"],x,y);}),
	            ys,
	            xs);
	         }
	   });
	   var concat = function (lists) {
	      return A3(foldr,append,_U.list([]),lists);
	   };
	   var concatMap = F2(function (f,list) {
	      return concat(A2(map,f,list));
	   });
	   var partition = F2(function (pred,list) {
	      var step = F2(function (x,_p12) {
	         var _p13 = _p12;
	         var _p15 = _p13._0;
	         var _p14 = _p13._1;
	         return pred(x) ? {ctor: "_Tuple2"
	                          ,_0: A2(_op["::"],x,_p15)
	                          ,_1: _p14} : {ctor: "_Tuple2"
	                                       ,_0: _p15
	                                       ,_1: A2(_op["::"],x,_p14)};
	      });
	      return A3(foldr,
	      step,
	      {ctor: "_Tuple2",_0: _U.list([]),_1: _U.list([])},
	      list);
	   });
	   var unzip = function (pairs) {
	      var step = F2(function (_p17,_p16) {
	         var _p18 = _p17;
	         var _p19 = _p16;
	         return {ctor: "_Tuple2"
	                ,_0: A2(_op["::"],_p18._0,_p19._0)
	                ,_1: A2(_op["::"],_p18._1,_p19._1)};
	      });
	      return A3(foldr,
	      step,
	      {ctor: "_Tuple2",_0: _U.list([]),_1: _U.list([])},
	      pairs);
	   };
	   var intersperse = F2(function (sep,xs) {
	      var _p20 = xs;
	      if (_p20.ctor === "[]") {
	            return _U.list([]);
	         } else {
	            var step = F2(function (x,rest) {
	               return A2(_op["::"],sep,A2(_op["::"],x,rest));
	            });
	            var spersed = A3(foldr,step,_U.list([]),_p20._1);
	            return A2(_op["::"],_p20._0,spersed);
	         }
	   });
	   var repeatHelp = F3(function (result,n,value) {
	      repeatHelp: while (true) if (_U.cmp(n,0) < 1) return result;
	      else {
	            var _v18 = A2(_op["::"],value,result),
	            _v19 = n - 1,
	            _v20 = value;
	            result = _v18;
	            n = _v19;
	            value = _v20;
	            continue repeatHelp;
	         }
	   });
	   var repeat = F2(function (n,value) {
	      return A3(repeatHelp,_U.list([]),n,value);
	   });
	   return _elm.List.values = {_op: _op
	                             ,isEmpty: isEmpty
	                             ,length: length
	                             ,reverse: reverse
	                             ,member: member
	                             ,head: head
	                             ,tail: tail
	                             ,filter: filter
	                             ,take: take
	                             ,drop: drop
	                             ,repeat: repeat
	                             ,append: append
	                             ,concat: concat
	                             ,intersperse: intersperse
	                             ,partition: partition
	                             ,unzip: unzip
	                             ,map: map
	                             ,map2: map2
	                             ,map3: map3
	                             ,map4: map4
	                             ,map5: map5
	                             ,filterMap: filterMap
	                             ,concatMap: concatMap
	                             ,indexedMap: indexedMap
	                             ,foldr: foldr
	                             ,foldl: foldl
	                             ,sum: sum
	                             ,product: product
	                             ,maximum: maximum
	                             ,minimum: minimum
	                             ,all: all
	                             ,any: any
	                             ,scanl: scanl
	                             ,sort: sort
	                             ,sortBy: sortBy
	                             ,sortWith: sortWith};
	};
	Elm.Native.Transform2D = {};
	Elm.Native.Transform2D.make = function(localRuntime) {
		localRuntime.Native = localRuntime.Native || {};
		localRuntime.Native.Transform2D = localRuntime.Native.Transform2D || {};
		if (localRuntime.Native.Transform2D.values)
		{
			return localRuntime.Native.Transform2D.values;
		}

		var A;
		if (typeof Float32Array === 'undefined')
		{
			A = function(arr)
			{
				this.length = arr.length;
				this[0] = arr[0];
				this[1] = arr[1];
				this[2] = arr[2];
				this[3] = arr[3];
				this[4] = arr[4];
				this[5] = arr[5];
			};
		}
		else
		{
			A = Float32Array;
		}

		// layout of matrix in an array is
		//
		//   | m11 m12 dx |
		//   | m21 m22 dy |
		//   |  0   0   1 |
		//
		//  new A([ m11, m12, dx, m21, m22, dy ])

		var identity = new A([1, 0, 0, 0, 1, 0]);
		function matrix(m11, m12, m21, m22, dx, dy)
		{
			return new A([m11, m12, dx, m21, m22, dy]);
		}

		function rotation(t)
		{
			var c = Math.cos(t);
			var s = Math.sin(t);
			return new A([c, -s, 0, s, c, 0]);
		}

		function rotate(t, m)
		{
			var c = Math.cos(t);
			var s = Math.sin(t);
			var m11 = m[0], m12 = m[1], m21 = m[3], m22 = m[4];
			return new A([m11 * c + m12 * s, -m11 * s + m12 * c, m[2],
						  m21 * c + m22 * s, -m21 * s + m22 * c, m[5]]);
		}
		/*
		function move(xy,m) {
			var x = xy._0;
			var y = xy._1;
			var m11 = m[0], m12 = m[1], m21 = m[3], m22 = m[4];
			return new A([m11, m12, m11*x + m12*y + m[2],
						  m21, m22, m21*x + m22*y + m[5]]);
		}
		function scale(s,m) { return new A([m[0]*s, m[1]*s, m[2], m[3]*s, m[4]*s, m[5]]); }
		function scaleX(x,m) { return new A([m[0]*x, m[1], m[2], m[3]*x, m[4], m[5]]); }
		function scaleY(y,m) { return new A([m[0], m[1]*y, m[2], m[3], m[4]*y, m[5]]); }
		function reflectX(m) { return new A([-m[0], m[1], m[2], -m[3], m[4], m[5]]); }
		function reflectY(m) { return new A([m[0], -m[1], m[2], m[3], -m[4], m[5]]); }

		function transform(m11, m21, m12, m22, mdx, mdy, n) {
			var n11 = n[0], n12 = n[1], n21 = n[3], n22 = n[4], ndx = n[2], ndy = n[5];
			return new A([m11*n11 + m12*n21,
						  m11*n12 + m12*n22,
						  m11*ndx + m12*ndy + mdx,
						  m21*n11 + m22*n21,
						  m21*n12 + m22*n22,
						  m21*ndx + m22*ndy + mdy]);
		}
		*/
		function multiply(m, n)
		{
			var m11 = m[0], m12 = m[1], m21 = m[3], m22 = m[4], mdx = m[2], mdy = m[5];
			var n11 = n[0], n12 = n[1], n21 = n[3], n22 = n[4], ndx = n[2], ndy = n[5];
			return new A([m11 * n11 + m12 * n21,
						  m11 * n12 + m12 * n22,
						  m11 * ndx + m12 * ndy + mdx,
						  m21 * n11 + m22 * n21,
						  m21 * n12 + m22 * n22,
						  m21 * ndx + m22 * ndy + mdy]);
		}

		return localRuntime.Native.Transform2D.values = {
			identity: identity,
			matrix: F6(matrix),
			rotation: rotation,
			multiply: F2(multiply)
			/*
			transform: F7(transform),
			rotate: F2(rotate),
			move: F2(move),
			scale: F2(scale),
			scaleX: F2(scaleX),
			scaleY: F2(scaleY),
			reflectX: reflectX,
			reflectY: reflectY
			*/
		};
	};

	Elm.Transform2D = Elm.Transform2D || {};
	Elm.Transform2D.make = function (_elm) {
	   "use strict";
	   _elm.Transform2D = _elm.Transform2D || {};
	   if (_elm.Transform2D.values) return _elm.Transform2D.values;
	   var _U = Elm.Native.Utils.make(_elm),
	   $Native$Transform2D = Elm.Native.Transform2D.make(_elm);
	   var _op = {};
	   var multiply = $Native$Transform2D.multiply;
	   var rotation = $Native$Transform2D.rotation;
	   var matrix = $Native$Transform2D.matrix;
	   var translation = F2(function (x,y) {
	      return A6(matrix,1,0,0,1,x,y);
	   });
	   var scale = function (s) {    return A6(matrix,s,0,0,s,0,0);};
	   var scaleX = function (x) {    return A6(matrix,x,0,0,1,0,0);};
	   var scaleY = function (y) {    return A6(matrix,1,0,0,y,0,0);};
	   var identity = $Native$Transform2D.identity;
	   var Transform2D = {ctor: "Transform2D"};
	   return _elm.Transform2D.values = {_op: _op
	                                    ,identity: identity
	                                    ,matrix: matrix
	                                    ,multiply: multiply
	                                    ,rotation: rotation
	                                    ,translation: translation
	                                    ,scale: scale
	                                    ,scaleX: scaleX
	                                    ,scaleY: scaleY};
	};

	// setup
	Elm.Native = Elm.Native || {};
	Elm.Native.Graphics = Elm.Native.Graphics || {};
	Elm.Native.Graphics.Collage = Elm.Native.Graphics.Collage || {};

	// definition
	Elm.Native.Graphics.Collage.make = function(localRuntime) {
		'use strict';

		// attempt to short-circuit
		localRuntime.Native = localRuntime.Native || {};
		localRuntime.Native.Graphics = localRuntime.Native.Graphics || {};
		localRuntime.Native.Graphics.Collage = localRuntime.Native.Graphics.Collage || {};
		if ('values' in localRuntime.Native.Graphics.Collage)
		{
			return localRuntime.Native.Graphics.Collage.values;
		}

		// okay, we cannot short-ciruit, so now we define everything
		var Color = Elm.Native.Color.make(localRuntime);
		var List = Elm.Native.List.make(localRuntime);
		var NativeElement = Elm.Native.Graphics.Element.make(localRuntime);
		var Transform = Elm.Transform2D.make(localRuntime);
		var Utils = Elm.Native.Utils.make(localRuntime);

		function setStrokeStyle(ctx, style)
		{
			ctx.lineWidth = style.width;

			var cap = style.cap.ctor;
			ctx.lineCap = cap === 'Flat'
				? 'butt'
				: cap === 'Round'
					? 'round'
					: 'square';

			var join = style.join.ctor;
			ctx.lineJoin = join === 'Smooth'
				? 'round'
				: join === 'Sharp'
					? 'miter'
					: 'bevel';

			ctx.miterLimit = style.join._0 || 10;
			ctx.strokeStyle = Color.toCss(style.color);
		}

		function setFillStyle(redo, ctx, style)
		{
			var sty = style.ctor;
			ctx.fillStyle = sty === 'Solid'
				? Color.toCss(style._0)
				: sty === 'Texture'
					? texture(redo, ctx, style._0)
					: gradient(ctx, style._0);
		}

		function trace(ctx, path)
		{
			var points = List.toArray(path);
			var i = points.length - 1;
			if (i <= 0)
			{
				return;
			}
			ctx.moveTo(points[i]._0, points[i]._1);
			while (i--)
			{
				ctx.lineTo(points[i]._0, points[i]._1);
			}
			if (path.closed)
			{
				i = points.length - 1;
				ctx.lineTo(points[i]._0, points[i]._1);
			}
		}

		function line(ctx, style, path)
		{
			if (style.dashing.ctor === '[]')
			{
				trace(ctx, path);
			}
			else
			{
				customLineHelp(ctx, style, path);
			}
			ctx.scale(1, -1);
			ctx.stroke();
		}

		function customLineHelp(ctx, style, path)
		{
			var points = List.toArray(path);
			if (path.closed)
			{
				points.push(points[0]);
			}
			var pattern = List.toArray(style.dashing);
			var i = points.length - 1;
			if (i <= 0)
			{
				return;
			}
			var x0 = points[i]._0, y0 = points[i]._1;
			var x1 = 0, y1 = 0, dx = 0, dy = 0, remaining = 0;
			var pindex = 0, plen = pattern.length;
			var draw = true, segmentLength = pattern[0];
			ctx.moveTo(x0, y0);
			while (i--)
			{
				x1 = points[i]._0;
				y1 = points[i]._1;
				dx = x1 - x0;
				dy = y1 - y0;
				remaining = Math.sqrt(dx * dx + dy * dy);
				while (segmentLength <= remaining)
				{
					x0 += dx * segmentLength / remaining;
					y0 += dy * segmentLength / remaining;
					ctx[draw ? 'lineTo' : 'moveTo'](x0, y0);
					// update starting position
					dx = x1 - x0;
					dy = y1 - y0;
					remaining = Math.sqrt(dx * dx + dy * dy);
					// update pattern
					draw = !draw;
					pindex = (pindex + 1) % plen;
					segmentLength = pattern[pindex];
				}
				if (remaining > 0)
				{
					ctx[draw ? 'lineTo' : 'moveTo'](x1, y1);
					segmentLength -= remaining;
				}
				x0 = x1;
				y0 = y1;
			}
		}

		function drawLine(ctx, style, path)
		{
			setStrokeStyle(ctx, style);
			return line(ctx, style, path);
		}

		function texture(redo, ctx, src)
		{
			var img = new Image();
			img.src = src;
			img.onload = redo;
			return ctx.createPattern(img, 'repeat');
		}

		function gradient(ctx, grad)
		{
			var g;
			var stops = [];
			if (grad.ctor === 'Linear')
			{
				var p0 = grad._0, p1 = grad._1;
				g = ctx.createLinearGradient(p0._0, -p0._1, p1._0, -p1._1);
				stops = List.toArray(grad._2);
			}
			else
			{
				var p0 = grad._0, p2 = grad._2;
				g = ctx.createRadialGradient(p0._0, -p0._1, grad._1, p2._0, -p2._1, grad._3);
				stops = List.toArray(grad._4);
			}
			var len = stops.length;
			for (var i = 0; i < len; ++i)
			{
				var stop = stops[i];
				g.addColorStop(stop._0, Color.toCss(stop._1));
			}
			return g;
		}

		function drawShape(redo, ctx, style, path)
		{
			trace(ctx, path);
			setFillStyle(redo, ctx, style);
			ctx.scale(1, -1);
			ctx.fill();
		}


		// TEXT RENDERING

		function fillText(redo, ctx, text)
		{
			drawText(ctx, text, ctx.fillText);
		}

		function strokeText(redo, ctx, style, text)
		{
			setStrokeStyle(ctx, style);
			// Use native canvas API for dashes only for text for now
			// Degrades to non-dashed on IE 9 + 10
			if (style.dashing.ctor !== '[]' && ctx.setLineDash)
			{
				var pattern = List.toArray(style.dashing);
				ctx.setLineDash(pattern);
			}
			drawText(ctx, text, ctx.strokeText);
		}

		function drawText(ctx, text, canvasDrawFn)
		{
			var textChunks = chunkText(defaultContext, text);

			var totalWidth = 0;
			var maxHeight = 0;
			var numChunks = textChunks.length;

			ctx.scale(1,-1);

			for (var i = numChunks; i--; )
			{
				var chunk = textChunks[i];
				ctx.font = chunk.font;
				var metrics = ctx.measureText(chunk.text);
				chunk.width = metrics.width;
				totalWidth += chunk.width;
				if (chunk.height > maxHeight)
				{
					maxHeight = chunk.height;
				}
			}

			var x = -totalWidth / 2.0;
			for (var i = 0; i < numChunks; ++i)
			{
				var chunk = textChunks[i];
				ctx.font = chunk.font;
				ctx.fillStyle = chunk.color;
				canvasDrawFn.call(ctx, chunk.text, x, maxHeight / 2);
				x += chunk.width;
			}
		}

		function toFont(props)
		{
			return [
				props['font-style'],
				props['font-variant'],
				props['font-weight'],
				props['font-size'],
				props['font-family']
			].join(' ');
		}


		// Convert the object returned by the text module
		// into something we can use for styling canvas text
		function chunkText(context, text)
		{
			var tag = text.ctor;
			if (tag === 'Text:Append')
			{
				var leftChunks = chunkText(context, text._0);
				var rightChunks = chunkText(context, text._1);
				return leftChunks.concat(rightChunks);
			}
			if (tag === 'Text:Text')
			{
				return [{
					text: text._0,
					color: context.color,
					height: context['font-size'].slice(0, -2) | 0,
					font: toFont(context)
				}];
			}
			if (tag === 'Text:Meta')
			{
				var newContext = freshContext(text._0, context);
				return chunkText(newContext, text._1);
			}
		}

		function freshContext(props, ctx)
		{
			return {
				'font-style': props['font-style'] || ctx['font-style'],
				'font-variant': props['font-variant'] || ctx['font-variant'],
				'font-weight': props['font-weight'] || ctx['font-weight'],
				'font-size': props['font-size'] || ctx['font-size'],
				'font-family': props['font-family'] || ctx['font-family'],
				'color': props['color'] || ctx['color']
			};
		}

		var defaultContext = {
			'font-style': 'normal',
			'font-variant': 'normal',
			'font-weight': 'normal',
			'font-size': '12px',
			'font-family': 'sans-serif',
			'color': 'black'
		};


		// IMAGES

		function drawImage(redo, ctx, form)
		{
			var img = new Image();
			img.onload = redo;
			img.src = form._3;
			var w = form._0,
				h = form._1,
				pos = form._2,
				srcX = pos._0,
				srcY = pos._1,
				srcW = w,
				srcH = h,
				destX = -w / 2,
				destY = -h / 2,
				destW = w,
				destH = h;

			ctx.scale(1, -1);
			ctx.drawImage(img, srcX, srcY, srcW, srcH, destX, destY, destW, destH);
		}

		function renderForm(redo, ctx, form)
		{
			ctx.save();

			var x = form.x,
				y = form.y,
				theta = form.theta,
				scale = form.scale;

			if (x !== 0 || y !== 0)
			{
				ctx.translate(x, y);
			}
			if (theta !== 0)
			{
				ctx.rotate(theta % (Math.PI * 2));
			}
			if (scale !== 1)
			{
				ctx.scale(scale, scale);
			}
			if (form.alpha !== 1)
			{
				ctx.globalAlpha = ctx.globalAlpha * form.alpha;
			}

			ctx.beginPath();
			var f = form.form;
			switch (f.ctor)
			{
				case 'FPath':
					drawLine(ctx, f._0, f._1);
					break;

				case 'FImage':
					drawImage(redo, ctx, f);
					break;

				case 'FShape':
					if (f._0.ctor === 'Line')
					{
						f._1.closed = true;
						drawLine(ctx, f._0._0, f._1);
					}
					else
					{
						drawShape(redo, ctx, f._0._0, f._1);
					}
					break;

				case 'FText':
					fillText(redo, ctx, f._0);
					break;

				case 'FOutlinedText':
					strokeText(redo, ctx, f._0, f._1);
					break;
			}
			ctx.restore();
		}

		function formToMatrix(form)
		{
		   var scale = form.scale;
		   var matrix = A6( Transform.matrix, scale, 0, 0, scale, form.x, form.y );

		   var theta = form.theta;
		   if (theta !== 0)
		   {
			   matrix = A2( Transform.multiply, matrix, Transform.rotation(theta) );
		   }

		   return matrix;
		}

		function str(n)
		{
			if (n < 0.00001 && n > -0.00001)
			{
				return 0;
			}
			return n;
		}

		function makeTransform(w, h, form, matrices)
		{
			var props = form.form._0._0.props;
			var m = A6( Transform.matrix, 1, 0, 0, -1,
						(w - props.width ) / 2,
						(h - props.height) / 2 );
			var len = matrices.length;
			for (var i = 0; i < len; ++i)
			{
				m = A2( Transform.multiply, m, matrices[i] );
			}
			m = A2( Transform.multiply, m, formToMatrix(form) );

			return 'matrix(' +
				str( m[0]) + ', ' + str( m[3]) + ', ' +
				str(-m[1]) + ', ' + str(-m[4]) + ', ' +
				str( m[2]) + ', ' + str( m[5]) + ')';
		}

		function stepperHelp(list)
		{
			var arr = List.toArray(list);
			var i = 0;
			function peekNext()
			{
				return i < arr.length ? arr[i]._0.form.ctor : '';
			}
			// assumes that there is a next element
			function next()
			{
				var out = arr[i]._0;
				++i;
				return out;
			}
			return {
				peekNext: peekNext,
				next: next
			};
		}

		function formStepper(forms)
		{
			var ps = [stepperHelp(forms)];
			var matrices = [];
			var alphas = [];
			function peekNext()
			{
				var len = ps.length;
				var formType = '';
				for (var i = 0; i < len; ++i )
				{
					if (formType = ps[i].peekNext()) return formType;
				}
				return '';
			}
			// assumes that there is a next element
			function next(ctx)
			{
				while (!ps[0].peekNext())
				{
					ps.shift();
					matrices.pop();
					alphas.shift();
					if (ctx)
					{
						ctx.restore();
					}
				}
				var out = ps[0].next();
				var f = out.form;
				if (f.ctor === 'FGroup')
				{
					ps.unshift(stepperHelp(f._1));
					var m = A2(Transform.multiply, f._0, formToMatrix(out));
					ctx.save();
					ctx.transform(m[0], m[3], m[1], m[4], m[2], m[5]);
					matrices.push(m);

					var alpha = (alphas[0] || 1) * out.alpha;
					alphas.unshift(alpha);
					ctx.globalAlpha = alpha;
				}
				return out;
			}
			function transforms()
			{
				return matrices;
			}
			function alpha()
			{
				return alphas[0] || 1;
			}
			return {
				peekNext: peekNext,
				next: next,
				transforms: transforms,
				alpha: alpha
			};
		}

		function makeCanvas(w, h)
		{
			var canvas = NativeElement.createNode('canvas');
			canvas.style.width  = w + 'px';
			canvas.style.height = h + 'px';
			canvas.style.display = 'block';
			canvas.style.position = 'absolute';
			var ratio = window.devicePixelRatio || 1;
			canvas.width  = w * ratio;
			canvas.height = h * ratio;
			return canvas;
		}

		function render(model)
		{
			var div = NativeElement.createNode('div');
			div.style.overflow = 'hidden';
			div.style.position = 'relative';
			update(div, model, model);
			return div;
		}

		function nodeStepper(w, h, div)
		{
			var kids = div.childNodes;
			var i = 0;
			var ratio = window.devicePixelRatio || 1;

			function transform(transforms, ctx)
			{
				ctx.translate( w / 2 * ratio, h / 2 * ratio );
				ctx.scale( ratio, -ratio );
				var len = transforms.length;
				for (var i = 0; i < len; ++i)
				{
					var m = transforms[i];
					ctx.save();
					ctx.transform(m[0], m[3], m[1], m[4], m[2], m[5]);
				}
				return ctx;
			}
			function nextContext(transforms)
			{
				while (i < kids.length)
				{
					var node = kids[i];
					if (node.getContext)
					{
						node.width = w * ratio;
						node.height = h * ratio;
						node.style.width = w + 'px';
						node.style.height = h + 'px';
						++i;
						return transform(transforms, node.getContext('2d'));
					}
					div.removeChild(node);
				}
				var canvas = makeCanvas(w, h);
				div.appendChild(canvas);
				// we have added a new node, so we must step our position
				++i;
				return transform(transforms, canvas.getContext('2d'));
			}
			function addElement(matrices, alpha, form)
			{
				var kid = kids[i];
				var elem = form.form._0;

				var node = (!kid || kid.getContext)
					? NativeElement.render(elem)
					: NativeElement.update(kid, kid.oldElement, elem);

				node.style.position = 'absolute';
				node.style.opacity = alpha * form.alpha * elem._0.props.opacity;
				NativeElement.addTransform(node.style, makeTransform(w, h, form, matrices));
				node.oldElement = elem;
				++i;
				if (!kid)
				{
					div.appendChild(node);
				}
				else
				{
					div.insertBefore(node, kid);
				}
			}
			function clearRest()
			{
				while (i < kids.length)
				{
					div.removeChild(kids[i]);
				}
			}
			return {
				nextContext: nextContext,
				addElement: addElement,
				clearRest: clearRest
			};
		}


		function update(div, _, model)
		{
			var w = model.w;
			var h = model.h;

			var forms = formStepper(model.forms);
			var nodes = nodeStepper(w, h, div);
			var ctx = null;
			var formType = '';

			while (formType = forms.peekNext())
			{
				// make sure we have context if we need it
				if (ctx === null && formType !== 'FElement')
				{
					ctx = nodes.nextContext(forms.transforms());
					ctx.globalAlpha = forms.alpha();
				}

				var form = forms.next(ctx);
				// if it is FGroup, all updates are made within formStepper when next is called.
				if (formType === 'FElement')
				{
					// update or insert an element, get a new context
					nodes.addElement(forms.transforms(), forms.alpha(), form);
					ctx = null;
				}
				else if (formType !== 'FGroup')
				{
					renderForm(function() { update(div, model, model); }, ctx, form);
				}
			}
			nodes.clearRest();
			return div;
		}


		function collage(w, h, forms)
		{
			return A3(NativeElement.newElement, w, h, {
				ctor: 'Custom',
				type: 'Collage',
				render: render,
				update: update,
				model: {w: w, h: h, forms: forms}
			});
		}

		return localRuntime.Native.Graphics.Collage.values = {
			collage: F3(collage)
		};
	};

	Elm.Native.Color = {};
	Elm.Native.Color.make = function(localRuntime) {
		localRuntime.Native = localRuntime.Native || {};
		localRuntime.Native.Color = localRuntime.Native.Color || {};
		if (localRuntime.Native.Color.values)
		{
			return localRuntime.Native.Color.values;
		}

		function toCss(c)
		{
			var format = '';
			var colors = '';
			if (c.ctor === 'RGBA')
			{
				format = 'rgb';
				colors = c._0 + ', ' + c._1 + ', ' + c._2;
			}
			else
			{
				format = 'hsl';
				colors = (c._0 * 180 / Math.PI) + ', ' +
						 (c._1 * 100) + '%, ' +
						 (c._2 * 100) + '%';
			}
			if (c._3 === 1)
			{
				return format + '(' + colors + ')';
			}
			else
			{
				return format + 'a(' + colors + ', ' + c._3 + ')';
			}
		}

		return localRuntime.Native.Color.values = {
			toCss: toCss
		};
	};

	Elm.Color = Elm.Color || {};
	Elm.Color.make = function (_elm) {
	   "use strict";
	   _elm.Color = _elm.Color || {};
	   if (_elm.Color.values) return _elm.Color.values;
	   var _U = Elm.Native.Utils.make(_elm),
	   $Basics = Elm.Basics.make(_elm);
	   var _op = {};
	   var Radial = F5(function (a,b,c,d,e) {
	      return {ctor: "Radial",_0: a,_1: b,_2: c,_3: d,_4: e};
	   });
	   var radial = Radial;
	   var Linear = F3(function (a,b,c) {
	      return {ctor: "Linear",_0: a,_1: b,_2: c};
	   });
	   var linear = Linear;
	   var fmod = F2(function (f,n) {
	      var integer = $Basics.floor(f);
	      return $Basics.toFloat(A2($Basics._op["%"],
	      integer,
	      n)) + f - $Basics.toFloat(integer);
	   });
	   var rgbToHsl = F3(function (red,green,blue) {
	      var b = $Basics.toFloat(blue) / 255;
	      var g = $Basics.toFloat(green) / 255;
	      var r = $Basics.toFloat(red) / 255;
	      var cMax = A2($Basics.max,A2($Basics.max,r,g),b);
	      var cMin = A2($Basics.min,A2($Basics.min,r,g),b);
	      var c = cMax - cMin;
	      var lightness = (cMax + cMin) / 2;
	      var saturation = _U.eq(lightness,
	      0) ? 0 : c / (1 - $Basics.abs(2 * lightness - 1));
	      var hue = $Basics.degrees(60) * (_U.eq(cMax,r) ? A2(fmod,
	      (g - b) / c,
	      6) : _U.eq(cMax,g) ? (b - r) / c + 2 : (r - g) / c + 4);
	      return {ctor: "_Tuple3",_0: hue,_1: saturation,_2: lightness};
	   });
	   var hslToRgb = F3(function (hue,saturation,lightness) {
	      var hue$ = hue / $Basics.degrees(60);
	      var chroma = (1 - $Basics.abs(2 * lightness - 1)) * saturation;
	      var x = chroma * (1 - $Basics.abs(A2(fmod,hue$,2) - 1));
	      var _p0 = _U.cmp(hue$,0) < 0 ? {ctor: "_Tuple3"
	                                     ,_0: 0
	                                     ,_1: 0
	                                     ,_2: 0} : _U.cmp(hue$,1) < 0 ? {ctor: "_Tuple3"
	                                                                    ,_0: chroma
	                                                                    ,_1: x
	                                                                    ,_2: 0} : _U.cmp(hue$,2) < 0 ? {ctor: "_Tuple3"
	                                                                                                   ,_0: x
	                                                                                                   ,_1: chroma
	                                                                                                   ,_2: 0} : _U.cmp(hue$,3) < 0 ? {ctor: "_Tuple3"
	                                                                                                                                  ,_0: 0
	                                                                                                                                  ,_1: chroma
	                                                                                                                                  ,_2: x} : _U.cmp(hue$,
	      4) < 0 ? {ctor: "_Tuple3",_0: 0,_1: x,_2: chroma} : _U.cmp(hue$,
	      5) < 0 ? {ctor: "_Tuple3",_0: x,_1: 0,_2: chroma} : _U.cmp(hue$,
	      6) < 0 ? {ctor: "_Tuple3"
	               ,_0: chroma
	               ,_1: 0
	               ,_2: x} : {ctor: "_Tuple3",_0: 0,_1: 0,_2: 0};
	      var r = _p0._0;
	      var g = _p0._1;
	      var b = _p0._2;
	      var m = lightness - chroma / 2;
	      return {ctor: "_Tuple3",_0: r + m,_1: g + m,_2: b + m};
	   });
	   var toRgb = function (color) {
	      var _p1 = color;
	      if (_p1.ctor === "RGBA") {
	            return {red: _p1._0
	                   ,green: _p1._1
	                   ,blue: _p1._2
	                   ,alpha: _p1._3};
	         } else {
	            var _p2 = A3(hslToRgb,_p1._0,_p1._1,_p1._2);
	            var r = _p2._0;
	            var g = _p2._1;
	            var b = _p2._2;
	            return {red: $Basics.round(255 * r)
	                   ,green: $Basics.round(255 * g)
	                   ,blue: $Basics.round(255 * b)
	                   ,alpha: _p1._3};
	         }
	   };
	   var toHsl = function (color) {
	      var _p3 = color;
	      if (_p3.ctor === "HSLA") {
	            return {hue: _p3._0
	                   ,saturation: _p3._1
	                   ,lightness: _p3._2
	                   ,alpha: _p3._3};
	         } else {
	            var _p4 = A3(rgbToHsl,_p3._0,_p3._1,_p3._2);
	            var h = _p4._0;
	            var s = _p4._1;
	            var l = _p4._2;
	            return {hue: h,saturation: s,lightness: l,alpha: _p3._3};
	         }
	   };
	   var HSLA = F4(function (a,b,c,d) {
	      return {ctor: "HSLA",_0: a,_1: b,_2: c,_3: d};
	   });
	   var hsla = F4(function (hue,saturation,lightness,alpha) {
	      return A4(HSLA,
	      hue - $Basics.turns($Basics.toFloat($Basics.floor(hue / (2 * $Basics.pi)))),
	      saturation,
	      lightness,
	      alpha);
	   });
	   var hsl = F3(function (hue,saturation,lightness) {
	      return A4(hsla,hue,saturation,lightness,1);
	   });
	   var complement = function (color) {
	      var _p5 = color;
	      if (_p5.ctor === "HSLA") {
	            return A4(hsla,
	            _p5._0 + $Basics.degrees(180),
	            _p5._1,
	            _p5._2,
	            _p5._3);
	         } else {
	            var _p6 = A3(rgbToHsl,_p5._0,_p5._1,_p5._2);
	            var h = _p6._0;
	            var s = _p6._1;
	            var l = _p6._2;
	            return A4(hsla,h + $Basics.degrees(180),s,l,_p5._3);
	         }
	   };
	   var grayscale = function (p) {    return A4(HSLA,0,0,1 - p,1);};
	   var greyscale = function (p) {    return A4(HSLA,0,0,1 - p,1);};
	   var RGBA = F4(function (a,b,c,d) {
	      return {ctor: "RGBA",_0: a,_1: b,_2: c,_3: d};
	   });
	   var rgba = RGBA;
	   var rgb = F3(function (r,g,b) {    return A4(RGBA,r,g,b,1);});
	   var lightRed = A4(RGBA,239,41,41,1);
	   var red = A4(RGBA,204,0,0,1);
	   var darkRed = A4(RGBA,164,0,0,1);
	   var lightOrange = A4(RGBA,252,175,62,1);
	   var orange = A4(RGBA,245,121,0,1);
	   var darkOrange = A4(RGBA,206,92,0,1);
	   var lightYellow = A4(RGBA,255,233,79,1);
	   var yellow = A4(RGBA,237,212,0,1);
	   var darkYellow = A4(RGBA,196,160,0,1);
	   var lightGreen = A4(RGBA,138,226,52,1);
	   var green = A4(RGBA,115,210,22,1);
	   var darkGreen = A4(RGBA,78,154,6,1);
	   var lightBlue = A4(RGBA,114,159,207,1);
	   var blue = A4(RGBA,52,101,164,1);
	   var darkBlue = A4(RGBA,32,74,135,1);
	   var lightPurple = A4(RGBA,173,127,168,1);
	   var purple = A4(RGBA,117,80,123,1);
	   var darkPurple = A4(RGBA,92,53,102,1);
	   var lightBrown = A4(RGBA,233,185,110,1);
	   var brown = A4(RGBA,193,125,17,1);
	   var darkBrown = A4(RGBA,143,89,2,1);
	   var black = A4(RGBA,0,0,0,1);
	   var white = A4(RGBA,255,255,255,1);
	   var lightGrey = A4(RGBA,238,238,236,1);
	   var grey = A4(RGBA,211,215,207,1);
	   var darkGrey = A4(RGBA,186,189,182,1);
	   var lightGray = A4(RGBA,238,238,236,1);
	   var gray = A4(RGBA,211,215,207,1);
	   var darkGray = A4(RGBA,186,189,182,1);
	   var lightCharcoal = A4(RGBA,136,138,133,1);
	   var charcoal = A4(RGBA,85,87,83,1);
	   var darkCharcoal = A4(RGBA,46,52,54,1);
	   return _elm.Color.values = {_op: _op
	                              ,rgb: rgb
	                              ,rgba: rgba
	                              ,hsl: hsl
	                              ,hsla: hsla
	                              ,greyscale: greyscale
	                              ,grayscale: grayscale
	                              ,complement: complement
	                              ,linear: linear
	                              ,radial: radial
	                              ,toRgb: toRgb
	                              ,toHsl: toHsl
	                              ,red: red
	                              ,orange: orange
	                              ,yellow: yellow
	                              ,green: green
	                              ,blue: blue
	                              ,purple: purple
	                              ,brown: brown
	                              ,lightRed: lightRed
	                              ,lightOrange: lightOrange
	                              ,lightYellow: lightYellow
	                              ,lightGreen: lightGreen
	                              ,lightBlue: lightBlue
	                              ,lightPurple: lightPurple
	                              ,lightBrown: lightBrown
	                              ,darkRed: darkRed
	                              ,darkOrange: darkOrange
	                              ,darkYellow: darkYellow
	                              ,darkGreen: darkGreen
	                              ,darkBlue: darkBlue
	                              ,darkPurple: darkPurple
	                              ,darkBrown: darkBrown
	                              ,white: white
	                              ,lightGrey: lightGrey
	                              ,grey: grey
	                              ,darkGrey: darkGrey
	                              ,lightCharcoal: lightCharcoal
	                              ,charcoal: charcoal
	                              ,darkCharcoal: darkCharcoal
	                              ,black: black
	                              ,lightGray: lightGray
	                              ,gray: gray
	                              ,darkGray: darkGray};
	};

	// setup
	Elm.Native = Elm.Native || {};
	Elm.Native.Graphics = Elm.Native.Graphics || {};
	Elm.Native.Graphics.Element = Elm.Native.Graphics.Element || {};

	// definition
	Elm.Native.Graphics.Element.make = function(localRuntime) {
		'use strict';

		// attempt to short-circuit
		localRuntime.Native = localRuntime.Native || {};
		localRuntime.Native.Graphics = localRuntime.Native.Graphics || {};
		localRuntime.Native.Graphics.Element = localRuntime.Native.Graphics.Element || {};
		if ('values' in localRuntime.Native.Graphics.Element)
		{
			return localRuntime.Native.Graphics.Element.values;
		}

		var Color = Elm.Native.Color.make(localRuntime);
		var List = Elm.Native.List.make(localRuntime);
		var Maybe = Elm.Maybe.make(localRuntime);
		var Text = Elm.Native.Text.make(localRuntime);
		var Utils = Elm.Native.Utils.make(localRuntime);


		// CREATION

		var createNode =
			typeof document === 'undefined'
				?
					function(_)
					{
						return {
							style: {},
							appendChild: function() {}
						};
					}
				:
					function(elementType)
					{
						var node = document.createElement(elementType);
						node.style.padding = '0';
						node.style.margin = '0';
						return node;
					}
				;


		function newElement(width, height, elementPrim)
		{
			return {
				ctor: 'Element_elm_builtin',
				_0: {
					element: elementPrim,
					props: {
						id: Utils.guid(),
						width: width,
						height: height,
						opacity: 1,
						color: Maybe.Nothing,
						href: '',
						tag: '',
						hover: Utils.Tuple0,
						click: Utils.Tuple0
					}
				}
			};
		}


		// PROPERTIES

		function setProps(elem, node)
		{
			var props = elem.props;

			var element = elem.element;
			var width = props.width - (element.adjustWidth || 0);
			var height = props.height - (element.adjustHeight || 0);
			node.style.width  = (width | 0) + 'px';
			node.style.height = (height | 0) + 'px';

			if (props.opacity !== 1)
			{
				node.style.opacity = props.opacity;
			}

			if (props.color.ctor === 'Just')
			{
				node.style.backgroundColor = Color.toCss(props.color._0);
			}

			if (props.tag !== '')
			{
				node.id = props.tag;
			}

			if (props.hover.ctor !== '_Tuple0')
			{
				addHover(node, props.hover);
			}

			if (props.click.ctor !== '_Tuple0')
			{
				addClick(node, props.click);
			}

			if (props.href !== '')
			{
				var anchor = createNode('a');
				anchor.href = props.href;
				anchor.style.display = 'block';
				anchor.style.pointerEvents = 'auto';
				anchor.appendChild(node);
				node = anchor;
			}

			return node;
		}

		function addClick(e, handler)
		{
			e.style.pointerEvents = 'auto';
			e.elm_click_handler = handler;
			function trigger(ev)
			{
				e.elm_click_handler(Utils.Tuple0);
				ev.stopPropagation();
			}
			e.elm_click_trigger = trigger;
			e.addEventListener('click', trigger);
		}

		function removeClick(e, handler)
		{
			if (e.elm_click_trigger)
			{
				e.removeEventListener('click', e.elm_click_trigger);
				e.elm_click_trigger = null;
				e.elm_click_handler = null;
			}
		}

		function addHover(e, handler)
		{
			e.style.pointerEvents = 'auto';
			e.elm_hover_handler = handler;
			e.elm_hover_count = 0;

			function over(evt)
			{
				if (e.elm_hover_count++ > 0) return;
				e.elm_hover_handler(true);
				evt.stopPropagation();
			}
			function out(evt)
			{
				if (e.contains(evt.toElement || evt.relatedTarget)) return;
				e.elm_hover_count = 0;
				e.elm_hover_handler(false);
				evt.stopPropagation();
			}
			e.elm_hover_over = over;
			e.elm_hover_out = out;
			e.addEventListener('mouseover', over);
			e.addEventListener('mouseout', out);
		}

		function removeHover(e)
		{
			e.elm_hover_handler = null;
			if (e.elm_hover_over)
			{
				e.removeEventListener('mouseover', e.elm_hover_over);
				e.elm_hover_over = null;
			}
			if (e.elm_hover_out)
			{
				e.removeEventListener('mouseout', e.elm_hover_out);
				e.elm_hover_out = null;
			}
		}


		// IMAGES

		function image(props, img)
		{
			switch (img._0.ctor)
			{
				case 'Plain':
					return plainImage(img._3);

				case 'Fitted':
					return fittedImage(props.width, props.height, img._3);

				case 'Cropped':
					return croppedImage(img, props.width, props.height, img._3);

				case 'Tiled':
					return tiledImage(img._3);
			}
		}

		function plainImage(src)
		{
			var img = createNode('img');
			img.src = src;
			img.name = src;
			img.style.display = 'block';
			return img;
		}

		function tiledImage(src)
		{
			var div = createNode('div');
			div.style.backgroundImage = 'url(' + src + ')';
			return div;
		}

		function fittedImage(w, h, src)
		{
			var div = createNode('div');
			div.style.background = 'url(' + src + ') no-repeat center';
			div.style.webkitBackgroundSize = 'cover';
			div.style.MozBackgroundSize = 'cover';
			div.style.OBackgroundSize = 'cover';
			div.style.backgroundSize = 'cover';
			return div;
		}

		function croppedImage(elem, w, h, src)
		{
			var pos = elem._0._0;
			var e = createNode('div');
			e.style.overflow = 'hidden';

			var img = createNode('img');
			img.onload = function() {
				var sw = w / elem._1, sh = h / elem._2;
				img.style.width = ((this.width * sw) | 0) + 'px';
				img.style.height = ((this.height * sh) | 0) + 'px';
				img.style.marginLeft = ((- pos._0 * sw) | 0) + 'px';
				img.style.marginTop = ((- pos._1 * sh) | 0) + 'px';
			};
			img.src = src;
			img.name = src;
			e.appendChild(img);
			return e;
		}


		// FLOW

		function goOut(node)
		{
			node.style.position = 'absolute';
			return node;
		}
		function goDown(node)
		{
			return node;
		}
		function goRight(node)
		{
			node.style.styleFloat = 'left';
			node.style.cssFloat = 'left';
			return node;
		}

		var directionTable = {
			DUp: goDown,
			DDown: goDown,
			DLeft: goRight,
			DRight: goRight,
			DIn: goOut,
			DOut: goOut
		};
		function needsReversal(dir)
		{
			return dir === 'DUp' || dir === 'DLeft' || dir === 'DIn';
		}

		function flow(dir, elist)
		{
			var array = List.toArray(elist);
			var container = createNode('div');
			var goDir = directionTable[dir];
			if (goDir === goOut)
			{
				container.style.pointerEvents = 'none';
			}
			if (needsReversal(dir))
			{
				array.reverse();
			}
			var len = array.length;
			for (var i = 0; i < len; ++i)
			{
				container.appendChild(goDir(render(array[i])));
			}
			return container;
		}


		// CONTAINER

		function toPos(pos)
		{
			return pos.ctor === 'Absolute'
				? pos._0 + 'px'
				: (pos._0 * 100) + '%';
		}

		// must clear right, left, top, bottom, and transform
		// before calling this function
		function setPos(pos, wrappedElement, e)
		{
			var elem = wrappedElement._0;
			var element = elem.element;
			var props = elem.props;
			var w = props.width + (element.adjustWidth ? element.adjustWidth : 0);
			var h = props.height + (element.adjustHeight ? element.adjustHeight : 0);

			e.style.position = 'absolute';
			e.style.margin = 'auto';
			var transform = '';

			switch (pos.horizontal.ctor)
			{
				case 'P':
					e.style.right = toPos(pos.x);
					e.style.removeProperty('left');
					break;

				case 'Z':
					transform = 'translateX(' + ((-w / 2) | 0) + 'px) ';

				case 'N':
					e.style.left = toPos(pos.x);
					e.style.removeProperty('right');
					break;
			}
			switch (pos.vertical.ctor)
			{
				case 'N':
					e.style.bottom = toPos(pos.y);
					e.style.removeProperty('top');
					break;

				case 'Z':
					transform += 'translateY(' + ((-h / 2) | 0) + 'px)';

				case 'P':
					e.style.top = toPos(pos.y);
					e.style.removeProperty('bottom');
					break;
			}
			if (transform !== '')
			{
				addTransform(e.style, transform);
			}
			return e;
		}

		function addTransform(style, transform)
		{
			style.transform       = transform;
			style.msTransform     = transform;
			style.MozTransform    = transform;
			style.webkitTransform = transform;
			style.OTransform      = transform;
		}

		function container(pos, elem)
		{
			var e = render(elem);
			setPos(pos, elem, e);
			var div = createNode('div');
			div.style.position = 'relative';
			div.style.overflow = 'hidden';
			div.appendChild(e);
			return div;
		}


		function rawHtml(elem)
		{
			var html = elem.html;
			var align = elem.align;

			var div = createNode('div');
			div.innerHTML = html;
			div.style.visibility = 'hidden';
			if (align)
			{
				div.style.textAlign = align;
			}
			div.style.visibility = 'visible';
			div.style.pointerEvents = 'auto';
			return div;
		}


		// RENDER

		function render(wrappedElement)
		{
			var elem = wrappedElement._0;
			return setProps(elem, makeElement(elem));
		}

		function makeElement(e)
		{
			var elem = e.element;
			switch (elem.ctor)
			{
				case 'Image':
					return image(e.props, elem);

				case 'Flow':
					return flow(elem._0.ctor, elem._1);

				case 'Container':
					return container(elem._0, elem._1);

				case 'Spacer':
					return createNode('div');

				case 'RawHtml':
					return rawHtml(elem);

				case 'Custom':
					return elem.render(elem.model);
			}
		}

		function updateAndReplace(node, curr, next)
		{
			var newNode = update(node, curr, next);
			if (newNode !== node)
			{
				node.parentNode.replaceChild(newNode, node);
			}
			return newNode;
		}


		// UPDATE

		function update(node, wrappedCurrent, wrappedNext)
		{
			var curr = wrappedCurrent._0;
			var next = wrappedNext._0;
			var rootNode = node;
			if (node.tagName === 'A')
			{
				node = node.firstChild;
			}
			if (curr.props.id === next.props.id)
			{
				updateProps(node, curr, next);
				return rootNode;
			}
			if (curr.element.ctor !== next.element.ctor)
			{
				return render(wrappedNext);
			}
			var nextE = next.element;
			var currE = curr.element;
			switch (nextE.ctor)
			{
				case 'Spacer':
					updateProps(node, curr, next);
					return rootNode;

				case 'RawHtml':
					if(currE.html.valueOf() !== nextE.html.valueOf())
					{
						node.innerHTML = nextE.html;
					}
					updateProps(node, curr, next);
					return rootNode;

				case 'Image':
					if (nextE._0.ctor === 'Plain')
					{
						if (nextE._3 !== currE._3)
						{
							node.src = nextE._3;
						}
					}
					else if (!Utils.eq(nextE, currE)
						|| next.props.width !== curr.props.width
						|| next.props.height !== curr.props.height)
					{
						return render(wrappedNext);
					}
					updateProps(node, curr, next);
					return rootNode;

				case 'Flow':
					var arr = List.toArray(nextE._1);
					for (var i = arr.length; i--; )
					{
						arr[i] = arr[i]._0.element.ctor;
					}
					if (nextE._0.ctor !== currE._0.ctor)
					{
						return render(wrappedNext);
					}
					var nexts = List.toArray(nextE._1);
					var kids = node.childNodes;
					if (nexts.length !== kids.length)
					{
						return render(wrappedNext);
					}
					var currs = List.toArray(currE._1);
					var dir = nextE._0.ctor;
					var goDir = directionTable[dir];
					var toReverse = needsReversal(dir);
					var len = kids.length;
					for (var i = len; i--; )
					{
						var subNode = kids[toReverse ? len - i - 1 : i];
						goDir(updateAndReplace(subNode, currs[i], nexts[i]));
					}
					updateProps(node, curr, next);
					return rootNode;

				case 'Container':
					var subNode = node.firstChild;
					var newSubNode = updateAndReplace(subNode, currE._1, nextE._1);
					setPos(nextE._0, nextE._1, newSubNode);
					updateProps(node, curr, next);
					return rootNode;

				case 'Custom':
					if (currE.type === nextE.type)
					{
						var updatedNode = nextE.update(node, currE.model, nextE.model);
						updateProps(updatedNode, curr, next);
						return updatedNode;
					}
					return render(wrappedNext);
			}
		}

		function updateProps(node, curr, next)
		{
			var nextProps = next.props;
			var currProps = curr.props;

			var element = next.element;
			var width = nextProps.width - (element.adjustWidth || 0);
			var height = nextProps.height - (element.adjustHeight || 0);
			if (width !== currProps.width)
			{
				node.style.width = (width | 0) + 'px';
			}
			if (height !== currProps.height)
			{
				node.style.height = (height | 0) + 'px';
			}

			if (nextProps.opacity !== currProps.opacity)
			{
				node.style.opacity = nextProps.opacity;
			}

			var nextColor = nextProps.color.ctor === 'Just'
				? Color.toCss(nextProps.color._0)
				: '';
			if (node.style.backgroundColor !== nextColor)
			{
				node.style.backgroundColor = nextColor;
			}

			if (nextProps.tag !== currProps.tag)
			{
				node.id = nextProps.tag;
			}

			if (nextProps.href !== currProps.href)
			{
				if (currProps.href === '')
				{
					// add a surrounding href
					var anchor = createNode('a');
					anchor.href = nextProps.href;
					anchor.style.display = 'block';
					anchor.style.pointerEvents = 'auto';

					node.parentNode.replaceChild(anchor, node);
					anchor.appendChild(node);
				}
				else if (nextProps.href === '')
				{
					// remove the surrounding href
					var anchor = node.parentNode;
					anchor.parentNode.replaceChild(node, anchor);
				}
				else
				{
					// just update the link
					node.parentNode.href = nextProps.href;
				}
			}

			// update click and hover handlers
			var removed = false;

			// update hover handlers
			if (currProps.hover.ctor === '_Tuple0')
			{
				if (nextProps.hover.ctor !== '_Tuple0')
				{
					addHover(node, nextProps.hover);
				}
			}
			else
			{
				if (nextProps.hover.ctor === '_Tuple0')
				{
					removed = true;
					removeHover(node);
				}
				else
				{
					node.elm_hover_handler = nextProps.hover;
				}
			}

			// update click handlers
			if (currProps.click.ctor === '_Tuple0')
			{
				if (nextProps.click.ctor !== '_Tuple0')
				{
					addClick(node, nextProps.click);
				}
			}
			else
			{
				if (nextProps.click.ctor === '_Tuple0')
				{
					removed = true;
					removeClick(node);
				}
				else
				{
					node.elm_click_handler = nextProps.click;
				}
			}

			// stop capturing clicks if
			if (removed
				&& nextProps.hover.ctor === '_Tuple0'
				&& nextProps.click.ctor === '_Tuple0')
			{
				node.style.pointerEvents = 'none';
			}
		}


		// TEXT

		function block(align)
		{
			return function(text)
			{
				var raw = {
					ctor: 'RawHtml',
					html: Text.renderHtml(text),
					align: align
				};
				var pos = htmlHeight(0, raw);
				return newElement(pos._0, pos._1, raw);
			};
		}

		function markdown(text)
		{
			var raw = {
				ctor: 'RawHtml',
				html: text,
				align: null
			};
			var pos = htmlHeight(0, raw);
			return newElement(pos._0, pos._1, raw);
		}

		var htmlHeight =
			typeof document !== 'undefined'
				? realHtmlHeight
				: function(a, b) { return Utils.Tuple2(0, 0); };

		function realHtmlHeight(width, rawHtml)
		{
			// create dummy node
			var temp = document.createElement('div');
			temp.innerHTML = rawHtml.html;
			if (width > 0)
			{
				temp.style.width = width + 'px';
			}
			temp.style.visibility = 'hidden';
			temp.style.styleFloat = 'left';
			temp.style.cssFloat = 'left';

			document.body.appendChild(temp);

			// get dimensions
			var style = window.getComputedStyle(temp, null);
			var w = Math.ceil(style.getPropertyValue('width').slice(0, -2) - 0);
			var h = Math.ceil(style.getPropertyValue('height').slice(0, -2) - 0);
			document.body.removeChild(temp);
			return Utils.Tuple2(w, h);
		}


		return localRuntime.Native.Graphics.Element.values = {
			render: render,
			update: update,
			updateAndReplace: updateAndReplace,

			createNode: createNode,
			newElement: F3(newElement),
			addTransform: addTransform,
			htmlHeight: F2(htmlHeight),
			guid: Utils.guid,

			block: block,
			markdown: markdown
		};
	};

	Elm.Native.Text = {};
	Elm.Native.Text.make = function(localRuntime) {
		localRuntime.Native = localRuntime.Native || {};
		localRuntime.Native.Text = localRuntime.Native.Text || {};
		if (localRuntime.Native.Text.values)
		{
			return localRuntime.Native.Text.values;
		}

		var toCss = Elm.Native.Color.make(localRuntime).toCss;
		var List = Elm.Native.List.make(localRuntime);


		// CONSTRUCTORS

		function fromString(str)
		{
			return {
				ctor: 'Text:Text',
				_0: str
			};
		}

		function append(a, b)
		{
			return {
				ctor: 'Text:Append',
				_0: a,
				_1: b
			};
		}

		function addMeta(field, value, text)
		{
			var newProps = {};
			var newText = {
				ctor: 'Text:Meta',
				_0: newProps,
				_1: text
			};

			if (text.ctor === 'Text:Meta')
			{
				newText._1 = text._1;
				var props = text._0;
				for (var i = metaKeys.length; i--; )
				{
					var key = metaKeys[i];
					var val = props[key];
					if (val)
					{
						newProps[key] = val;
					}
				}
			}
			newProps[field] = value;
			return newText;
		}

		var metaKeys = [
			'font-size',
			'font-family',
			'font-style',
			'font-weight',
			'href',
			'text-decoration',
			'color'
		];


		// conversions from Elm values to CSS

		function toTypefaces(list)
		{
			var typefaces = List.toArray(list);
			for (var i = typefaces.length; i--; )
			{
				var typeface = typefaces[i];
				if (typeface.indexOf(' ') > -1)
				{
					typefaces[i] = "'" + typeface + "'";
				}
			}
			return typefaces.join(',');
		}

		function toLine(line)
		{
			var ctor = line.ctor;
			return ctor === 'Under'
				? 'underline'
				: ctor === 'Over'
					? 'overline'
					: 'line-through';
		}

		// setting styles of Text

		function style(style, text)
		{
			var newText = addMeta('color', toCss(style.color), text);
			var props = newText._0;

			if (style.typeface.ctor !== '[]')
			{
				props['font-family'] = toTypefaces(style.typeface);
			}
			if (style.height.ctor !== 'Nothing')
			{
				props['font-size'] = style.height._0 + 'px';
			}
			if (style.bold)
			{
				props['font-weight'] = 'bold';
			}
			if (style.italic)
			{
				props['font-style'] = 'italic';
			}
			if (style.line.ctor !== 'Nothing')
			{
				props['text-decoration'] = toLine(style.line._0);
			}
			return newText;
		}

		function height(px, text)
		{
			return addMeta('font-size', px + 'px', text);
		}

		function typeface(names, text)
		{
			return addMeta('font-family', toTypefaces(names), text);
		}

		function monospace(text)
		{
			return addMeta('font-family', 'monospace', text);
		}

		function italic(text)
		{
			return addMeta('font-style', 'italic', text);
		}

		function bold(text)
		{
			return addMeta('font-weight', 'bold', text);
		}

		function link(href, text)
		{
			return addMeta('href', href, text);
		}

		function line(line, text)
		{
			return addMeta('text-decoration', toLine(line), text);
		}

		function color(color, text)
		{
			return addMeta('color', toCss(color), text);
		}


		// RENDER

		function renderHtml(text)
		{
			var tag = text.ctor;
			if (tag === 'Text:Append')
			{
				return renderHtml(text._0) + renderHtml(text._1);
			}
			if (tag === 'Text:Text')
			{
				return properEscape(text._0);
			}
			if (tag === 'Text:Meta')
			{
				return renderMeta(text._0, renderHtml(text._1));
			}
		}

		function renderMeta(metas, string)
		{
			var href = metas.href;
			if (href)
			{
				string = '<a href="' + href + '">' + string + '</a>';
			}
			var styles = '';
			for (var key in metas)
			{
				if (key === 'href')
				{
					continue;
				}
				styles += key + ':' + metas[key] + ';';
			}
			if (styles)
			{
				string = '<span style="' + styles + '">' + string + '</span>';
			}
			return string;
		}

		function properEscape(str)
		{
			if (str.length === 0)
			{
				return str;
			}
			str = str //.replace(/&/g,  '&#38;')
				.replace(/"/g,  '&#34;')
				.replace(/'/g,  '&#39;')
				.replace(/</g,  '&#60;')
				.replace(/>/g,  '&#62;');
			var arr = str.split('\n');
			for (var i = arr.length; i--; )
			{
				arr[i] = makeSpaces(arr[i]);
			}
			return arr.join('<br/>');
		}

		function makeSpaces(s)
		{
			if (s.length === 0)
			{
				return s;
			}
			var arr = s.split('');
			if (arr[0] === ' ')
			{
				arr[0] = '&nbsp;';
			}
			for (var i = arr.length; --i; )
			{
				if (arr[i][0] === ' ' && arr[i - 1] === ' ')
				{
					arr[i - 1] = arr[i - 1] + arr[i];
					arr[i] = '';
				}
			}
			for (var i = arr.length; i--; )
			{
				if (arr[i].length > 1 && arr[i][0] === ' ')
				{
					var spaces = arr[i].split('');
					for (var j = spaces.length - 2; j >= 0; j -= 2)
					{
						spaces[j] = '&nbsp;';
					}
					arr[i] = spaces.join('');
				}
			}
			arr = arr.join('');
			if (arr[arr.length - 1] === ' ')
			{
				return arr.slice(0, -1) + '&nbsp;';
			}
			return arr;
		}


		return localRuntime.Native.Text.values = {
			fromString: fromString,
			append: F2(append),

			height: F2(height),
			italic: italic,
			bold: bold,
			line: F2(line),
			monospace: monospace,
			typeface: F2(typeface),
			color: F2(color),
			link: F2(link),
			style: F2(style),

			toTypefaces: toTypefaces,
			toLine: toLine,
			renderHtml: renderHtml
		};
	};

	Elm.Text = Elm.Text || {};
	Elm.Text.make = function (_elm) {
	   "use strict";
	   _elm.Text = _elm.Text || {};
	   if (_elm.Text.values) return _elm.Text.values;
	   var _U = Elm.Native.Utils.make(_elm),
	   $Color = Elm.Color.make(_elm),
	   $List = Elm.List.make(_elm),
	   $Maybe = Elm.Maybe.make(_elm),
	   $Native$Text = Elm.Native.Text.make(_elm);
	   var _op = {};
	   var line = $Native$Text.line;
	   var italic = $Native$Text.italic;
	   var bold = $Native$Text.bold;
	   var color = $Native$Text.color;
	   var height = $Native$Text.height;
	   var link = $Native$Text.link;
	   var monospace = $Native$Text.monospace;
	   var typeface = $Native$Text.typeface;
	   var style = $Native$Text.style;
	   var append = $Native$Text.append;
	   var fromString = $Native$Text.fromString;
	   var empty = fromString("");
	   var concat = function (texts) {
	      return A3($List.foldr,append,empty,texts);
	   };
	   var join = F2(function (seperator,texts) {
	      return concat(A2($List.intersperse,seperator,texts));
	   });
	   var defaultStyle = {typeface: _U.list([])
	                      ,height: $Maybe.Nothing
	                      ,color: $Color.black
	                      ,bold: false
	                      ,italic: false
	                      ,line: $Maybe.Nothing};
	   var Style = F6(function (a,b,c,d,e,f) {
	      return {typeface: a
	             ,height: b
	             ,color: c
	             ,bold: d
	             ,italic: e
	             ,line: f};
	   });
	   var Through = {ctor: "Through"};
	   var Over = {ctor: "Over"};
	   var Under = {ctor: "Under"};
	   var Text = {ctor: "Text"};
	   return _elm.Text.values = {_op: _op
	                             ,fromString: fromString
	                             ,empty: empty
	                             ,append: append
	                             ,concat: concat
	                             ,join: join
	                             ,link: link
	                             ,style: style
	                             ,defaultStyle: defaultStyle
	                             ,typeface: typeface
	                             ,monospace: monospace
	                             ,height: height
	                             ,color: color
	                             ,bold: bold
	                             ,italic: italic
	                             ,line: line
	                             ,Style: Style
	                             ,Under: Under
	                             ,Over: Over
	                             ,Through: Through};
	};
	Elm.Graphics = Elm.Graphics || {};
	Elm.Graphics.Element = Elm.Graphics.Element || {};
	Elm.Graphics.Element.make = function (_elm) {
	   "use strict";
	   _elm.Graphics = _elm.Graphics || {};
	   _elm.Graphics.Element = _elm.Graphics.Element || {};
	   if (_elm.Graphics.Element.values)
	   return _elm.Graphics.Element.values;
	   var _U = Elm.Native.Utils.make(_elm),
	   $Basics = Elm.Basics.make(_elm),
	   $Color = Elm.Color.make(_elm),
	   $List = Elm.List.make(_elm),
	   $Maybe = Elm.Maybe.make(_elm),
	   $Native$Graphics$Element = Elm.Native.Graphics.Element.make(_elm),
	   $Text = Elm.Text.make(_elm);
	   var _op = {};
	   var DOut = {ctor: "DOut"};
	   var outward = DOut;
	   var DIn = {ctor: "DIn"};
	   var inward = DIn;
	   var DRight = {ctor: "DRight"};
	   var right = DRight;
	   var DLeft = {ctor: "DLeft"};
	   var left = DLeft;
	   var DDown = {ctor: "DDown"};
	   var down = DDown;
	   var DUp = {ctor: "DUp"};
	   var up = DUp;
	   var RawPosition = F4(function (a,b,c,d) {
	      return {horizontal: a,vertical: b,x: c,y: d};
	   });
	   var Position = function (a) {
	      return {ctor: "Position",_0: a};
	   };
	   var Relative = function (a) {
	      return {ctor: "Relative",_0: a};
	   };
	   var relative = Relative;
	   var Absolute = function (a) {
	      return {ctor: "Absolute",_0: a};
	   };
	   var absolute = Absolute;
	   var N = {ctor: "N"};
	   var bottomLeft = Position({horizontal: N
	                             ,vertical: N
	                             ,x: Absolute(0)
	                             ,y: Absolute(0)});
	   var bottomLeftAt = F2(function (x,y) {
	      return Position({horizontal: N,vertical: N,x: x,y: y});
	   });
	   var Z = {ctor: "Z"};
	   var middle = Position({horizontal: Z
	                         ,vertical: Z
	                         ,x: Relative(0.5)
	                         ,y: Relative(0.5)});
	   var midLeft = Position({horizontal: N
	                          ,vertical: Z
	                          ,x: Absolute(0)
	                          ,y: Relative(0.5)});
	   var midBottom = Position({horizontal: Z
	                            ,vertical: N
	                            ,x: Relative(0.5)
	                            ,y: Absolute(0)});
	   var middleAt = F2(function (x,y) {
	      return Position({horizontal: Z,vertical: Z,x: x,y: y});
	   });
	   var midLeftAt = F2(function (x,y) {
	      return Position({horizontal: N,vertical: Z,x: x,y: y});
	   });
	   var midBottomAt = F2(function (x,y) {
	      return Position({horizontal: Z,vertical: N,x: x,y: y});
	   });
	   var P = {ctor: "P"};
	   var topLeft = Position({horizontal: N
	                          ,vertical: P
	                          ,x: Absolute(0)
	                          ,y: Absolute(0)});
	   var topRight = Position({horizontal: P
	                           ,vertical: P
	                           ,x: Absolute(0)
	                           ,y: Absolute(0)});
	   var bottomRight = Position({horizontal: P
	                              ,vertical: N
	                              ,x: Absolute(0)
	                              ,y: Absolute(0)});
	   var midRight = Position({horizontal: P
	                           ,vertical: Z
	                           ,x: Absolute(0)
	                           ,y: Relative(0.5)});
	   var midTop = Position({horizontal: Z
	                         ,vertical: P
	                         ,x: Relative(0.5)
	                         ,y: Absolute(0)});
	   var topLeftAt = F2(function (x,y) {
	      return Position({horizontal: N,vertical: P,x: x,y: y});
	   });
	   var topRightAt = F2(function (x,y) {
	      return Position({horizontal: P,vertical: P,x: x,y: y});
	   });
	   var bottomRightAt = F2(function (x,y) {
	      return Position({horizontal: P,vertical: N,x: x,y: y});
	   });
	   var midRightAt = F2(function (x,y) {
	      return Position({horizontal: P,vertical: Z,x: x,y: y});
	   });
	   var midTopAt = F2(function (x,y) {
	      return Position({horizontal: Z,vertical: P,x: x,y: y});
	   });
	   var justified = $Native$Graphics$Element.block("justify");
	   var centered = $Native$Graphics$Element.block("center");
	   var rightAligned = $Native$Graphics$Element.block("right");
	   var leftAligned = $Native$Graphics$Element.block("left");
	   var show = function (value) {
	      return leftAligned($Text.monospace($Text.fromString($Basics.toString(value))));
	   };
	   var Tiled = {ctor: "Tiled"};
	   var Cropped = function (a) {
	      return {ctor: "Cropped",_0: a};
	   };
	   var Fitted = {ctor: "Fitted"};
	   var Plain = {ctor: "Plain"};
	   var Custom = {ctor: "Custom"};
	   var RawHtml = {ctor: "RawHtml"};
	   var Spacer = {ctor: "Spacer"};
	   var Flow = F2(function (a,b) {
	      return {ctor: "Flow",_0: a,_1: b};
	   });
	   var Container = F2(function (a,b) {
	      return {ctor: "Container",_0: a,_1: b};
	   });
	   var Image = F4(function (a,b,c,d) {
	      return {ctor: "Image",_0: a,_1: b,_2: c,_3: d};
	   });
	   var newElement = $Native$Graphics$Element.newElement;
	   var image = F3(function (w,h,src) {
	      return A3(newElement,w,h,A4(Image,Plain,w,h,src));
	   });
	   var fittedImage = F3(function (w,h,src) {
	      return A3(newElement,w,h,A4(Image,Fitted,w,h,src));
	   });
	   var croppedImage = F4(function (pos,w,h,src) {
	      return A3(newElement,w,h,A4(Image,Cropped(pos),w,h,src));
	   });
	   var tiledImage = F3(function (w,h,src) {
	      return A3(newElement,w,h,A4(Image,Tiled,w,h,src));
	   });
	   var container = F4(function (w,h,_p0,e) {
	      var _p1 = _p0;
	      return A3(newElement,w,h,A2(Container,_p1._0,e));
	   });
	   var spacer = F2(function (w,h) {
	      return A3(newElement,w,h,Spacer);
	   });
	   var sizeOf = function (_p2) {
	      var _p3 = _p2;
	      var _p4 = _p3._0;
	      return {ctor: "_Tuple2"
	             ,_0: _p4.props.width
	             ,_1: _p4.props.height};
	   };
	   var heightOf = function (_p5) {
	      var _p6 = _p5;
	      return _p6._0.props.height;
	   };
	   var widthOf = function (_p7) {
	      var _p8 = _p7;
	      return _p8._0.props.width;
	   };
	   var above = F2(function (hi,lo) {
	      return A3(newElement,
	      A2($Basics.max,widthOf(hi),widthOf(lo)),
	      heightOf(hi) + heightOf(lo),
	      A2(Flow,DDown,_U.list([hi,lo])));
	   });
	   var below = F2(function (lo,hi) {
	      return A3(newElement,
	      A2($Basics.max,widthOf(hi),widthOf(lo)),
	      heightOf(hi) + heightOf(lo),
	      A2(Flow,DDown,_U.list([hi,lo])));
	   });
	   var beside = F2(function (lft,rht) {
	      return A3(newElement,
	      widthOf(lft) + widthOf(rht),
	      A2($Basics.max,heightOf(lft),heightOf(rht)),
	      A2(Flow,right,_U.list([lft,rht])));
	   });
	   var layers = function (es) {
	      var hs = A2($List.map,heightOf,es);
	      var ws = A2($List.map,widthOf,es);
	      return A3(newElement,
	      A2($Maybe.withDefault,0,$List.maximum(ws)),
	      A2($Maybe.withDefault,0,$List.maximum(hs)),
	      A2(Flow,DOut,es));
	   };
	   var empty = A2(spacer,0,0);
	   var flow = F2(function (dir,es) {
	      var newFlow = F2(function (w,h) {
	         return A3(newElement,w,h,A2(Flow,dir,es));
	      });
	      var maxOrZero = function (list) {
	         return A2($Maybe.withDefault,0,$List.maximum(list));
	      };
	      var hs = A2($List.map,heightOf,es);
	      var ws = A2($List.map,widthOf,es);
	      if (_U.eq(es,_U.list([]))) return empty; else {
	            var _p9 = dir;
	            switch (_p9.ctor)
	            {case "DUp": return A2(newFlow,maxOrZero(ws),$List.sum(hs));
	               case "DDown": return A2(newFlow,maxOrZero(ws),$List.sum(hs));
	               case "DLeft": return A2(newFlow,$List.sum(ws),maxOrZero(hs));
	               case "DRight": return A2(newFlow,$List.sum(ws),maxOrZero(hs));
	               case "DIn": return A2(newFlow,maxOrZero(ws),maxOrZero(hs));
	               default: return A2(newFlow,maxOrZero(ws),maxOrZero(hs));}
	         }
	   });
	   var Properties = F9(function (a,b,c,d,e,f,g,h,i) {
	      return {id: a
	             ,width: b
	             ,height: c
	             ,opacity: d
	             ,color: e
	             ,href: f
	             ,tag: g
	             ,hover: h
	             ,click: i};
	   });
	   var Element_elm_builtin = function (a) {
	      return {ctor: "Element_elm_builtin",_0: a};
	   };
	   var width = F2(function (newWidth,_p10) {
	      var _p11 = _p10;
	      var _p14 = _p11._0.props;
	      var _p13 = _p11._0.element;
	      var newHeight = function () {
	         var _p12 = _p13;
	         switch (_p12.ctor)
	         {case "Image":
	            return $Basics.round($Basics.toFloat(_p12._2) / $Basics.toFloat(_p12._1) * $Basics.toFloat(newWidth));
	            case "RawHtml":
	            return $Basics.snd(A2($Native$Graphics$Element.htmlHeight,
	              newWidth,
	              _p13));
	            default: return _p14.height;}
	      }();
	      return Element_elm_builtin({element: _p13
	                                 ,props: _U.update(_p14,{width: newWidth,height: newHeight})});
	   });
	   var height = F2(function (newHeight,_p15) {
	      var _p16 = _p15;
	      return Element_elm_builtin({element: _p16._0.element
	                                 ,props: _U.update(_p16._0.props,{height: newHeight})});
	   });
	   var size = F3(function (w,h,e) {
	      return A2(height,h,A2(width,w,e));
	   });
	   var opacity = F2(function (givenOpacity,_p17) {
	      var _p18 = _p17;
	      return Element_elm_builtin({element: _p18._0.element
	                                 ,props: _U.update(_p18._0.props,{opacity: givenOpacity})});
	   });
	   var color = F2(function (clr,_p19) {
	      var _p20 = _p19;
	      return Element_elm_builtin({element: _p20._0.element
	                                 ,props: _U.update(_p20._0.props,{color: $Maybe.Just(clr)})});
	   });
	   var tag = F2(function (name,_p21) {
	      var _p22 = _p21;
	      return Element_elm_builtin({element: _p22._0.element
	                                 ,props: _U.update(_p22._0.props,{tag: name})});
	   });
	   var link = F2(function (href,_p23) {
	      var _p24 = _p23;
	      return Element_elm_builtin({element: _p24._0.element
	                                 ,props: _U.update(_p24._0.props,{href: href})});
	   });
	   return _elm.Graphics.Element.values = {_op: _op
	                                         ,image: image
	                                         ,fittedImage: fittedImage
	                                         ,croppedImage: croppedImage
	                                         ,tiledImage: tiledImage
	                                         ,leftAligned: leftAligned
	                                         ,rightAligned: rightAligned
	                                         ,centered: centered
	                                         ,justified: justified
	                                         ,show: show
	                                         ,width: width
	                                         ,height: height
	                                         ,size: size
	                                         ,color: color
	                                         ,opacity: opacity
	                                         ,link: link
	                                         ,tag: tag
	                                         ,widthOf: widthOf
	                                         ,heightOf: heightOf
	                                         ,sizeOf: sizeOf
	                                         ,flow: flow
	                                         ,up: up
	                                         ,down: down
	                                         ,left: left
	                                         ,right: right
	                                         ,inward: inward
	                                         ,outward: outward
	                                         ,layers: layers
	                                         ,above: above
	                                         ,below: below
	                                         ,beside: beside
	                                         ,empty: empty
	                                         ,spacer: spacer
	                                         ,container: container
	                                         ,middle: middle
	                                         ,midTop: midTop
	                                         ,midBottom: midBottom
	                                         ,midLeft: midLeft
	                                         ,midRight: midRight
	                                         ,topLeft: topLeft
	                                         ,topRight: topRight
	                                         ,bottomLeft: bottomLeft
	                                         ,bottomRight: bottomRight
	                                         ,absolute: absolute
	                                         ,relative: relative
	                                         ,middleAt: middleAt
	                                         ,midTopAt: midTopAt
	                                         ,midBottomAt: midBottomAt
	                                         ,midLeftAt: midLeftAt
	                                         ,midRightAt: midRightAt
	                                         ,topLeftAt: topLeftAt
	                                         ,topRightAt: topRightAt
	                                         ,bottomLeftAt: bottomLeftAt
	                                         ,bottomRightAt: bottomRightAt};
	};
	Elm.Graphics = Elm.Graphics || {};
	Elm.Graphics.Collage = Elm.Graphics.Collage || {};
	Elm.Graphics.Collage.make = function (_elm) {
	   "use strict";
	   _elm.Graphics = _elm.Graphics || {};
	   _elm.Graphics.Collage = _elm.Graphics.Collage || {};
	   if (_elm.Graphics.Collage.values)
	   return _elm.Graphics.Collage.values;
	   var _U = Elm.Native.Utils.make(_elm),
	   $Basics = Elm.Basics.make(_elm),
	   $Color = Elm.Color.make(_elm),
	   $Graphics$Element = Elm.Graphics.Element.make(_elm),
	   $List = Elm.List.make(_elm),
	   $Native$Graphics$Collage = Elm.Native.Graphics.Collage.make(_elm),
	   $Text = Elm.Text.make(_elm),
	   $Transform2D = Elm.Transform2D.make(_elm);
	   var _op = {};
	   var Shape = function (a) {    return {ctor: "Shape",_0: a};};
	   var polygon = function (points) {    return Shape(points);};
	   var rect = F2(function (w,h) {
	      var hh = h / 2;
	      var hw = w / 2;
	      return Shape(_U.list([{ctor: "_Tuple2",_0: 0 - hw,_1: 0 - hh}
	                           ,{ctor: "_Tuple2",_0: 0 - hw,_1: hh}
	                           ,{ctor: "_Tuple2",_0: hw,_1: hh}
	                           ,{ctor: "_Tuple2",_0: hw,_1: 0 - hh}]));
	   });
	   var square = function (n) {    return A2(rect,n,n);};
	   var oval = F2(function (w,h) {
	      var hh = h / 2;
	      var hw = w / 2;
	      var n = 50;
	      var t = 2 * $Basics.pi / n;
	      var f = function (i) {
	         return {ctor: "_Tuple2"
	                ,_0: hw * $Basics.cos(t * i)
	                ,_1: hh * $Basics.sin(t * i)};
	      };
	      return Shape(A2($List.map,f,_U.range(0,n - 1)));
	   });
	   var circle = function (r) {    return A2(oval,2 * r,2 * r);};
	   var ngon = F2(function (n,r) {
	      var m = $Basics.toFloat(n);
	      var t = 2 * $Basics.pi / m;
	      var f = function (i) {
	         return {ctor: "_Tuple2"
	                ,_0: r * $Basics.cos(t * i)
	                ,_1: r * $Basics.sin(t * i)};
	      };
	      return Shape(A2($List.map,f,_U.range(0,m - 1)));
	   });
	   var Path = function (a) {    return {ctor: "Path",_0: a};};
	   var path = function (ps) {    return Path(ps);};
	   var segment = F2(function (p1,p2) {
	      return Path(_U.list([p1,p2]));
	   });
	   var collage = $Native$Graphics$Collage.collage;
	   var Fill = function (a) {    return {ctor: "Fill",_0: a};};
	   var Line = function (a) {    return {ctor: "Line",_0: a};};
	   var FGroup = F2(function (a,b) {
	      return {ctor: "FGroup",_0: a,_1: b};
	   });
	   var FElement = function (a) {
	      return {ctor: "FElement",_0: a};
	   };
	   var FImage = F4(function (a,b,c,d) {
	      return {ctor: "FImage",_0: a,_1: b,_2: c,_3: d};
	   });
	   var FText = function (a) {    return {ctor: "FText",_0: a};};
	   var FOutlinedText = F2(function (a,b) {
	      return {ctor: "FOutlinedText",_0: a,_1: b};
	   });
	   var FShape = F2(function (a,b) {
	      return {ctor: "FShape",_0: a,_1: b};
	   });
	   var FPath = F2(function (a,b) {
	      return {ctor: "FPath",_0: a,_1: b};
	   });
	   var LineStyle = F6(function (a,b,c,d,e,f) {
	      return {color: a
	             ,width: b
	             ,cap: c
	             ,join: d
	             ,dashing: e
	             ,dashOffset: f};
	   });
	   var Clipped = {ctor: "Clipped"};
	   var Sharp = function (a) {    return {ctor: "Sharp",_0: a};};
	   var Smooth = {ctor: "Smooth"};
	   var Padded = {ctor: "Padded"};
	   var Round = {ctor: "Round"};
	   var Flat = {ctor: "Flat"};
	   var defaultLine = {color: $Color.black
	                     ,width: 1
	                     ,cap: Flat
	                     ,join: Sharp(10)
	                     ,dashing: _U.list([])
	                     ,dashOffset: 0};
	   var solid = function (clr) {
	      return _U.update(defaultLine,{color: clr});
	   };
	   var dashed = function (clr) {
	      return _U.update(defaultLine,
	      {color: clr,dashing: _U.list([8,4])});
	   };
	   var dotted = function (clr) {
	      return _U.update(defaultLine,
	      {color: clr,dashing: _U.list([3,3])});
	   };
	   var Grad = function (a) {    return {ctor: "Grad",_0: a};};
	   var Texture = function (a) {
	      return {ctor: "Texture",_0: a};
	   };
	   var Solid = function (a) {    return {ctor: "Solid",_0: a};};
	   var Form_elm_builtin = function (a) {
	      return {ctor: "Form_elm_builtin",_0: a};
	   };
	   var form = function (f) {
	      return Form_elm_builtin({theta: 0
	                              ,scale: 1
	                              ,x: 0
	                              ,y: 0
	                              ,alpha: 1
	                              ,form: f});
	   };
	   var fill = F2(function (style,_p0) {
	      var _p1 = _p0;
	      return form(A2(FShape,Fill(style),_p1._0));
	   });
	   var filled = F2(function (color,shape) {
	      return A2(fill,Solid(color),shape);
	   });
	   var textured = F2(function (src,shape) {
	      return A2(fill,Texture(src),shape);
	   });
	   var gradient = F2(function (grad,shape) {
	      return A2(fill,Grad(grad),shape);
	   });
	   var outlined = F2(function (style,_p2) {
	      var _p3 = _p2;
	      return form(A2(FShape,Line(style),_p3._0));
	   });
	   var traced = F2(function (style,_p4) {
	      var _p5 = _p4;
	      return form(A2(FPath,style,_p5._0));
	   });
	   var sprite = F4(function (w,h,pos,src) {
	      return form(A4(FImage,w,h,pos,src));
	   });
	   var toForm = function (e) {    return form(FElement(e));};
	   var group = function (fs) {
	      return form(A2(FGroup,$Transform2D.identity,fs));
	   };
	   var groupTransform = F2(function (matrix,fs) {
	      return form(A2(FGroup,matrix,fs));
	   });
	   var text = function (t) {    return form(FText(t));};
	   var outlinedText = F2(function (ls,t) {
	      return form(A2(FOutlinedText,ls,t));
	   });
	   var move = F2(function (_p7,_p6) {
	      var _p8 = _p7;
	      var _p9 = _p6;
	      var _p10 = _p9._0;
	      return Form_elm_builtin(_U.update(_p10,
	      {x: _p10.x + _p8._0,y: _p10.y + _p8._1}));
	   });
	   var moveX = F2(function (x,_p11) {
	      var _p12 = _p11;
	      var _p13 = _p12._0;
	      return Form_elm_builtin(_U.update(_p13,{x: _p13.x + x}));
	   });
	   var moveY = F2(function (y,_p14) {
	      var _p15 = _p14;
	      var _p16 = _p15._0;
	      return Form_elm_builtin(_U.update(_p16,{y: _p16.y + y}));
	   });
	   var scale = F2(function (s,_p17) {
	      var _p18 = _p17;
	      var _p19 = _p18._0;
	      return Form_elm_builtin(_U.update(_p19,
	      {scale: _p19.scale * s}));
	   });
	   var rotate = F2(function (t,_p20) {
	      var _p21 = _p20;
	      var _p22 = _p21._0;
	      return Form_elm_builtin(_U.update(_p22,
	      {theta: _p22.theta + t}));
	   });
	   var alpha = F2(function (a,_p23) {
	      var _p24 = _p23;
	      return Form_elm_builtin(_U.update(_p24._0,{alpha: a}));
	   });
	   return _elm.Graphics.Collage.values = {_op: _op
	                                         ,collage: collage
	                                         ,toForm: toForm
	                                         ,filled: filled
	                                         ,textured: textured
	                                         ,gradient: gradient
	                                         ,outlined: outlined
	                                         ,traced: traced
	                                         ,text: text
	                                         ,outlinedText: outlinedText
	                                         ,move: move
	                                         ,moveX: moveX
	                                         ,moveY: moveY
	                                         ,scale: scale
	                                         ,rotate: rotate
	                                         ,alpha: alpha
	                                         ,group: group
	                                         ,groupTransform: groupTransform
	                                         ,rect: rect
	                                         ,oval: oval
	                                         ,square: square
	                                         ,circle: circle
	                                         ,ngon: ngon
	                                         ,polygon: polygon
	                                         ,segment: segment
	                                         ,path: path
	                                         ,solid: solid
	                                         ,dashed: dashed
	                                         ,dotted: dotted
	                                         ,defaultLine: defaultLine
	                                         ,LineStyle: LineStyle
	                                         ,Flat: Flat
	                                         ,Round: Round
	                                         ,Padded: Padded
	                                         ,Smooth: Smooth
	                                         ,Sharp: Sharp
	                                         ,Clipped: Clipped};
	};
	Elm.Native.Debug = {};
	Elm.Native.Debug.make = function(localRuntime) {
		localRuntime.Native = localRuntime.Native || {};
		localRuntime.Native.Debug = localRuntime.Native.Debug || {};
		if (localRuntime.Native.Debug.values)
		{
			return localRuntime.Native.Debug.values;
		}

		var toString = Elm.Native.Utils.make(localRuntime).toString;

		function log(tag, value)
		{
			var msg = tag + ': ' + toString(value);
			var process = process || {};
			if (process.stdout)
			{
				process.stdout.write(msg);
			}
			else
			{
				console.log(msg);
			}
			return value;
		}

		function crash(message)
		{
			throw new Error(message);
		}

		function tracePath(tag, form)
		{
			if (localRuntime.debug)
			{
				return localRuntime.debug.trace(tag, form);
			}
			return form;
		}

		function watch(tag, value)
		{
			if (localRuntime.debug)
			{
				localRuntime.debug.watch(tag, value);
			}
			return value;
		}

		function watchSummary(tag, summarize, value)
		{
			if (localRuntime.debug)
			{
				localRuntime.debug.watch(tag, summarize(value));
			}
			return value;
		}

		return localRuntime.Native.Debug.values = {
			crash: crash,
			tracePath: F2(tracePath),
			log: F2(log),
			watch: F2(watch),
			watchSummary: F3(watchSummary)
		};
	};

	Elm.Debug = Elm.Debug || {};
	Elm.Debug.make = function (_elm) {
	   "use strict";
	   _elm.Debug = _elm.Debug || {};
	   if (_elm.Debug.values) return _elm.Debug.values;
	   var _U = Elm.Native.Utils.make(_elm),
	   $Graphics$Collage = Elm.Graphics.Collage.make(_elm),
	   $Native$Debug = Elm.Native.Debug.make(_elm);
	   var _op = {};
	   var trace = $Native$Debug.tracePath;
	   var watchSummary = $Native$Debug.watchSummary;
	   var watch = $Native$Debug.watch;
	   var crash = $Native$Debug.crash;
	   var log = $Native$Debug.log;
	   return _elm.Debug.values = {_op: _op
	                              ,log: log
	                              ,crash: crash
	                              ,watch: watch
	                              ,watchSummary: watchSummary
	                              ,trace: trace};
	};
	Elm.Result = Elm.Result || {};
	Elm.Result.make = function (_elm) {
	   "use strict";
	   _elm.Result = _elm.Result || {};
	   if (_elm.Result.values) return _elm.Result.values;
	   var _U = Elm.Native.Utils.make(_elm),
	   $Maybe = Elm.Maybe.make(_elm);
	   var _op = {};
	   var toMaybe = function (result) {
	      var _p0 = result;
	      if (_p0.ctor === "Ok") {
	            return $Maybe.Just(_p0._0);
	         } else {
	            return $Maybe.Nothing;
	         }
	   };
	   var withDefault = F2(function (def,result) {
	      var _p1 = result;
	      if (_p1.ctor === "Ok") {
	            return _p1._0;
	         } else {
	            return def;
	         }
	   });
	   var Err = function (a) {    return {ctor: "Err",_0: a};};
	   var andThen = F2(function (result,callback) {
	      var _p2 = result;
	      if (_p2.ctor === "Ok") {
	            return callback(_p2._0);
	         } else {
	            return Err(_p2._0);
	         }
	   });
	   var Ok = function (a) {    return {ctor: "Ok",_0: a};};
	   var map = F2(function (func,ra) {
	      var _p3 = ra;
	      if (_p3.ctor === "Ok") {
	            return Ok(func(_p3._0));
	         } else {
	            return Err(_p3._0);
	         }
	   });
	   var map2 = F3(function (func,ra,rb) {
	      var _p4 = {ctor: "_Tuple2",_0: ra,_1: rb};
	      if (_p4._0.ctor === "Ok") {
	            if (_p4._1.ctor === "Ok") {
	                  return Ok(A2(func,_p4._0._0,_p4._1._0));
	               } else {
	                  return Err(_p4._1._0);
	               }
	         } else {
	            return Err(_p4._0._0);
	         }
	   });
	   var map3 = F4(function (func,ra,rb,rc) {
	      var _p5 = {ctor: "_Tuple3",_0: ra,_1: rb,_2: rc};
	      if (_p5._0.ctor === "Ok") {
	            if (_p5._1.ctor === "Ok") {
	                  if (_p5._2.ctor === "Ok") {
	                        return Ok(A3(func,_p5._0._0,_p5._1._0,_p5._2._0));
	                     } else {
	                        return Err(_p5._2._0);
	                     }
	               } else {
	                  return Err(_p5._1._0);
	               }
	         } else {
	            return Err(_p5._0._0);
	         }
	   });
	   var map4 = F5(function (func,ra,rb,rc,rd) {
	      var _p6 = {ctor: "_Tuple4",_0: ra,_1: rb,_2: rc,_3: rd};
	      if (_p6._0.ctor === "Ok") {
	            if (_p6._1.ctor === "Ok") {
	                  if (_p6._2.ctor === "Ok") {
	                        if (_p6._3.ctor === "Ok") {
	                              return Ok(A4(func,_p6._0._0,_p6._1._0,_p6._2._0,_p6._3._0));
	                           } else {
	                              return Err(_p6._3._0);
	                           }
	                     } else {
	                        return Err(_p6._2._0);
	                     }
	               } else {
	                  return Err(_p6._1._0);
	               }
	         } else {
	            return Err(_p6._0._0);
	         }
	   });
	   var map5 = F6(function (func,ra,rb,rc,rd,re) {
	      var _p7 = {ctor: "_Tuple5"
	                ,_0: ra
	                ,_1: rb
	                ,_2: rc
	                ,_3: rd
	                ,_4: re};
	      if (_p7._0.ctor === "Ok") {
	            if (_p7._1.ctor === "Ok") {
	                  if (_p7._2.ctor === "Ok") {
	                        if (_p7._3.ctor === "Ok") {
	                              if (_p7._4.ctor === "Ok") {
	                                    return Ok(A5(func,
	                                    _p7._0._0,
	                                    _p7._1._0,
	                                    _p7._2._0,
	                                    _p7._3._0,
	                                    _p7._4._0));
	                                 } else {
	                                    return Err(_p7._4._0);
	                                 }
	                           } else {
	                              return Err(_p7._3._0);
	                           }
	                     } else {
	                        return Err(_p7._2._0);
	                     }
	               } else {
	                  return Err(_p7._1._0);
	               }
	         } else {
	            return Err(_p7._0._0);
	         }
	   });
	   var formatError = F2(function (f,result) {
	      var _p8 = result;
	      if (_p8.ctor === "Ok") {
	            return Ok(_p8._0);
	         } else {
	            return Err(f(_p8._0));
	         }
	   });
	   var fromMaybe = F2(function (err,maybe) {
	      var _p9 = maybe;
	      if (_p9.ctor === "Just") {
	            return Ok(_p9._0);
	         } else {
	            return Err(err);
	         }
	   });
	   return _elm.Result.values = {_op: _op
	                               ,withDefault: withDefault
	                               ,map: map
	                               ,map2: map2
	                               ,map3: map3
	                               ,map4: map4
	                               ,map5: map5
	                               ,andThen: andThen
	                               ,toMaybe: toMaybe
	                               ,fromMaybe: fromMaybe
	                               ,formatError: formatError
	                               ,Ok: Ok
	                               ,Err: Err};
	};
	Elm.Native.Signal = {};

	Elm.Native.Signal.make = function(localRuntime) {
		localRuntime.Native = localRuntime.Native || {};
		localRuntime.Native.Signal = localRuntime.Native.Signal || {};
		if (localRuntime.Native.Signal.values)
		{
			return localRuntime.Native.Signal.values;
		}


		var Task = Elm.Native.Task.make(localRuntime);
		var Utils = Elm.Native.Utils.make(localRuntime);


		function broadcastToKids(node, timestamp, update)
		{
			var kids = node.kids;
			for (var i = kids.length; i--; )
			{
				kids[i].notify(timestamp, update, node.id);
			}
		}


		// INPUT

		function input(name, base)
		{
			var node = {
				id: Utils.guid(),
				name: 'input-' + name,
				value: base,
				parents: [],
				kids: []
			};

			node.notify = function(timestamp, targetId, value) {
				var update = targetId === node.id;
				if (update)
				{
					node.value = value;
				}
				broadcastToKids(node, timestamp, update);
				return update;
			};

			localRuntime.inputs.push(node);

			return node;
		}

		function constant(value)
		{
			return input('constant', value);
		}


		// MAILBOX

		function mailbox(base)
		{
			var signal = input('mailbox', base);

			function send(value) {
				return Task.asyncFunction(function(callback) {
					localRuntime.setTimeout(function() {
						localRuntime.notify(signal.id, value);
					}, 0);
					callback(Task.succeed(Utils.Tuple0));
				});
			}

			return {
				signal: signal,
				address: {
					ctor: 'Address',
					_0: send
				}
			};
		}

		function sendMessage(message)
		{
			Task.perform(message._0);
		}


		// OUTPUT

		function output(name, handler, parent)
		{
			var node = {
				id: Utils.guid(),
				name: 'output-' + name,
				parents: [parent],
				isOutput: true
			};

			node.notify = function(timestamp, parentUpdate, parentID)
			{
				if (parentUpdate)
				{
					handler(parent.value);
				}
			};

			parent.kids.push(node);

			return node;
		}


		// MAP

		function mapMany(refreshValue, args)
		{
			var node = {
				id: Utils.guid(),
				name: 'map' + args.length,
				value: refreshValue(),
				parents: args,
				kids: []
			};

			var numberOfParents = args.length;
			var count = 0;
			var update = false;

			node.notify = function(timestamp, parentUpdate, parentID)
			{
				++count;

				update = update || parentUpdate;

				if (count === numberOfParents)
				{
					if (update)
					{
						node.value = refreshValue();
					}
					broadcastToKids(node, timestamp, update);
					update = false;
					count = 0;
				}
			};

			for (var i = numberOfParents; i--; )
			{
				args[i].kids.push(node);
			}

			return node;
		}


		function map(func, a)
		{
			function refreshValue()
			{
				return func(a.value);
			}
			return mapMany(refreshValue, [a]);
		}


		function map2(func, a, b)
		{
			function refreshValue()
			{
				return A2( func, a.value, b.value );
			}
			return mapMany(refreshValue, [a, b]);
		}


		function map3(func, a, b, c)
		{
			function refreshValue()
			{
				return A3( func, a.value, b.value, c.value );
			}
			return mapMany(refreshValue, [a, b, c]);
		}


		function map4(func, a, b, c, d)
		{
			function refreshValue()
			{
				return A4( func, a.value, b.value, c.value, d.value );
			}
			return mapMany(refreshValue, [a, b, c, d]);
		}


		function map5(func, a, b, c, d, e)
		{
			function refreshValue()
			{
				return A5( func, a.value, b.value, c.value, d.value, e.value );
			}
			return mapMany(refreshValue, [a, b, c, d, e]);
		}


		// FOLD

		function foldp(update, state, signal)
		{
			var node = {
				id: Utils.guid(),
				name: 'foldp',
				parents: [signal],
				kids: [],
				value: state
			};

			node.notify = function(timestamp, parentUpdate, parentID)
			{
				if (parentUpdate)
				{
					node.value = A2( update, signal.value, node.value );
				}
				broadcastToKids(node, timestamp, parentUpdate);
			};

			signal.kids.push(node);

			return node;
		}


		// TIME

		function timestamp(signal)
		{
			var node = {
				id: Utils.guid(),
				name: 'timestamp',
				value: Utils.Tuple2(localRuntime.timer.programStart, signal.value),
				parents: [signal],
				kids: []
			};

			node.notify = function(timestamp, parentUpdate, parentID)
			{
				if (parentUpdate)
				{
					node.value = Utils.Tuple2(timestamp, signal.value);
				}
				broadcastToKids(node, timestamp, parentUpdate);
			};

			signal.kids.push(node);

			return node;
		}


		function delay(time, signal)
		{
			var delayed = input('delay-input-' + time, signal.value);

			function handler(value)
			{
				setTimeout(function() {
					localRuntime.notify(delayed.id, value);
				}, time);
			}

			output('delay-output-' + time, handler, signal);

			return delayed;
		}


		// MERGING

		function genericMerge(tieBreaker, leftStream, rightStream)
		{
			var node = {
				id: Utils.guid(),
				name: 'merge',
				value: A2(tieBreaker, leftStream.value, rightStream.value),
				parents: [leftStream, rightStream],
				kids: []
			};

			var left = { touched: false, update: false, value: null };
			var right = { touched: false, update: false, value: null };

			node.notify = function(timestamp, parentUpdate, parentID)
			{
				if (parentID === leftStream.id)
				{
					left.touched = true;
					left.update = parentUpdate;
					left.value = leftStream.value;
				}
				if (parentID === rightStream.id)
				{
					right.touched = true;
					right.update = parentUpdate;
					right.value = rightStream.value;
				}

				if (left.touched && right.touched)
				{
					var update = false;
					if (left.update && right.update)
					{
						node.value = A2(tieBreaker, left.value, right.value);
						update = true;
					}
					else if (left.update)
					{
						node.value = left.value;
						update = true;
					}
					else if (right.update)
					{
						node.value = right.value;
						update = true;
					}
					left.touched = false;
					right.touched = false;

					broadcastToKids(node, timestamp, update);
				}
			};

			leftStream.kids.push(node);
			rightStream.kids.push(node);

			return node;
		}


		// FILTERING

		function filterMap(toMaybe, base, signal)
		{
			var maybe = toMaybe(signal.value);
			var node = {
				id: Utils.guid(),
				name: 'filterMap',
				value: maybe.ctor === 'Nothing' ? base : maybe._0,
				parents: [signal],
				kids: []
			};

			node.notify = function(timestamp, parentUpdate, parentID)
			{
				var update = false;
				if (parentUpdate)
				{
					var maybe = toMaybe(signal.value);
					if (maybe.ctor === 'Just')
					{
						update = true;
						node.value = maybe._0;
					}
				}
				broadcastToKids(node, timestamp, update);
			};

			signal.kids.push(node);

			return node;
		}


		// SAMPLING

		function sampleOn(ticker, signal)
		{
			var node = {
				id: Utils.guid(),
				name: 'sampleOn',
				value: signal.value,
				parents: [ticker, signal],
				kids: []
			};

			var signalTouch = false;
			var tickerTouch = false;
			var tickerUpdate = false;

			node.notify = function(timestamp, parentUpdate, parentID)
			{
				if (parentID === ticker.id)
				{
					tickerTouch = true;
					tickerUpdate = parentUpdate;
				}
				if (parentID === signal.id)
				{
					signalTouch = true;
				}

				if (tickerTouch && signalTouch)
				{
					if (tickerUpdate)
					{
						node.value = signal.value;
					}
					tickerTouch = false;
					signalTouch = false;

					broadcastToKids(node, timestamp, tickerUpdate);
				}
			};

			ticker.kids.push(node);
			signal.kids.push(node);

			return node;
		}


		// DROP REPEATS

		function dropRepeats(signal)
		{
			var node = {
				id: Utils.guid(),
				name: 'dropRepeats',
				value: signal.value,
				parents: [signal],
				kids: []
			};

			node.notify = function(timestamp, parentUpdate, parentID)
			{
				var update = false;
				if (parentUpdate && !Utils.eq(node.value, signal.value))
				{
					node.value = signal.value;
					update = true;
				}
				broadcastToKids(node, timestamp, update);
			};

			signal.kids.push(node);

			return node;
		}


		return localRuntime.Native.Signal.values = {
			input: input,
			constant: constant,
			mailbox: mailbox,
			sendMessage: sendMessage,
			output: output,
			map: F2(map),
			map2: F3(map2),
			map3: F4(map3),
			map4: F5(map4),
			map5: F6(map5),
			foldp: F3(foldp),
			genericMerge: F3(genericMerge),
			filterMap: F3(filterMap),
			sampleOn: F2(sampleOn),
			dropRepeats: dropRepeats,
			timestamp: timestamp,
			delay: F2(delay)
		};
	};

	Elm.Native.Task = {};

	Elm.Native.Task.make = function(localRuntime) {
		localRuntime.Native = localRuntime.Native || {};
		localRuntime.Native.Task = localRuntime.Native.Task || {};
		if (localRuntime.Native.Task.values)
		{
			return localRuntime.Native.Task.values;
		}

		var Result = Elm.Result.make(localRuntime);
		var Signal;
		var Utils = Elm.Native.Utils.make(localRuntime);


		// CONSTRUCTORS

		function succeed(value)
		{
			return {
				tag: 'Succeed',
				value: value
			};
		}

		function fail(error)
		{
			return {
				tag: 'Fail',
				value: error
			};
		}

		function asyncFunction(func)
		{
			return {
				tag: 'Async',
				asyncFunction: func
			};
		}

		function andThen(task, callback)
		{
			return {
				tag: 'AndThen',
				task: task,
				callback: callback
			};
		}

		function catch_(task, callback)
		{
			return {
				tag: 'Catch',
				task: task,
				callback: callback
			};
		}


		// RUNNER

		function perform(task) {
			runTask({ task: task }, function() {});
		}

		function performSignal(name, signal)
		{
			var workQueue = [];

			function onComplete()
			{
				workQueue.shift();

				if (workQueue.length > 0)
				{
					var task = workQueue[0];

					setTimeout(function() {
						runTask(task, onComplete);
					}, 0);
				}
			}

			function register(task)
			{
				var root = { task: task };
				workQueue.push(root);
				if (workQueue.length === 1)
				{
					runTask(root, onComplete);
				}
			}

			if (!Signal)
			{
				Signal = Elm.Native.Signal.make(localRuntime);
			}
			Signal.output('perform-tasks-' + name, register, signal);

			register(signal.value);

			return signal;
		}

		function mark(status, task)
		{
			return { status: status, task: task };
		}

		function runTask(root, onComplete)
		{
			var result = mark('runnable', root.task);
			while (result.status === 'runnable')
			{
				result = stepTask(onComplete, root, result.task);
			}

			if (result.status === 'done')
			{
				root.task = result.task;
				onComplete();
			}

			if (result.status === 'blocked')
			{
				root.task = result.task;
			}
		}

		function stepTask(onComplete, root, task)
		{
			var tag = task.tag;

			if (tag === 'Succeed' || tag === 'Fail')
			{
				return mark('done', task);
			}

			if (tag === 'Async')
			{
				var placeHolder = {};
				var couldBeSync = true;
				var wasSync = false;

				task.asyncFunction(function(result) {
					placeHolder.tag = result.tag;
					placeHolder.value = result.value;
					if (couldBeSync)
					{
						wasSync = true;
					}
					else
					{
						runTask(root, onComplete);
					}
				});
				couldBeSync = false;
				return mark(wasSync ? 'done' : 'blocked', placeHolder);
			}

			if (tag === 'AndThen' || tag === 'Catch')
			{
				var result = mark('runnable', task.task);
				while (result.status === 'runnable')
				{
					result = stepTask(onComplete, root, result.task);
				}

				if (result.status === 'done')
				{
					var activeTask = result.task;
					var activeTag = activeTask.tag;

					var succeedChain = activeTag === 'Succeed' && tag === 'AndThen';
					var failChain = activeTag === 'Fail' && tag === 'Catch';

					return (succeedChain || failChain)
						? mark('runnable', task.callback(activeTask.value))
						: mark('runnable', activeTask);
				}
				if (result.status === 'blocked')
				{
					return mark('blocked', {
						tag: tag,
						task: result.task,
						callback: task.callback
					});
				}
			}
		}


		// THREADS

		function sleep(time) {
			return asyncFunction(function(callback) {
				setTimeout(function() {
					callback(succeed(Utils.Tuple0));
				}, time);
			});
		}

		function spawn(task) {
			return asyncFunction(function(callback) {
				var id = setTimeout(function() {
					perform(task);
				}, 0);
				callback(succeed(id));
			});
		}


		return localRuntime.Native.Task.values = {
			succeed: succeed,
			fail: fail,
			asyncFunction: asyncFunction,
			andThen: F2(andThen),
			catch_: F2(catch_),
			perform: perform,
			performSignal: performSignal,
			spawn: spawn,
			sleep: sleep
		};
	};

	Elm.Task = Elm.Task || {};
	Elm.Task.make = function (_elm) {
	   "use strict";
	   _elm.Task = _elm.Task || {};
	   if (_elm.Task.values) return _elm.Task.values;
	   var _U = Elm.Native.Utils.make(_elm),
	   $List = Elm.List.make(_elm),
	   $Maybe = Elm.Maybe.make(_elm),
	   $Native$Task = Elm.Native.Task.make(_elm),
	   $Result = Elm.Result.make(_elm);
	   var _op = {};
	   var sleep = $Native$Task.sleep;
	   var spawn = $Native$Task.spawn;
	   var ThreadID = function (a) {
	      return {ctor: "ThreadID",_0: a};
	   };
	   var onError = $Native$Task.catch_;
	   var andThen = $Native$Task.andThen;
	   var fail = $Native$Task.fail;
	   var mapError = F2(function (f,task) {
	      return A2(onError,
	      task,
	      function (err) {
	         return fail(f(err));
	      });
	   });
	   var succeed = $Native$Task.succeed;
	   var map = F2(function (func,taskA) {
	      return A2(andThen,
	      taskA,
	      function (a) {
	         return succeed(func(a));
	      });
	   });
	   var map2 = F3(function (func,taskA,taskB) {
	      return A2(andThen,
	      taskA,
	      function (a) {
	         return A2(andThen,
	         taskB,
	         function (b) {
	            return succeed(A2(func,a,b));
	         });
	      });
	   });
	   var map3 = F4(function (func,taskA,taskB,taskC) {
	      return A2(andThen,
	      taskA,
	      function (a) {
	         return A2(andThen,
	         taskB,
	         function (b) {
	            return A2(andThen,
	            taskC,
	            function (c) {
	               return succeed(A3(func,a,b,c));
	            });
	         });
	      });
	   });
	   var map4 = F5(function (func,taskA,taskB,taskC,taskD) {
	      return A2(andThen,
	      taskA,
	      function (a) {
	         return A2(andThen,
	         taskB,
	         function (b) {
	            return A2(andThen,
	            taskC,
	            function (c) {
	               return A2(andThen,
	               taskD,
	               function (d) {
	                  return succeed(A4(func,a,b,c,d));
	               });
	            });
	         });
	      });
	   });
	   var map5 = F6(function (func,taskA,taskB,taskC,taskD,taskE) {
	      return A2(andThen,
	      taskA,
	      function (a) {
	         return A2(andThen,
	         taskB,
	         function (b) {
	            return A2(andThen,
	            taskC,
	            function (c) {
	               return A2(andThen,
	               taskD,
	               function (d) {
	                  return A2(andThen,
	                  taskE,
	                  function (e) {
	                     return succeed(A5(func,a,b,c,d,e));
	                  });
	               });
	            });
	         });
	      });
	   });
	   var andMap = F2(function (taskFunc,taskValue) {
	      return A2(andThen,
	      taskFunc,
	      function (func) {
	         return A2(andThen,
	         taskValue,
	         function (value) {
	            return succeed(func(value));
	         });
	      });
	   });
	   var sequence = function (tasks) {
	      var _p0 = tasks;
	      if (_p0.ctor === "[]") {
	            return succeed(_U.list([]));
	         } else {
	            return A3(map2,
	            F2(function (x,y) {    return A2($List._op["::"],x,y);}),
	            _p0._0,
	            sequence(_p0._1));
	         }
	   };
	   var toMaybe = function (task) {
	      return A2(onError,
	      A2(map,$Maybe.Just,task),
	      function (_p1) {
	         return succeed($Maybe.Nothing);
	      });
	   };
	   var fromMaybe = F2(function ($default,maybe) {
	      var _p2 = maybe;
	      if (_p2.ctor === "Just") {
	            return succeed(_p2._0);
	         } else {
	            return fail($default);
	         }
	   });
	   var toResult = function (task) {
	      return A2(onError,
	      A2(map,$Result.Ok,task),
	      function (msg) {
	         return succeed($Result.Err(msg));
	      });
	   };
	   var fromResult = function (result) {
	      var _p3 = result;
	      if (_p3.ctor === "Ok") {
	            return succeed(_p3._0);
	         } else {
	            return fail(_p3._0);
	         }
	   };
	   var Task = {ctor: "Task"};
	   return _elm.Task.values = {_op: _op
	                             ,succeed: succeed
	                             ,fail: fail
	                             ,map: map
	                             ,map2: map2
	                             ,map3: map3
	                             ,map4: map4
	                             ,map5: map5
	                             ,andMap: andMap
	                             ,sequence: sequence
	                             ,andThen: andThen
	                             ,onError: onError
	                             ,mapError: mapError
	                             ,toMaybe: toMaybe
	                             ,fromMaybe: fromMaybe
	                             ,toResult: toResult
	                             ,fromResult: fromResult
	                             ,spawn: spawn
	                             ,sleep: sleep};
	};
	Elm.Signal = Elm.Signal || {};
	Elm.Signal.make = function (_elm) {
	   "use strict";
	   _elm.Signal = _elm.Signal || {};
	   if (_elm.Signal.values) return _elm.Signal.values;
	   var _U = Elm.Native.Utils.make(_elm),
	   $Basics = Elm.Basics.make(_elm),
	   $Debug = Elm.Debug.make(_elm),
	   $List = Elm.List.make(_elm),
	   $Maybe = Elm.Maybe.make(_elm),
	   $Native$Signal = Elm.Native.Signal.make(_elm),
	   $Task = Elm.Task.make(_elm);
	   var _op = {};
	   var send = F2(function (_p0,value) {
	      var _p1 = _p0;
	      return A2($Task.onError,
	      _p1._0(value),
	      function (_p2) {
	         return $Task.succeed({ctor: "_Tuple0"});
	      });
	   });
	   var Message = function (a) {
	      return {ctor: "Message",_0: a};
	   };
	   var message = F2(function (_p3,value) {
	      var _p4 = _p3;
	      return Message(_p4._0(value));
	   });
	   var mailbox = $Native$Signal.mailbox;
	   var Address = function (a) {
	      return {ctor: "Address",_0: a};
	   };
	   var forwardTo = F2(function (_p5,f) {
	      var _p6 = _p5;
	      return Address(function (x) {    return _p6._0(f(x));});
	   });
	   var Mailbox = F2(function (a,b) {
	      return {address: a,signal: b};
	   });
	   var sampleOn = $Native$Signal.sampleOn;
	   var dropRepeats = $Native$Signal.dropRepeats;
	   var filterMap = $Native$Signal.filterMap;
	   var filter = F3(function (isOk,base,signal) {
	      return A3(filterMap,
	      function (value) {
	         return isOk(value) ? $Maybe.Just(value) : $Maybe.Nothing;
	      },
	      base,
	      signal);
	   });
	   var merge = F2(function (left,right) {
	      return A3($Native$Signal.genericMerge,
	      $Basics.always,
	      left,
	      right);
	   });
	   var mergeMany = function (signalList) {
	      var _p7 = $List.reverse(signalList);
	      if (_p7.ctor === "[]") {
	            return _U.crashCase("Signal",
	            {start: {line: 184,column: 3},end: {line: 189,column: 40}},
	            _p7)("mergeMany was given an empty list!");
	         } else {
	            return A3($List.foldl,merge,_p7._0,_p7._1);
	         }
	   };
	   var foldp = $Native$Signal.foldp;
	   var map5 = $Native$Signal.map5;
	   var map4 = $Native$Signal.map4;
	   var map3 = $Native$Signal.map3;
	   var map2 = $Native$Signal.map2;
	   var map = $Native$Signal.map;
	   var constant = $Native$Signal.constant;
	   var Signal = {ctor: "Signal"};
	   return _elm.Signal.values = {_op: _op
	                               ,merge: merge
	                               ,mergeMany: mergeMany
	                               ,map: map
	                               ,map2: map2
	                               ,map3: map3
	                               ,map4: map4
	                               ,map5: map5
	                               ,constant: constant
	                               ,dropRepeats: dropRepeats
	                               ,filter: filter
	                               ,filterMap: filterMap
	                               ,sampleOn: sampleOn
	                               ,foldp: foldp
	                               ,mailbox: mailbox
	                               ,send: send
	                               ,message: message
	                               ,forwardTo: forwardTo
	                               ,Mailbox: Mailbox};
	};
	Elm.Native = Elm.Native || {};
	Elm.Native.History = {};
	Elm.Native.History.make = function(localRuntime){

	  localRuntime.Native = localRuntime.Native || {};
	  localRuntime.Native.History = localRuntime.Native.History || {};

	  if (localRuntime.Native.History.values){
	    return localRuntime.Native.History.values;
	  }

	  var NS = Elm.Native.Signal.make(localRuntime);
	  var Task = Elm.Native.Task.make(localRuntime);
	  var Utils = Elm.Native.Utils.make(localRuntime);
	  var node = window;

	  // path : Signal String
	  var path = NS.input('History.path', window.location.pathname);

	  // length : Signal Int
	  var length = NS.input('History.length', window.history.length);

	  // hash : Signal String
	  var hash = NS.input('History.hash', window.location.hash);

	  localRuntime.addListener([path.id, length.id], node, 'popstate', function getPath(event){
	    localRuntime.notify(path.id, window.location.pathname);
	    localRuntime.notify(length.id, window.history.length);
	    localRuntime.notify(hash.id, window.location.hash);
	  });

	  localRuntime.addListener([hash.id], node, 'hashchange', function getHash(event){
	    localRuntime.notify(hash.id, window.location.hash);
	  });

	  // setPath : String -> Task error ()
	  var setPath = function(urlpath){
	    return Task.asyncFunction(function(callback){
	      setTimeout(function(){
	        localRuntime.notify(path.id, urlpath);
	        window.history.pushState({}, "", urlpath);
	        localRuntime.notify(hash.id, window.location.hash);
	        localRuntime.notify(length.id, window.history.length);

	      },0);
	      return callback(Task.succeed(Utils.Tuple0));
	    });
	  };

	  // replacePath : String -> Task error ()
	  var replacePath = function(urlpath){
	    return Task.asyncFunction(function(callback){
	      setTimeout(function(){
	        localRuntime.notify(path.id, urlpath);
	        window.history.replaceState({}, "", urlpath);
	        localRuntime.notify(hash.id, window.location.hash);
	        localRuntime.notify(length.id, window.history.length);
	      },0);
	      return callback(Task.succeed(Utils.Tuple0));
	    });
	  };

	  // go : Int -> Task error ()
	  var go = function(n){
	    return Task.asyncFunction(function(callback){
	      setTimeout(function(){
	        window.history.go(n);
	        localRuntime.notify(length.id, window.history.length);
	        localRuntime.notify(hash.id, window.location.hash);
	      }, 0);
	      return callback(Task.succeed(Utils.Tuple0));
	    });
	  };

	  // back : Task error ()
	  var back = Task.asyncFunction(function(callback){
	    setTimeout(function(){
	      localRuntime.notify(hash.id, window.location.hash);
	      window.history.back();
	      localRuntime.notify(length.id, window.history.length);

	    }, 0);
	    return callback(Task.succeed(Utils.Tuple0));
	  });

	  // forward : Task error ()
	  var forward = Task.asyncFunction(function(callback){
	    setTimeout(function(){
	      window.history.forward();
	      localRuntime.notify(length.id, window.history.length);
	      localRuntime.notify(hash.id, window.location.hash);
	    }, 0);
	    return callback(Task.succeed(Utils.Tuple0));
	  });



	  return {
	    path        : path,
	    setPath     : setPath,
	    replacePath : replacePath,
	    go          : go,
	    back        : back,
	    forward     : forward,
	    length      : length,
	    hash        : hash
	  };

	};

	Elm.History = Elm.History || {};
	Elm.History.make = function (_elm) {
	   "use strict";
	   _elm.History = _elm.History || {};
	   if (_elm.History.values) return _elm.History.values;
	   var _U = Elm.Native.Utils.make(_elm),
	   $Basics = Elm.Basics.make(_elm),
	   $Debug = Elm.Debug.make(_elm),
	   $List = Elm.List.make(_elm),
	   $Maybe = Elm.Maybe.make(_elm),
	   $Native$History = Elm.Native.History.make(_elm),
	   $Result = Elm.Result.make(_elm),
	   $Signal = Elm.Signal.make(_elm),
	   $Task = Elm.Task.make(_elm);
	   var _op = {};
	   var path = $Native$History.path;
	   var hash = $Native$History.hash;
	   var length = $Native$History.length;
	   var forward = $Native$History.forward;
	   var back = $Native$History.back;
	   var go = $Native$History.go;
	   var replacePath = $Native$History.replacePath;
	   var setPath = $Native$History.setPath;
	   return _elm.History.values = {_op: _op
	                                ,setPath: setPath
	                                ,replacePath: replacePath
	                                ,go: go
	                                ,back: back
	                                ,forward: forward
	                                ,length: length
	                                ,hash: hash
	                                ,path: path};
	};
	Elm.Native.Array = {};
	Elm.Native.Array.make = function(localRuntime) {

		localRuntime.Native = localRuntime.Native || {};
		localRuntime.Native.Array = localRuntime.Native.Array || {};
		if (localRuntime.Native.Array.values)
		{
			return localRuntime.Native.Array.values;
		}
		if ('values' in Elm.Native.Array)
		{
			return localRuntime.Native.Array.values = Elm.Native.Array.values;
		}

		var List = Elm.Native.List.make(localRuntime);

		// A RRB-Tree has two distinct data types.
		// Leaf -> "height"  is always 0
		//         "table"   is an array of elements
		// Node -> "height"  is always greater than 0
		//         "table"   is an array of child nodes
		//         "lengths" is an array of accumulated lengths of the child nodes

		// M is the maximal table size. 32 seems fast. E is the allowed increase
		// of search steps when concatting to find an index. Lower values will
		// decrease balancing, but will increase search steps.
		var M = 32;
		var E = 2;

		// An empty array.
		var empty = {
			ctor: '_Array',
			height: 0,
			table: []
		};


		function get(i, array)
		{
			if (i < 0 || i >= length(array))
			{
				throw new Error(
					'Index ' + i + ' is out of range. Check the length of ' +
					'your array first or use getMaybe or getWithDefault.');
			}
			return unsafeGet(i, array);
		}


		function unsafeGet(i, array)
		{
			for (var x = array.height; x > 0; x--)
			{
				var slot = i >> (x * 5);
				while (array.lengths[slot] <= i)
				{
					slot++;
				}
				if (slot > 0)
				{
					i -= array.lengths[slot - 1];
				}
				array = array.table[slot];
			}
			return array.table[i];
		}


		// Sets the value at the index i. Only the nodes leading to i will get
		// copied and updated.
		function set(i, item, array)
		{
			if (i < 0 || length(array) <= i)
			{
				return array;
			}
			return unsafeSet(i, item, array);
		}


		function unsafeSet(i, item, array)
		{
			array = nodeCopy(array);

			if (array.height === 0)
			{
				array.table[i] = item;
			}
			else
			{
				var slot = getSlot(i, array);
				if (slot > 0)
				{
					i -= array.lengths[slot - 1];
				}
				array.table[slot] = unsafeSet(i, item, array.table[slot]);
			}
			return array;
		}


		function initialize(len, f)
		{
			if (len <= 0)
			{
				return empty;
			}
			var h = Math.floor( Math.log(len) / Math.log(M) );
			return initialize_(f, h, 0, len);
		}

		function initialize_(f, h, from, to)
		{
			if (h === 0)
			{
				var table = new Array((to - from) % (M + 1));
				for (var i = 0; i < table.length; i++)
				{
				  table[i] = f(from + i);
				}
				return {
					ctor: '_Array',
					height: 0,
					table: table
				};
			}

			var step = Math.pow(M, h);
			var table = new Array(Math.ceil((to - from) / step));
			var lengths = new Array(table.length);
			for (var i = 0; i < table.length; i++)
			{
				table[i] = initialize_(f, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
				lengths[i] = length(table[i]) + (i > 0 ? lengths[i-1] : 0);
			}
			return {
				ctor: '_Array',
				height: h,
				table: table,
				lengths: lengths
			};
		}

		function fromList(list)
		{
			if (list === List.Nil)
			{
				return empty;
			}

			// Allocate M sized blocks (table) and write list elements to it.
			var table = new Array(M);
			var nodes = [];
			var i = 0;

			while (list.ctor !== '[]')
			{
				table[i] = list._0;
				list = list._1;
				i++;

				// table is full, so we can push a leaf containing it into the
				// next node.
				if (i === M)
				{
					var leaf = {
						ctor: '_Array',
						height: 0,
						table: table
					};
					fromListPush(leaf, nodes);
					table = new Array(M);
					i = 0;
				}
			}

			// Maybe there is something left on the table.
			if (i > 0)
			{
				var leaf = {
					ctor: '_Array',
					height: 0,
					table: table.splice(0, i)
				};
				fromListPush(leaf, nodes);
			}

			// Go through all of the nodes and eventually push them into higher nodes.
			for (var h = 0; h < nodes.length - 1; h++)
			{
				if (nodes[h].table.length > 0)
				{
					fromListPush(nodes[h], nodes);
				}
			}

			var head = nodes[nodes.length - 1];
			if (head.height > 0 && head.table.length === 1)
			{
				return head.table[0];
			}
			else
			{
				return head;
			}
		}

		// Push a node into a higher node as a child.
		function fromListPush(toPush, nodes)
		{
			var h = toPush.height;

			// Maybe the node on this height does not exist.
			if (nodes.length === h)
			{
				var node = {
					ctor: '_Array',
					height: h + 1,
					table: [],
					lengths: []
				};
				nodes.push(node);
			}

			nodes[h].table.push(toPush);
			var len = length(toPush);
			if (nodes[h].lengths.length > 0)
			{
				len += nodes[h].lengths[nodes[h].lengths.length - 1];
			}
			nodes[h].lengths.push(len);

			if (nodes[h].table.length === M)
			{
				fromListPush(nodes[h], nodes);
				nodes[h] = {
					ctor: '_Array',
					height: h + 1,
					table: [],
					lengths: []
				};
			}
		}

		// Pushes an item via push_ to the bottom right of a tree.
		function push(item, a)
		{
			var pushed = push_(item, a);
			if (pushed !== null)
			{
				return pushed;
			}

			var newTree = create(item, a.height);
			return siblise(a, newTree);
		}

		// Recursively tries to push an item to the bottom-right most
		// tree possible. If there is no space left for the item,
		// null will be returned.
		function push_(item, a)
		{
			// Handle resursion stop at leaf level.
			if (a.height === 0)
			{
				if (a.table.length < M)
				{
					var newA = {
						ctor: '_Array',
						height: 0,
						table: a.table.slice()
					};
					newA.table.push(item);
					return newA;
				}
				else
				{
				  return null;
				}
			}

			// Recursively push
			var pushed = push_(item, botRight(a));

			// There was space in the bottom right tree, so the slot will
			// be updated.
			if (pushed !== null)
			{
				var newA = nodeCopy(a);
				newA.table[newA.table.length - 1] = pushed;
				newA.lengths[newA.lengths.length - 1]++;
				return newA;
			}

			// When there was no space left, check if there is space left
			// for a new slot with a tree which contains only the item
			// at the bottom.
			if (a.table.length < M)
			{
				var newSlot = create(item, a.height - 1);
				var newA = nodeCopy(a);
				newA.table.push(newSlot);
				newA.lengths.push(newA.lengths[newA.lengths.length - 1] + length(newSlot));
				return newA;
			}
			else
			{
				return null;
			}
		}

		// Converts an array into a list of elements.
		function toList(a)
		{
			return toList_(List.Nil, a);
		}

		function toList_(list, a)
		{
			for (var i = a.table.length - 1; i >= 0; i--)
			{
				list =
					a.height === 0
						? List.Cons(a.table[i], list)
						: toList_(list, a.table[i]);
			}
			return list;
		}

		// Maps a function over the elements of an array.
		function map(f, a)
		{
			var newA = {
				ctor: '_Array',
				height: a.height,
				table: new Array(a.table.length)
			};
			if (a.height > 0)
			{
				newA.lengths = a.lengths;
			}
			for (var i = 0; i < a.table.length; i++)
			{
				newA.table[i] =
					a.height === 0
						? f(a.table[i])
						: map(f, a.table[i]);
			}
			return newA;
		}

		// Maps a function over the elements with their index as first argument.
		function indexedMap(f, a)
		{
			return indexedMap_(f, a, 0);
		}

		function indexedMap_(f, a, from)
		{
			var newA = {
				ctor: '_Array',
				height: a.height,
				table: new Array(a.table.length)
			};
			if (a.height > 0)
			{
				newA.lengths = a.lengths;
			}
			for (var i = 0; i < a.table.length; i++)
			{
				newA.table[i] =
					a.height === 0
						? A2(f, from + i, a.table[i])
						: indexedMap_(f, a.table[i], i == 0 ? from : from + a.lengths[i - 1]);
			}
			return newA;
		}

		function foldl(f, b, a)
		{
			if (a.height === 0)
			{
				for (var i = 0; i < a.table.length; i++)
				{
					b = A2(f, a.table[i], b);
				}
			}
			else
			{
				for (var i = 0; i < a.table.length; i++)
				{
					b = foldl(f, b, a.table[i]);
				}
			}
			return b;
		}

		function foldr(f, b, a)
		{
			if (a.height === 0)
			{
				for (var i = a.table.length; i--; )
				{
					b = A2(f, a.table[i], b);
				}
			}
			else
			{
				for (var i = a.table.length; i--; )
				{
					b = foldr(f, b, a.table[i]);
				}
			}
			return b;
		}

		// TODO: currently, it slices the right, then the left. This can be
		// optimized.
		function slice(from, to, a)
		{
			if (from < 0)
			{
				from += length(a);
			}
			if (to < 0)
			{
				to += length(a);
			}
			return sliceLeft(from, sliceRight(to, a));
		}

		function sliceRight(to, a)
		{
			if (to === length(a))
			{
				return a;
			}

			// Handle leaf level.
			if (a.height === 0)
			{
				var newA = { ctor:'_Array', height:0 };
				newA.table = a.table.slice(0, to);
				return newA;
			}

			// Slice the right recursively.
			var right = getSlot(to, a);
			var sliced = sliceRight(to - (right > 0 ? a.lengths[right - 1] : 0), a.table[right]);

			// Maybe the a node is not even needed, as sliced contains the whole slice.
			if (right === 0)
			{
				return sliced;
			}

			// Create new node.
			var newA = {
				ctor: '_Array',
				height: a.height,
				table: a.table.slice(0, right),
				lengths: a.lengths.slice(0, right)
			};
			if (sliced.table.length > 0)
			{
				newA.table[right] = sliced;
				newA.lengths[right] = length(sliced) + (right > 0 ? newA.lengths[right - 1] : 0);
			}
			return newA;
		}

		function sliceLeft(from, a)
		{
			if (from === 0)
			{
				return a;
			}

			// Handle leaf level.
			if (a.height === 0)
			{
				var newA = { ctor:'_Array', height:0 };
				newA.table = a.table.slice(from, a.table.length + 1);
				return newA;
			}

			// Slice the left recursively.
			var left = getSlot(from, a);
			var sliced = sliceLeft(from - (left > 0 ? a.lengths[left - 1] : 0), a.table[left]);

			// Maybe the a node is not even needed, as sliced contains the whole slice.
			if (left === a.table.length - 1)
			{
				return sliced;
			}

			// Create new node.
			var newA = {
				ctor: '_Array',
				height: a.height,
				table: a.table.slice(left, a.table.length + 1),
				lengths: new Array(a.table.length - left)
			};
			newA.table[0] = sliced;
			var len = 0;
			for (var i = 0; i < newA.table.length; i++)
			{
				len += length(newA.table[i]);
				newA.lengths[i] = len;
			}

			return newA;
		}

		// Appends two trees.
		function append(a,b)
		{
			if (a.table.length === 0)
			{
				return b;
			}
			if (b.table.length === 0)
			{
				return a;
			}

			var c = append_(a, b);

			// Check if both nodes can be crunshed together.
			if (c[0].table.length + c[1].table.length <= M)
			{
				if (c[0].table.length === 0)
				{
					return c[1];
				}
				if (c[1].table.length === 0)
				{
					return c[0];
				}

				// Adjust .table and .lengths
				c[0].table = c[0].table.concat(c[1].table);
				if (c[0].height > 0)
				{
					var len = length(c[0]);
					for (var i = 0; i < c[1].lengths.length; i++)
					{
						c[1].lengths[i] += len;
					}
					c[0].lengths = c[0].lengths.concat(c[1].lengths);
				}

				return c[0];
			}

			if (c[0].height > 0)
			{
				var toRemove = calcToRemove(a, b);
				if (toRemove > E)
				{
					c = shuffle(c[0], c[1], toRemove);
				}
			}

			return siblise(c[0], c[1]);
		}

		// Returns an array of two nodes; right and left. One node _may_ be empty.
		function append_(a, b)
		{
			if (a.height === 0 && b.height === 0)
			{
				return [a, b];
			}

			if (a.height !== 1 || b.height !== 1)
			{
				if (a.height === b.height)
				{
					a = nodeCopy(a);
					b = nodeCopy(b);
					var appended = append_(botRight(a), botLeft(b));

					insertRight(a, appended[1]);
					insertLeft(b, appended[0]);
				}
				else if (a.height > b.height)
				{
					a = nodeCopy(a);
					var appended = append_(botRight(a), b);

					insertRight(a, appended[0]);
					b = parentise(appended[1], appended[1].height + 1);
				}
				else
				{
					b = nodeCopy(b);
					var appended = append_(a, botLeft(b));

					var left = appended[0].table.length === 0 ? 0 : 1;
					var right = left === 0 ? 1 : 0;
					insertLeft(b, appended[left]);
					a = parentise(appended[right], appended[right].height + 1);
				}
			}

			// Check if balancing is needed and return based on that.
			if (a.table.length === 0 || b.table.length === 0)
			{
				return [a, b];
			}

			var toRemove = calcToRemove(a, b);
			if (toRemove <= E)
			{
				return [a, b];
			}
			return shuffle(a, b, toRemove);
		}

		// Helperfunctions for append_. Replaces a child node at the side of the parent.
		function insertRight(parent, node)
		{
			var index = parent.table.length - 1;
			parent.table[index] = node;
			parent.lengths[index] = length(node);
			parent.lengths[index] += index > 0 ? parent.lengths[index - 1] : 0;
		}

		function insertLeft(parent, node)
		{
			if (node.table.length > 0)
			{
				parent.table[0] = node;
				parent.lengths[0] = length(node);

				var len = length(parent.table[0]);
				for (var i = 1; i < parent.lengths.length; i++)
				{
					len += length(parent.table[i]);
					parent.lengths[i] = len;
				}
			}
			else
			{
				parent.table.shift();
				for (var i = 1; i < parent.lengths.length; i++)
				{
					parent.lengths[i] = parent.lengths[i] - parent.lengths[0];
				}
				parent.lengths.shift();
			}
		}

		// Returns the extra search steps for E. Refer to the paper.
		function calcToRemove(a, b)
		{
			var subLengths = 0;
			for (var i = 0; i < a.table.length; i++)
			{
				subLengths += a.table[i].table.length;
			}
			for (var i = 0; i < b.table.length; i++)
			{
				subLengths += b.table[i].table.length;
			}

			var toRemove = a.table.length + b.table.length;
			return toRemove - (Math.floor((subLengths - 1) / M) + 1);
		}

		// get2, set2 and saveSlot are helpers for accessing elements over two arrays.
		function get2(a, b, index)
		{
			return index < a.length
				? a[index]
				: b[index - a.length];
		}

		function set2(a, b, index, value)
		{
			if (index < a.length)
			{
				a[index] = value;
			}
			else
			{
				b[index - a.length] = value;
			}
		}

		function saveSlot(a, b, index, slot)
		{
			set2(a.table, b.table, index, slot);

			var l = (index === 0 || index === a.lengths.length)
				? 0
				: get2(a.lengths, a.lengths, index - 1);

			set2(a.lengths, b.lengths, index, l + length(slot));
		}

		// Creates a node or leaf with a given length at their arrays for perfomance.
		// Is only used by shuffle.
		function createNode(h, length)
		{
			if (length < 0)
			{
				length = 0;
			}
			var a = {
				ctor: '_Array',
				height: h,
				table: new Array(length)
			};
			if (h > 0)
			{
				a.lengths = new Array(length);
			}
			return a;
		}

		// Returns an array of two balanced nodes.
		function shuffle(a, b, toRemove)
		{
			var newA = createNode(a.height, Math.min(M, a.table.length + b.table.length - toRemove));
			var newB = createNode(a.height, newA.table.length - (a.table.length + b.table.length - toRemove));

			// Skip the slots with size M. More precise: copy the slot references
			// to the new node
			var read = 0;
			while (get2(a.table, b.table, read).table.length % M === 0)
			{
				set2(newA.table, newB.table, read, get2(a.table, b.table, read));
				set2(newA.lengths, newB.lengths, read, get2(a.lengths, b.lengths, read));
				read++;
			}

			// Pulling items from left to right, caching in a slot before writing
			// it into the new nodes.
			var write = read;
			var slot = new createNode(a.height - 1, 0);
			var from = 0;

			// If the current slot is still containing data, then there will be at
			// least one more write, so we do not break this loop yet.
			while (read - write - (slot.table.length > 0 ? 1 : 0) < toRemove)
			{
				// Find out the max possible items for copying.
				var source = get2(a.table, b.table, read);
				var to = Math.min(M - slot.table.length, source.table.length);

				// Copy and adjust size table.
				slot.table = slot.table.concat(source.table.slice(from, to));
				if (slot.height > 0)
				{
					var len = slot.lengths.length;
					for (var i = len; i < len + to - from; i++)
					{
						slot.lengths[i] = length(slot.table[i]);
						slot.lengths[i] += (i > 0 ? slot.lengths[i - 1] : 0);
					}
				}

				from += to;

				// Only proceed to next slots[i] if the current one was
				// fully copied.
				if (source.table.length <= to)
				{
					read++; from = 0;
				}

				// Only create a new slot if the current one is filled up.
				if (slot.table.length === M)
				{
					saveSlot(newA, newB, write, slot);
					slot = createNode(a.height - 1, 0);
					write++;
				}
			}

			// Cleanup after the loop. Copy the last slot into the new nodes.
			if (slot.table.length > 0)
			{
				saveSlot(newA, newB, write, slot);
				write++;
			}

			// Shift the untouched slots to the left
			while (read < a.table.length + b.table.length )
			{
				saveSlot(newA, newB, write, get2(a.table, b.table, read));
				read++;
				write++;
			}

			return [newA, newB];
		}

		// Navigation functions
		function botRight(a)
		{
			return a.table[a.table.length - 1];
		}
		function botLeft(a)
		{
			return a.table[0];
		}

		// Copies a node for updating. Note that you should not use this if
		// only updating only one of "table" or "lengths" for performance reasons.
		function nodeCopy(a)
		{
			var newA = {
				ctor: '_Array',
				height: a.height,
				table: a.table.slice()
			};
			if (a.height > 0)
			{
				newA.lengths = a.lengths.slice();
			}
			return newA;
		}

		// Returns how many items are in the tree.
		function length(array)
		{
			if (array.height === 0)
			{
				return array.table.length;
			}
			else
			{
				return array.lengths[array.lengths.length - 1];
			}
		}

		// Calculates in which slot of "table" the item probably is, then
		// find the exact slot via forward searching in  "lengths". Returns the index.
		function getSlot(i, a)
		{
			var slot = i >> (5 * a.height);
			while (a.lengths[slot] <= i)
			{
				slot++;
			}
			return slot;
		}

		// Recursively creates a tree with a given height containing
		// only the given item.
		function create(item, h)
		{
			if (h === 0)
			{
				return {
					ctor: '_Array',
					height: 0,
					table: [item]
				};
			}
			return {
				ctor: '_Array',
				height: h,
				table: [create(item, h - 1)],
				lengths: [1]
			};
		}

		// Recursively creates a tree that contains the given tree.
		function parentise(tree, h)
		{
			if (h === tree.height)
			{
				return tree;
			}

			return {
				ctor: '_Array',
				height: h,
				table: [parentise(tree, h - 1)],
				lengths: [length(tree)]
			};
		}

		// Emphasizes blood brotherhood beneath two trees.
		function siblise(a, b)
		{
			return {
				ctor: '_Array',
				height: a.height + 1,
				table: [a, b],
				lengths: [length(a), length(a) + length(b)]
			};
		}

		function toJSArray(a)
		{
			var jsArray = new Array(length(a));
			toJSArray_(jsArray, 0, a);
			return jsArray;
		}

		function toJSArray_(jsArray, i, a)
		{
			for (var t = 0; t < a.table.length; t++)
			{
				if (a.height === 0)
				{
					jsArray[i + t] = a.table[t];
				}
				else
				{
					var inc = t === 0 ? 0 : a.lengths[t - 1];
					toJSArray_(jsArray, i + inc, a.table[t]);
				}
			}
		}

		function fromJSArray(jsArray)
		{
			if (jsArray.length === 0)
			{
				return empty;
			}
			var h = Math.floor(Math.log(jsArray.length) / Math.log(M));
			return fromJSArray_(jsArray, h, 0, jsArray.length);
		}

		function fromJSArray_(jsArray, h, from, to)
		{
			if (h === 0)
			{
				return {
					ctor: '_Array',
					height: 0,
					table: jsArray.slice(from, to)
				};
			}

			var step = Math.pow(M, h);
			var table = new Array(Math.ceil((to - from) / step));
			var lengths = new Array(table.length);
			for (var i = 0; i < table.length; i++)
			{
				table[i] = fromJSArray_(jsArray, h - 1, from + (i * step), Math.min(from + ((i + 1) * step), to));
				lengths[i] = length(table[i]) + (i > 0 ? lengths[i - 1] : 0);
			}
			return {
				ctor: '_Array',
				height: h,
				table: table,
				lengths: lengths
			};
		}

		Elm.Native.Array.values = {
			empty: empty,
			fromList: fromList,
			toList: toList,
			initialize: F2(initialize),
			append: F2(append),
			push: F2(push),
			slice: F3(slice),
			get: F2(get),
			set: F3(set),
			map: F2(map),
			indexedMap: F2(indexedMap),
			foldl: F3(foldl),
			foldr: F3(foldr),
			length: length,

			toJSArray: toJSArray,
			fromJSArray: fromJSArray
		};

		return localRuntime.Native.Array.values = Elm.Native.Array.values;
	};

	Elm.Array = Elm.Array || {};
	Elm.Array.make = function (_elm) {
	   "use strict";
	   _elm.Array = _elm.Array || {};
	   if (_elm.Array.values) return _elm.Array.values;
	   var _U = Elm.Native.Utils.make(_elm),
	   $Basics = Elm.Basics.make(_elm),
	   $List = Elm.List.make(_elm),
	   $Maybe = Elm.Maybe.make(_elm),
	   $Native$Array = Elm.Native.Array.make(_elm);
	   var _op = {};
	   var append = $Native$Array.append;
	   var length = $Native$Array.length;
	   var isEmpty = function (array) {
	      return _U.eq(length(array),0);
	   };
	   var slice = $Native$Array.slice;
	   var set = $Native$Array.set;
	   var get = F2(function (i,array) {
	      return _U.cmp(0,i) < 1 && _U.cmp(i,
	      $Native$Array.length(array)) < 0 ? $Maybe.Just(A2($Native$Array.get,
	      i,
	      array)) : $Maybe.Nothing;
	   });
	   var push = $Native$Array.push;
	   var empty = $Native$Array.empty;
	   var filter = F2(function (isOkay,arr) {
	      var update = F2(function (x,xs) {
	         return isOkay(x) ? A2($Native$Array.push,x,xs) : xs;
	      });
	      return A3($Native$Array.foldl,update,$Native$Array.empty,arr);
	   });
	   var foldr = $Native$Array.foldr;
	   var foldl = $Native$Array.foldl;
	   var indexedMap = $Native$Array.indexedMap;
	   var map = $Native$Array.map;
	   var toIndexedList = function (array) {
	      return A3($List.map2,
	      F2(function (v0,v1) {
	         return {ctor: "_Tuple2",_0: v0,_1: v1};
	      }),
	      _U.range(0,$Native$Array.length(array) - 1),
	      $Native$Array.toList(array));
	   };
	   var toList = $Native$Array.toList;
	   var fromList = $Native$Array.fromList;
	   var initialize = $Native$Array.initialize;
	   var repeat = F2(function (n,e) {
	      return A2(initialize,n,$Basics.always(e));
	   });
	   var Array = {ctor: "Array"};
	   return _elm.Array.values = {_op: _op
	                              ,empty: empty
	                              ,repeat: repeat
	                              ,initialize: initialize
	                              ,fromList: fromList
	                              ,isEmpty: isEmpty
	                              ,length: length
	                              ,push: push
	                              ,append: append
	                              ,get: get
	                              ,set: set
	                              ,slice: slice
	                              ,toList: toList
	                              ,toIndexedList: toIndexedList
	                              ,map: map
	                              ,indexedMap: indexedMap
	                              ,filter: filter
	                              ,foldl: foldl
	                              ,foldr: foldr};
	};
	Elm.Native.Char = {};
	Elm.Native.Char.make = function(localRuntime) {
		localRuntime.Native = localRuntime.Native || {};
		localRuntime.Native.Char = localRuntime.Native.Char || {};
		if (localRuntime.Native.Char.values)
		{
			return localRuntime.Native.Char.values;
		}

		var Utils = Elm.Native.Utils.make(localRuntime);

		return localRuntime.Native.Char.values = {
			fromCode: function(c) { return Utils.chr(String.fromCharCode(c)); },
			toCode: function(c) { return c.charCodeAt(0); },
			toUpper: function(c) { return Utils.chr(c.toUpperCase()); },
			toLower: function(c) { return Utils.chr(c.toLowerCase()); },
			toLocaleUpper: function(c) { return Utils.chr(c.toLocaleUpperCase()); },
			toLocaleLower: function(c) { return Utils.chr(c.toLocaleLowerCase()); }
		};
	};

	Elm.Char = Elm.Char || {};
	Elm.Char.make = function (_elm) {
	   "use strict";
	   _elm.Char = _elm.Char || {};
	   if (_elm.Char.values) return _elm.Char.values;
	   var _U = Elm.Native.Utils.make(_elm),
	   $Basics = Elm.Basics.make(_elm),
	   $Native$Char = Elm.Native.Char.make(_elm);
	   var _op = {};
	   var fromCode = $Native$Char.fromCode;
	   var toCode = $Native$Char.toCode;
	   var toLocaleLower = $Native$Char.toLocaleLower;
	   var toLocaleUpper = $Native$Char.toLocaleUpper;
	   var toLower = $Native$Char.toLower;
	   var toUpper = $Native$Char.toUpper;
	   var isBetween = F3(function (low,high,$char) {
	      var code = toCode($char);
	      return _U.cmp(code,toCode(low)) > -1 && _U.cmp(code,
	      toCode(high)) < 1;
	   });
	   var isUpper = A2(isBetween,_U.chr("A"),_U.chr("Z"));
	   var isLower = A2(isBetween,_U.chr("a"),_U.chr("z"));
	   var isDigit = A2(isBetween,_U.chr("0"),_U.chr("9"));
	   var isOctDigit = A2(isBetween,_U.chr("0"),_U.chr("7"));
	   var isHexDigit = function ($char) {
	      return isDigit($char) || (A3(isBetween,
	      _U.chr("a"),
	      _U.chr("f"),
	      $char) || A3(isBetween,_U.chr("A"),_U.chr("F"),$char));
	   };
	   return _elm.Char.values = {_op: _op
	                             ,isUpper: isUpper
	                             ,isLower: isLower
	                             ,isDigit: isDigit
	                             ,isOctDigit: isOctDigit
	                             ,isHexDigit: isHexDigit
	                             ,toUpper: toUpper
	                             ,toLower: toLower
	                             ,toLocaleUpper: toLocaleUpper
	                             ,toLocaleLower: toLocaleLower
	                             ,toCode: toCode
	                             ,fromCode: fromCode};
	};
	Elm.Native.Time = {};

	Elm.Native.Time.make = function(localRuntime)
	{
		localRuntime.Native = localRuntime.Native || {};
		localRuntime.Native.Time = localRuntime.Native.Time || {};
		if (localRuntime.Native.Time.values)
		{
			return localRuntime.Native.Time.values;
		}

		var NS = Elm.Native.Signal.make(localRuntime);
		var Maybe = Elm.Maybe.make(localRuntime);


		// FRAMES PER SECOND

		function fpsWhen(desiredFPS, isOn)
		{
			var msPerFrame = 1000 / desiredFPS;
			var ticker = NS.input('fps-' + desiredFPS, null);

			function notifyTicker()
			{
				localRuntime.notify(ticker.id, null);
			}

			function firstArg(x, y)
			{
				return x;
			}

			// input fires either when isOn changes, or when ticker fires.
			// Its value is a tuple with the current timestamp, and the state of isOn
			var input = NS.timestamp(A3(NS.map2, F2(firstArg), NS.dropRepeats(isOn), ticker));

			var initialState = {
				isOn: false,
				time: localRuntime.timer.programStart,
				delta: 0
			};

			var timeoutId;

			function update(input, state)
			{
				var currentTime = input._0;
				var isOn = input._1;
				var wasOn = state.isOn;
				var previousTime = state.time;

				if (isOn)
				{
					timeoutId = localRuntime.setTimeout(notifyTicker, msPerFrame);
				}
				else if (wasOn)
				{
					clearTimeout(timeoutId);
				}

				return {
					isOn: isOn,
					time: currentTime,
					delta: (isOn && !wasOn) ? 0 : currentTime - previousTime
				};
			}

			return A2(
				NS.map,
				function(state) { return state.delta; },
				A3(NS.foldp, F2(update), update(input.value, initialState), input)
			);
		}


		// EVERY

		function every(t)
		{
			var ticker = NS.input('every-' + t, null);
			function tellTime()
			{
				localRuntime.notify(ticker.id, null);
			}
			var clock = A2(NS.map, fst, NS.timestamp(ticker));
			setInterval(tellTime, t);
			return clock;
		}


		function fst(pair)
		{
			return pair._0;
		}


		function read(s)
		{
			var t = Date.parse(s);
			return isNaN(t) ? Maybe.Nothing : Maybe.Just(t);
		}

		return localRuntime.Native.Time.values = {
			fpsWhen: F2(fpsWhen),
			every: every,
			toDate: function(t) { return new Date(t); },
			read: read
		};
	};

	Elm.Time = Elm.Time || {};
	Elm.Time.make = function (_elm) {
	   "use strict";
	   _elm.Time = _elm.Time || {};
	   if (_elm.Time.values) return _elm.Time.values;
	   var _U = Elm.Native.Utils.make(_elm),
	   $Basics = Elm.Basics.make(_elm),
	   $Native$Signal = Elm.Native.Signal.make(_elm),
	   $Native$Time = Elm.Native.Time.make(_elm),
	   $Signal = Elm.Signal.make(_elm);
	   var _op = {};
	   var delay = $Native$Signal.delay;
	   var since = F2(function (time,signal) {
	      var stop = A2($Signal.map,
	      $Basics.always(-1),
	      A2(delay,time,signal));
	      var start = A2($Signal.map,$Basics.always(1),signal);
	      var delaydiff = A3($Signal.foldp,
	      F2(function (x,y) {    return x + y;}),
	      0,
	      A2($Signal.merge,start,stop));
	      return A2($Signal.map,
	      F2(function (x,y) {    return !_U.eq(x,y);})(0),
	      delaydiff);
	   });
	   var timestamp = $Native$Signal.timestamp;
	   var every = $Native$Time.every;
	   var fpsWhen = $Native$Time.fpsWhen;
	   var fps = function (targetFrames) {
	      return A2(fpsWhen,targetFrames,$Signal.constant(true));
	   };
	   var inMilliseconds = function (t) {    return t;};
	   var millisecond = 1;
	   var second = 1000 * millisecond;
	   var minute = 60 * second;
	   var hour = 60 * minute;
	   var inHours = function (t) {    return t / hour;};
	   var inMinutes = function (t) {    return t / minute;};
	   var inSeconds = function (t) {    return t / second;};
	   return _elm.Time.values = {_op: _op
	                             ,millisecond: millisecond
	                             ,second: second
	                             ,minute: minute
	                             ,hour: hour
	                             ,inMilliseconds: inMilliseconds
	                             ,inSeconds: inSeconds
	                             ,inMinutes: inMinutes
	                             ,inHours: inHours
	                             ,fps: fps
	                             ,fpsWhen: fpsWhen
	                             ,every: every
	                             ,timestamp: timestamp
	                             ,delay: delay
	                             ,since: since};
	};
	Elm.Native.String = {};

	Elm.Native.String.make = function(localRuntime) {
		localRuntime.Native = localRuntime.Native || {};
		localRuntime.Native.String = localRuntime.Native.String || {};
		if (localRuntime.Native.String.values)
		{
			return localRuntime.Native.String.values;
		}
		if ('values' in Elm.Native.String)
		{
			return localRuntime.Native.String.values = Elm.Native.String.values;
		}


		var Char = Elm.Char.make(localRuntime);
		var List = Elm.Native.List.make(localRuntime);
		var Maybe = Elm.Maybe.make(localRuntime);
		var Result = Elm.Result.make(localRuntime);
		var Utils = Elm.Native.Utils.make(localRuntime);

		function isEmpty(str)
		{
			return str.length === 0;
		}
		function cons(chr, str)
		{
			return chr + str;
		}
		function uncons(str)
		{
			var hd = str[0];
			if (hd)
			{
				return Maybe.Just(Utils.Tuple2(Utils.chr(hd), str.slice(1)));
			}
			return Maybe.Nothing;
		}
		function append(a, b)
		{
			return a + b;
		}
		function concat(strs)
		{
			return List.toArray(strs).join('');
		}
		function length(str)
		{
			return str.length;
		}
		function map(f, str)
		{
			var out = str.split('');
			for (var i = out.length; i--; )
			{
				out[i] = f(Utils.chr(out[i]));
			}
			return out.join('');
		}
		function filter(pred, str)
		{
			return str.split('').map(Utils.chr).filter(pred).join('');
		}
		function reverse(str)
		{
			return str.split('').reverse().join('');
		}
		function foldl(f, b, str)
		{
			var len = str.length;
			for (var i = 0; i < len; ++i)
			{
				b = A2(f, Utils.chr(str[i]), b);
			}
			return b;
		}
		function foldr(f, b, str)
		{
			for (var i = str.length; i--; )
			{
				b = A2(f, Utils.chr(str[i]), b);
			}
			return b;
		}
		function split(sep, str)
		{
			return List.fromArray(str.split(sep));
		}
		function join(sep, strs)
		{
			return List.toArray(strs).join(sep);
		}
		function repeat(n, str)
		{
			var result = '';
			while (n > 0)
			{
				if (n & 1)
				{
					result += str;
				}
				n >>= 1, str += str;
			}
			return result;
		}
		function slice(start, end, str)
		{
			return str.slice(start, end);
		}
		function left(n, str)
		{
			return n < 1 ? '' : str.slice(0, n);
		}
		function right(n, str)
		{
			return n < 1 ? '' : str.slice(-n);
		}
		function dropLeft(n, str)
		{
			return n < 1 ? str : str.slice(n);
		}
		function dropRight(n, str)
		{
			return n < 1 ? str : str.slice(0, -n);
		}
		function pad(n, chr, str)
		{
			var half = (n - str.length) / 2;
			return repeat(Math.ceil(half), chr) + str + repeat(half | 0, chr);
		}
		function padRight(n, chr, str)
		{
			return str + repeat(n - str.length, chr);
		}
		function padLeft(n, chr, str)
		{
			return repeat(n - str.length, chr) + str;
		}

		function trim(str)
		{
			return str.trim();
		}
		function trimLeft(str)
		{
			return str.replace(/^\s+/, '');
		}
		function trimRight(str)
		{
			return str.replace(/\s+$/, '');
		}

		function words(str)
		{
			return List.fromArray(str.trim().split(/\s+/g));
		}
		function lines(str)
		{
			return List.fromArray(str.split(/\r\n|\r|\n/g));
		}

		function toUpper(str)
		{
			return str.toUpperCase();
		}
		function toLower(str)
		{
			return str.toLowerCase();
		}

		function any(pred, str)
		{
			for (var i = str.length; i--; )
			{
				if (pred(Utils.chr(str[i])))
				{
					return true;
				}
			}
			return false;
		}
		function all(pred, str)
		{
			for (var i = str.length; i--; )
			{
				if (!pred(Utils.chr(str[i])))
				{
					return false;
				}
			}
			return true;
		}

		function contains(sub, str)
		{
			return str.indexOf(sub) > -1;
		}
		function startsWith(sub, str)
		{
			return str.indexOf(sub) === 0;
		}
		function endsWith(sub, str)
		{
			return str.length >= sub.length &&
				str.lastIndexOf(sub) === str.length - sub.length;
		}
		function indexes(sub, str)
		{
			var subLen = sub.length;
			var i = 0;
			var is = [];
			while ((i = str.indexOf(sub, i)) > -1)
			{
				is.push(i);
				i = i + subLen;
			}
			return List.fromArray(is);
		}

		function toInt(s)
		{
			var len = s.length;
			if (len === 0)
			{
				return Result.Err("could not convert string '" + s + "' to an Int" );
			}
			var start = 0;
			if (s[0] === '-')
			{
				if (len === 1)
				{
					return Result.Err("could not convert string '" + s + "' to an Int" );
				}
				start = 1;
			}
			for (var i = start; i < len; ++i)
			{
				if (!Char.isDigit(s[i]))
				{
					return Result.Err("could not convert string '" + s + "' to an Int" );
				}
			}
			return Result.Ok(parseInt(s, 10));
		}

		function toFloat(s)
		{
			var len = s.length;
			if (len === 0)
			{
				return Result.Err("could not convert string '" + s + "' to a Float" );
			}
			var start = 0;
			if (s[0] === '-')
			{
				if (len === 1)
				{
					return Result.Err("could not convert string '" + s + "' to a Float" );
				}
				start = 1;
			}
			var dotCount = 0;
			for (var i = start; i < len; ++i)
			{
				if (Char.isDigit(s[i]))
				{
					continue;
				}
				if (s[i] === '.')
				{
					dotCount += 1;
					if (dotCount <= 1)
					{
						continue;
					}
				}
				return Result.Err("could not convert string '" + s + "' to a Float" );
			}
			return Result.Ok(parseFloat(s));
		}

		function toList(str)
		{
			return List.fromArray(str.split('').map(Utils.chr));
		}
		function fromList(chars)
		{
			return List.toArray(chars).join('');
		}

		return Elm.Native.String.values = {
			isEmpty: isEmpty,
			cons: F2(cons),
			uncons: uncons,
			append: F2(append),
			concat: concat,
			length: length,
			map: F2(map),
			filter: F2(filter),
			reverse: reverse,
			foldl: F3(foldl),
			foldr: F3(foldr),

			split: F2(split),
			join: F2(join),
			repeat: F2(repeat),

			slice: F3(slice),
			left: F2(left),
			right: F2(right),
			dropLeft: F2(dropLeft),
			dropRight: F2(dropRight),

			pad: F3(pad),
			padLeft: F3(padLeft),
			padRight: F3(padRight),

			trim: trim,
			trimLeft: trimLeft,
			trimRight: trimRight,

			words: words,
			lines: lines,

			toUpper: toUpper,
			toLower: toLower,

			any: F2(any),
			all: F2(all),

			contains: F2(contains),
			startsWith: F2(startsWith),
			endsWith: F2(endsWith),
			indexes: F2(indexes),

			toInt: toInt,
			toFloat: toFloat,
			toList: toList,
			fromList: fromList
		};
	};

	Elm.String = Elm.String || {};
	Elm.String.make = function (_elm) {
	   "use strict";
	   _elm.String = _elm.String || {};
	   if (_elm.String.values) return _elm.String.values;
	   var _U = Elm.Native.Utils.make(_elm),
	   $Maybe = Elm.Maybe.make(_elm),
	   $Native$String = Elm.Native.String.make(_elm),
	   $Result = Elm.Result.make(_elm);
	   var _op = {};
	   var fromList = $Native$String.fromList;
	   var toList = $Native$String.toList;
	   var toFloat = $Native$String.toFloat;
	   var toInt = $Native$String.toInt;
	   var indices = $Native$String.indexes;
	   var indexes = $Native$String.indexes;
	   var endsWith = $Native$String.endsWith;
	   var startsWith = $Native$String.startsWith;
	   var contains = $Native$String.contains;
	   var all = $Native$String.all;
	   var any = $Native$String.any;
	   var toLower = $Native$String.toLower;
	   var toUpper = $Native$String.toUpper;
	   var lines = $Native$String.lines;
	   var words = $Native$String.words;
	   var trimRight = $Native$String.trimRight;
	   var trimLeft = $Native$String.trimLeft;
	   var trim = $Native$String.trim;
	   var padRight = $Native$String.padRight;
	   var padLeft = $Native$String.padLeft;
	   var pad = $Native$String.pad;
	   var dropRight = $Native$String.dropRight;
	   var dropLeft = $Native$String.dropLeft;
	   var right = $Native$String.right;
	   var left = $Native$String.left;
	   var slice = $Native$String.slice;
	   var repeat = $Native$String.repeat;
	   var join = $Native$String.join;
	   var split = $Native$String.split;
	   var foldr = $Native$String.foldr;
	   var foldl = $Native$String.foldl;
	   var reverse = $Native$String.reverse;
	   var filter = $Native$String.filter;
	   var map = $Native$String.map;
	   var length = $Native$String.length;
	   var concat = $Native$String.concat;
	   var append = $Native$String.append;
	   var uncons = $Native$String.uncons;
	   var cons = $Native$String.cons;
	   var fromChar = function ($char) {    return A2(cons,$char,"");};
	   var isEmpty = $Native$String.isEmpty;
	   return _elm.String.values = {_op: _op
	                               ,isEmpty: isEmpty
	                               ,length: length
	                               ,reverse: reverse
	                               ,repeat: repeat
	                               ,cons: cons
	                               ,uncons: uncons
	                               ,fromChar: fromChar
	                               ,append: append
	                               ,concat: concat
	                               ,split: split
	                               ,join: join
	                               ,words: words
	                               ,lines: lines
	                               ,slice: slice
	                               ,left: left
	                               ,right: right
	                               ,dropLeft: dropLeft
	                               ,dropRight: dropRight
	                               ,contains: contains
	                               ,startsWith: startsWith
	                               ,endsWith: endsWith
	                               ,indexes: indexes
	                               ,indices: indices
	                               ,toInt: toInt
	                               ,toFloat: toFloat
	                               ,toList: toList
	                               ,fromList: fromList
	                               ,toUpper: toUpper
	                               ,toLower: toLower
	                               ,pad: pad
	                               ,padLeft: padLeft
	                               ,padRight: padRight
	                               ,trim: trim
	                               ,trimLeft: trimLeft
	                               ,trimRight: trimRight
	                               ,map: map
	                               ,filter: filter
	                               ,foldl: foldl
	                               ,foldr: foldr
	                               ,any: any
	                               ,all: all};
	};
	Elm.Dict = Elm.Dict || {};
	Elm.Dict.make = function (_elm) {
	   "use strict";
	   _elm.Dict = _elm.Dict || {};
	   if (_elm.Dict.values) return _elm.Dict.values;
	   var _U = Elm.Native.Utils.make(_elm),
	   $Basics = Elm.Basics.make(_elm),
	   $List = Elm.List.make(_elm),
	   $Maybe = Elm.Maybe.make(_elm),
	   $Native$Debug = Elm.Native.Debug.make(_elm),
	   $String = Elm.String.make(_elm);
	   var _op = {};
	   var foldr = F3(function (f,acc,t) {
	      foldr: while (true) {
	         var _p0 = t;
	         if (_p0.ctor === "RBEmpty_elm_builtin") {
	               return acc;
	            } else {
	               var _v1 = f,
	               _v2 = A3(f,_p0._1,_p0._2,A3(foldr,f,acc,_p0._4)),
	               _v3 = _p0._3;
	               f = _v1;
	               acc = _v2;
	               t = _v3;
	               continue foldr;
	            }
	      }
	   });
	   var keys = function (dict) {
	      return A3(foldr,
	      F3(function (key,value,keyList) {
	         return A2($List._op["::"],key,keyList);
	      }),
	      _U.list([]),
	      dict);
	   };
	   var values = function (dict) {
	      return A3(foldr,
	      F3(function (key,value,valueList) {
	         return A2($List._op["::"],value,valueList);
	      }),
	      _U.list([]),
	      dict);
	   };
	   var toList = function (dict) {
	      return A3(foldr,
	      F3(function (key,value,list) {
	         return A2($List._op["::"],
	         {ctor: "_Tuple2",_0: key,_1: value},
	         list);
	      }),
	      _U.list([]),
	      dict);
	   };
	   var foldl = F3(function (f,acc,dict) {
	      foldl: while (true) {
	         var _p1 = dict;
	         if (_p1.ctor === "RBEmpty_elm_builtin") {
	               return acc;
	            } else {
	               var _v5 = f,
	               _v6 = A3(f,_p1._1,_p1._2,A3(foldl,f,acc,_p1._3)),
	               _v7 = _p1._4;
	               f = _v5;
	               acc = _v6;
	               dict = _v7;
	               continue foldl;
	            }
	      }
	   });
	   var reportRemBug = F4(function (msg,c,lgot,rgot) {
	      return $Native$Debug.crash($String.concat(_U.list(["Internal red-black tree invariant violated, expected "
	                                                        ,msg
	                                                        ," and got "
	                                                        ,$Basics.toString(c)
	                                                        ,"/"
	                                                        ,lgot
	                                                        ,"/"
	                                                        ,rgot
	                                                        ,"\nPlease report this bug to <https://github.com/elm-lang/core/issues>"])));
	   });
	   var isBBlack = function (dict) {
	      var _p2 = dict;
	      _v8_2: do {
	         if (_p2.ctor === "RBNode_elm_builtin") {
	               if (_p2._0.ctor === "BBlack") {
	                     return true;
	                  } else {
	                     break _v8_2;
	                  }
	            } else {
	               if (_p2._0.ctor === "LBBlack") {
	                     return true;
	                  } else {
	                     break _v8_2;
	                  }
	            }
	      } while (false);
	      return false;
	   };
	   var Same = {ctor: "Same"};
	   var Remove = {ctor: "Remove"};
	   var Insert = {ctor: "Insert"};
	   var sizeHelp = F2(function (n,dict) {
	      sizeHelp: while (true) {
	         var _p3 = dict;
	         if (_p3.ctor === "RBEmpty_elm_builtin") {
	               return n;
	            } else {
	               var _v10 = A2(sizeHelp,n + 1,_p3._4),_v11 = _p3._3;
	               n = _v10;
	               dict = _v11;
	               continue sizeHelp;
	            }
	      }
	   });
	   var size = function (dict) {    return A2(sizeHelp,0,dict);};
	   var get = F2(function (targetKey,dict) {
	      get: while (true) {
	         var _p4 = dict;
	         if (_p4.ctor === "RBEmpty_elm_builtin") {
	               return $Maybe.Nothing;
	            } else {
	               var _p5 = A2($Basics.compare,targetKey,_p4._1);
	               switch (_p5.ctor)
	               {case "LT": var _v14 = targetKey,_v15 = _p4._3;
	                    targetKey = _v14;
	                    dict = _v15;
	                    continue get;
	                  case "EQ": return $Maybe.Just(_p4._2);
	                  default: var _v16 = targetKey,_v17 = _p4._4;
	                    targetKey = _v16;
	                    dict = _v17;
	                    continue get;}
	            }
	      }
	   });
	   var member = F2(function (key,dict) {
	      var _p6 = A2(get,key,dict);
	      if (_p6.ctor === "Just") {
	            return true;
	         } else {
	            return false;
	         }
	   });
	   var maxWithDefault = F3(function (k,v,r) {
	      maxWithDefault: while (true) {
	         var _p7 = r;
	         if (_p7.ctor === "RBEmpty_elm_builtin") {
	               return {ctor: "_Tuple2",_0: k,_1: v};
	            } else {
	               var _v20 = _p7._1,_v21 = _p7._2,_v22 = _p7._4;
	               k = _v20;
	               v = _v21;
	               r = _v22;
	               continue maxWithDefault;
	            }
	      }
	   });
	   var RBEmpty_elm_builtin = function (a) {
	      return {ctor: "RBEmpty_elm_builtin",_0: a};
	   };
	   var RBNode_elm_builtin = F5(function (a,b,c,d,e) {
	      return {ctor: "RBNode_elm_builtin"
	             ,_0: a
	             ,_1: b
	             ,_2: c
	             ,_3: d
	             ,_4: e};
	   });
	   var LBBlack = {ctor: "LBBlack"};
	   var LBlack = {ctor: "LBlack"};
	   var empty = RBEmpty_elm_builtin(LBlack);
	   var isEmpty = function (dict) {    return _U.eq(dict,empty);};
	   var map = F2(function (f,dict) {
	      var _p8 = dict;
	      if (_p8.ctor === "RBEmpty_elm_builtin") {
	            return RBEmpty_elm_builtin(LBlack);
	         } else {
	            var _p9 = _p8._1;
	            return A5(RBNode_elm_builtin,
	            _p8._0,
	            _p9,
	            A2(f,_p9,_p8._2),
	            A2(map,f,_p8._3),
	            A2(map,f,_p8._4));
	         }
	   });
	   var NBlack = {ctor: "NBlack"};
	   var BBlack = {ctor: "BBlack"};
	   var Black = {ctor: "Black"};
	   var ensureBlackRoot = function (dict) {
	      var _p10 = dict;
	      if (_p10.ctor === "RBNode_elm_builtin" && _p10._0.ctor === "Red")
	      {
	            return A5(RBNode_elm_builtin,
	            Black,
	            _p10._1,
	            _p10._2,
	            _p10._3,
	            _p10._4);
	         } else {
	            return dict;
	         }
	   };
	   var blackish = function (t) {
	      var _p11 = t;
	      if (_p11.ctor === "RBNode_elm_builtin") {
	            var _p12 = _p11._0;
	            return _U.eq(_p12,Black) || _U.eq(_p12,BBlack);
	         } else {
	            return true;
	         }
	   };
	   var blacken = function (t) {
	      var _p13 = t;
	      if (_p13.ctor === "RBEmpty_elm_builtin") {
	            return RBEmpty_elm_builtin(LBlack);
	         } else {
	            return A5(RBNode_elm_builtin,
	            Black,
	            _p13._1,
	            _p13._2,
	            _p13._3,
	            _p13._4);
	         }
	   };
	   var Red = {ctor: "Red"};
	   var moreBlack = function (color) {
	      var _p14 = color;
	      switch (_p14.ctor)
	      {case "Black": return BBlack;
	         case "Red": return Black;
	         case "NBlack": return Red;
	         default:
	         return $Native$Debug.crash("Can\'t make a double black node more black!");}
	   };
	   var lessBlack = function (color) {
	      var _p15 = color;
	      switch (_p15.ctor)
	      {case "BBlack": return Black;
	         case "Black": return Red;
	         case "Red": return NBlack;
	         default:
	         return $Native$Debug.crash("Can\'t make a negative black node less black!");}
	   };
	   var lessBlackTree = function (dict) {
	      var _p16 = dict;
	      if (_p16.ctor === "RBNode_elm_builtin") {
	            return A5(RBNode_elm_builtin,
	            lessBlack(_p16._0),
	            _p16._1,
	            _p16._2,
	            _p16._3,
	            _p16._4);
	         } else {
	            return RBEmpty_elm_builtin(LBlack);
	         }
	   };
	   var balancedTree = function (col) {
	      return function (xk) {
	         return function (xv) {
	            return function (yk) {
	               return function (yv) {
	                  return function (zk) {
	                     return function (zv) {
	                        return function (a) {
	                           return function (b) {
	                              return function (c) {
	                                 return function (d) {
	                                    return A5(RBNode_elm_builtin,
	                                    lessBlack(col),
	                                    yk,
	                                    yv,
	                                    A5(RBNode_elm_builtin,Black,xk,xv,a,b),
	                                    A5(RBNode_elm_builtin,Black,zk,zv,c,d));
	                                 };
	                              };
	                           };
	                        };
	                     };
	                  };
	               };
	            };
	         };
	      };
	   };
	   var redden = function (t) {
	      var _p17 = t;
	      if (_p17.ctor === "RBEmpty_elm_builtin") {
	            return $Native$Debug.crash("can\'t make a Leaf red");
	         } else {
	            return A5(RBNode_elm_builtin,
	            Red,
	            _p17._1,
	            _p17._2,
	            _p17._3,
	            _p17._4);
	         }
	   };
	   var balanceHelp = function (tree) {
	      var _p18 = tree;
	      _v31_6: do {
	         _v31_5: do {
	            _v31_4: do {
	               _v31_3: do {
	                  _v31_2: do {
	                     _v31_1: do {
	                        _v31_0: do {
	                           if (_p18.ctor === "RBNode_elm_builtin") {
	                                 if (_p18._3.ctor === "RBNode_elm_builtin") {
	                                       if (_p18._4.ctor === "RBNode_elm_builtin") {
	                                             switch (_p18._3._0.ctor)
	                                             {case "Red": switch (_p18._4._0.ctor)
	                                                  {case "Red":
	                                                     if (_p18._3._3.ctor === "RBNode_elm_builtin" && _p18._3._3._0.ctor === "Red")
	                                                       {
	                                                             break _v31_0;
	                                                          } else {
	                                                             if (_p18._3._4.ctor === "RBNode_elm_builtin" && _p18._3._4._0.ctor === "Red")
	                                                             {
	                                                                   break _v31_1;
	                                                                } else {
	                                                                   if (_p18._4._3.ctor === "RBNode_elm_builtin" && _p18._4._3._0.ctor === "Red")
	                                                                   {
	                                                                         break _v31_2;
	                                                                      } else {
	                                                                         if (_p18._4._4.ctor === "RBNode_elm_builtin" && _p18._4._4._0.ctor === "Red")
	                                                                         {
	                                                                               break _v31_3;
	                                                                            } else {
	                                                                               break _v31_6;
	                                                                            }
	                                                                      }
	                                                                }
	                                                          }
	                                                     case "NBlack":
	                                                     if (_p18._3._3.ctor === "RBNode_elm_builtin" && _p18._3._3._0.ctor === "Red")
	                                                       {
	                                                             break _v31_0;
	                                                          } else {
	                                                             if (_p18._3._4.ctor === "RBNode_elm_builtin" && _p18._3._4._0.ctor === "Red")
	                                                             {
	                                                                   break _v31_1;
	                                                                } else {
	                                                                   if (_p18._0.ctor === "BBlack" && _p18._4._3.ctor === "RBNode_elm_builtin" && _p18._4._3._0.ctor === "Black" && _p18._4._4.ctor === "RBNode_elm_builtin" && _p18._4._4._0.ctor === "Black")
	                                                                   {
	                                                                         break _v31_4;
	                                                                      } else {
	                                                                         break _v31_6;
	                                                                      }
	                                                                }
	                                                          }
	                                                     default:
	                                                     if (_p18._3._3.ctor === "RBNode_elm_builtin" && _p18._3._3._0.ctor === "Red")
	                                                       {
	                                                             break _v31_0;
	                                                          } else {
	                                                             if (_p18._3._4.ctor === "RBNode_elm_builtin" && _p18._3._4._0.ctor === "Red")
	                                                             {
	                                                                   break _v31_1;
	                                                                } else {
	                                                                   break _v31_6;
	                                                                }
	                                                          }}
	                                                case "NBlack": switch (_p18._4._0.ctor)
	                                                  {case "Red":
	                                                     if (_p18._4._3.ctor === "RBNode_elm_builtin" && _p18._4._3._0.ctor === "Red")
	                                                       {
	                                                             break _v31_2;
	                                                          } else {
	                                                             if (_p18._4._4.ctor === "RBNode_elm_builtin" && _p18._4._4._0.ctor === "Red")
	                                                             {
	                                                                   break _v31_3;
	                                                                } else {
	                                                                   if (_p18._0.ctor === "BBlack" && _p18._3._3.ctor === "RBNode_elm_builtin" && _p18._3._3._0.ctor === "Black" && _p18._3._4.ctor === "RBNode_elm_builtin" && _p18._3._4._0.ctor === "Black")
	                                                                   {
	                                                                         break _v31_5;
	                                                                      } else {
	                                                                         break _v31_6;
	                                                                      }
	                                                                }
	                                                          }
	                                                     case "NBlack": if (_p18._0.ctor === "BBlack") {
	                                                             if (_p18._4._3.ctor === "RBNode_elm_builtin" && _p18._4._3._0.ctor === "Black" && _p18._4._4.ctor === "RBNode_elm_builtin" && _p18._4._4._0.ctor === "Black")
	                                                             {
	                                                                   break _v31_4;
	                                                                } else {
	                                                                   if (_p18._3._3.ctor === "RBNode_elm_builtin" && _p18._3._3._0.ctor === "Black" && _p18._3._4.ctor === "RBNode_elm_builtin" && _p18._3._4._0.ctor === "Black")
	                                                                   {
	                                                                         break _v31_5;
	                                                                      } else {
	                                                                         break _v31_6;
	                                                                      }
	                                                                }
	                                                          } else {
	                                                             break _v31_6;
	                                                          }
	                                                     default:
	                                                     if (_p18._0.ctor === "BBlack" && _p18._3._3.ctor === "RBNode_elm_builtin" && _p18._3._3._0.ctor === "Black" && _p18._3._4.ctor === "RBNode_elm_builtin" && _p18._3._4._0.ctor === "Black")
	                                                       {
	                                                             break _v31_5;
	                                                          } else {
	                                                             break _v31_6;
	                                                          }}
	                                                default: switch (_p18._4._0.ctor)
	                                                  {case "Red":
	                                                     if (_p18._4._3.ctor === "RBNode_elm_builtin" && _p18._4._3._0.ctor === "Red")
	                                                       {
	                                                             break _v31_2;
	                                                          } else {
	                                                             if (_p18._4._4.ctor === "RBNode_elm_builtin" && _p18._4._4._0.ctor === "Red")
	                                                             {
	                                                                   break _v31_3;
	                                                                } else {
	                                                                   break _v31_6;
	                                                                }
	                                                          }
	                                                     case "NBlack":
	                                                     if (_p18._0.ctor === "BBlack" && _p18._4._3.ctor === "RBNode_elm_builtin" && _p18._4._3._0.ctor === "Black" && _p18._4._4.ctor === "RBNode_elm_builtin" && _p18._4._4._0.ctor === "Black")
	                                                       {
	                                                             break _v31_4;
	                                                          } else {
	                                                             break _v31_6;
	                                                          }
	                                                     default: break _v31_6;}}
	                                          } else {
	                                             switch (_p18._3._0.ctor)
	                                             {case "Red":
	                                                if (_p18._3._3.ctor === "RBNode_elm_builtin" && _p18._3._3._0.ctor === "Red")
	                                                  {
	                                                        break _v31_0;
	                                                     } else {
	                                                        if (_p18._3._4.ctor === "RBNode_elm_builtin" && _p18._3._4._0.ctor === "Red")
	                                                        {
	                                                              break _v31_1;
	                                                           } else {
	                                                              break _v31_6;
	                                                           }
	                                                     }
	                                                case "NBlack":
	                                                if (_p18._0.ctor === "BBlack" && _p18._3._3.ctor === "RBNode_elm_builtin" && _p18._3._3._0.ctor === "Black" && _p18._3._4.ctor === "RBNode_elm_builtin" && _p18._3._4._0.ctor === "Black")
	                                                  {
	                                                        break _v31_5;
	                                                     } else {
	                                                        break _v31_6;
	                                                     }
	                                                default: break _v31_6;}
	                                          }
	                                    } else {
	                                       if (_p18._4.ctor === "RBNode_elm_builtin") {
	                                             switch (_p18._4._0.ctor)
	                                             {case "Red":
	                                                if (_p18._4._3.ctor === "RBNode_elm_builtin" && _p18._4._3._0.ctor === "Red")
	                                                  {
	                                                        break _v31_2;
	                                                     } else {
	                                                        if (_p18._4._4.ctor === "RBNode_elm_builtin" && _p18._4._4._0.ctor === "Red")
	                                                        {
	                                                              break _v31_3;
	                                                           } else {
	                                                              break _v31_6;
	                                                           }
	                                                     }
	                                                case "NBlack":
	                                                if (_p18._0.ctor === "BBlack" && _p18._4._3.ctor === "RBNode_elm_builtin" && _p18._4._3._0.ctor === "Black" && _p18._4._4.ctor === "RBNode_elm_builtin" && _p18._4._4._0.ctor === "Black")
	                                                  {
	                                                        break _v31_4;
	                                                     } else {
	                                                        break _v31_6;
	                                                     }
	                                                default: break _v31_6;}
	                                          } else {
	                                             break _v31_6;
	                                          }
	                                    }
	                              } else {
	                                 break _v31_6;
	                              }
	                        } while (false);
	                        return balancedTree(_p18._0)(_p18._3._3._1)(_p18._3._3._2)(_p18._3._1)(_p18._3._2)(_p18._1)(_p18._2)(_p18._3._3._3)(_p18._3._3._4)(_p18._3._4)(_p18._4);
	                     } while (false);
	                     return balancedTree(_p18._0)(_p18._3._1)(_p18._3._2)(_p18._3._4._1)(_p18._3._4._2)(_p18._1)(_p18._2)(_p18._3._3)(_p18._3._4._3)(_p18._3._4._4)(_p18._4);
	                  } while (false);
	                  return balancedTree(_p18._0)(_p18._1)(_p18._2)(_p18._4._3._1)(_p18._4._3._2)(_p18._4._1)(_p18._4._2)(_p18._3)(_p18._4._3._3)(_p18._4._3._4)(_p18._4._4);
	               } while (false);
	               return balancedTree(_p18._0)(_p18._1)(_p18._2)(_p18._4._1)(_p18._4._2)(_p18._4._4._1)(_p18._4._4._2)(_p18._3)(_p18._4._3)(_p18._4._4._3)(_p18._4._4._4);
	            } while (false);
	            return A5(RBNode_elm_builtin,
	            Black,
	            _p18._4._3._1,
	            _p18._4._3._2,
	            A5(RBNode_elm_builtin,
	            Black,
	            _p18._1,
	            _p18._2,
	            _p18._3,
	            _p18._4._3._3),
	            A5(balance,
	            Black,
	            _p18._4._1,
	            _p18._4._2,
	            _p18._4._3._4,
	            redden(_p18._4._4)));
	         } while (false);
	         return A5(RBNode_elm_builtin,
	         Black,
	         _p18._3._4._1,
	         _p18._3._4._2,
	         A5(balance,
	         Black,
	         _p18._3._1,
	         _p18._3._2,
	         redden(_p18._3._3),
	         _p18._3._4._3),
	         A5(RBNode_elm_builtin,
	         Black,
	         _p18._1,
	         _p18._2,
	         _p18._3._4._4,
	         _p18._4));
	      } while (false);
	      return tree;
	   };
	   var balance = F5(function (c,k,v,l,r) {
	      var tree = A5(RBNode_elm_builtin,c,k,v,l,r);
	      return blackish(tree) ? balanceHelp(tree) : tree;
	   });
	   var bubble = F5(function (c,k,v,l,r) {
	      return isBBlack(l) || isBBlack(r) ? A5(balance,
	      moreBlack(c),
	      k,
	      v,
	      lessBlackTree(l),
	      lessBlackTree(r)) : A5(RBNode_elm_builtin,c,k,v,l,r);
	   });
	   var removeMax = F5(function (c,k,v,l,r) {
	      var _p19 = r;
	      if (_p19.ctor === "RBEmpty_elm_builtin") {
	            return A3(rem,c,l,r);
	         } else {
	            return A5(bubble,
	            c,
	            k,
	            v,
	            l,
	            A5(removeMax,_p19._0,_p19._1,_p19._2,_p19._3,_p19._4));
	         }
	   });
	   var rem = F3(function (c,l,r) {
	      var _p20 = {ctor: "_Tuple2",_0: l,_1: r};
	      if (_p20._0.ctor === "RBEmpty_elm_builtin") {
	            if (_p20._1.ctor === "RBEmpty_elm_builtin") {
	                  var _p21 = c;
	                  switch (_p21.ctor)
	                  {case "Red": return RBEmpty_elm_builtin(LBlack);
	                     case "Black": return RBEmpty_elm_builtin(LBBlack);
	                     default:
	                     return $Native$Debug.crash("cannot have bblack or nblack nodes at this point");}
	               } else {
	                  var _p24 = _p20._1._0;
	                  var _p23 = _p20._0._0;
	                  var _p22 = {ctor: "_Tuple3",_0: c,_1: _p23,_2: _p24};
	                  if (_p22.ctor === "_Tuple3" && _p22._0.ctor === "Black" && _p22._1.ctor === "LBlack" && _p22._2.ctor === "Red")
	                  {
	                        return A5(RBNode_elm_builtin,
	                        Black,
	                        _p20._1._1,
	                        _p20._1._2,
	                        _p20._1._3,
	                        _p20._1._4);
	                     } else {
	                        return A4(reportRemBug,
	                        "Black/LBlack/Red",
	                        c,
	                        $Basics.toString(_p23),
	                        $Basics.toString(_p24));
	                     }
	               }
	         } else {
	            if (_p20._1.ctor === "RBEmpty_elm_builtin") {
	                  var _p27 = _p20._1._0;
	                  var _p26 = _p20._0._0;
	                  var _p25 = {ctor: "_Tuple3",_0: c,_1: _p26,_2: _p27};
	                  if (_p25.ctor === "_Tuple3" && _p25._0.ctor === "Black" && _p25._1.ctor === "Red" && _p25._2.ctor === "LBlack")
	                  {
	                        return A5(RBNode_elm_builtin,
	                        Black,
	                        _p20._0._1,
	                        _p20._0._2,
	                        _p20._0._3,
	                        _p20._0._4);
	                     } else {
	                        return A4(reportRemBug,
	                        "Black/Red/LBlack",
	                        c,
	                        $Basics.toString(_p26),
	                        $Basics.toString(_p27));
	                     }
	               } else {
	                  var _p31 = _p20._0._2;
	                  var _p30 = _p20._0._4;
	                  var _p29 = _p20._0._1;
	                  var l$ = A5(removeMax,_p20._0._0,_p29,_p31,_p20._0._3,_p30);
	                  var _p28 = A3(maxWithDefault,_p29,_p31,_p30);
	                  var k = _p28._0;
	                  var v = _p28._1;
	                  return A5(bubble,c,k,v,l$,r);
	               }
	         }
	   });
	   var update = F3(function (k,alter,dict) {
	      var up = function (dict) {
	         var _p32 = dict;
	         if (_p32.ctor === "RBEmpty_elm_builtin") {
	               var _p33 = alter($Maybe.Nothing);
	               if (_p33.ctor === "Nothing") {
	                     return {ctor: "_Tuple2",_0: Same,_1: empty};
	                  } else {
	                     return {ctor: "_Tuple2"
	                            ,_0: Insert
	                            ,_1: A5(RBNode_elm_builtin,Red,k,_p33._0,empty,empty)};
	                  }
	            } else {
	               var _p44 = _p32._2;
	               var _p43 = _p32._4;
	               var _p42 = _p32._3;
	               var _p41 = _p32._1;
	               var _p40 = _p32._0;
	               var _p34 = A2($Basics.compare,k,_p41);
	               switch (_p34.ctor)
	               {case "EQ": var _p35 = alter($Maybe.Just(_p44));
	                    if (_p35.ctor === "Nothing") {
	                          return {ctor: "_Tuple2"
	                                 ,_0: Remove
	                                 ,_1: A3(rem,_p40,_p42,_p43)};
	                       } else {
	                          return {ctor: "_Tuple2"
	                                 ,_0: Same
	                                 ,_1: A5(RBNode_elm_builtin,_p40,_p41,_p35._0,_p42,_p43)};
	                       }
	                  case "LT": var _p36 = up(_p42);
	                    var flag = _p36._0;
	                    var newLeft = _p36._1;
	                    var _p37 = flag;
	                    switch (_p37.ctor)
	                    {case "Same": return {ctor: "_Tuple2"
	                                         ,_0: Same
	                                         ,_1: A5(RBNode_elm_builtin,_p40,_p41,_p44,newLeft,_p43)};
	                       case "Insert": return {ctor: "_Tuple2"
	                                             ,_0: Insert
	                                             ,_1: A5(balance,_p40,_p41,_p44,newLeft,_p43)};
	                       default: return {ctor: "_Tuple2"
	                                       ,_0: Remove
	                                       ,_1: A5(bubble,_p40,_p41,_p44,newLeft,_p43)};}
	                  default: var _p38 = up(_p43);
	                    var flag = _p38._0;
	                    var newRight = _p38._1;
	                    var _p39 = flag;
	                    switch (_p39.ctor)
	                    {case "Same": return {ctor: "_Tuple2"
	                                         ,_0: Same
	                                         ,_1: A5(RBNode_elm_builtin,_p40,_p41,_p44,_p42,newRight)};
	                       case "Insert": return {ctor: "_Tuple2"
	                                             ,_0: Insert
	                                             ,_1: A5(balance,_p40,_p41,_p44,_p42,newRight)};
	                       default: return {ctor: "_Tuple2"
	                                       ,_0: Remove
	                                       ,_1: A5(bubble,_p40,_p41,_p44,_p42,newRight)};}}
	            }
	      };
	      var _p45 = up(dict);
	      var flag = _p45._0;
	      var updatedDict = _p45._1;
	      var _p46 = flag;
	      switch (_p46.ctor)
	      {case "Same": return updatedDict;
	         case "Insert": return ensureBlackRoot(updatedDict);
	         default: return blacken(updatedDict);}
	   });
	   var insert = F3(function (key,value,dict) {
	      return A3(update,
	      key,
	      $Basics.always($Maybe.Just(value)),
	      dict);
	   });
	   var singleton = F2(function (key,value) {
	      return A3(insert,key,value,empty);
	   });
	   var union = F2(function (t1,t2) {
	      return A3(foldl,insert,t2,t1);
	   });
	   var fromList = function (assocs) {
	      return A3($List.foldl,
	      F2(function (_p47,dict) {
	         var _p48 = _p47;
	         return A3(insert,_p48._0,_p48._1,dict);
	      }),
	      empty,
	      assocs);
	   };
	   var filter = F2(function (predicate,dictionary) {
	      var add = F3(function (key,value,dict) {
	         return A2(predicate,key,value) ? A3(insert,
	         key,
	         value,
	         dict) : dict;
	      });
	      return A3(foldl,add,empty,dictionary);
	   });
	   var intersect = F2(function (t1,t2) {
	      return A2(filter,
	      F2(function (k,_p49) {    return A2(member,k,t2);}),
	      t1);
	   });
	   var partition = F2(function (predicate,dict) {
	      var add = F3(function (key,value,_p50) {
	         var _p51 = _p50;
	         var _p53 = _p51._1;
	         var _p52 = _p51._0;
	         return A2(predicate,key,value) ? {ctor: "_Tuple2"
	                                          ,_0: A3(insert,key,value,_p52)
	                                          ,_1: _p53} : {ctor: "_Tuple2"
	                                                       ,_0: _p52
	                                                       ,_1: A3(insert,key,value,_p53)};
	      });
	      return A3(foldl,add,{ctor: "_Tuple2",_0: empty,_1: empty},dict);
	   });
	   var remove = F2(function (key,dict) {
	      return A3(update,key,$Basics.always($Maybe.Nothing),dict);
	   });
	   var diff = F2(function (t1,t2) {
	      return A3(foldl,
	      F3(function (k,v,t) {    return A2(remove,k,t);}),
	      t1,
	      t2);
	   });
	   return _elm.Dict.values = {_op: _op
	                             ,empty: empty
	                             ,singleton: singleton
	                             ,insert: insert
	                             ,update: update
	                             ,isEmpty: isEmpty
	                             ,get: get
	                             ,remove: remove
	                             ,member: member
	                             ,size: size
	                             ,filter: filter
	                             ,partition: partition
	                             ,foldl: foldl
	                             ,foldr: foldr
	                             ,map: map
	                             ,union: union
	                             ,intersect: intersect
	                             ,diff: diff
	                             ,keys: keys
	                             ,values: values
	                             ,toList: toList
	                             ,fromList: fromList};
	};
	Elm.Native.Json = {};

	Elm.Native.Json.make = function(localRuntime) {
		localRuntime.Native = localRuntime.Native || {};
		localRuntime.Native.Json = localRuntime.Native.Json || {};
		if (localRuntime.Native.Json.values) {
			return localRuntime.Native.Json.values;
		}

		var ElmArray = Elm.Native.Array.make(localRuntime);
		var List = Elm.Native.List.make(localRuntime);
		var Maybe = Elm.Maybe.make(localRuntime);
		var Result = Elm.Result.make(localRuntime);
		var Utils = Elm.Native.Utils.make(localRuntime);


		function crash(expected, actual) {
			throw new Error(
				'expecting ' + expected + ' but got ' + JSON.stringify(actual)
			);
		}


		// PRIMITIVE VALUES

		function decodeNull(successValue) {
			return function(value) {
				if (value === null) {
					return successValue;
				}
				crash('null', value);
			};
		}


		function decodeString(value) {
			if (typeof value === 'string' || value instanceof String) {
				return value;
			}
			crash('a String', value);
		}


		function decodeFloat(value) {
			if (typeof value === 'number') {
				return value;
			}
			crash('a Float', value);
		}


		function decodeInt(value) {
			if (typeof value !== 'number') {
				crash('an Int', value);
			}

			if (value < 2147483647 && value > -2147483647 && (value | 0) === value) {
				return value;
			}

			if (isFinite(value) && !(value % 1)) {
				return value;
			}

			crash('an Int', value);
		}


		function decodeBool(value) {
			if (typeof value === 'boolean') {
				return value;
			}
			crash('a Bool', value);
		}


		// ARRAY

		function decodeArray(decoder) {
			return function(value) {
				if (value instanceof Array) {
					var len = value.length;
					var array = new Array(len);
					for (var i = len; i--; ) {
						array[i] = decoder(value[i]);
					}
					return ElmArray.fromJSArray(array);
				}
				crash('an Array', value);
			};
		}


		// LIST

		function decodeList(decoder) {
			return function(value) {
				if (value instanceof Array) {
					var len = value.length;
					var list = List.Nil;
					for (var i = len; i--; ) {
						list = List.Cons( decoder(value[i]), list );
					}
					return list;
				}
				crash('a List', value);
			};
		}


		// MAYBE

		function decodeMaybe(decoder) {
			return function(value) {
				try {
					return Maybe.Just(decoder(value));
				} catch(e) {
					return Maybe.Nothing;
				}
			};
		}


		// FIELDS

		function decodeField(field, decoder) {
			return function(value) {
				var subValue = value[field];
				if (subValue !== undefined) {
					return decoder(subValue);
				}
				crash("an object with field '" + field + "'", value);
			};
		}


		// OBJECTS

		function decodeKeyValuePairs(decoder) {
			return function(value) {
				var isObject =
					typeof value === 'object'
						&& value !== null
						&& !(value instanceof Array);

				if (isObject) {
					var keyValuePairs = List.Nil;
					for (var key in value)
					{
						var elmValue = decoder(value[key]);
						var pair = Utils.Tuple2(key, elmValue);
						keyValuePairs = List.Cons(pair, keyValuePairs);
					}
					return keyValuePairs;
				}

				crash('an object', value);
			};
		}

		function decodeObject1(f, d1) {
			return function(value) {
				return f(d1(value));
			};
		}

		function decodeObject2(f, d1, d2) {
			return function(value) {
				return A2( f, d1(value), d2(value) );
			};
		}

		function decodeObject3(f, d1, d2, d3) {
			return function(value) {
				return A3( f, d1(value), d2(value), d3(value) );
			};
		}

		function decodeObject4(f, d1, d2, d3, d4) {
			return function(value) {
				return A4( f, d1(value), d2(value), d3(value), d4(value) );
			};
		}

		function decodeObject5(f, d1, d2, d3, d4, d5) {
			return function(value) {
				return A5( f, d1(value), d2(value), d3(value), d4(value), d5(value) );
			};
		}

		function decodeObject6(f, d1, d2, d3, d4, d5, d6) {
			return function(value) {
				return A6( f,
					d1(value),
					d2(value),
					d3(value),
					d4(value),
					d5(value),
					d6(value)
				);
			};
		}

		function decodeObject7(f, d1, d2, d3, d4, d5, d6, d7) {
			return function(value) {
				return A7( f,
					d1(value),
					d2(value),
					d3(value),
					d4(value),
					d5(value),
					d6(value),
					d7(value)
				);
			};
		}

		function decodeObject8(f, d1, d2, d3, d4, d5, d6, d7, d8) {
			return function(value) {
				return A8( f,
					d1(value),
					d2(value),
					d3(value),
					d4(value),
					d5(value),
					d6(value),
					d7(value),
					d8(value)
				);
			};
		}


		// TUPLES

		function decodeTuple1(f, d1) {
			return function(value) {
				if ( !(value instanceof Array) || value.length !== 1 ) {
					crash('a Tuple of length 1', value);
				}
				return f( d1(value[0]) );
			};
		}

		function decodeTuple2(f, d1, d2) {
			return function(value) {
				if ( !(value instanceof Array) || value.length !== 2 ) {
					crash('a Tuple of length 2', value);
				}
				return A2( f, d1(value[0]), d2(value[1]) );
			};
		}

		function decodeTuple3(f, d1, d2, d3) {
			return function(value) {
				if ( !(value instanceof Array) || value.length !== 3 ) {
					crash('a Tuple of length 3', value);
				}
				return A3( f, d1(value[0]), d2(value[1]), d3(value[2]) );
			};
		}


		function decodeTuple4(f, d1, d2, d3, d4) {
			return function(value) {
				if ( !(value instanceof Array) || value.length !== 4 ) {
					crash('a Tuple of length 4', value);
				}
				return A4( f, d1(value[0]), d2(value[1]), d3(value[2]), d4(value[3]) );
			};
		}


		function decodeTuple5(f, d1, d2, d3, d4, d5) {
			return function(value) {
				if ( !(value instanceof Array) || value.length !== 5 ) {
					crash('a Tuple of length 5', value);
				}
				return A5( f,
					d1(value[0]),
					d2(value[1]),
					d3(value[2]),
					d4(value[3]),
					d5(value[4])
				);
			};
		}


		function decodeTuple6(f, d1, d2, d3, d4, d5, d6) {
			return function(value) {
				if ( !(value instanceof Array) || value.length !== 6 ) {
					crash('a Tuple of length 6', value);
				}
				return A6( f,
					d1(value[0]),
					d2(value[1]),
					d3(value[2]),
					d4(value[3]),
					d5(value[4]),
					d6(value[5])
				);
			};
		}

		function decodeTuple7(f, d1, d2, d3, d4, d5, d6, d7) {
			return function(value) {
				if ( !(value instanceof Array) || value.length !== 7 ) {
					crash('a Tuple of length 7', value);
				}
				return A7( f,
					d1(value[0]),
					d2(value[1]),
					d3(value[2]),
					d4(value[3]),
					d5(value[4]),
					d6(value[5]),
					d7(value[6])
				);
			};
		}


		function decodeTuple8(f, d1, d2, d3, d4, d5, d6, d7, d8) {
			return function(value) {
				if ( !(value instanceof Array) || value.length !== 8 ) {
					crash('a Tuple of length 8', value);
				}
				return A8( f,
					d1(value[0]),
					d2(value[1]),
					d3(value[2]),
					d4(value[3]),
					d5(value[4]),
					d6(value[5]),
					d7(value[6]),
					d8(value[7])
				);
			};
		}


		// CUSTOM DECODERS

		function decodeValue(value) {
			return value;
		}

		function runDecoderValue(decoder, value) {
			try {
				return Result.Ok(decoder(value));
			} catch(e) {
				return Result.Err(e.message);
			}
		}

		function customDecoder(decoder, callback) {
			return function(value) {
				var result = callback(decoder(value));
				if (result.ctor === 'Err') {
					throw new Error('custom decoder failed: ' + result._0);
				}
				return result._0;
			};
		}

		function andThen(decode, callback) {
			return function(value) {
				var result = decode(value);
				return callback(result)(value);
			};
		}

		function fail(msg) {
			return function(value) {
				throw new Error(msg);
			};
		}

		function succeed(successValue) {
			return function(value) {
				return successValue;
			};
		}


		// ONE OF MANY

		function oneOf(decoders) {
			return function(value) {
				var errors = [];
				var temp = decoders;
				while (temp.ctor !== '[]') {
					try {
						return temp._0(value);
					} catch(e) {
						errors.push(e.message);
					}
					temp = temp._1;
				}
				throw new Error('expecting one of the following:\n    ' + errors.join('\n    '));
			};
		}

		function get(decoder, value) {
			try {
				return Result.Ok(decoder(value));
			} catch(e) {
				return Result.Err(e.message);
			}
		}


		// ENCODE / DECODE

		function runDecoderString(decoder, string) {
			try {
				return Result.Ok(decoder(JSON.parse(string)));
			} catch(e) {
				return Result.Err(e.message);
			}
		}

		function encode(indentLevel, value) {
			return JSON.stringify(value, null, indentLevel);
		}

		function identity(value) {
			return value;
		}

		function encodeObject(keyValuePairs) {
			var obj = {};
			while (keyValuePairs.ctor !== '[]') {
				var pair = keyValuePairs._0;
				obj[pair._0] = pair._1;
				keyValuePairs = keyValuePairs._1;
			}
			return obj;
		}

		return localRuntime.Native.Json.values = {
			encode: F2(encode),
			runDecoderString: F2(runDecoderString),
			runDecoderValue: F2(runDecoderValue),

			get: F2(get),
			oneOf: oneOf,

			decodeNull: decodeNull,
			decodeInt: decodeInt,
			decodeFloat: decodeFloat,
			decodeString: decodeString,
			decodeBool: decodeBool,

			decodeMaybe: decodeMaybe,

			decodeList: decodeList,
			decodeArray: decodeArray,

			decodeField: F2(decodeField),

			decodeObject1: F2(decodeObject1),
			decodeObject2: F3(decodeObject2),
			decodeObject3: F4(decodeObject3),
			decodeObject4: F5(decodeObject4),
			decodeObject5: F6(decodeObject5),
			decodeObject6: F7(decodeObject6),
			decodeObject7: F8(decodeObject7),
			decodeObject8: F9(decodeObject8),
			decodeKeyValuePairs: decodeKeyValuePairs,

			decodeTuple1: F2(decodeTuple1),
			decodeTuple2: F3(decodeTuple2),
			decodeTuple3: F4(decodeTuple3),
			decodeTuple4: F5(decodeTuple4),
			decodeTuple5: F6(decodeTuple5),
			decodeTuple6: F7(decodeTuple6),
			decodeTuple7: F8(decodeTuple7),
			decodeTuple8: F9(decodeTuple8),

			andThen: F2(andThen),
			decodeValue: decodeValue,
			customDecoder: F2(customDecoder),
			fail: fail,
			succeed: succeed,

			identity: identity,
			encodeNull: null,
			encodeArray: ElmArray.toJSArray,
			encodeList: List.toArray,
			encodeObject: encodeObject

		};
	};

	Elm.Json = Elm.Json || {};
	Elm.Json.Encode = Elm.Json.Encode || {};
	Elm.Json.Encode.make = function (_elm) {
	   "use strict";
	   _elm.Json = _elm.Json || {};
	   _elm.Json.Encode = _elm.Json.Encode || {};
	   if (_elm.Json.Encode.values) return _elm.Json.Encode.values;
	   var _U = Elm.Native.Utils.make(_elm),
	   $Array = Elm.Array.make(_elm),
	   $Native$Json = Elm.Native.Json.make(_elm);
	   var _op = {};
	   var list = $Native$Json.encodeList;
	   var array = $Native$Json.encodeArray;
	   var object = $Native$Json.encodeObject;
	   var $null = $Native$Json.encodeNull;
	   var bool = $Native$Json.identity;
	   var $float = $Native$Json.identity;
	   var $int = $Native$Json.identity;
	   var string = $Native$Json.identity;
	   var encode = $Native$Json.encode;
	   var Value = {ctor: "Value"};
	   return _elm.Json.Encode.values = {_op: _op
	                                    ,encode: encode
	                                    ,string: string
	                                    ,$int: $int
	                                    ,$float: $float
	                                    ,bool: bool
	                                    ,$null: $null
	                                    ,list: list
	                                    ,array: array
	                                    ,object: object};
	};
	Elm.Json = Elm.Json || {};
	Elm.Json.Decode = Elm.Json.Decode || {};
	Elm.Json.Decode.make = function (_elm) {
	   "use strict";
	   _elm.Json = _elm.Json || {};
	   _elm.Json.Decode = _elm.Json.Decode || {};
	   if (_elm.Json.Decode.values) return _elm.Json.Decode.values;
	   var _U = Elm.Native.Utils.make(_elm),
	   $Array = Elm.Array.make(_elm),
	   $Dict = Elm.Dict.make(_elm),
	   $Json$Encode = Elm.Json.Encode.make(_elm),
	   $List = Elm.List.make(_elm),
	   $Maybe = Elm.Maybe.make(_elm),
	   $Native$Json = Elm.Native.Json.make(_elm),
	   $Result = Elm.Result.make(_elm);
	   var _op = {};
	   var tuple8 = $Native$Json.decodeTuple8;
	   var tuple7 = $Native$Json.decodeTuple7;
	   var tuple6 = $Native$Json.decodeTuple6;
	   var tuple5 = $Native$Json.decodeTuple5;
	   var tuple4 = $Native$Json.decodeTuple4;
	   var tuple3 = $Native$Json.decodeTuple3;
	   var tuple2 = $Native$Json.decodeTuple2;
	   var tuple1 = $Native$Json.decodeTuple1;
	   var succeed = $Native$Json.succeed;
	   var fail = $Native$Json.fail;
	   var andThen = $Native$Json.andThen;
	   var customDecoder = $Native$Json.customDecoder;
	   var decodeValue = $Native$Json.runDecoderValue;
	   var value = $Native$Json.decodeValue;
	   var maybe = $Native$Json.decodeMaybe;
	   var $null = $Native$Json.decodeNull;
	   var array = $Native$Json.decodeArray;
	   var list = $Native$Json.decodeList;
	   var bool = $Native$Json.decodeBool;
	   var $int = $Native$Json.decodeInt;
	   var $float = $Native$Json.decodeFloat;
	   var string = $Native$Json.decodeString;
	   var oneOf = $Native$Json.oneOf;
	   var keyValuePairs = $Native$Json.decodeKeyValuePairs;
	   var object8 = $Native$Json.decodeObject8;
	   var object7 = $Native$Json.decodeObject7;
	   var object6 = $Native$Json.decodeObject6;
	   var object5 = $Native$Json.decodeObject5;
	   var object4 = $Native$Json.decodeObject4;
	   var object3 = $Native$Json.decodeObject3;
	   var object2 = $Native$Json.decodeObject2;
	   var object1 = $Native$Json.decodeObject1;
	   _op[":="] = $Native$Json.decodeField;
	   var at = F2(function (fields,decoder) {
	      return A3($List.foldr,
	      F2(function (x,y) {    return A2(_op[":="],x,y);}),
	      decoder,
	      fields);
	   });
	   var decodeString = $Native$Json.runDecoderString;
	   var map = $Native$Json.decodeObject1;
	   var dict = function (decoder) {
	      return A2(map,$Dict.fromList,keyValuePairs(decoder));
	   };
	   var Decoder = {ctor: "Decoder"};
	   return _elm.Json.Decode.values = {_op: _op
	                                    ,decodeString: decodeString
	                                    ,decodeValue: decodeValue
	                                    ,string: string
	                                    ,$int: $int
	                                    ,$float: $float
	                                    ,bool: bool
	                                    ,$null: $null
	                                    ,list: list
	                                    ,array: array
	                                    ,tuple1: tuple1
	                                    ,tuple2: tuple2
	                                    ,tuple3: tuple3
	                                    ,tuple4: tuple4
	                                    ,tuple5: tuple5
	                                    ,tuple6: tuple6
	                                    ,tuple7: tuple7
	                                    ,tuple8: tuple8
	                                    ,at: at
	                                    ,object1: object1
	                                    ,object2: object2
	                                    ,object3: object3
	                                    ,object4: object4
	                                    ,object5: object5
	                                    ,object6: object6
	                                    ,object7: object7
	                                    ,object8: object8
	                                    ,keyValuePairs: keyValuePairs
	                                    ,dict: dict
	                                    ,maybe: maybe
	                                    ,oneOf: oneOf
	                                    ,map: map
	                                    ,fail: fail
	                                    ,succeed: succeed
	                                    ,andThen: andThen
	                                    ,value: value
	                                    ,customDecoder: customDecoder};
	};
	Elm.Native.Effects = {};
	Elm.Native.Effects.make = function(localRuntime) {

		localRuntime.Native = localRuntime.Native || {};
		localRuntime.Native.Effects = localRuntime.Native.Effects || {};
		if (localRuntime.Native.Effects.values)
		{
			return localRuntime.Native.Effects.values;
		}

		var Task = Elm.Native.Task.make(localRuntime);
		var Utils = Elm.Native.Utils.make(localRuntime);
		var Signal = Elm.Signal.make(localRuntime);
		var List = Elm.Native.List.make(localRuntime);


		// polyfill so things will work even if rAF is not available for some reason
		var _requestAnimationFrame =
			typeof requestAnimationFrame !== 'undefined'
				? requestAnimationFrame
				: function(cb) { setTimeout(cb, 1000 / 60); }
				;


		// batchedSending and sendCallback implement a small state machine in order
		// to schedule only one send(time) call per animation frame.
		//
		// Invariants:
		// 1. In the NO_REQUEST state, there is never a scheduled sendCallback.
		// 2. In the PENDING_REQUEST and EXTRA_REQUEST states, there is always exactly
		//    one scheduled sendCallback.
		var NO_REQUEST = 0;
		var PENDING_REQUEST = 1;
		var EXTRA_REQUEST = 2;
		var state = NO_REQUEST;
		var messageArray = [];


		function batchedSending(address, tickMessages)
		{
			// insert ticks into the messageArray
			var foundAddress = false;

			for (var i = messageArray.length; i--; )
			{
				if (messageArray[i].address === address)
				{
					foundAddress = true;
					messageArray[i].tickMessages = A3(List.foldl, List.cons, messageArray[i].tickMessages, tickMessages);
					break;
				}
			}

			if (!foundAddress)
			{
				messageArray.push({ address: address, tickMessages: tickMessages });
			}

			// do the appropriate state transition
			switch (state)
			{
				case NO_REQUEST:
					_requestAnimationFrame(sendCallback);
					state = PENDING_REQUEST;
					break;
				case PENDING_REQUEST:
					state = PENDING_REQUEST;
					break;
				case EXTRA_REQUEST:
					state = PENDING_REQUEST;
					break;
			}
		}


		function sendCallback(time)
		{
			switch (state)
			{
				case NO_REQUEST:
					// This state should not be possible. How can there be no
					// request, yet somehow we are actively fulfilling a
					// request?
					throw new Error(
						'Unexpected send callback.\n' +
						'Please report this to <https://github.com/evancz/elm-effects/issues>.'
					);

				case PENDING_REQUEST:
					// At this point, we do not *know* that another frame is
					// needed, but we make an extra request to rAF just in
					// case. It's possible to drop a frame if rAF is called
					// too late, so we just do it preemptively.
					_requestAnimationFrame(sendCallback);
					state = EXTRA_REQUEST;

					// There's also stuff we definitely need to send.
					send(time);
					return;

				case EXTRA_REQUEST:
					// Turns out the extra request was not needed, so we will
					// stop calling rAF. No reason to call it all the time if
					// no one needs it.
					state = NO_REQUEST;
					return;
			}
		}


		function send(time)
		{
			for (var i = messageArray.length; i--; )
			{
				var messages = A3(
					List.foldl,
					F2( function(toAction, list) { return List.Cons(toAction(time), list); } ),
					List.Nil,
					messageArray[i].tickMessages
				);
				Task.perform( A2(Signal.send, messageArray[i].address, messages) );
			}
			messageArray = [];
		}


		function requestTickSending(address, tickMessages)
		{
			return Task.asyncFunction(function(callback) {
				batchedSending(address, tickMessages);
				callback(Task.succeed(Utils.Tuple0));
			});
		}


		return localRuntime.Native.Effects.values = {
			requestTickSending: F2(requestTickSending)
		};

	};

	Elm.Effects = Elm.Effects || {};
	Elm.Effects.make = function (_elm) {
	   "use strict";
	   _elm.Effects = _elm.Effects || {};
	   if (_elm.Effects.values) return _elm.Effects.values;
	   var _U = Elm.Native.Utils.make(_elm),
	   $Basics = Elm.Basics.make(_elm),
	   $Debug = Elm.Debug.make(_elm),
	   $List = Elm.List.make(_elm),
	   $Maybe = Elm.Maybe.make(_elm),
	   $Native$Effects = Elm.Native.Effects.make(_elm),
	   $Result = Elm.Result.make(_elm),
	   $Signal = Elm.Signal.make(_elm),
	   $Task = Elm.Task.make(_elm),
	   $Time = Elm.Time.make(_elm);
	   var _op = {};
	   var ignore = function (task) {
	      return A2($Task.map,$Basics.always({ctor: "_Tuple0"}),task);
	   };
	   var requestTickSending = $Native$Effects.requestTickSending;
	   var toTaskHelp = F3(function (address,effect,_p0) {
	      var _p1 = _p0;
	      var _p5 = _p1._1;
	      var _p4 = _p1;
	      var _p3 = _p1._0;
	      var _p2 = effect;
	      switch (_p2.ctor)
	      {case "Task": var reporter = A2($Task.andThen,
	           _p2._0,
	           function (answer) {
	              return A2($Signal.send,address,_U.list([answer]));
	           });
	           return {ctor: "_Tuple2"
	                  ,_0: A2($Task.andThen,
	                  _p3,
	                  $Basics.always(ignore($Task.spawn(reporter))))
	                  ,_1: _p5};
	         case "Tick": return {ctor: "_Tuple2"
	                             ,_0: _p3
	                             ,_1: A2($List._op["::"],_p2._0,_p5)};
	         case "None": return _p4;
	         default: return A3($List.foldl,toTaskHelp(address),_p4,_p2._0);}
	   });
	   var toTask = F2(function (address,effect) {
	      var _p6 = A3(toTaskHelp,
	      address,
	      effect,
	      {ctor: "_Tuple2"
	      ,_0: $Task.succeed({ctor: "_Tuple0"})
	      ,_1: _U.list([])});
	      var combinedTask = _p6._0;
	      var tickMessages = _p6._1;
	      return $List.isEmpty(tickMessages) ? combinedTask : A2($Task.andThen,
	      combinedTask,
	      $Basics.always(A2(requestTickSending,address,tickMessages)));
	   });
	   var Never = function (a) {    return {ctor: "Never",_0: a};};
	   var Batch = function (a) {    return {ctor: "Batch",_0: a};};
	   var batch = Batch;
	   var None = {ctor: "None"};
	   var none = None;
	   var Tick = function (a) {    return {ctor: "Tick",_0: a};};
	   var tick = Tick;
	   var Task = function (a) {    return {ctor: "Task",_0: a};};
	   var task = Task;
	   var map = F2(function (func,effect) {
	      var _p7 = effect;
	      switch (_p7.ctor)
	      {case "Task": return Task(A2($Task.map,func,_p7._0));
	         case "Tick": return Tick(function (_p8) {
	              return func(_p7._0(_p8));
	           });
	         case "None": return None;
	         default: return Batch(A2($List.map,map(func),_p7._0));}
	   });
	   return _elm.Effects.values = {_op: _op
	                                ,none: none
	                                ,task: task
	                                ,tick: tick
	                                ,map: map
	                                ,batch: batch
	                                ,toTask: toTask};
	};
	(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

	},{}],2:[function(require,module,exports){
	(function (global){
	var topLevel = typeof global !== 'undefined' ? global :
	    typeof window !== 'undefined' ? window : {}
	var minDoc = require('min-document');

	if (typeof document !== 'undefined') {
	    module.exports = document;
	} else {
	    var doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

	    if (!doccy) {
	        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
	    }

	    module.exports = doccy;
	}

	}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
	},{"min-document":1}],3:[function(require,module,exports){
	"use strict";

	module.exports = function isObject(x) {
		return typeof x === "object" && x !== null;
	};

	},{}],4:[function(require,module,exports){
	var nativeIsArray = Array.isArray
	var toString = Object.prototype.toString

	module.exports = nativeIsArray || isArray

	function isArray(obj) {
	    return toString.call(obj) === "[object Array]"
	}

	},{}],5:[function(require,module,exports){
	var isObject = require("is-object")
	var isHook = require("../vnode/is-vhook.js")

	module.exports = applyProperties

	function applyProperties(node, props, previous) {
	    for (var propName in props) {
	        var propValue = props[propName]

	        if (propValue === undefined) {
	            removeProperty(node, propName, propValue, previous);
	        } else if (isHook(propValue)) {
	            removeProperty(node, propName, propValue, previous)
	            if (propValue.hook) {
	                propValue.hook(node,
	                    propName,
	                    previous ? previous[propName] : undefined)
	            }
	        } else {
	            if (isObject(propValue)) {
	                patchObject(node, props, previous, propName, propValue);
	            } else {
	                node[propName] = propValue
	            }
	        }
	    }
	}

	function removeProperty(node, propName, propValue, previous) {
	    if (previous) {
	        var previousValue = previous[propName]

	        if (!isHook(previousValue)) {
	            if (propName === "attributes") {
	                for (var attrName in previousValue) {
	                    node.removeAttribute(attrName)
	                }
	            } else if (propName === "style") {
	                for (var i in previousValue) {
	                    node.style[i] = ""
	                }
	            } else if (typeof previousValue === "string") {
	                node[propName] = ""
	            } else {
	                node[propName] = null
	            }
	        } else if (previousValue.unhook) {
	            previousValue.unhook(node, propName, propValue)
	        }
	    }
	}

	function patchObject(node, props, previous, propName, propValue) {
	    var previousValue = previous ? previous[propName] : undefined

	    // Set attributes
	    if (propName === "attributes") {
	        for (var attrName in propValue) {
	            var attrValue = propValue[attrName]

	            if (attrValue === undefined) {
	                node.removeAttribute(attrName)
	            } else {
	                node.setAttribute(attrName, attrValue)
	            }
	        }

	        return
	    }

	    if(previousValue && isObject(previousValue) &&
	        getPrototype(previousValue) !== getPrototype(propValue)) {
	        node[propName] = propValue
	        return
	    }

	    if (!isObject(node[propName])) {
	        node[propName] = {}
	    }

	    var replacer = propName === "style" ? "" : undefined

	    for (var k in propValue) {
	        var value = propValue[k]
	        node[propName][k] = (value === undefined) ? replacer : value
	    }
	}

	function getPrototype(value) {
	    if (Object.getPrototypeOf) {
	        return Object.getPrototypeOf(value)
	    } else if (value.__proto__) {
	        return value.__proto__
	    } else if (value.constructor) {
	        return value.constructor.prototype
	    }
	}

	},{"../vnode/is-vhook.js":13,"is-object":3}],6:[function(require,module,exports){
	var document = require("global/document")

	var applyProperties = require("./apply-properties")

	var isVNode = require("../vnode/is-vnode.js")
	var isVText = require("../vnode/is-vtext.js")
	var isWidget = require("../vnode/is-widget.js")
	var handleThunk = require("../vnode/handle-thunk.js")

	module.exports = createElement

	function createElement(vnode, opts) {
	    var doc = opts ? opts.document || document : document
	    var warn = opts ? opts.warn : null

	    vnode = handleThunk(vnode).a

	    if (isWidget(vnode)) {
	        return vnode.init()
	    } else if (isVText(vnode)) {
	        return doc.createTextNode(vnode.text)
	    } else if (!isVNode(vnode)) {
	        if (warn) {
	            warn("Item is not a valid virtual dom node", vnode)
	        }
	        return null
	    }

	    var node = (vnode.namespace === null) ?
	        doc.createElement(vnode.tagName) :
	        doc.createElementNS(vnode.namespace, vnode.tagName)

	    var props = vnode.properties
	    applyProperties(node, props)

	    var children = vnode.children

	    for (var i = 0; i < children.length; i++) {
	        var childNode = createElement(children[i], opts)
	        if (childNode) {
	            node.appendChild(childNode)
	        }
	    }

	    return node
	}

	},{"../vnode/handle-thunk.js":11,"../vnode/is-vnode.js":14,"../vnode/is-vtext.js":15,"../vnode/is-widget.js":16,"./apply-properties":5,"global/document":2}],7:[function(require,module,exports){
	// Maps a virtual DOM tree onto a real DOM tree in an efficient manner.
	// We don't want to read all of the DOM nodes in the tree so we use
	// the in-order tree indexing to eliminate recursion down certain branches.
	// We only recurse into a DOM node if we know that it contains a child of
	// interest.

	var noChild = {}

	module.exports = domIndex

	function domIndex(rootNode, tree, indices, nodes) {
	    if (!indices || indices.length === 0) {
	        return {}
	    } else {
	        indices.sort(ascending)
	        return recurse(rootNode, tree, indices, nodes, 0)
	    }
	}

	function recurse(rootNode, tree, indices, nodes, rootIndex) {
	    nodes = nodes || {}


	    if (rootNode) {
	        if (indexInRange(indices, rootIndex, rootIndex)) {
	            nodes[rootIndex] = rootNode
	        }

	        var vChildren = tree.children

	        if (vChildren) {

	            var childNodes = rootNode.childNodes

	            for (var i = 0; i < tree.children.length; i++) {
	                rootIndex += 1

	                var vChild = vChildren[i] || noChild
	                var nextIndex = rootIndex + (vChild.count || 0)

	                // skip recursion down the tree if there are no nodes down here
	                if (indexInRange(indices, rootIndex, nextIndex)) {
	                    recurse(childNodes[i], vChild, indices, nodes, rootIndex)
	                }

	                rootIndex = nextIndex
	            }
	        }
	    }

	    return nodes
	}

	// Binary search for an index in the interval [left, right]
	function indexInRange(indices, left, right) {
	    if (indices.length === 0) {
	        return false
	    }

	    var minIndex = 0
	    var maxIndex = indices.length - 1
	    var currentIndex
	    var currentItem

	    while (minIndex <= maxIndex) {
	        currentIndex = ((maxIndex + minIndex) / 2) >> 0
	        currentItem = indices[currentIndex]

	        if (minIndex === maxIndex) {
	            return currentItem >= left && currentItem <= right
	        } else if (currentItem < left) {
	            minIndex = currentIndex + 1
	        } else  if (currentItem > right) {
	            maxIndex = currentIndex - 1
	        } else {
	            return true
	        }
	    }

	    return false;
	}

	function ascending(a, b) {
	    return a > b ? 1 : -1
	}

	},{}],8:[function(require,module,exports){
	var applyProperties = require("./apply-properties")

	var isWidget = require("../vnode/is-widget.js")
	var VPatch = require("../vnode/vpatch.js")

	var render = require("./create-element")
	var updateWidget = require("./update-widget")

	module.exports = applyPatch

	function applyPatch(vpatch, domNode, renderOptions) {
	    var type = vpatch.type
	    var vNode = vpatch.vNode
	    var patch = vpatch.patch

	    switch (type) {
	        case VPatch.REMOVE:
	            return removeNode(domNode, vNode)
	        case VPatch.INSERT:
	            return insertNode(domNode, patch, renderOptions)
	        case VPatch.VTEXT:
	            return stringPatch(domNode, vNode, patch, renderOptions)
	        case VPatch.WIDGET:
	            return widgetPatch(domNode, vNode, patch, renderOptions)
	        case VPatch.VNODE:
	            return vNodePatch(domNode, vNode, patch, renderOptions)
	        case VPatch.ORDER:
	            reorderChildren(domNode, patch)
	            return domNode
	        case VPatch.PROPS:
	            applyProperties(domNode, patch, vNode.properties)
	            return domNode
	        case VPatch.THUNK:
	            return replaceRoot(domNode,
	                renderOptions.patch(domNode, patch, renderOptions))
	        default:
	            return domNode
	    }
	}

	function removeNode(domNode, vNode) {
	    var parentNode = domNode.parentNode

	    if (parentNode) {
	        parentNode.removeChild(domNode)
	    }

	    destroyWidget(domNode, vNode);

	    return null
	}

	function insertNode(parentNode, vNode, renderOptions) {
	    var newNode = render(vNode, renderOptions)

	    if (parentNode) {
	        parentNode.appendChild(newNode)
	    }

	    return parentNode
	}

	function stringPatch(domNode, leftVNode, vText, renderOptions) {
	    var newNode

	    if (domNode.nodeType === 3) {
	        domNode.replaceData(0, domNode.length, vText.text)
	        newNode = domNode
	    } else {
	        var parentNode = domNode.parentNode
	        newNode = render(vText, renderOptions)

	        if (parentNode && newNode !== domNode) {
	            parentNode.replaceChild(newNode, domNode)
	        }
	    }

	    return newNode
	}

	function widgetPatch(domNode, leftVNode, widget, renderOptions) {
	    var updating = updateWidget(leftVNode, widget)
	    var newNode

	    if (updating) {
	        newNode = widget.update(leftVNode, domNode) || domNode
	    } else {
	        newNode = render(widget, renderOptions)
	    }

	    var parentNode = domNode.parentNode

	    if (parentNode && newNode !== domNode) {
	        parentNode.replaceChild(newNode, domNode)
	    }

	    if (!updating) {
	        destroyWidget(domNode, leftVNode)
	    }

	    return newNode
	}

	function vNodePatch(domNode, leftVNode, vNode, renderOptions) {
	    var parentNode = domNode.parentNode
	    var newNode = render(vNode, renderOptions)

	    if (parentNode && newNode !== domNode) {
	        parentNode.replaceChild(newNode, domNode)
	    }

	    return newNode
	}

	function destroyWidget(domNode, w) {
	    if (typeof w.destroy === "function" && isWidget(w)) {
	        w.destroy(domNode)
	    }
	}

	function reorderChildren(domNode, moves) {
	    var childNodes = domNode.childNodes
	    var keyMap = {}
	    var node
	    var remove
	    var insert

	    for (var i = 0; i < moves.removes.length; i++) {
	        remove = moves.removes[i]
	        node = childNodes[remove.from]
	        if (remove.key) {
	            keyMap[remove.key] = node
	        }
	        domNode.removeChild(node)
	    }

	    var length = childNodes.length
	    for (var j = 0; j < moves.inserts.length; j++) {
	        insert = moves.inserts[j]
	        node = keyMap[insert.key]
	        // this is the weirdest bug i've ever seen in webkit
	        domNode.insertBefore(node, insert.to >= length++ ? null : childNodes[insert.to])
	    }
	}

	function replaceRoot(oldRoot, newRoot) {
	    if (oldRoot && newRoot && oldRoot !== newRoot && oldRoot.parentNode) {
	        oldRoot.parentNode.replaceChild(newRoot, oldRoot)
	    }

	    return newRoot;
	}

	},{"../vnode/is-widget.js":16,"../vnode/vpatch.js":19,"./apply-properties":5,"./create-element":6,"./update-widget":10}],9:[function(require,module,exports){
	var document = require("global/document")
	var isArray = require("x-is-array")

	var domIndex = require("./dom-index")
	var patchOp = require("./patch-op")
	module.exports = patch

	function patch(rootNode, patches) {
	    return patchRecursive(rootNode, patches)
	}

	function patchRecursive(rootNode, patches, renderOptions) {
	    var indices = patchIndices(patches)

	    if (indices.length === 0) {
	        return rootNode
	    }

	    var index = domIndex(rootNode, patches.a, indices)
	    var ownerDocument = rootNode.ownerDocument

	    if (!renderOptions) {
	        renderOptions = { patch: patchRecursive }
	        if (ownerDocument !== document) {
	            renderOptions.document = ownerDocument
	        }
	    }

	    for (var i = 0; i < indices.length; i++) {
	        var nodeIndex = indices[i]
	        rootNode = applyPatch(rootNode,
	            index[nodeIndex],
	            patches[nodeIndex],
	            renderOptions)
	    }

	    return rootNode
	}

	function applyPatch(rootNode, domNode, patchList, renderOptions) {
	    if (!domNode) {
	        return rootNode
	    }

	    var newNode

	    if (isArray(patchList)) {
	        for (var i = 0; i < patchList.length; i++) {
	            newNode = patchOp(patchList[i], domNode, renderOptions)

	            if (domNode === rootNode) {
	                rootNode = newNode
	            }
	        }
	    } else {
	        newNode = patchOp(patchList, domNode, renderOptions)

	        if (domNode === rootNode) {
	            rootNode = newNode
	        }
	    }

	    return rootNode
	}

	function patchIndices(patches) {
	    var indices = []

	    for (var key in patches) {
	        if (key !== "a") {
	            indices.push(Number(key))
	        }
	    }

	    return indices
	}

	},{"./dom-index":7,"./patch-op":8,"global/document":2,"x-is-array":4}],10:[function(require,module,exports){
	var isWidget = require("../vnode/is-widget.js")

	module.exports = updateWidget

	function updateWidget(a, b) {
	    if (isWidget(a) && isWidget(b)) {
	        if ("name" in a && "name" in b) {
	            return a.id === b.id
	        } else {
	            return a.init === b.init
	        }
	    }

	    return false
	}

	},{"../vnode/is-widget.js":16}],11:[function(require,module,exports){
	var isVNode = require("./is-vnode")
	var isVText = require("./is-vtext")
	var isWidget = require("./is-widget")
	var isThunk = require("./is-thunk")

	module.exports = handleThunk

	function handleThunk(a, b) {
	    var renderedA = a
	    var renderedB = b

	    if (isThunk(b)) {
	        renderedB = renderThunk(b, a)
	    }

	    if (isThunk(a)) {
	        renderedA = renderThunk(a, null)
	    }

	    return {
	        a: renderedA,
	        b: renderedB
	    }
	}

	function renderThunk(thunk, previous) {
	    var renderedThunk = thunk.vnode

	    if (!renderedThunk) {
	        renderedThunk = thunk.vnode = thunk.render(previous)
	    }

	    if (!(isVNode(renderedThunk) ||
	            isVText(renderedThunk) ||
	            isWidget(renderedThunk))) {
	        throw new Error("thunk did not return a valid node");
	    }

	    return renderedThunk
	}

	},{"./is-thunk":12,"./is-vnode":14,"./is-vtext":15,"./is-widget":16}],12:[function(require,module,exports){
	module.exports = isThunk

	function isThunk(t) {
	    return t && t.type === "Thunk"
	}

	},{}],13:[function(require,module,exports){
	module.exports = isHook

	function isHook(hook) {
	    return hook &&
	      (typeof hook.hook === "function" && !hook.hasOwnProperty("hook") ||
	       typeof hook.unhook === "function" && !hook.hasOwnProperty("unhook"))
	}

	},{}],14:[function(require,module,exports){
	var version = require("./version")

	module.exports = isVirtualNode

	function isVirtualNode(x) {
	    return x && x.type === "VirtualNode" && x.version === version
	}

	},{"./version":17}],15:[function(require,module,exports){
	var version = require("./version")

	module.exports = isVirtualText

	function isVirtualText(x) {
	    return x && x.type === "VirtualText" && x.version === version
	}

	},{"./version":17}],16:[function(require,module,exports){
	module.exports = isWidget

	function isWidget(w) {
	    return w && w.type === "Widget"
	}

	},{}],17:[function(require,module,exports){
	module.exports = "2"

	},{}],18:[function(require,module,exports){
	var version = require("./version")
	var isVNode = require("./is-vnode")
	var isWidget = require("./is-widget")
	var isThunk = require("./is-thunk")
	var isVHook = require("./is-vhook")

	module.exports = VirtualNode

	var noProperties = {}
	var noChildren = []

	function VirtualNode(tagName, properties, children, key, namespace) {
	    this.tagName = tagName
	    this.properties = properties || noProperties
	    this.children = children || noChildren
	    this.key = key != null ? String(key) : undefined
	    this.namespace = (typeof namespace === "string") ? namespace : null

	    var count = (children && children.length) || 0
	    var descendants = 0
	    var hasWidgets = false
	    var hasThunks = false
	    var descendantHooks = false
	    var hooks

	    for (var propName in properties) {
	        if (properties.hasOwnProperty(propName)) {
	            var property = properties[propName]
	            if (isVHook(property) && property.unhook) {
	                if (!hooks) {
	                    hooks = {}
	                }

	                hooks[propName] = property
	            }
	        }
	    }

	    for (var i = 0; i < count; i++) {
	        var child = children[i]
	        if (isVNode(child)) {
	            descendants += child.count || 0

	            if (!hasWidgets && child.hasWidgets) {
	                hasWidgets = true
	            }

	            if (!hasThunks && child.hasThunks) {
	                hasThunks = true
	            }

	            if (!descendantHooks && (child.hooks || child.descendantHooks)) {
	                descendantHooks = true
	            }
	        } else if (!hasWidgets && isWidget(child)) {
	            if (typeof child.destroy === "function") {
	                hasWidgets = true
	            }
	        } else if (!hasThunks && isThunk(child)) {
	            hasThunks = true;
	        }
	    }

	    this.count = count + descendants
	    this.hasWidgets = hasWidgets
	    this.hasThunks = hasThunks
	    this.hooks = hooks
	    this.descendantHooks = descendantHooks
	}

	VirtualNode.prototype.version = version
	VirtualNode.prototype.type = "VirtualNode"

	},{"./is-thunk":12,"./is-vhook":13,"./is-vnode":14,"./is-widget":16,"./version":17}],19:[function(require,module,exports){
	var version = require("./version")

	VirtualPatch.NONE = 0
	VirtualPatch.VTEXT = 1
	VirtualPatch.VNODE = 2
	VirtualPatch.WIDGET = 3
	VirtualPatch.PROPS = 4
	VirtualPatch.ORDER = 5
	VirtualPatch.INSERT = 6
	VirtualPatch.REMOVE = 7
	VirtualPatch.THUNK = 8

	module.exports = VirtualPatch

	function VirtualPatch(type, vNode, patch) {
	    this.type = Number(type)
	    this.vNode = vNode
	    this.patch = patch
	}

	VirtualPatch.prototype.version = version
	VirtualPatch.prototype.type = "VirtualPatch"

	},{"./version":17}],20:[function(require,module,exports){
	var version = require("./version")

	module.exports = VirtualText

	function VirtualText(text) {
	    this.text = String(text)
	}

	VirtualText.prototype.version = version
	VirtualText.prototype.type = "VirtualText"

	},{"./version":17}],21:[function(require,module,exports){
	var isObject = require("is-object")
	var isHook = require("../vnode/is-vhook")

	module.exports = diffProps

	function diffProps(a, b) {
	    var diff

	    for (var aKey in a) {
	        if (!(aKey in b)) {
	            diff = diff || {}
	            diff[aKey] = undefined
	        }

	        var aValue = a[aKey]
	        var bValue = b[aKey]

	        if (aValue === bValue) {
	            continue
	        } else if (isObject(aValue) && isObject(bValue)) {
	            if (getPrototype(bValue) !== getPrototype(aValue)) {
	                diff = diff || {}
	                diff[aKey] = bValue
	            } else if (isHook(bValue)) {
	                 diff = diff || {}
	                 diff[aKey] = bValue
	            } else {
	                var objectDiff = diffProps(aValue, bValue)
	                if (objectDiff) {
	                    diff = diff || {}
	                    diff[aKey] = objectDiff
	                }
	            }
	        } else {
	            diff = diff || {}
	            diff[aKey] = bValue
	        }
	    }

	    for (var bKey in b) {
	        if (!(bKey in a)) {
	            diff = diff || {}
	            diff[bKey] = b[bKey]
	        }
	    }

	    return diff
	}

	function getPrototype(value) {
	  if (Object.getPrototypeOf) {
	    return Object.getPrototypeOf(value)
	  } else if (value.__proto__) {
	    return value.__proto__
	  } else if (value.constructor) {
	    return value.constructor.prototype
	  }
	}

	},{"../vnode/is-vhook":13,"is-object":3}],22:[function(require,module,exports){
	var isArray = require("x-is-array")

	var VPatch = require("../vnode/vpatch")
	var isVNode = require("../vnode/is-vnode")
	var isVText = require("../vnode/is-vtext")
	var isWidget = require("../vnode/is-widget")
	var isThunk = require("../vnode/is-thunk")
	var handleThunk = require("../vnode/handle-thunk")

	var diffProps = require("./diff-props")

	module.exports = diff

	function diff(a, b) {
	    var patch = { a: a }
	    walk(a, b, patch, 0)
	    return patch
	}

	function walk(a, b, patch, index) {
	    if (a === b) {
	        return
	    }

	    var apply = patch[index]
	    var applyClear = false

	    if (isThunk(a) || isThunk(b)) {
	        thunks(a, b, patch, index)
	    } else if (b == null) {

	        // If a is a widget we will add a remove patch for it
	        // Otherwise any child widgets/hooks must be destroyed.
	        // This prevents adding two remove patches for a widget.
	        if (!isWidget(a)) {
	            clearState(a, patch, index)
	            apply = patch[index]
	        }

	        apply = appendPatch(apply, new VPatch(VPatch.REMOVE, a, b))
	    } else if (isVNode(b)) {
	        if (isVNode(a)) {
	            if (a.tagName === b.tagName &&
	                a.namespace === b.namespace &&
	                a.key === b.key) {
	                var propsPatch = diffProps(a.properties, b.properties)
	                if (propsPatch) {
	                    apply = appendPatch(apply,
	                        new VPatch(VPatch.PROPS, a, propsPatch))
	                }
	                apply = diffChildren(a, b, patch, apply, index)
	            } else {
	                apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b))
	                applyClear = true
	            }
	        } else {
	            apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b))
	            applyClear = true
	        }
	    } else if (isVText(b)) {
	        if (!isVText(a)) {
	            apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b))
	            applyClear = true
	        } else if (a.text !== b.text) {
	            apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b))
	        }
	    } else if (isWidget(b)) {
	        if (!isWidget(a)) {
	            applyClear = true
	        }

	        apply = appendPatch(apply, new VPatch(VPatch.WIDGET, a, b))
	    }

	    if (apply) {
	        patch[index] = apply
	    }

	    if (applyClear) {
	        clearState(a, patch, index)
	    }
	}

	function diffChildren(a, b, patch, apply, index) {
	    var aChildren = a.children
	    var orderedSet = reorder(aChildren, b.children)
	    var bChildren = orderedSet.children

	    var aLen = aChildren.length
	    var bLen = bChildren.length
	    var len = aLen > bLen ? aLen : bLen

	    for (var i = 0; i < len; i++) {
	        var leftNode = aChildren[i]
	        var rightNode = bChildren[i]
	        index += 1

	        if (!leftNode) {
	            if (rightNode) {
	                // Excess nodes in b need to be added
	                apply = appendPatch(apply,
	                    new VPatch(VPatch.INSERT, null, rightNode))
	            }
	        } else {
	            walk(leftNode, rightNode, patch, index)
	        }

	        if (isVNode(leftNode) && leftNode.count) {
	            index += leftNode.count
	        }
	    }

	    if (orderedSet.moves) {
	        // Reorder nodes last
	        apply = appendPatch(apply, new VPatch(
	            VPatch.ORDER,
	            a,
	            orderedSet.moves
	        ))
	    }

	    return apply
	}

	function clearState(vNode, patch, index) {
	    // TODO: Make this a single walk, not two
	    unhook(vNode, patch, index)
	    destroyWidgets(vNode, patch, index)
	}

	// Patch records for all destroyed widgets must be added because we need
	// a DOM node reference for the destroy function
	function destroyWidgets(vNode, patch, index) {
	    if (isWidget(vNode)) {
	        if (typeof vNode.destroy === "function") {
	            patch[index] = appendPatch(
	                patch[index],
	                new VPatch(VPatch.REMOVE, vNode, null)
	            )
	        }
	    } else if (isVNode(vNode) && (vNode.hasWidgets || vNode.hasThunks)) {
	        var children = vNode.children
	        var len = children.length
	        for (var i = 0; i < len; i++) {
	            var child = children[i]
	            index += 1

	            destroyWidgets(child, patch, index)

	            if (isVNode(child) && child.count) {
	                index += child.count
	            }
	        }
	    } else if (isThunk(vNode)) {
	        thunks(vNode, null, patch, index)
	    }
	}

	// Create a sub-patch for thunks
	function thunks(a, b, patch, index) {
	    var nodes = handleThunk(a, b)
	    var thunkPatch = diff(nodes.a, nodes.b)
	    if (hasPatches(thunkPatch)) {
	        patch[index] = new VPatch(VPatch.THUNK, null, thunkPatch)
	    }
	}

	function hasPatches(patch) {
	    for (var index in patch) {
	        if (index !== "a") {
	            return true
	        }
	    }

	    return false
	}

	// Execute hooks when two nodes are identical
	function unhook(vNode, patch, index) {
	    if (isVNode(vNode)) {
	        if (vNode.hooks) {
	            patch[index] = appendPatch(
	                patch[index],
	                new VPatch(
	                    VPatch.PROPS,
	                    vNode,
	                    undefinedKeys(vNode.hooks)
	                )
	            )
	        }

	        if (vNode.descendantHooks || vNode.hasThunks) {
	            var children = vNode.children
	            var len = children.length
	            for (var i = 0; i < len; i++) {
	                var child = children[i]
	                index += 1

	                unhook(child, patch, index)

	                if (isVNode(child) && child.count) {
	                    index += child.count
	                }
	            }
	        }
	    } else if (isThunk(vNode)) {
	        thunks(vNode, null, patch, index)
	    }
	}

	function undefinedKeys(obj) {
	    var result = {}

	    for (var key in obj) {
	        result[key] = undefined
	    }

	    return result
	}

	// List diff, naive left to right reordering
	function reorder(aChildren, bChildren) {
	    // O(M) time, O(M) memory
	    var bChildIndex = keyIndex(bChildren)
	    var bKeys = bChildIndex.keys
	    var bFree = bChildIndex.free

	    if (bFree.length === bChildren.length) {
	        return {
	            children: bChildren,
	            moves: null
	        }
	    }

	    // O(N) time, O(N) memory
	    var aChildIndex = keyIndex(aChildren)
	    var aKeys = aChildIndex.keys
	    var aFree = aChildIndex.free

	    if (aFree.length === aChildren.length) {
	        return {
	            children: bChildren,
	            moves: null
	        }
	    }

	    // O(MAX(N, M)) memory
	    var newChildren = []

	    var freeIndex = 0
	    var freeCount = bFree.length
	    var deletedItems = 0

	    // Iterate through a and match a node in b
	    // O(N) time,
	    for (var i = 0 ; i < aChildren.length; i++) {
	        var aItem = aChildren[i]
	        var itemIndex

	        if (aItem.key) {
	            if (bKeys.hasOwnProperty(aItem.key)) {
	                // Match up the old keys
	                itemIndex = bKeys[aItem.key]
	                newChildren.push(bChildren[itemIndex])

	            } else {
	                // Remove old keyed items
	                itemIndex = i - deletedItems++
	                newChildren.push(null)
	            }
	        } else {
	            // Match the item in a with the next free item in b
	            if (freeIndex < freeCount) {
	                itemIndex = bFree[freeIndex++]
	                newChildren.push(bChildren[itemIndex])
	            } else {
	                // There are no free items in b to match with
	                // the free items in a, so the extra free nodes
	                // are deleted.
	                itemIndex = i - deletedItems++
	                newChildren.push(null)
	            }
	        }
	    }

	    var lastFreeIndex = freeIndex >= bFree.length ?
	        bChildren.length :
	        bFree[freeIndex]

	    // Iterate through b and append any new keys
	    // O(M) time
	    for (var j = 0; j < bChildren.length; j++) {
	        var newItem = bChildren[j]

	        if (newItem.key) {
	            if (!aKeys.hasOwnProperty(newItem.key)) {
	                // Add any new keyed items
	                // We are adding new items to the end and then sorting them
	                // in place. In future we should insert new items in place.
	                newChildren.push(newItem)
	            }
	        } else if (j >= lastFreeIndex) {
	            // Add any leftover non-keyed items
	            newChildren.push(newItem)
	        }
	    }

	    var simulate = newChildren.slice()
	    var simulateIndex = 0
	    var removes = []
	    var inserts = []
	    var simulateItem

	    for (var k = 0; k < bChildren.length;) {
	        var wantedItem = bChildren[k]
	        simulateItem = simulate[simulateIndex]

	        // remove items
	        while (simulateItem === null && simulate.length) {
	            removes.push(remove(simulate, simulateIndex, null))
	            simulateItem = simulate[simulateIndex]
	        }

	        if (!simulateItem || simulateItem.key !== wantedItem.key) {
	            // if we need a key in this position...
	            if (wantedItem.key) {
	                if (simulateItem && simulateItem.key) {
	                    // if an insert doesn't put this key in place, it needs to move
	                    if (bKeys[simulateItem.key] !== k + 1) {
	                        removes.push(remove(simulate, simulateIndex, simulateItem.key))
	                        simulateItem = simulate[simulateIndex]
	                        // if the remove didn't put the wanted item in place, we need to insert it
	                        if (!simulateItem || simulateItem.key !== wantedItem.key) {
	                            inserts.push({key: wantedItem.key, to: k})
	                        }
	                        // items are matching, so skip ahead
	                        else {
	                            simulateIndex++
	                        }
	                    }
	                    else {
	                        inserts.push({key: wantedItem.key, to: k})
	                    }
	                }
	                else {
	                    inserts.push({key: wantedItem.key, to: k})
	                }
	                k++
	            }
	            // a key in simulate has no matching wanted key, remove it
	            else if (simulateItem && simulateItem.key) {
	                removes.push(remove(simulate, simulateIndex, simulateItem.key))
	            }
	        }
	        else {
	            simulateIndex++
	            k++
	        }
	    }

	    // remove all the remaining nodes from simulate
	    while(simulateIndex < simulate.length) {
	        simulateItem = simulate[simulateIndex]
	        removes.push(remove(simulate, simulateIndex, simulateItem && simulateItem.key))
	    }

	    // If the only moves we have are deletes then we can just
	    // let the delete patch remove these items.
	    if (removes.length === deletedItems && !inserts.length) {
	        return {
	            children: newChildren,
	            moves: null
	        }
	    }

	    return {
	        children: newChildren,
	        moves: {
	            removes: removes,
	            inserts: inserts
	        }
	    }
	}

	function remove(arr, index, key) {
	    arr.splice(index, 1)

	    return {
	        from: index,
	        key: key
	    }
	}

	function keyIndex(children) {
	    var keys = {}
	    var free = []
	    var length = children.length

	    for (var i = 0; i < length; i++) {
	        var child = children[i]

	        if (child.key) {
	            keys[child.key] = i
	        } else {
	            free.push(i)
	        }
	    }

	    return {
	        keys: keys,     // A hash of key name to index
	        free: free,     // An array of unkeyed item indices
	    }
	}

	function appendPatch(apply, patch) {
	    if (apply) {
	        if (isArray(apply)) {
	            apply.push(patch)
	        } else {
	            apply = [apply, patch]
	        }

	        return apply
	    } else {
	        return patch
	    }
	}

	},{"../vnode/handle-thunk":11,"../vnode/is-thunk":12,"../vnode/is-vnode":14,"../vnode/is-vtext":15,"../vnode/is-widget":16,"../vnode/vpatch":19,"./diff-props":21,"x-is-array":4}],23:[function(require,module,exports){
	var VNode = require('virtual-dom/vnode/vnode');
	var VText = require('virtual-dom/vnode/vtext');
	var diff = require('virtual-dom/vtree/diff');
	var patch = require('virtual-dom/vdom/patch');
	var createElement = require('virtual-dom/vdom/create-element');
	var isHook = require("virtual-dom/vnode/is-vhook");


	Elm.Native.VirtualDom = {};
	Elm.Native.VirtualDom.make = function(elm)
	{
		elm.Native = elm.Native || {};
		elm.Native.VirtualDom = elm.Native.VirtualDom || {};
		if (elm.Native.VirtualDom.values)
		{
			return elm.Native.VirtualDom.values;
		}

		var Element = Elm.Native.Graphics.Element.make(elm);
		var Json = Elm.Native.Json.make(elm);
		var List = Elm.Native.List.make(elm);
		var Signal = Elm.Native.Signal.make(elm);
		var Utils = Elm.Native.Utils.make(elm);

		var ATTRIBUTE_KEY = 'UniqueNameThatOthersAreVeryUnlikelyToUse';



		// VIRTUAL DOM NODES


		function text(string)
		{
			return new VText(string);
		}

		function node(name)
		{
			return F2(function(propertyList, contents) {
				return makeNode(name, propertyList, contents);
			});
		}


		// BUILD VIRTUAL DOME NODES


		function makeNode(name, propertyList, contents)
		{
			var props = listToProperties(propertyList);

			var key, namespace;
			// support keys
			if (props.key !== undefined)
			{
				key = props.key;
				props.key = undefined;
			}

			// support namespace
			if (props.namespace !== undefined)
			{
				namespace = props.namespace;
				props.namespace = undefined;
			}

			// ensure that setting text of an input does not move the cursor
			var useSoftSet =
				(name === 'input' || name === 'textarea')
				&& props.value !== undefined
				&& !isHook(props.value);

			if (useSoftSet)
			{
				props.value = SoftSetHook(props.value);
			}

			return new VNode(name, props, List.toArray(contents), key, namespace);
		}

		function listToProperties(list)
		{
			var object = {};
			while (list.ctor !== '[]')
			{
				var entry = list._0;
				if (entry.key === ATTRIBUTE_KEY)
				{
					object.attributes = object.attributes || {};
					object.attributes[entry.value.attrKey] = entry.value.attrValue;
				}
				else
				{
					object[entry.key] = entry.value;
				}
				list = list._1;
			}
			return object;
		}



		// PROPERTIES AND ATTRIBUTES


		function property(key, value)
		{
			return {
				key: key,
				value: value
			};
		}

		function attribute(key, value)
		{
			return {
				key: ATTRIBUTE_KEY,
				value: {
					attrKey: key,
					attrValue: value
				}
			};
		}



		// NAMESPACED ATTRIBUTES


		function attributeNS(namespace, key, value)
		{
			return {
				key: key,
				value: new AttributeHook(namespace, key, value)
			};
		}

		function AttributeHook(namespace, key, value)
		{
			if (!(this instanceof AttributeHook))
			{
				return new AttributeHook(namespace, key, value);
			}

			this.namespace = namespace;
			this.key = key;
			this.value = value;
		}

		AttributeHook.prototype.hook = function (node, prop, prev)
		{
			if (prev
				&& prev.type === 'AttributeHook'
				&& prev.value === this.value
				&& prev.namespace === this.namespace)
			{
				return;
			}

			node.setAttributeNS(this.namespace, prop, this.value);
		};

		AttributeHook.prototype.unhook = function (node, prop, next)
		{
			if (next
				&& next.type === 'AttributeHook'
				&& next.namespace === this.namespace)
			{
				return;
			}

			node.removeAttributeNS(this.namespace, this.key);
		};

		AttributeHook.prototype.type = 'AttributeHook';



		// EVENTS


		function on(name, options, decoder, createMessage)
		{
			function eventHandler(event)
			{
				var value = A2(Json.runDecoderValue, decoder, event);
				if (value.ctor === 'Ok')
				{
					if (options.stopPropagation)
					{
						event.stopPropagation();
					}
					if (options.preventDefault)
					{
						event.preventDefault();
					}
					Signal.sendMessage(createMessage(value._0));
				}
			}
			return property('on' + name, eventHandler);
		}

		function SoftSetHook(value)
		{
			if (!(this instanceof SoftSetHook))
			{
				return new SoftSetHook(value);
			}

			this.value = value;
		}

		SoftSetHook.prototype.hook = function (node, propertyName)
		{
			if (node[propertyName] !== this.value)
			{
				node[propertyName] = this.value;
			}
		};



		// INTEGRATION WITH ELEMENTS


		function ElementWidget(element)
		{
			this.element = element;
		}

		ElementWidget.prototype.type = "Widget";

		ElementWidget.prototype.init = function init()
		{
			return Element.render(this.element);
		};

		ElementWidget.prototype.update = function update(previous, node)
		{
			return Element.update(node, previous.element, this.element);
		};

		function fromElement(element)
		{
			return new ElementWidget(element);
		}

		function toElement(width, height, html)
		{
			return A3(Element.newElement, width, height, {
				ctor: 'Custom',
				type: 'evancz/elm-html',
				render: render,
				update: update,
				model: html
			});
		}



		// RENDER AND UPDATE


		function render(model)
		{
			var element = Element.createNode('div');
			element.appendChild(createElement(model));
			return element;
		}

		function update(node, oldModel, newModel)
		{
			updateAndReplace(node.firstChild, oldModel, newModel);
			return node;
		}

		function updateAndReplace(node, oldModel, newModel)
		{
			var patches = diff(oldModel, newModel);
			var newNode = patch(node, patches);
			return newNode;
		}



		// LAZINESS


		function lazyRef(fn, a)
		{
			function thunk()
			{
				return fn(a);
			}
			return new Thunk(fn, [a], thunk);
		}

		function lazyRef2(fn, a, b)
		{
			function thunk()
			{
				return A2(fn, a, b);
			}
			return new Thunk(fn, [a,b], thunk);
		}

		function lazyRef3(fn, a, b, c)
		{
			function thunk()
			{
				return A3(fn, a, b, c);
			}
			return new Thunk(fn, [a,b,c], thunk);
		}

		function Thunk(fn, args, thunk)
		{
			/* public (used by VirtualDom.js) */
			this.vnode = null;
			this.key = undefined;

			/* private */
			this.fn = fn;
			this.args = args;
			this.thunk = thunk;
		}

		Thunk.prototype.type = "Thunk";
		Thunk.prototype.render = renderThunk;

		function shouldUpdate(current, previous)
		{
			if (current.fn !== previous.fn)
			{
				return true;
			}

			// if it's the same function, we know the number of args must match
			var cargs = current.args;
			var pargs = previous.args;

			for (var i = cargs.length; i--; )
			{
				if (cargs[i] !== pargs[i])
				{
					return true;
				}
			}

			return false;
		}

		function renderThunk(previous)
		{
			if (previous == null || shouldUpdate(this, previous))
			{
				return this.thunk();
			}
			else
			{
				return previous.vnode;
			}
		}


		return elm.Native.VirtualDom.values = Elm.Native.VirtualDom.values = {
			node: node,
			text: text,
			on: F4(on),

			property: F2(property),
			attribute: F2(attribute),
			attributeNS: F3(attributeNS),

			lazy: F2(lazyRef),
			lazy2: F3(lazyRef2),
			lazy3: F4(lazyRef3),

			toElement: F3(toElement),
			fromElement: fromElement,

			render: createElement,
			updateAndReplace: updateAndReplace
		};
	};

	},{"virtual-dom/vdom/create-element":6,"virtual-dom/vdom/patch":9,"virtual-dom/vnode/is-vhook":13,"virtual-dom/vnode/vnode":18,"virtual-dom/vnode/vtext":20,"virtual-dom/vtree/diff":22}]},{},[23]);

	Elm.VirtualDom = Elm.VirtualDom || {};
	Elm.VirtualDom.make = function (_elm) {
	   "use strict";
	   _elm.VirtualDom = _elm.VirtualDom || {};
	   if (_elm.VirtualDom.values) return _elm.VirtualDom.values;
	   var _U = Elm.Native.Utils.make(_elm),
	   $Basics = Elm.Basics.make(_elm),
	   $Debug = Elm.Debug.make(_elm),
	   $Graphics$Element = Elm.Graphics.Element.make(_elm),
	   $Json$Decode = Elm.Json.Decode.make(_elm),
	   $List = Elm.List.make(_elm),
	   $Maybe = Elm.Maybe.make(_elm),
	   $Native$VirtualDom = Elm.Native.VirtualDom.make(_elm),
	   $Result = Elm.Result.make(_elm),
	   $Signal = Elm.Signal.make(_elm);
	   var _op = {};
	   var lazy3 = $Native$VirtualDom.lazy3;
	   var lazy2 = $Native$VirtualDom.lazy2;
	   var lazy = $Native$VirtualDom.lazy;
	   var defaultOptions = {stopPropagation: false
	                        ,preventDefault: false};
	   var Options = F2(function (a,b) {
	      return {stopPropagation: a,preventDefault: b};
	   });
	   var onWithOptions = $Native$VirtualDom.on;
	   var on = F3(function (eventName,decoder,toMessage) {
	      return A4($Native$VirtualDom.on,
	      eventName,
	      defaultOptions,
	      decoder,
	      toMessage);
	   });
	   var attributeNS = $Native$VirtualDom.attributeNS;
	   var attribute = $Native$VirtualDom.attribute;
	   var property = $Native$VirtualDom.property;
	   var Property = {ctor: "Property"};
	   var fromElement = $Native$VirtualDom.fromElement;
	   var toElement = $Native$VirtualDom.toElement;
	   var text = $Native$VirtualDom.text;
	   var node = $Native$VirtualDom.node;
	   var Node = {ctor: "Node"};
	   return _elm.VirtualDom.values = {_op: _op
	                                   ,text: text
	                                   ,node: node
	                                   ,toElement: toElement
	                                   ,fromElement: fromElement
	                                   ,property: property
	                                   ,attribute: attribute
	                                   ,attributeNS: attributeNS
	                                   ,on: on
	                                   ,onWithOptions: onWithOptions
	                                   ,defaultOptions: defaultOptions
	                                   ,lazy: lazy
	                                   ,lazy2: lazy2
	                                   ,lazy3: lazy3
	                                   ,Options: Options};
	};
	Elm.Html = Elm.Html || {};
	Elm.Html.make = function (_elm) {
	   "use strict";
	   _elm.Html = _elm.Html || {};
	   if (_elm.Html.values) return _elm.Html.values;
	   var _U = Elm.Native.Utils.make(_elm),
	   $Basics = Elm.Basics.make(_elm),
	   $Debug = Elm.Debug.make(_elm),
	   $Graphics$Element = Elm.Graphics.Element.make(_elm),
	   $List = Elm.List.make(_elm),
	   $Maybe = Elm.Maybe.make(_elm),
	   $Result = Elm.Result.make(_elm),
	   $Signal = Elm.Signal.make(_elm),
	   $VirtualDom = Elm.VirtualDom.make(_elm);
	   var _op = {};
	   var fromElement = $VirtualDom.fromElement;
	   var toElement = $VirtualDom.toElement;
	   var text = $VirtualDom.text;
	   var node = $VirtualDom.node;
	   var body = node("body");
	   var section = node("section");
	   var nav = node("nav");
	   var article = node("article");
	   var aside = node("aside");
	   var h1 = node("h1");
	   var h2 = node("h2");
	   var h3 = node("h3");
	   var h4 = node("h4");
	   var h5 = node("h5");
	   var h6 = node("h6");
	   var header = node("header");
	   var footer = node("footer");
	   var address = node("address");
	   var main$ = node("main");
	   var p = node("p");
	   var hr = node("hr");
	   var pre = node("pre");
	   var blockquote = node("blockquote");
	   var ol = node("ol");
	   var ul = node("ul");
	   var li = node("li");
	   var dl = node("dl");
	   var dt = node("dt");
	   var dd = node("dd");
	   var figure = node("figure");
	   var figcaption = node("figcaption");
	   var div = node("div");
	   var a = node("a");
	   var em = node("em");
	   var strong = node("strong");
	   var small = node("small");
	   var s = node("s");
	   var cite = node("cite");
	   var q = node("q");
	   var dfn = node("dfn");
	   var abbr = node("abbr");
	   var time = node("time");
	   var code = node("code");
	   var $var = node("var");
	   var samp = node("samp");
	   var kbd = node("kbd");
	   var sub = node("sub");
	   var sup = node("sup");
	   var i = node("i");
	   var b = node("b");
	   var u = node("u");
	   var mark = node("mark");
	   var ruby = node("ruby");
	   var rt = node("rt");
	   var rp = node("rp");
	   var bdi = node("bdi");
	   var bdo = node("bdo");
	   var span = node("span");
	   var br = node("br");
	   var wbr = node("wbr");
	   var ins = node("ins");
	   var del = node("del");
	   var img = node("img");
	   var iframe = node("iframe");
	   var embed = node("embed");
	   var object = node("object");
	   var param = node("param");
	   var video = node("video");
	   var audio = node("audio");
	   var source = node("source");
	   var track = node("track");
	   var canvas = node("canvas");
	   var svg = node("svg");
	   var math = node("math");
	   var table = node("table");
	   var caption = node("caption");
	   var colgroup = node("colgroup");
	   var col = node("col");
	   var tbody = node("tbody");
	   var thead = node("thead");
	   var tfoot = node("tfoot");
	   var tr = node("tr");
	   var td = node("td");
	   var th = node("th");
	   var form = node("form");
	   var fieldset = node("fieldset");
	   var legend = node("legend");
	   var label = node("label");
	   var input = node("input");
	   var button = node("button");
	   var select = node("select");
	   var datalist = node("datalist");
	   var optgroup = node("optgroup");
	   var option = node("option");
	   var textarea = node("textarea");
	   var keygen = node("keygen");
	   var output = node("output");
	   var progress = node("progress");
	   var meter = node("meter");
	   var details = node("details");
	   var summary = node("summary");
	   var menuitem = node("menuitem");
	   var menu = node("menu");
	   return _elm.Html.values = {_op: _op
	                             ,node: node
	                             ,text: text
	                             ,toElement: toElement
	                             ,fromElement: fromElement
	                             ,body: body
	                             ,section: section
	                             ,nav: nav
	                             ,article: article
	                             ,aside: aside
	                             ,h1: h1
	                             ,h2: h2
	                             ,h3: h3
	                             ,h4: h4
	                             ,h5: h5
	                             ,h6: h6
	                             ,header: header
	                             ,footer: footer
	                             ,address: address
	                             ,main$: main$
	                             ,p: p
	                             ,hr: hr
	                             ,pre: pre
	                             ,blockquote: blockquote
	                             ,ol: ol
	                             ,ul: ul
	                             ,li: li
	                             ,dl: dl
	                             ,dt: dt
	                             ,dd: dd
	                             ,figure: figure
	                             ,figcaption: figcaption
	                             ,div: div
	                             ,a: a
	                             ,em: em
	                             ,strong: strong
	                             ,small: small
	                             ,s: s
	                             ,cite: cite
	                             ,q: q
	                             ,dfn: dfn
	                             ,abbr: abbr
	                             ,time: time
	                             ,code: code
	                             ,$var: $var
	                             ,samp: samp
	                             ,kbd: kbd
	                             ,sub: sub
	                             ,sup: sup
	                             ,i: i
	                             ,b: b
	                             ,u: u
	                             ,mark: mark
	                             ,ruby: ruby
	                             ,rt: rt
	                             ,rp: rp
	                             ,bdi: bdi
	                             ,bdo: bdo
	                             ,span: span
	                             ,br: br
	                             ,wbr: wbr
	                             ,ins: ins
	                             ,del: del
	                             ,img: img
	                             ,iframe: iframe
	                             ,embed: embed
	                             ,object: object
	                             ,param: param
	                             ,video: video
	                             ,audio: audio
	                             ,source: source
	                             ,track: track
	                             ,canvas: canvas
	                             ,svg: svg
	                             ,math: math
	                             ,table: table
	                             ,caption: caption
	                             ,colgroup: colgroup
	                             ,col: col
	                             ,tbody: tbody
	                             ,thead: thead
	                             ,tfoot: tfoot
	                             ,tr: tr
	                             ,td: td
	                             ,th: th
	                             ,form: form
	                             ,fieldset: fieldset
	                             ,legend: legend
	                             ,label: label
	                             ,input: input
	                             ,button: button
	                             ,select: select
	                             ,datalist: datalist
	                             ,optgroup: optgroup
	                             ,option: option
	                             ,textarea: textarea
	                             ,keygen: keygen
	                             ,output: output
	                             ,progress: progress
	                             ,meter: meter
	                             ,details: details
	                             ,summary: summary
	                             ,menuitem: menuitem
	                             ,menu: menu};
	};
	Elm.Html = Elm.Html || {};
	Elm.Html.Attributes = Elm.Html.Attributes || {};
	Elm.Html.Attributes.make = function (_elm) {
	   "use strict";
	   _elm.Html = _elm.Html || {};
	   _elm.Html.Attributes = _elm.Html.Attributes || {};
	   if (_elm.Html.Attributes.values)
	   return _elm.Html.Attributes.values;
	   var _U = Elm.Native.Utils.make(_elm),
	   $Basics = Elm.Basics.make(_elm),
	   $Debug = Elm.Debug.make(_elm),
	   $Html = Elm.Html.make(_elm),
	   $Json$Encode = Elm.Json.Encode.make(_elm),
	   $List = Elm.List.make(_elm),
	   $Maybe = Elm.Maybe.make(_elm),
	   $Result = Elm.Result.make(_elm),
	   $Signal = Elm.Signal.make(_elm),
	   $String = Elm.String.make(_elm),
	   $VirtualDom = Elm.VirtualDom.make(_elm);
	   var _op = {};
	   var attribute = $VirtualDom.attribute;
	   var contextmenu = function (value) {
	      return A2(attribute,"contextmenu",value);
	   };
	   var property = $VirtualDom.property;
	   var stringProperty = F2(function (name,string) {
	      return A2(property,name,$Json$Encode.string(string));
	   });
	   var $class = function (name) {
	      return A2(stringProperty,"className",name);
	   };
	   var id = function (name) {
	      return A2(stringProperty,"id",name);
	   };
	   var title = function (name) {
	      return A2(stringProperty,"title",name);
	   };
	   var accesskey = function ($char) {
	      return A2(stringProperty,
	      "accessKey",
	      $String.fromChar($char));
	   };
	   var dir = function (value) {
	      return A2(stringProperty,"dir",value);
	   };
	   var draggable = function (value) {
	      return A2(stringProperty,"draggable",value);
	   };
	   var dropzone = function (value) {
	      return A2(stringProperty,"dropzone",value);
	   };
	   var itemprop = function (value) {
	      return A2(stringProperty,"itemprop",value);
	   };
	   var lang = function (value) {
	      return A2(stringProperty,"lang",value);
	   };
	   var tabindex = function (n) {
	      return A2(stringProperty,"tabIndex",$Basics.toString(n));
	   };
	   var charset = function (value) {
	      return A2(stringProperty,"charset",value);
	   };
	   var content = function (value) {
	      return A2(stringProperty,"content",value);
	   };
	   var httpEquiv = function (value) {
	      return A2(stringProperty,"httpEquiv",value);
	   };
	   var language = function (value) {
	      return A2(stringProperty,"language",value);
	   };
	   var src = function (value) {
	      return A2(stringProperty,"src",value);
	   };
	   var height = function (value) {
	      return A2(stringProperty,"height",$Basics.toString(value));
	   };
	   var width = function (value) {
	      return A2(stringProperty,"width",$Basics.toString(value));
	   };
	   var alt = function (value) {
	      return A2(stringProperty,"alt",value);
	   };
	   var preload = function (value) {
	      return A2(stringProperty,"preload",value);
	   };
	   var poster = function (value) {
	      return A2(stringProperty,"poster",value);
	   };
	   var kind = function (value) {
	      return A2(stringProperty,"kind",value);
	   };
	   var srclang = function (value) {
	      return A2(stringProperty,"srclang",value);
	   };
	   var sandbox = function (value) {
	      return A2(stringProperty,"sandbox",value);
	   };
	   var srcdoc = function (value) {
	      return A2(stringProperty,"srcdoc",value);
	   };
	   var type$ = function (value) {
	      return A2(stringProperty,"type",value);
	   };
	   var value = function (value) {
	      return A2(stringProperty,"value",value);
	   };
	   var placeholder = function (value) {
	      return A2(stringProperty,"placeholder",value);
	   };
	   var accept = function (value) {
	      return A2(stringProperty,"accept",value);
	   };
	   var acceptCharset = function (value) {
	      return A2(stringProperty,"acceptCharset",value);
	   };
	   var action = function (value) {
	      return A2(stringProperty,"action",value);
	   };
	   var autocomplete = function (bool) {
	      return A2(stringProperty,"autocomplete",bool ? "on" : "off");
	   };
	   var autosave = function (value) {
	      return A2(stringProperty,"autosave",value);
	   };
	   var enctype = function (value) {
	      return A2(stringProperty,"enctype",value);
	   };
	   var formaction = function (value) {
	      return A2(stringProperty,"formAction",value);
	   };
	   var list = function (value) {
	      return A2(stringProperty,"list",value);
	   };
	   var minlength = function (n) {
	      return A2(stringProperty,"minLength",$Basics.toString(n));
	   };
	   var maxlength = function (n) {
	      return A2(stringProperty,"maxLength",$Basics.toString(n));
	   };
	   var method = function (value) {
	      return A2(stringProperty,"method",value);
	   };
	   var name = function (value) {
	      return A2(stringProperty,"name",value);
	   };
	   var pattern = function (value) {
	      return A2(stringProperty,"pattern",value);
	   };
	   var size = function (n) {
	      return A2(stringProperty,"size",$Basics.toString(n));
	   };
	   var $for = function (value) {
	      return A2(stringProperty,"htmlFor",value);
	   };
	   var form = function (value) {
	      return A2(stringProperty,"form",value);
	   };
	   var max = function (value) {
	      return A2(stringProperty,"max",value);
	   };
	   var min = function (value) {
	      return A2(stringProperty,"min",value);
	   };
	   var step = function (n) {
	      return A2(stringProperty,"step",n);
	   };
	   var cols = function (n) {
	      return A2(stringProperty,"cols",$Basics.toString(n));
	   };
	   var rows = function (n) {
	      return A2(stringProperty,"rows",$Basics.toString(n));
	   };
	   var wrap = function (value) {
	      return A2(stringProperty,"wrap",value);
	   };
	   var usemap = function (value) {
	      return A2(stringProperty,"useMap",value);
	   };
	   var shape = function (value) {
	      return A2(stringProperty,"shape",value);
	   };
	   var coords = function (value) {
	      return A2(stringProperty,"coords",value);
	   };
	   var challenge = function (value) {
	      return A2(stringProperty,"challenge",value);
	   };
	   var keytype = function (value) {
	      return A2(stringProperty,"keytype",value);
	   };
	   var align = function (value) {
	      return A2(stringProperty,"align",value);
	   };
	   var cite = function (value) {
	      return A2(stringProperty,"cite",value);
	   };
	   var href = function (value) {
	      return A2(stringProperty,"href",value);
	   };
	   var target = function (value) {
	      return A2(stringProperty,"target",value);
	   };
	   var downloadAs = function (value) {
	      return A2(stringProperty,"download",value);
	   };
	   var hreflang = function (value) {
	      return A2(stringProperty,"hreflang",value);
	   };
	   var media = function (value) {
	      return A2(stringProperty,"media",value);
	   };
	   var ping = function (value) {
	      return A2(stringProperty,"ping",value);
	   };
	   var rel = function (value) {
	      return A2(stringProperty,"rel",value);
	   };
	   var datetime = function (value) {
	      return A2(stringProperty,"datetime",value);
	   };
	   var pubdate = function (value) {
	      return A2(stringProperty,"pubdate",value);
	   };
	   var start = function (n) {
	      return A2(stringProperty,"start",$Basics.toString(n));
	   };
	   var colspan = function (n) {
	      return A2(stringProperty,"colSpan",$Basics.toString(n));
	   };
	   var headers = function (value) {
	      return A2(stringProperty,"headers",value);
	   };
	   var rowspan = function (n) {
	      return A2(stringProperty,"rowSpan",$Basics.toString(n));
	   };
	   var scope = function (value) {
	      return A2(stringProperty,"scope",value);
	   };
	   var manifest = function (value) {
	      return A2(stringProperty,"manifest",value);
	   };
	   var boolProperty = F2(function (name,bool) {
	      return A2(property,name,$Json$Encode.bool(bool));
	   });
	   var hidden = function (bool) {
	      return A2(boolProperty,"hidden",bool);
	   };
	   var contenteditable = function (bool) {
	      return A2(boolProperty,"contentEditable",bool);
	   };
	   var spellcheck = function (bool) {
	      return A2(boolProperty,"spellcheck",bool);
	   };
	   var async = function (bool) {
	      return A2(boolProperty,"async",bool);
	   };
	   var defer = function (bool) {
	      return A2(boolProperty,"defer",bool);
	   };
	   var scoped = function (bool) {
	      return A2(boolProperty,"scoped",bool);
	   };
	   var autoplay = function (bool) {
	      return A2(boolProperty,"autoplay",bool);
	   };
	   var controls = function (bool) {
	      return A2(boolProperty,"controls",bool);
	   };
	   var loop = function (bool) {
	      return A2(boolProperty,"loop",bool);
	   };
	   var $default = function (bool) {
	      return A2(boolProperty,"default",bool);
	   };
	   var seamless = function (bool) {
	      return A2(boolProperty,"seamless",bool);
	   };
	   var checked = function (bool) {
	      return A2(boolProperty,"checked",bool);
	   };
	   var selected = function (bool) {
	      return A2(boolProperty,"selected",bool);
	   };
	   var autofocus = function (bool) {
	      return A2(boolProperty,"autofocus",bool);
	   };
	   var disabled = function (bool) {
	      return A2(boolProperty,"disabled",bool);
	   };
	   var multiple = function (bool) {
	      return A2(boolProperty,"multiple",bool);
	   };
	   var novalidate = function (bool) {
	      return A2(boolProperty,"noValidate",bool);
	   };
	   var readonly = function (bool) {
	      return A2(boolProperty,"readOnly",bool);
	   };
	   var required = function (bool) {
	      return A2(boolProperty,"required",bool);
	   };
	   var ismap = function (value) {
	      return A2(boolProperty,"isMap",value);
	   };
	   var download = function (bool) {
	      return A2(boolProperty,"download",bool);
	   };
	   var reversed = function (bool) {
	      return A2(boolProperty,"reversed",bool);
	   };
	   var classList = function (list) {
	      return $class(A2($String.join,
	      " ",
	      A2($List.map,$Basics.fst,A2($List.filter,$Basics.snd,list))));
	   };
	   var style = function (props) {
	      return A2(property,
	      "style",
	      $Json$Encode.object(A2($List.map,
	      function (_p0) {
	         var _p1 = _p0;
	         return {ctor: "_Tuple2"
	                ,_0: _p1._0
	                ,_1: $Json$Encode.string(_p1._1)};
	      },
	      props)));
	   };
	   var key = function (k) {    return A2(stringProperty,"key",k);};
	   return _elm.Html.Attributes.values = {_op: _op
	                                        ,key: key
	                                        ,style: style
	                                        ,$class: $class
	                                        ,classList: classList
	                                        ,id: id
	                                        ,title: title
	                                        ,hidden: hidden
	                                        ,type$: type$
	                                        ,value: value
	                                        ,checked: checked
	                                        ,placeholder: placeholder
	                                        ,selected: selected
	                                        ,accept: accept
	                                        ,acceptCharset: acceptCharset
	                                        ,action: action
	                                        ,autocomplete: autocomplete
	                                        ,autofocus: autofocus
	                                        ,autosave: autosave
	                                        ,disabled: disabled
	                                        ,enctype: enctype
	                                        ,formaction: formaction
	                                        ,list: list
	                                        ,maxlength: maxlength
	                                        ,minlength: minlength
	                                        ,method: method
	                                        ,multiple: multiple
	                                        ,name: name
	                                        ,novalidate: novalidate
	                                        ,pattern: pattern
	                                        ,readonly: readonly
	                                        ,required: required
	                                        ,size: size
	                                        ,$for: $for
	                                        ,form: form
	                                        ,max: max
	                                        ,min: min
	                                        ,step: step
	                                        ,cols: cols
	                                        ,rows: rows
	                                        ,wrap: wrap
	                                        ,href: href
	                                        ,target: target
	                                        ,download: download
	                                        ,downloadAs: downloadAs
	                                        ,hreflang: hreflang
	                                        ,media: media
	                                        ,ping: ping
	                                        ,rel: rel
	                                        ,ismap: ismap
	                                        ,usemap: usemap
	                                        ,shape: shape
	                                        ,coords: coords
	                                        ,src: src
	                                        ,height: height
	                                        ,width: width
	                                        ,alt: alt
	                                        ,autoplay: autoplay
	                                        ,controls: controls
	                                        ,loop: loop
	                                        ,preload: preload
	                                        ,poster: poster
	                                        ,$default: $default
	                                        ,kind: kind
	                                        ,srclang: srclang
	                                        ,sandbox: sandbox
	                                        ,seamless: seamless
	                                        ,srcdoc: srcdoc
	                                        ,reversed: reversed
	                                        ,start: start
	                                        ,align: align
	                                        ,colspan: colspan
	                                        ,rowspan: rowspan
	                                        ,headers: headers
	                                        ,scope: scope
	                                        ,async: async
	                                        ,charset: charset
	                                        ,content: content
	                                        ,defer: defer
	                                        ,httpEquiv: httpEquiv
	                                        ,language: language
	                                        ,scoped: scoped
	                                        ,accesskey: accesskey
	                                        ,contenteditable: contenteditable
	                                        ,contextmenu: contextmenu
	                                        ,dir: dir
	                                        ,draggable: draggable
	                                        ,dropzone: dropzone
	                                        ,itemprop: itemprop
	                                        ,lang: lang
	                                        ,spellcheck: spellcheck
	                                        ,tabindex: tabindex
	                                        ,challenge: challenge
	                                        ,keytype: keytype
	                                        ,cite: cite
	                                        ,datetime: datetime
	                                        ,pubdate: pubdate
	                                        ,manifest: manifest
	                                        ,property: property
	                                        ,attribute: attribute};
	};
	Elm.Html = Elm.Html || {};
	Elm.Html.Events = Elm.Html.Events || {};
	Elm.Html.Events.make = function (_elm) {
	   "use strict";
	   _elm.Html = _elm.Html || {};
	   _elm.Html.Events = _elm.Html.Events || {};
	   if (_elm.Html.Events.values) return _elm.Html.Events.values;
	   var _U = Elm.Native.Utils.make(_elm),
	   $Basics = Elm.Basics.make(_elm),
	   $Debug = Elm.Debug.make(_elm),
	   $Html = Elm.Html.make(_elm),
	   $Json$Decode = Elm.Json.Decode.make(_elm),
	   $List = Elm.List.make(_elm),
	   $Maybe = Elm.Maybe.make(_elm),
	   $Result = Elm.Result.make(_elm),
	   $Signal = Elm.Signal.make(_elm),
	   $VirtualDom = Elm.VirtualDom.make(_elm);
	   var _op = {};
	   var keyCode = A2($Json$Decode._op[":="],
	   "keyCode",
	   $Json$Decode.$int);
	   var targetChecked = A2($Json$Decode.at,
	   _U.list(["target","checked"]),
	   $Json$Decode.bool);
	   var targetValue = A2($Json$Decode.at,
	   _U.list(["target","value"]),
	   $Json$Decode.string);
	   var defaultOptions = $VirtualDom.defaultOptions;
	   var Options = F2(function (a,b) {
	      return {stopPropagation: a,preventDefault: b};
	   });
	   var onWithOptions = $VirtualDom.onWithOptions;
	   var on = $VirtualDom.on;
	   var messageOn = F3(function (name,addr,msg) {
	      return A3(on,
	      name,
	      $Json$Decode.value,
	      function (_p0) {
	         return A2($Signal.message,addr,msg);
	      });
	   });
	   var onClick = messageOn("click");
	   var onDoubleClick = messageOn("dblclick");
	   var onMouseMove = messageOn("mousemove");
	   var onMouseDown = messageOn("mousedown");
	   var onMouseUp = messageOn("mouseup");
	   var onMouseEnter = messageOn("mouseenter");
	   var onMouseLeave = messageOn("mouseleave");
	   var onMouseOver = messageOn("mouseover");
	   var onMouseOut = messageOn("mouseout");
	   var onBlur = messageOn("blur");
	   var onFocus = messageOn("focus");
	   var onSubmit = messageOn("submit");
	   var onKey = F3(function (name,addr,handler) {
	      return A3(on,
	      name,
	      keyCode,
	      function (code) {
	         return A2($Signal.message,addr,handler(code));
	      });
	   });
	   var onKeyUp = onKey("keyup");
	   var onKeyDown = onKey("keydown");
	   var onKeyPress = onKey("keypress");
	   return _elm.Html.Events.values = {_op: _op
	                                    ,onBlur: onBlur
	                                    ,onFocus: onFocus
	                                    ,onSubmit: onSubmit
	                                    ,onKeyUp: onKeyUp
	                                    ,onKeyDown: onKeyDown
	                                    ,onKeyPress: onKeyPress
	                                    ,onClick: onClick
	                                    ,onDoubleClick: onDoubleClick
	                                    ,onMouseMove: onMouseMove
	                                    ,onMouseDown: onMouseDown
	                                    ,onMouseUp: onMouseUp
	                                    ,onMouseEnter: onMouseEnter
	                                    ,onMouseLeave: onMouseLeave
	                                    ,onMouseOver: onMouseOver
	                                    ,onMouseOut: onMouseOut
	                                    ,on: on
	                                    ,onWithOptions: onWithOptions
	                                    ,defaultOptions: defaultOptions
	                                    ,targetValue: targetValue
	                                    ,targetChecked: targetChecked
	                                    ,keyCode: keyCode
	                                    ,Options: Options};
	};
	Elm.Native.Http = {};
	Elm.Native.Http.make = function(localRuntime) {

		localRuntime.Native = localRuntime.Native || {};
		localRuntime.Native.Http = localRuntime.Native.Http || {};
		if (localRuntime.Native.Http.values)
		{
			return localRuntime.Native.Http.values;
		}

		var Dict = Elm.Dict.make(localRuntime);
		var List = Elm.List.make(localRuntime);
		var Maybe = Elm.Maybe.make(localRuntime);
		var Task = Elm.Native.Task.make(localRuntime);


		function send(settings, request)
		{
			return Task.asyncFunction(function(callback) {
				var req = new XMLHttpRequest();

				// start
				if (settings.onStart.ctor === 'Just')
				{
					req.addEventListener('loadStart', function() {
						var task = settings.onStart._0;
						Task.spawn(task);
					});
				}

				// progress
				if (settings.onProgress.ctor === 'Just')
				{
					req.addEventListener('progress', function(event) {
						var progress = !event.lengthComputable
							? Maybe.Nothing
							: Maybe.Just({
								_: {},
								loaded: event.loaded,
								total: event.total
							});
						var task = settings.onProgress._0(progress);
						Task.spawn(task);
					});
				}

				// end
				req.addEventListener('error', function() {
					return callback(Task.fail({ ctor: 'RawNetworkError' }));
				});

				req.addEventListener('timeout', function() {
					return callback(Task.fail({ ctor: 'RawTimeout' }));
				});

				req.addEventListener('load', function() {
					return callback(Task.succeed(toResponse(req)));
				});

				req.open(request.verb, request.url, true);

				// set all the headers
				function setHeader(pair) {
					req.setRequestHeader(pair._0, pair._1);
				}
				A2(List.map, setHeader, request.headers);

				// set the timeout
				req.timeout = settings.timeout;

				// enable this withCredentials thing
				req.withCredentials = settings.withCredentials;

				// ask for a specific MIME type for the response
				if (settings.desiredResponseType.ctor === 'Just')
				{
					req.overrideMimeType(settings.desiredResponseType._0);
				}

				// actuall send the request
				if(request.body.ctor === "BodyFormData")
				{
					req.send(request.body.formData)
				}
				else
				{
					req.send(request.body._0);
				}
			});
		}


		// deal with responses

		function toResponse(req)
		{
			var tag = req.responseType === 'blob' ? 'Blob' : 'Text'
			var response = tag === 'Blob' ? req.response : req.responseText;
			return {
				_: {},
				status: req.status,
				statusText: req.statusText,
				headers: parseHeaders(req.getAllResponseHeaders()),
				url: req.responseURL,
				value: { ctor: tag, _0: response }
			};
		}


		function parseHeaders(rawHeaders)
		{
			var headers = Dict.empty;

			if (!rawHeaders)
			{
				return headers;
			}

			var headerPairs = rawHeaders.split('\u000d\u000a');
			for (var i = headerPairs.length; i--; )
			{
				var headerPair = headerPairs[i];
				var index = headerPair.indexOf('\u003a\u0020');
				if (index > 0)
				{
					var key = headerPair.substring(0, index);
					var value = headerPair.substring(index + 2);

					headers = A3(Dict.update, key, function(oldValue) {
						if (oldValue.ctor === 'Just')
						{
							return Maybe.Just(value + ', ' + oldValue._0);
						}
						return Maybe.Just(value);
					}, headers);
				}
			}

			return headers;
		}


		function multipart(dataList)
		{
			var formData = new FormData();

			while (dataList.ctor !== '[]')
			{
				var data = dataList._0;
				if (data.ctor === 'StringData')
				{
					formData.append(data._0, data._1);
				}
				else
				{
					var fileName = data._1.ctor === 'Nothing'
						? undefined
						: data._1._0;
					formData.append(data._0, data._2, fileName);
				}
				dataList = dataList._1;
			}

			return { ctor: 'BodyFormData', formData: formData };
		}


		function uriEncode(string)
		{
			return encodeURIComponent(string);
		}

		function uriDecode(string)
		{
			return decodeURIComponent(string);
		}

		return localRuntime.Native.Http.values = {
			send: F2(send),
			multipart: multipart,
			uriEncode: uriEncode,
			uriDecode: uriDecode
		};
	};

	Elm.Http = Elm.Http || {};
	Elm.Http.make = function (_elm) {
	   "use strict";
	   _elm.Http = _elm.Http || {};
	   if (_elm.Http.values) return _elm.Http.values;
	   var _U = Elm.Native.Utils.make(_elm),
	   $Basics = Elm.Basics.make(_elm),
	   $Debug = Elm.Debug.make(_elm),
	   $Dict = Elm.Dict.make(_elm),
	   $Json$Decode = Elm.Json.Decode.make(_elm),
	   $List = Elm.List.make(_elm),
	   $Maybe = Elm.Maybe.make(_elm),
	   $Native$Http = Elm.Native.Http.make(_elm),
	   $Result = Elm.Result.make(_elm),
	   $Signal = Elm.Signal.make(_elm),
	   $String = Elm.String.make(_elm),
	   $Task = Elm.Task.make(_elm),
	   $Time = Elm.Time.make(_elm);
	   var _op = {};
	   var send = $Native$Http.send;
	   var BadResponse = F2(function (a,b) {
	      return {ctor: "BadResponse",_0: a,_1: b};
	   });
	   var UnexpectedPayload = function (a) {
	      return {ctor: "UnexpectedPayload",_0: a};
	   };
	   var handleResponse = F2(function (handle,response) {
	      if (_U.cmp(200,
	      response.status) < 1 && _U.cmp(response.status,300) < 0) {
	            var _p0 = response.value;
	            if (_p0.ctor === "Text") {
	                  return handle(_p0._0);
	               } else {
	                  return $Task.fail(UnexpectedPayload("Response body is a blob, expecting a string."));
	               }
	         } else return $Task.fail(A2(BadResponse,
	         response.status,
	         response.statusText));
	   });
	   var NetworkError = {ctor: "NetworkError"};
	   var Timeout = {ctor: "Timeout"};
	   var promoteError = function (rawError) {
	      var _p1 = rawError;
	      if (_p1.ctor === "RawTimeout") {
	            return Timeout;
	         } else {
	            return NetworkError;
	         }
	   };
	   var fromJson = F2(function (decoder,response) {
	      var decode = function (str) {
	         var _p2 = A2($Json$Decode.decodeString,decoder,str);
	         if (_p2.ctor === "Ok") {
	               return $Task.succeed(_p2._0);
	            } else {
	               return $Task.fail(UnexpectedPayload(_p2._0));
	            }
	      };
	      return A2($Task.andThen,
	      A2($Task.mapError,promoteError,response),
	      handleResponse(decode));
	   });
	   var RawNetworkError = {ctor: "RawNetworkError"};
	   var RawTimeout = {ctor: "RawTimeout"};
	   var Blob = function (a) {    return {ctor: "Blob",_0: a};};
	   var Text = function (a) {    return {ctor: "Text",_0: a};};
	   var Response = F5(function (a,b,c,d,e) {
	      return {status: a,statusText: b,headers: c,url: d,value: e};
	   });
	   var defaultSettings = {timeout: 0
	                         ,onStart: $Maybe.Nothing
	                         ,onProgress: $Maybe.Nothing
	                         ,desiredResponseType: $Maybe.Nothing
	                         ,withCredentials: false};
	   var post = F3(function (decoder,url,body) {
	      var request = {verb: "POST"
	                    ,headers: _U.list([])
	                    ,url: url
	                    ,body: body};
	      return A2(fromJson,decoder,A2(send,defaultSettings,request));
	   });
	   var Settings = F5(function (a,b,c,d,e) {
	      return {timeout: a
	             ,onStart: b
	             ,onProgress: c
	             ,desiredResponseType: d
	             ,withCredentials: e};
	   });
	   var multipart = $Native$Http.multipart;
	   var FileData = F3(function (a,b,c) {
	      return {ctor: "FileData",_0: a,_1: b,_2: c};
	   });
	   var BlobData = F3(function (a,b,c) {
	      return {ctor: "BlobData",_0: a,_1: b,_2: c};
	   });
	   var blobData = BlobData;
	   var StringData = F2(function (a,b) {
	      return {ctor: "StringData",_0: a,_1: b};
	   });
	   var stringData = StringData;
	   var BodyBlob = function (a) {
	      return {ctor: "BodyBlob",_0: a};
	   };
	   var BodyFormData = {ctor: "BodyFormData"};
	   var ArrayBuffer = {ctor: "ArrayBuffer"};
	   var BodyString = function (a) {
	      return {ctor: "BodyString",_0: a};
	   };
	   var string = BodyString;
	   var Empty = {ctor: "Empty"};
	   var empty = Empty;
	   var getString = function (url) {
	      var request = {verb: "GET"
	                    ,headers: _U.list([])
	                    ,url: url
	                    ,body: empty};
	      return A2($Task.andThen,
	      A2($Task.mapError,
	      promoteError,
	      A2(send,defaultSettings,request)),
	      handleResponse($Task.succeed));
	   };
	   var get = F2(function (decoder,url) {
	      var request = {verb: "GET"
	                    ,headers: _U.list([])
	                    ,url: url
	                    ,body: empty};
	      return A2(fromJson,decoder,A2(send,defaultSettings,request));
	   });
	   var Request = F4(function (a,b,c,d) {
	      return {verb: a,headers: b,url: c,body: d};
	   });
	   var uriDecode = $Native$Http.uriDecode;
	   var uriEncode = $Native$Http.uriEncode;
	   var queryEscape = function (string) {
	      return A2($String.join,
	      "+",
	      A2($String.split,"%20",uriEncode(string)));
	   };
	   var queryPair = function (_p3) {
	      var _p4 = _p3;
	      return A2($Basics._op["++"],
	      queryEscape(_p4._0),
	      A2($Basics._op["++"],"=",queryEscape(_p4._1)));
	   };
	   var url = F2(function (baseUrl,args) {
	      var _p5 = args;
	      if (_p5.ctor === "[]") {
	            return baseUrl;
	         } else {
	            return A2($Basics._op["++"],
	            baseUrl,
	            A2($Basics._op["++"],
	            "?",
	            A2($String.join,"&",A2($List.map,queryPair,args))));
	         }
	   });
	   var TODO_implement_file_in_another_library = {ctor: "TODO_implement_file_in_another_library"};
	   var TODO_implement_blob_in_another_library = {ctor: "TODO_implement_blob_in_another_library"};
	   return _elm.Http.values = {_op: _op
	                             ,getString: getString
	                             ,get: get
	                             ,post: post
	                             ,send: send
	                             ,url: url
	                             ,uriEncode: uriEncode
	                             ,uriDecode: uriDecode
	                             ,empty: empty
	                             ,string: string
	                             ,multipart: multipart
	                             ,stringData: stringData
	                             ,defaultSettings: defaultSettings
	                             ,fromJson: fromJson
	                             ,Request: Request
	                             ,Settings: Settings
	                             ,Response: Response
	                             ,Text: Text
	                             ,Blob: Blob
	                             ,Timeout: Timeout
	                             ,NetworkError: NetworkError
	                             ,UnexpectedPayload: UnexpectedPayload
	                             ,BadResponse: BadResponse
	                             ,RawTimeout: RawTimeout
	                             ,RawNetworkError: RawNetworkError};
	};
	Elm.StartApp = Elm.StartApp || {};
	Elm.StartApp.make = function (_elm) {
	   "use strict";
	   _elm.StartApp = _elm.StartApp || {};
	   if (_elm.StartApp.values) return _elm.StartApp.values;
	   var _U = Elm.Native.Utils.make(_elm),
	   $Basics = Elm.Basics.make(_elm),
	   $Debug = Elm.Debug.make(_elm),
	   $Effects = Elm.Effects.make(_elm),
	   $Html = Elm.Html.make(_elm),
	   $List = Elm.List.make(_elm),
	   $Maybe = Elm.Maybe.make(_elm),
	   $Result = Elm.Result.make(_elm),
	   $Signal = Elm.Signal.make(_elm),
	   $Task = Elm.Task.make(_elm);
	   var _op = {};
	   var start = function (config) {
	      var updateStep = F2(function (action,_p0) {
	         var _p1 = _p0;
	         var _p2 = A2(config.update,action,_p1._0);
	         var newModel = _p2._0;
	         var additionalEffects = _p2._1;
	         return {ctor: "_Tuple2"
	                ,_0: newModel
	                ,_1: $Effects.batch(_U.list([_p1._1,additionalEffects]))};
	      });
	      var update = F2(function (actions,_p3) {
	         var _p4 = _p3;
	         return A3($List.foldl,
	         updateStep,
	         {ctor: "_Tuple2",_0: _p4._0,_1: $Effects.none},
	         actions);
	      });
	      var messages = $Signal.mailbox(_U.list([]));
	      var singleton = function (action) {
	         return _U.list([action]);
	      };
	      var address = A2($Signal.forwardTo,messages.address,singleton);
	      var inputs = $Signal.mergeMany(A2($List._op["::"],
	      messages.signal,
	      A2($List.map,$Signal.map(singleton),config.inputs)));
	      var effectsAndModel = A3($Signal.foldp,
	      update,
	      config.init,
	      inputs);
	      var model = A2($Signal.map,$Basics.fst,effectsAndModel);
	      return {html: A2($Signal.map,config.view(address),model)
	             ,model: model
	             ,tasks: A2($Signal.map,
	             function (_p5) {
	                return A2($Effects.toTask,messages.address,$Basics.snd(_p5));
	             },
	             effectsAndModel)};
	   };
	   var App = F3(function (a,b,c) {
	      return {html: a,model: b,tasks: c};
	   });
	   var Config = F4(function (a,b,c,d) {
	      return {init: a,update: b,view: c,inputs: d};
	   });
	   return _elm.StartApp.values = {_op: _op
	                                 ,start: start
	                                 ,Config: Config
	                                 ,App: App};
	};
	Elm.Hop = Elm.Hop || {};
	Elm.Hop.Types = Elm.Hop.Types || {};
	Elm.Hop.Types.make = function (_elm) {
	   "use strict";
	   _elm.Hop = _elm.Hop || {};
	   _elm.Hop.Types = _elm.Hop.Types || {};
	   if (_elm.Hop.Types.values) return _elm.Hop.Types.values;
	   var _U = Elm.Native.Utils.make(_elm),
	   $Basics = Elm.Basics.make(_elm),
	   $Debug = Elm.Debug.make(_elm),
	   $Dict = Elm.Dict.make(_elm),
	   $List = Elm.List.make(_elm),
	   $Maybe = Elm.Maybe.make(_elm),
	   $Result = Elm.Result.make(_elm),
	   $Signal = Elm.Signal.make(_elm),
	   $Task = Elm.Task.make(_elm);
	   var _op = {};
	   var newUrl = {query: $Dict.empty,path: _U.list([])};
	   var newPayload = {params: $Dict.empty,url: newUrl};
	   var Router = F3(function (a,b,c) {
	      return {signal: a,payload: b,run: c};
	   });
	   var Config = F2(function (a,b) {
	      return {notFoundAction: a,routes: b};
	   });
	   var Payload = F2(function (a,b) {
	      return {params: a,url: b};
	   });
	   var Url = F2(function (a,b) {    return {path: a,query: b};});
	   return _elm.Hop.Types.values = {_op: _op
	                                  ,Url: Url
	                                  ,Payload: Payload
	                                  ,Config: Config
	                                  ,Router: Router
	                                  ,newUrl: newUrl
	                                  ,newPayload: newPayload};
	};
	Elm.Hop = Elm.Hop || {};
	Elm.Hop.Url = Elm.Hop.Url || {};
	Elm.Hop.Url.make = function (_elm) {
	   "use strict";
	   _elm.Hop = _elm.Hop || {};
	   _elm.Hop.Url = _elm.Hop.Url || {};
	   if (_elm.Hop.Url.values) return _elm.Hop.Url.values;
	   var _U = Elm.Native.Utils.make(_elm),
	   $Basics = Elm.Basics.make(_elm),
	   $Debug = Elm.Debug.make(_elm),
	   $Dict = Elm.Dict.make(_elm),
	   $Hop$Types = Elm.Hop.Types.make(_elm),
	   $Http = Elm.Http.make(_elm),
	   $List = Elm.List.make(_elm),
	   $Maybe = Elm.Maybe.make(_elm),
	   $Result = Elm.Result.make(_elm),
	   $Signal = Elm.Signal.make(_elm),
	   $String = Elm.String.make(_elm);
	   var _op = {};
	   var clearQuery = function (url) {
	      return _U.update(url,{query: $Dict.empty});
	   };
	   var removeQuery = F2(function (key,url) {
	      var updatedQuery = A2($Dict.remove,key,url.query);
	      return _U.update(url,{query: updatedQuery});
	   });
	   var setQuery = F2(function (query,url) {
	      return _U.update(url,{query: query});
	   });
	   var addQuery = F2(function (query,url) {
	      var updatedQuery = A2($Dict.union,query,url.query);
	      return _U.update(url,{query: updatedQuery});
	   });
	   var queryKVtoTuple = function (kv) {
	      var splitted = A2($String.split,"=",kv);
	      var first = A2($Maybe.withDefault,"",$List.head(splitted));
	      var firstDecoded = $Http.uriDecode(first);
	      var second = A2($Maybe.withDefault,
	      "",
	      $List.head(A2($List.drop,1,splitted)));
	      var secondDecoded = $Http.uriDecode(second);
	      return {ctor: "_Tuple2",_0: firstDecoded,_1: secondDecoded};
	   };
	   var extractQuery = function (route) {
	      return A2($Maybe.withDefault,
	      "",
	      $List.head(A2($List.drop,1,A2($String.split,"?",route))));
	   };
	   var parseQuery = function (route) {
	      return $Dict.fromList(A2($List.map,
	      queryKVtoTuple,
	      A2($List.filter,
	      function (_p0) {
	         return $Basics.not($String.isEmpty(_p0));
	      },
	      A2($String.split,"&",extractQuery(route)))));
	   };
	   var extractPath = function (route) {
	      return A2($Maybe.withDefault,
	      "",
	      $List.head(A2($String.split,
	      "?",
	      A2($Maybe.withDefault,
	      "",
	      $List.head($List.reverse(A2($String.split,"#",route)))))));
	   };
	   var parsePath = function (route) {
	      return A2($List.filter,
	      function (_p1) {
	         return $Basics.not($String.isEmpty(_p1));
	      },
	      A2($String.split,"/",extractPath(route)));
	   };
	   var parse = function (route) {
	      return {path: parsePath(route),query: parseQuery(route)};
	   };
	   var urlFromUser = function (route) {
	      var normalized = A2($String.startsWith,
	      "#",
	      route) ? route : A2($Basics._op["++"],"#",route);
	      return parse(normalized);
	   };
	   var pathFromUrl = function (url) {
	      return $List.isEmpty(url.path) ? "" : A2($String.join,
	      "/",
	      url.path);
	   };
	   var queryFromUrl = function (url) {
	      return $Dict.isEmpty(url.query) ? "" : A2($String.append,
	      "?",
	      A2($String.join,
	      "&",
	      A2($List.map,
	      function (_p2) {
	         var _p3 = _p2;
	         return A2($Basics._op["++"],
	         _p3._0,
	         A2($Basics._op["++"],"=",_p3._1));
	      },
	      $Dict.toList(url.query))));
	   };
	   var routeFromUrl = function (url) {
	      return A2($Basics._op["++"],
	      "#/",
	      A2($Basics._op["++"],pathFromUrl(url),queryFromUrl(url)));
	   };
	   return _elm.Hop.Url.values = {_op: _op
	                                ,routeFromUrl: routeFromUrl
	                                ,queryFromUrl: queryFromUrl
	                                ,pathFromUrl: pathFromUrl
	                                ,parse: parse
	                                ,extractPath: extractPath
	                                ,parsePath: parsePath
	                                ,extractQuery: extractQuery
	                                ,parseQuery: parseQuery
	                                ,queryKVtoTuple: queryKVtoTuple
	                                ,urlFromUser: urlFromUser
	                                ,addQuery: addQuery
	                                ,setQuery: setQuery
	                                ,removeQuery: removeQuery
	                                ,clearQuery: clearQuery};
	};
	Elm.Hop = Elm.Hop || {};
	Elm.Hop.Resolver = Elm.Hop.Resolver || {};
	Elm.Hop.Resolver.make = function (_elm) {
	   "use strict";
	   _elm.Hop = _elm.Hop || {};
	   _elm.Hop.Resolver = _elm.Hop.Resolver || {};
	   if (_elm.Hop.Resolver.values) return _elm.Hop.Resolver.values;
	   var _U = Elm.Native.Utils.make(_elm),
	   $Basics = Elm.Basics.make(_elm),
	   $Debug = Elm.Debug.make(_elm),
	   $Dict = Elm.Dict.make(_elm),
	   $Hop$Types = Elm.Hop.Types.make(_elm),
	   $Hop$Url = Elm.Hop.Url.make(_elm),
	   $List = Elm.List.make(_elm),
	   $Maybe = Elm.Maybe.make(_elm),
	   $Result = Elm.Result.make(_elm),
	   $Signal = Elm.Signal.make(_elm),
	   $String = Elm.String.make(_elm);
	   var _op = {};
	   var isRouteHashPlaceholder = function (hash) {
	      return A2($String.startsWith,":",hash);
	   };
	   var isRouteFragmentMatch = function (_p0) {
	      var _p1 = _p0;
	      var _p2 = _p1._1;
	      return isRouteHashPlaceholder(_p2) ? true : _U.eq(_p2,_p1._0);
	   };
	   var parseRouteFragment = function (route) {
	      var notEmpty = function (x) {
	         return $Basics.not($String.isEmpty(x));
	      };
	      return A2($List.filter,notEmpty,A2($String.split,"/",route));
	   };
	   var isRouteMatch = F2(function (url,routeDef) {
	      var definitionFragmentList = parseRouteFragment($Basics.fst(routeDef));
	      var definitionFragmentLen = $List.length(definitionFragmentList);
	      var currentFragmentList = url.path;
	      var currentLen = $List.length(currentFragmentList);
	      var combinedCurrentAndDefinition = A3($List.map2,
	      F2(function (v0,v1) {
	         return {ctor: "_Tuple2",_0: v0,_1: v1};
	      }),
	      currentFragmentList,
	      definitionFragmentList);
	      return _U.eq(currentLen,definitionFragmentLen) ? A2($List.all,
	      isRouteFragmentMatch,
	      combinedCurrentAndDefinition) : false;
	   });
	   var matchedRoute = F2(function (routes,url) {
	      return $List.head(A2($List.filter,isRouteMatch(url),routes));
	   });
	   var routeDefintionForUrl = F2(function (config,url) {
	      return A2($Maybe.withDefault,
	      {ctor: "_Tuple2",_0: "",_1: config.notFoundAction},
	      A2(matchedRoute,config.routes,url));
	   });
	   var paramsForRoute = F2(function (routeDefinition,url) {
	      var maybeParam = F2(function (routeFragment,urlFragment) {
	         return isRouteHashPlaceholder(routeFragment) ? {ctor: "_Tuple2"
	                                                        ,_0: A2($String.dropLeft,1,routeFragment)
	                                                        ,_1: urlFragment} : {ctor: "_Tuple2",_0: "",_1: ""};
	      });
	      var routeFragments = parseRouteFragment(routeDefinition);
	      var params = A3($List.map2,maybeParam,routeFragments,url.path);
	      var relevantParams = A2($List.filter,
	      function (_p3) {
	         var _p4 = _p3;
	         return $Basics.not($String.isEmpty(_p4._0));
	      },
	      params);
	      return A2($Dict.union,url.query,$Dict.fromList(relevantParams));
	   });
	   var userActionFromUrlString = F2(function (config,urlString) {
	      var url = $Hop$Url.parse(urlString);
	      var _p5 = A2(routeDefintionForUrl,config,url);
	      var route = _p5._0;
	      var userAction = _p5._1;
	      var params = A2(paramsForRoute,route,url);
	      var payload = {params: params,url: url};
	      return userAction(payload);
	   });
	   return _elm.Hop.Resolver.values = {_op: _op
	                                     ,userActionFromUrlString: userActionFromUrlString
	                                     ,paramsForRoute: paramsForRoute
	                                     ,parseRouteFragment: parseRouteFragment
	                                     ,routeDefintionForUrl: routeDefintionForUrl
	                                     ,matchedRoute: matchedRoute
	                                     ,isRouteMatch: isRouteMatch
	                                     ,isRouteFragmentMatch: isRouteFragmentMatch
	                                     ,isRouteHashPlaceholder: isRouteHashPlaceholder};
	};
	Elm.Hop = Elm.Hop || {};
	Elm.Hop.make = function (_elm) {
	   "use strict";
	   _elm.Hop = _elm.Hop || {};
	   if (_elm.Hop.values) return _elm.Hop.values;
	   var _U = Elm.Native.Utils.make(_elm),
	   $Basics = Elm.Basics.make(_elm),
	   $Debug = Elm.Debug.make(_elm),
	   $Effects = Elm.Effects.make(_elm),
	   $History = Elm.History.make(_elm),
	   $Hop$Resolver = Elm.Hop.Resolver.make(_elm),
	   $Hop$Types = Elm.Hop.Types.make(_elm),
	   $Hop$Url = Elm.Hop.Url.make(_elm),
	   $List = Elm.List.make(_elm),
	   $Maybe = Elm.Maybe.make(_elm),
	   $Result = Elm.Result.make(_elm),
	   $Signal = Elm.Signal.make(_elm),
	   $Task = Elm.Task.make(_elm);
	   var _op = {};
	   var locationChangeSignal = function (config) {
	      return A2($Signal.map,
	      $Hop$Resolver.userActionFromUrlString(config),
	      $History.hash);
	   };
	   var $new = function (config) {
	      return {signal: locationChangeSignal(config)
	             ,payload: $Hop$Types.newPayload
	             ,run: $History.setPath("")};
	   };
	   var GoToRouteResult = function (a) {
	      return {ctor: "GoToRouteResult",_0: a};
	   };
	   var navigateToUrl = function (url) {
	      return $Effects.task(A2($Task.map,
	      GoToRouteResult,
	      $Task.toResult($History.setPath($Hop$Url.routeFromUrl(url)))));
	   };
	   var navigateTo = function (route) {
	      return navigateToUrl($Hop$Url.urlFromUser(route));
	   };
	   var addQuery = F2(function (query,currentUrl) {
	      return navigateToUrl(A2($Hop$Url.addQuery,query,currentUrl));
	   });
	   var setQuery = F2(function (query,currentUrl) {
	      return navigateToUrl(A2($Hop$Url.setQuery,query,currentUrl));
	   });
	   var removeQuery = F2(function (key,currentUrl) {
	      return navigateToUrl(A2($Hop$Url.removeQuery,
	      key,
	      currentUrl));
	   });
	   var clearQuery = function (currentUrl) {
	      return navigateToUrl($Hop$Url.clearQuery(currentUrl));
	   };
	   var NoOp = {ctor: "NoOp"};
	   return _elm.Hop.values = {_op: _op
	                            ,$new: $new
	                            ,navigateTo: navigateTo
	                            ,addQuery: addQuery
	                            ,setQuery: setQuery
	                            ,removeQuery: removeQuery
	                            ,clearQuery: clearQuery};
	};
	Elm.Players = Elm.Players || {};
	Elm.Players.Models = Elm.Players.Models || {};
	Elm.Players.Models.make = function (_elm) {
	   "use strict";
	   _elm.Players = _elm.Players || {};
	   _elm.Players.Models = _elm.Players.Models || {};
	   if (_elm.Players.Models.values)
	   return _elm.Players.Models.values;
	   var _U = Elm.Native.Utils.make(_elm),
	   $Basics = Elm.Basics.make(_elm),
	   $Debug = Elm.Debug.make(_elm),
	   $List = Elm.List.make(_elm),
	   $Maybe = Elm.Maybe.make(_elm),
	   $Result = Elm.Result.make(_elm),
	   $Signal = Elm.Signal.make(_elm);
	   var _op = {};
	   var $new = {id: 0,name: "",level: 1};
	   var Player = F3(function (a,b,c) {
	      return {id: a,name: b,level: c};
	   });
	   return _elm.Players.Models.values = {_op: _op
	                                       ,Player: Player
	                                       ,$new: $new};
	};
	Elm.Players = Elm.Players || {};
	Elm.Players.Actions = Elm.Players.Actions || {};
	Elm.Players.Actions.make = function (_elm) {
	   "use strict";
	   _elm.Players = _elm.Players || {};
	   _elm.Players.Actions = _elm.Players.Actions || {};
	   if (_elm.Players.Actions.values)
	   return _elm.Players.Actions.values;
	   var _U = Elm.Native.Utils.make(_elm),
	   $Basics = Elm.Basics.make(_elm),
	   $Debug = Elm.Debug.make(_elm),
	   $Hop = Elm.Hop.make(_elm),
	   $Http = Elm.Http.make(_elm),
	   $List = Elm.List.make(_elm),
	   $Maybe = Elm.Maybe.make(_elm),
	   $Players$Models = Elm.Players.Models.make(_elm),
	   $Result = Elm.Result.make(_elm),
	   $Signal = Elm.Signal.make(_elm);
	   var _op = {};
	   var ChangeName = F2(function (a,b) {
	      return {ctor: "ChangeName",_0: a,_1: b};
	   });
	   var SaveDone = function (a) {
	      return {ctor: "SaveDone",_0: a};
	   };
	   var ChangeLevel = F2(function (a,b) {
	      return {ctor: "ChangeLevel",_0: a,_1: b};
	   });
	   var DeletePlayerDone = F2(function (a,b) {
	      return {ctor: "DeletePlayerDone",_0: a,_1: b};
	   });
	   var DeletePlayer = function (a) {
	      return {ctor: "DeletePlayer",_0: a};
	   };
	   var DeletePlayerIntent = function (a) {
	      return {ctor: "DeletePlayerIntent",_0: a};
	   };
	   var CreatePlayerDone = function (a) {
	      return {ctor: "CreatePlayerDone",_0: a};
	   };
	   var CreatePlayer = {ctor: "CreatePlayer"};
	   var TaskDone = function (a) {
	      return {ctor: "TaskDone",_0: a};
	   };
	   var FetchAllDone = function (a) {
	      return {ctor: "FetchAllDone",_0: a};
	   };
	   var ListPlayers = {ctor: "ListPlayers"};
	   var EditPlayer = function (a) {
	      return {ctor: "EditPlayer",_0: a};
	   };
	   var HopAction = function (a) {
	      return {ctor: "HopAction",_0: a};
	   };
	   var NoOp = {ctor: "NoOp"};
	   return _elm.Players.Actions.values = {_op: _op
	                                        ,NoOp: NoOp
	                                        ,HopAction: HopAction
	                                        ,EditPlayer: EditPlayer
	                                        ,ListPlayers: ListPlayers
	                                        ,FetchAllDone: FetchAllDone
	                                        ,TaskDone: TaskDone
	                                        ,CreatePlayer: CreatePlayer
	                                        ,CreatePlayerDone: CreatePlayerDone
	                                        ,DeletePlayerIntent: DeletePlayerIntent
	                                        ,DeletePlayer: DeletePlayer
	                                        ,DeletePlayerDone: DeletePlayerDone
	                                        ,ChangeLevel: ChangeLevel
	                                        ,SaveDone: SaveDone
	                                        ,ChangeName: ChangeName};
	};
	Elm.Routing = Elm.Routing || {};
	Elm.Routing.make = function (_elm) {
	   "use strict";
	   _elm.Routing = _elm.Routing || {};
	   if (_elm.Routing.values) return _elm.Routing.values;
	   var _U = Elm.Native.Utils.make(_elm),
	   $Basics = Elm.Basics.make(_elm),
	   $Debug = Elm.Debug.make(_elm),
	   $Effects = Elm.Effects.make(_elm),
	   $Hop = Elm.Hop.make(_elm),
	   $List = Elm.List.make(_elm),
	   $Maybe = Elm.Maybe.make(_elm),
	   $Result = Elm.Result.make(_elm),
	   $Signal = Elm.Signal.make(_elm);
	   var _op = {};
	   var Model = F2(function (a,b) {
	      return {routerPayload: a,view: b};
	   });
	   var NotFoundView = {ctor: "NotFoundView"};
	   var PlayerEditView = {ctor: "PlayerEditView"};
	   var PlayersView = {ctor: "PlayersView"};
	   var NoOp = {ctor: "NoOp"};
	   var NavigateTo = function (a) {
	      return {ctor: "NavigateTo",_0: a};
	   };
	   var ShowNotFound = function (a) {
	      return {ctor: "ShowNotFound",_0: a};
	   };
	   var ShowPlayerEdit = function (a) {
	      return {ctor: "ShowPlayerEdit",_0: a};
	   };
	   var ShowPlayers = function (a) {
	      return {ctor: "ShowPlayers",_0: a};
	   };
	   var routes = _U.list([{ctor: "_Tuple2",_0: "/",_1: ShowPlayers}
	                        ,{ctor: "_Tuple2",_0: "/players",_1: ShowPlayers}
	                        ,{ctor: "_Tuple2",_0: "/players/:id/edit",_1: ShowPlayerEdit}]);
	   var router = $Hop.$new({routes: routes
	                          ,notFoundAction: ShowNotFound});
	   var initialModel = {routerPayload: router.payload
	                      ,view: PlayersView};
	   var HopAction = function (a) {
	      return {ctor: "HopAction",_0: a};
	   };
	   var update = F2(function (action,model) {
	      var _p0 = action;
	      switch (_p0.ctor)
	      {case "NavigateTo": return {ctor: "_Tuple2"
	                                 ,_0: model
	                                 ,_1: A2($Effects.map,HopAction,$Hop.navigateTo(_p0._0))};
	         case "ShowPlayers": return {ctor: "_Tuple2"
	                                    ,_0: _U.update(model,{view: PlayersView,routerPayload: _p0._0})
	                                    ,_1: $Effects.none};
	         case "ShowPlayerEdit": return {ctor: "_Tuple2"
	                                       ,_0: _U.update(model,
	                                       {view: PlayerEditView,routerPayload: _p0._0})
	                                       ,_1: $Effects.none};
	         case "ShowNotFound": return {ctor: "_Tuple2"
	                                     ,_0: _U.update(model,{view: NotFoundView,routerPayload: _p0._0})
	                                     ,_1: $Effects.none};
	         default: return {ctor: "_Tuple2",_0: model,_1: $Effects.none};}
	   });
	   return _elm.Routing.values = {_op: _op
	                                ,HopAction: HopAction
	                                ,ShowPlayers: ShowPlayers
	                                ,ShowPlayerEdit: ShowPlayerEdit
	                                ,ShowNotFound: ShowNotFound
	                                ,NavigateTo: NavigateTo
	                                ,NoOp: NoOp
	                                ,PlayersView: PlayersView
	                                ,PlayerEditView: PlayerEditView
	                                ,NotFoundView: NotFoundView
	                                ,Model: Model
	                                ,initialModel: initialModel
	                                ,update: update
	                                ,routes: routes
	                                ,router: router};
	};
	Elm.Actions = Elm.Actions || {};
	Elm.Actions.make = function (_elm) {
	   "use strict";
	   _elm.Actions = _elm.Actions || {};
	   if (_elm.Actions.values) return _elm.Actions.values;
	   var _U = Elm.Native.Utils.make(_elm),
	   $Basics = Elm.Basics.make(_elm),
	   $Debug = Elm.Debug.make(_elm),
	   $List = Elm.List.make(_elm),
	   $Maybe = Elm.Maybe.make(_elm),
	   $Players$Actions = Elm.Players.Actions.make(_elm),
	   $Result = Elm.Result.make(_elm),
	   $Routing = Elm.Routing.make(_elm),
	   $Signal = Elm.Signal.make(_elm);
	   var _op = {};
	   var ShowError = function (a) {
	      return {ctor: "ShowError",_0: a};
	   };
	   var PlayersAction = function (a) {
	      return {ctor: "PlayersAction",_0: a};
	   };
	   var RoutingAction = function (a) {
	      return {ctor: "RoutingAction",_0: a};
	   };
	   var NoOp = {ctor: "NoOp"};
	   return _elm.Actions.values = {_op: _op
	                                ,NoOp: NoOp
	                                ,RoutingAction: RoutingAction
	                                ,PlayersAction: PlayersAction
	                                ,ShowError: ShowError};
	};
	Elm.Mailboxes = Elm.Mailboxes || {};
	Elm.Mailboxes.make = function (_elm) {
	   "use strict";
	   _elm.Mailboxes = _elm.Mailboxes || {};
	   if (_elm.Mailboxes.values) return _elm.Mailboxes.values;
	   var _U = Elm.Native.Utils.make(_elm),
	   $Actions = Elm.Actions.make(_elm),
	   $Basics = Elm.Basics.make(_elm),
	   $Debug = Elm.Debug.make(_elm),
	   $List = Elm.List.make(_elm),
	   $Maybe = Elm.Maybe.make(_elm),
	   $Result = Elm.Result.make(_elm),
	   $Signal = Elm.Signal.make(_elm);
	   var _op = {};
	   var askDeleteConfirmationMailbox = $Signal.mailbox({ctor: "_Tuple2"
	                                                      ,_0: 0
	                                                      ,_1: ""});
	   var actionsMailbox = $Signal.mailbox($Actions.NoOp);
	   return _elm.Mailboxes.values = {_op: _op
	                                  ,actionsMailbox: actionsMailbox
	                                  ,askDeleteConfirmationMailbox: askDeleteConfirmationMailbox};
	};
	Elm.Models = Elm.Models || {};
	Elm.Models.make = function (_elm) {
	   "use strict";
	   _elm.Models = _elm.Models || {};
	   if (_elm.Models.values) return _elm.Models.values;
	   var _U = Elm.Native.Utils.make(_elm),
	   $Basics = Elm.Basics.make(_elm),
	   $Debug = Elm.Debug.make(_elm),
	   $List = Elm.List.make(_elm),
	   $Maybe = Elm.Maybe.make(_elm),
	   $Players$Models = Elm.Players.Models.make(_elm),
	   $Result = Elm.Result.make(_elm),
	   $Routing = Elm.Routing.make(_elm),
	   $Signal = Elm.Signal.make(_elm);
	   var _op = {};
	   var initialModel = {players: _U.list([])
	                      ,routing: $Routing.initialModel
	                      ,errorMessage: ""};
	   var AppModel = F3(function (a,b,c) {
	      return {players: a,routing: b,errorMessage: c};
	   });
	   return _elm.Models.values = {_op: _op
	                               ,AppModel: AppModel
	                               ,initialModel: initialModel};
	};
	Elm.Players = Elm.Players || {};
	Elm.Players.Effects = Elm.Players.Effects || {};
	Elm.Players.Effects.make = function (_elm) {
	   "use strict";
	   _elm.Players = _elm.Players || {};
	   _elm.Players.Effects = _elm.Players.Effects || {};
	   if (_elm.Players.Effects.values)
	   return _elm.Players.Effects.values;
	   var _U = Elm.Native.Utils.make(_elm),
	   $Basics = Elm.Basics.make(_elm),
	   $Debug = Elm.Debug.make(_elm),
	   $Effects = Elm.Effects.make(_elm),
	   $Http = Elm.Http.make(_elm),
	   $Json$Decode = Elm.Json.Decode.make(_elm),
	   $Json$Encode = Elm.Json.Encode.make(_elm),
	   $List = Elm.List.make(_elm),
	   $Maybe = Elm.Maybe.make(_elm),
	   $Players$Actions = Elm.Players.Actions.make(_elm),
	   $Players$Models = Elm.Players.Models.make(_elm),
	   $Result = Elm.Result.make(_elm),
	   $Signal = Elm.Signal.make(_elm),
	   $Task = Elm.Task.make(_elm);
	   var _op = {};
	   var memberEncoded = function (player) {
	      var list = _U.list([{ctor: "_Tuple2"
	                          ,_0: "id"
	                          ,_1: $Json$Encode.$int(player.id)}
	                         ,{ctor: "_Tuple2"
	                          ,_0: "name"
	                          ,_1: $Json$Encode.string(player.name)}
	                         ,{ctor: "_Tuple2"
	                          ,_0: "level"
	                          ,_1: $Json$Encode.$int(player.level)}]);
	      return $Json$Encode.object(list);
	   };
	   var memberDecoder = A4($Json$Decode.object3,
	   $Players$Models.Player,
	   A2($Json$Decode._op[":="],"id",$Json$Decode.$int),
	   A2($Json$Decode._op[":="],"name",$Json$Decode.string),
	   A2($Json$Decode._op[":="],"level",$Json$Decode.$int));
	   var collectionDecoder = $Json$Decode.list(memberDecoder);
	   var fetchAllUrl = "http://localhost:4000/players";
	   var fetchAll = $Effects.task(A2($Task.map,
	   $Players$Actions.FetchAllDone,
	   $Task.toResult(A2($Http.get,collectionDecoder,fetchAllUrl))));
	   var saveUrl = function (playerId) {
	      return A2($Basics._op["++"],
	      "http://localhost:4000/players/",
	      $Basics.toString(playerId));
	   };
	   var saveTask = function (player) {
	      var body = $Http.string(A2($Json$Encode.encode,
	      0,
	      memberEncoded(player)));
	      var config = {verb: "PATCH"
	                   ,headers: _U.list([{ctor: "_Tuple2"
	                                      ,_0: "Content-Type"
	                                      ,_1: "application/json"}])
	                   ,url: saveUrl(player.id)
	                   ,body: body};
	      return A2($Http.fromJson,
	      memberDecoder,
	      A2($Http.send,$Http.defaultSettings,config));
	   };
	   var save = function (player) {
	      return $Effects.task(A2($Task.map,
	      $Players$Actions.SaveDone,
	      $Task.toResult(saveTask(player))));
	   };
	   var deleteUrl = function (playerId) {
	      return A2($Basics._op["++"],
	      "http://localhost:4000/players/",
	      $Basics.toString(playerId));
	   };
	   var deleteTask = function (playerId) {
	      var config = {verb: "DELETE"
	                   ,headers: _U.list([{ctor: "_Tuple2"
	                                      ,_0: "Content-Type"
	                                      ,_1: "application/json"}])
	                   ,url: deleteUrl(playerId)
	                   ,body: $Http.empty};
	      return A2($Http.fromJson,
	      $Json$Decode.succeed({ctor: "_Tuple0"}),
	      A2($Http.send,$Http.defaultSettings,config));
	   };
	   var $delete = function (playerId) {
	      return $Effects.task(A2($Task.map,
	      $Players$Actions.DeletePlayerDone(playerId),
	      $Task.toResult(deleteTask(playerId))));
	   };
	   var createUrl = "http://localhost:4000/players";
	   var create = function (player) {
	      var body = $Http.string(A2($Json$Encode.encode,
	      0,
	      memberEncoded(player)));
	      var config = {verb: "POST"
	                   ,headers: _U.list([{ctor: "_Tuple2"
	                                      ,_0: "Content-Type"
	                                      ,_1: "application/json"}])
	                   ,url: createUrl
	                   ,body: body};
	      return $Effects.task(A2($Task.map,
	      $Players$Actions.CreatePlayerDone,
	      $Task.toResult(A2($Http.fromJson,
	      memberDecoder,
	      A2($Http.send,$Http.defaultSettings,config)))));
	   };
	   return _elm.Players.Effects.values = {_op: _op
	                                        ,create: create
	                                        ,createUrl: createUrl
	                                        ,$delete: $delete
	                                        ,deleteUrl: deleteUrl
	                                        ,deleteTask: deleteTask
	                                        ,saveUrl: saveUrl
	                                        ,saveTask: saveTask
	                                        ,save: save
	                                        ,fetchAll: fetchAll
	                                        ,fetchAllUrl: fetchAllUrl
	                                        ,collectionDecoder: collectionDecoder
	                                        ,memberDecoder: memberDecoder
	                                        ,memberEncoded: memberEncoded};
	};
	Elm.Players = Elm.Players || {};
	Elm.Players.Update = Elm.Players.Update || {};
	Elm.Players.Update.make = function (_elm) {
	   "use strict";
	   _elm.Players = _elm.Players || {};
	   _elm.Players.Update = _elm.Players.Update || {};
	   if (_elm.Players.Update.values)
	   return _elm.Players.Update.values;
	   var _U = Elm.Native.Utils.make(_elm),
	   $Basics = Elm.Basics.make(_elm),
	   $Debug = Elm.Debug.make(_elm),
	   $Effects = Elm.Effects.make(_elm),
	   $Hop = Elm.Hop.make(_elm),
	   $List = Elm.List.make(_elm),
	   $Maybe = Elm.Maybe.make(_elm),
	   $Players$Actions = Elm.Players.Actions.make(_elm),
	   $Players$Effects = Elm.Players.Effects.make(_elm),
	   $Players$Models = Elm.Players.Models.make(_elm),
	   $Result = Elm.Result.make(_elm),
	   $Signal = Elm.Signal.make(_elm),
	   $Task = Elm.Task.make(_elm);
	   var _op = {};
	   var update = F2(function (action,model) {
	      var _p0 = action;
	      switch (_p0.ctor)
	      {case "EditPlayer": var path = A2($Basics._op["++"],
	           "/players/",
	           A2($Basics._op["++"],$Basics.toString(_p0._0),"/edit"));
	           return {ctor: "_Tuple2"
	                  ,_0: model.players
	                  ,_1: A2($Effects.map,
	                  $Players$Actions.HopAction,
	                  $Hop.navigateTo(path))};
	         case "ListPlayers": var path = "/players/";
	           return {ctor: "_Tuple2"
	                  ,_0: model.players
	                  ,_1: A2($Effects.map,
	                  $Players$Actions.HopAction,
	                  $Hop.navigateTo(path))};
	         case "CreatePlayer": return {ctor: "_Tuple2"
	                                     ,_0: model.players
	                                     ,_1: $Players$Effects.create($Players$Models.$new)};
	         case "CreatePlayerDone": var _p1 = _p0._0;
	           if (_p1.ctor === "Ok") {
	                 var _p2 = _p1._0;
	                 var fx = $Effects.task($Task.succeed($Players$Actions.EditPlayer(_p2.id)));
	                 var updatedCollection = A2($List._op["::"],_p2,model.players);
	                 return {ctor: "_Tuple2",_0: updatedCollection,_1: fx};
	              } else {
	                 var message = $Basics.toString(_p1._0);
	                 var fx = A2($Effects.map,
	                 $Players$Actions.TaskDone,
	                 $Effects.task(A2($Signal.send,model.showErrorAddress,message)));
	                 return {ctor: "_Tuple2",_0: model.players,_1: fx};
	              }
	         case "DeletePlayerIntent": var _p3 = _p0._0;
	           var msg = A2($Basics._op["++"],
	           "Are you sure you want to delete ",
	           A2($Basics._op["++"],_p3.name,"?"));
	           var fx = A2($Effects.map,
	           $Players$Actions.TaskDone,
	           $Effects.task(A2($Signal.send,
	           model.deleteConfirmationAddress,
	           {ctor: "_Tuple2",_0: _p3.id,_1: msg})));
	           return {ctor: "_Tuple2",_0: model.players,_1: fx};
	         case "DeletePlayer": return {ctor: "_Tuple2"
	                                     ,_0: model.players
	                                     ,_1: $Players$Effects.$delete(_p0._0)};
	         case "DeletePlayerDone": var _p4 = _p0._1;
	           if (_p4.ctor === "Ok") {
	                 var notDeleted = function (player) {
	                    return !_U.eq(player.id,_p0._0);
	                 };
	                 var updatedCollection = A2($List.filter,
	                 notDeleted,
	                 model.players);
	                 return {ctor: "_Tuple2"
	                        ,_0: updatedCollection
	                        ,_1: $Effects.none};
	              } else {
	                 var message = $Basics.toString(_p4._0);
	                 var fx = A2($Effects.map,
	                 $Players$Actions.TaskDone,
	                 $Effects.task(A2($Signal.send,model.showErrorAddress,message)));
	                 return {ctor: "_Tuple2",_0: model.players,_1: fx};
	              }
	         case "ChangeLevel": var fxForPlayer = function (player) {
	              if (!_U.eq(player.id,_p0._0)) return $Effects.none; else {
	                    var updatedPlayer = _U.update(player,
	                    {level: player.level + _p0._1});
	                    return _U.cmp(updatedPlayer.level,
	                    0) > 0 ? $Players$Effects.save(updatedPlayer) : $Effects.none;
	                 }
	           };
	           var fx = $Effects.batch(A2($List.map,
	           fxForPlayer,
	           model.players));
	           return {ctor: "_Tuple2",_0: model.players,_1: fx};
	         case "SaveDone": var _p5 = _p0._0;
	           if (_p5.ctor === "Ok") {
	                 var _p6 = _p5._0;
	                 var updatedPlayer = function (existing) {
	                    return _U.eq(existing.id,_p6.id) ? _p6 : existing;
	                 };
	                 var updatedCollection = A2($List.map,
	                 updatedPlayer,
	                 model.players);
	                 return {ctor: "_Tuple2"
	                        ,_0: updatedCollection
	                        ,_1: $Effects.none};
	              } else {
	                 var message = $Basics.toString(_p5._0);
	                 var fx = A2($Effects.map,
	                 $Players$Actions.TaskDone,
	                 $Effects.task(A2($Signal.send,model.showErrorAddress,message)));
	                 return {ctor: "_Tuple2",_0: model.players,_1: fx};
	              }
	         case "ChangeName": var fxForPlayer = function (player) {
	              if (!_U.eq(player.id,_p0._0)) return $Effects.none; else {
	                    var updatedPlayer = _U.update(player,{name: _p0._1});
	                    return $Players$Effects.save(updatedPlayer);
	                 }
	           };
	           var fx = $Effects.batch(A2($List.map,
	           fxForPlayer,
	           model.players));
	           return {ctor: "_Tuple2",_0: model.players,_1: fx};
	         case "HopAction": return {ctor: "_Tuple2"
	                                  ,_0: model.players
	                                  ,_1: $Effects.none};
	         case "FetchAllDone": var _p7 = _p0._0;
	           if (_p7.ctor === "Ok") {
	                 return {ctor: "_Tuple2",_0: _p7._0,_1: $Effects.none};
	              } else {
	                 var errorMessage = $Basics.toString(_p7._0);
	                 var fx = A2($Effects.map,
	                 $Players$Actions.TaskDone,
	                 $Effects.task(A2($Signal.send,
	                 model.showErrorAddress,
	                 errorMessage)));
	                 return {ctor: "_Tuple2",_0: model.players,_1: fx};
	              }
	         case "TaskDone": return {ctor: "_Tuple2"
	                                 ,_0: model.players
	                                 ,_1: $Effects.none};
	         default: return {ctor: "_Tuple2"
	                         ,_0: model.players
	                         ,_1: $Effects.none};}
	   });
	   var UpdateModel = F3(function (a,b,c) {
	      return {players: a
	             ,showErrorAddress: b
	             ,deleteConfirmationAddress: c};
	   });
	   return _elm.Players.Update.values = {_op: _op
	                                       ,UpdateModel: UpdateModel
	                                       ,update: update};
	};
	Elm.Update = Elm.Update || {};
	Elm.Update.make = function (_elm) {
	   "use strict";
	   _elm.Update = _elm.Update || {};
	   if (_elm.Update.values) return _elm.Update.values;
	   var _U = Elm.Native.Utils.make(_elm),
	   $Actions = Elm.Actions.make(_elm),
	   $Basics = Elm.Basics.make(_elm),
	   $Debug = Elm.Debug.make(_elm),
	   $Effects = Elm.Effects.make(_elm),
	   $List = Elm.List.make(_elm),
	   $Mailboxes = Elm.Mailboxes.make(_elm),
	   $Maybe = Elm.Maybe.make(_elm),
	   $Models = Elm.Models.make(_elm),
	   $Players$Update = Elm.Players.Update.make(_elm),
	   $Result = Elm.Result.make(_elm),
	   $Routing = Elm.Routing.make(_elm),
	   $Signal = Elm.Signal.make(_elm);
	   var _op = {};
	   var update = F2(function (action,model) {
	      var _p0 = A2($Debug.log,"action",action);
	      switch (_p0.ctor)
	      {case "RoutingAction": var _p1 = A2($Routing.update,
	           _p0._0,
	           model.routing);
	           var updatedRouting = _p1._0;
	           var fx = _p1._1;
	           return {ctor: "_Tuple2"
	                  ,_0: _U.update(model,{routing: updatedRouting})
	                  ,_1: A2($Effects.map,$Actions.RoutingAction,fx)};
	         case "PlayersAction": var updateModel = {players: model.players
	                                                 ,showErrorAddress: A2($Signal.forwardTo,
	                                                 $Mailboxes.actionsMailbox.address,
	                                                 $Actions.ShowError)
	                                                 ,deleteConfirmationAddress: $Mailboxes.askDeleteConfirmationMailbox.address};
	           var _p2 = A2($Players$Update.update,_p0._0,updateModel);
	           var updatedPlayers = _p2._0;
	           var fx = _p2._1;
	           return {ctor: "_Tuple2"
	                  ,_0: _U.update(model,{players: updatedPlayers})
	                  ,_1: A2($Effects.map,$Actions.PlayersAction,fx)};
	         case "ShowError": return {ctor: "_Tuple2"
	                                  ,_0: _U.update(model,{errorMessage: _p0._0})
	                                  ,_1: $Effects.none};
	         default: return {ctor: "_Tuple2",_0: model,_1: $Effects.none};}
	   });
	   return _elm.Update.values = {_op: _op,update: update};
	};
	Elm.Players = Elm.Players || {};
	Elm.Players.List = Elm.Players.List || {};
	Elm.Players.List.make = function (_elm) {
	   "use strict";
	   _elm.Players = _elm.Players || {};
	   _elm.Players.List = _elm.Players.List || {};
	   if (_elm.Players.List.values) return _elm.Players.List.values;
	   var _U = Elm.Native.Utils.make(_elm),
	   $Basics = Elm.Basics.make(_elm),
	   $Debug = Elm.Debug.make(_elm),
	   $Html = Elm.Html.make(_elm),
	   $Html$Attributes = Elm.Html.Attributes.make(_elm),
	   $Html$Events = Elm.Html.Events.make(_elm),
	   $List = Elm.List.make(_elm),
	   $Maybe = Elm.Maybe.make(_elm),
	   $Players$Actions = Elm.Players.Actions.make(_elm),
	   $Players$Models = Elm.Players.Models.make(_elm),
	   $Result = Elm.Result.make(_elm),
	   $Signal = Elm.Signal.make(_elm);
	   var _op = {};
	   var deleteBtn = F2(function (address,player) {
	      return A2($Html.button,
	      _U.list([$Html$Attributes.$class("btn regular mr1")
	              ,A2($Html$Events.onClick,
	              address,
	              $Players$Actions.DeletePlayerIntent(player))]),
	      _U.list([A2($Html.i,
	              _U.list([$Html$Attributes.$class("fa fa-trash mr1")]),
	              _U.list([]))
	              ,$Html.text("Delete")]));
	   });
	   var addBtn = F2(function (address,model) {
	      return A2($Html.button,
	      _U.list([$Html$Attributes.$class("btn")
	              ,A2($Html$Events.onClick,
	              address,
	              $Players$Actions.CreatePlayer)]),
	      _U.list([A2($Html.i,
	              _U.list([$Html$Attributes.$class("fa fa-user-plus mr1")]),
	              _U.list([]))
	              ,$Html.text("Add player")]));
	   });
	   var editBtn = F2(function (address,player) {
	      return A2($Html.button,
	      _U.list([$Html$Attributes.$class("btn regular")
	              ,A2($Html$Events.onClick,
	              address,
	              $Players$Actions.EditPlayer(player.id))]),
	      _U.list([A2($Html.i,
	              _U.list([$Html$Attributes.$class("fa fa-pencil mr1")]),
	              _U.list([]))
	              ,$Html.text("Edit")]));
	   });
	   var playerRow = F3(function (address,model,player) {
	      return A2($Html.tr,
	      _U.list([]),
	      _U.list([A2($Html.td,
	              _U.list([]),
	              _U.list([$Html.text($Basics.toString(player.id))]))
	              ,A2($Html.td,_U.list([]),_U.list([$Html.text(player.name)]))
	              ,A2($Html.td,
	              _U.list([]),
	              _U.list([$Html.text($Basics.toString(player.level))]))
	              ,A2($Html.td,
	              _U.list([]),
	              _U.list([A2(editBtn,address,player)
	                      ,A2(deleteBtn,address,player)]))]));
	   });
	   var list = F2(function (address,model) {
	      return A2($Html.div,
	      _U.list([]),
	      _U.list([A2($Html.table,
	      _U.list([$Html$Attributes.$class("table-light")]),
	      _U.list([A2($Html.thead,
	              _U.list([]),
	              _U.list([A2($Html.tr,
	              _U.list([]),
	              _U.list([A2($Html.th,_U.list([]),_U.list([$Html.text("Id")]))
	                      ,A2($Html.th,_U.list([]),_U.list([$Html.text("Name")]))
	                      ,A2($Html.th,_U.list([]),_U.list([$Html.text("Level")]))
	                      ,A2($Html.th,_U.list([]),_U.list([$Html.text("Actions")]))]))]))
	              ,A2($Html.tbody,
	              _U.list([]),
	              A2($List.map,A2(playerRow,address,model),model.players))]))]));
	   });
	   var nav = F2(function (address,model) {
	      return A2($Html.div,
	      _U.list([$Html$Attributes.$class("clearfix mb2 white bg-black")]),
	      _U.list([A2($Html.div,
	              _U.list([$Html$Attributes.$class("left p2")]),
	              _U.list([$Html.text("Players")]))
	              ,A2($Html.div,
	              _U.list([$Html$Attributes.$class("right p1")]),
	              _U.list([A2(addBtn,address,model)]))]));
	   });
	   var view = F2(function (address,model) {
	      return A2($Html.div,
	      _U.list([]),
	      _U.list([A2(nav,address,model),A2(list,address,model)]));
	   });
	   var ViewModel = function (a) {    return {players: a};};
	   return _elm.Players.List.values = {_op: _op
	                                     ,ViewModel: ViewModel
	                                     ,view: view
	                                     ,nav: nav
	                                     ,list: list
	                                     ,playerRow: playerRow
	                                     ,editBtn: editBtn
	                                     ,addBtn: addBtn
	                                     ,deleteBtn: deleteBtn};
	};
	Elm.Players = Elm.Players || {};
	Elm.Players.Edit = Elm.Players.Edit || {};
	Elm.Players.Edit.make = function (_elm) {
	   "use strict";
	   _elm.Players = _elm.Players || {};
	   _elm.Players.Edit = _elm.Players.Edit || {};
	   if (_elm.Players.Edit.values) return _elm.Players.Edit.values;
	   var _U = Elm.Native.Utils.make(_elm),
	   $Basics = Elm.Basics.make(_elm),
	   $Debug = Elm.Debug.make(_elm),
	   $Html = Elm.Html.make(_elm),
	   $Html$Attributes = Elm.Html.Attributes.make(_elm),
	   $Html$Events = Elm.Html.Events.make(_elm),
	   $List = Elm.List.make(_elm),
	   $Maybe = Elm.Maybe.make(_elm),
	   $Players$Actions = Elm.Players.Actions.make(_elm),
	   $Players$Models = Elm.Players.Models.make(_elm),
	   $Result = Elm.Result.make(_elm),
	   $Signal = Elm.Signal.make(_elm);
	   var _op = {};
	   var listBtn = F2(function (address,model) {
	      return A2($Html.button,
	      _U.list([$Html$Attributes.$class("btn regular")
	              ,A2($Html$Events.onClick,
	              address,
	              $Players$Actions.ListPlayers)]),
	      _U.list([A2($Html.i,
	              _U.list([$Html$Attributes.$class("fa fa-chevron-left mr1")]),
	              _U.list([]))
	              ,$Html.text("List")]));
	   });
	   var inputName = F2(function (address,model) {
	      return A2($Html.input,
	      _U.list([$Html$Attributes.$class("field-light")
	              ,$Html$Attributes.value(model.player.name)
	              ,A3($Html$Events.on,
	              "change",
	              $Html$Events.targetValue,
	              function (str) {
	                 return A2($Signal.message,
	                 address,
	                 A2($Players$Actions.ChangeName,model.player.id,str));
	              })]),
	      _U.list([]));
	   });
	   var formName = F2(function (address,model) {
	      return A2($Html.div,
	      _U.list([$Html$Attributes.$class("clearfix py1")]),
	      _U.list([A2($Html.div,
	              _U.list([$Html$Attributes.$class("col col-5")]),
	              _U.list([$Html.text("Name")]))
	              ,A2($Html.div,
	              _U.list([$Html$Attributes.$class("col col-7")]),
	              _U.list([A2(inputName,address,model)]))]));
	   });
	   var btnLevelIncrease = F2(function (address,model) {
	      return A2($Html.a,
	      _U.list([$Html$Attributes.$class("btn ml1 h1")]),
	      _U.list([A2($Html.i,
	      _U.list([$Html$Attributes.$class("fa fa-plus-circle")
	              ,A2($Html$Events.onClick,
	              address,
	              A2($Players$Actions.ChangeLevel,model.player.id,1))]),
	      _U.list([]))]));
	   });
	   var btnLevelDecrease = F2(function (address,model) {
	      return A2($Html.a,
	      _U.list([$Html$Attributes.$class("btn ml1 h1")]),
	      _U.list([A2($Html.i,
	      _U.list([$Html$Attributes.$class("fa fa-minus-circle")
	              ,A2($Html$Events.onClick,
	              address,
	              A2($Players$Actions.ChangeLevel,model.player.id,-1))]),
	      _U.list([]))]));
	   });
	   var formLevel = F2(function (address,model) {
	      return A2($Html.div,
	      _U.list([$Html$Attributes.$class("clearfix py1")]),
	      _U.list([A2($Html.div,
	              _U.list([$Html$Attributes.$class("col col-5")]),
	              _U.list([$Html.text("Level")]))
	              ,A2($Html.div,
	              _U.list([$Html$Attributes.$class("col col-7")]),
	              _U.list([A2($Html.span,
	                      _U.list([$Html$Attributes.$class("h2 bold")]),
	                      _U.list([$Html.text($Basics.toString(model.player.level))]))
	                      ,A2(btnLevelDecrease,address,model)
	                      ,A2(btnLevelIncrease,address,model)]))]));
	   });
	   var form = F2(function (address,model) {
	      return A2($Html.div,
	      _U.list([$Html$Attributes.$class("m3")]),
	      _U.list([A2($Html.h1,
	              _U.list([]),
	              _U.list([$Html.text(model.player.name)]))
	              ,A2(formLevel,address,model)
	              ,A2(formName,address,model)]));
	   });
	   var nav = F2(function (address,model) {
	      return A2($Html.div,
	      _U.list([$Html$Attributes.$class("clearfix mb2 white bg-black p1")]),
	      _U.list([A2(listBtn,address,model)]));
	   });
	   var view = F2(function (address,model) {
	      return A2($Html.div,
	      _U.list([]),
	      _U.list([A2(nav,address,model),A2(form,address,model)]));
	   });
	   var ViewModel = function (a) {    return {player: a};};
	   return _elm.Players.Edit.values = {_op: _op
	                                     ,ViewModel: ViewModel
	                                     ,view: view
	                                     ,nav: nav
	                                     ,form: form
	                                     ,formLevel: formLevel
	                                     ,btnLevelDecrease: btnLevelDecrease
	                                     ,btnLevelIncrease: btnLevelIncrease
	                                     ,formName: formName
	                                     ,inputName: inputName
	                                     ,listBtn: listBtn};
	};
	Elm.View = Elm.View || {};
	Elm.View.make = function (_elm) {
	   "use strict";
	   _elm.View = _elm.View || {};
	   if (_elm.View.values) return _elm.View.values;
	   var _U = Elm.Native.Utils.make(_elm),
	   $Actions = Elm.Actions.make(_elm),
	   $Basics = Elm.Basics.make(_elm),
	   $Debug = Elm.Debug.make(_elm),
	   $Dict = Elm.Dict.make(_elm),
	   $Html = Elm.Html.make(_elm),
	   $Html$Attributes = Elm.Html.Attributes.make(_elm),
	   $List = Elm.List.make(_elm),
	   $Maybe = Elm.Maybe.make(_elm),
	   $Models = Elm.Models.make(_elm),
	   $Players$Edit = Elm.Players.Edit.make(_elm),
	   $Players$List = Elm.Players.List.make(_elm),
	   $Result = Elm.Result.make(_elm),
	   $Routing = Elm.Routing.make(_elm),
	   $Signal = Elm.Signal.make(_elm),
	   $String = Elm.String.make(_elm);
	   var _op = {};
	   var notFoundView = A2($Html.div,
	   _U.list([]),
	   _U.list([$Html.text("Not Found")]));
	   var flash = F2(function (address,model) {
	      return $String.isEmpty(model.errorMessage) ? A2($Html.span,
	      _U.list([]),
	      _U.list([])) : A2($Html.div,
	      _U.list([$Html$Attributes.$class("bold center p2 mb2 white bg-red rounded")]),
	      _U.list([$Html.text(model.errorMessage)]));
	   });
	   var playerEditPage = F2(function (address,model) {
	      var playerId = A2($Maybe.withDefault,
	      "",
	      A2($Dict.get,"id",model.routing.routerPayload.params));
	      var maybePlayer = $List.head(A2($List.filter,
	      function (player) {
	         return _U.eq($Basics.toString(player.id),playerId);
	      },
	      model.players));
	      var _p0 = maybePlayer;
	      if (_p0.ctor === "Just") {
	            var viewModel = {player: _p0._0};
	            return A2($Players$Edit.view,
	            A2($Signal.forwardTo,address,$Actions.PlayersAction),
	            viewModel);
	         } else {
	            return notFoundView;
	         }
	   });
	   var playersPage = F2(function (address,model) {
	      var viewModel = {players: model.players};
	      return A2($Players$List.view,
	      A2($Signal.forwardTo,address,$Actions.PlayersAction),
	      viewModel);
	   });
	   var page = F2(function (address,model) {
	      var _p1 = model.routing.view;
	      switch (_p1.ctor)
	      {case "PlayersView": return A2(playersPage,address,model);
	         case "PlayerEditView": return A2(playerEditPage,address,model);
	         default: return notFoundView;}
	   });
	   var view = F2(function (address,model) {
	      var _p2 = A2($Debug.log,"model",model);
	      return A2($Html.div,
	      _U.list([]),
	      _U.list([A2(flash,address,model),A2(page,address,model)]));
	   });
	   return _elm.View.values = {_op: _op
	                             ,view: view
	                             ,page: page
	                             ,playersPage: playersPage
	                             ,playerEditPage: playerEditPage
	                             ,flash: flash
	                             ,notFoundView: notFoundView};
	};
	Elm.Main = Elm.Main || {};
	Elm.Main.make = function (_elm) {
	   "use strict";
	   _elm.Main = _elm.Main || {};
	   if (_elm.Main.values) return _elm.Main.values;
	   var _U = Elm.Native.Utils.make(_elm),
	   $Actions = Elm.Actions.make(_elm),
	   $Basics = Elm.Basics.make(_elm),
	   $Debug = Elm.Debug.make(_elm),
	   $Effects = Elm.Effects.make(_elm),
	   $Html = Elm.Html.make(_elm),
	   $List = Elm.List.make(_elm),
	   $Mailboxes = Elm.Mailboxes.make(_elm),
	   $Maybe = Elm.Maybe.make(_elm),
	   $Models = Elm.Models.make(_elm),
	   $Players$Actions = Elm.Players.Actions.make(_elm),
	   $Players$Effects = Elm.Players.Effects.make(_elm),
	   $Result = Elm.Result.make(_elm),
	   $Routing = Elm.Routing.make(_elm),
	   $Signal = Elm.Signal.make(_elm),
	   $StartApp = Elm.StartApp.make(_elm),
	   $Task = Elm.Task.make(_elm),
	   $Update = Elm.Update.make(_elm),
	   $View = Elm.View.make(_elm);
	   var _op = {};
	   var getDeleteConfirmation = Elm.Native.Port.make(_elm).inboundSignal("getDeleteConfirmation",
	   "Int",
	   function (v) {
	      return typeof v === "number" && isFinite(v) && Math.floor(v) === v ? v : _U.badPort("an integer",
	      v);
	   });
	   var getDeleteConfirmationSignal = function () {
	      var toAction = function (id) {
	         return $Actions.PlayersAction($Players$Actions.DeletePlayer(id));
	      };
	      return A2($Signal.map,toAction,getDeleteConfirmation);
	   }();
	   var askDeleteConfirmation = Elm.Native.Port.make(_elm).outboundSignal("askDeleteConfirmation",
	   function (v) {
	      return [v._0,v._1];
	   },
	   $Mailboxes.askDeleteConfirmationMailbox.signal);
	   var routeRunTask = Elm.Native.Task.make(_elm).perform($Routing.router.run);
	   var routerSignal = A2($Signal.map,
	   $Actions.RoutingAction,
	   $Routing.router.signal);
	   var init = function () {
	      var fxs = _U.list([A2($Effects.map,
	      $Actions.PlayersAction,
	      $Players$Effects.fetchAll)]);
	      var fx = $Effects.batch(fxs);
	      return {ctor: "_Tuple2",_0: $Models.initialModel,_1: fx};
	   }();
	   var app = $StartApp.start({init: init
	                             ,inputs: _U.list([routerSignal
	                                              ,$Mailboxes.actionsMailbox.signal
	                                              ,getDeleteConfirmationSignal])
	                             ,update: $Update.update
	                             ,view: $View.view});
	   var main = app.html;
	   var runner = Elm.Native.Task.make(_elm).performSignal("runner",
	   app.tasks);
	   return _elm.Main.values = {_op: _op
	                             ,init: init
	                             ,routerSignal: routerSignal
	                             ,app: app
	                             ,main: main
	                             ,getDeleteConfirmationSignal: getDeleteConfirmationSignal};
	};

	module.exports = Elm;

/***/ }
/******/ ]);