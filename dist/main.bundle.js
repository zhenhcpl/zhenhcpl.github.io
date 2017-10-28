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
exports.push([module.i, ".carousel-item {\n  height: 65vh;\n  min-height: 300px;\n  background: no-repeat center center scroll;\n  background-size: cover;\n}\n\n.content-section-a {\n  padding: 50px 0;\n  background-color: #f8f8f8;\n}\n\n.content-section-b {\n  padding: 50px 0;\n  border-top: 1px solid #e7e7e7;\n  border-bottom: 1px solid #e7e7e7;\n}\n\n.section-heading {\n  margin-bottom: 30px;\n}\n\n.section-heading-spacer {\n  float: left;\n  width: 200px;\n  border-top: 3px solid #e7e7e7;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/About Us/about-us.html":
/***/ (function(module, exports) {

module.exports = " <header>\n      <div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\">\n        <ol class=\"carousel-indicators\">\n          <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n          <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n          <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n        </ol>\n        <div class=\"carousel-inner\" role=\"listbox\">\n          <div class=\"carousel-item active\" style=\"background-image: url('assets/la.jpg')\">\n            <div class=\"carousel-caption d-none d-md-block\">\n              <h3>First Slide</h3>\n              <p>This is a description for the first slide.</p>\n            </div>\n          </div>\n         \n\n          <div class=\"carousel-item\" style=\"background-image: url('assets/ny.jpg')\">\n            <div class=\"carousel-caption d-none d-md-block\">\n              <h3>Second Slide</h3>\n              <p>This is a description for the second slide.</p>\n            </div>\n          </div>\n        \n        \n          <div class=\"carousel-item\" style=\"background-image: url('assets/chicago.jpg')\">\n            <div class=\"carousel-caption d-none d-md-block\">\n              <h3>Third Slide</h3>\n              <p>This is a description for the third slide.</p>\n            </div>\n          </div>\n        </div>\n        <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n          <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n          <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n          <span class=\"sr-only\">Next</span>\n        </a>\n      </div>\n    </header>\n\n   <section class=\"content-section-a\">\n\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-5 ml-auto\">\n            <hr class=\"section-heading-spacer\">\n            <div class=\"clearfix\"></div>\n            <h2 class=\"section-heading\">OUR HISTORY</h2>\n            <p class=\"lead\">Our Company SHRI RAMESTH INDUSTRIES was established IN 2007.\n              In 2013 we started our marketing company in the name of ZHEN HEAL CRAFT PVT LTD .\n              Since then our compoany has grown exponentially towards welfare of community.</p>\n          </div>\n          <div class=\"col-lg-5 mr-auto\">\n            <img class=\"rounded-circle img-fluid d-block mx-auto\" src=\"assets/management.JPG\" alt=\"\">\n          </div>\n        </div>\n\n      </div>\n      <!-- /.container -->\n    </section>\n\n    <section class=\"content-section-b\">\n\n      <div class=\"container\">\n\n        <div class=\"row\">\n          <div class=\"col-lg-5 mr-auto order-lg-2\">\n            <hr class=\"section-heading-spacer\">\n            <div class=\"clearfix\"></div>\n            <h2 class=\"section-heading\">QUALITY POLICY</h2>\n            <p class=\"lead\">We are committed to deliver affordable and quality products to patients. A fundamental element of our company mission and vision.</p>\n          </div>\n          <div class=\"col-lg-5 ml-auto order-lg-1\">\n             <img class=\"rounded-circle img-fluid d-block mx-auto\" src=\"assets/products-variety.JPG\" alt=\"\">\n          </div>\n        </div>\n\n      </div>\n      <!-- /.container -->\n\n    </section>\n    <!-- /.content-section-b -->\n\n    <section class=\"content-section-a\">\n\n      <div class=\"container\">\n\n        <div class=\"row\">\n          <div class=\"col-lg-5 ml-auto\">\n            <hr class=\"section-heading-spacer\">\n            <div class=\"clearfix\"></div>\n            <h2 class=\"section-heading\">A PRODUCT FOR EVERY NEED</h2>\n            <p class=\"lead\">We take utmost care to understand the needs of our customers. This enables us to develop innovative quality products at an affordable cost.\n              Our product catalog includes tablets, capsules, dry syrups AND oral liquid dosage forms.</p>\n          </div>\n          <div class=\"col-lg-5 mr-auto \">\n            <img class=\"rounded-circle img-fluid d-block mx-auto\" src=\"assets/quality.JPG\" alt=\"\">\n          </div>\n        </div>\n\n      </div>\n      <!-- /.container -->\n\n    </section>"

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
        this.isSpinnerVisible = true;
    }
    ContactComponent.prototype.onFrameLoaded = function () {
        console.log('on frame loaded');
        this.isSpinnerVisible = false;
    };
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
exports.push([module.i, ".address-container {\n   border: 1px solid darkgrey;\n    margin-top: 30px;\n    height: 310px;\n    margin-left: 33px;\n    width: 90%;\n    margin-bottom: 30px;\n}\n\n.address-detail-container { \n   float: left;\n    position: relative;\n    top: 27px;\n}\n\n#contact-logo {\n    height: 15em;\n    width: 100%;\n}\n\n.map-container {\n    float: left;\n    position: relative;\n    top: 15px;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Contact/contact.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <img id=\"contact-logo\" src='/assets/inner-banner.jpg'>\n</div>\n\n<div class=\"address-container\">\n    <div class=\"col-sm-4 address-detail-container\">\n        <h3>Corporate Address</h3>\n        <p>Khasra No. 360/184 & 364/235 P.O.<br> Tehsil - Baddi<br> Distt. Solan - 173205 (H.P.)</p>\n        <div>+91 9882998339</div>\n        <div>+91 9882998335</div>\n        <div>+91 9882998336</div>\n        <a href=\"mailto:zhenhcpl@gmail.com\" target=\"_top\">zhenhcpl@gmail.com</a>\n    </div>\n    <div class=\"col-sm-8 map-container\">\n        <div class=\"spinner\" *ngIf=\"isSpinnerVisible\" >\n            <div class=\"bounce1\"></div>\n            <div class=\"bounce2\"></div>\n            <div class=\"bounce3\"></div>\n        </div>\n        <iframe (load)=\"onFrameLoaded()\" src=\"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d855.359564627506!2d76.79147269775844!3d30.95824982196401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39055f9a5f7ac64f%3A0x5809b42ac0e8aa7!2sBaddi%2C+Himachal+Pradesh!5e0!3m2!1sen!2sin!4v1509037096123\"\n            width=\"100%\" height=\"270\" frameborder=\"0\" style=\"border:0\" allowfullscreen></iframe>\n</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/Home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light fixed-top nav-container\">\n    <div class=\"container nav-div-container\">\n        <a id=\"brand-anchor\" class=\"navbar-brand\" href=\"#\">\n            <img id=\"brand-image\" src=\"assets/logo.png\" id=\"brand-image\" alt=\"\">\n        </a>\n        <div id=\"brand-name-cotainer\">\n            <p id=\"main-brand-name\" class=\"navbar-brand no-user-select\">Shri Ramesth Industries</p>\n            <p id=\"unit-brand-name\" class=\"navbar-brand no-user-select\">(A unit of Zhen Heal Craft Pvt.Ltd.)</p>\n        </div>\n        <button class=\"navbar-toggler navbar-button\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n        <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\n            <ul class=\"navbar-nav ml-auto\">\n                <li class=\"nav-item\">\n                    <a class=\"nav-link no-user-select\" routerLink='about-us'>About Us</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link no-user-select\" routerLink='products'>Products</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link no-user-select\" routerLink='contact'>Contact</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n\n<router-outlet></router-outlet>\n\n<footer class=\"py-4 bg-dark\">\n    <div class=\"footer-above\">\n\n\n        <div class=\"container\">\n\n            <div class=\"row\">\n                 <div class=\"col-md-4\">\n                    <span class=\"copyright text-white\">A GMP & ISO 9001-2008 Certified Company</span>\n                </div>\n                \n                <div class=\"col-md-5\">\n                    <span class=\"copyright text-white\" style=\"float: right;\">© 2017 Zhen Heal Craft Pvt.Ltd. All rights reserved.</span>\n                </div>\n               <div class=\"col-md-3 \">\n                    <ul class=\"list-inline social-buttons\" >\n                        <li class=\"list-inline-item\" style=\"float: right;\">\n                            <a href=\"https://www.facebook.com/Zhen-Heal-Craft-Pvt-Ltd-402363276564679/\" target=\"blank\">\n                                <img class=\"fb-logo\" src=\"assets/fb-logo.png\">\n                            </a>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n\n    </div>\n    <div class=\"footer-below\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md \">\n                    <!--<span class=\"text-white\" style=\"float: right;\">Developed by Ankit Kapoor</span>-->\n                </div>\n            </div>\n        </div>\n    </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/Home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/Home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/Home/home.css")]
    })
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/Home/home.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".nav-container {\n     background-color: lightgrey;\n     border-bottom: #b8342c solid 4px;\n     z-index: 1030;\n}\n\n.nav-div-container {}\n\n.navbar-button {\n    border-color: #b8342c;\n    border-width: 2px;\n}\n\n.navbar-button :focus {\n    outline:none;\n}\n\n#brand-anchor {\n    height: 6em;\n}\n\n#brand-image  {\n    height: 100%;\n}\n\n.nav-link {\n    font-size: 1.4em;\n}\n\n.navbar-brand {\n    display: block;\n}\n\n#brand-name-cotainer {\n   margin-top: 3%;\n}\n\n#main-brand-name {\n    line-height: 0.2em;\n    font-size: 1.8em;\n    margin: 0 0 0 3%;\n    cursor: default;\n}\n\n#unit-brand-name {\n    font-size: 1.2em;\n    cursor: default;\n}\n\n.no-user-select {\n     -webkit-user-select: none; /* Chrome, Opera, Safari */\n    -moz-user-select: none; /* Firefox 2+ */\n    -ms-user-select: none; /* IE 10+ */\n    user-select: none; /* Standard syntax */\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProductsComponent = (function () {
    function ProductsComponent() {
    }
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/Products/products.html"),
        styles: [__webpack_require__("../../../../../src/app/Products/products.css")]
    })
], ProductsComponent);

