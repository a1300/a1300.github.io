webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/Foot/foot.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n#appFooter {\r\n  background-color: #222222;\r\n  text-align: center;\r\n  height: 76px;\r\n  line-height: 76px;\r\n  -ms-flex-line-pack: center;\r\n      align-content: center;\r\n  display: block;\r\n  position: fixed;\r\n  width: 100%;\r\n  box-shadow:         0px -1px 5px rgba(100, 100, 100, 0.49);\r\n}\r\n\r\np {\r\n  background-color: #222222;\r\n  text-align: top;\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0px;\r\n  color: grey;\r\n}\r\n\r\n@media print {\r\n  #appFooter {\r\n    display: none;\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Foot/foot.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"appFooter\">\r\n    \r\n    <p>\r\n        <a href=\"{{github}}\">Fork me on github!</a>\r\n        <br>\r\n        XAS Wallet: {{XAS_Account}}\r\n    </p>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/Foot/foot.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FootComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FootComponent = (function () {
    function FootComponent() {
        this.github = new URL('https://github.com/a1300/asch-paperwallet');
        this.XAS_Account = 'APNCTHfrJ8ZfkWMD8WWSrTyTyAaNFwd65k';
    }
    FootComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'foot',
            template: __webpack_require__("../../../../../src/app/Foot/foot.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Foot/foot.component.css")]
        })
    ], FootComponent);
    return FootComponent;
}());



/***/ }),

/***/ "../../../../../src/app/QRCodeContainer/PrivateKeyInput/privatekeyinput.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "textarea {\r\n  width: 300px;\r\n  resize: none;\r\n  padding: 12px 20px;\r\n  box-sizing: border-box;\r\n  border: 2px solid #ccc;\r\n  border-radius: 4px;\r\n  background-color: #f8f8f8;\r\n  height:80px;\r\n  margin: 10px;\r\n}\r\n\r\n#buttons {\r\n  width: 300px;\r\n  margin: 0px 10px;\r\n}\r\n\r\n#printBtn {\r\n  position: relative;\r\n  float: right;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/QRCodeContainer/PrivateKeyInput/privatekeyinput.component.html":
/***/ (function(module, exports) {

module.exports = "<textarea wrap=\"soft\" [(ngModel)]=\"privateKey\"\r\n          placeholder=\"Input your private key here...\"></textarea>\r\n\r\n<div id=\"buttons\">\r\n  <input class=\"btn\" (click)=\"submitPrivateKey()\" type=\"submit\" value=\"Generate QR\">\r\n  <input class=\"btn\" id=\"printBtn\" (click)=\"print()\" type=\"submit\" value=\"Print\">\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/QRCodeContainer/PrivateKeyInput/privatekeyinput.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PrivateKeyInputComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrivateKeyInputComponent = (function () {
    function PrivateKeyInputComponent() {
        this.privateKey = '';
        this.privateKeyChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
    }
    PrivateKeyInputComponent.prototype.ngOnInit = function () {
        this.privateKey = '';
    };
    PrivateKeyInputComponent.prototype.submitPrivateKey = function () {
        console.log('submitted new private key.');
        this.privateKeyChanged.emit(this.privateKey);
    };
    PrivateKeyInputComponent.prototype.print = function () {
        window.print();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], PrivateKeyInputComponent.prototype, "privateKeyChanged", void 0);
    PrivateKeyInputComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'privatekeyinput',
            template: __webpack_require__("../../../../../src/app/QRCodeContainer/PrivateKeyInput/privatekeyinput.component.html"),
            styles: [__webpack_require__("../../../../../src/app/QRCodeContainer/PrivateKeyInput/privatekeyinput.component.css")]
        })
    ], PrivateKeyInputComponent);
    return PrivateKeyInputComponent;
}());



/***/ }),

