/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/geradorCPF.js":
/*!***********************************!*\
  !*** ./src/modules/geradorCPF.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GeraCPF: () => (/* binding */ GeraCPF)
/* harmony export */ });
/* harmony import */ var _validaCPF_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validaCPF.js */ "./src/modules/validaCPF.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var GeraCPF = /*#__PURE__*/function () {
  function GeraCPF() {
    _classCallCheck(this, GeraCPF);
  }
  return _createClass(GeraCPF, [{
    key: "rand",
    value: function rand() {
      var min = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100000000;
      var max = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 999999999;
      return String(Math.floor(Math.random() * (max - min) + min));
    }
  }, {
    key: "formatado",
    value: function formatado(cpf) {
      return cpf.slice(0, 3) + '.' + cpf.slice(3, 6) + '.' + cpf.slice(6, 9) + '-' + cpf.slice(9, 11);
    }
  }, {
    key: "geraNovoCpf",
    value: function geraNovoCpf() {
      var cpfSemDigito = this.rand();
      var digito1 = _validaCPF_js__WEBPACK_IMPORTED_MODULE_0__.ValidaCPF.geraDigito(cpfSemDigito);
      var digito2 = _validaCPF_js__WEBPACK_IMPORTED_MODULE_0__.ValidaCPF.geraDigito(cpfSemDigito + digito1);
      var novoCpf = cpfSemDigito + digito1 + digito2;
      return this.formatado(novoCpf);
    }
  }]);
}();


/***/ }),

/***/ "./src/modules/geradorSEN.js":
/*!***********************************!*\
  !*** ./src/modules/geradorSEN.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GerarSenha: () => (/* binding */ GerarSenha)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var GerarSenha = /*#__PURE__*/function () {
  function GerarSenha() {
    _classCallCheck(this, GerarSenha);
    this.caracter = document.querySelector('.caracter-input');
    this.number = document.querySelector('.number-input');
    this.upperCase = document.querySelector('.upperCase-input');
    this.lowerCase = document.querySelector('.lowerCase-input');
    this.symbol = document.querySelector('.symbol-input');
    this.result = [];
  }
  return _createClass(GerarSenha, [{
    key: "rand",
    value: function rand(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
  }, {
    key: "valid",
    value: function valid() {}
  }, {
    key: "validOptions",
    value: function validOptions() {
      var valid = false;
      if (!(this.number.checked || this.upperCase.checked || this.lowerCase.checked)) valid = true;
      return valid;
    }
  }, {
    key: "addNumber",
    value: function addNumber(n) {
      this.result.push(n);
    }
  }, {
    key: "addUpper",
    value: function addUpper(n) {
      var letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
      this.result.push(letras[n]);
    }
  }, {
    key: "addLower",
    value: function addLower(n) {
      var letras = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      this.result.push(letras[n]);
    }
  }, {
    key: "gerador",
    value: function gerador() {
      if (this.upperCase.checked) this.addUpper(this.rand(0, 25));
      if (this.lowerCase.checked) this.addLower(this.rand(0, 25));
      if (this.number.checked) this.addNumber(this.rand(0, 9));
    }
  }]);
}();
document.addEventListener('click', function (e) {
  var gerar = new GerarSenha();
  var el = e.target;
  if (el.classList.contains('btn-gerar')) {
    if (gerar.caracter.value === '') return alert('Informe a quantidade de caracteres');
    if (gerar.caracter.value > 20 || gerar.caracter.value < 1) return alert('Quantidade de caracteres precisa ser entre 1 e 20');
    if (gerar.validOptions()) alert('Preencha no mínimo uma opção');
    var screen = document.querySelector('.password-screen');
    screen.innerHTML = '';
    var rep = gerar.caracter.value;
    for (var i = 0; i < rep; i++) {
      gerar.gerador();
      screen.innerHTML += gerar.result[i];
      if (screen.innerHTML.length === 20 || screen.innerHTML.length === 40) screen.innerHTML += '</br>';
    }
  }
});

/***/ }),

