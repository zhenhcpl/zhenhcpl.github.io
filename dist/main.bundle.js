webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/About Us/about-us.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AboutUsComponent = (function () {
    function AboutUsComponent() {
    }
    return AboutUsComponent;
}());
AboutUsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-about-us',
        template: __webpack_require__("../../../../../src/app/About Us/about-us.html"),
        styles: [__webpack_require__("../../../../../src/app/About Us/about-us.css")]
    })
], AboutUsComponent);

//# sourceMappingURL=about-us.component.js.map

/***/ }),

/***/ "../../../../../src/app/About Us/about-us.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".carousel-container {\n   width: 80%;\n   position: relative;\n   left: 10%;\n}\n\n.carousel-item {\n    width: 100%; /*slider width*/\n    height: 300px;\n   \n}\n.carousel-item img {\n    width: 100%; /*img width*/\n    height: 300px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/About Us/about-us.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"carousel-container\">\n    <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n    <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n  </ol>\n  <div class=\"carousel-inner\">\n    <div class=\"carousel-item active\">\n      <img class=\"d-block w-100\" src=\"../../assets/ny.jpg\" alt=\"First slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\"../../assets/chicago.jpg\" alt=\"Second slide\">\n    </div>\n    <div class=\"carousel-item\">\n      <img class=\"d-block w-100\" src=\"../../assets/la.jpg\" alt=\"Third slide\">\n    </div>\n  </div>\n  <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Previous</span>\n  </a>\n  <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n    <span class=\"sr-only\">Next</span>\n  </a>\n</div>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/Contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    return ContactComponent;
}());
ContactComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/Contact/contact.html"),
        styles: [__webpack_require__("../../../../../src/app/Contact/contact.css")]
    })
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/Contact/contact.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".address-container {\n   border: 1px solid darkgrey;\n    margin-top: 30px;\n    height: 310px;\n    margin-left: 33px;\n    width: 90%;\n}\n\n.address-detail-container { \n   float: left;\n    position: relative;\n    top: 27px;\n}\n\n#contact-logo {\n    height: 140px;\n    width: 100%;\n}\n\n.map-container {\n    float: left;\n    position: relative;\n    top: 15px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Contact/contact.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <img id=\"contact-logo\" src='../../assets/inner-banner.jpg'>\n</div>\n\n<div class=\"address-container\">\n    <div class=\"col-sm-4 address-detail-container\">\n        <h3>Corporate Address</h3>\n        <p>Khasra No. 360/184 & 364/235 P.O.<br> Tehsil - Baddi<br> Distt. Solan - 173205 (H.P.)</p>\n        <div>+91 9882998339</div>\n        <div>+91 9882998335</div>\n        <div>+91 9882998336</div>\n        <a href=\"mailto:zhenhcpl@gmail.com\" target=\"_top\">zhenhcpl@gmail.com</a>\n    </div>\n    <div class=\"col-sm-8 map-container\">\n        <iframe src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d855.359564627506!2d76.79147269775844!3d30.95824982196401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39055f9a5f7ac64f%3A0x5809b42ac0e8aa7!2sBaddi%2C+Himachal+Pradesh!5e0!3m2!1sen!2sin!4v1509037096123\"\n            width=\"100%\" height=\"270\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header-container {\n    height: 160px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background-color: #F4F4ED;\n    \n}\n\n.iso-container {\n    -ms-flex-item-align: start;\n        align-self: flex-start;\n    position: absolute;\n    right: 20px;\n    font-size: 13px;\n    font-family: 'Roboto';\n}\n\n#logo-container {\n    height: 77%;\n}\n\n#brand-logo {\n    height: 100%;\n    position: relative;\n    left: 40px;\n}\n\n.brand-name-container {\n    margin: auto;\n}\n\n.navbar-container {\n    background-color: #b8342c;\n    height: 40px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.footer-container {\n    height: 30px;\n    background-color: #b8342c;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\na {\n    color: white;\n}\n\n.navigation-item-container {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n}\n\n.navigation-items {\n   padding-left: 50px;\n    color: white;\n    font-size: 19px;\n}\n.brand-labels{\n    display: block;\n    font-family: 'Roboto Slab';\n}\n\n#main-brand-name {\nfont-size: 30px; \nmargin-left: 6%;\n}\n\n#unit-brand-name {\n    font-size: 24px;\n}\n\n.navbar {\n    padding: 0;\n}\n\n\n\n.footer-label {\n    color: white;\n    font-size: 13px;\n    font-family: 'Roboto';\n\n}\n\n\n.no-user-select {\n     -webkit-user-select: none; /* Chrome, Opera, Safari */\n    -moz-user-select: none; /* Firefox 2+ */\n    -ms-user-select: none; /* IE 10+ */\n    user-select: none; /* Standard syntax */\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-container\">\n    <a id=\"logo-container\" href=\"/\">\n        <img id=\"brand-logo\" src=\"../../assets/logo.png\">\n    </a>\n    <div class=\"brand-name-container\">\n        <label id=\"main-brand-name\" class=\"brand-labels no-user-select\">Shri Ramesth Industries</label>\n        <label id=\"unit-brand-name\" class=\"brand-labels no-user-select\">(A unit of Zhen Heal Craft Pvt.Ltd.)</label>\n    </div>\n    <div class=\"iso-container\">A GMP & ISO 9001-2008 Certified Company</div>\n    </div>\n     <div class=\"navbar-container\">\n     <nav class=\"navbar navbar-default\">\n            <ul class=\"nav navbar-nav navigation-item-container\">\n                <li class=\"nav-item navigation-items\">\n                    <a class=\"nav-link no-user-select\" routerLink='about-us'>About Us</a>\n                </li>\n                <li class=\"nav-item navigation-items\">\n                    <a class=\"nav-link no-user-select\" routerLink='products'>Product</a>\n                </li>\n                <li class=\"nav-item navigation-items\">\n                    <a class=\"nav-link no-user-select\" routerLink='contact'>Contact</a>\n                </li>\n            </ul>\n        </nav>\n     </div>\n    <router-outlet></router-outlet>\n    <div class=\"navbar fixed-bottom footer-container\">\n        <div class=\"footer-label no-user-select\">© 2017 Zhen Heal Craft Pvt.Ltd. All rights reserved.</div>\n    </div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__About_Us_about_us_component__ = __webpack_require__("../../../../../src/app/About Us/about-us.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Contact_contact_component__ = __webpack_require__("../../../../../src/app/Contact/contact.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var appRoutes = [
    {
        path: 'about-us',
        component: __WEBPACK_IMPORTED_MODULE_4__About_Us_about_us_component__["a" /* AboutUsComponent */]
    },
    {
        path: 'contact',
        component: __WEBPACK_IMPORTED_MODULE_5__Contact_contact_component__["a" /* ContactComponent */]
    },
    {
        path: '',
        redirectTo: 'about-us',
        pathMatch: 'full'
    }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_4__About_Us_about_us_component__["a" /* AboutUsComponent */],
            __WEBPACK_IMPORTED_MODULE_5__Contact_contact_component__["a" /* ContactComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map