/***/ "../../../../../src/app/QRCodeContainer/QRCodeDisplay/qrcodedisplay.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\nqrClass {\r\n    height: 200px;\r\n    width: 200px;\r\n    min-height: 200px;\r\n    max-width: 200px;\r\n    background: yellow;\r\n    vertical-align: center;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/QRCodeContainer/QRCodeDisplay/qrcodedisplay.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NgxQRCodeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var QRCode = __webpack_require__("../../../../qrcode/lib/browser.js");
var NgxQRCodeComponent = (function () {
    function NgxQRCodeComponent(renderer) {
        this.renderer = renderer;
        this.elementType = 'url';
        this.value = 'https://www.techiediaries.com';
        this.version = '';
        this.errorCorrectionLevel = 'M';
    }
    NgxQRCodeComponent.prototype.ngOnChanges = function () {
        this.createQRCode();
    };
    NgxQRCodeComponent.prototype.toDataURL = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            QRCode.toDataURL(_this.value, { version: _this.version, errorCorrectionLevel: _this.errorCorrectionLevel }, function (err, url) {
                if (err) {
                    console.error(err);
                    reject(err);
                }
                else {
                    //console.log(url);
                    resolve(url);
                }
            });
        });
    };
    NgxQRCodeComponent.prototype.toCanvas = function (canvas) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            QRCode.toCanvas(canvas, _this.value, { version: _this.version, errorCorrectionLevel: _this.errorCorrectionLevel }, function (error) {
                if (error) {
                    //console.error(error);
                    reject(error);
                }
                else {
                    //console.log('success!');
                    resolve("success");
                }
            });
        });
    };
    NgxQRCodeComponent.prototype.renderElement = function (element) {
        for (var _i = 0, _a = this.qrcElement.nativeElement.childNodes; _i < _a.length; _i++) {
            var node = _a[_i];
            this.renderer.removeChild(this.qrcElement.nativeElement, node);
        }
        this.renderer.appendChild(this.qrcElement.nativeElement, element);
    };
    NgxQRCodeComponent.prototype.createQRCode = function () {
        var _this = this;
        if (!this.value) {
            return;
        }
        ;
        var element;
        //console.log("QR Encoding " + this.value);
        switch (this.elementType) {
            case 'canvas':
                element = this.renderer.createElement('canvas');
                this.toCanvas(element).then(function (v) {
                    //console.log(v);
                    _this.renderElement(element);
                }).catch(function (e) {
                    console.error(e);
                });
                break;
            case 'url':
            case 'img':
            default:
                element = this.renderer.createElement('img');
                this.toDataURL().then(function (v) {
                    //console.log(v);
                    element.setAttribute("src", v);
                    _this.renderElement(element);
                }).catch(function (e) {
                    console.error(e);
                });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('qrc-element-type'),
        __metadata("design:type", String)
    ], NgxQRCodeComponent.prototype, "elementType", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('qrc-value'),
        __metadata("design:type", Object)
    ], NgxQRCodeComponent.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('qrc-version'),
        __metadata("design:type", String)
    ], NgxQRCodeComponent.prototype, "version", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('qrc-errorCorrectionLevel'),
        __metadata("design:type", String)
    ], NgxQRCodeComponent.prototype, "errorCorrectionLevel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])('qrcElement'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], NgxQRCodeComponent.prototype, "qrcElement", void 0);
    NgxQRCodeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'ngx-qrcode',
            template: "<div id=\"enClosing\">\n              <div #qrcElement class=\"qrClass\" style=\"height:180px; width: 180px;\"></div>\n             </div>",
            styles: [__webpack_require__("../../../../../src/app/QRCodeContainer/QRCodeDisplay/qrcodedisplay.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Renderer2 */]])
    ], NgxQRCodeComponent);
    return NgxQRCodeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/QRCodeContainer/qrcodecontainer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table tbody tr th div {\r\n  position: absolute;\r\n  left: 230px;\r\n  top: 90px;\r\n  text-align: left;\r\n}\r\n\r\n#container {\r\n  width: 600px;\r\n  height: 200px;\r\n}\r\n\r\n.testData {\r\n  color: grey;\r\n  text-decoration: line-through;\r\n}\r\n\r\n\r\n.testImgContainer {\r\n  position: relative;\r\n  width: 200px;\r\n  height: 300px;\r\n  min-height: 200px;\r\n  min-width: 200px;\r\n}\r\n.testImgContainer .after {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: none;\r\n  color: #FFF;\r\n  background: rgba(0, 0, 0, .6);\r\n}\r\n\r\n@media print {\r\n  privatekeyinput {\r\n    display: none;\r\n  }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/QRCodeContainer/qrcodecontainer.component.html":
