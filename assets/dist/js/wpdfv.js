/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/src/css/frontend/wpdfv.scss":
/*!********************************************!*\
  !*** ./assets/src/css/frontend/wpdfv.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/src/js/frontend/wpdfv.js":
/*!*****************************************!*\
  !*** ./assets/src/js/frontend/wpdfv.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

jQuery( document ).ready( function( $ ) {

	$( '.wpdfv-fullscreen-container .wpdfv-fullscreen-btn' ).on( 'click', function( e ) {

		var post_id = jQuery(this).data('post-id');
		var data = {
			'action': 'display_post_details',
			'id': post_id
		};

		// since 2.8 ajaxurl is always defined in the admin header and points to admin-ajax.php
		$.post( wpdfv.ajaxurl, data, function(response) {
			$('.wpdfv-overlay-wrap').css('overflow-y','scroll');
			$('body').css('overflow-y','hidden');
			$('.wpdfv-fullscreen-overlay-container .wpdfv-overlay-wrap').html(response);
			$('.wpdfv-fullscreen-overlay-container').fadeIn('slow');
		});
		e.preventDefault();
	});

	$( '.wpdfv-overlay-close' ).on( 'click', function( e ) {
		$('.wpdfv-overlay-wrap').css('overflow-y','scroll');
		$('body').css('overflow-y','scroll');
		$('.wpdfv-fullscreen-overlay-container').fadeOut('slow');
		e.preventDefault();
	});

	// Dual Fullscreen Mode.
	$( '.wpdfv-fullscreen-overlay-container .wpdfv-dual-fullscreen-btn' ).on( 'click', function( e ) {

		if (
			! document.fullscreenElement &&
			! document.mozFullScreenElement &&
			! document.webkitFullscreenElement &&
			! document.msFullscreenElement
		) {

			if ( document.documentElement.requestFullscreen ) {
				document.documentElement.requestFullscreen();
			} else if ( document.documentElement.msRequestFullscreen ) {
				document.documentElement.msRequestFullscreen();
			} else if ( document.documentElement.mozRequestFullScreen ) {
				document.documentElement.mozRequestFullScreen();
			} else if ( document.documentElement.webkitRequestFullscreen ) {
				document.documentElement.webkitRequestFullscreen( Element.ALLOW_KEYBOARD_INPUT );
			}
			$( '.wpdfv-overlay-close' ).hide();
		} else {
			if ( document.exitFullscreen ) {
				document.exitFullscreen();
			} else if ( document.msExitFullscreen ) {
				document.msExitFullscreen();
			} else if ( document.mozCancelFullScreen ) {
				document.mozCancelFullScreen();
			} else if ( document.webkitExitFullscreen ) {
				document.webkitExitFullscreen();
			}
			$( '.wpdfv-overlay-close' ).show();
		}
	});

	// Display action for Print.
	$( '.wpdfv-fullscreen-overlay-container .wpdfv-overlay-print' ).on( 'click', function( e ) {

		// Get the HTML of div.
		var divElements = document.getElementById( 'wpdfv-print' ).innerHTML;

		// Get the HTML of whole page.
		var oldPage = document.body.innerHTML;

		// Reset the page's HTML with div's HTML only.
		document.body.innerHTML =
			"<html><head><title></title></head><body>" +
			divElements + "</body>";

		// Print Page.
		window.print();

		// Restore orignal HTML.
		document.body.innerHTML = oldPage;
	});
});


/***/ }),

/***/ 0:
/*!************************************************************************************!*\
  !*** multi ./assets/src/css/frontend/wpdfv.scss ./assets/src/js/frontend/wpdfv.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./assets/src/css/frontend/wpdfv.scss */"./assets/src/css/frontend/wpdfv.scss");
module.exports = __webpack_require__(/*! ./assets/src/js/frontend/wpdfv.js */"./assets/src/js/frontend/wpdfv.js");


/***/ })

/******/ });
//# sourceMappingURL=wpdfv.js.map