/***/ "./src/modules/validaCPF.js":
/*!**********************************!*\
  !*** ./src/modules/validaCPF.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ValidaCPF: () => (/* binding */ ValidaCPF)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var ValidaCPF = /*#__PURE__*/function () {
  function ValidaCPF(cpfEnviado) {
    _classCallCheck(this, ValidaCPF);
    Object.defineProperty(this, 'cpfLimpo', {
      writable: false,
      enumerable: true,
      configurable: false,
      value: cpfEnviado.replace(/\D+/g, '')
    });
  }
  return _createClass(ValidaCPF, [{
    key: "\xE9Sequ\xEAncia",
    value: function éSequência() {
      return this.cpfLimpo.charAt(0).repeat(11) === this.cpfLimpo;
    }
  }, {
    key: "geraNovoCpf",
    value: function geraNovoCpf() {
      var cpfSemDigitos = this.cpfLimpo.slice(0, -2);
      var digito1 = ValidaCPF.geraDigito(cpfSemDigitos);
      var digito2 = ValidaCPF.geraDigito(cpfSemDigitos + digito1);
      this.novoCPF = cpfSemDigitos + digito1 + digito2;
    }
  }, {
    key: "valida",
    value: function valida() {
      if (!this.cpfLimpo) return false;
      if (typeof this.cpfLimpo !== 'string') return false;
      if (this.cpfLimpo.length !== 11) return false;
      if (this.éSequência()) return false;
      this.geraNovoCpf();
      return this.novoCPF === this.cpfLimpo;
    }
  }], [{
    key: "geraDigito",
    value: function geraDigito(cpfSemDigitos) {
      var total = 0;
      var reverso = cpfSemDigitos.length + 1;
      var _iterator = _createForOfIteratorHelper(cpfSemDigitos),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var stringNumerica = _step.value;
          total += reverso * Number(stringNumerica);
          reverso--;
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      var digito = 11 - total % 11;
      return digito <= 9 ? String(digito) : '0';
    }
  }]);
}();


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --primary-color: rgb(17, 86, 102);
  --primary-color-darker: rgb(9, 48, 56);
}

* {
  outline: 0;
  margin: 0;
  padding: 0;
}

body {
  width: 100vw;
  height: 1500px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right, rgb(31, 243, 151), rgb(6, 113, 118));
  background-color: rgba(17, 16, 16, 0.754);
}

.container {
  width: 80vh;
  height: 1400px;
  padding: 50px;
  background-color: white;
}

div {
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 100px;
}

div h1 {
  font-size: 2em;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 200;
}

div h2 {
  font-size: 1em;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 200;
}

div button { 
  width: 100px;
  height: 30px;
  margin-top: 30px;
}

div button:hover {
  cursor: pointer;
  background-image: linear-gradient(to right, rgb(36, 158, 36), rgb(5, 128, 5));
  border: 1px solid black;
}

.validaCPF input {
  width: 300px;
  height: 20px;
  padding: 10px;
  font-size: 1.1em;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 200;
  letter-spacing: 1px;
}

.validaCPF button {
  width: 150px;
  height: 50px;
  padding: 5px;
  border: 1px;
  background-image: linear-gradient(to right, rgb(18, 254, 18), rgb(32, 152, 32));
  color: rgb(26, 14, 14);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.1em;
}

.geraCPF button {
  width: 150px;
  height: 50px;
  padding: 5px;
  border: 1px;
  background-image: linear-gradient(to right, rgb(18, 254, 18), rgb(32, 152, 32));
  color: rgb(26, 14, 14);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.1em;

}

.geraCPF {
  height: 300px;
}

.geraSenha {
  height: 600px;
}

.geraSenha button {
  width: 150px;
  height: 50px;
  padding: 5px;
  border: 1px;
  background-image: linear-gradient(to right, rgb(18, 254, 18), rgb(32, 152, 32));
  color: rgb(26, 14, 14);
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.1em;
}

.geraSenha label {
  font-size: 1.4em;
  margin-top: 10px;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 100;
}

.geraSenha input {
  width: 20px;
  height: 20px;
}

.geraSenha input[type="number"] {
  width: 50px;
  height: 30px;
  padding: 5px;
}