/***/ (function(module, exports) {

module.exports = "<table>\r\n<tbody>\r\n  <tr>\r\n    <th>\r\n      <ngx-qrcode *ngIf=\"privateKey.length > 0\" \r\n                  [qrc-value] ='privateKey'\r\n                  qrc-errorCorrectionLevel = \"H\"\r\n                  qrc-element-type='img'>\r\n      </ngx-qrcode>\r\n\r\n\r\n\r\n      <!--testData only-->\r\n      <img style=\"max-width:180px; max-height:180px;\" *ngIf=\"privateKey === undefined || privateKey === null || privateKey.length === 0\" src=\"../assets/screenshot.png\">\r\n    </th>\r\n\r\n    <th>\r\n      <div>\r\n        <p class=\"testData\" *ngIf=\"address === undefined || address === null || address.length === 0\"><strong>Address:</strong> A621bCfRUGxwjEYnNnnam7XoVN9Xqe6PTi</p>\r\n        <p *ngIf=\"address.length > 0\"><strong>Address:</strong> {{address}}</p>\r\n\r\n        <p *ngIf=\"privateKey.length > 0\"><strong>Private Key:</strong> {{privateKey}}</p>\r\n        <p class=\"testData\" *ngIf=\"privateKey === undefined || privateKey === null || privateKey === ''\"><strong>Private Key:</strong> kitchen bridge chalk sign jaguar segment company cigar claim squirrel castle spare</p>\r\n      </div>\r\n    </th>\r\n\r\n  </tr>\r\n</tbody>\r\n</table>\r\n\r\n<privatekeyinput (privateKeyChanged)=\"getNotificationOnPrivateKeyChanged($event)\">\r\n</privatekeyinput>"

/***/ }),

/***/ "../../../../../src/app/QRCodeContainer/qrcodecontainer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QRCodeContainerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_asch_service__ = __webpack_require__("../../../../../src/services/asch.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var QRCodeContainerComponent = (function () {
    function QRCodeContainerComponent(aschService) {
        this.aschService = aschService;
        this.privateKey = '';
        this.address = '';
    }
    QRCodeContainerComponent.prototype.getNotificationOnPrivateKeyChanged = function (newPrivateKeyFromChild) {
        console.log('Parent got new event');
        this.privateKey = newPrivateKeyFromChild;
        this.address = this.aschService.getAddres(this.privateKey);
    };
    QRCodeContainerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'qrcodecontainer',
            template: __webpack_require__("../../../../../src/app/QRCodeContainer/qrcodecontainer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/QRCodeContainer/qrcodecontainer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_asch_service__["a" /* AschService */]])
    ], QRCodeContainerComponent);
    return QRCodeContainerComponent;
}());



/***/ }),

