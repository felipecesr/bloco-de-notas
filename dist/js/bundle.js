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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _searchUser = __webpack_require__(1);

var _searchUser2 = _interopRequireDefault(_searchUser);

var _repositories = __webpack_require__(2);

var _repositories2 = _interopRequireDefault(_repositories);

var _User = __webpack_require__(3);

var _User2 = _interopRequireDefault(_User);

var _Repos = __webpack_require__(4);

var _Repos2 = _interopRequireDefault(_Repos);

var _Follow = __webpack_require__(5);

var _Follow2 = _interopRequireDefault(_Follow);

var _Details = __webpack_require__(6);

var _Details2 = _interopRequireDefault(_Details);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var $profile = document.querySelector('#profile');
var $follow = document.querySelector('#follow');
var $details = document.querySelector('#details');
var $repositories = document.querySelector('#repositories');
var $repositoriesTitle = document.querySelector('#repositories-title');
var $searchForm = document.querySelector('#search-form');
var $userSearch = document.querySelector('#user-search');

$searchForm.addEventListener('submit', function (e) {
  e.preventDefault();

  (0, _searchUser2.default)($userSearch.value).then(function (data) {
    (0, _User2.default)(data, $profile);
    (0, _Follow2.default)(data, $follow);
    (0, _Details2.default)(data, $details);
  });

  (0, _repositories2.default)($userSearch.value).then(function (data) {
    $repositoriesTitle.textContent = 'Repositories (' + data.length + ')';
    (0, _Repos2.default)(data, $repositories);
  });
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var searchUser = function searchUser(username) {
  return fetch("https://api.github.com/users/" + username).then(function (data) {
    return data.json();
  });
};

exports.default = searchUser;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var getRepositories = function getRepositories(username) {
  return fetch("https://api.github.com/users/" + username + "/repos").then(function (data) {
    return data.json();
  });
};

exports.default = getRepositories;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function renderUser(data, element) {
  var el = element;
  var markup = "\n    <img class=\"profile__photo\" src=\"" + data.avatar_url + "\" alt=\"" + data.name + "\">\n    <p class=\"profile__name\">" + data.name + "</p>\n    <p class=\"profile__username\">" + data.login + "</p>\n  ";

  el.innerHTML = markup;
}

exports.default = renderUser;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function renderRepos(data, element) {
  var el = element;
  var markup = data.map(function (repo) {
    return '\n    <li class="repository">\n      <p class="repository__title">' + repo.name + '</p>\n      <p class="repository__desc">' + (repo.description || '') + '</p>\n    </li>\n  ';
  }).join('');

  el.innerHTML = markup;
}

exports.default = renderRepos;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function renderFollow(data, element) {
  var el = element;
  var markup = "\n    <li class=\"follow__item\">\n      <span class=\"follow__item--value\">" + data.followers + "</span> Followers\n    </li>\n    <li class=\"follow__item\">\n      <span class=\"follow__item--value\">" + data.following + "</span> Following\n    </li>\n  ";

  el.innerHTML = markup;
}

exports.default = renderFollow;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function renderDetails(data, element) {
  var el = element;
  var markup = "\n    <li class=\"details__item\">\n      <svg class=\"details__icon\"><use xlink:href=\"/img/icons.svg#group\"></use></svg>\n      <a href=\"#\" class=\"details__desc\">" + data.company + "</a>\n    </li>\n    <li class=\"details__item\">\n      <svg class=\"details__icon\"><use xlink:href=\"/img/icons.svg#place\"></use></svg>\n      <a href=\"#\" class=\"details__desc\">" + data.location + "</a>\n    </li>\n    <li class=\"details__item\">\n      <svg class=\"details__icon\"><use xlink:href=\"/img/icons.svg#envelope\"></use></svg>\n      <a href=\"mailto:" + data.email + "\" class=\"details__desc\">" + data.email + "</a>\n    </li>\n    <li class=\"details__item\">\n      <svg class=\"details__icon\"><use xlink:href=\"/img/icons.svg#home\"></use></svg>\n      <a href=\"" + data.blog + "\" class=\"details__desc\">" + data.blog + "</a>\n    </li>\n  ";

  el.innerHTML = markup;
}

exports.default = renderDetails;

/***/ })
/******/ ]);