//# sourceMappingURL=products.component.js.map

/***/ }),

/***/ "../../../../../src/app/Products/products.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".product-container {\n    height: 38em;\n    background-color: #FED0BB;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n\n.coming-header {\n    font-family: 'Roboto Slab';\n    font-size: 4em;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Products/products.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"product-container\">\n\n<h1 class=\"coming-header text-center\">Coming Soon !</h1>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".header-container {\n    height: 160px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    background-color: #F4F4ED;\n    \n}\n\n.iso-container {\n    -ms-flex-item-align: start;\n        align-self: flex-start;\n    position: absolute;\n    right: 20px;\n    font-size: 13px;\n    font-family: 'Roboto';\n}\n\n#logo-container {\n    height: 77%;\n}\n\n#brand-logo {\n    height: 100%;\n    position: relative;\n    left: 40px;\n}\n\n.brand-name-container {\n    margin: auto;\n}\n\n.navbar-container {\n    background-color: #b8342c;\n    height: 40px;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.footer-container {\n    height: 30px;\n    background-color: #b8342c;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: baseline;\n        -ms-flex-pack: baseline;\n            justify-content: baseline;\n}\n\na {\n    color: white;\n}\n\n.navigation-item-container {\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: row;\n            flex-direction: row;\n}\n\n.navigation-items {\n   padding-left: 50px;\n    color: white;\n    font-size: 19px;\n}\n.brand-labels{\n    display: block;\n    font-family: 'Roboto Slab';\n}\n\n#main-brand-name {\nfont-size: 30px; \nmargin-left: 6%;\n}\n\n#unit-brand-name {\n    font-size: 24px;\n}\n\n.navbar {\n    padding: 0;\n}\n\n\n\n.footer-label {\n    color: white;\n    font-size: 13px;\n    font-family: 'Roboto';\n\n}\n\n\n.no-user-select {\n     -webkit-user-select: none; /* Chrome, Opera, Safari */\n    -moz-user-select: none; /* Firefox 2+ */\n    -ms-user-select: none; /* IE 10+ */\n    user-select: none; /* Standard syntax */\n}\n\n.fb-logo-container {\n    width: 29px;\n    height: 29px;\n}\n\n.fb-logo {\n    height: 71%;\n    margin-left: 7px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"header-container\">\n    <a id=\"logo-container\" href=\"/\">\n        <img id=\"brand-logo\" src=\"../../assets/logo.png\">\n    </a>\n    <div class=\"brand-name-container\">\n        <label id=\"main-brand-name\" class=\"brand-labels no-user-select\">Shri Ramesth Industries</label>\n        <label id=\"unit-brand-name\" class=\"brand-labels no-user-select\">(A unit of Zhen Heal Craft Pvt.Ltd.)</label>\n    </div>\n    <div class=\"iso-container\">A GMP & ISO 9001-2008 Certified Company</div>\n    </div>\n     <div class=\"navbar-container\">\n     <nav class=\"navbar navbar-default\">\n            <ul class=\"nav navbar-nav navigation-item-container\">\n                <li class=\"nav-item navigation-items\">\n                    <a class=\"nav-link no-user-select\" routerLink='about-us'>About Us</a>\n                </li>\n                <li class=\"nav-item navigation-items\">\n                    <a class=\"nav-link no-user-select\" routerLink='products'>Product</a>\n                </li>\n                <li class=\"nav-item navigation-items\">\n                    <a class=\"nav-link no-user-select\" routerLink='contact'>Contact</a>\n                </li>\n            </ul>\n        </nav>\n     </div>\n    <router-outlet></router-outlet>\n    <div class=\"navbar fixed-bottom footer-container\">\n        <div class=\"footer-label no-user-select\">© 2017 Zhen Heal Craft Pvt.Ltd. All rights reserved.</div>\n            <a class=\"fb-logo-container\" href=\"https://www.facebook.com/Zhen-Heal-Craft-Pvt-Ltd-402363276564679/\" target=\"blank\">\n            <img class=\"fb-logo\" src=\"assets/fb-logo.png\">\n            </a>\n    </div>"

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
        selector: 'app-home',
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Home_home_component__ = __webpack_require__("../../../../../src/app/Home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Products_products_component__ = __webpack_require__("../../../../../src/app/Products/products.component.ts");
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
        path: 'products',
        component: __WEBPACK_IMPORTED_MODULE_8__Products_products_component__["a" /* ProductsComponent */]
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
            __WEBPACK_IMPORTED_MODULE_5__Contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_7__Home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_8__Products_products_component__["a" /* ProductsComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(appRoutes)
        ],
        providers: [{ provide: __WEBPACK_IMPORTED_MODULE_6__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_6__angular_common__["d" /* HashLocationStrategy */] }],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__Home_home_component__["a" /* HomeComponent */]]
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