/***/ "../../../../../src/app/Tutorial/tutorial.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p {\r\n  font-weight: normal;\r\n  max-width: 500px;\r\n}\r\n\r\n.tutorialImage {\r\n  height: 250px;\r\n  width: auto;\r\n  margin-left: 20px;\r\n}\r\n\r\n#tutorialContainer {\r\n  margin-bottom: 76px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/Tutorial/tutorial.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"tutorialContainer\">\r\n\r\n<h1>Getting started</h1>\r\n<p>After you loaded this site (<a style=\"color:#222222\" href=\"https://github.com/a1300/asch-paperwallet\">a1300.github.io</a>) please disconnect your internet connection to be 100<span>&#37;</span> safe. Please do not enter anywhere on the internet your private key. Trust nobody. Not even me.</p>\r\n<img class=\"tutorialImage\" src=\"../../assets/disconnect.PNG\">\r\n\r\n<br/><br/>\r\n\r\n<h1>Input Private Key</h1>\r\n<p>Then input your private key into the field.</p>\r\n<img class=\"tutorialImage\" src=\"../../assets/input-private-key.PNG\">\r\n\r\n<br/><br/>\r\n\r\n<h1>Generate QR-Code</h1>\r\n<p>Press the button \"Generate QR\" to generate the <strong>QR-Code</strong></p>\r\n<img style=\"max-height:150px;\" class=\"tutorialImage\" src=\"../../assets/click-generate.PNG\">\r\n\r\n<br/><br/>\r\n\r\n<h1>Print QR-Code</h1>\r\n<p>With the \"Print\" button you can print the <strong>QR-Code.</strong></p>\r\n<img class=\"tutorialImage\" src=\"../../assets/print-qr.PNG\">\r\n\r\n<br/><br/>\r\n\r\n<p>After you've printed the paperwallet close the browser and reconnecto to the internet.</p>\r\n\r\n<h1>Thanks for using the Asch-Paperwallet!</h1>\r\n\r\n<!-- <h1>Very safe way</h1>\r\n<p>clone repository https://github.com/a1300/asch-paperwallet </p>\r\n<p>Then cd into asch-paperwallet/paperwallet and run npm install</p>\r\n<p> After that disable your internet connection</p>\r\n<p>run ``ng build target=production``</p>\r\n<p>After that cd into the folder dist</p>\r\n<p>There you can run \"sudo apt-get install http-server\" and then start the http-server with http-server -o</p>\r\n -->\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/Tutorial/tutorial.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TutorialComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TutorialComponent = (function () {
    function TutorialComponent() {
        this.title = 'This is the tutorial';
    }
    TutorialComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'tutorial',
            template: __webpack_require__("../../../../../src/app/Tutorial/tutorial.component.html"),
            styles: [__webpack_require__("../../../../../src/app/Tutorial/tutorial.component.css")]
        })
    ], TutorialComponent);
    return TutorialComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color: #222222;\r\n}\r\n\r\nli {\r\n    float: left;\r\n    padding: 20px;\r\n    color: rgba(255, 255, 255, 0.3);\r\n}\r\n\r\nli:hover {\r\n    background-color: rgba(99, 99, 99, 0.198);\r\n    cursor: pointer;\r\n}\r\n\r\nli p {\r\n    color: #fdcc52;\r\n    text-align: center;\r\n    line-height: 76px;\r\n    height: 76px;\r\n    margin: 0px 15px 0px 15px;\r\n}\r\n\r\n\r\n\r\nfoot {\r\n    position:absolute;\r\n    bottom:0;\r\n    width:100%;\r\n    height:60px;\r\n}\r\n\r\nheader ul li {\r\n    margin: 0;\r\n    padding:0;\r\n    display: block;\r\n\r\n}\r\n\r\n\r\n#titleImage {\r\n    position: relative;\r\n    margin: 20px;\r\n    float: left;\r\n}\r\n\r\n/* drop shadow */\r\nheader {\r\n    box-shadow:         0px 3px 5px rgba(100, 100, 100, 0.49);\r\n}\r\n\r\n\r\n@media print {\r\n    header {\r\n        display: none;\r\n    }\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <header>\r\n    <ul>\r\n      <div routerLink=\"/\">\r\n        <img id=\"titleImage\" src=\"../assets/favicon.ico\" >\r\n      </div>\r\n      <li routerLink=\"/\"><p>{{title}}</p></li>\r\n      <li routerLink=\"tutorial\"><p>Tutorial</p></li>\r\n    </ul>\r\n  </header>\r\n\r\n  <foot></foot>\r\n  \r\n  <router-outlet></router-outlet>\r\n\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Asch-Paperwallet';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_asch_service__ = __webpack_require__("../../../../../src/services/asch.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__QRCodeContainer_QRCodeDisplay_qrcodedisplay_component__ = __webpack_require__("../../../../../src/app/QRCodeContainer/QRCodeDisplay/qrcodedisplay.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__QRCodeContainer_qrcodecontainer_component__ = __webpack_require__("../../../../../src/app/QRCodeContainer/qrcodecontainer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Foot_foot_component__ = __webpack_require__("../../../../../src/app/Foot/foot.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__QRCodeContainer_PrivateKeyInput_privatekeyinput_component__ = __webpack_require__("../../../../../src/app/QRCodeContainer/PrivateKeyInput/privatekeyinput.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Tutorial_tutorial_component__ = __webpack_require__("../../../../../src/app/Tutorial/tutorial.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



//providers

//qr component

//components





//routes

var routes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_6__QRCodeContainer_qrcodecontainer_component__["a" /* QRCodeContainerComponent */] },
    { path: 'tutorial', component: __WEBPACK_IMPORTED_MODULE_9__Tutorial_tutorial_component__["a" /* TutorialComponent */] },
    { path: '**', redirectTo: '/' }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__QRCodeContainer_qrcodecontainer_component__["a" /* QRCodeContainerComponent */],
                __WEBPACK_IMPORTED_MODULE_7__Foot_foot_component__["a" /* FootComponent */],
                __WEBPACK_IMPORTED_MODULE_4__QRCodeContainer_QRCodeDisplay_qrcodedisplay_component__["a" /* NgxQRCodeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__QRCodeContainer_PrivateKeyInput_privatekeyinput_component__["a" /* PrivateKeyInputComponent */],
                __WEBPACK_IMPORTED_MODULE_9__Tutorial_tutorial_component__["a" /* TutorialComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_router__["a" /* RouterModule */].forRoot(routes)
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__services_asch_service__["a" /* AschService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ "../../../../../src/services/asch.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AschService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_asch_js__ = __webpack_require__("../../../../asch-js/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_asch_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_asch_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AschService = (function () {
    function AschService() {
    }
    AschService.prototype.getAddres = function (privateKey) {
        var ppu = __WEBPACK_IMPORTED_MODULE_1_asch_js__["crypto"].getKeys(privateKey).publicKey;
        var address = __WEBPACK_IMPORTED_MODULE_1_asch_js__["crypto"].getAddress(ppu);
        return address;
    };
    AschService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], AschService);
    return AschService;
}());



/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map