p {
  font-size: 3em;
  font-family: Arial, Helvetica, sans-serif;
  color: var(--primary-color);
}
`, "",{"version":3,"sources":["webpack://./src/assets/css/style.css"],"names":[],"mappings":"AACA;EACE,iCAAiC;EACjC,sCAAsC;AACxC;;AAEA;EACE,UAAU;EACV,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,cAAc;EACd,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,gFAAgF;EAChF,yCAAyC;AAC3C;;AAEA;EACE,WAAW;EACX,cAAc;EACd,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,WAAW;EACX,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,8BAA8B;EAC9B,oBAAoB;AACtB;;AAEA;EACE,cAAc;EACd,yCAAyC;EACzC,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,yCAAyC;EACzC,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,eAAe;EACf,6EAA6E;EAC7E,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,gBAAgB;EAChB,yCAAyC;EACzC,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,WAAW;EACX,+EAA+E;EAC/E,sBAAsB;EACtB,yCAAyC;EACzC,gBAAgB;AAClB;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,WAAW;EACX,+EAA+E;EAC/E,sBAAsB;EACtB,yCAAyC;EACzC,gBAAgB;;AAElB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,WAAW;EACX,+EAA+E;EAC/E,sBAAsB;EACtB,yCAAyC;EACzC,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,gBAAgB;EAChB,yCAAyC;EACzC,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,YAAY;AACd;;AAEA;EACE,cAAc;EACd,yCAAyC;EACzC,2BAA2B;AAC7B","sourcesContent":["@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap');\r\n:root {\r\n  --primary-color: rgb(17, 86, 102);\r\n  --primary-color-darker: rgb(9, 48, 56);\r\n}\r\n\r\n* {\r\n  outline: 0;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  width: 100vw;\r\n  height: 1500px;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  background-image: linear-gradient(to right, rgb(31, 243, 151), rgb(6, 113, 118));\r\n  background-color: rgba(17, 16, 16, 0.754);\r\n}\r\n\r\n.container {\r\n  width: 80vh;\r\n  height: 1400px;\r\n  padding: 50px;\r\n  background-color: white;\r\n}\r\n\r\ndiv {\r\n  width: 100%;\r\n  height: 250px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: space-between;\r\n  margin-bottom: 100px;\r\n}\r\n\r\ndiv h1 {\r\n  font-size: 2em;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: 200;\r\n}\r\n\r\ndiv h2 {\r\n  font-size: 1em;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: 200;\r\n}\r\n\r\ndiv button { \r\n  width: 100px;\r\n  height: 30px;\r\n  margin-top: 30px;\r\n}\r\n\r\ndiv button:hover {\r\n  cursor: pointer;\r\n  background-image: linear-gradient(to right, rgb(36, 158, 36), rgb(5, 128, 5));\r\n  border: 1px solid black;\r\n}\r\n\r\n.validaCPF input {\r\n  width: 300px;\r\n  height: 20px;\r\n  padding: 10px;\r\n  font-size: 1.1em;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: 200;\r\n  letter-spacing: 1px;\r\n}\r\n\r\n.validaCPF button {\r\n  width: 150px;\r\n  height: 50px;\r\n  padding: 5px;\r\n  border: 1px;\r\n  background-image: linear-gradient(to right, rgb(18, 254, 18), rgb(32, 152, 32));\r\n  color: rgb(26, 14, 14);\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 1.1em;\r\n}\r\n\r\n.geraCPF button {\r\n  width: 150px;\r\n  height: 50px;\r\n  padding: 5px;\r\n  border: 1px;\r\n  background-image: linear-gradient(to right, rgb(18, 254, 18), rgb(32, 152, 32));\r\n  color: rgb(26, 14, 14);\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 1.1em;\r\n\r\n}\r\n\r\n.geraCPF {\r\n  height: 300px;\r\n}\r\n\r\n.geraSenha {\r\n  height: 600px;\r\n}\r\n\r\n.geraSenha button {\r\n  width: 150px;\r\n  height: 50px;\r\n  padding: 5px;\r\n  border: 1px;\r\n  background-image: linear-gradient(to right, rgb(18, 254, 18), rgb(32, 152, 32));\r\n  color: rgb(26, 14, 14);\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-size: 1.1em;\r\n}\r\n\r\n.geraSenha label {\r\n  font-size: 1.4em;\r\n  margin-top: 10px;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  font-weight: 100;\r\n}\r\n\r\n.geraSenha input {\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n\r\n.geraSenha input[type=\"number\"] {\r\n  width: 50px;\r\n  height: 30px;\r\n  padding: 5px;\r\n}\r\n\r\np {\r\n  font-size: 3em;\r\n  font-family: Arial, Helvetica, sans-serif;\r\n  color: var(--primary-color);\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/style.css */ "./src/assets/css/style.css");
/* harmony import */ var _modules_geradorSEN_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/geradorSEN.js */ "./src/modules/geradorSEN.js");
/* harmony import */ var _modules_geradorCPF_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/geradorCPF.js */ "./src/modules/geradorCPF.js");
/* harmony import */ var _modules_validaCPF_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/validaCPF.js */ "./src/modules/validaCPF.js");




var geraSenha = new _modules_geradorSEN_js__WEBPACK_IMPORTED_MODULE_1__.GerarSenha();
document.addEventListener('click', function (e) {
  var el = e.target;
  if (el.classList.contains('geraCpf')) {
    var geraCpf = new _modules_geradorCPF_js__WEBPACK_IMPORTED_MODULE_2__.GeraCPF();
    var inputCpf = document.querySelector('.cpf-screen');
    inputCpf.innerHTML = geraCpf.geraNovoCpf();
  }
  if (el.classList.contains('validCPF')) {
    var _inputCpf = document.querySelector('.inputValid').value;
    var h2result = document.querySelector('h2');
    var validCpf = new _modules_validaCPF_js__WEBPACK_IMPORTED_MODULE_3__.ValidaCPF(_inputCpf);
    if (validCpf.valida()) {
      h2result.innerText = 'Cpf correto';
      h2result.style.color = 'green';
    } else {
      h2result.innerHTML = "Cpf incorreto";
      h2result.style.color = 'red';
    }
  }
});
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map